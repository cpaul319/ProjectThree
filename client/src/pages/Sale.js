import axios from "axios";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";
import SaleNav from "../components/SaleNav";
import SaleCard from "../components/SaleCard";

class Sale extends Component {

state = {
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
    cvv: 4,
    redirect: false
};
componentDidMount() {
  console.log("did mount");
  axios.get('api/users')
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

}



 render(){
  console.log("before Log In function is called.");
    return (
        <div className="App">
            <SaleNav />
            <p>Sale page</p>
            <SaleCard />
        </div>
    );
    console.log("after Log In function is called.");
console.log(this.state.userName);
    }

}

export default Sale;