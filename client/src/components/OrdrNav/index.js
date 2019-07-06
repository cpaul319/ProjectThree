import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

class OrderNav extends Component {

  constructor() {
    super()
    this.state = {
      hi: "",
      userName: "Please log in",
      user: "",
      loggedInUserName:"",
      loggedInUserEmail:"",
      loggedInUserId:""
    }

  }
  componentDidMount() {
    var loggedInUserName = localStorage.getItem('loggedInUserName');
    var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    var loggedInUserId = localStorage.getItem('loggedInUserId');
    
    this.setState({ loggedInUserName });
    this.setState({ loggedInUserEmail });
    this.setState({ loggedInUserId });
   
    }

  Logout()  {
   
    var email = localStorage.getItem('loggedInUserEmail');
    localStorage.clear();
    var url = "/api/logout/" + email;
    console.log("logged in e-mail is " + email);
    console.log("log out function called.");
          axios.put(url)
          .then(function(res) {
            localStorage.clear();
            // window.location.reload();
           //merge
           
            console.log("clear local storage")
            console.log("user is logged out.")
          }).catch(function (error) {
            console.log("user is not logged out");
          });
        
  }

  render() {
    return (
      <header>
        {/* <nav className="navbar navbar-light bg-light">
       <Link to="/login">Log In</Link> &nbsp; | &nbsp;
            <Link to="/register">Register</Link>
   
    </nav> */}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">GoT Swag</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/sale">Buy Items<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/account">Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" onClick = {this.Logout}>Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default OrderNav;
