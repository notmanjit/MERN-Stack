// falsy values
// false, 0, -0, 0n (BigInt values), ""(empty string), null, undefined, NaN

// truthy values
// everything else except falsy values


// if (true) {
//     console.log("TRUE");
// }
// else {
//     console.log("FALSE");
// }


// if (0) {        // false
// if (1) {        // true
// if (20) {        // true
// if ("") {        // false
// if (" ") {        // true
//     console.log("true value");
// }
// else {
//     console.log("false value");
// }


// we can use this to find the string is empty or not ('' == false & ' ' == true)
// let str = '';
// if (str) {
//     console.log("str is not empty")
// }
// else {
//     console.log("str is empty")
// }


// we can also use this to find num == 0 or not (0 == false & num other than 0 == true)
let num = 0;
if (num) {
    console.log("num is not 0");
}
else {
    console.log("num is 0")
}