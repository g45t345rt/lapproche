import React from 'react'
import { useHistory } from 'react-router'

import ProgressItem from './ProgressItem'

export default (props) => {
  const { links } = props
  const history = useHistory()

  return <div className="grid-row">
    {links.map((tool) => {
      const { title, path, description } = tool
      return <ProgressItem key={path} title={title} description={description} onClick={() => {
        history.push(path)
      }} />
    })}
  </div>
}