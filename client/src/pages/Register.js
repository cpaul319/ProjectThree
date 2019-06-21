import axios from "axios";
import Nav from "../components/Nav";
import { isAbsolute } from "path";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Link, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import {register} from '../components/UserFunction';
 
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
        cvv: 4,
        redirect: false
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    handleInputChange = event => {
        
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log("value is " + value);
    }

    renderRedirect = () => {
        console.log("redirect works!");
        if (this.state.redirect) {
            return <Redirect to='/sale' />
        }
    }
//add functionality where it send the data to the Database
    handleFormSubmit = event => {

        const user ={
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
                        validate={{
                            required: {value: true, errorMessage: 'Please enter username'}
                        }}
                    />
                    <AvField
                        name="firstName"
                        placeholder="First Name (required)"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter first name'}
                        }}
                    />
                    <AvField
                        name="lastName"
                        placeholder="Last Name (required)"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter last name'}
                        }}
                    />
                    <AvField
                        name="email"
                        placeholder="e-mail (required)"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        validate={{ 
                            email: true,
                            required: {value: true, errorMessage: 'Please enter e-mail'} 
                        }}
                    />
                    <AvField
                        name="password"
                        placeholder="password (required)"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter password'},
                            pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers' },
                            minLength: { value: 6, errorMessage: 'Your name must be between 6 and 16 characters' },
                            maxLength: { value: 16, errorMessage: 'Your name must be between 6 and 16 characters' }
                        }}
                    />
                    <AvField
                        name="confirm password"
                        placeholder="confirm password (required)"
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please confirm password'},
                            pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers' },
                            minLength: { value: 6, errorMessage: 'Your name must be between 6 and 16 characters' },
                            maxLength: { value: 16, errorMessage: 'Your name must be between 6 and 16 characters' }
                        }}
                    />
                    <AvField
                        name="address"
                        placeholder="address (required)"
                        value={this.state.address}
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter address'}
                        }}
                    />
                    <AvField
                        name="city"
                        placeholder="city (required)"
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter city'}
                        }}
                    />
                   <AvField
                        name="state"
                        placeholder="State (required)"
                        value={this.state.state}
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter state'}
                        }}
                    />
                    <AvField
                        name="zip"
                        placeholder="Zip code (required)"
                        value={this.state.zip}
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter zip code'}
                        }}
                    />
                    <AvField
                        name="creditCardNumber"
                        placeholder="Credit Card Number (required)"
                        value={this.state.creditCardNumber}
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter credit card number'}
                        }}
                    />
                    <AvField
                        name="expDate"
                        placeholder="Expiration Date (required)"
                        value={this.state.expDate}
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter expiration date'},
                            date: {format: 'MM/YY', errorMessage: 'Please enter correct date in MM/YY format'}
                        }}
                    />
                   <AvField
                        name="cvv"
                        placeholder="cvv (required)"
                        value={this.state.cvv}
                        onChange={this.handleInputChange}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter cvv'}
                        }}
                    />
                    <Button color="secondary" onClick={this.handleFormSubmit}>Submit</Button>
                </AvForm>
                {/*<Link to='/sale'>Sale Page</Link>*/}
            </div>
        );
    }
}

export default Register;