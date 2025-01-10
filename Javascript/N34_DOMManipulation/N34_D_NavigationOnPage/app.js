// navigation

// parentElement
// children
// previousElementSibling / nextElementSibling
// childElementCount



let h4 = document.querySelector("h4");

// console.log(h4.parentElement);
// console.log(h4.children);       // returns all child name if present


let box = document.querySelector(".box");

// console.log(box.parentElement);
console.log(box.children);
// console.log(box.childElementCount);     // counts the no. of children

console.log(box.firstChild);
console.log(box.firstElementChild);

// let ul = document.querySelector("ul");

// console.log(ul.children[0].previousElementSibling);     // if not present prints null
// console.log(ul.children[1].previousElementSibling);

// console.log(ul.children[1].nextElementSibling);
// console.log(ul.children[2].nextElementSibling);


// let img = document.querySelector("img");
// img.previousElementSibling.style.color = "red";

// ----------------------------------------------------
