// let student1 = "Rohan";
// let student2 = "Sohan";
// let student3 = "Mohan";

// let student = ["Rohan", "Sohan", "Mohan"];
// console.log(student[0]);
// console.log(student[1]);
// console.log(student[2]);

// console.log(student.length);


// string array
// let student = ["Rohan", "Sohan", "Mohan"];
// num array
// let num = [45, 33, 100, 89, 70];
// mixed array
// let arr = ["monu", 34, 56.4];
// empty array
let emp = [];

// console.log(typeof student);     // o/p: object


// console.log(arr.length);
// console.log(emp.length);
// console.log([].length);
// console.log([2,3,5,6,4].length);

// it means 0th element of arr i.e. "monu" and 0th element of the element i.e. 'm'
// console.log(arr[0][0]);

// length of the string "monu" i.e. 4
// console.log(arr[0].length);

// ---------------------------------------------------------

// arrays are mutable

let fruits = ["apple", "banana", "mango"];

fruits[0] = "pineapple";
fruits[1] = "orange";

// you can also create null values it will not count as empty
fruits[3] = null;

// it will create empty strings in between
fruits[10] = "berry";

// console.log(fruits[5]);
// o/p: undefined but it will count in the array

// ['pineapple', 'orange', 'mango', null, empty × 6, 'berry']
// 0 : "pineapple"
// 1 : "orange"
// 2 : "mango"
// 3 : null
// 10 : "berry"

// console.log(fruits);
// console.log(fruits.length);     // o/p: 11

// -------------------------------------------------------------

// Array reference

// reference variable stores the address not the value 
let arr1 = [1];     // for ex. memory address: abc
let arr2 = [1];     // for ex. memory address: xyz

// console.log(arr1 == arr2);      // op: false
// console.log(arr1 === arr2);      // op: false

// here the values are same but the address are different 
// it will compare the address and the reference variable(arr1, arr2) only knows the address not the value

let arr3 = arr1;
// we assigned the arr1 to arr3

// console.log(arr1 == arr3);      // op: true
// console.log(arr1 === arr3);      // op: true
// here we pointed the same memory address therefore o/p is true
// and now if we make changes in any array(arr1, arr3) it will reflect in both the arrays because both are pointing to the same memory address

// arr1.push(2);
// console.log(arr1);
// console.log(arr3);

// -------------------------------------------------------------

// constant array

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// making an array constant doesn't mean we can't perform any method, we can
// arr.push(6);
// console.log(arr);
// arr.pop(6);
// console.log(arr);

// it means we can't change the memory address
// arr = [3,4,9];
// here we are creating a new array which will create a new memory address for arr(not allowed)

// arr = null;
// arr = fruits;
// again we are creating a new array by assigning the fruits / null(not allowed)
// (arr = [3,4,9]), (arr = fruits), (arr = null) these can be done if we had created the array with "let" keyword instead of "const"

// -------------------------------------------------------------

// nested array / multi-dimensional array

// let nums = [[1, 2], [3, 4], [5, 6]];

// console.log(nums.length);
// console.log(nums[0].length);
// console.log(nums[0][0]);
// console.log(nums[2][1]);
// console.log(nums[1][2]);        // op: undefined index 2 is not present


// tic-tac-toc
let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(game);
game[0][1] = 'O';
console.log(game);