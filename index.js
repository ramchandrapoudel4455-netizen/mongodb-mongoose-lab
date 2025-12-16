// Step 1: Import mongoose
const mongoose = require("mongoose");

// Step 2: Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Week8");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("connected", function () {
  console.log("MongoDB connected successfully");
});

// Step 3: Create Schema
const personSchema = new mongoose.Schema({
  Name: String,
  Gender: String,
  age: Number,
  Salary: Number
});

// Step 4: Create Model
const person_doc = mongoose.model("person", personSchema);

// Step 5: Insert ONE document
const doc1 = new person_doc({
  Name: "Anita",
  Gender: "Female",
  age: 28,
  Salary: 4000
});

doc1.save()
  .then(() => {
    console.log("One document inserted successfully");
  })
  .catch(err => {
    console.log(err);
  });

// Step 6: Insert MULTIPLE documents
const manypersons = [
  { Name: "Ram", Gender: "Male", age: 32, Salary: 5000 },
  { Name: "Sita", Gender: "Female", age: 25, Salary: 4500 },
  { Name: "Gita", Gender: "Female", age: 35, Salary: 6000 }
];

person_doc.insertMany(manypersons)
  .then(() => {
    console.log("Multiple documents inserted successfully");
  })
  .catch(err => {
    console.log(err);
  });

// Step 7: Find documents (limit 5)
person_doc.find({}).limit(5)
  .then(result => {
    console.log("All documents (limit 5):");
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

// Step 8: Count total documents
person_doc.countDocuments()
  .then(count => {
    console.log("Total documents:", count);
  })
  .catch(err => {
    console.log(err);
  });

// Step 9: Delete documents where age >= 25
person_doc.deleteMany({ age: { $gte: 25 } })
  .then(result => {
    console.log("Deleted documents:", result.deletedCount);
  })
  .catch(err => {
    console.log(err);
  });





