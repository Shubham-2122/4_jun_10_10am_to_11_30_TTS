import React from 'react';
import "./style.css"

function Hello2() {


    let cssadd = {
        background : "lightblue",
        color:"red"
    }

  return (
    <div>
      {/* 1) inline 
      2) internal 
      3) external */}

      <h1 style={{background:"blue",color:"red"}}>Hello this inline css</h1>

      <h1 style={cssadd}>Hello This internal css</h1>
      <h2>Hello this external css</h2>
    </div>
  )
}

export default Hello2
