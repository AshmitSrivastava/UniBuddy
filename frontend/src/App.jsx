import React, { useState , useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Faq from "./Faq";
// import Header from "./Header";
// import Footer from "./Footer";


const App = () => {


  return (
    <>
      <BrowserRouter>
        {/* <Header>
        </Header> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} /> 
          </Routes>
      
      {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
