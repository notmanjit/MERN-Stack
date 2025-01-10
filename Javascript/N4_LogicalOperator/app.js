// AND Operator
let marks = 75;

// if (marks >= 80 && marks <= 100) {
//     console.log("O")
// }
// else if (marks >= 60 && marks < 80) {
//     console.log("A")
// }
// else {
//     console.log("Normal")
// }


// OR Operator
// let marks = 33;
// if (marks > 33 || marks == 33) {
//     console.log("Pass");
// }
// else {
//     console.log("Fail");
// }

// NOT Operator
// console.log(!true);

// combine
// if (marks >= 33 && marks <= 100 || !false) {
//     console.log("pass")
// }

// practice part

// let str = "An apple a day keeps a doctor away.";
// // let str = "How are you?";
// if ((str[0] === 'a' || str[0] === 'A') && str.length > 3) {
//     console.log("It's a good string");
// }
// else {
//     console.log("Fine, it will also work");
// }


let num = 12;
if ((num % 3 === 0) && ((num + 1 === 15) || (num - 1 === 11))) {
    console.log("safe");
}
else {
    console.log("unsafe");
}
