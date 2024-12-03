import React, { useState } from 'react'

function Func2() {
    const [data,setdata] = useState({
        name:"Dhaval",
        count:0
    })


    const Incemenet=()=>{
        setdata({
            ...data,
            count : data.count + 1
        })
    }
  
    return (
    <div>

        {/* {console.log(data)} */}
        <h1>hello. {data.name}</h1>
        <button onClick={()=>setdata({...data,name:"varj patel"})}>Chnage name</button>
        <h1>count :- {data.count}</h1>

        <button onClick={Incemenet}>Incemenet</button>

        <button onClick={()=>setdata({...data,count : data.count - 1})}>Dencemenet</button>
        <button onClick={()=>setdata({...data,count : 0})}>Zero</button>
    </div>
  )
}

export default Func2
