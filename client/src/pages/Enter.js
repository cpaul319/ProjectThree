import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Redirect } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import Axios from 'axios';

class Enter extends Component {
    state = {
        email: "",
        password: "",
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
        console.log("submit!");
        console.log("email: " + this.state.email);
        console.log("password: " + this.state.password);
        if (this.state.email && this.ValidateEmail() && this.state.password) {
            this.setRedirect();
            this.renderRedirect();
            /*
            $.ajax({
                method: "GET",
                url: "/api/allusers"
              })
                // With that done, add the note information to the page
                .then(function (data) {
                  console.log("those are the contents of the table");
                  console.log(data);
                });*/
                Axios.post('api/allusers', user)
                .then(function (response) {
                    console.log("this is db results");
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        //     Axios.get('/api/allusers').then(req,res);
        //     console.log("this is db results");
        //     console.log(res);

        // } else {
        //     console.log("e-mail empty");
        // }
    }

    ValidateEmail() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        return re.test(String(this.state.email).toLowerCase());
    }
  
    render() {
        return (
            <div className="App">
                <Nav />
                <p>Login page</p>
                {this.renderRedirect()}
                <AvForm>
                    <AvField name="email" label="Email" type="email" onChange={this.handleInputChange} validate={{ 
                        email: {value: true, errorMessage: 'Please enter valid e-mail'},
                        required: {value: true, errorMessage: 'Please enter e-mail'} 
                    }} />
                    <AvField name="password" label="Password" type="text" onChange={this.handleInputChange} validate={{
                        required: { value: true, errorMessage: 'Please enter password' },
                        pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers' },
                        minLength: { value: 6, errorMessage: 'Your name must be between 6 and 16 characters' },
                        maxLength: { value: 16, errorMessage: 'Your name must be between 6 and 16 characters' }
                    }} />
                    <Button color="primary" onClick={this.handleFormSubmit}>Submit</Button>
                </AvForm>
            </div>
        )
    }
}

export default Enter;