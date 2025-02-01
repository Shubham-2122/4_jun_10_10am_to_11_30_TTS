import React, { useReducer } from 'react'
import Headersdata from '../Layout/Comman/Headersdata'


let initinalstate = 0

export function reducer(state,action){
    switch (action) {
        case 'Increment':
            return state + 1;
            break;
        case "Decrement":
            return state - 1;
            break;
        case "zero":
            return initinalstate;
    
        default:
            return state;
    }
}



function Usereducer_fun() {

    const[count,dispatch] = useReducer(reducer,initinalstate)

  return (
    <div>
        <Headersdata />
      <h1>hello Function compo</h1>
      {/* useState ;- simple state  */}
      {/* useReducer :- state complex logic/state  */}

      <h1>Hello count :- {count}</h1>

      <button onClick={()=>dispatch('Increment')} className='btn btn-success'>Increment</button>
      <button onClick={()=>dispatch('Decrement')} className='btn btn-danger'>Decrement</button>
      <button onClick={()=>dispatch('zero')} className='btn btn-primary'>zero</button>
    </div>
  )
}

export default Usereducer_fun
