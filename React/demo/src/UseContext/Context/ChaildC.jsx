import React, { useContext } from 'react'
import { data } from './ChaildA'

function ChaildC() {

    const {form,setform} = useContext(data)
 
  return (
    <div>
      <h1>Hello Chaild C Compo</h1>
      <h2>Hello This name :{form.name}</h2>
      <h2>Hello This age : {form.age}</h2>
      <h2>hello This course : {form.course}</h2>
      <button onClick={()=>setform({...form,name:"bhavik patel"})}>Chanage name form </button>
      <button onClick={()=>setform({...form,age:form.age+1})}>Age increment</button>
      <button onClick={()=>setform({...form,course:"Full-stack"})}>Full-stack</button>
    
    
    
    </div>


  )
}

export default ChaildC
