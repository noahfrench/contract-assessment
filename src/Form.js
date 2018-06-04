import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

export default class Form extends Component {
  constructor(props) {
    super(props);
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
        />
        <br />
        <br />
        <TextField
          label="Company"
          onChange={e =>
            this.props.updateParentState("company", e.target.value)
          }
        />
        <br />
        <br />
        <TextField
          label="Contract Details"
          onChange={e =>
            this.props.updateParentState("details", e.target.value)
          }
        />
        <br />
        <br />
        <Button>SUBMIT</Button>
      </div>
    );
  }
}
