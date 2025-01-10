// Write a JavaScript function that returns array elements larger than a number.

// let arr = [20, 10, 17, 30, 2];
// let n = 15;

// function findLarge(arr, n) {
//     let large = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > n) {
//             large.push(arr[i]);
//         }
//     }
//     return large;
// }

// let result = findLarge(arr, n);
// console.log(result);

// --------------------------------------------------

// Write a JavaScript function to extract unique characters from a string.

// let str = "abcdabcdefgggh";

// function unique(str) {
//     let newStr = " ";
//     for (let i = 0; i < str.length; i++) {
//         let found = false;
//         for (let j = 0; j < newStr.length; j++) {
//             if (str[i] == newStr[j]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

// console.log(unique(str).trim());


// function unique(str) {
//     let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1) {
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// console.log(unique(str));

// --------------------------------------------------

// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

// let country = ["Australia", "Germany", "United States of America"];
// let country = ["12345", "1234", "123456", "123", "12345678", "12"];

// let country = [];
// let n = prompt("Enter number of countries you want to add");
// for (let i = 1; i <= n; i++) {
//     let coun = prompt("Enter the country name");
//     country.push(coun);
// }

// for (let i = 0; i < country.length; i++) {
//     let len = country[i].length;
//     console.log(len);

// }

// function countryLen(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(max.length < arr[i].length) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let result = countryLen(country);
// console.log(result);

// --------------------------------------------------

// Write a JavaScript function to count the number of vowels in a String argument

// let str = "apple";

// function countStr(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         // if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//         if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countStr(str));

// --------------------------------------------------


// Write a JavaScript function to generate a random number within a range(start,end).

// let start = 21;
// let end = 25;


let start = prompt("Enter start value");
start = parseInt(start);
let end = prompt("Enter end value");
end = parseInt(end);

function randomRange(start, end) {
    let diff = (end - start) + 1;
    let ran = Math.floor(Math.random() * diff) + start;
    return ran;
}

let result = randomRange(start, end);
console.log(result);

