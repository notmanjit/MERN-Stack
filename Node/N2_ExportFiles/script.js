// module.exports is a special object
// require() is a built-in function to include external modules that exist in separate files.

const value = require("./math");

console.log(value);
console.log(value.sum(3, 2));
console.log(value.pi);
