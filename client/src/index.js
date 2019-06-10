import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

console.log("b4 render");
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
console.log("after render");
