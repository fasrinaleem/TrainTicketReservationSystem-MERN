import React, { Component } from "react";
import axios from "axios";

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
      .get("http://localhost:4000/api2/mybooking" + this.props.match.params.id)
      .then(response => {
        this.setState({
          nic: response.data.nic
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    e.preventDefault();
    const updatedCourse = {
      nic: this.state.nic
    };

    axios
      .post(
        "http://localhost:4000/api2/mybooking/update" +
          this.props.match.params.id,
        updatedCourse
      )
      .then(res => console.log(res.data));

    console.log(`Form Submitted: `);
    console.log(`NIC: ${this.state.nic} `);

    // const newNIC = {
    //   nic: this.state.nic
    // };

    // axios
    //   .post(
    //     "http://localhost:4000/trainticketrs/api2/mybooking/addbooking",
    //     newNIC
    //   )
    //   .then(res => console.log(res.data));

    this.setState({
      nic: ""
    });
    this.props.history.push(`/book/step3`);
  }

  getnic(e) {
    var nic = document.getElementById("nic").value;
    this.setState({
      nic: e.target.value
    });
    console.log("nic : " + nic);
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
                  <h2> Looking for Discount ? </h2>
                  <h6>
                    {" "}
                    If you are a goverment employee you can get the discount
                    from us.To get the discount enter your NIC number below. If
                    you are not a goverment employee you cannot get discount. So
                    leave it blank and continue.{" "}
                  </h6>
                  <br />
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form
                  className="text-center"
                  style={{ color: "#757575" }}
                  onSubmit={this.onSubmit}
                  name="myform"
                >
                  <label> NIC Number : </label>
                  <input
                    type="text"
                    placeholder="NIC Number"
                    className="form-control mb-4"
                    id="nic"
                    onChange={this.getnic}
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

export default GovermentEmployeeDis;
