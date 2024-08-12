import React from "react";
import Slider from "react-slick";
import Course_Card from "./Course_Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Courses.css";

const Course_Slider = ({ cardData = [] }) => {
  // Correct prop name here
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="course-slider">
      <Slider {...settings}>
        {cardData.map(
          (
            data,
            index // Use cardData here
          ) => (
            <div key={index}>
              <Course_Card
                title={data.title}
                description={data.description}
                image={data.image}
              />
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Course_Slider;
