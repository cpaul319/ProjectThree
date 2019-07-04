import React, { Component } from "react";
import './orders.css';
import OrderNav from '../OrdrNav';
import axios from "axios";
import "./style.css";
 
const imgUrl = '/images/gotmap.jpg';

const divStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
};

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
      user:"",
      email: "",
      loggedInUserName: "",
      loggedInUserEmail: "",
      loggedInUserId: ""
      // redirect: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  };

  componentDidMount() {
    var loggedInUserName = localStorage.getItem('loggedInUserName');
    var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    var loggedInUserId = localStorage.getItem('loggedInUserId');
    console.log(loggedInUserEmail);
    this.setState({ loggedInUserName });
    this.setState({ loggedInUserEmail });
    this.setState({ loggedInUserId });
    // console.log(this.state.loggedInUserEmail);
    const that = this;
    // this.setState({
    //   email: loggedInUserEmail
    // });
    console.log("orders card");
    console.log(loggedInUserEmail);
    const user = {
      email: loggedInUserEmail

    }
    console.log(user.email);
    console.log(user);
    console.log(loggedInUserEmail);
    
    //find user by email, return user/ what they purchased
    axios.post("/orders", {
      email: loggedInUserEmail,
     
  })
     .then(function (res) {
        console.log("inside sale card axios get all cards call");
        console.log(res);
        console.log(res.data.length);
        // for (var c = 0; c < res.data.length; c++) {
          console.log("inside loop");
          // if (res.data[c].isLoggedIn == 1) {
          // that.state.email = res.data[c].email;
          // console.log("that.state.email is " + that.state.email);
          // console.log("res.data[" + c + "].email is " + res.data[c].email);

          that.setState({
            email: loggedInUserEmail
          });
          that.setState({
            swag1quantity: res.data.swag1quantity
          });
          that.setState({
            swag2quantity: res.data.swag2quantity
          });
          that.setState({
            swag3quantity: res.data.swag3quantity
          });
          that.setState({
            swag4quantity: res.data.swag4quantity
          });
          that.setState({
            swag5quantity: res.data.swag5quantity
          });
          that.setState({
            swag6quantity: res.data.swag6quantity
          });
          that.setState({
            swag7quantity: res.data.swag7quantity
          });
          that.setState({
            swag8quantity: res.data.swag8quantity
          });
          that.setState({
            swag9quantity: res.data.swag9quantity
          });
          that.setState({
            swag10quantity: res.data.swag10quantity
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
          /*if (that.state.swag1quantity > 0) {
            $("#history").append("<br></br><div className=\"card mb-3\"><div className=\"row no-gutters\">" + 
                                     "<div className=\"col-md-4\">" +
                                     "<img src={\"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gottzfigs8js_1_30c0f903-0c3a-462f-893d-cc4d1b2dcd28_360x.jpg?v=1558123631} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'\"} className=\"card-img\" alt=\"...\" />" +
                                     "</div><div className=\"col-md-6\"><div className=\"card-body\">" +
                                     "<h5 className=\"card-title\">John Snow collectible figure</h5></div></div>" + 
                                     "<div className=\"col-md-2 row align-items-center justify-content-center\">" +
                                     "<p>Quantity: {" + this.state.swag1quantity + "}</p></div></div></div>");
          }*/
          // }
        // }
      }).catch(function (error) {
        console.log(error);
        console.log("something goes wrong");
      });
    //window.location.reload();
  }

  render() {
    return (
      <div style={divStyle}>
        <OrderNav />
        <div className='container'>
          <h2 className='text-center' id="history">{/*Order History For {this.state.loggedInUserName}*/}</h2>
          {this.state.swag1quantity > 0 &&

            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gottzfigs8js_1_30c0f903-0c3a-462f-893d-cc4d1b2dcd28_360x.jpg?v=1558123631} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">John Snow collectible figure</h5>
                    <p>Quantity: {this.state.swag1quantity}</p>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag2quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gottzfig06_1_360x.jpg?v=1541022529} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Brienne of Tarth scale collectible figure</h5>
                    <p>Quantity: {this.state.swag2quantity}</p>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag3quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://d8mkdcmng3.imgix.net/3fb0/collectables-action-figures-of-thrones-white-walker-figure.jpg?auto=format&bg=0FFF&fit=fill&h=600&q=100&w=600&s=c45684fd8761d66007a8b96ddd972f03} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">White Walker deluxe figure</h5>
                    <p>Quantity: {this.state.swag3quantity}</p>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag4quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotnbsculp02_720x.jpg?v=1529653266} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Drogon Dragon Scuplt</h5>
                    <p>Quantity: {this.state.swag4quantity}</p>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag5quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotfepegg02_b153b97c-5b21-4377-8067-915973fa696f_360x.jpg?v=1526110992} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Brown Dragon Egg Plush</h5>
                    <p>Quantity: {this.state.swag5quantity}</p>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag6quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotusrisk01_1fe4acaf-c0ca-4262-a80c-96046a7b6649_1024x1024@2x.jpg?v=1529653359} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Game of Trones Risk</h5>
                    <p>Quantity: {this.state.swag6quantity}</p>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag7quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotmemtlirn_110x110@2x.jpg?v=1556648700} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Iron Throne Model</h5>
                    <p>Quantity: {this.state.swag7quantity}</p>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag8quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotnptwpnnk_110x110@2x.jpg?v=1554695057} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Night King acrylic sword</h5>
                    <p>Quantity: {this.state.swag8quantity}</p>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag9quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotjcneedle_1024x1024@2x.jpg?v=1530613538} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Needle, sword of Arya Stark</h5>
                    <p>Quantity: {this.state.swag9quantity}</p>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag10quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotnptwpn01_1024x1024@2x.jpg?v=1538206819} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Catspaw foam blade</h5>
                    <p>Quantity: {this.state.swag10quantity}</p>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
};

export default Orders;