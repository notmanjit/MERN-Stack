// Square and sum the array elements using the arrow function and then find the average of the array.

// let arr = [1, 2, 3, 4, 5];

// function sqsum(arr) {
//     let result = arr.reduce((acc, el) => (el * el) + acc);
//     console.log(result);
//     console.log(result / arr.length);
// }
// sqsum(arr);

// -------------------------------------------------------

// Create a new array using the map function whose each element is equal to the original element plus 5.

// let arr = [1, 2, 3, 4, 5];

// function newArr(arr) {
//     return arr.map(el => el + 5);
// }
// console.log(newArr(arr));

// -------------------------------------------------------

// Create a new array whose elements are in uppercase of words present in the original array.

// let arr = ["apple", "boy", "cat", "dog"];

// function upper(arr) {
//     return arr.map((el) => el.toUpperCase());
// }
// console.log(upper(arr));

// -------------------------------------------------------

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the addtional arguments doubled.

let arr = [1, 2, 3, 4, 5];

// function doubleAndReturnArgs(arr, ...args) {
//     let result = args.map((el) => el * 2);
//     let newArr = [...arr, ...result];
//     return newArr;
// }

// let ans = doubleAndReturnArgs(arr, 6, 7, 8, 9, 10);
// console.log(ans);

// OR

let doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((el) => el * 2)];

let ans = doubleAndReturnArgs(arr, 6, 7, 8, 9, 10);
console.log(ans);

// -------------------------------------------------------

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// let obj1 = {
//     name: "Ram",
//     age: 23,
// };

// let obj2 = {
//     class: "XII",
//     roll: 25,
// };

// function mergeObject(obj1, obj2) {
//     let result = {...obj1, ...obj2};
//     return result;
// }
// console.log(mergeObject(obj1, obj2));

// OR

// let func = function(obj1, obj2) {
//     return {...obj1, ...obj2};
// }
// console.log(func(obj1, obj2));

// OR

// let mergeObject = (obj1, obj2) => ({...obj1, ...obj2});
// console.log(mergeObject(obj1, obj2));