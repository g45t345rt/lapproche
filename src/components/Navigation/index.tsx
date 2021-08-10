import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const links = {
  "/": "Accueil",
  "/outils": "Outils",
  "/outils/sante_mentale": "Santé mentale",
  "/outils/sante_mentale/bien_etre": "Auto-évaluation de mon bien-être"
}

// TODO REFORMAT
const createPaths = (path) => {
  const split = path.split('/')

  const paths = []
  let lead = ""
  for (var i = 0; i < split.length; i++) {
    if (lead != "/") lead += "/"
    lead += split[i]
    paths.push(lead)
  }

  return paths
}

export default () => {
  const location = useLocation()
  const paths = createPaths(location.pathname)
  return <div className="navigation">
    {paths.map((path, i) => {
      if (i === paths.length-1) return <span>{links[path]}</span>
      return <Link to={path}>{links[path]}</Link>
    }).reduce((p, c) => [p, ' / ', c])}
  </div>
}
