import axios from "axios";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";
//import Enter from "Enter.js";
import SaleNav from "../components/SaleNav";
import SaleCard from "../components/SaleCard";
//minor change for push update
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
    cvv: 4
    
};


componentDidMount() {
  console.log("did mount");
  //console.log("imported email: " + Enter.state.email);
  axios.get('api/users')
.then(function (res) {
  const firstName = firstName.res.data;
        this.setState({ firstName });
})
.catch(function (error) {
  console.log(error);
});
console.log(this.state.userName);
}



 render(){
  console.log("before Log In function is called.");
    return (
        <div className="App">
            <SaleNav />
            <p>Welcome {this.state.userName}</p>
            <p>Sale page</p>
            <SaleCard />
        </div>
    );
    console.log("after Log In function is called.");

    }

}

export default Sale;