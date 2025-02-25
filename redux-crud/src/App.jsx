import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Read from "./Compnent/Read"
import Navabar from "./Compnent/Navabar"

function App() {
  return (
    <BrowserRouter>
      <Navabar />
      <Routes>
        <Route path="/read" element={<Read />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
