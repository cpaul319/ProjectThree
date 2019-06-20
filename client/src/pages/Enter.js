import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Redirect } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

 

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
        console.log("submit!");
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
            <div className="App">
                <Nav />
                <p>Login page</p>
                {this.renderRedirect()}
                <AvForm>
                    <AvField name="email" label="Email" type="email" onChange={this.handleInputChange} validate={{ email: true }}/>
                    <AvField name="password" label="Password" type="text" onChange={this.handleInputChange} validate={{
                        required: { value: true, errorMessage: 'Please enter a name' },
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