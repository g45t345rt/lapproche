import React from 'react'
import { Switch, Route } from 'react-router'
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

import 'normalize.css'
import './styles/index.sass'

import Home from 'pages/Home'
import Tools from 'pages/tools'
import NotFound from 'pages/NotFound'
import WellBeing from 'pages/tools/MentalHealth/WellBeing'
import { renderRoutes, routes } from './routes'
import MentalHealth from 'pages/Tools/MentalHealth'

const anim = {
  atEnter: { opacity: 0 },
  atLeave: { opacity: 0 },
  atActive: { opacity: 1 },
  className: "page-switch"
}

export default () => {
  return <div>
    <AnimatedSwitch {...anim}>
      <Route path="/" exact component={Home} />
      <Route path="/outils" exact component={Tools} />
      <Route path="/outils/sante_mentale" exact component={MentalHealth} />
      <Route path="/outils/sante_mentale/bien_etre" exact component={WellBeing} />
      <Route component={NotFound} />
    </AnimatedSwitch>
  </div>
}