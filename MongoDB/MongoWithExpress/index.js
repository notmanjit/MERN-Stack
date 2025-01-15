const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");      // requiring chat.js
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main()
    .then(() => {
        console.log("connected sucessfully");
    })
    .catch((err) => {
        console.log(err);
    })

// while working on a big project, there can be multiple models and collection and they may have different schemas because of that we create a different folder(models) and in that folder we define schemas and create collections
// after defining schemas and creating collections we require the file 

// let chat1 = new Chat({
//     from: "Ram",
//     to: "Amit",
//     message: "Hello, how are you?",
//     created_at: new Date()              // there are different formats for sending dates but by default a function exist in js that creates random date and time
// });

// chat1.save()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("root page working");
});

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();      // asynchronous function that's why async & await
    // console.log(chats);
    res.render("index.ejs", { chats });
});

// New chat Route
app.get("/chats/new", (req, res) => {
    res.render("new");
})

// Create new chat Route
app.post("/chats", (req, res) => {          // do we have to write it like async (req, res)
    let { from, to, message } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    newChat.save()          // and this as await because save() is an asynchronous process
        .then(res => console.log(res))
        .catch(err => console.log(err));
    res.redirect("/chats");

    // the answer is no. We know save, insert, update, delete, etc is a asynchronous process but if the method is thennable then the js is automatically using await & async
    // if you are not using then() and the process is asynchronous then you have to use await & async
    // here you can use async, await & then() together, no error will occur but generally we write like this
})

// Edit chat route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);

    res.render("edit.ejs", { chat });
})

// update route
app.patch("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {message: newMsg} = req.body;
    let chat = await Chat.findByIdAndUpdate(id, {message: newMsg}, {new: true, runValidators: true});
    console.log(chat);
    res.redirect("/chats");
})

// Destroy route
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findByIdAndDelete(id);
    console.log(chat);
    res.redirect("/chats");
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
