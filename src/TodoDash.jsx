import React, {Component} from 'react'
import j$ from 'jquery'
import TdEnter from "./TdEnter"
import Tds from "./Tds"

export default class TodoDash extends Component {
  constructor(props){
    super(props)
    this.state = {
      tds: [{desc: 'todo 1', is_done: false}, {desc: 'todo 2', is_done: true}]
    }
  }

  tdEnterOnKeyUp = (e) => {
    if (e.keyCode !== 13) {
      return
    }

    const new_desc = e.target.value
    this.setState({
      tds: [{desc: new_desc, is_done: false}, ...this.state.tds]
    })
    j$('#tdinp').val('').text('')
  }
  tdsOnCheck = (desc) => {
    let new_tds = this.state.tds

    let td_index = new_tds.findIndex(td => (td.desc === desc))
    if (td_index < 0) {
      alert('bad key')
      return false
    }
    new_tds[td_index].is_done = ! (new_tds[td_index].is_done)
    this.setState({
      tds: new_tds
    })
  }
  tdsDel = (desc) => {
    this.setState({
      tds: this.state.tds.filter(td => (td.desc !== desc))
    })
  }

  render = () => (
    <div>
      Add new todo
      <TdEnter onKeyUp={this.tdEnterOnKeyUp} />
      <Tds tds={this.state.tds} onCheck={this.tdsOnCheck} tdsDel={this.tdsDel} />
    </div>
  )

}
