import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from './counterslice'

function Counter2() {

    let counter = useSelector((state) => state.counter.value)

    let dispatch = useDispatch()

    return (
        <div>
            <h1>Counter 2 : {counter}</h1>

            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter2
