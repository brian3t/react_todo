import React from 'react'
import PropTypes from "prop-types"

const TdEnter = (props) => (
    <div>
        <label htmlFor="tdinp">
            <input type="text" id="tdinp" onKeyUp={props.onKeyUp} />
        </label>
    </div>
)
TdEnter.propTypes = {
    onKeyUp: PropTypes.func
}
export default TdEnter
