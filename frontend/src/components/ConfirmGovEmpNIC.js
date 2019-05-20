import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { NIC } from "./GovEmporNot";

class ConfirmGovEmpNIC extends Component {
  constructor(props) {
    super(props);

    this.getnic = this.getnic.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nic: ""
    };
  }

  componentDidMount() {
    //get the nic number from the session storage
    this.setState({ nic: sessionStorage.getItem(NIC) });
  }

  getnic(e) {
    var nic = document.getElementById("nic").value;

    //assing the nic value to state
    this.setState({
      nic: e.target.value
    });
    console.log("nic : " + nic);

    var getnic = localStorage.getItem("nicpass");
    var displaynic = getnic;
  }

  onSubmit(e) {
    e.preventDefault();
  }
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
                  <h2 style={{ color: "#66ff33" }}>
                    {" "}
                    <b> CONGRATULATIONS </b>{" "}
                  </h2>
                  <h6>
                    You have got the 10% discount from your total bill. Confirm
                    your NIC number to reduce it from your bill.
                  </h6>
                  <br />
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form className="text-center" style={{ color: "#757575" }}>
                  <label> NIC Number : </label>
                  <input
                    type="text"
                    placeholder="NIC Number"
                    className="form-control mb-4"
                    id="nic"
                    value={this.state.nic}
                    readOnly
                  />
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
                    CONFIRM{" "}
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

export default ConfirmGovEmpNIC;
