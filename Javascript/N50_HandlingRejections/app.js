// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log("color changed to", color);
//             resolve("color changed");
//         }, delay)
//     })
// }

// async function hello() {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     changeColor("blue", 1000);
// }

// hello();


// suppose this changeColor function reject some calls then the code after the function call will not be executed
// so to handle this type of rejection we will surround them in try-catch block


let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log("Color changed to", color);
            resolve("Promise resolved");
        }, delay)
    })
}

async function hello() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("blue", 1000);
    } catch (err) {
        console.log("error caught");
        console.log(err);
    }


    let a = 5;
    console.log("number :", 3 + a);
}

hello();
