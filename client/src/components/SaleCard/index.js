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
// update a quantity of purchased item
//= (props) =>
class SaleCard extends Component {

  state = {
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
    swag5quantity: 0
    // redirect: false
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
      swag5quantity: this.state.swag5quantity

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

}
// Render page

const SalesCard = (props) => {
  
  return (
  <div>
    <div className='container'>
    <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src='/images/dragon.jpg' className="card-img" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Random Item</h5>
                <p className="card-text">This is an example of a description for a purchased item. This is only a test.</p>
              </div>
            </div>
            <div className="col-md-2 row align-items-center justify-content-center">
            <p>$50</p>
            <button className='btn btn-primary'>Buy this item</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

};

export default SalesCard;