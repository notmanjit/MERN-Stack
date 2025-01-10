// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// })



// change event
// // change event occurs when the value of an element has been changed only works on input, textarea, select elements
// // it tracks the initial value with the final value

// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//     console.log("change event");
//     console.log("final input", this.value);
// })



// input event
// // input event is very similar to change event and only works on input, textarea, select elements
// // the only difference is it track every small changes
// // input element track only character keys, keys like ctrl, shift, arrowup these are not tracked

// user.addEventListener("input", function() {
//     console.log("input event")
//     console.log("final input", this.value);
// })

// ---------------------------------------------------

// practice

let inp = document.querySelector("input");

inp.addEventListener("input", function() {
    let p = document.querySelector("p");
    p.innerText = this.value;
})