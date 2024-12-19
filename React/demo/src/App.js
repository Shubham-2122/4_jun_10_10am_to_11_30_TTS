import React from "react";
// import Class_compo from "./Component/Class-compo";
// import Fun_compo from "./Component/Fun-compo";
// import Hello from "./jsx/Hello";
// import Hello2 from "./Css/Hello2";
// import Main_card from "./Props/Main-card";
import Boostrap from "./boostrap/Boostrap";
import React_card from "./boostrap/React-card";
import Footer from "./boostrap/Footer";
import Main_State from "./State/Main-State";
import Form from "./Form/Form";
import Mutiinput from "./Form/Mutiinput";
import UseEffect1 from "./useEffect/UseEffect1";
import UserTable from "./useEffect/UserTable";
import UserCard from "./useEffect/UserCard";
import Main_Props from "./UseContext/Main_Props";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Layout/Pages/Contact";
import Help from "./Layout/Pages/Help";
import Home1 from "./Layout/Pages/Home1";
import Home2 from "./Layout/Pages/Home2";
import LifeCycle from "./Layout/Pages/LifeCycle";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Hello App compo</h1> */}

      {/* component */}
      {/* <Class_compo /> */}
      {/* <Fun_compo /> */}

      {/* jsx  */}
      {/* <Hello /> */}

      {/* css topic */}
      {/* <Hello2 /> */}


      {/* porps data */}
     {/* <Main_card /> */}


     {/* boostrap */}
     {/* <Boostrap />
     <React_card />
     <Footer /> */}

     {/* state */}
     {/* <Main_State /> */}

     {/* form handling */}
     {/* <Form /> */}
     {/* <Mutiinput /> */}

     {/* UseEffect */}
     {/* <UseEffect1 /> */}
     {/* <UserTable /> */}
     {/* <UserCard /> */}

     {/* use context */}
     {/* <Main_Props /> */}

      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/lifecycle" element={<LifeCycle />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
