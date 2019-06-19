import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function OrderNav() {
  return (
    <header>
    <nav className="navbar navbar-dark bg-dark">
      <Link to="#">Hello</Link> &nbsp; | &nbsp;
      <Link to="/register">Account</Link> &nbsp; | &nbsp;
      <Link to="/Sale">Buy Items</Link> &nbsp; | &nbsp;
      <Link to="/">Log Out</Link> &nbsp; | &nbsp;
    </nav>
    </header>
  );
}

export default OrderNav;
