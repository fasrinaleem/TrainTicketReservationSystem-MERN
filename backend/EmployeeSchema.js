const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SchemaEmployee = new Schema({
  name: {
    type: String
  },
  nic: {
    type: String
  },
  discount: {
    type: Number
  }
});

module.exports = mongoose.model("schemaemployee", SchemaEmployee);
