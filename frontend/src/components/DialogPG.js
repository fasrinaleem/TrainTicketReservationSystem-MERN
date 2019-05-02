import React, { Component } from "react";

import dialoglogo from "../resources/dialog.png";

class DialogPG extends Component {
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
                  <h2> Your Bill : </h2>
                </strong>
              </h5>
              <div className="logo">
                <img src={dialoglogo} width="450" height="180" alt="" />
              </div>

              <h2> Dialog Payment Gateway </h2>
              <div className="card-body px-lg-5">
                <form className="text-center" style={{ color: "#757575" }}>
                  <label> Mobile Number : </label>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="form-control mb-4"
                  />
                  <label> Four Digit PIN Number : </label>
                  <input
                    type="text"
                    placeholder="Four Digit PIN Number"
                    className="form-control mb-4"
                  />
                  <label> Amount : </label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-4"
                  />
                  <button
                    className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                  >
                    PROCEED
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

export default DialogPG;
