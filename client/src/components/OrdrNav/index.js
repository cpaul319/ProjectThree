/*  This file is order page navigation bar.fixing paypal */

import React, { Component } from "react";
import { Link,  withRouter  } from "react-router-dom";
import "./style.css";
import axios from "axios";
import PayPalButton from '../PayPalButton';
 

class OrderNav extends Component {

  constructor() {
    super()
    this.state = {
      hi: "",
      userName: "Please log in",
      user: "",
      loggedInUserName: "",
      loggedInUserEmail: "",
      loggedInUserId: "",
      total:0
    }
 

  }

  

  //-------------------------------------------------------------------------------

  componentDidMount() {

    //  This function loads user information from local storage (where it is stored during log in).

    var loggedInUserName = localStorage.getItem('loggedInUserName');
    var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    var loggedInUserId = localStorage.getItem('loggedInUserId');
    var total = localStorage.getItem('total');

    this.setState({ loggedInUserName });
    this.setState({ loggedInUserEmail });
    this.setState({ loggedInUserId });
    this.setState({ total });
    console.log("total on orders nav");
    console.log(total);
  }

  //-------------------------------------------------------------------------------

  Logout() {

    //  This function logs the user out to another page, changes database and local storage properly.

    var email = localStorage.getItem('loggedInUserEmail');

    localStorage.clear();
    var url = "/api/logout/" + email;
    axios.put(url)
      .then(function (res) {
        localStorage.clear();
      }).catch(function (error) {
        console.log("user is not logged out");
      });
  }

  render() {
    var total = localStorage.getItem('total');
    const paypal = window.PAYPAL;

    const CLIENT = {
       
      sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
      production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
    };
    console.log(process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION);
    console.log(process.env.REACT_APP_MY_VAR_2);
    //trick paypal into thinking deployed is still development
    // const ENV = process.env.NODE_ENV === 'production'
    // ? 'production'
    // : 'sandbox';
    const ENV = 'sandbox';

 
      // console.log(ENV);
    const onSuccess = (payment) => {
      console.log('Successful payment!', payment);
      alert("Payment successful! You will receive an e-mail confirming when your item(s) will arrive.");
      setTimeout(() => {this.props.history.push('/')}, 6000)
    }
    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) =>
      console.log('Cancelled payment!', data);
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="order-nav">
          <a className="navbar-brand" href="/">GoT Swag</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/sale">Buy Items<span className="sr-only">(current)</span></a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/account">Account</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={this.Logout}>Log Out</a>
              </li>
              <li className="nav-item" id="PayPalButton">
              <PayPalButton
                client={CLIENT}
                env={ENV}
                commit={true}
                currency={'USD'}
                total={total}
                onSuccess={onSuccess}
                onError={onError}
                onCancel={onCancel}
              />
              </li>
         
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default withRouter(OrderNav);
 
