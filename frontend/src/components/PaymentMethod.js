import React, { Component } from "react";

import visalogo from "../resources/visalogo.png";
import masterlogo from "../resources/masterlogo.png";

class PaymentMethod extends Component {
  handleSubmit = e => {
    e.preventDefault();

    console.log(`Form submitted:`);

    // this.setState({
    //   method: this.state.value
    // });

    if (e.target.id === "creditcard") {
      // alert(e.target.id);
      this.props.history.push(`/book/step4`);
    } else this.props.history.push(`/book/step5`);
    // } else {
    //   alert(e.target.id);
    // }
  };

  // checkPaymentmeth(e) {}

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
                  <h5>Your Details</h5>
                  <h6> Source : </h6>
                  <h6> Destination : </h6>
                  <h6> No of tickets : </h6>
                  Select the Payment Method
                  <br />
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form className="text-center" style={{ color: "#757575" }}>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="creditcard"
                      name="defaultExampleRadios"
                      value="creditcard"
                      onClick={this.handleSubmit}
                    />
                    <label className="custom-control-label" for="creditcard">
                      Credit Card
                      <div>
                        <img src={visalogo} width="50" height="20" alt="" />
                        <img src={masterlogo} width="50" height="22" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="mobilenum"
                      name="defaultExampleRadios"
                      value="mobile"
                      onClick={this.handleSubmit}
                      checked
                    />
                    <label className="custom-control-label" for="mobilenum">
                      Mobile Number (Payment will added to the mobile bill)
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                  >
                    NEXT
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default PaymentMethod;
