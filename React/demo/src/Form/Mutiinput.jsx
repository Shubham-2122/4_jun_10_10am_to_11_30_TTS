import React, { useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function Mutiinput() {

    // const [name,setname] = useState("");
    // const [email,setemail] = useState("");
    // const [number,setnumber] = useState("");
    // const [password,setpassword] = useState("");
    // const [cpassword,setcpassword] = useState("")

    const [form, setform] = useState({
        name: "",
        email: "",
        number: "",
        password: "",
        cpassword: ""
    })

    // onchnaghe
    const handlechnage = (e) => {
        setform({
         ...form,
        //  name :  value
            [e.target.name]:e.target.value
        })
        console.log(form)
    }



    return (
        <div>
            <form action="" >
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                    {/* 
                    <MDBInput wrapperClass='mb-4' name='name' value={form.name} onChange={(e)=>setform({...form,name : e.target.value})} label='Enter your name' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' name='email'  value={form.email} onChange={(e)=>setform({...form,email : e.target.value})} label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' name='number' value={form.number} onChange={(e)=>setform({...form,number : e.target.value})} label='Enter your phone' id='form1' type='tel' />
                    <MDBInput wrapperClass='mb-4' name='password' value={form.password} onChange={(e)=>setform({...form,password : e.target.value})} label='Password' id='form2' type='password' />
                    <MDBInput wrapperClass='mb-4' name='cpassword' value={form.cpassword} onChange={(e)=>setform({...form,cpassword : e.target.value})} label='c Password' id='form1' type='password' /> */}


                    <MDBInput wrapperClass='mb-4' name='name' value={form.name} onChange={handlechnage} label='Enter your name' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' name='email' value={form.email} onChange={handlechnage} label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' name='number' value={form.number} onChange={handlechnage} label='Enter your phone' id='form1' type='tel' />
                    <MDBInput wrapperClass='mb-4' name='password' value={form.password} onChange={handlechnage} label='Password' id='form2' type='password' />
                    <MDBInput wrapperClass='mb-4' name='cpassword' value={form.cpassword} onChange={handlechnage} label='c Password' id='form1' type='password' />


                    <div className="d-flex justify-content-between mx-3 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4">Sign in</MDBBtn>

                    <div className="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>


                    </div>

                </MDBContainer>
            </form>
        </div>
    )
}

export default Mutiinput
