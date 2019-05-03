const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const TicketRoutes = express.Router();
const PORT = 4000;

const TicketModel = require("./TrainTicketSchema");

mongoose
  .connect("mongodb://localhost/trainticketrs", { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log(err.message);
  });

//Get all Train Ticket details
TicketRoutes.route("/").get(function(req, res) {
  TicketModel.find(function(err, trainticketrs) {
    if (err) {
      console.log(err);
    } else {
      res.json(trainticketrs);
    }
  });
});

TicketRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  TicketModel.findById(id, function(err, ticket) {
    res.json(ticket);
  });
});

//Add new Train Ticket Details to db
TicketRoutes.route("/addbook").post(function(req, res) {
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

// //Update the course details
// courseRoutes.route("/update/:id").post(function(req, res) {
//   courseModel.findById(req.params.id, function(err, coursemodel) {
//     if (!coursemodel) res.status(404).send("Data is not found");
//     else coursemodel.courseName = req.body.courseName;
//     coursemodel.instructorName = req.body.instructorName;
//     coursemodel.year = req.body.year;
//     coursemodel
//       .save()
//       .then(coursemodel => {
//         res.json("Course Updated");
//       })
//       .catch(err => {
//         res.status(400).send("Update not possible");
//       });
//   });
// });

// Delete the TrainTicket
TicketRoutes.route("/delete/:id").delete(function(req, res) {
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
app.use("/trainticketrs", TicketRoutes);

app.listen(PORT, function() {
  console.log("Server is running on port : " + PORT);
});
