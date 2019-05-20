const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaPayment = new Schema({
  nameoncard: {
    type: String
  },
  creditcardno: {
    type: String
  },
  cvv: {
    type: String
  },
  amount: {
    type: String
  },
  mobileno: {
    type: String
  },
  fourdigitpin: {
    type: String
  }
});

module.exports = mongoose.model("payment", schemaPayment);
