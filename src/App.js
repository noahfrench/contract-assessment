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

  removeItem(e, itemId, name) {
    e.preventDefault();
    const formRef = firebase.database().ref(`/submittedForms/${itemId}`);
    if (window.confirm(`Are you sure you want to delete ${name}'s contract?`)) {
      formRef.remove();
    }
  }

  componentDidMount() {
    const formsRef = firebase.database().ref("submittedForms");
    formsRef.on("value", snapshot => {
      let forms = snapshot.val();
      let newState = [];
      for (let form in forms) {
        let newForm = {
          id: form,
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
          currentSubmittedForms={this.state.submittedForms}
        />
        <br />
        <h1>Submitted Contracts:</h1>
        <div className="All-contracts">
          {this.state.submittedForms.map(form => {
            return (
              <div className="Single-contract">
                <button
                  className="Delete-button"
                  onClick={e => this.removeItem(e, form.id, form.name)}
                >
                  <div className="Delete-button-text">x </div>
                </button>
                <div className="Contract-text">
                  <div className="Field">Name:</div> {form.name} <br />
                  <div className="Field">Company:</div> {form.company}
                  <br />
                  <div className="Field">Contract Details:</div> {form.details}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
