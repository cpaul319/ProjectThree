//  This function is called 

import React, { Component } from "react";
import Orders from '../components/Orders';
import { withRouter } from 'react-router-dom';
import "../Orders.css"

const styles = {
  background: "/images/gotmap.jpg"
}
class Sale extends Component {
  constructor() {
    super()
    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      creditCardNumber: 3,
      expDate: 1,
      cvv: 4
    }
  }
  
render () {
  return (
    <div style={styles.background} className="App orders-body">
          <Orders/>    
          <div className="order-banner">
            <p className="order-banner-title">your swag</p>
          </div>        
    </div>
  )};
}

export default withRouter(Orders);