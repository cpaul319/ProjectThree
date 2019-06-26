import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function OrderNav() {
  return (
    <header>
    {/*}  <nav className="navbar navbar-dark bg-dark">
        <Link to="#">Hello</Link> &nbsp; | &nbsp;
      <Link to="/Account">Account</Link> &nbsp; | &nbsp;
      <Link to="/Sale">Buy Items</Link> &nbsp; | &nbsp;
      <Link to="/">Log Out</Link> &nbsp; | &nbsp;
  </nav>*/}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">GoT Swag</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/account">Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sale">Buy Items</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Welcome User
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/orders">Orders</a>
                <a className="dropdown-item" href="/forgot">Edit Account</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default OrderNav;
