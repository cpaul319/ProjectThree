import React, { Component } from "react";
import './orders.css';
import OrderNav from '../OrdrNav';
import axios from "axios";

//const Orders = (props) => {
class Orders extends Component {

  constructor() {
    super()
    this.state = {
      swag1quantity: 0,
      swag2quantity: 0,
      swag3quantity: 0,
      swag4quantity: 0,
      swag5quantity: 0,
      swag6quantity: 0,
      swag7quantity: 0,
      swag8quantity: 0,
      swag9quantity: 0,
      swag10quantity: 0,
      email: ""
      // redirect: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  };

  componentDidMount() {
    const that = this;
    console.log("this is sale card");
    axios.get('/api/allusers')
      .then(function (res) {
        console.log("inside sale card axios get all cards call");
        for (var c = 0; c < res.data.length; c++) {
          console.log("inside loop");
          if (res.data[c].isLoggedIn == 1) {
            that.state.email = res.data[c].email;
            console.log("that.state.email is " + that.state.email);
            console.log("res.data[" + c + "].email is " + res.data[c].email);
            that.setState({
              email: res.data[c].email
            });
            that.setState({
              swag1quantity: res.data[c].swag1quantity
            });
            that.setState({
              swag2quantity: res.data[c].swag2quantity
            });
            that.setState({
              swag3quantity: res.data[c].swag3quantity
            });
            that.setState({
              swag4quantity: res.data[c].swag4quantity
            });
            that.setState({
              swag5quantity: res.data[c].swag5quantity
            });
            that.setState({
              swag6quantity: res.data[c].swag6quantity
            });
            that.setState({
              swag7quantity: res.data[c].swag7quantity
            });
            that.setState({
              swag8quantity: res.data[c].swag8quantity
            });
            that.setState({
              swag9quantity: res.data[c].swag9quantity
            });
            that.setState({
              swag10quantity: res.data[c].swag10quantity
            });   
            console.log("that.state.swag1quantity: " + that.state.swag1quantity);
            console.log("that.state.swag2quantity: " + that.state.swag2quantity);
            console.log("that.state.swag3quantity: " + that.state.swag3quantity);
            console.log("that.state.swag4quantity: " + that.state.swag4quantity);
            console.log("that.state.swag5quantity: " + that.state.swag5quantity);
            console.log("that.state.swag6quantity: " + that.state.swag6quantity);
            console.log("that.state.swag7quantity: " + that.state.swag7quantity);
            console.log("that.state.swag8quantity: " + that.state.swag8quantity);
            console.log("that.state.swag9quantity: " + that.state.swag9quantity);
            console.log("that.state.swag10quantity: " + that.state.swag10quantity);
          }
        }
      }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <OrderNav />
        <div className='container'>
          <h2 className='text-center'>Order History</h2>
          {/*
        <br></br>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src='/images/dragon.jpg' className="card-img" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Item 1</h5>
                <p className="card-text">This is an example of a description for a purchased item. This is only a test.</p>
              </div>
            </div>
            <div className="col-md-2 row align-items-center justify-content-center">
            <p>$50</p>
          </div>
        </div>
      </div>
      <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src='/images/gotmap.jpg' className="card-img" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Item 2</h5>
                <p className="card-text">This is an example of a description for a purchased item. This is only a test.</p>
              </div>
            </div>
            <div className="col-md-2 row align-items-center justify-content-center">
            <p>$30</p>
          </div>
        </div>
      </div>
      <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src='/images/thrones1.jpg' className="card-img" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Item 3</h5>
                <p className="card-text">This is an example of a description for a purchased item. This is only a test.</p>
              </div>
            </div>
            <div className="col-md-2 row align-items-center justify-content-center">
            <p>$15</p>
          </div>
        </div>
      </div>*/}

          {/* <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Order Number</th>
              <th scope="col">Item</th>
              <th scope='col'>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Item 1</td>
              <td>$45</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Item 2</td>
              <td>$30</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Item 3</td>
              <td>$50</td>
            </tr>
          </tbody>
  </table>*/}
        </div>
      </div>
    );
  };
}

export default Orders;