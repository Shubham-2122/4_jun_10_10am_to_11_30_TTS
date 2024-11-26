// porps :- props stand for properits .  we can not change data 
// props ;- one componet to others compo


import React, { Component } from 'react'

export class Class_props extends Component {

    constructor(props) {
        super(props);
        this.data = props  
    }
    render() {
        return (
            <div className='col-md-4' >
                <div className="card" style={{width:"250px"}}>
                    <img src={this.props.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.desc}</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                </div>
            </div>
        )
    }
}

export default Class_props;
