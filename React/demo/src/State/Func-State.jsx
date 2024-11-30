// hooks :-  pre inbuilt Always Function Compo use. Do not use for class.
// 1) useState() :- [initial value,setinital] = useState("name")
// useState declares a state variable that you can update directly. 

import React, { useState } from 'react'
import Imge from './Imge';


function Func_State() {

    // define vatribale and state change 
    const [name,setname] = useState("het patel");
    const [count,setcount] = useState(0);

    const [isImage,setisImage] = useState(true)

    // const chnagename=()=>{
    //     setname("Varaj patel")
    // }

  return (
    <div>
      <h1>hello function state</h1>
      <h1>Hello... {name}</h1>
      {/* <button onClick={chnagename}>Chnage name</button> */}
      <button onClick={()=>setname("Bhavik patel")}>Change name</button>

      <h1>hello Count :- {count}</h1>
      <button className='btn btn-primary' onClick={()=>setcount(count + 1)}>Incemenet</button>
      <button className='btn btn-danger' onClick={()=>setcount(count - 1)}>Decrment</button>
      <button className='btn btn-success' onClick={()=>setcount(0)}>Zero</button>
      {/* <button className='btn btn-success' onClick={()=>setcount(count * 0)}>Zero</button> */}
    
    <br />
    <br />
        <button onClick={()=>setisImage(false)} > hide </button>
        <button onClick={()=> setisImage(true)}>Show</button>
        <button onClick={()=> setisImage(!isImage)}>Toggle</button>
        {isImage ? <Imge /> : false}
    </div>
  )
}

export default Func_State
