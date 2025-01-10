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


// callback nesting ---> callback hell

// callback hell is a real problem, due to this sometimes its hard to read our own written code
// few thing are made in js to overcome this problem like promise, async & await



// Another example of callback hell
// we are performing simple task but the below code will look very confusing

// short explaination - if any our data is not saved then, it will stop there

function savetoDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDB("Hello", () => {
    console.log("Success : Data was saved");
    savetoDB("world", () => {
        console.log("Success2 : Data2 saved");
        savetoDB("Bye", () => {
            console.log("Success3 : Data3 saved");
        }, () => {
            console.log("Failure3 : Data3 not saved");
        })
    }, () => {
        console.log("Failure2 : Data2 not saved");
    });
}, () => {
    console.log("Weak connection! Data not saved");
});


// To resolve this see the next concept of promise