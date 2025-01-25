import React, { useEffect, useState } from 'react'
import Aheader from '../Acooman/Aheader'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function Usermanger() {


    const [user,setuser] = useState([])

    useEffect(()=>{
        getdata()
    },[])

    const getdata=async()=>{
        try {
            const res = await axios.get("http://localhost:3000/users")
            console.log(res.data)
            setuser(res.data)
        } catch (error) {
            console.log("error data",error)
        }
    }

    return (
        <div>
            <Aheader />
            <div className="container">
                <h1></h1>
                <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>email</th>
                            <th scope='col'>phone</th>
                            <th scope='col'>status</th>
                            <th scope='col' className='text-center'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            user && user.map((users,index)=>{
                                return(
                                    <tr>
                                    <td>{users.id}</td>
        
                                    <td>
                                        <p className='fw-normal mb-1'>{users.name}</p>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>{users.email}</p>
                                    </td>
                                    <td>{users.phone}</td>
                                    <td>{users.status}</td>
                                    <td className='text-center'>
                                        <MDBBtn color='primary' className='' rounded size='sm'>
                                            View
                                        </MDBBtn>
                                        <MDBBtn color='danger' rounded size='sm'>
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

export default Usermanger
