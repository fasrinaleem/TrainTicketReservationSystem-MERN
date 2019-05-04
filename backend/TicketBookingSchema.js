const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaBooking = new Schema({
  source: {
    type: String
  },
  destination: {
    type: String
  },
  nooftickets: {
    type: String
  },
  nic: {
    type: String
  },
  nameoncard: {
    type: String
  },
  cardno: {
    type: String
  },
  cvv: {
    type: String
  },
  mobileno: {
    type: String
  }
});

module.exports = mongoose.model("trainbooking", schemaBooking);
