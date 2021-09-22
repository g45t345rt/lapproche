const esbuild = require('esbuild')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const { sassPlugin } = require('esbuild-sass-plugin')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')
const http = require('http')
const EventEmitter = require('events')
const aliasPlugin = require('esbuild-plugin-alias')

const argv = yargs(hideBin(process.argv)).argv
const isProduction = argv.env === 'production'

const postCSS = postcss([
  autoprefixer,
  postcssPresetEnv({ stage: 0 })
])

const bundleEmitter = new EventEmitter()
if (!isProduction) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    })

    bundleEmitter.once('rebuild', () => {
      res.write(`event: refresh\ndata: \n\n`)
    })
  })

  server.listen(5645)
}

const watchMode = isProduction ? false : {
  onRebuild(error, result) {
    if (error) console.error('watch build failed:', error)
    else console.log('watch build succeeded:', result)

    bundleEmitter.emit('rebuild')
  }
}

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  minify: isProduction,
  sourcemap: !isProduction,
  platform: 'browser',
  outdir: isProduction ? 'docs' : 'build',
  watch: watchMode,
  loader: {
    '.svg': 'dataurl',
    '.png': 'dataurl',
  },
  plugins: [sassPlugin({
    async transform(source) {
      const { css } = await postCSS.process(source, { from: undefined })
      return css
    }
  }),
  aliasPlugin({
    'hooks': './src/hooks',
    'components': './src/components',
    'pages': './src/pages'
  })]
})