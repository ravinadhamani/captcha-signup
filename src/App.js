import React, { useState, useEffect } from "react";
import './App.css';
import SignupForm from "./SignupForm"
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./Home"

export default function App() {
   useEffect(() => {
    if (JSON.parse(localStorage.getItem("isLoggedIn")) == null) {
      localStorage.setItem("isLoggedIn", false);
    }
  }, []);

  const [isLoggedIn, setIsloggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  ); 
  return (
    <div>
      <BrowserRouter>
      <Routes>
         {/*<Route path="home" element={<Home />} /> */}
           <Route
            path="/home"
            element={isLoggedIn === true ? <Home /> : <Navigate to="/" />}
          /> 
          <Route path="/" isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} element={<SignupForm />} />      
      </Routes> 
         {/*  <Route path="/" element={<SignupForm />} />      
       </Routes> */}
    </BrowserRouter>
     
    </div>
  );
}

