import React, { Component } from "react";
import firebase from "./firebase.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Form extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let formsRef = firebase.database().ref("submittedForms");
    let newForm = {
      name: this.props.currentName,
      company: this.props.currentCompany,
      details: this.props.currentDetails
    };
    let repeatForm = this.props.currentSubmittedForms.some(
      form =>
        form.name === newForm.name &&
        form.company === newForm.company &&
        form.details === newForm.details
    );
    if (
      this.props.currentName === "" ||
      this.props.currentCompany === "" ||
      this.props.currentDetails === ""
    ) {
      window.alert("Please fill out all fields.");
    } else if (repeatForm) {
      window.alert("This contract is already in the database.");
    } else {
      formsRef.push(newForm);
      this.props.updateParentState("name", "");
      this.props.updateParentState("company", "");
      this.props.updateParentState("details", "");
    }
  }

  render() {
    return (
      <div>
        <div className="Title">Contract Form</div>
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
        <Button
          variant="outlined"
          color="primary"
          onClick={e => this.handleSubmit(e)}
        >
          SUBMIT
        </Button>
      </div>
    );
  }
}
