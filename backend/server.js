const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

const TicketRoutes = express.Router();
const BookingRoutes = express.Router();

const TicketModel = require("./TrainTicketSchema");
const BookingModel = require("./TicketBookingSchema");

mongoose
  .connect("mongodb://localhost/trainticketrs", { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log(err.message);
  });

//Get all Train Ticket details
TicketRoutes.route("/tickets").get(function(req, res) {
  TicketModel.find(function(err, trainticketrs) {
    if (err) {
      console.log(err);
    } else {
      res.json(trainticketrs);
    }
  });
});

//Get Booking details
BookingRoutes.route("/mybooking").get(function(req, res) {
  BookingModel.find(function(err, trainticketrs) {
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
TicketRoutes.route("api/delete/:id").delete(function(req, res) {
  TicketModel.findOneAndDelete({ _id: req.params.id }, function(
    err,
    ticketmodel
  ) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Middlewares
app.use("/trainticketrs/api/", TicketRoutes);
app.use("/trainticketrs/api2/", BookingRoutes);

app.listen(PORT, function() {
  console.log("Server is running on port : " + PORT);
});
