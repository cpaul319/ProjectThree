import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <header>
    <nav className="navbar navbar-dark bg-dark">
       <Link to="/login">Log In</Link> &nbsp; | &nbsp;
            <Link to="/register">Register</Link>
   
    </nav>
    </header>
  );
}

export default Nav;
