// EJS (Embedded JavaScript templates)
// EJS is a simple templating language that lets you genetate HTML markup with plain javascript

// EJS is also a package but we don't require it because by default internally express require EJS

const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// imagine view as template (create template with the help of ejs)
// create a folder in the same directory named views (by default express takes ejs files from views folder)
app.set("view engine", "ejs");

// app.set("views");        // instead of this use the below line to avoid error (reason given)

// if we run our server outside from the directory (in this case) here we ran from node directory it will search "views" folder in the node directory "node/views" and give a error mssg
// but correct path is "node/n7_ejs/views"
// this line is hard coded to search the "views" folder in the current working directory of index.js i.e. N7_EJS (in this case)
// __dirname = node/n7_ejs + /views
app.set("views", path.join(__dirname, "/views"));           // require path to use this


// serving static files (like: css, js)
// create a public folder in the same directory (by default express takes static files from public folder)
// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "/public")));        // if the file is in public folder
app.use(express.static(path.join(__dirname, "public/css")));        // if the file is in public/css folder
app.use(express.static(path.join(__dirname, "/public/js")));

// using send we send string, array, boolean, object, html

app.get("/", (req, res) => {
    res.render("home.ejs");         // render: to send ejs file in response
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.get("/dice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;    // assume this data came from a database and we stored it in a variable

    // we will pass one more argument as object in the res.render which will be the data
    // res.render("rolldice", { num: diceVal });         // passing database to ejs file, and in ejs we write key name there

    // res.render("rolldice", { diceVal: diceVal });     // if we named the key & value same we can write it as {diceVal}
    res.render("rolldice", { diceVal });          // in general we name key, value same and write like this
});

// basic instagram template
// app.get("/ig/:username", (req, res) => {
//     let followers = ["elon", "mark", "bill", "larry", "jeff"];
//     let { username } = req.params;
//     // console.log(username);

//     res.render("instagram.ejs", { username, followers });
// });


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


// ---------------------------------------------------

// creating instagram template with data

app.get("/ig/:username", (req, res) => {
    const { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);

    if (data) {
        res.render("insta.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});
