import axios from "axios";
import Nav from "../components/Nav";
import { isAbsolute } from "path";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Link, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import {register} from '../components/UserFunction';
import "../Register.css"
 
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
            this.state.redirect = false;
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
            this.setRedirect();
            this.renderRedirect();
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
                <div className="reg-box1">
                    <AvField
                            name="userName"
                            placeholder="username"
                            value={this.state.userName}
                            onChange={this.handleInputChange}
                        />
                        <AvField
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                        />
                        <AvField
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        />
                        <AvField
                            name="email"
                            placeholder="e-mail"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <AvField
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <AvField
                            name="confirm password"
                            placeholder="confirm password"

                        />
                    </div> 
                    <div className="reg-box2">  
                        <AvField
                            name="address"
                            placeholder="address"
                            value={this.state.address}
                            onChange={this.handleInputChange}
                        />
                        <AvField
                            name="city"
                            placeholder="city"
                            value={this.state.city}
                            onChange={this.handleInputChange}
                        />
                    {/* <AvField
                            name="state"
                            placeholder="State"
                            value={this.state.state}
                            onChange={this.handleInputChange}
                        /> */}
                        <AvField 
                        type="select" 
                        name="state"
                        value={this.state.state} 
                        onChange={this.handleInputChange} 
                        >
                            <option value="">State</option>
                            <option value="Alaska">AK</option>
                            <option value="Alabama">AL</option>
                            <option value="Arkansas">AR</option>
                            <option value="Arizona">AZ</option>
                            <option value="California">CA</option>
                            <option value="Colorado">CO</option>
                            <option value="Connecticut">CT</option>
                            <option value="Delaware">DE</option>
                            <option value="Florida">FL</option>
                            <option value="Georgia">GA</option>
                            <option value="Hawaii">HI</option>
                            <option value="Iowa">IA</option>
                            <option value="Idaho">ID</option>
                            <option value="Illinios">IL</option>
                            <option value="Indiana">IN</option>
                            <option value="Kansas">KS</option>
                            <option value="Kentucky">KY</option>
                            <option value="Lousiana">LA</option>
                            <option value="Massachusetts">MA</option>
                            <option value="Maryland">MD</option>
                            <option value="Maine">ME</option>
                            <option value="Michigan">MI</option>
                            <option value="Minnesota">MN</option>
                            <option value="Missouri">MO</option>
                            <option value="Mississippi">MS</option>
                            <option value="Montana">MT</option>
                            <option value="North Carolina">NC</option>
                            <option value="North Dakota">ND</option>
                            <option value="Nebraska">NE</option>
                            <option value="New Hampshire">NH</option>
                            <option value="New Jersey">NJ</option>
                            <option value="New Mexico">NM</option>
                            <option value="Nevada">NV</option>
                            <option value="New York">NY</option>
                            <option value="Ohio">OH</option>
                            <option value="Oklahoma">OK</option>
                            <option value="Oregon">OR</option>
                            <option value="Pennsylvania">PA</option>
                            <option value="Rhode Island">RI</option>
                            <option value="South Carolina">SC</option>
                            <option value="South Dakota">SD</option>
                            <option value="Tennessee">TN</option>
                            <option value="Texas">TX</option>
                            <option value="Utah">UT</option>
                            <option value="Virginia">VA</option>
                            <option value="Vermont">VT</option>
                            <option value="Washington">WA</option>
                            <option value="Wisconsin">WI</option>
                            <option value="West Virginia">WV</option>
                            <option value="Wyoming">WY</option>
                        </AvField>
                        <AvField
                            name="zip"
                            placeholder="Zip code"
                            value={this.state.zip}
                            onChange={this.handleInputChange}
                        />
                        <AvField
                            name="creditCardNumber"
                            placeholder="Credit Card Number"
                            value={this.state.creditCardNumber}
                            onChange={this.handleInputChange}
                        />
                        <AvField
                            name="expDate"
                            placeholder="Expiration Date"
                            value={this.state.expDate}
                            onChange={this.handleInputChange}
                        />
                        <AvField
                            name="cvv"
                            placeholder="cvv"
                            value={this.state.cvv}
                            onChange={this.handleInputChange}
                        />
                    </div>
                        <Button className="submit-btn" color="secondary" onClick={this.handleFormSubmit}>Submit</Button>
                </AvForm>
                {/* <Link to='/sale'>Sale Page</Link> */}
            </div>
        );
    }
}

export default Register;