import React from "react";
import Home from "./Website/layout/Home";
import About from "./Website/layout/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Website/layout/Service";
import Carlisting from "./Website/layout/Carlisting";
import NotFound from "./Website/layout/NotFound";
import Cardetils from "./Website/layout/Cardetils";
import Carbooking from "./Website/layout/Carbooking";
import Contact from "./Website/layout/Contact";
import Adashboard from "./Admin/Apages/Adashboard";
import AcarlistingMange from "./Admin/Apages/AcarlistingMange";
import CarListingAdd from "./Admin/Apages/CarListingAdd";
import Register from "./Website/layout/Register";
import Usermanger from "./Admin/Apages/Usermanger";
import Loginpage from "./Website/layout/Loginpage"
import Alogin from "./Admin/Apages/Alogin";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/carlisting" element={<Carlisting />} />
        <Route path="/cardetail" element={<Cardetils />} />
        <Route path="/carbooking" element={<Carbooking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Loginpage />} />


      {/*  * not path location */}
        <Route path="*" element={<NotFound />} />


        {/* admin hide */}
        <Route path="/dashboard" element={<Adashboard />} />
        <Route path="/carmange" element={<AcarlistingMange />} />
        <Route path="/caradd" element={<CarListingAdd />} />
        <Route path="/usermange" element={<Usermanger />} />
        <Route path="/alogin" element={<Alogin />} />
      </Routes>
      <ToastContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
