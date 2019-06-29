import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";
import LoginNav from "../components/LoginNav";
import Slide from "../components/Slider";
import "../Login.css"

console.log("before Log In function is called.");
function LogIn() {
    return (
        <div className="App login"> 
            
            <LoginNav />
            <Slide />
              
        </div>
    );
}
console.log("after Log In function is called.");

export default LogIn;

//  landing page to our site 