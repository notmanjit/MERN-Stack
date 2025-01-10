// async
// by default async function returns promise (doesn't matter we write promise statement or not)

// PromiseState : "fulfilled"

// async function greet() {
//     return "Hello";         // returns a promise
// }


// if the function doesn't return anything still the promise returns
// async function greet() {}


// PromiseState : "rejected"

// async function greet() {
//     // abc.abc();          //throws error
//     // throw "some random error";          //throws error
//     return "Hello";
// }

// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("Result was", result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected with error :", error);
//     })



// // also applied to arrow function
// let demo = async () => {
//     return 5;
// }

// ----------------------------------------------

// await
// pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)
// await keyword is used only when the function is async

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000)
//     })
// }


// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// ------------------------------------------------

// let's refactor our old changeColor code with async & await


// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("Color changed");
//         }, delay)
//     })
// }

// changeColor("red", 1000)
//     .then(() => {
//         console.log("Red color was completed");
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("Orange color was completed");
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//         console.log("Green color was completed");
//         return changeColor("yellow", 1000);
//     })
//     .then(() => {
//         console.log("Yellow color was completed");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("Blue color was completed");
//     })



let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log("color changed to", color);
            resolve("color changed");
        }, delay)
    })
}

async function hello() {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    changeColor("blue", 1000);
}

hello();

