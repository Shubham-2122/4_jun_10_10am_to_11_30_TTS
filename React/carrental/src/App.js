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


      {/*  * not path location */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
