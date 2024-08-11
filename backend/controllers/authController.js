const express = require('express');
const brcypt = require('bcryptjs');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config({path: '.env'});
app = express();

const login = async (req, res) => {
    try{
        console.log(req);
        const { email, password } = req.body;
        const user = await User.findOne({email});

        if(!user){
            console.log("No user found");
            return res.status(401).json({message : "User Not found"});
        }
        console.log(password, user.password);
        const isMatch = await brcypt.compare(password , user.password);
        console.log("Passwords matched");
        if(!isMatch){
            console.log("Ismatch isnt matched, password invalid");
            return res.status(401).json({message : "Invalid password"})
        }

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET , {expiresIn : "1h"});
        console.log( "Token ", token);
        res.cookie('token', token , {httpOnly : true  , secure : process.env.NODE_ENV === 'production'});
        req.session.token = token;
        res.status(200).json({message : "User logged in"});
        console.log("user logged in");
    }
    catch(err){
        console.error("Error in login : ", err);
        res.status(500).json({message : "Error in login"});
    }
};

const signup = async(req, res) => {
    try{
        const { email , password, reconfirm_password } = req.body;
        console.log(req.body);
        if(password !== reconfirm_password){
            console.log("passwords dont match");
            res.status(400).json({message : "passwor dnot mtch"});
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            console.log("User exists");
            return res.status(400).json({message : "user exisits"});
        }

        const hashedPassword = await brcypt.hash(password, 10);

        const newUser = new User({
            email , 
            password : hashedPassword
        });

        await newUser.save();
        console.log("New user saved");
        res.status(200).json({message : "New user created successfully!"});

    }
    catch(err){
        console.error("Error in signup", err);
        return res.status(500).json({message : "Signup error"});
    }
};

const logout = async (req, res) => {
    if(!req.cookies.token){
        console.log("NO user logged in");
        res.status(200).json({message : "No user logged in "});
    }
    res.clearCookie('token');
    req.session.destroy(err => {
        if(err){
            console.error("Error during session destruction : ", err);
            return res.status(400).json({message : "error during session destruction"});
        }
        console.log("Logged out successfully");
        return res.status(200).json({message : "User logged out successfuly"});
    });
};

module.exports = {login, signup , logout};