// Mongoose
// A library that creates a connection between MongoDB and Node.js Javascript Runtime Enviroment
// It is an ODM (Object Data Modeling) library ----we will read about this later

// To install Mongoose
// "npm install mongoose"

// the end goal is to use mongodb with express
// but first we will use it with plain js using mongoose


const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');
// the default port is 27017
// this is a asynchronous function and returns a promise

// so we will write like this
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// executing the function and applying the then and catch method (see promise notes to understand this)
main()
  .then(() => console.log("connection done"))     // this callback will execute when it is successfully resolved
  .catch(err => console.log(err))     // else this if an error occurred


// Schema -------- (Overall structure)
// Schema defines the shape of the documents within that collection
// just like in mysql we define our schema (constraints, datatype, etc)
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})


// Models --------- (we use models for creating documents with the help of mongoose)
// Model in mongoose is a class with which we construct documents

const User = mongoose.model("User", userSchema);       // save and run the server again "node index.js"
//        |                       |         |
//     model(class)          collection    schema

// now the documents within that collection will follow the mentioned schema
// generally we name our model and collection same
// and we start our collection name with the capital letter and in the singular form not plural ("User" (not "Users"))
// because executing this will create a collection with some changes like brings it in the small letters and make it plural
// Ex- User = users, Product = products, Employee = employees

const Employee = mongoose.model("Employee", userSchema);


// Inserting document--------------------

// const user1 = new User({
//   name: "Shubh",
//   email: "shubh@gmail.com",
//   age: 34
// });
// |_________________________|
//              |
// writing this is not enough because it is not still inserted in our database but yes it is created in our memory
// you can see this using following steps
// open node repl (write 'node' in the terminal)
// then write '.load index.js'
// and then write 'user1'
// now you can see the user1 document that we created with a new key-value pair of _id(mongoose automatically creates that for us as a primary key)

// now to insert this document in our mongodb database
// user1.save();
// now this save() method is an asynchronous method that returns a promise
// it means we can use then & catch methods

// You can see all the methods here
// https://mongoosejs.com/docs/api/model.html


// const user2 = new User({
//   name: "Eve",
//   email: "eve@gmail.com",
//   age: 43
// });

// user2.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// Insert Many----------------

// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 50},
//   {name: "Peter", email: "peter@gmail.com", age: 17},
//   {name: "Bruce", email: "bruce@gmail.com", age: 45},
// ]).then((res) => {
//   console.log(res)
// });

// ----------------------------------------------------------
// Note:
// Mongoose uses Operation Buffering
// Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB.

// As a programmer, logically a question should arise in our mind that we should be writing all the code(defining schemas, creating models, inserting data) inside the main function's then() callback because we can proceed further when we made connection with the database but because of operation buffering MongoDB allows us to do so before we make connection with the database.

// find -------------------------------------
// Model.find()

// the commands are almost same as mongo shell commands

// returns a Query object
// Mongoose Queries are not promises. But they have a .then() (it means we can use then() method even if it doesn't return a promise)

// User.find({})                        // if no documents is passed then gives all documents
// .then((res) => {console.log(res);})
// .catch((err) => {console.log(err);});

// User.find({ age: { $gt: 40 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// findOne -------------------------------------
// Model.findOne()
// returns Query

// User.findOne({ age: { $gt: 40 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// User.findOne({ _id: "67603a833b657bfe3cdcecac"})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// findById ----------------------------------
// Model.findById()
// returns Query

// User.findById("67603a833b657bfe3cdcecac")
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// updateOne ----------------------------------
// Model.updateOne()
// returns Query

// User.updateOne({ name: "Bruce" }, { age: 47 })               // since the commands are same as mongoshell but minor change here we are not using the $set operator
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// updateMany ----------------------------------
// Model.updateMany()
// returns Query

// User.updateMany({ age: { $gt: 45 } }, { age: 52 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// findOneAndUpdate --------------------------------
// finds the document --> prints the document --> update the document
// prints the un-updated document(before updation)

// User.findOneAndUpdate({name: "Bruce"}, {age: 60})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// findOneAndUpdate(conditions, update, options)

// User.findOneAndUpdate({name: "Bruce"}, {age: 47}, {new: 'true'})    // prints the updated value (by default its false)
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// findByIdAndUpdate --------------------------------

// User.findByIdAndUpdate('67603a833b657bfe3cdcecad', {age: 40}, {new: 'true'})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// deleteOne ---------------------------------------

// User.deleteOne({name: "Bruce"})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// deleteMany ---------------------------------------

// User.deleteMany({age: {$lte: 20}})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// findOneAndDelete ---------------------------------
// if you also want to find out what you deleted

// User.findOneAndDelete({ _id: "675d8b8f76db561e4e30b845" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// findByIdAndDelete ---------------------------------

User.findByIdAndDelete("67603331d98a037cd563cd5c")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });