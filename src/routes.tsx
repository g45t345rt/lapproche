import React from 'react'
import { Route } from 'react-router'

import Home from 'pages/Home'
import Tools from 'pages/tools'
import NotFound from 'pages/NotFound'

import WellBeing from './pages/Tools/MentalHealth/WellBeing'
import DisplayCardLinks from 'components/DisplayCardLinks'

const mentalHealthRoutes = [
  {
    title: "Auto-évaluation de mon bien-être",
    path: "/outils/sante_mentale/bien_etre",
    component: WellBeing
  },
  {
    title: "Auto-évaluation de ma détresse psychologique",
    path: "/detresse_psychologique"
  },
  {
    title: "Auto-évaluation de mes symptômes d’anxiété généralisée",
    path: "/anxiete_generalisee"
  },
  {
    title: "Auto-évaluation de mes symptômes dépressifs",
    path: "/symptomes_depressifs"
  },
  {
    title: "Auto-évaluation de ma consommation d’alcool",
    path: "/consommation_alcool"
  }
]

export const routes = [
  {
    title: "Accueil",
    path: "/",
    component: Home
  },
  {
    title: 'Outils',
    path: '/outils',
    component: Tools,
    routes: [
      {
        title: 'Ma santé mentale',
        path: '/outils/sante_mentale',
        component: () => <DisplayCardLinks routes={mentalHealthRoutes} />,
        routes: mentalHealthRoutes
      },
      {
        title: 'Gestion du stress et des émotions',
        path: '/stress_emotions',
        routes: [
          {
            title: "Auto-évaluation de mes signaux de stress",
            path: "/signaux_stress"
          },
          {
            title: "Auto-évaluation de ma gestion de mes émotions",
            path: "/gestion_emotions"
          },
          {
            title: "Exercice de respiration",
            path: "/exercice_respiration"
          },
          {
            title: "Capsule vidéo de pleine conscience",
            path: "/capsule_pleine_conscience"
          },
          {
            title: "Outil de résolution de problème",
            path: "/resolution_probleme"
          },
          {
            title: "Donne-toi une pause",
            path: "/donne_toi_pause"
          },
          {
            title: "Reconnaît et exprime tes émotions",
            path: "/exprime_emotions"
          },
          {
            title: "Mes stratégies pour traverser les difficultés de la vie",
            path: "/strategies_difficultes_vie"
          },
          {
            title: "Outil pour t’aider avec ton sommeil",
            path: "/aide_sommeil"
          }
        ]
      },
      {
        title: 'Mon réseau de soutien',
        path: '/reseau_soutien',
        routes: [
          {
            title: "Auto-évaluation de mon réseau de soutien",
            path: "/evaluation_reseau_soutien"
          },
          {
            title: "Identification de mon réseau",
            path: "/identification_reseau"
          },
          {
            title: "Agir sur mon réseau",
            path: "/agir_reseau"
          }
        ]
      },
      {
        title: 'Équilibre entre prendre soin de moi et aider mon parent',
        path: '/aider_mon_parent',
        routes: [
          {
            title: "Auto-évaluation de mon degré de parentification",
            path: "/degre_parentification"
          },
          {
            title: "Comment établir de saines limites?",
            path: "/saines_limites"
          },
          {
            title: "Stratégies pour prendre soin de soi",
            path: "/prendre_soin_soi"
          }
        ]
      },
      {
        title: 'Communiquer avec mon parent',
        path: '/communiquer_parent',
        routes: [
          {
            title: "Auto-évaluation de ma capacité à communiquer",
            path: "/capacite_communiquer"
          }
        ]
      },
      {
        title: 'Japprends à me connaitre',
        path: '/apprendre_sur_moi',
        routes: [
          {
            title: "Ma famille et moi",
            path: "/famille_moi"
          },
          {
            title: "Qui suis-je aujourd’hui?",
            path: "/qui_suis_je"
          }
        ]
      },
      {
        title: 'Transition vers lage adulte',
        path: '/age_adulte',
        routes: [
          {
            title: "Mon parcours et mes objectifs",
            path: "/parcours_objectifs"
          },
          {
            title: "Mon logement, mon budget et ma santé",
            path: "/logement_budget_sante"
          },
          {
            title: "Mon sens de l’organisation et mes capacités relationnelles",
            path: "/organisation_capacites_ralationnelles"
          },
          {
            title: "Mon cheminement vers l’âge adulte",
            path: "/cheminement_age_adulte"
          }
        ]
      }
    ]
  },
  {
    title: "Page introuvable",
    component: NotFound
  }
]

export const renderRoutes = (routes) => {
  let _routes = []

  routes.forEach(route => {
    const { routes: subRoutes, path, component } = route
    //const nextPath = `${path}${subPath}`

    if (component) _routes = [..._routes, <Route path={path} exact component={component} />]
    if (subRoutes) _routes = [..._routes, ...renderRoutes(subRoutes)]
  })

  return _routes
}
