import React, { createContext, useState } from 'react'
import ChaildD from './ChaildD'
import ChaildC from './ChaildC'

// create
export const data = createContext()

function ChaildA() {

    const[name,setname] = useState('Het patel')
    const [form,setform] = useState({
        name:"dhaval",
        age:21,
        course:"Front-end"
    })

  return (
    <div>
      <h1>Hello Chaild A Compo</h1>

      <data.Provider value={{name,setname,form,setform}} >

       <ChaildD />
       <ChaildC />
      </data.Provider>

    </div>
  )
}

export default ChaildA
