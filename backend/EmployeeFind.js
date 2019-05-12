const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "trainticketrs";

// Create a new MongoClient
const client = new MongoClient(url);
async function findgovemployee() {
  client.connect(function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const dbo = client.db(dbName);
    const collection = dbo.collection("employee");

    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
    });
  });
}

findgovemployee();

client.close();

module.exports = findgovemployee;
