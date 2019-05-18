var nodemailer = require("nodemailer");

class Email {
  getTransporter() {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "#@gmail.com",
        pass: "#"
      }
    });

    return transporter;
  }

  getMailOptions(mailObj) {
    console.log("Mail Object: " + mailObj);
    console.log("To: " + mailObj.to);
    const mailOptions = {
      from: mailObj.from, //Sender Address
      to: mailObj.to, //Receiver Email
      subject: mailObj.subject,
      html: mailObj.message
    };

    return mailOptions;
  }

  sendEmail(mailObj) {
    const transporter = this.getTransporter();
    const mailOptions = this.getMailOptions(mailObj);

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  }
}

module.exports = new Email();
