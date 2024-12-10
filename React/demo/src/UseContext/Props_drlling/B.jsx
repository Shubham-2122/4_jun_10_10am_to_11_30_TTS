import React from 'react'
import C from './C'

function B({name,setname}) {
  return (
    <div>
      <h1>Hello B Compo</h1>
      <h2>hello ... {name}</h2>
      <C name={name} setname={setname} />
    </div>
  )
}

export default B
