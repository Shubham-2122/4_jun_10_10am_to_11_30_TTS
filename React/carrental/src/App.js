import React from "react";
import Home from "./Website/layout/Home";
import About from "./Website/layout/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Website/layout/Service";
import Carlisting from "./Website/layout/Carlisting";
import NotFound from "./Website/layout/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/carlisting" element={<Carlisting />} />


      {/*  * not path location */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
