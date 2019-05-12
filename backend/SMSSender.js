// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = "AC765e6daabdbee2af8e1b7b07309a4b5d";
const authToken = "b018f6ebf4cbad8f2f2fb6009ea5bfdf";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Your payment is succesfully received",
    from: "+13393090187",
    to: "+94 767739896"
  })
  .then(message =>
    console.log(message.sid + " Message has been successfully send")
  );
