let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {

//     event.preventDefault();     // used to prevent the error due to the action
//     alert("form submitted");
// })

// ----------------------------------------------------

// Extracting form data

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// })



// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value} your password is set to ${pass.value}`);
// })



// another way of accessing form elements

form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.dir(form);

    let user = this.elements[0];        // this = form, see 'this' in eventListener
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value} your password is set to ${pass.value}`);
})