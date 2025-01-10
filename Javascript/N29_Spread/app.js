// spread
// expands an iterable item into multiple values (string, array)

// let min = Math.min(5, 2, 4, 8, 9, 3);
// console.log(min);


// what if these are stored in an array
// let arr = [5, 2, 4, 8, 9, 3];
// console.log(Math.min(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5],));     // very bad

// // spread will print the elements individually
// console.log(...arr);

// // spread will pass on the elements individually as arguments
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));


// let str = "HelloWorld!";
// console.log(...str);

// ---------------------------------------------------------

// spread with array literal

// let arr = [1,2,3,4,5];
// let newArr = arr;

// if we make changes in the arr it will also reflect in newArr
// arr.push(6);
// console.log(arr);
// console.log(newArr);


// let arr = [1,2,3,4,5];
// let newArr = [...arr];

// // but now if we make changes in the arr, newArr will not change and vise-versa
// arr.push(6);
// console.log(arr);
// console.log(newArr);


// let str = [..."hello"];
// console.log(str);
// // op: ['h', 'e', 'l', 'l', 'o']



// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...odd, ...even];
// console.log(nums);

// ---------------------------------------------------------

// spread with object literal

let data = {
    name: "rohan",
    age: 21,
};

// exact copy it will take
// you can add extra property
// let copyData = {...data, id: 101, country: "India"};
// console.log(copyData);
// op: {name: 'rohan', age: 21, id: 101}


// we can also spread string and array in object literals

let arr = [1,2,3,4,5];
let obj1 = {...arr};
console.log(obj1);

// object needs key-value pair
// so the indices are stored in place of key

// key: value
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5

// same in the case of string, indices are stored as key
let obj2 = {..."hello"};
console.log(obj2);

// 0: "h"
// 1: "e"
// 2: "l"
// 3: "l"
// 4: "o"