import React, { Component } from 'react'
import Imge from './Imge';

export class Class_State extends Component {

    constructor(){
        super();
        this.state = {
            count : 0,
            name : "Het patel",
            isImage : true
        }
        
    }

  render() {
    return (
      <div>
        <h1>Hello this State in class</h1>

        {/* class state define this.state */}
        {/* this.setstate data change */}
        <h1>hello count values :- {this.state.count}</h1>
        <button className='btn btn-success' onClick={()=>this.setState({count:this.state.count + 1})}>Increment</button>
        <button onClick={()=>this.setState({count:this.state.count - 1})}>decment</button>
        <button onClick={()=>this.setState({count: 0})}>Zero </button>


        <h1>hello name :- {this.state.name}</h1>

        <button onClick={()=>this.setState({name:"Bhavik patel"})}> change name</button>



        <br />
        <br />

        <button onClick={()=>this.setState({isImage:false})}>Hide</button>
        <button onClick={()=>this.setState({isImage:true})}>Show</button>
        <button>Toggle</button>
        {
            this.state.isImage ? <Imge /> : false
        }

    

      </div>
    )
  }
}

export default Class_State
