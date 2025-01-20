// if database is empty run init.js (node init.js) file to add sample data

// using an old code (copy & paste) just as an example code to make you understand the concepts
// you may feel the whole code is not making sense (maybe I deleted some lines) but try to see the only part which is intended to teach you the concepts and ignore the other lines

// see below between (==========) these type of lines


const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demowhatsapp');
}

main()
    .then(() => {
        console.log("connected sucessfully");
    })
    .catch((err) => {
        console.log(err);
    })


app.get("/", (req, res) => {
    res.send("root page working");
});




// Index Route
app.get("/chats", wrapAsync(async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
}));

// New chat Route
app.get("/chats/new", (req, res) => {
    res.render("new");
})

// Create new chat Route
app.post("/chats", wrapAsync(async (req, res) => {
    let { from, to, message } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    await newChat.save()
    res.redirect("/chats");
}))

// Edit chat route
app.get("/chats/:id/edit", wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}))



// ====================================see between these lines============================================

// what we have learn till now in error handling
// how to handle
// 1. normal errors
// 2. asynchronous error -- using our custom error
// 3. using try-catch to handle different errors -- (but it seems bulky, writing try-catch for all routes is repeatative)

// a better functionality can exist of writing try-catch
// using wrapAsync 


// we are creating a function to wrap all asynchronous function
// passing our asynchronous function in argument--(fn)
function wrapAsync (fn) {    // -------->   this function will return a function
    return function (req, res, next) {    // ------>  this function will execute the argument function(fn) which is the asynchronous function
        fn (req, res, next).catch(err => next(err));    // executed here, if error occurred then calls next
    }
}

// you might say that writing like this feels unnessary and we made a simple thing complex, but writing in this way now we can remove try-catch and just wrap the asynchronous function inside the wrapAsync


// Show chat route (just for example not actually showing any chat)
app.get("/chats/:id", wrapAsync(async (req, res, next) => {         // passing the asynchronous function in the wrapAsync function as a callback
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next(new ExpressError(500, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
}))

// now you can use the wrapAsync function for all asynchronous function


// ==================================see between these lines==============================================



// update route
app.patch("/chats/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let { message: newMsg } = req.body;
    let chat = await Chat.findByIdAndUpdate(id, { message: newMsg }, { new: true, runValidators: true });
    console.log(chat);
    res.redirect("/chats");
}))

// Destroy route
app.delete("/chats/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findByIdAndDelete(id);
    console.log(chat);
    res.redirect("/chats");
}))


// --------------------------------------------------------------------

// Mongoose Error

// creating function to perform some task for ValidationError
const handleValidationError = (err) => {
    console.log("This is a validation error. Please follow rules");
    console.dir(err.message);
    return err;
}

// this middleware will print the name of the error and perform the given task and the call the next() error handling middleware
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") {
        handleValidationError(err);
    }
    next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occurred" } = err;
    res.status(status).send(message);
});

// -------------------------------------------------------------------

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}/chats`);
});
