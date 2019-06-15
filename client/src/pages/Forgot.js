import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";

function Forgot() {
    return (
        <div className="App">
            <p>Forgot login page</p>
            <p><a href = '#'>Submit</a></p>
        </div>
    );
}
console.log("after Log In function is called.");

export default Forgot;