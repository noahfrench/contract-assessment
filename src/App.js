import React, { Component } from "react";
import "./App.css";
import Form from "./Form.js";
import firebase from "./firebase.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      details: "",
      submittedForms: []
    };
  }

  updateField = (field, newValue) => {
    this.setState({
      [field]: newValue
    });
  };

  componentDidMount() {
    const formsRef = firebase.database().ref("submittedForms");
    formsRef.on("value", snapshot => {
      let forms = snapshot.val();
      let newState = [];
      for (let form in forms) {
        let newForm = {
          name: forms[form].name,
          company: forms[form].company,
          details: forms[form].details
        };
        newState.push(newForm);
      }
      this.setState({
        submittedForms: newState
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Form
          updateParentState={this.updateField}
          currentName={this.state.name}
          currentCompany={this.state.company}
          currentDetails={this.state.details}
        />
        <br />
        Submitted Contracts:
        <br />
        <br />
        {this.state.submittedForms.map(form => {
          return (
            <div>
              <div>Name: {form.name}</div>
              <div>Company: {form.company}</div>
              <div>Contract Details: {form.details}</div>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
