let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click me";

let body = document.querySelector("body");
body.prepend(input);
body.prepend(button);



input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");



let btn = document.querySelector("#btn");
btn.style.color = "white";
btn.style.backgroundColor = "blue";



let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.classList.add("heading");

body.prepend(h1);



let para = document.createElement("p");
body.append(para);
para.innerHTML = "Apna College <b>Delta</b> Practice";