
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { isAbsolute } from "path";
import SaleNav from "../components/SaleNav";
import SaleCard from "../components/SaleCard";

console.log("before Log In function is called.");
function Sale() {
    return (
        <div className="App">
            <SaleNav />
            <p>Sale page</p>
            <SaleCard />
        </div>
    );
}
console.log("after Log In function is called.");

export default Sale;