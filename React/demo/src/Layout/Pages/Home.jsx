import React from 'react'
import Headersdata from '../Comman/Headersdata'
import Footerdata from '../Comman/Footerdata'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Headersdata />
      <h1>Home page</h1>
      <Link to="">Home 1</Link>
      <Link to="">Home 2</Link>
      <Footerdata />
    </div>
  )
}

export default Home
