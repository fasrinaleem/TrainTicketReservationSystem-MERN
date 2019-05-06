import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const Book = props => (
//   <tr>
//     <td>
//       {/* <Link to={"/update/" + props.mybooking._id}> Yes </Link> */}
//       <Link to={"/book/step222"} > Yes </Link>
//       {/* <Link to={"update/:id"}> Yes </Link> */}
//       <Link to={"/book/step3"}> No </Link>
//     </td>
//   </tr>
// );

export class Book extends Component {
  constructor(props) {
    super(props);
  }

  handleClickEvent = e => {
    e.preventDefault();
    this.props.handleClick(e);
  };

  render() {
    return (
      <tr>
        <td>
          <Link
            to={"/book/step222"}
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
            to={"/book/step3"}
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
      isNoClicked: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/trainticketrs/api2/mybooking/")
      .then(response => {
        this.setState({ bookings: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleOnClick = e => {
    e.preventDefault();
    if (e.target.id === "yes") {
      this.setState({ isYesClicked: true });
    } else {
      this.setState({ isYesClicked: false });
      this.props.history.push(`/book/step3`);
    }
  };

  bookList() {
    // return this.state.bookings.map(function(currentBooking, i) {
    //   return <Book mybooking={currentBooking} key={i} />;
    // });
    return <Book handleClick={this.handleOnClick} />;
  }

  // getnic(e) {
  //   var form = document.getElementById("formid");
  //   form.addEventListener("submit", function() {
  //     var nic = document.getElementById("nic").value;
  //     localStorage.setItem("nicpass", nic);

  //     window.location = "NEW URL";
  //   });
  // }

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
                  {/* <Link to={"/mybooking/update/" + props.mybooking._id}>
                  {" "}
                  Yes{" "}
                </Link>
                <Link to={"/book/step3"}> No </Link> */}
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
                        onChange={this.getnic}
                        style={{
                          backgroundColor: "#d9ffcc",
                          color: "white",
                          padding: 5,
                          paddingRight: 25
                        }}
                      />
                      <Link
                        to={"/book/step222"}
                        style={{
                          backgroundColor: "#39e600",
                          color: "white",
                          padding: 5,
                          paddingRight: 25
                        }}
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
