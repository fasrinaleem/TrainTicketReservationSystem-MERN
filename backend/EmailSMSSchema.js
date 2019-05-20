const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaEmailSMS = new Schema({
  email: {
    type: String
  },
  phone: {
    type: String
  }
});

module.exports = mongoose.model("schemaemailsms", schemaEmailSMS);
