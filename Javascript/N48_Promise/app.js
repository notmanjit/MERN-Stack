// function savetoDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// callback hell

// savetoDB("Hello", () => {
//     console.log("Success : Data was saved");
//     savetoDB("world", () => {
//         console.log("Success2 : Data2 saved");
//         savetoDB("Bye", () => {
//             console.log("Success3 : Data3 saved");
//         }, () => {
//             console.log("Failure3 : Data3 not saved");
//         })
//     }, () => {
//         console.log("Failure2 : Data2 not saved");
//     });
// }, () => {
//     console.log("Weak connection! Data not saved");
// });

// -------------------------------------------------

// promise
// promise is an object

// there are 3 promise state - fulfilled, rejected, pending

// function savetoDB(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success : Data was saved");
//         } else {
//             reject("Failure : Weak connection");
//         }
//     })
// }

// let request = savetoDB("Hello");    // request = promise object
// // console.log(request);
// request
//     .then(() => {
//         console.log("promise was resolved");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//         console.log(request);
//     })


// same code compact version

// function savetoDB(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success : Data was saved");
//         } else {
//             reject("Failure : Weak connection");
//         }
//     })
// }

// savetoDB("Hello")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });

// -------------------------------------------------------

// Improved version of callback hell

// Promise chaining

// function savetoDB(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success : Data was saved");
//         } else {
//             reject("Failure : Weak connection");
//         }
//     })
// }

// savetoDB("Hello")
//     .then((result) => {                     // result(variable) is a default parameter and have value of promise result
//         console.log("Data 1 saved");
//         console.log("Result of promise :", result);     // op: "Success : Data was saved"
//         return savetoDB("World");
//     })
//     .then((result) => {
//         console.log("Data 2 saved");
//         console.log("Result of promise :", result);     // op: "Success : Data was saved"
//         return savetoDB("Byeee");
//     })
//     .then((result) => {
//         console.log("Data 3 saved");
//         console.log("Result of promise :", result);     // op: "Success : Data was saved"
//     })
//     .catch((error) => {
//         console.log("Promise rejected");
//         console.log("Error of promise :", error);       // op: "Failure : Weak connection"
//     })

// --------------------------------------------------------------

// Refactoring our old change color code with promise

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay)
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });


let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed");
        }, delay)
    })
}

changeColor("red", 1000)
    .then(() => {
        console.log("Red color was completed");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("Orange color was completed");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("Green color was completed");
        return changeColor("yellow", 1000);
    })
    .then(() => {
        console.log("Yellow color was completed");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("Blue color was completed");
    })

// this may be not more confusing than the previous code and easy to understand and read (not really lol)