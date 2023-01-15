import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm"
import Home from "./components/Home"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<SignupForm />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}



