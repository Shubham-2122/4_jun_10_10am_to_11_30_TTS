import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetodo } from './todoSlice'

function Todolist() {

    let todo = useSelector((state)=>state.todos.todos)

    console.log(todo)

    let dispatch = useDispatch()

  return (
    <div>
      <ul>
        {
            todo && todo.map((item,index)=>{
                return(
                    <li key={index}>{item}
                        <button onClick={()=>dispatch(removetodo(index))}>Delete</button>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Todolist
