import React from 'react'

const Tds = (props) => (
  <div>
    {props.tds.map(td => (
      <div className="mt-1" key={td.desc}>
        <input type="checkbox" checked={td.is_done} onChange={() => props.onCheck(td.desc)} />&nbsp;&nbsp;
        <span>{td.desc}</span>&nbsp;&nbsp;
        <button type="button" className="btn btn-secondary" onClick={() => props.tdsDel(td.desc)}>Delete</button>
      </div>
    ))}
  </div>
)

export default Tds
