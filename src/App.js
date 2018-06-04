import React, { Component } from "react";
import "./App.css";
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

  updateField = (field, newValue) => {
    this.setState({
      [field]: newValue
    });
  };

  render() {
    return (
      <div className="App">
        <Form updateParentState={this.updateField} />
        <br />
      </div>
    );
  }
}

export default App;
