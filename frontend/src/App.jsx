import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./Faq";
import Sell from "./BuySell/Sell";
import ProductList from "./BuySell/ProductList";
import Buy from "./BuySell/Buy";
import Calendar from "./EventScheduler/Calendar";
import Notes from "./Notes/Notes";
import Committees from "./Committees";
// import Header from "./Header";
// import Footer from "./Footer";

//Dhruv imports iske neeche
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Dashboard from "./StudentDashboard/Dashboard";

//shewta imports iske neeche
import HomePage from "./HomePage/HomePage";
// import HeroSection from "./HomePage/HeroSection/HeroSection";
// import NavBar from "./HomePage/NavBar/NavBar";
// import Classes from "./HomePage/Classes/Classes";
// import Courses from "./HomePage/Courses/Courses";
// import Testimonials from "./HomePage/Testimonial/Testimonials";
// import Footer from "./HomePage/Footer/Footer";

//ash imports if any
import Logout from "./Authentication/Logout";

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/auth/protected",
          {
            credentials: "include",
          }
        );
        if (response.status === 200) {
          setisAuthenticated(true);
        }
      } catch (err) {
        console.error("Error in authenticated ", err);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = () => {
    setisAuthenticated(true);
  };

  const handleLogout = () => {
    setisAuthenticated(false);
  };

  return (
    <>
      <BrowserRouter>
        {/* <Header>
        </Header> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/committees" element={<Committees />} />

          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
