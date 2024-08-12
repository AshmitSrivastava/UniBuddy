import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <p>
            At UniBuddy, we believe in the transformative power of education.
            Our mission is to provide high-quality, accessible learning
            resources that inspire curiosity, foster creativity, and empower
            learners of all ages to achieve their full potential. Whether you're
            a student, a teacher, or a lifelong learner, our diverse courses and
            tools are designed to support your journey. Join our growing
            community, and together, let's build a brighter future, one lesson
            at a time. Stay connected with us for the latest updates, resources,
            and opportunities to engage with our learning community.
          </p>
        </div>
        <div className="footer-section links">
          <div>
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Our Supporters</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Support Community</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Courses</h3>
            <ul>
              <li>
                <a href="#">Math</a>
              </li>
              <li>
                <a href="#">Science</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">Computer Science</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-section social">
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 StudyHive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
