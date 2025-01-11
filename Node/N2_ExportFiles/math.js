// module.exports is a special object
// require() is a built-in function to include external modules that exist in separate files.

// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.8;
// const pi = 3.14;


// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     pi: pi,
// }
// module.exports = obj;

// OR

// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     pi: pi,
// }

// OR

// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.g = 9.8;
// module.exports.pi = 3.14;

// OR

exports.sum = (a, b) => a + b;
exports.mul = (a, b) => a * b;
exports.g = 9.8;
exports.pi = 3.14;


// exports = 5;        // error
// but this is not valid, here js will read exports as a variable


