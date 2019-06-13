import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
       <Link to="/login">Log In</Link> | &nbsp;
            <Link to="/enter">Register</Link>
   
    </nav>
  );
}

export default Nav;
