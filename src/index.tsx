import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from './app'

const Client = () => {
  return <HashRouter>
    <App />
  </HashRouter>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Client />, rootElement)

if (process.env.NODE_ENV === 'development') {
  // Connect to our own onBuild event source page refresh 
  const evtSource = new EventSource('http://localhost:5645')

  evtSource.addEventListener('refresh', () => {
    console.log('refresh')
    window.location.reload()
  })
}
