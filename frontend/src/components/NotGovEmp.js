import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotGovEmp extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#D3D3D3" }}>
        <div className="container" style={{ marginTop: 0 }}>
          <center>
            <div className="card" style={{ width: 600 }}>
              <h5
                className="card-header info-color white-text text-center py-4"
                style={{ backgroundColor: " #0000FF " }}
              >
                <strong style={{ color: "white" }}>
                  {" "}
                  <h2 style={{ color: "#ff3300" }}>
                    {" "}
                    <b> SORRY..</b>{" "}
                  </h2>
                  <h5> YOU ARE NOT THE GOVERMENT EMPLOYEE </h5>
                  <h6>
                    Only the goverment employees will get discounts from us.
                    Press continue to see the payment details
                  </h6>
                  <br />
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form className="text-center" style={{ color: "#757575" }}>
                  <Link
                    to="/paymentmethod"
                    style={{
                      backgroundColor: "#39e600",
                      color: "white",
                      padding: 10,
                      paddingRight: 25
                    }}
                  >
                    {" "}
                    CONTINUE{" "}
                  </Link>
                  <Link
                    to="/govempornot"
                    style={{
                      backgroundColor: "#ff3300",
                      color: "white",
                      padding: 10,
                      paddingRight: 25
                    }}
                  >
                    {" "}
                    GO BACK{" "}
                  </Link>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
