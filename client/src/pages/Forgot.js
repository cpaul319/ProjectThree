import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";
import Nav from "../components/Nav";
import { Input, TextArea, FormBtn } from "../components/Form";

class Forgot extends Component  {
    state = {
        email: ""
    };

    handleInputChange = event =>    {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("email is " + this.email);
    }

    render()    {
        return(
            <div className="App">
                <Nav />
                <p>Forgot password?</p>
                <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name = "email"
                placeholder="email (required)"
              />
              <a href = '/sale'>Submit</a>
            </form>
            </div>
        );
    }
}

export default Forgot;

/*
function Forgot() {
    return (
        <div className="App">
            <Nav />
            <p>Forgot login page</p>
        </div>
    );
}

export default Forgot; */