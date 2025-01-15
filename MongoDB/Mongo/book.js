const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main()
    .then(() => {
        console.log("connection successfull");
    })
    .catch((err) => {
        console.log(err);
    });


// Schema validation
// Basically rules for schema

// All schema types -
// require
// default
// select
// validate
// get                      // see documentation for explaination (https://mongoosejs.com/docs/schematypes.html)
// set
// alias
// immutable
// transform

// Datatypes have their own constraints (see docs for other datatypes)
// for ex: String
/* 
lowercase
uppercase
trim
match
enum
minlength
maxlength
populate
*/

const bookSchema = new mongoose.Schema({
    title: {
        type: String,           // this format is generally used when we have more than one constraint (like here)
        required: true,     // Equivalent to 'not null' like sql
        maxlength: 20,
        uppercase: true
    },
    author: {                   // Equivalet to ( author: String ) (shorthand)
        type: String,           // <--- Atually this is the correct format
    },
    price: {
        type: Number,
        min: [1, "Price {VALUE} is too low"]              // [minimum price is set 1, custom error message]

    },
    discount: {
        type: Number,
        default: 0              // by default set to 0 if no value is passed
    },
    category: {
        type: String,
        enum: ["education", "novel"]        // input should be from the following options
    },
    genre: [String]         // type: array of string
})

const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({
//     title: "Mathematics ",
//     author: "RD Sharma",
//     // price: 299
//     price: "299"        // this is also valid because when it goes to database it gets converted to number (because the datatype is set to "Number")
// });

// book1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


// const book2 = new Book({
//     title: "Marvel comics",
//     price: 199,
//     discount: 10,
//     genre: ["comics", "superheroes", "fiction", "marvel"]
// });

// book2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


// validation in updation error
// the rules we set for schema will work only in insertion not in the updation
// for example in the schema we set minimum price should be 1 but here we updated the price of a book to -500, instead of the error it worked fine

// Book.findByIdAndUpdate("6765849458a1dc63181e4314", {price: -500}, {new: true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// if we want our set of rules to work on the updation too then we can use an option

// runValidators:  if true, runs update validators on this command. Update validators validate the update operation against the model's schema


Book.findByIdAndUpdate("6765849458a1dc63181e4314", { price: -500 }, {new: true, runValidators: true })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        // console.log(err.errors.price.properties.message);       // prints custom error message
        console.log(err.errors.price.message);              // both printing same
    });