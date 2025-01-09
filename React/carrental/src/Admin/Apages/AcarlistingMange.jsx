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
        console.log(res.data)
        setcarlisting(res.data)
    }

    // delete function
    const deletedata = async(id)=>{
        const res = await axios.delete(`http://localhost:3000/carlisting/${id}`)
        console.log(res.data)
        getdata()
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
                                const {id,title,carimg,MFG,type,Km,price} = car
                                return (
                                    <tr>
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
                                            <MDBBtn color='primary' className='' rounded size='sm'>
                                                View
                                            </MDBBtn>
                                            <MDBBtn color='success' className='mx-1' rounded size='sm'>
                                                Edit
                                            </MDBBtn>
                                            <MDBBtn color='danger' onClick={()=>deletedata(car.id)} rounded size='sm'>
                                                Delete
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    )
}

export default AcarlistingMange
