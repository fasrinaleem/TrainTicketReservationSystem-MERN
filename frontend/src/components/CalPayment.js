import React, { Component } from "react";
import { SOURCE, DESTINATION, NOOFTICKETS } from "./TicketBooking2";

export const TOTALAMMOUNT = "TOTALAMMOUNT";

export default class CalPayment extends Component {
  constructor(props) {
    super(props);
    this.state = "total";
  }

  calPay() {
    if (SOURCE === "Gampaha" && DESTINATION === "COLOMBO") {
      total = NOOFTICKETS * 50;
    }
  }

  render() {
    return <div />;
  }
}
