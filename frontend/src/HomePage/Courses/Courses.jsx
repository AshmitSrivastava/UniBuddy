import React from "react";
import Course_Slider from "./Course_Slider";
import "./Courses.css";

const Courses = () => {
  const cardData = [
    {
      title: "Computer Science",
      image:
        "https://miro.medium.com/v2/resize:fit:1080/1*02hVPjwDvp2-oQQUXNimXA@2x.jpeg",
      description: "Semester 3 and Semester 4",
    },
    {
      title: "Mathematics",
      image:
        "https://images.theconversation.com/files/139426/original/image-20160927-14593-1rf92dt.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
      description: "Year 1 and Year 2",
    },
    {
      title: "Physics",
      image:
        "https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg",
      description: "Semester 1 and 2",
    },
    {
      title: "Chemistry",
      image:
        "https://www.umweltbundesamt.de/sites/default/files/medien/bilder/Chemikalien_Reagenzglaeser_Fluessigkeit_Bunt_CC-Vision_18_15056.jpg",
      description: "Semester 1 and 2",
    },
    {
      title: "Analysis of Algorithms",
      image:
        "https://digitalschoolofmarketing.co.za/wp-content/uploads/2019/08/shutterstock_1132115675-e1565861088572.jpg",
      description: "Semester 1 and 2",
    },
  ];

  return (
    <div className="courses-div">
      <h3 className="courses-heading">
        Discover our{" "}
        <a href="#">
          <span>Courses Library</span>
        </a>
      </h3>
      <p className="courses-description">
        Explore curated courses and materials to enhance your learning journey.
      </p>
      <Course_Slider cardData={cardData} />
    </div>
  );
};

export default Courses;
