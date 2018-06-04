import React, { Component } from "react";
import firebase from "./firebase.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formsRef = firebase.database().ref("submittedForms");
    let newForm = {
      name: this.props.currentName,
      company: this.props.currentCompany,
      details: this.props.currentDetails
    };
    formsRef.push(newForm);
    this.props.updateParentState("name", "");
    this.props.updateParentState("company", "");
    this.props.updateParentState("details", "");
  }

  render() {
    return (
      <div>
        <AppBar>
          {" "}
          <div className="Title">Contract Form</div>
        </AppBar>
        <br />
        <br />
        <br />
        <br />
        <TextField
          label="Name"
          onChange={e => this.props.updateParentState("name", e.target.value)}
          value={this.props.currentName}
        />
        <br />
        <br />
        <TextField
          label="Company"
          onChange={e =>
            this.props.updateParentState("company", e.target.value)
          }
          value={this.props.currentCompany}
        />
        <br />
        <br />
        <TextField
          label="Contract Details"
          onChange={e =>
            this.props.updateParentState("details", e.target.value)
          }
          value={this.props.currentDetails}
        />
        <br />
        <br />
        <Button onClick={e => this.handleSubmit(e)}>SUBMIT</Button>
      </div>
    );
  }
}
