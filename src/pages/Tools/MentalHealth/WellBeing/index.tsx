import React from 'react'
import TableSelect from 'components/TableSelect'

import { titles, choices } from './metadata'
import Navigation from 'components/Navigation'

export default () => {
  return <div className="grid-row">
    <Navigation />
    <h1>Auto-évaluation de mon bien-être</h1>
    <p>
      Voici un outil en cinq points provenant de l’OMS qui te permettra d’évaluer ton bien-être.
      Veuillez indiquer, pour chacune des cinq affirmations,
      laquelle se rapproche le plus de ce que vous avez ressenti
      au cours des deux dernières semaines. Notez que le chiffre est
      proportionnel au bien-être.
    </p>
    <div className="card-dim font09 grid-column">
      <i className="icon-notes" />
      <p>
        Si vous vous êtes senti(e) bien et de bonne humeur plus de la moitié
        du temps au cours des deux dernières semaines, cochez la case 3.
      </p>
    </div>
    <TableSelect
      columns={["Au cours des 2 dernières semaines…", ...choices]}
      rows={titles}
    />
    <div className="card grid-row">
      <h2>Interprétation des résultats</h2>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Praesent ultrices dui ut orci aliquam, eu fringilla quam egestas.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </div>
    <div className="card grid-row">
      <h2>Mon espace de réflexion</h2>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Praesent ultrices dui ut orci aliquam, eu fringilla quam egestas.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
      <textarea rows={5} placeholder="Écrit ce que tu penses ici..." />
    </div>
  </div>
}
