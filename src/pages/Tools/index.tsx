import React from 'react'

import Navigation from 'components/Navigation'
import DisplayCardLinks from 'components/DisplayCardLinks'

const basePath = '/outils'
const links = [
  {
    title: 'Ma santé mentale',
    path: `${basePath}/sante_mentale`,
  },
  {
    title: 'Gestion du stress et des émotions',
    path: `${basePath}/stress_emotions`,
  },
  {
    title: 'Mon réseau de soutien',
    path: `${basePath}/reseau_soutien`,
  },
  {
    title: 'Équilibre entre prendre soin de moi et aider mon parent',
    path: `${basePath}/aider_mon_parent`,
  },
  {
    title: 'Communiquer avec mon parent',
    path: `${basePath}/communiquer_parent`,
  },
  {
    title: 'Japprends à me connaitre',
    path: `${basePath}/apprendre_sur_moi`,
  },
  {
    title: 'Transition vers lage adulte',
    path: `${basePath}/age_adulte`,
  }
]

export default () => {
  return <div className="grid-row">
    <Navigation />
    <h1>
      Voici des outils qui on été suggérés par des jeunes
      pour des jeunes comme toi qui font face à des difficultés.
    </h1>
    <div className="card-info font09">
      <div className="bold">NOTE</div>
      <div>
        C'est ton outil à toi, alors utilise-le comme tu le désires.
        Tu n'es pas obligé de le remplir au complet si tu n'en as pas envie.
        Tu peux même lire les énoncés sans les remplir si c'est ce dont
        tu as besoin.
      </div>
    </div>
    <h2>
      Je t'invite à selectionner les onglets selon ce qui t'intéresse.
    </h2>
    <DisplayCardLinks links={links} />
  </div>
}
