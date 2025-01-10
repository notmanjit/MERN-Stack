// let arr = [7, 9, 0, -2];
// let n = 3;

// console.log(arr);
// console.log(arr.slice(0, n));

// ----------------------------------------------------

// console.log(arr.slice(-n));
// console.log(arr.slice(arr.length - n));

// ----------------------------------------------------

// let str = '';
// // let str = prompt("Enter your string :");
// if(str) {
//     console.log("not empty");
// }
// else {
//     console.log("empty");
// }


// ----------------------------------------------------

// let str = "Monu";
// let i = 0;

// if (str[i] == str[i].toLowerCase()) {
//     console.log(`${str[i]} is a lower case character`);
// }
// else {
//     console.log(`${str[i]} is a upper case character`);
// }

// ----------------------------------------------------

// let str = "       Hello    ";
// // let str = prompt("Enter your string");
// console.log(str);
// console.log(str.trim());

// ----------------------------------------------------

// let arr = [1, 2, 3, 4, 5];
// let n = 5;

let arr = ['a', 'e', 'i', 'o', 'u'];
let n = 'b';

// console.log(arr.includes(n));

if (arr.indexOf(n) != -1) {
    console.log("Element exist");
}
else {
    console.log("Element does not exist");
}