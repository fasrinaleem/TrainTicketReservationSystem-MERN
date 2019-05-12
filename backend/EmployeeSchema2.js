const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "trainticketrs";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

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

//   client.close();

//   const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection("employee2");
//     // Find some documents
//     collection.find({}).toArray(function(err, docs) {
//       assert.equal(err, null);
//       console.log("Found the following records");
//       console.log(docs);
//       callback(docs);
//     });
//   };

//   findDocuments();

// client.connect(function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const dbo = client.db(dbName);
//   const collection = dbo.collection("employee2");

//   collection.find({ nic: "971590432V" }).toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs);
//   });
// });

client.close();
