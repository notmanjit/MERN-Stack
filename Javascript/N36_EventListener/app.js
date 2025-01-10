let btns = document.querySelectorAll("button");

// the problem with onclick is it support only one event
// for (btn of btns) {
//     btn.onclick = clicked;      // not perform any task
//     btn.onclick = sayHello;     // this event will occur
// }
// function clicked() {
//     alert("Button clicked");
// }
// function sayHello() {
//     console.log("Hello");
// }


// addEventListener
// multiple eventListener can be added to an element
// syntax : element.addEventListener(event, callback)


// for (btn of btns) {
//     // btn.addEventListener("click", clicked);
//     // btn.addEventListener("click", sayHello);
    
//     btn.addEventListener("dblclick", function () {
//         console.log("double clicked");
//     });
// }
// function clicked() {
//     alert("Button clicked");
// }
// function sayHello() {
//     alert("Hello");
// }

// --------------------------------------------

// eventListener on elements

let div = document.querySelector("div");

div.addEventListener("click", function() {
    console.log("Clicked");
})
div.addEventListener("mouseenter", function() {
    console.log("box hover");
})
