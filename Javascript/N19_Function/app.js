// function

// function hello() {
//     console.log("Hello World!");
// }
// calling the function
// hello();


function printName() {
    console.log("Monu");
}
// printName();


function print1to5() {
     for (let i = 1; i <= 5; i++) {
        console.log(i);
     }
}
// print1to5();


// function isAdult() {
//     let age = 23;
//     // let age = prompt("Enter your age");
//     if (age >= 18) {
//         console.log("Adult");
//     }
//     else {
//         console.log("Not adult");
//     }
// }
// isAdult();

// --------------------------------------------------

// practice questions

// create a function to print a poem
function poem() {
    console.log("Early to bed, early to rise");
    console.log("makes a person");
    console.log("healthy, wealthy and wise");
}
// poem();


// create a function to roll a dice and display random dice number
function dice() {
    let ran = Math.floor(Math.random() * 6) + 1;
    console.log(ran);
}
// dice();


// --------------------------------------------------

// Function with arguments

function person(name, age) {
    console.log(`${name} is ${age} years old`);
}
// person("Rohan");
// person("Rohan", 22);


function add(a, b) {
    console.log(a + b);
}
// add(20, 50);

let x = 10;
let y = 20;
// add(x, y);

// --------------------------------------------------

// practice questions

// avg of 3 nums
function calcAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
// calcAvg(10, 20, 30);


// to see any function(user define / in-built) in console just write the function name without the parenthesis()
// if it is user define then whole code will show and if its in-built no code will show
// ex. in-built: console.log, Math.random, name.push, ...
// ex. user define: calcAvg, person,...

// multiplication table of num
function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}
// table(55);

// --------------------------------------------------

// return statement in function

function sum(a, b) {
    return a + b;
}
// let s = sum(10,5);
// console.log(s);

// for sum of 3 numbers we can do this(not neccesary to do like this just showing)
let s = sum(sum(10,5), 10);
// first inner will be solved i.e. sum(10,5) = 15 then sum(15,10) = 25
// console.log(s);


function isAdult(age) {
    if (age >= 18) {
        return "adult";
    }
    else {
        return "not adult";
    }
}
// console.log(isAdult(20));

// --------------------------------------------------

// practice questions

// return sum of nums from 1 to n
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// let result = getSum(100);
// console.log(result);


// concat all the strings in an array and return
function addString(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        // str = str.concat(arr[i]);
        str += arr[i];
    }
    return str;
}

let arr = ["Rohan", "Sohan", "Mohan"];
let result = addString(arr);
console.log(result);

