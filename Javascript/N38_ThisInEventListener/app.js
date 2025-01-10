// this in eventListener
// when 'this' is used in a callback of event handler of something, it refers to that something.

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     // console.dir(this);
//     console.log(this.innerText);

//     this.style.backgroundColor = "green";
// })



let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

function changeColor() {
    // this will refer to the calling element
    console.log(this.innerText);
    this.style.backgroundColor = "orange";
}

h1.addEventListener('click', changeColor);
p.addEventListener('click', changeColor);
h3.addEventListener('click', changeColor);
btn.addEventListener('click', changeColor);