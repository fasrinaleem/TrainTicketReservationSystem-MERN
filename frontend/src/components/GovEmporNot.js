import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Book = props => (
  <tr>
    <td>
      <Link to={"/update/" + props.mybooking._id}> Yes </Link>
      <Link to={"/book/step3"}> No </Link>
    </td>
  </tr>
);

export default class GovEmporNot extends Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [] };
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

  bookList() {
    return this.state.bookings.map(function(currentBooking, i) {
      return <Book mybooking={currentBooking} key={i} />;
    });
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
                {/* <Link to={"/mybooking/update/" + props.mybooking._id}>
                  {" "}
                  Yes{" "}
                </Link>
                <Link to={"/book/step3"}> No </Link> */}
                <table>
                  <tbody>{this.bookList()}</tbody>
                </table>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
