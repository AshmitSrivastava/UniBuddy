import React from 'react'
import "./Signup.css";
const Signup = () => {
  return (
    <>
      <div className="signup-outercontainer">
    <div className="signup-innercontainer">

    <div className="signup-leftcontainer">
        <h1 id='signup-welcome-back'>Welcome to UniBuddy</h1>
        <h4 id='signup-quote'>Where knowledge meets opportunity!</h4>
    </div>
    
    <div className="signup-rightcontainer">
        <form >
        <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
            className="signup-input-boxes" />

        <input 
            type="password"
            name="password" 
            placeholder="Enter your password" 
            required 
            className="signup-input-boxes" />

          <input 
            type="password"
            name="Re-password" 
            placeholder="Confirm your password" 
            required 
            className="signup-input-boxes" /> 
        <button type="submit" id='signup_btn'>Register</button>
        </form>
    
    </div>
    </div>
    </div>
    </>
  )
}

export default Signup