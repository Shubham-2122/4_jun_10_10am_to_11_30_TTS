import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>Hello D file compo</h1>
      <h2>hello ... {name}</h2>
      <button onClick={()=>setname("Bhavik patel")}>Chnage name</button>
    </div>
  )
}

export default D
