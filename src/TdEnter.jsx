import React from 'react'

const TdEnter = (props) => (
  <div>
    <label htmlFor="tdinp">
      <input type="text" id="tdinp" onKeyUp={props.onKeyUp} />
    </label>
  </div>
)
export default TdEnter
