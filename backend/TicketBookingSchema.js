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
  }
});

module.exports = mongoose.model("trainbooking", schemaBooking);
