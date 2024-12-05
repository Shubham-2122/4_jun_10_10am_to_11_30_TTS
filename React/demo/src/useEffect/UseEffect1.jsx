// useEffect :- function side effect. with depen (optional)[]
// re-redering component [] , with state

// setup: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is added to the DOM, React will run your setup function. After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function.

import React, { useEffect, useState } from 'react'


function UseEffect1() {

    const [count,setcount] = useState(0)


    // 1) without depe 
    // useEffect(() => {
    //     console.log("Without depesices call")
    // })

    // 2) with depeder blank
    // useEffect(()=>{
    //     console.log("Re-reder call")
    //     return()=>{
    //         console.log("Re-reder return call")
    //     }
    // },[])


    // 3) state with useEffect 
    useEffect(()=>{
        console.log("re-reder call it");
        return()=>{
            console.log("reder return call it")
        }
    },[count])

    return (
        <div>
            <h1>Hello ..{count}</h1>
            <button onClick={()=>setcount(count+1)}>Incemenet</button>
        </div>
    )
}

export default UseEffect1
