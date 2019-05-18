import React, { Component } from "react";
import { Link } from "react-router-dom";
import thankyouimg from "../resources/back7edit.jpg";
import { EMAIL, MOBILE } from "./EnterEmailandPhone";
import { json } from "body-parser";

class ThankYouMessage extends Component {
  render() {
    return (
      <div>
        <center>
          {/* <h2> You will get the affirmation message by SMS and Email Soon.</h2> */}
          <img src={thankyouimg} width="1000" />
          <Link
            to="/"
            style={{
              backgroundColor: "#6900cb",
              color: "white",
              padding: 25,
              paddingRight: 30,
              fontSize: 40
            }}
          >
            {" "}
            Go to Home{" "}
          </Link>
        </center>
      </div>
    );
  }
}

export default ThankYouMessage;
