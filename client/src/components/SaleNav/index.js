import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SaleNav() {
  return (
    <header>
    <nav className="navbar navbar-dark bg-dark">
      <Link to="*">Hello</Link> &nbsp; | &nbsp;
      <Link to="/account">Account</Link> &nbsp; | &nbsp;
      <Link to="/orders">Orders</Link> &nbsp; | &nbsp;
      <Link to="/">Log Out</Link> &nbsp; | &nbsp;
    </nav>
    </header>
  );
}

export default SaleNav;
