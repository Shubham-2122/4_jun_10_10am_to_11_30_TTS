import React, { useEffect, useState } from 'react'
import Aheader from '../Acooman/Aheader';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function AcarlistingMange() {

    const [carlisting, setcarlisting] = useState([]);

    useEffect(() => {
        getdata()
    }, [])

    // read data
    const getdata = async () => {
        const res = await axios.get("http://localhost:3000/carlisting")
        // console.log(res.data)
        setcarlisting(res.data)
    }

    // delete function
    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/carlisting/${id}`)
        // console.log(res.data)
        getdata()
    }

    const viewdata = async(id)=>{
        const res =await axios.get(`http://localhost:3000/carlisting/${id}`)
        console.log(res.data)
    }

    // model id open closed
    const [caredit, setcaredit] = useState(null)
    // update id puri data
    const [carediting, setcareding] = useState({
        id: "",
        title: "",
        carimg: "",
        MFG: "",
        type: "",
        Km: "",
        price: ""
    })

    const onsavedata = (edited) => {
        setcaredit(edited)
        setcareding(edited)
    }

    const onupdate= async(e)=>{
        e.preventDefault();

        try {
            const res = await axios.put(`http://localhost:3000/carlisting/${carediting.id}`,carediting)
            // console.log(res.data)
            getdata()
            setcaredit(null)

            
        } catch (error) {
            console.log("data error",error)
        }
    }




    return (
        <div>
            <Aheader />

            <div className="container">
                <h1 className='text-center py-4'>Hello Car Listing management</h1>
                <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>MFG</th>
                            <th scope='col'>type</th>
                            <th scope='col'>Km</th>
                            <th scope='col'>Price</th>
                            <th scope='col' className='text-center'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            carlisting && carlisting.map((car, index) => {
                                console.log(car)
                                const { id, title, carimg, MFG, type, Km, price } = car
                                return (
                                    <tr key={index}>
                                        <td>{id}</td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src={carimg}
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>{title}</p>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{MFG}</p>
                                        </td>
                                        <td>
                                            {/* <MDBBadge color='success' pill>
                                                Active
                                            </MDBBadge> */}
                                            <p className='fw-normal mb-1'>{type}</p>
                                        </td>
                                        <td>{Km}</td>
                                        <td>{price}</td>
                                        <td className='text-center'>
                                            <MDBBtn color='primary' onClick={()=>viewdata(car.id)} className='' rounded size='sm'>
                                                View
                                            </MDBBtn>
                                            <MDBBtn onClick={() => onsavedata(car)} color='success' className='mx-1' rounded size='sm'>
                                                Edit
                                            </MDBBtn>
                                            <MDBBtn color='danger' onClick={() => deletedata(car.id)} rounded size='sm'>
                                                Delete
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </MDBTableBody>
                </MDBTable>
                {
                    caredit && (
                        <div className="container-fluid py-5">
                            <div className="container pt-5 pb-3">
                                <h1 className="display-4 text-uppercase text-center mb-5">Car Lisiting product Update</h1>
                                <div className="row">
                                    <div className="col-lg-12 mb-2">
                                        <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                            <form >
                                                <div className="row">
                                                    <div className="col-6 form-group">
                                                        <input name='title' value={carediting.title} onChange={(e)=>setcareding({...carediting,title:e.target.value})} type="text" className="form-control p-4" placeholder="Your car name" required="required" />
                                                    </div>
                                                    <div className="col-6 form-group">
                                                        <input name='carimg' type="url" value={carediting.carimg} onChange={(e)=>setcareding({...carediting,carimg:e.target.value})} className="form-control p-4" placeholder="Your car Images" required="required" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 form-group">
                                                        <input type="text" name='MFG' value={carediting.MFG} onChange={(e)=>setcareding({...carediting,MFG:e.target.value})} className="form-control p-4" placeholder="your car MFG" required="required" />
                                                    </div>
                                                    <div className="col-6 form-group">
                                                        <input type="text" name='Km' value={carediting.Km} onChange={(e)=>setcareding({...carediting,Km:e.target.value})} className="form-control p-4" placeholder="your car Km" required="required" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="">
                                                        <select name='type' value={carediting.type} onChange={(e)=>setcareding({...carediting,type:e.target.value})} className="custom-select px-4 mb-3" style={{ height: 50 }}>
                                                            <option hidden>Select Car type</option>
                                                            <option value="Auto">Auto</option>
                                                            <option value="Manual">manual </option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name='price' value={carediting.price} onChange={(e)=>setcareding({...carediting,price:e.target.value})} className="form-control p-4" placeholder="your car Price" required="required" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <button className="btn btn-primary py-3 px-5 " onClick={onupdate} type="submit">List car Update</button>
                                                    <button className="btn btn-primary py-3 px-5 mx-5" type="submit" onClick={()=>setcaredit(null)}>cancle</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AcarlistingMange
