/*import React from "react";
import Nav from "../components/Nav";
import { isAbsolute } from "path";

class Enter extends React.Component {
    return (
        <p>Enter page</p>
    /*<form>
        <label>
            Name:
    <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
    </form>*/

   /* );
}

export default Enter; */

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";


console.log("before Log In function is called.");
function Enter() {
    return (
        <div className="App">
         
            <p>Login page</p>
        </div>
    );
}
console.log("after Log In function is called.");

export default Enter;

