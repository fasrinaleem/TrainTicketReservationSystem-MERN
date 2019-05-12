import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Train = props => (
  <tr>
    <td> {props.train.source} </td>
    <td> {props.train.destination} </td>
    <td> {props.train.price} </td>
  </tr>
);
class TrainList extends Component {
  constructor(props) {
    super(props);
    this.state = { traintickets: [] };
  }

  //Get the train ticket details from the database
  componentDidMount() {
    axios
      .get("http://localhost:4000/trainticketrs/api/tickets")
      .then(response => {
        this.setState({ traintickets: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  //If any updates made page will automatically reload and display the updated data
  componentDidUpdate() {
    axios
      .get("http://localhost:4000/trainticketrs/api/tickets")
      .then(response => {
        this.setState({ traintickets: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  trainList() {
    return this.state.traintickets.map(function(currentTrain, i) {
      return <Train train={currentTrain} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3> Trains </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> Source </th>
              <th> Destination </th>
              <th> Price (LKR)</th>
            </tr>
          </thead>
          <tbody>{this.trainList()}</tbody>
        </table>
      </div>
    );
  }
}

export default TrainList;
