import React from "react";
import React, { Component } from "react";
import { isAbsolute } from "path";
import Nav from "../components/Nav";

console.log("before Log In function is called.");
function LogIn() {
    return (
        <div className="App">
            <Nav />
            <p>GoT Swag?</p>
        </div>
    );
}
console.log("after Log In function is called.");

export default LogIn;