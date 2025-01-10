// if statement

// let age = 21;
// if (age > 18) {
//     console.log("You are eligible to vote");
// }

// if (age < 23) {
//     console.log("Hello");
//     let a = 12;
//     let b = 10;
//     console.log(a + b);
// }

// variable declared inside any loop/condition can be only used within it
// console.log(a);


// if else statement

// let color = "blue";
// if (color === "red") {
//     console.log(`Stop! light color is ${color}`);
// }
// else if (color === "yellow") {
//     console.log(`Slow down! light color is ${color}`);
// }
// else if (color === "green") {
//     console.log(`Go! light color is ${color}`);
// }
// else {
//     console.log("out of service")
// }


// let age = 25;
// if (age >= 18) {
//     console.log("You can vote");
// }
// else if (age < 18) {
//     console.log("You cannot vote");
// }


// let size = "S";
// if (size === "XL") {
//     console.log(`The price for ${size} size = Rs250`)
// }
// else if (size === "L") {
//     console.log(`The price for ${size} = Rs200`)
// }
// else if (size === "M") {
//     console.log(`The price for ${size} size = Rs100`)
// }
// else if (size === "S") {
//     console.log(`The price for ${size} size = Rs50`)
// }
// else {
//     console.log("Please enter a valid size")
// }


// Nested if else

let marks = 94;
// if (marks >= 33) {
//     console.log("Pass")
//     if (marks >= 80) {
//         console.log('Outstanding');
//     }
//     else if (marks >= 70) {
//         console.log('A+');
//     }
//     else if (marks >= 60) {
//         console.log('A');
//     }
//     else if (marks >= 50) {
//         console.log('B');
//     }
//     else if (marks >= 33) {
//         console.log('C');
//     }
// }
// else {
//     console.log("Better luck next time")
// }


// switch statement

// let color = "green";

// switch (color) {
//     case "red" :
//         console.log("Stop");
//         break;
//     case "yellow" :
//         console.log("Slow down");
//         break;
//     case "green" :
//         console.log("Go");
//         break;
//     default :
//         console.log("Out of service");
// }



let day = 8;

switch (day) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thrusday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default :
        console.log("Not a day");
}