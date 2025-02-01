import React, { useRef } from 'react'
import Headersdata from '../Layout/Comman/Headersdata'

function UseRef() {

    const ref = useRef()

    const getfoucs =()=>{
        ref.current.focus()
        ref.current.style.color = "red";
        ref.current.style.background = "black"
    }

    return (
        <div>
            <Headersdata />
            {/* useRef :- as referc ;- but Real dom effect */}
            {/* Re-redering stop karne try */}

            <h1>UseRef Hooks</h1>
            <input type="text" ref={ref}  placeholder='Enter your name' name="" id="" />
            <button onClick={getfoucs}>Click me Focus</button>

        </div>
    )
}

export default UseRef
