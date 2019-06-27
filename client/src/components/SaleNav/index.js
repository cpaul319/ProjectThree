import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SaleNav() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <Link className="text-light sale-nav-link" to="*">Hello</Link> &nbsp; | &nbsp;
      <Link className="text-light sale-nav-link" to="/account">Account</Link> &nbsp; | &nbsp;
      <Link className="text-light sale-nav-link" to="/orders">Orders</Link> &nbsp; | &nbsp;
      <Link className="text-light sale-nav-link" to="/">Log Out</Link> &nbsp; | &nbsp;
    </nav>
    </header>
  );
}

export default SaleNav;
