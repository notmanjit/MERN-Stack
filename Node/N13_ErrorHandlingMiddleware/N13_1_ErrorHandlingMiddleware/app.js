const express = require("express");
const app = express();
const port = 3000;

const ExpressError = require("./ExpressError");     // requiring ExpressError.js

// Error handling middleware
// Define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next).

// app.get("/", (req, res) => {
//     res.send("I am root");
// });

// app.get("/err", (req, res) => {
//     abcd = abcd;
// });

// app.use((err, req, res, next) => {
//     console.log("---------ERROR handling middleware--------");
//     next(err);      // writing next(err) will search for the next error handling middleware(custom error handling middleware) if not found then executes the express default error handling middleware (yes that long error message)
// });

// app.use((err, req, res, next) => {
//     console.log("---------ERROR2 handling middleware--------");
//     next(err);
// });

// app.use((err, req, res, next) => {
//     console.log("---------ERROR3 handling middleware--------");
//     next();         // writing only next() will search for non error handling middleware if not found then gives you path not found message ("Cannot GET /err")
// });

// // app.use((req, res) => {
// //     console.log("This is a non error handling middleware");      // comment out this middleware and see the difference
// //     res.status(404).send("Page not found");
// // });


// ---------------------------------------------------------

// Custom Error Class

// const checkToken = (req, res, next) => {
//     let {token} = req.query;
//     if (token === "giveaccess") next();
//     throw new ExpressError(401, "ACCESS DENIED");       // throwing our custom error class with status code and message
// };

// app.get("/", (req, res) => {
//     res.send("I'm root");
// });

// app.get("/api", checkToken, (req, res) => {
//     res.send("data");       // if you send the correct token value as the query string then "data" will be send in response else control will passed to error handling middleware
// });

// app.use((err, req, res, next) => {
//     console.log("---------ERROR handling middleware--------");
//     // next(err);           // prints our custom error message and you can see the status code in the console tab of browser

//     res.send(err);      // instead of next(err) if you send err in response you can see the custom status and error message in object form
// });

// ---------------------------------------------------------


// const checkToken = (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") next();
//     throw new ExpressError(401, "ACCESS DENIED!");
// };

// app.get("/", (req, res) => {
//     res.send("I'm root");
// });

// app.get("/api", checkToken, (req, res) => {
//     res.send("data");
// });

// app.get("/err", (req, res) => {
//     abcd = abcd;        // we know this line will give an error and we didn't throw ny error
// });


// comment out this, used to explain the error handling for the /api route
// app.use((err, req, res, next) => {
//     let { status, message } = err;      // extracting status and message from our error object
//     res.status(status).send(message);       // since we extracted status and message from the error object so now we can send the message in response
// });


// ---- Default status & message ----

// comment out this, used to explain the error handling for the /err route
// app.use((err, req, res, next) => {
//     // let { status, message } = err;      // since we created our own error handling middleware and not used express default error handler so our status code and message is undefined

//     let { status = 500, message = "Some error occured" } = err;     // we can set a default value if not passed
//     res.status(status).send(message);      // if status is undefined then gives RangeError Invalid status code: undefined
// });

// ---------------------------------------------------------

// Activity : Create an admin route & send an error with a 403 status code

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access is forbidden for admin route");
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occurred" } = err;
    res.status(status).send(message);
});

app.listen(port, () => {
    console.log(`listing on port ${port}`);
});