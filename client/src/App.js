/*import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <p>GoT Swag?</p>
      </div>
    );
  }
}

export default App;*/

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LogIn} />
      </div>
    </Router>
  );
}

export default App;
