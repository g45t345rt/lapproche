import DisplayCardLinks from 'components/DisplayCardLinks'
import Navigation from 'components/Navigation'
import React from 'react'
import { Route } from 'react-router'
import WellBeing from './WellBeing'

const basePath = '/outils/sante_mentale'

const links = [
  {
    title: "Auto-évaluation de mon bien-être",
    path: `${basePath}/bien_etre`
  },
  {
    title: "Auto-évaluation de ma détresse psychologique",
    path: `${basePath}/detresse_psychologique`
  },
  {
    title: "Auto-évaluation de mes symptômes d’anxiété généralisée",
    path: `${basePath}/anxiete_generalisee`
  },
  {
    title: "Auto-évaluation de mes symptômes dépressifs",
    path: `${basePath}/symptomes_depressifs`
  },
  {
    title: "Auto-évaluation de ma consommation d’alcool",
    path: `${basePath}/consommation_alcool`
  }
]

export default () => {
  return <div className="grid-row">
    <Navigation />
    <h1>
      Les outils pour ma santé mentale
    </h1>
    <p>
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel tortor nec nulla tempus vehicula. Maecenas tempor eros sed ante egestas commodo. Ut interdum faucibus commodo. Fusce eu turpis et nunc sollicitudin luctus sit amet eget ex. Sed interdum dui eget nisl vulputate condimentum.
    </p>
    <DisplayCardLinks links={links} />
  </div>
}