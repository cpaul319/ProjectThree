/*import React from "react";
import Nav from "../components/Nav";
import { isAbsolute } from "path";

class Enter extends React.Component {
    return (
        <p>Enter page</p>
    /*<form>
        <label>
            Name:
    <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
    </form>*/

/* );
}

export default Enter; */

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
//import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
/*import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Enter = () => {
    return (
        <MDBContainer>
            <Nav />
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Sign in</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                            Your email
            </label>
                        <input
                            type="email"
                            id="defaultFormLoginEmailEx"
                            className="form-control"
                        />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                            Your password
            </label>
                        <input
                            type="password"
                            id="defaultFormLoginPasswordEx"
                            className="form-control"
                        />
                        <div className="text-center mt-4">
                            <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Enter; */

/*
console.log("before Log In function is called.");
function Enter() {
    return (
        <div className="App">
            <Nav />
            <p>Login page</p>
            <form>
                <Input
                    name="email"
                    placeholder="email (required)"
                />
                <Input
                    name="password"
                    placeholder="password (required)"
                />
            </form>
            <p><a href='/sale'>Log In</a></p>
            <p><a href='/forgot'>Forgot</a></p>
        </div>
    );
}
console.log("after Log In function is called.");

*/

class Enter extends Component   {
    state = {
        email: "",
        password: ""
    };

    handleInputChange = event =>    {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log("value is " + value);
    }

    handleFormSubmit = event => {
        console.log("submit!");
        console.log("email: " + this.state.email);
        console.log("password: " + this.state.password);
        if (!this.state.email) {

        }
    }

    render()    {
        return (
            <div className="App">
            <Nav />
            <p>Login page</p>
            <form>
                <Input
                    name="email"
                    placeholder="email (required)"
                    onChange={this.handleInputChange}
                />
                <Input
                    name="password"
                    placeholder="password (required)"
                    onChange={this.handleInputChange}
                />
                <p><Link to = '/sale' onClick = {this.handleFormSubmit}>Submit</Link></p>
                <p><Link to = '/forgot'>Forgot Password</Link></p>
                {/*<FormBtn src = '/sale'>Submit</FormBtn>
                <FormBtn>Forgot</FormBtn>*/}
            </form>
            {/*<p><a href='/sale'>Log In</a></p>
            <p><a href='/forgot'>Forgot</a></p>*/}
        </div>
        )
    }
}

export default Enter;