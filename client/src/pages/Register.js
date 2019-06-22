import axios from "axios";
import Nav from "../components/Nav";
import { isAbsolute } from "path";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Link, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
 


// const User = require('../models/User');
// const Users= require( "../routes/users");
class Register extends Component {

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
        // redirect: false
    };

    // setRedirect = () => {
    //     this.setState({
    //         redirect: true
    //     }, () =>  this.renderRedirect())
        
    // }
    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log("value is " + value);
    }

    // renderRedirect = () => {
    //     console.log("redirect works!");

       
    //         return <Redirect to='/sale' />
        
    // }
    //add functionality where it send the data to the Database
    handleFormSubmit = event => {

        const user = {
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            creditCardNumber: this.state.creditCardNumber,
            expDate: this.state.expDate,
            cvv: this.state.cvv
        }
        console.log(user);

        axios.post('api/users', user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


      

        this.props.history.push('/sale');

    }
    componentDidMount() {
        console.log("did mount");

    }




    render() {
        return (
            <div>
                <Nav />
                <p>Registration page</p>
                <AvForm>
                    <AvField
                        name="userName"
                        placeholder="username (required)"
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="firstName"
                        placeholder="First Name (required)"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="lastName"
                        placeholder="Last Name (required)"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="email"
                        placeholder="e-mail (required)"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="password"
                        placeholder="password (required)"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="confirm password"
                        placeholder="confirm password (required)"

                    />
                    <AvField
                        name="address"
                        placeholder="address (required)"
                        value={this.state.address}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="city"
                        placeholder="city (required)"
                        value={this.state.city}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="state"
                        placeholder="State (required)"
                        value={this.state.state}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="zip"
                        placeholder="Zip code (required)"
                        value={this.state.zip}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="creditCardNumber"
                        placeholder="Credit Card Number (required)"
                        value={this.state.creditCardNumber}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="expDate"
                        placeholder="Expiration Date (required)"
                        value={this.state.expDate}
                        onChange={this.handleInputChange}
                    />
                    <AvField
                        name="cvv"
                        placeholder="cvv (required)"
                        value={this.state.cvv}
                        onChange={this.handleInputChange}
                    />

                    <Button color="secondary" onClick={this.handleFormSubmit}>Submit</Button>
                </AvForm>
                <Link to='/sale'>Sale Page</Link>
            </div>
        );
    }
}

export default Register;