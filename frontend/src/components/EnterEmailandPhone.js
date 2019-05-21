import React, { Component } from "react";
import { Link } from "react-router-dom";
export const EMAIL = "EMAIL";
export const MOBILE = "MOBILE";

export default class EnterEmailandPhone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      mobile: ""
    };
  }

  handleEmailChange = e => {
    let value = e.target.value;
    if (value !== "") {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ email: "" });
    }
  };

  handleMobileChange = e => {
    let value = e.target.value;
    if (value !== "") {
      this.setState({ mobile: e.target.value });
    } else {
      this.setState({ mobile: "" });
    }
  };

  handleClick = () => {
    let em = this.state.email;
    let mob = this.state.mobile;

    if (em === "" || mob === "") {
      alert("Fill Both Fields");
    } else {
      console.log("Mail Address " + em);
      fetch("http://localhost:4000/trainticketrs/api4/sendemail", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          to: em,
          from: "apinternationalpvtltd1@gmail.com",
          subject: "Online Train Ticket Booking",
          message:
            "<p>  Dear Customer,Your payment is succesfully received... Your Booking ID is 1159075. Hope you enjoy this service.</p>"
        })
      })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(json => {
          console.log(
            "Email has been sended to : " + json.to + " Successfully"
          );
          fetch("http://localhost:4000/trainticketrs/api5/sendsms", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              to: mob
            })
          })
            .then(response => {
              console.log("SMS : " + response);
              return response.json();
            })
            .then(json => {
              console.log(
                "SMS has been sended to : " + json.to + " Successfuly"
              );
            });
        });
      this.props.history.push(`/thankyoumessage`);
    }
    // const email = this.state.email;
    // sessionStorage.setItem(EMAIL, em);
    // sessionStorage.setItem(MOBILE, mob);
  };

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
            name="email"
            id="nic"
            placeholder="Enter Email Address"
            style={{
              backgroundColor: "#d9ffcc",
              color: "black",
              padding: 5,
              paddingRight: 25
            }}
            onChange={this.handleEmailChange}
          />{" "}
          <br />
          <input
            type="text"
            name="mobile"
            id="nic"
            placeholder="Enter Mobile Number"
            style={{
              backgroundColor: "#d9ffcc",
              color: "black",
              padding: 5,
              paddingRight: 30
            }}
            onChange={this.handleMobileChange}
          />
          <br />
          <br />
          {/* <Link
            to="/thankyoumessage"
            style={{
              backgroundColor: "#39e600",
              color: "white",
              padding: 5,
              paddingRight: 25
            }}
            onClick={this.onClick}
          >
            {" "}
            SEND{" "}
          </Link> */}
          <button type="submit" onClick={this.handleClick}>
            Submit
          </button>
        </center>
      </div>
    );
  }
}
