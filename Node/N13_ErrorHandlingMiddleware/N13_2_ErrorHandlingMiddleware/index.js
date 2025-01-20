// if database is empty run init.js (node init.js) file to add sample data

// using an old code just as an example code to make you understand the concepts
// you may feel the whole code is not making sense (maybe I deleted some lines) but try to see the only part which is intended to teach you the concepts and ignore the other lines

// handling async error is explained in the code between these type of lines
// ==================
// code
// ==================


// handle error using try-catch is explained in
// ++++++++++++++++++++++++++
// code
// ++++++++++++++++++++++++++


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
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
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
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});

// ===================== see between these lines ===========================

// New chat Route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page not found");      // throwing error to our normal route which is not asynchronous and it will be handled by our error handling midddleware without any problem
    res.render("new");
})

// =====================================================================


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. Using try-catch

// Writing try-catch will handle all express error for the asynchronous function

// you can use try-catch for all asynchronous routes

// Create new chat Route
app.post("/chats", async (req, res, next) => {
    try {
        let { from, to, message } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            message: message,
            created_at: new Date()
        });
        await newChat.save()
        res.redirect("/chats");
    } catch (err) {
        next(err);      // if any error occurred then error handling middleware will be called (you can pass your custom error too), if error handler not found then express default handler will work
    }
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Edit chat route
// app.get("/chats/:id/edit", async (req, res) => {
//     let { id } = req.params;
//     let chat = await Chat.findById(id);

//     res.render("edit.ejs", { chat });
// })

// // update route
// app.patch("/chats/:id", async (req, res) => {
//     let { id } = req.params;
//     let { message: newMsg } = req.body;
//     let chat = await Chat.findByIdAndUpdate(id, { message: newMsg }, { new: true, runValidators: true });
//     console.log(chat);
//     res.redirect("/chats");
// })

// // Destroy route
// app.delete("/chats/:id", async (req, res) => {
//     let { id } = req.params;
//     let chat = await Chat.findByIdAndDelete(id);
//     console.log(chat);
//     res.redirect("/chats");
// })


// =====================================================================

// 1. HANDLING ASYNC ERROR

// handling async error is a bit different from normal error handling

// Edit chat route
app.get("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {

            // writing like this will not handle our asynchronous function because the error is thrown asynchronously
            // if any error is thrown asynchronously then express don't call next() by default
            // throw new ExpressError(404, "Chat not found");

            // so in asynchronous function we have to explicitly call next() and pass our error
            next(new ExpressError(500, "Chat not found"));
        }
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }
})

// Error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occurred" } = err;
    res.status(status).send(message);
});

// =====================================================================


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
