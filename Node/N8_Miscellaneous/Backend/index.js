const express = require("express");
const app = express();
const port = 8080;

// app.use will work for all request(get, post, put, etc)
// to handle data of post request (parsing data)
// if our data is url encoded
// app.use(express.urlencoded({ extended: true}));

// parsing data if our data is in json format
// app.use(express.json());

// in get request data is send via query string in the url
// ex - http://localhost:8080/register?user=abc&pass=123
app.get("/register", (req, res) => {
    let {user, pass} = req.query;
    console.log(req.query);
    res.send(`registered GET request Welcome ${user}!`);
});

// but in post request data is send via request body
app.post("/register", (req, res) => {
    console.log(req.body);       // if data is not parsed, prints undefined because data is not readable by express so we have to first parse the data
    let {user, pass} = req.body;        // storing data after parsing
    res.send(`registered POST request Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});