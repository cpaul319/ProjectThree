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
    cvv: 4
    
};
componentDidMount() {
  console.log("did mount");
  axios.get('api/users')
.then(function (res) {
  const userName = res.data;
        this.setState({ userName });
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