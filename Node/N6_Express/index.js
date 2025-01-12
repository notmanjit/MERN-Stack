// the basic
// ----------------------------------------------------
const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
// ----------------------------------------------------

// if you are sending request from hoppscotch to localhost it is not possible we have to download a hoppscotch extension
// extension = https://github.com/hoppscotch/hoppscotch/discussions/2051


// ---------handling request---------
// use method is used for all response

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");

//     // --------sending response--------

//     // res.send("This is a demo response");      // sending string

//     // res.send({                      // sending object, when sending array/object it respond with JSON representation
//     //     name: "apple",
//     //     color: "red",
//     // });

//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>"      // sending html
//     res.send(code);
// });


// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");

//     // res.send("This is a demo response");

//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });

//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>"
//     res.send(code);
// });


// ---------routing---------
// it is a process of selecting a path for traffic in a network or between or across multiple networks.
// http://localhost:3000/home

// we can send only one respone any particular route

// get method
// used to send response if any route sends get request 


// app.get("/", (req, res) => {             //default path
//     res.send("you contacted root path");
// });

// app.get("/home", (req, res) => {
//     res.send("You contacted home path");
// });

// app.get("/about", (req, res) => {
//     res.send("You contacted about path");
// });

// app.get("/help", (req, res) => {
//     res.send("You contacted help path");
// });


// "*" 
// if the user send request to the route that doesn't exist then this response will be send
// sends this response to all the route except the defined routes
// used to avoid error

// app.get("*", (req, res) => {
//     res.send("This path doesn't exist");
// });


// app.post("/", (req, res) => {
//     res.send("you send a post request to root");
// });


// ---------path parameters---------

app.get("/", (req, res) => {
    res.send("This is the root");
});

// ":username" and ":id" will be treated as variable
// http://localhost:3000/rohit/123
// http://localhost:3000/mohan/999
// rohit, mohan, 123, 999 are variable values

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    console.log(req.params);        // { username: 'rohan', id: '123' }


    // res.send(`Welcome to the profile of @${username}`);

    let code = `<h1>Welcome to the profile of @${username}</h1>`;
    res.send(code);
});


// -------query string--------

// http://localhost:3000/search?q=apple

app.get("/search", (req, res) => {
    let { q } = req.query;
    console.log(req.query);         // { q: 'apple' }
    
    // res.send(`Searched for`);

    if(!q) {        // http://localhost:3000/search

        res.send(`<h1>Nothing searched</h1>`);
    }
    res.send(`<h1>Searched for ${q}</h1>`);
});