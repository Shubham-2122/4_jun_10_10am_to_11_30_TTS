import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import Header from '../Coaman/Header';
import Footer from '../Coaman/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    const redirect = useNavigate()

    const [newuser, setnewuser] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        img: "",
        phone: "",
        status: ""
    })

    const handleonchange = (e) => {
        setnewuser({
            ...newuser,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        })
        console.log(newuser)

    }


    const handlesubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await axios.post(`http://localhost:3000/users`, newuser)
            console.log(res.data)
            setnewuser({
                id: "",
                name: "",
                email: "",
                password: "",
                img: "",
                phone: "",
                status: ""
            })

            redirect("/")

        } catch (error) {
            console.log("Error api data", error)
        }
    }
    return (
        <div>
            {/* <Header /> */}
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>

                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                                <form action=""onSubmit={handlesubmit}>

                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput label='Your Name' name='name' value={newuser.name} onChange={handleonchange} id='form1' type='text' className='w-100' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput label='Your Email' name='email' value={newuser.email} onChange={handleonchange} id='form2' type='email' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput label='Password' name='password' id='form3' value={newuser.password} onChange={handleonchange} type='password' />
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="phone me-3" size='lg' />
                                        <MDBInput label='your Images' name='img' value={newuser.img} onChange={handleonchange} id='form4' type='url' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="phone me-3" size='lg' />
                                        <MDBInput label='your phone number' name='phone' value={newuser.phone} onChange={handleonchange} id='form4' type='tel' />
                                    </div>


                                    <div className='mb-4'>
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                    </div>

                                    <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

                                </form>
                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
            <Footer />
        </div>
    )
}

export default Register
