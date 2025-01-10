let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let div = document.querySelector("div");

btn.addEventListener("click", function() {
    console.log("random color");
    h2.innerText = randomColor();
    div.style.backgroundColor = randomColor();
})

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}