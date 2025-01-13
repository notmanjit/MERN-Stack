const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let posts = [
    {
        id: uuidv4(),
        username: "notmanjit",
        content: "Hello! I am a MERN stack developer"
    },
    {
        id: uuidv4(),
        username: "devrahul",
        content: "Learning DSA with Java"
    },
    {
        id: uuidv4(),
        username: "codermahesh",
        content: "Hello! I am a Python developer"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("form.ejs");
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit", {post});
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;

    // let post = posts.find((p) => id === p.id);
    // posts.splice(posts.indexOf(post), 1);

    // instead of these above two lines you can use
    // filtering the post to the posts array were id !== p.id
    posts = posts.filter((p) => id !== p.id);

    res.redirect("/posts");
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});