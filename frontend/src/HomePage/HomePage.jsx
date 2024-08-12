import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import NavBar from "./NavBar/NavBar";
import Classes from "./Classes/Classes";
import Courses from "./Courses/Courses";
import Testimonials from "./Testimonial/Testimonials";
import Footer from "./Footer/Footer";
function HomePage() {
  return (
    <div className="Home">
      <HeroSection />
      <NavBar />
      <Classes />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
