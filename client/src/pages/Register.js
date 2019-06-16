import React from "react";
import Nav from "../components/Nav";
import { isAbsolute } from "path";
import { Input, TextArea, FormBtn } from "../components/Form";

function Register() {
    return (
        <div>
            <Nav />
            <p>Registration page</p>
            <form>
                <Input
                    name="username"
                    placeholder="username (required)"
                />
                <Input
                    name="First Name"
                    placeholder="First Name (required)"
                />
                <Input
                    name="Last Name"
                    placeholder="Last Name (required)"
                />
                <Input
                    name="e-mail"
                    placeholder="e-mail (required)"
                />
                <Input
                    name="password"
                    placeholder="password (required)"
                />
                <Input
                    name="confirm password"
                    placeholder="confirm password (required)"
                />
                <Input
                    name="address"
                    placeholder="address (required)"
                />
                <Input
                    name="city"
                    placeholder="city (required)"
                />
                <Input
                    name="State"
                    placeholder="State (required)"
                />
                <Input
                    name="Zip code"
                    placeholder="Zip code (required)"
                />
                <Input
                    name="Credit card number"
                    placeholder="Credit Card Number (required)"
                />
                <Input
                    name="Expiration Date"
                    placeholder="Expiration Date (required)"
                />
                <Input
                    name="cvv"
                    placeholder="cvv (required)"
                />
            </form>
            <a href = '/sale'>Register</a>
        </div>
    );
}

export default Register;