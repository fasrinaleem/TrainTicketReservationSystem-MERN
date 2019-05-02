import React, { Component } from "react";

class TicketBooking extends Component {
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
                  Book Train Tickets Online{" "}
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form className="text-center" style={{ color: "#757575" }}>
                  <label> From : </label>
                  <select class="browser-default custom-select mb-4">
                    <option value="" disabled selected>
                      Choose option
                    </option>
                    <option value="1">Feedback</option>
                    <option value="2">Report a bug</option>
                    <option value="3">Feature request</option>
                    <option value="4">Feature request</option>
                  </select>
                  <label> To : </label>
                  <select class="browser-default custom-select mb-4">
                    <option value="" disabled selected>
                      Choose option
                    </option>
                    <option value="1">Feedback</option>
                    <option value="2">Report a bug</option>
                    <option value="3">Feature request</option>
                    <option value="4">Feature request</option>
                  </select>

                  <label> No of Tickets : </label>
                  <input
                    type="text"
                    placeholder="No of tickets"
                    className="form-control mb-4"
                  />
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

export default TicketBooking;
