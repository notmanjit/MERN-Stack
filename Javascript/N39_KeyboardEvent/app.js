let btn = document.querySelector("button");

// btn.addEventListener("click", function(event) {
//     console.log(event);
// })

// btn.addEventListener("dblclick", function(event) {
//     console.log(event);
// })



// let input = document.querySelector("input");

// input.addEventListener("keydown", function(event) {
//     // console.log(event);
//     console.log("key :",event.key);
//     console.log("code :",event.code);
//     console.log("Key down");
// })

// input.addEventListener("keyup", function() {
//     console.log("Key up");
// })

// -----------------------------------------------------

// practice :
// make character move

let input = document.querySelector("input");

input.addEventListener("keydown", function(event) {
    console.log("code :",event.code);
    if (event.code == "KeyU") {
        console.log("Character moves up");
    }
    else if (event.code == "KeyD") {
        console.log("Character moves down");
    }
    else if (event.code == "KeyL") {
        console.log("Character moves left");
    }
    else if (event.code == "KeyR") {
        console.log("Character moves right");
    }
})
