var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "#",
    pass: "#"
  }
});

const mailOptions = {
  from: "#", //Sender Address
  to: "fasrinaleem@gmail.com", //Receiver Email
  subject: "Test message",
  html: "<p> Test message </P>"
};

transporter.sendMail(mailOptions, function(err, info) {
  if (err) console.log(err);
  else console.log(info);
});
