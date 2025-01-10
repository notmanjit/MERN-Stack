// for loop

// for (let i=1; i<=5; i++) {
//     console.log(i);
// }

// console.log(i);

// for (let i = 10; i>=1; i--) {
//     console.log(i);
// }

// odd numbers

// for (let i=1; i<=15; i = i+2) {
//     console.log(i);
// }

// for (let i=1; i<=15; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

// even numbers (increasing)

// for (let i = 2; i <= 10; i = i+2) {
//     console.log(i);   
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// even numbers (decreasing)

// for (let i = 10; i >= 2; i = i-2) {
//     console.log(i);
// }

// multiplication table

// let n = prompt("Enter your number :");
// n = parseInt(n);

// for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(n*i);
// }

// ------------------------------------------------------

// while loop

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let i = 5; 
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i = i + 2;
// }


// Guess the favourite movie game

// const favMovie = "taqdeer";
// let guess = prompt("Enter your guess");
// while ((favMovie != guess) && (guess != "quit")) {
//     guess = prompt("Wrong guess! Try again");
// }

// if (guess == favMovie) {
//     console.log("Congrats! You guessed it right");
// }
// else {
//     console.log("You quit!");
// }

// --------------------------------------------------------------

// using break

// const favMovie = "taqdeer";
// let guess = prompt("Enter your guess");
// while (favMovie != guess) {
//     if (guess == "quit") {
//         console.log("You quit");
//         break;
//     }
//     guess = prompt("Wrong guess! Try again");
// }

// if (guess == favMovie) {
//     console.log("Congrats! You guessed it right");
// }

// --------------------------------------------------------------

// loops for array

let fruits = ["apple", "mango", "banana", "orange", "litchi"];
// fruits.push("pineapple");

// for (let i = 0; i < fruits.length; i++) {
//         console.log(i, fruits[i]);
//     }

// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(i, fruits[i]);
// }


// nested array loop

// let heroes = [["ironman", "spiderman", "hulk"], ["superman", "wonder woman", "flash"]];

// for (let i = 0; i < heroes.length; i++){
    //     console.log(`list #${i}`);
    //     for (let j = 0; j < heroes[i].length; j++) {
        //         console.log(heroes[i][j]);
        //     }
        // }
        
        // --------------------------------------------------------------
        
        // for of loop 
// for (element of collection) {}   // ex. array, string

// array
// for (fruit of fruits) {
//     console.log(fruit);
// }


// string
// let word = "hello";
// for (i of word) {
    //     console.log(i);
// }


// nested for of loop

let heroes = [["ironman", "spiderman", "hulk"], ["superman", "wonder woman", "flash"]];

for (list of heroes) {
    console.log(list);
    for (hero of list) {
        console.log(hero);
    }
}