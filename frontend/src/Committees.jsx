import React, {useState} from 'react';

const clubs = [
  {
    name: "Robotics Club",
    description: "Learn the art of building and programming robots. Join us for hands-on sessions and competitions.",
    skills: ["Robotics", "Programming", "Mechanical Design", "Teamwork"],
    duration: "1 year",
    application_deadline: "2024-09-15",
    contact_email: "robotics@college.edu",
    image_url: "/images/robotics_club.jpg",
    learn_more_url: "/clubs/robotics",
    apply_url: "/apply/robotics"
  },
  {
    name: "Coding Club",
    description: "Enhance your coding skills with regular coding challenges, hackathons, and workshops.",
    skills: ["Problem-Solving", "Algorithms", "Data Structures", "Collaboration"],
    duration: "1 year",
    application_deadline: "2024-09-20",
    contact_email: "coding@college.edu",
    image_url: "/images/coding_club.jpg",
    learn_more_url: "/clubs/coding",
    apply_url: "/apply/coding"
  },
  {
    name: "AI & Machine Learning Club",
    description: "Dive into the world of AI and ML. Learn from experts, participate in projects, and explore the latest in AI.",
    skills: ["Machine Learning", "Data Science", "Python", "Research"],
    duration: "6 months",
    application_deadline: "2024-09-25",
    contact_email: "ai_ml@college.edu",
    image_url: "/images/ai_ml_club.jpg",
    learn_more_url: "/clubs/ai_ml",
    apply_url: "/apply/ai_ml"
  },
  {
    name: "Design Club",
    description: "Unleash your creativity with graphic design, UI/UX, and visual storytelling workshops.",
    skills: ["Graphic Design", "UI/UX", "Creativity", "Tools like Figma, Photoshop"],
    duration: "1 year",
    application_deadline: "2024-09-30",
    contact_email: "design@college.edu",
    image_url: "/images/design_club.jpg",
    learn_more_url: "/clubs/design",
    apply_url: "/apply/design"
  },
  {
    name: "Entrepreneurship Club",
    description: "Learn the essentials of starting and running a business. Join us for talks, pitch sessions, and mentorship.",
    skills: ["Business Strategy", "Pitching", "Networking", "Leadership"],
    duration: "6 months",
    application_deadline: "2024-09-10",
    contact_email: "entrepreneurship@college.edu",
    image_url: "/images/entrepreneurship_club.jpg",
    learn_more_url: "/clubs/entrepreneurship",
    apply_url: "/apply/entrepreneurship"
  }
];

const ClubCard = ({ club }) => {
    return (
      <div className="group h-96 w-full [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="absolute inset-0">
            <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={club.image_url} alt={club.name} />
            <div className="absolute inset-0 bg-black/60 rounded-xl">
              <div className="flex h-full flex-col justify-between p-6 text-white">
                <h3 className="text-3xl font-bold">{club.name}</h3>
                <p className="text-lg">{club.description.substring(0, 100)}...</p>
              </div>
            </div>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-4 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2">{club.name}</h3>
                <p className="text-sm mb-4">{club.description}</p>
                <div className="mb-4">
                  <h4 className="font-bold mb-1">Skills you'll learn:</h4>
                  <div className="flex flex-wrap gap-1">
                    {club.skills.map((skill, index) => (
                      <span key={index} className="bg-white text-blue-500 px-2 py-1 rounded-full text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm"><span className="font-bold">Duration:</span> {club.duration}</p>
                <p className="text-sm"><span className="font-bold">Application Deadline:</span> {club.application_deadline}</p>
              </div>
              <div className="flex justify-between mt-4">
                <a href={club.learn_more_url} className="bg-white text-blue-500 px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-100 transition duration-300">Learn More</a>
                <a href={club.apply_url} className="bg-white text-teal-500 px-4 py-2 rounded-full text-sm font-bold hover:bg-teal-100 transition duration-300">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const ClubsPage = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">College Clubs & Communities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {clubs.map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ClubsPage;