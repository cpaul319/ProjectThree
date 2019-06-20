
import Nav from "../components/Nav";
import { isAbsolute } from "path";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Link, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
// import Users from "./routes/users";
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
        creditCardNumber: "",
        expDate: "",
        cvv: "",
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

    handleFormSubmit = event => {
        console.log("submit!");
        console.log("uername: " + this.state.userName);
        console.log("firstname: " + this.state.firstName);
        console.log("lastname: " + this.state.lastName);
        console.log("email: " + this.state.email);
        console.log("password: " + this.state.password);
        if (!this.state.email) {
            console.log("e-mail empty");
        } else {
            this.setRedirect();
            this.renderRedirect();
        }
    }
    render() {
        return (
            <div>
                <Nav />
                <p>Registration page</p>
                <AvForm>
                    <Input
                        name="username"
                        placeholder="username (required)"
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="First Name"
                        placeholder="First Name (required)"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="Last Name"
                        placeholder="Last Name (required)"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="email"
                        placeholder="e-mail (required)"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="password"
                        placeholder="password (required)"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="confirm password"
                        placeholder="confirm password (required)"

                    />
                    <Input
                        name="address"
                        placeholder="address (required)"
                        value={this.state.address}
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="city"
                        placeholder="city (required)"
                        value={this.state.city}
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="State"
                        placeholder="State (required)"
                        value={this.state.state}
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="Zip code"
                        placeholder="Zip code (required)"
                        value={this.state.zip}
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="Credit card number"
                        placeholder="Credit Card Number (required)"
                        value={this.state.creditCardNumber}
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="Expiration Date"
                        placeholder="Expiration Date (required)"
                        value={this.state.expDate}
                        onChange={this.handleInputChange}
                    />
                    <Input
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