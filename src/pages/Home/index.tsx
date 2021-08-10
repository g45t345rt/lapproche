import React from 'react'
import { Link } from 'react-router-dom'

import SavedItem from './SavedItem'

export default () => {
  return <div className="grid-row grid-center">
    <div className="logo_lapproche" />
    <h2 style={{ maxWidth: 600 }} className="text-center">
      Outils pour soutenir la santé mentale des jeunes
      dont un parent à un trouble mental.
    </h2>
    <Link to="/outils" className="home-blue-button">
      <i className="icon-tools icon-white" />
      <span className="font12">Commencer à utiliser les outils</span>
    </Link>
    <div className="divider" style={{ width: 100 }} />
    <div className="grid-row">
      <div className="text-center font12">Les dernières sauvegardes</div>
      <div className="card-dim grid-column grid-center small-block">
        <i className="icon-info" />
        <div>Vous avez aucune sauvegarde pour l'instant.</div>
      </div>
      <div className="grid-row">
        <SavedItem />
        <SavedItem />
        <SavedItem />
      </div>
      <button className="dim-button">Supprimer les sauvegardes</button>
    </div>
  </div>
}