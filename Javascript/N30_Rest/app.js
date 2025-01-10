// rest
// allows a function to take indefinite number of arguments and bundle them in an array

// rest is opposite of spread
// in spread from 1 iterable we make multiple value
// but in rest we take multiple value and store them in an iterable


// function value(...args) {
//     for(let i = 0; i < args.length; i++) {
//         console.log("You gave :", args[i])
//     }
// };
// // multiple arguments
// value(1,2,3,4,5,6,7,8,9);

// -------------------------------------------------------------

// arguments array
// javascript has a inbuilt array(not really an array)

// function num(a, b, c, d) {      // these arguments are stored in the arguments collection(variable)
//     console.log(arguments);
// }
// num(1,2,3,4,5);


// function num() {      // if the arguments are removed
//     console.log(arguments);
//     console.log(arguments.length);
// }
// // still the values in the funtion call will store in arguments collection(variable)
// num(1,2,3,4,5);


// since the arguments is not actually an array so, array methods will not work on arguments except length
// also we can individually access the element of arguments array (arguments[0])

// function num() {
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(6);      // not a function
// }
// num(1,2,3,4,5);

// -------------------------------------------------------------

// Example 1

// function sum() {
//     // since arguments is not an array so array methods will not work
//     return arguments.reduce((sum, el) => sum + el);
// }
// let result = sum(1,2,3,4,5);
// console.log(result);


// function sum(...args) {
//     // when you collect elements using rest it stores in an array
//     return args.reduce((sum, el) => sum + el);
// }
// let result = sum(1,2,3,4,5);
// console.log(result);

// Example 2

// find min (creating our own Math.min)
// function min(...args) {
//     return args.reduce((min, el) => {
//         if (min > el) {
//             return el;
//         }
//         else {
//             return min;
//         }
//     });
// }
// let ans = min(34, 12, 87, 9, 25, 3, 10);
// console.log(ans);



// we can pass extra parameters with ...args
function num(msg, ...args) {
    console.log(msg);
    console.log(args);
}
num("hello", 1, 2, 3, 4, 5);


// function num(...args, msg)       // not valid, all arguments will get stored in args and msg remains undefined