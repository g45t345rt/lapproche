import React from 'react'

import dayjs from 'dayjs'

export default () => {
  return <div className="card grid-row">
    <div className="grid-column grid-center">
      <div>
        <div>0 sur 14 outils complétées</div>
        <div className="sub-text">{dayjs(new Date()).format('LLL')}</div>
      </div>
      <div className="icon-arrow-right icon-hover-blue icon-button" />
      <div className="icon-delete icon-hover-red icon-button" />
    </div>
    <div className="progress">
      <div className="progress-value" style={{ width: '50%' }} />
    </div>
  </div>
}