import React from "react";
import Card from "./Card";
import "./Classes.css";

const Classes = () => {
  const cardsData = [
    {
      title: "First Year",
      description: "Course Material for 1st and 2nd Semester",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeInMdGK8POF3ctGkx2harQ75UwQzHz4fj-w&s",
    },
    {
      title: "Second Year",
      description: "Course Material for 3rd and 4th Semester",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeInMdGK8POF3ctGkx2harQ75UwQzHz4fj-w&s",
    },
    {
      title: "Third Year",
      description: "Course Material for 5th and 6th Semester",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeInMdGK8POF3ctGkx2harQ75UwQzHz4fj-w&s",
    },
    {
      title: "Fourth Year",
      description: "Course Material for 7th and 8th Semester",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeInMdGK8POF3ctGkx2harQ75UwQzHz4fj-w&s",
    },
  ];
  return (
    <div className="classes-div">
      <div className="classes-heading">
        <h3>
          Welcome to <span>UniBuddy</span>
        </h3>
        <p>
          "Empower your learning journey with access to comprehensive course
          materials tailored for every academic year. Whether you're a
          first-year student just starting out or a senior preparing for
          graduation, StudyHive provides the resources you need to succeed. Our
          platform offers a wide range of study guides, lecture notes, and
          practice exams, all designed to help you excel in your studies. Join
          our community of learners and take the next step towards achieving
          your academic goals."
        </p>
      </div>
      <div className="cards-div">
        {cardsData.map((cardData, index) => (
          <Card
            key={index}
            title={cardData.title}
            description={cardData.description}
            image={cardData.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Classes;
