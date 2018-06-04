import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TextField label="Name" />
        <br />
        <TextField label="Company" />
        <br />
        <TextField label="Contract Details" />
        <br />
        <br />
        <Button>SUBMIT</Button>
      </div>
    );
  }
}
