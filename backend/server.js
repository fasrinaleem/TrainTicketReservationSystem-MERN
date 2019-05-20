const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

const TicketRoutes = express.Router();
const BookingRoutes = express.Router();
const EmployeeRoutes = express.Router();
const NICRoutes = express.Router();
const EmailRoutes = express.Router();
const SMSRoutes = express.Router();
const PaymentRoutes = express.Router();

const TicketModel = require("./TrainTicketSchema");
const BookingModel = require("./TicketBookingSchema");
const EmployeeModel = require("./EmployeeSchema");
const Email = require("./EmailSender");
const SMS = require("./SMSSender");
const PaymentModel = require("./PaymentSchema");

app.use(bodyParser.json());

//connecting to database
mongoose
  .connect("mongodb://localhost/trainticketrs", { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log(err.message);
  });

//Store the payment details to database
PaymentRoutes.route("/addpayment").post(cors(), (req, res) => {
  let addPayment = new PaymentModel(req.body);
  addPayment
    .save()
    .then(addPayment => {
      res.status(200).json({ addPayment: "Payment added successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding payment details failed");
    });
});

PaymentRoutes.route("/addpayment").options(cors(), (req, res) => {
  res.header("Access-Control-Allow-Origin", req.header("Origin"));
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "content-type");

  console.log("request header: " + req.header("Origin"));
});
app.use("/trainticketrs/api6/", PaymentRoutes);

//View the payment details from the database
PaymentRoutes.route("/payments").get(function(req, res) {
  PaymentModel.find(function(err, trainticketrs) {
    if (err) {
      console.log(err);
    } else {
      res.json(trainticketrs);
    }
  });
});

//View the train ticket detail from database
TicketRoutes.route("/tickets").get(function(req, res) {
  TicketModel.find(function(err, trainticketrs) {
    if (err) {
      console.log(err);
    } else {
      res.json(trainticketrs);
    }
  });
});

//Sending an email
EmailRoutes.route("/sendemail").post(cors(), (req, res) => {
  console.log("In the route: " + req.body);
  Email.sendEmail(req.body);
  res.json(req.body);
});

EmailRoutes.route("/sendemail").options(cors(), (req, res) => {
  res.header("Access-Control-Allow-Origin", req.header("Origin"));
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "content-type");

  console.log("request header: " + req.header("Origin"));
});

app.use("/trainticketrs/api4/", EmailRoutes);

SMSRoutes.route("/sendsms").post(cors(), (req, res) => {
  SMS.sendSMS(req.body);
  res.json(req.body);
});

SMSRoutes.route("/sendsms").options(cors(), (req, res) => {
  res.header("Access-Control-Allow-Origin", req.header("Origin"));
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "content-type");

  console.log("request header: " + req.header("Origin"));
});

app.use("/trainticketrs/api5/", SMSRoutes);

//Finding the nic from the database to check whether
//he/she is goverment employee or not
NICRoutes.route("/nic").get(cors(), function(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const assert = require("assert");

  const url = "mongodb://localhost:27017";

  // Database Name
  const dbName = "trainticketrs";

  const client = new MongoClient(url);

  //Connecting to mongodb server
  client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    //Add goverment empoyees details to employee table
    async function insertEmp() {
      await db.collection("employee").insertMany([
        {
          name: "Fasrin",
          nic: "971590432V",
          discount: 0.1
        },
        {
          name: "Ishan",
          nic: "971483393V",
          discount: 0.1
        }
      ]);
    }
    insertEmp();
    console.log("Employee Details Added Successfully");
  });

  client.connect(function(err, db) {
    assert.equal(null, err);

    const dbo = client.db(dbName);
    const collection = dbo.collection("employee");

    console.log("nic: " + req.header("nic"));

    collection
      .find({ nic: req.header("nic") })
      .limit(1)
      .next(function(err, data) {
        assert.equal(err, null);
        res.json(data);
      });
  });

  // Connection URL
});

app.use("/sms/", NICRoutes);

NICRoutes.route("/nic/").options(cors(), function(req, res) {
  res.header("Access-Control-Allow-Origin", req.header("Origin"));
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "content-type, nic");

  console.log("request header: " + req.header("Origin"));

  return res;
});

//Get all Train Ticket details from tickets table
TicketRoutes.route("/tickets").get(function(req, res) {
  TicketModel.find(function(err, trainticketrs) {
    if (err) {
      console.log(err);
    } else {
      res.json(trainticketrs);
    }
  });
});

//Get Booking details from mybooking table
BookingRoutes.route("/mybooking").get(function(req, res) {
  BookingModel.find(function(err, trainticketrs) {
    if (err) {
      console.log(err);
    } else {
      res.json(trainticketrs);
    }
  });
});

//Get Employee details
EmployeeRoutes.route("/employee/:findnic").post(function(req, res) {
  const nic = req.body;
  EmployeeModel.find(nic, function(err, trainticketrs) {
    if (err) {
      console.log(err);
    } else {
      res.json(trainticketrs);
    }
  });
});

//to find the employee is there
EmployeeRoutes.route("/employee").get(function(req, res) {
  EmployeeModel.find(function(err, trainticketrs) {
    if (err) {
      console.log(err);
    } else {
      res.json(trainticketrs);
    }
  });
});

TicketRoutes.route("/:tid").get(function(req, res) {
  let id = req.params.tid;
  TicketModel.findById(id, function(err, ticket) {
    res.json(ticket);
  });
});

BookingRoutes.route("/:bid").get(function(req, res) {
  let id = req.params.bid;
  BookingModel.findById(id, function(err, book) {
    res.json(book);
  });
});

//Add new Train Ticket Details to db
TicketRoutes.route("/tickets/addticket").post(function(req, res) {
  let ticket = new TicketModel(req.body);
  ticket
    .save()
    .then(ticket => {
      res.status(200).json({ ticket: "Ticket added successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new Ticket failed");
    });
});

//Add new Booking Details to db
BookingRoutes.route("/mybooking/addbooking").post(function(req, res) {
  let Booking = new BookingModel(req.body);
  Booking.save()
    .then(Booking => {
      res.status(200).json({ Booking: "Booking added successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new Booking failed");
    });
});

//Update the NIC Number If He is a Goverment Employee
BookingRoutes.route("/mybooking/update/:bid").post(function(req, res) {
  BookingModel.findById(req.params.bid, function(err, bookingmodel) {
    if (!bookingmodel) res.status(404).send("Data is not found");
    else bookingmodel.nic = req.body.nic;
    bookingmodel
      .save()
      .then(bookingmodel => {
        res.json("Course Updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

// Delete the TrainTicket
TicketRoutes.route("/api/delete/:tid").delete(function(req, res) {
  TicketModel.findOneAndDelete({ _id: req.params.tid }, function(
    err,
    ticketmodel
  ) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

//Add Details to Employee
EmployeeRoutes.route("/employee/addemployee").post(function(req, res) {
  let Employee = new EmployeeModel(req.body);
  Employee.save()
    .then(Employee => {
      res.status(200).json({ Employee: "Employee added successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new Employee failed");
    });
});

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Middlewares
app.use("/trainticketrs/api/", TicketRoutes);
app.use("/trainticketrs/api2/", BookingRoutes);
app.use("/trainticketrs/api3/", EmployeeRoutes);

app.listen(PORT, function() {
  console.log("Server is running on port : " + PORT);
});
