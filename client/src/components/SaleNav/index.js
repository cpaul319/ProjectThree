import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SaleNav() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark py-3">
        <Link className="sale-nav-link" to="*">Hello</Link> &nbsp; <img className="sale-nav-img" src="/images/hand.jpg" alt="sword" /> &nbsp;
      <Link className="sale-nav-link" to="/account">Account</Link> &nbsp; <img className="sale-nav-img" src="/images/hand.jpg" alt="sword" /> &nbsp;
      <Link className="sale-nav-link" to="/orders">Orders</Link> &nbsp; <img className="sale-nav-img" src="/images/hand.jpg" alt="sword" /> &nbsp;
      <Link className="sale-nav-link" to="/">Log Out</Link> &nbsp; &nbsp;
    </nav>
    </header>
  );
}

export default SaleNav;
