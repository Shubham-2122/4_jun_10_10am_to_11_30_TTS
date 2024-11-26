// react jsx:- javascript syntax xml/extension :- Direct html retrun

// rfce 
// rfc 

// rafc 
// rafce


import React from 'react'

function Hello() {

    let name1 = "bhavik patel"

    let person = {
        name : "swpnil  patel",
        age:21,
        course:"Front-end"
    }

    let list = <ol>
        <li>one</li>
        <li>one</li>
        <li>one</li>
        <li>one</li>
    </ol>

    let number1 = 5 + 5

  return (
    <div>
      <h1>Hello this jsx compo</h1>

      <h2>hello...{name1}</h2>

      <p>helloo.... {person.name}</p>

      {list}
      <h1>{number1}</h1>
    </div>
  )
}

export default Hello
