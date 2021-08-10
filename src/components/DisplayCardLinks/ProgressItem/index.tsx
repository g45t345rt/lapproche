import React from 'react'

export default (props) => {
  const { title, onClick, description } = props
  return <div className="card grid-row">
    <div className="grid-column grid-between">
      <div>
        <div className="font12">{title}</div>
        {description && <p>{description}</p>}
      </div>
      <div onClick={onClick} className="icon-arrow-right icon-hover-blue icon-button" />
    </div>
    <div className="progress">
      <div className="progress-value" style={{ width: `${Math.random() * 100}%` }} />
    </div>
  </div>
}