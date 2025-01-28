import React, { useEffect, useState } from 'react'
import Header from '../Coaman/Header'
import Footer from '../Coaman/Footer'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Loginpage() {

    const redirect = useNavigate()

      useEffect(()=>{
            if(localStorage.getItem("userid")){
                redirect("/")
            }
        })

    const [users,setusers] = useState({
        email:"",
        password:""
    })

    const getchange =(e)=>{
        setusers({
            ...users,
            [e.target.name]:e.target.value
        })
        console.log(users)
    }

    const hadnlesubmit =async(e)=>{
        e.preventDefault();

        const {email,password} = users

        if(!email.trim() || !password.trim()){
            console.log("User Email and password Field First")
            toast.error("User Email and password Field First")
            return false
        }

        try {

            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)
            
            // email
            if(res.data.length == 0){
                console.log("Email Does not match..!")
                toast.error("Email Does not match..!");
                return false;
            }

            const us = res.data[0]

            if(us.password != password){
                console.log("Password Does not match")
                toast.error("Password Does not match");
                return false
            }

            console.log("Successfully")

            localStorage.setItem("userid",us.id)
            localStorage.setItem("username",us.name)
            toast.success("User login succesfully")
            redirect("/")
            setusers({
                email:"",
                password:""
            })


        } catch (error) {
            console.log("Api data not Found");
            toast.error("Api data not Found");
        }
    }


    return (
        <div>
            {/* <Header /> */}
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                <form action="" onSubmit={hadnlesubmit}>
                    <MDBInput wrapperClass='mb-4' value={users.email} name='email' onChange={getchange} label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' value={users.password} name='password' onChange={getchange} label='Password' id='form2' type='password' />

                    <div className="d-flex justify-content-between mx-3 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4">Sign in</MDBBtn>
                </form>

                <div className="text-center">
                    <p>Not a member? <Link to="/register">Register</Link></p>
                    <p>or sign up with:</p>

                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>

                    </div>
                </div>

            </MDBContainer>
            <Footer />
        </div>
    )
}

export default Loginpage
