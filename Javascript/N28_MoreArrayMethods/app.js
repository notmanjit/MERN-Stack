// forEach
// apply function to each element in an array

// let arr = [1,2,3,4,5];

// let func = function(el) {
//     console.log(el);
// }
// arr.forEach(func);


// arr.forEach(function(el) {
//     console.log(el);
// });


// arr.forEach((el) => {
//     console.log(el);
// })


// forEach in object array

let obj = [{
    name: "rohan",
    marks: 90
}, {
    name: "sohan",
    marks: 96
}, {
    name: "mohan",
    marks: 99
}];

// obj.forEach((student) => {
//     console.log(student.marks);
// })

// ----------------------------------------------------------

// map
// element are applied to the function and return element to a new array of same size


// let num = [1,2,3,4,5];

// let sqr = num.map((element) => {
//     return element * element;
// })

// let gpa = obj.map((element) => {
//     return element.marks / 10;
// })

// ----------------------------------------------------------

// filter

// let nums = [1,4,5,6,12,5,11,10,8];

// let even = nums.filter((num) => {
//     return num % 2 == 0;
// })

// ----------------------------------------------------------

// every
// return true if every element of array gives true for some function else returns false.
// its like logical AND if all true then returns true else false 

// let nums = [23,4,6,8,10];
// let even = nums.every((el) => (el % 2 == 0));

// ----------------------------------------------------------

// some
// returns true if some elements of array give true for some function else returns flase
// its like logical OR if any true then returns true else false 

// let nums = [2,3,5,7,9];
// let even = nums.some((el) => (el % 2 == 0));

// ----------------------------------------------------------

// reduce(accumulator, element)
// reduce the array to a single value

// let nums = [1, 2, 3, 4, 5];

// let finalVal = nums.reduce((acc, el) => (acc + el));
// console.log(finalVal);


// ----------------------------------------------------------

// practice question

// maximum element in an array

// let arr = [1,4,2,5,60,7,2,9,2];

// let result = arr.reduce((max, el) => {
//     if(el > max) {
//         return el;
//     }
//     else {
//         return max;
//     }
// })
// console.log(result);


// check if all numbers are multiple of 10

// let arr = [10, 20, 30, 40, 50];

// let result = arr.every((el) => el % 10 == 0);
// console.log(result);


// minimum element in an array

let arr = [1, 4, 2, 5, -60, 7, 2, 9, 2];
// let result = arr.reduce((min, el) => {
//     if(min > el) {
//         return el;
//     }
//     else {
//         return min;
//     }
// })

// console.log(result);

// wrap within function
// function getMin(arr) {
//     let result = arr.reduce((min, el) => {
//         if (min > el) {
//             return el;
//         }
//         else {
//             return min;
//         }

//     })
//     return result;
// }
// console.log(getMin(arr));

// ----------------------------------------------------------

// default parameter

function sum(a, b = 2) {
    return a + b;
}

// if b have some value in parameter default value will be ignored
console.log(sum(1, 4));     // op: 5
console.log(sum(1));        // op: 3


function add(a = 2, b) {
    return a + b;
}

// this time 1 will assign to a and b will be undefined
console.log(add(1));
// a = 1 , b = undefined
// op: NaN