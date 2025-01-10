// Global scope
// the variable that can be accessed and used from anywhere

// let a = 34;      // global scope

// -------------------------------------------------------------

// Function scope
// the variable that can be accessed and used only within the function

function calcSum(a, b) {
    let sum = a + b;
    console.log(sum);       // function scope
}
// calcSum(10, 5);

// console.log(sum);    // sum is not accessible outside the function

// -------------------------------------------------------------

// Block scope
// the variable declared inside the block{} cannot be accessed outside the block

// {
    //     let b = 12;
// }
// console.log(b);      // not accessible

// for (let i = 1; i <= 5; i++) {
    // console.log(i);      // block scope
// }
// console.log(i);      // not accessible


// let age = 23;
// if (age >= 18) {
//     let str = "adult";
//     console.log(str);        // block scope
// }
// console.log(str);        // not accessible

// -------------------------------------------------------------

// Lexical scope
// in nested function, variable declared in the outer function can be accessible in the inner function defined after the variable declaration
// but opposite is not true

// function outerFn() {
//     let a = 23;
//     let b = 44;

//     // we cannot call innerFn outside the outerFn(because of function scope)
//     function innerFn() {        // function scope
//         let x = 12;
//         console.log(a);     // lexical scope
//     }
//     innerFn();
    
//     console.log(x);     // not accessible
// }
// outerFn();

// innerFn();      // not accessible


let greet = "hello";    // global scope

function changeGreet() {
    let greet = "namaste";      // function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet);     // lexical scope
        // this greet will not print because function is not called
    }
}
console.log(greet);
changeGreet();