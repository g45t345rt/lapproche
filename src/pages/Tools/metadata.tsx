import MentalHealth from './MentalHealth/WellBeing'

export const tools = [
  {
    title: 'Ma santé mentale',
    path: '/sante_mentale',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla tempus tristique neque cursus auctor. 
      Nam quam arcu, posuere et vulputate quis, sagittis sit amet leo. 
      Proin eu maximus nibh.
    `,
    tools: [
      {
        title: "Auto-évaluation de mon bien-être",
        path: "/bien_etre",
        component: MentalHealth
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
  },
  {
    title: 'Gestion du stress et des émotions',
    path: '/stress_emotions',
    tools: [
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
    tools: [
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
    tools: [
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
    tools: [
      {
        title: "Auto-évaluation de ma capacité à communiquer",
        path: "/capacite_communiquer"
      }
    ]
  },
  {
    title: 'Japprends à me connaitre',
    path: '/apprendre_sur_moi',
    tools: [
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
    tools: [
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