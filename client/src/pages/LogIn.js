
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";


console.log("before Log In function is called.");
function LogIn() {
    return (
        <div className="App">    
            <p>GoT Swag?</p>
        </div>
    );
}
console.log("after Log In function is called.");

export default LogIn;