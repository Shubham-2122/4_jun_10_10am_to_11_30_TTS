import React, { Component } from 'react'
import Headersdata from '../Comman/Headersdata'
import Footerdata from '../Comman/Footerdata'

export class LifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            name:"Dhaval",
            age:23
        };
    }

    // mouting phase
    componentDidMount(){
        console.log("Compoenet moute");
    }

    // update phase
    componentDidUpdate(){
        console.log("Component uopdate");
    }

    // not show unmouting
    componentWillUnmount(){
        console.log("Compone unmount");
    }

  render() {
    return (
      <div>
        <Headersdata />
        {/* mouting :- initiale value */}
        {/* updating :- state props */}
        {/* unmouting ;- not change */}
        
        <h1>Hello This LifeCycle</h1>
        <h1>Hello ...{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"het patel"})}>Change name</button>
        <Footerdata />
      </div>
    )
  }
}

export default LifeCycle
