import React from 'react'
import classnames from 'classnames'

import './index.sass'

export default (props) => {
  const { steps, currentStep } = props
  return <div className="grid-column">
    {Array.from({ length: steps }).map((_, index) => {
      const classes = classnames('progress-steps', { 'done': index < currentStep })
      return <div className={classes} />
    })}
  </div>
}