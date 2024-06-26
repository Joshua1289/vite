import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Services from "./services";

import React from "react";

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./shared-components/header";
import Footer from "./shared-components/footer";

function App() {
  return(
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path= "/Services" element={<Services/>}/>
      </Routes>
     <Footer/> 
    </BrowserRouter>
  )
}

export default App; 

