import React, { useState } from 'react'
import B from './B'

function A() {

    const [name,setname] = useState("Het patel")

  return (
    <div>
        <h1>Hello A Compo </h1>
        
      <B name={name} setname={setname} />
    </div>
  )
}

export default A
