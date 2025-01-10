let p = document.createElement("p");
p.innerText = "Hey I am red!";
// p.style.color = "red";

p.classList.add("red");     // adding class with color property red

let body = document.querySelector("body");
body.prepend(p);

// ------------------------------------------------------

let h3 = document.createElement("h3");
h3.innerText = "I am blue h3!";
// h3.style.color = "blue";

h3.classList.add("blue");       // adding class with color property blue

body.prepend(h3);

// ------------------------------------------------------

let div = document.createElement("div");
body.prepend(div);

div.classList.add("box");       // styles are added through class
// div.style.border = "2px black solid";
// div.style.backgroundColor = "pink";

let h1 = document.createElement("h1");
h1.innerText = "I am in a div";

let innerP = document.createElement("p");
innerP.innerText = "ME TOO!";

// div.appendChild(h1);
// div.appendChild(innerP);

// div.append(h1);
// div.append(innerP);

div.insertAdjacentElement('afterbegin', h1);
div.insertAdjacentElement('beforeend', innerP);