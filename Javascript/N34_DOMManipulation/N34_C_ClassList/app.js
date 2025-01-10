// using classList

// gives the list of all classes for an element

let heading = document.querySelector("h1");
// console.log(heading.classList);


// // add classList
// heading.classList.add("abc");
// heading.classList.add("xyz");
// console.log(heading.classList);

// what you can do with this
// give styling to this class in the css file and then add the class using js. So, the styles will applied to the element



// remove classList
// heading.classList.remove("abc");
// console.log(heading.classList);

// advantage of classList :
// why we not use setAttribute
// because setAttribute allows one class at a time so, using setAttribute will remove all the other classes unlike classList



// contains
// to check if class exist

// console.log(heading.classList.contains("abc"));     // op: true/false
// console.log(heading.classList.contains("xyz"));



// toggle
// to toggle between add and remove
// if present then remove or if not present then add

// heading.classList.toggle("abc");        // gives true/false
// console.log(heading.classList);

// heading.classList.toggle("xyz");
// console.log(heading.classList);

// ----------------------------------------------------
