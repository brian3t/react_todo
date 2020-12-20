import React, {useState} from 'react'
import j$ from 'jquery'
import TdEnter from "./TdEnter"
import Tds from "./Tds"
import {useGet, useMutate} from "restful-react"

function Example(){
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:  useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Counter({initialCount}){
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

const TodoDash = (props) => {
  /*const state = {
      tds: [{desc: 'ttodo 1', is_done: false}, {desc: 'ttodo 2', is_done: true}]
  }*/
  const {mutate: del, loading} = useMutate({
    verb: "DELETE",
    path: `todo`,
  })
  let {data: tds} = useGet({path: 'todo'})
  if (tds === null || tds.length === 0) {
    tds = [{desc: "first", is_done: false}]
  }

  const tdEnterOnKeyUp = (e) => {
    if (e.keyCode !== 13) {
      return
    }

    const new_desc = e.target.value
    // state.tds = [{desc: new_desc, is_done: false}, ...state.tds]
    j$('#tdinp').val('').text('')
  }
  const tdsOnCheck = (desc) => {
    let new_tds = tds

    let td_index = new_tds.findIndex(td => (td.desc === desc))
    if (td_index < 0) {
      alert('bad key')
      return false
    }
    new_tds[td_index].is_done = ! (new_tds[td_index].is_done)
    tds = new_tds
  }
  const tdsDel = (desc) => {
    // state.tds = state.tds.filter(td => (td.desc !== desc))
  }

  return (
    <div>
      Add new todo
      <TdEnter onKeyUp={tdEnterOnKeyUp} />
      <Tds tds={tds} onCheck={tdsOnCheck} tdsDel={del} />
    </div>
  )
}

export default TodoDash
