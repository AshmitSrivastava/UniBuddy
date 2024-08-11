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
import Notes from "./Notes/Notes";















//Dhruv imports iske neeche
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Dashboard from "./StudentDashboard/Dashboard";





















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
            <Route path="/notes" element={<Notes />} /> 
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />














































            
          </Routes>
      
      {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
