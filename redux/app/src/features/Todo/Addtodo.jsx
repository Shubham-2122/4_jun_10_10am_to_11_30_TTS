import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo } from './todoSlice';

function Addtodo() {


    const [adddata,setadddata] = useState()
  
    // let todo = useSelector((state)=>state.todos.todos);

    let dispatch = useDispatch()
    
    return (
    <div>
      <input type="text"  value={adddata} onChange={(e)=>setadddata(e.target.value)} /> 
      <button onClick={()=>dispatch(addtodo(adddata))}>addtodo</button>
    </div>
  )
}

export default Addtodo
