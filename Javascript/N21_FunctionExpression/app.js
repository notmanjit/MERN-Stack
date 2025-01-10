// function expression

// let total = function(a, b) {
//     return a + b;
// }

// // if we write total in the console the function code stored in total will be printed
// // ƒ (a, b) {
// //     return a + b;
// // }

// let result = total(10,5);
// console.log(result);



// let hello = function() {
//     console.log("hello");
// }
// hello();

// // we can do all the operations in the function expression like other variables
// // (update, delete, pass like arugument and return in the function)

// hello = function() {
//     console.log("namaste");
// }
// hello();

// -----------------------------------------------------------

// high order function
// a function that does one or both
// 1. takes one or multiple functions as arguments
// 2. returns a function


// point 1
// let greet = function() {
//     console.log("hello");
// }

// function multiGreet(func, n) {      // higher order function
//     for (let i = 1; i <= n; i++) {
//         func();
//     }
// }

// multiGreet(greet, 5);
// multiGreet(function(){console.log("namaste")}, 5);


// point 2
// function oddEvenTest(request) {
//     if (request == "even") {
//         return function(n) {
//             // console.log(n % 2 == 0);
//             return n % 2 == 0;
//         }
//     }
//     else if (request == "odd") {
//         return function(n) {
//             // console.log(!(n % 2 == 0));
//             return !(n % 2 == 0);
//         }
//     }
// }

// let request = "even";
// let ans = oddEvenTest(request);

// // ans(3);
// console.log(ans(10));

// -----------------------------------------------------------

// methods(function) in object

// const calculator = {
//     num: 55,
//     add: function(a, b) {
//         return a + b;
//     },
//     sub: function(a, b) {
//         return a - b;
//     },
//     mul: function(a, b) {
//         return a * b;
//     },
//     div: function(a, b) {
//         return a / b;
//     }
// }

// console.log(calculator);
// console.log(calculator.add);
// console.log(calculator.num);
// console.log(calculator.add(4,2));
// console.log(calculator.sub(4,2));
// console.log(calculator.mul(4,2));
// console.log(calculator.div(4,2));

// this is how methods in arrays and string works
// (Math.floor, Math.random) Math is object and random is method(function)

// if we write only Math.random the function will be printed and if Math.random() is written the method will execute just like calculator.add(4,2)


// -----------------------------------------------------------

// methods shorthand in object

const calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    },
    div(a, b) {
        return a / b;
    }
};

console.log(calculator.add(4,2));
console.log(calculator.sub(4,2));