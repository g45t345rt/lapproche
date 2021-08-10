import React from 'react'

export default (props) => {
  const { columns = [], rows = [] } = props

  return <div className="card-table">
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th>{column}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return <tr>
            <td>{row}</td>
            {columns.map((column, index) => {
              if (index === 0) return
              return <td>
                <input type="radio" name={row} />
              </td>
            })}
          </tr>
        })}
      </tbody>
    </table>
  </div>
}