import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { NIC } from "./GovEmporNot";

class GovermentEmployeeDis extends Component {
  constructor(props) {
    super(props);

    this.getnic = this.getnic.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nic: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api2/mybooking/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          nic: response.data.nic
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({ nic: sessionStorage.getItem(NIC) });
  }

  getnic(e) {
    var nic = document.getElementById("nic").value;
    this.setState({
      nic: e.target.value
    });
    console.log("nic : " + nic);

    var getnic = localStorage.getItem("nicpass");
    var displaynic = getnic;
    alert("Inserted Data" + displaynic);

    //  localStorage.removeItem("objectToPass"); // Clear the localStorage
  }

  onSubmit(e) {
    e.preventDefault();

    // const updatedCourse = {
    //   nic: this.state.nic
    // };

    // axios
    //   .post(
    //     "http://localhost:4000/api2/mybooking/update/" +
    //       this.props.match.params.id,
    //     updatedCourse
    //   )
    //   .then(res => console.log(res.data));

    // console.log(`Form Submitted: `);
    // console.log(`NIC: ${this.state.nic} `);

    // const newNIC = {
    //   nic: this.state.nic
    // };

    // axios
    //   .post(
    //     "http://localhost:4000/trainticketrs/api2/mybooking/addbooking",
    //     newNIC
    //   )
    //   .then(res => console.log(res.data));

    // this.setState({
    //   nic: ""
    // });
  }

  // onClick(e) {
  //   e.preventDefault();

  //   if (this.target.id === "next") {
  //     alert("Next pressed");
  //   } else {
  //     alert("Go back pressed");
  //   }
  // }

  // onClick(e) {
  //   e.preventDefault();
  //   if (e.target.id === "next") {
  //     alert(e.target.id);
  //   } else {
  //     alert(e.target.id);
  //   }
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
                  <h2 style={{ color: "#66ff33" }}>
                    {" "}
                    <b> CONGRATULATIONS </b>{" "}
                  </h2>
                  <h6>
                    You have got the 20% discount from your total bill. Confirm
                    your NIC number to reduce it from your bill.
                  </h6>
                  <br />
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form
                  className="text-center"
                  style={{ color: "#757575" }}
                  // onSubmit={this.onClick}
                  //  name="myform"
                >
                  <label> NIC Number : </label>
                  <input
                    type="text"
                    placeholder="NIC Number"
                    className="form-control mb-4"
                    id="nic"
                    value={this.state.nic}
                    readOnly
                  />
                  {/* <button
                    className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                    id="next"
                    onClick={this.onClick}
                  >
                    NEXT
                  </button>
                  <button
                    className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                    id="goback"
                    onClick={this.onClick}
                  >
                    Go back
                  </button> */}
                  <Link
                    to="/book/step3"
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
                    to="/book/step22"
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

export default GovermentEmployeeDis;
