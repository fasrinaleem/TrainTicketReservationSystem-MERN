import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SOURCE, DESTINATION, NOOFTICKETS } from "./TicketBooking";

export const TOTALAMMOUNT = "TOTALAMMOUNT";

//export the NIC
export const NIC = "NIC";

export class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nic: "",
      total: ""
    };
    this.onSend = this.onSend.bind.value;
    this.calPay = this.calPay.bind(this);
  }

  calPay(e) {
    let total = this.state.total;

    if (SOURCE === "Badulla" && DESTINATION === "COLOMBO") {
      this.setState({ total: NOOFTICKETS * 370 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    } else if (SOURCE === "Badulla" && DESTINATION === "COLOMBO") {
      this.setState({ total: NOOFTICKETS * 50 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    }
  }

  //handling the click event
  handleClickEvent = e => {
    e.preventDefault();
    this.props.handleClick(e);
  };
  onSend(e) {
    e.preventDefault();
    this.setState({
      nic: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    return (
      <tr>
        <td>
          <Link
            to={"/govempdis"}
            value="yes"
            onClick={this.handleClickEvent}
            id="yes"
            style={{
              backgroundColor: "#39e600",
              color: "white",
              padding: 10,
              paddingRight: 25
            }}
          >
            {" "}
            Yes{" "}
          </Link>
          <Link
            to={"/paymentmethod"}
            value="no"
            id="no"
            onClick={this.handleClickEvent}
            style={{
              backgroundColor: "#ff3300",
              color: "white",
              padding: 10,
              paddingRight: 25
            }}
          >
            {" "}
            No{" "}
          </Link>
        </td>
      </tr>
    );
  }
}

export default class GovEmporNot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      isYesClicked: false,
      isNoClicked: false,
      nic: ""
    };
  }

  //handle the click event if yes clicked then input textfield will appear
  //if no clicked then go to paymentmethod component
  handleOnClick = e => {
    e.preventDefault();
    if (e.target.id === "yes") {
      this.setState({ isYesClicked: true });
    } else {
      this.setState({ isYesClicked: false });
      this.props.history.push(`/paymentmethod`);
    }
  };

  bookList() {
    return <Book handleClick={this.handleOnClick} />;
  }

  handleNICChange = e => {
    let nic = e.target.value;
    if (nic !== "") {
      this.setState({ nic: nic });
    }
  };

  handleSendClick = e => {
    //store the state value into variable
    let nic = this.state.nic;

    //if nic is not equal to empty store the NIC into session storage
    if (nic !== "") {
      sessionStorage.setItem(NIC, nic);

      // verifying the employee availability
      fetch("http://localhost:4000/sms/nic", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          nic: nic
        }
      })
        .then(response => {
          // response.json();
          console.log("response: " + response);
          return response.json();
        })
        .then(json => {
          if (json === null) this.props.history.push(`/notgovemp`);
          else this.props.history.push(`/govempdis`);
          console.log(json);
        })
        .catch(err => {
          console.log("error: " + err);
        });
    } else {
      alert("NIC Field is empty");
      console.log("NIC Field is empty");
    }
  };

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
                  <h2> Looking for Discount ? </h2>
                  <h6>
                    {" "}
                    If you are a goverment employee you can get the discount
                    from us.To get the discount select "Yes" and enter your NIC.
                    If you are not a goverment employee you cannot get discount.
                    So click "No" to continue
                  </h6>
                  <br />
                </strong>
              </h5>

              <form id="formid">
                <div className="card-body p-lg-5">
                  <table>
                    <tbody>{this.bookList()}</tbody>
                  </table>
                  {this.state.isYesClicked && (
                    <div>
                      <input
                        type="text"
                        name="nic"
                        id="nic"
                        placeholder="Enter NIC Number Here"
                        value={this.props.nic}
                        onChange={this.handleNICChange}
                        style={{
                          backgroundColor: "#d9ffcc",
                          color: "black",
                          padding: 5,
                          paddingRight: 25
                        }}
                      />
                      <Link
                        style={{
                          backgroundColor: "#39e600",
                          color: "white",
                          padding: 5,
                          paddingRight: 25
                        }}
                        onClick={this.handleSendClick}
                      >
                        {" "}
                        Send{" "}
                      </Link>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
