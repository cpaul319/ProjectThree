import axios from "axios";
import Sale from '../../pages/Sale'
import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import SaleNav from '../SaleNav'

import hand from './hand.PNG';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import "./style.css";
import item from '../../items.json';
// update a quantity of purchased item
//= (props) =>
class SaleCard extends Component {

  constructor() {
    super()
    this.state = {
      userName: "",
      firstName: "",
      swag1name: "Swag 1",
      swag1quantity: 0,
      swag2name: "Swag 2",
      swag2quantity: 0,
      swag3name: "Swag 3",
      swag3quantity: 0,
      swag4name: "Swag 4",
      swag4quantity: 0,
      swag5name: "Swag 5",
      swag5quantity: 0,
      swag6name: "Swag 6",
      swag6quantity: 0,
      swag7name: "Swag 7",
      swag7quantity: 0,
      swag8name: "Swag 8",
      swag8quantity: 0,
      swag9name: "Swag 9",
      swag9quantity: 0,
      swag10name: "Swag 10",
      swag10quantity: 0
      // redirect: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  };
  //   handleInputChange = event => {

  //     const { name, value } = event.target;
  //     this.setState({
  //         [name]: value
  //     });
  //     console.log("value is " + value);
  // }

  handleFormSubmit = event => {

    const user = {

      swag1name: this.state.swag1name,
      swag1quantity: this.state.swag1quantity,
      swag2name: this.state.swag2name,
      swag2quantity: this.state.swag2quantity,
      swag3name: this.state.swag3name,
      swag3quantity: this.state.swag3quantity,
      swag4name: this.state.swag4name,
      swag4quantity: this.state.swag4quantity,
      swag5name: this.state.swag5name,
      swag5quantity: this.state.swag5quantity,
      swag6name: this.state.swag6name,
      swag6quantity: this.state.swag6quantity,
      swag7name: this.state.swag7name,
      swag7quantity: this.state.swag7quantity,
      swag8name: this.state.swag8name,
      swag8quantity: this.state.swag8quantity,
      swag9name: this.state.swag9name,
      swag9quantity: this.state.swag9quantity,
      swag10name: this.state.swag10name,
      swag10quantity: this.state.swag10quantity,
    }
    console.log(user);

    axios.put('api/users', user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // this.props.history.push('/orders');

  }

  componentDidMount() {
    console.log("inside sales card index.js line 101");
    console.log( this.props.userData.userData);
    const that = this;
    console.log("this is sale card");
    axios.get('api/allusers')
      .then(function (res) {
        console.log("inside sale card axios get all cards call");
        that.state.swag1quantity = res.data[0].swag1quantity;
        console.log("that.state.swage1quantity: " + that.state.swag1quantity);
        that.state.swag2quantity = res.data[1].swag2quantity;
        console.log("that.state.swage2quantity: " + that.state.swag2quantity);
        that.state.swag3quantity = res.data[2].swag3quantity;
        console.log("that.state.swage3quantity: " + that.state.swag3quantity);
        that.state.swag4quantity = res.data[3].swag4quantity;
        console.log("that.state.swage4quantity: " + that.state.swag4quantity);
        that.state.swag5quantity = res.data[4].swag5quantity;
        console.log("that.state.swage5quantity: " + that.state.swag5quantity);
        that.state.swag6quantity = res.data[5].swag6quantity;
        console.log("that.state.swage6quantity: " + that.state.swag6quantity);
        that.state.swag7quantity = res.data[6].swag7quantity;
        console.log("that.state.swage7quantity: " + that.state.swag7quantity);
        that.state.swag8quantity = res.data[7].swag8quantity;
        console.log("that.state.swage8quantity: " + that.state.swag8quantity);
        that.state.swag9quantity = res.data[8].swag5quantity;
        console.log("that.state.swage9quantity: " + that.state.swag9quantity);
        that.state.swag10quantity = res.data[9].swag5quantity;
        console.log("that.state.swage10quantity: " + that.state.swag10quantity);                       
      }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className='container-fluid'>
          <div className="card mb-3">
            <div className="row no-gutters">
              {/* <div className="col-md-4 row align-itmes-center justify-content-center"> */}
              <img src={this.props.image} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center' />
              {/* </div> */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{this.props.name}</h5>
                  <p className="card-text card-desc">{this.props.description}</p>
                  <p className="card-price">{this.props.price}</p>
                  <div className="card-btn">
                    <button className='btn btn-outline-dark'>Buy this item</button>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-2 row align-items-center justify-content-center">
            <p>{this.props.price}</p>
            <button className='btn btn-outline-dark'>Buy this item</button>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

};
// Render page




export default SaleCard;