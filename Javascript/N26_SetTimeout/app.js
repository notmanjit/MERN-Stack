// setTimeout
// it is a window object function
// this method calls a function after a number of milliseconds
// 1s = 1000ms

// syntax:
// setTimeout(function, timeout);

// console.log("Hi there");

// setTimeout(() => {
//     console.log("My portfolio");
// }, 4000);

// console.log("Welcome to");

// -------------------------------------------------------

// setInterval
// it will execute the function repeatedlly at a given fix interval of time

// syntax:
// setInterval(func, timeout)

// let id = setInterval(() => {
//     console.log("Hello");
// }, 2000);

// console.log(id);

// let id2 = setInterval(() => {
//     console.log("Hello World!");
// }, 3000);

// console.log(id2);


// the function will execute infinite times untill stopped, clearInterval can stop the function
// if we write here like this, the function will never start try this in console
// clearInterval(id);
// clearInterval(id2);


// we can do this here

// setTimeout(() => {
//     clearInterval(id);
// }, 15000);

// setTimeout(() => {
//     clearInterval(id2);
// }, 25000);


// ---------------------------------------------------------

// practice question

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval ran")
}, 10000);