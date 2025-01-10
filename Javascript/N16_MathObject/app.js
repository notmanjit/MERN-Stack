// value of pi

// console.log(Math.PI);

// ------------------------------------------------------------

// Math.abs gives only positive value

// console.log(Math.abs(-5));
// console.log(Math.abs(-5.5));
// console.log(Math.abs(5.5));
// console.log(Math.abs(5));

// ------------------------------------------------------------

// Math.pow(a,b) , gives power of a number, a = number, b = power

// console.log(Math.pow(2,5));     // op: 32

// ------------------------------------------------------------

// Math.floor gives the nearest smallest integer value
// nearest smallest integer to 5.999 = 5
// op: 5

// console.log(Math.floor(5.01));
// console.log(Math.floor(5.5));
// console.log(Math.floor(5.99999999));

// ------------------------------------------------------------

// Math.ceil gives the nearest largest integer value
// nearest smallest integer to 5.001 = 5
// op: 6

// console.log(Math.ceil(5.01));
// console.log(Math.ceil(5.5));
// console.log(Math.ceil(5.99999999));

// ------------------------------------------------------------

// 0 to 1
// Math.random gives random number between 0 to 1 and 1 is excluded

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// ------------------------------------------------------------

// random integers

// // step 1
// let num = Math.random();

// // step 2
// // multiply the num with the last within range number
// // (if range = 1 to 10 multiply with 10)
// // (if range = 1 to 5 multiply with 5)
// // if value = 0.5018294393358058 after multiplying with 10 value = 5.018294393358058
// num = num * 10;

// // step 3
// // round off the num to remove the decimal number
// // if value = 5.018294393358058 now value = value = 5
// num = Math.floor(num);

// // step 4
// // 0.074208320807851, 0.18442669022472935, 0.9095573094791258 after following all the steps we will only get the values in the range of 0 to 9 not 1 to 10
// // so to come in the range of 1 to 10 we will add 1 to the num
// num = num + 1;
// console.log(num);



// // now combine this all in one line
// let n = Math.floor(Math.random() * 10) + 1;
// console.log(n);

// ------------------------------------------------------------

// practice ques

// random num between 1 to 100

// let num = Math.floor(Math.random() * 100) + 1;
// console.log(num);


// random num between 1 to 5

// let num = Math.floor(Math.random() * 5) + 1;
// console.log(num);


// random num between 21 to 25

let num = Math.floor(Math.random() * 5) + 21;
console.log(num);

// multiplying with 5 gives 0,1,2,3,4 after adding 1 it gives 1,2,3,4,5
// same multiplying with 5 gives 0,1,2,3,4 after adding 21 it gives 21,22,23,24,25