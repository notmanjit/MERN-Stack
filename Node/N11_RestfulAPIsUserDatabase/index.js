const { faker, el } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));


let createRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'myapp',
    password: "manjit@123",
});

// home route
app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home", { count });
        })
    } catch (err) {
        console.log(err);
        res.send("some error occurred");
    }
});

// all user route
app.get("/user", (req, res) => {
    let q = "SELECT id, username, email FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render("user", { result });
        })
    } catch (err) {
        console.log(err);
        res.send("caught an error");
    }
})

// edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = "${id}"`;
    // console.log(id);

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit", { user });
        })
    } catch (err) {
        console.log(err);
        res.send("Error found");
    }
})

// update route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id = "${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            // console.log(user);

            if (formPass != user.password) {
                res.send("Wrong password");
            } else {
                let q2 = `UPDATE user SET username = "${newUsername}" WHERE id = "${id}"`;
                try {
                    connection.query(q2, (err, result) => {
                        if (err) throw err;
                        res.redirect("/user");
                    })
                } catch (err) {
                    console.log(err);
                }
            }
        })
    } catch (err) {
        console.log(err);
        res.send("Error found");
    }
})

// get form route
app.get("/user/new", (req, res) => {
    res.render("form.ejs");
})

// add new user route
app.post("/user", (req, res) => {
    let id = uuidv4();
    let { username, email, password } = req.body;
    // let q = `INSERT INTO user (id , username, email, password) VALUES ("${id}", "${username}", "${email}", "${password}")`;
    let q = `INSERT INTO user (id , username, email, password) VALUES (?,?,?,?)`;       // if used placeholders
    let user = [id, username, email, password];     // if used placeholders
    try {
        // connection.query(q, (err, result) => {
        connection.query(q, user, (err, result) => {        // if used placeholders
            if (err) throw err;
            // console.log(result);
            res.redirect("/user");
        })
    } catch (err) {
        console.log(err);
        res.send("Error occurred");
    }
})

// delete form
app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = "${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("delete.ejs", { user });
        })
    } catch (err) {
        console.log(err);
    }
})

// delete route
app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id = "${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            console.log(user);
            if (password != user.password) {
                res.send("Wrong Credentials");
            } else {
                let q2 = `DELETE FROM user WHERE id = "${id}"`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    console.log(result);
                    res.redirect("/user");
                })
            }
        })
    } catch (err) {
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})
