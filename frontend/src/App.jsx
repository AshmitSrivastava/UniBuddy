import React, { useState , useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Faq from "./Faq";
import Sell from "./BuySell/Sell";
import ProductList from "./BuySell/ProductList";
import Buy from "./BuySell/Buy";
import Calendar from "./EventScheduler/Calendar";
// import Header from "./Header";
// import Footer from "./Footer";















//drive imports iske neeche






















//shewta imports iske neeche


















//ash imports if any 







const App = () => {


  return (
    <>
      <BrowserRouter>
        {/* <Header>
        </Header> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} /> 
            <Route path="/sell" element={<Sell />} />
            <Route path="/products" element={<ProductList />} /> 
            <Route path="/buy" element={<Buy />} />
            <Route path="/calendar" element={<Calendar />} /> 
           
















































            
          </Routes>
      
      {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
