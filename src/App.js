import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm"
import Home from "./components/Home"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<ProtectedRoute isLoggedIn={isLoggedIn}> <Home /></ProtectedRoute>}  />
           {/* <Route path="/" element={<Login />} /> */}
            <Route path='/login' element={
            <ProtectedRoute isLoggedIn={isLoggedIn}> <Login /></ProtectedRoute>} />  
           <Route path="/" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}



