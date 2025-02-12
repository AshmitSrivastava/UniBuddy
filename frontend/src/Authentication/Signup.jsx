import React, { useState } from 'react';
import "./Signup.css";
import axios from 'axios';

const Signup = () => {

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    reconfirm_password: ''
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formValues);
      alert(response.data.message); 
    }
    catch (err) {
      console.error("Error in handleSubmit:", err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <div className="signup-outercontainer">
        <div className="signup-innercontainer">

          <div className="signup-leftcontainer">
            <h1 id='signup-welcome-back'>Welcome to UniBuddy</h1>
            <h4 id='signup-quote'>Where knowledge meets opportunity!</h4>
          </div>

          <div className="signup-rightcontainer">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="signup-input-boxes" />

              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="signup-input-boxes" />

              <input
                type="password"
                name="reconfirm_password"
                value={formValues.reconfirm_password}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="signup-input-boxes" />

              <button type="submit" id='signup_btn'>Sign Up</button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
