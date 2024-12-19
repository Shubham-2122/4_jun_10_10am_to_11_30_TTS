import React from 'react'
import Headersdata from '../Comman/Headersdata'
import Footerdata from '../Comman/Footerdata'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Home() {

  const redirect = useNavigate()

  const changedata=()=>{
    redirect("/contact")
  }

  return (
    <div>
      <Headersdata />
      <h1>Home page</h1>
      <Link to="/home1">Home 1</Link>
      <Link to="/home2">Home 2</Link>

      <button onClick={changedata}>Contact page</button>
      <Outlet />
      <Footerdata />
    </div>
  )
}

export default Home
