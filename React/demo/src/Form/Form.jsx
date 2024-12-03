import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function Form() {

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");

    const hadnlesubmit=(e)=>{
        // with out page refresh submit
        e.preventDefault()
        console.log(" data success");
        setemail("")
        setpassword("")
    }

    return (
        <div>
            {/* single state Form */}
            <form action="" onSubmit={hadnlesubmit}>
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                    <MDBInput wrapperClass='mb-4' value={email} onChange={(e)=>setemail(e.target.value)} label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' value={password} onChange={(e)=>setpassword(e.target.value)} label='Password' id='form2' type='password' />

                    <div className="d-flex justify-content-between mx-3 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4">Sign in</MDBBtn>

                    <div className="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
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
            </form>
        </div>
    )
}

export default Form
