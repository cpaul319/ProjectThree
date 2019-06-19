
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";
import OrderNav from "../components/OrderNav";

console.log("before Log In function is called.");
function Orders() {
    return (
        <div className="App">   
            <OrderNav />
            <p>Orders page</p>
        </div>
    );
}
console.log("after Log In function is called.");

export default Orders;