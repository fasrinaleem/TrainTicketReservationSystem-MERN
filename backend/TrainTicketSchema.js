const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaTrainTicket = new Schema({
  source: {
    type: String
  },
  destination: {
    type: String
  },
  price: {
    type: String
  },
  nooftickets: {
    type: String
  },
  nic: {
    type: String
  }
});

module.exports = mongoose.model("trainticketrs", schemaTrainTicket);
