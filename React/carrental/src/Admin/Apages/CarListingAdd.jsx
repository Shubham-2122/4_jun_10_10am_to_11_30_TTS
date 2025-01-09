import React, { useState } from 'react'
import Aheader from '../Acooman/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CarListingAdd() {

    const redirect = useNavigate()
  
    const [carlist,setcarlist] = useState({
        id:"",
        title:"",
        carimg:"",
        MFG:"",
        type:"",
        Km:"",
        price:""
    })

    // handleing change data
    const onchafrom=(e)=>{
        setcarlist({
            ...carlist,
            // new id
            id: new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
        console.log(carlist)
    }
  
    // form data submit api
    const carsubmit=async(e)=>{
         e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/carlisting",carlist)
            console.log(res.data)
            setcarlist({
                id:"",
                title:"",
                carimg:"",
                MFG:"",
                type:"",
                Km:"",
                price:""
            })
            console.log(carlist)
            redirect("/carmange")
            
        } catch (error) {
            console.log("Api data not found")
        }
    }
  
    return (
        <div>
            <Aheader />
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <h1 className="display-4 text-uppercase text-center mb-5">Car Lisiting product add</h1>
                    <div className="row">
                        <div className="col-lg-12 mb-2">
                            <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                <form onSubmit={carsubmit}>
                                    <div className="row">
                                        <div className="col-6 form-group">
                                            <input value={carlist.title} name='title' onChange={onchafrom} type="text" className="form-control p-4" placeholder="Your car name" required="required" />
                                        </div>
                                        <div className="col-6 form-group">
                                            <input value={carlist.carimg} name='carimg' onChange={onchafrom} type="url" className="form-control p-4" placeholder="Your car Images" required="required" />
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-6 form-group">
                                        <input type="text" value={carlist.MFG} name='MFG' onChange={onchafrom} className="form-control p-4" placeholder="your car MFG" required="required" />
                                    </div>
                                    <div className="col-6 form-group">
                                        <input type="text" value={carlist.Km} name='Km' onChange={onchafrom} className="form-control p-4" placeholder="your car Km" required="required" />
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="">
                                        <select value={carlist.type} name='type' onChange={onchafrom} className="custom-select px-4 mb-3" style={{ height: 50 }}>
                                            <option hidden>Select Car type</option>
                                            <option value="Auto">Auto</option>
                                            <option value="Manual">manual </option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" value={carlist.price} name='price' onChange={onchafrom} className="form-control p-4" placeholder="your car Price" required="required" />
                                    </div>
                                    </div>
                                   
                                    <div>
                                        <button className="btn btn-primary py-3 px-5" type="submit">List car Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarListingAdd
