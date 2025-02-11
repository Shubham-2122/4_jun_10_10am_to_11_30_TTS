import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, Increment, zero } from './counterslice'

function Counter() {

    const count = useSelector((state) => state.counter.value)

    const dipatch = useDispatch()

  return (
    <div>
      <h1>Hello counter : {count}</h1>
      <button onClick={()=> dipatch(Increment())}>Incremnet</button>
      <button onClick={()=>dipatch(decrement())}>Decrement</button>
      <button onClick={()=>dipatch(zero())}>Zero</button>
    </div>
  )
}

export default Counter
