// onclick : when an element is clicked
// onmouseenter : when mouse enter an element(hover)


// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     alert("button clicked");
// }

// function clicked() {
//     alert("button clicked");
// }
// btn.onclick = clicked;



let btns = document.querySelectorAll("button");

for (btn of btns) {
    btn.onclick = clicked;
    btn.onmouseenter = function () {
        console.log("You hover the button");
    }
}

function clicked() {
    alert("Button clicked");
}
