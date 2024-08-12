// src/components/Testimonials.jsx
import React from "react";
import Testimonial from "./Testimonial";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      image:
        "https://collegeboardingpass.org/wp-content/uploads/2019/12/CBP-blog-female-student-on-campus-1-scaled.jpg",
      text: "This service is fantastic! I couldn’t be happier with the results. ",
      isImageLeft: true,
    },
    {
      image: "https://media.sciencephoto.com/f0/28/51/63/f0285163-800px-wm.jpg",
      text: "A great experience overall. The team was professional and the service exceeded my expectations.",
      isImageLeft: false,
    },
    {
      image:
        "https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png",
      text: "I highly recommend this to anyone looking for quality and efficiency.",
      isImageLeft: true,
    },
  ];

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-heading">
        What Our <span>Users</span> Say
      </h2>
      <p className="testimonials-intro">
        Here’s what some of our users have to say about their experience with
        our service.
      </p>
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          image={testimonial.image}
          text={testimonial.text}
          isImageLeft={testimonial.isImageLeft}
        />
      ))}
    </div>
  );
};

export default Testimonials;
