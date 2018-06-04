import React, { Component } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Form from "./Form.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      details: "",
      submittedContracts: []
    };
  }
  render() {
    return (
      <div className="App">
        <AppBar>Contracts</AppBar>
        <br />
        <br />
        <Form />
      </div>
    );
  }
}

export default App;
