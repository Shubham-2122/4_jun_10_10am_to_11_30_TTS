import React from 'react'
import D from './D'

function C({name,setname}) {
  return (
    <div>
        <h1>Hello C compo</h1>
        <h2>hello C file ... {name}</h2>
        <D name={name} setname={setname} />
    </div>
  )
}

export default C
