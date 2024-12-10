import React from 'react'
import A from './Props_drlling/A'
import ChaildA from './Context/ChaildA'

function Main_Props() {
  return (
    <div>
      {/* props drrling :-Porps data trsfer one compo to other compo   */}
      {/* <A /> */}



      {/* ContextApi 
      useContext */}
      {/* 1) create Context
      2) Provide 
      3) useContext (cummer) */}
      <ChaildA />

    </div>
  )
}

export default Main_Props
