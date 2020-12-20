import React from 'react'
import PropTypes, {object} from 'prop-types'

const Tds = (props) => (
    <div>
        {props.tds.length > 0 && props.tds.map((td, i) => (
            <div className="mt-1" key={td.id || i} data-id={td.id}>
                <input type="checkbox" checked={td.is_done} onChange={() => props.onCheck(td.desc)} />&nbsp;&nbsp;
                <span>{td.desc}</span>&nbsp;&nbsp;
                <button type="button" className="btn btn-secondary" onClick={() => props.tdsDel(td.id)}>Delete</button>
            </div>
        ))}
    </div>
)
Tds.propTypes = {
    tds: PropTypes.arrayOf(object),
    onCheck: PropTypes.func,
    tdsDel: PropTypes.func
}

export default Tds
