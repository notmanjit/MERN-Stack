// let num = 100;

// if (num % 10 === 0) {
//     console.log("good");
// }
// else {
//     console.log("bad");
// }

// ---------------------------------------------------

// let name = prompt("Enter your name :");
// let age = prompt("Enter your age :");

// alert(`${name} is ${age} years old`);

// ---------------------------------------------------

// let quarter = 2;

// switch (quarter) {
//     case 1 :
//         console.log("January, February, March");
//         break;
//     case 2 :
//         console.log("April, May, June");
//         break;
//     case 3 :
//         console.log("July, August, September");
//         break;
//     case 4 :
//         console.log("October, November, December");
//         break;
//     default :
//         console.log("Enter a valid number")
// }

// ----------------------------------------------------

// let str = "Aeroplane";

// if ((str[0] == 'a' || str[0] == 'A') && str.length > 5) {
//     console.log("Golden string");
// }
// else {
//     console.log("Not golden string");
// }

// ----------------------------------------------------

let a = 4;
let b = 7;
let c = 10;

// if (a > b && a > c) {
//     console.log("a is the greatest");
// }
// else if (b > a && b > c) {
//     console.log("b is the greatest");
// }
// else {
//     console.log("c is the greatest");
// }

// or

if (a>b) {
    if (a>c) {
        console.log("a is the greatest");
    }
    else {
        console.log("c is the greatest");
    }
}
else {
    if (b>c) {
        console.log("b is the greatest");
    }
    else {
        console.log("c is the greatest");
    }
}

// ----------------------------------------------------

// let num1 = 32;
// let num2 = 47852;

// if ((num1 % 10) === (num2 % 10)) {
//     console.log("both have same last digits i.e.", num1%10);
// }
// else {
//     console.log("not equal");
// }