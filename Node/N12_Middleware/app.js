const express = require("express");
const app = express();
const port = 3000;

// Middleware - It is an intermediary
// Request -----> Middleware -----> Response
// In express
// Middleware in express are functions that come into play after the server receives the request and before the response is sent to the client.

// If there is some task that we want to perform after we receive a request and before the response is sent then in express it is done by the middleware
// Middlewares are not only used in Node.js but used in different development as well anyhow
// In general middleware is a programming concept

// Some common middleware functions :
// methodOverride     ---> we know our html form allows only get & post request but the methodOverride middleware helps us to send put, patch, delete request
// bodyParser         ---> helps us to parse the request body data and make it understandable which is not readable by express
// express.static
// express.urlencoded


// app.use(methodOverride("_method"));
// app.use(express.urlencoded({extended: true}));           // the urlencoded is a middleware function in express
// app.use(express.static(path.join(__dirname, "/public")));        // static is a middleware function in express

// And we use "app.use" to listen to all the request whether it is get, post, put...
// and later we will learn to define middleware for specific request, condition, routes


// What do middleware do?
// Middleware functions can perform the following tasks:
// 1. Executes any code
// 2. Make changes to the request and the response object
// 3. Call the next middleware function in the stack --- (middleware chaining)          // m1--->m2--->m3 (m = middleware) m1 passes control to m2, m2 passes to m3
// 4. End the request-response cycle --- (can send response)

// explaining point 4
// m1--->m2--->m3
// suppose client send a request, m1 is called, m1 passes control to m2 and m2 sends a response then the further middlewares(m3) will not called



// suppose the below line is a middleware

// middleware --> if this middleware sends a response then the app.get(("/")) route will never execute or send any response

// app.get("/", (req, res) => {
//     res.send("I am root");
// })

// ----------------------------------------------------------------------

// Our first middleware :
// app.use(middleware)

// app.use((req, res) => {              // suppose if this middleware doesn't send any response still it will keep hanging because it doesn't passes the control to the next middleware (we will solve this issue in the next part)
//     console.log("Hello! I am a middleware");
//     res.send("Middleware finished");
// });

// app.get("/", (req, res) => {            // this route will not execute because middleware send a response
//     res.send("I am root");
// });

// app.get("/random", (req, res) => {      // this route will not execute because middleware send a response
//     res.send("This is a random page");
// });

// ----------------------------------------------------------------------

// Using next
// The next middleware function is commonly denoted by a variable named next
// The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

// If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

// app.use((req, res, next) => {
//     console.log("Hello! I am 1st middleware");
//     next();
//     // console.log("Hello");        // this line will execute but we don't write like this. next() is considered as the end of the middleware, try to write all before next() if you are a good developer :)
// });

// app.use((req, res, next) => {
//     console.log("Hello! I am 2nd middleware");
//     return next();          // you can write "return" to avoid code written below this (some devs preffer writing return but only next() is also good)
//     console.log("Hello");       // this code is unreachable
// });

// app.get("/", (req, res) => {
//     res.send("I am root");
// });


// ----------------------------------------------------------------------

// Creating a utility(useful) middleware

// logger (log information) (there is a famous npm package used as logger named morgan, it is a third party middleware)
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();      // manipulating request object (middleware can do this)
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// app.get("/", (req, res) => {
//     res.send("I am root");
// });

// ----------------------------------------------------------------------

// Exploring app.use()

// If we don't pass any path in our middleware then it will work for all paths
// but passing path will result to work only for the specific path

// app.use("/random", (req, res, next) => {        // this middleware will only work for the paths starting from /random (eg. /random, /random/abcd)
//     console.log("I am only for random");
//     next();
// })

// app.get("/", (req, res) => {
//     res.send("I am root");
// });

// app.get("/random", (req, res) => {
//     res.send("random page");
// });

// // Error page - 404
// app.use((req, res) => {         // we use this middleware if none of our routes matches the request and the page not exist
//     res.status(404).send("Page not found");
// });


// ----------------------------------------------------------------------

// Activity : 

// API token as query string
// Let's create a middleware for an api that checks if the access token was passed in the query string or not.

// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED!");
// })

// app.get("/api", (req, res) => {
//     res.send("data");           // you can say if anyone wants to access the data in "/api" route, they have to pass the authentication layer by giving the token value in the query string (/api?token=giveaccess) otherwise they are not allowed to access the data and get "ACCESS DENIED!" in response
// });

// app.get("/", (req, res) => {
//     res.send("I am root");
// });

// ----------------------------------------------------------------------

// Multiple middleware

// const checkToken = (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED!");
// };

// app.get("/api", checkToken, (req, res) => {     // we can pass our middleware as a function and it will work for only this route
//     res.send("data");
// });

// app.get("/", (req, res) => {
//     res.send("I am root");
// });


// ----------------------------------------------------------------------

// Handling Error
// Express default error handler
// Express comes with a built-in error handler that takes care of any errors that might be encountered in the app.
// This default error-handling middleware function is added at the end of the middleware function stack.

// we will learn about this later in the next part

// ----------------------------------------------
// the below code is not the express default error handler just explaining you can send custom error message

// writing your own error message
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new Error("ACCESS DENIED!");      // custom error message
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("I am root");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});