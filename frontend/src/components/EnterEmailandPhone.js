import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EnterEmailandPhone extends Component {
  render() {
    return (
      <div className="card">
        <center>
          Enter your Email Address and Phone Number below to get the Train
          Details
          <br />
          <br /> <br />
          <input
            type="text"
            name="nic"
            id="nic"
            placeholder="Enter Email Address"
            value={this.props.nic}
            onChange={this.handleNICChange}
            style={{
              backgroundColor: "#d9ffcc",
              color: "black",
              padding: 5,
              paddingRight: 25
            }}
          />{" "}
          <br />
          <input
            type="text"
            name="nic"
            id="nic"
            placeholder="Enter Mobile Number"
            value={this.props.nic}
            onChange={this.handleNICChange}
            style={{
              backgroundColor: "#d9ffcc",
              color: "black",
              padding: 5,
              paddingRight: 30
            }}
          />
          <br />
          <br />
          <Link
            to="/thankyoumessage"
            style={{
              backgroundColor: "#39e600",
              color: "white",
              padding: 5,
              paddingRight: 25
            }}
          >
            {" "}
            SEND{" "}
          </Link>
        </center>
      </div>
    );
  }
}
