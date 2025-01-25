import React, { useEffect, useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Alogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("adminid")){
            redirect("/dashboard")
        }
    })

    const [admin,setadmin] = useState({
        email:"",
        password:""
    })

    const getchange =(e)=>{
        setadmin({
            ...admin,
            [e.target.name]:e.target.value
        })
        console.log(admin)
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();

        const {email,password} = admin

        // Admin ematy data
        if(!email.trim() || !password.trim()){
            console.log("Email and password filed first...!")
            toast.error("Email and password filed first...!")
            
            return false
        }

        try {

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)

            // email match 
            if(res.data.length == 0){
                console.log("Email does not match")
                toast.error("Email does not match")
                return false;
            }

            const ad = res.data[0]
            // console.log(ad)
            if(ad.password != password){
                console.log("password does not match")
                toast.error("password does not match")
                return false
            }

           
            localStorage.setItem("adminid",ad.id)
            localStorage.setItem("name",ad.name)
            console.log("login successfully..")
            toast.success("admin login successfully..")
            redirect("/dashboard")



        } catch (error) {
            console.log("Api admin data not found",error)
        }

    }


    return (
        <div>
            <div className="container">
                <MDBContainer fluid className="p-3 my-5 h-custom">

                    <MDBRow>

                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                        </MDBCol>

                        <MDBCol col='4' md='6'>

                            <form action="" onSubmit={handlesubmit}>
                                     

                            <MDBInput name='email' value={admin.email}  onChange={getchange} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput name='password' value={admin.password} onChange={getchange} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                            <div className="d-flex justify-content-between mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <div className='text-center text-md-start mt-4 pt-2'>
                                <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
                              
                            </div>
                            </form>

                        </MDBCol>

                    </MDBRow>

                  

                </MDBContainer>
            </div>
        </div>
    )
}

export default Alogin
