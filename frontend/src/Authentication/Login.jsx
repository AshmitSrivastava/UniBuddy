import React from 'react';
import "./Login.css";
const Login = () => {
  return (
    <>
    <div className="login-outercontainer">
    <div className="login-innercontainer">

    <div className="login-leftcontainer">
        <h1 id='login-welcome-back'>Welcome back to UniBuddy</h1>
        <h4 id='login-quote'>Where knowledge meets opportunity!</h4>
    </div>

    <div className="login-rightcontainer">
        <form >
        <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
            className="login-input-boxes" />

        <input 
            type="password"
            name="password" 
            placeholder="Enter your password" 
            required 
            className="login-input-boxes" />

        <button type="submit" id='login_Sign_btn'>Sign In</button>
        </form>
    
    </div>
    </div>
    </div></>
  )
}

export default Login