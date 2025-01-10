let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = inp.value;

    let del = document.createElement("button");
    del.classList.add("delete");
    del.innerText = "Delete";

    ul.append(li);
    li.appendChild(del);
    inp.value = "";
})

// right approach
// so if we want our new child element to trigger for some task, we assign the same trigger to the parent instead of the child
// using bubbling when an event comes to the child the parent will automatically triggered

// here the task is to make button work and the button's parent is li
// but we will not use the li as a parent because it is also a new element created by us
// so the parent will be ul

ul.addEventListener("click", function(event) {
    // console.dir(event.target.nodeName);
    if (event.target.nodeName == "BUTTON") {
        let item = event.target.parentElement;
        item.remove();
        console.log("deleted");
    }
})





// Event Delegation

// In the below code, the eventListener will work only for the existing elements, the new added task delete buttons will not work
// here comes the concept of "event delegation"
// if we added a new element on the page and for that similar elements we already created eventListener then the eventListener will not work for the new elements
// but if we want our eventListener to work for the new elements too, we use event delegation
// here we will use our bubbling property

// see the above "right approach" part

// let delBtns = document.querySelectorAll(".delete");

// for (del of delBtns) {
//     del.addEventListener("click", function() {
//         console.log("Deleted");
//         let par = this.parentElement;
//         // console.log(par);
//         par.remove();
//     })
// }