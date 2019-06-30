import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

class SaleNav extends Component {
  state = {
    hi: ""
    //navbarImg = <img className="d-none d-lg-inline sale-nav-img" src="/images/hand.jpg" alt="sword" />;
  };
  //const navbarImg = <img className="d-none d-lg-inline sale-nav-img" src="/images/hand.jpg" alt="sword" />;

Logout()  {
  var id;

  axios.get('api/allusers')
  .then(function (res) {
    //const firstName = firstName.res.data;
    //this.setState({ firstName });
    console.log("this is sale navigation bar.");
    for (var c = 0; c < res.data.length; c++) {
      if (res.data[c].isLoggedIn == 1)  {
        console.log(res.data[c].email + " is logged in!");
        console.log("id: " + res.data[c].id);
        id = res.data[c].id;
      }
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log("logging out");
  //axios.put('/api/logout/', 
}
 
render()  {
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
            <li className="nav-item">
              <a className="nav-link sale-nav-link" href="*">Hello<span className="sr-only">(current)</span></a>
            </li>{/*{navbarImg}*/}
            <li className="nav-item">
              <a className="nav-link sale-nav-link" href="/account">Account</a>
            </li>{/*{navbarImg}*/}
            <li className="nav-item">
              <a className="nav-link sale-nav-link" href="/orders">Orders</a>
            </li>{/*{navbarImg}*/}
            <li className="nav-item">
              <a className="nav-link sale-nav-link" href="/" onClick = "">Log Out</a>
            </li>
            {/* <li className="nav-item dropdown">
            <li className="nav-item active">
              <a className="nav-link" href="/account">Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/orders">Orders</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Log out</a>
            </li>
            {/*
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Welcome User
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/orders">Orders</a>
                <a className="dropdown-item" href="/forgot">Edit Account</a>
              </div>
            </li>*/}
          </ul>
        </div>
      </nav>
    </header>
  );
}
}

export default SaleNav;
