// delete all occurances of num in the array

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// console.log(arr);

// for (let i=0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// ----------------------------------------------------

// find the number of digits in a number

let num = 287152;
let count = 0;
let copy = num;

while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}
console.log(count);

// ----------------------------------------------------

// find the sum of the digits of a number

// let num = 287152;
// let sum = 0;

// console.log(`Number : ${num}`);

// while (num >= 1) {
//     let r = num % 10;
//     sum = sum + r;
//     num = Math.floor(num / 10);
// }
// console.log(`Sum of the digits : ${sum}`);

// ----------------------------------------------------

// print factorial of a number

// let num = 5;
// let factorial = 1;

// for (let i=1; i <= num; i++) {
    //     factorial *= i;
    // }
    // console.log(`Factorial of ${num} : ${factorial}`);
    
// ----------------------------------------------------

// find the largest number in an array

// let arr = [1,20,3,4,5,6,2,300];
// let largest = 0;

// for (element of arr) {
//     if (element > largest) {
//         largest = element;
//     }
// }

// console.log(`Largest element in the array is ${largest}`);