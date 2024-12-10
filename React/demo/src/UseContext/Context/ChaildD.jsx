import React, { useContext } from 'react'
import { data } from './ChaildA'

function ChaildD() {
  
    const {name,setname} = useContext(data)
  
    return (
    <div>
      <h1>Hello Chaild D Compo</h1>
      <h2>Hello ..{name}</h2>
      <button onClick={()=>setname("bhavik patel")}>Chnage name`</button>
    </div>
  )
}

export default ChaildD
