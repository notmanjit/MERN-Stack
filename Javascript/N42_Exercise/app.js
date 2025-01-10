// Q1

// let btn = document.createElement("button");
// btn.innerText = "Click me";

// document.querySelector("body").prepend(btn);

// btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "greenyellow";
// })


// Q2

let inp = document.createElement("input");
let h2 = document.createElement("h2");
let body = document.querySelector("body");

body.prepend(inp);
body.prepend(h2);

inp.setAttribute("placeholder", "enter your name");
h2.innerText = "Name";

inp.addEventListener("input", function () {
    let filteredValue = "";
    console.log(inp.value);
    for (let char of inp.value) {
        if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ') {
            filteredValue += char;
        }
    }
    h2.innerText = filteredValue;
})
