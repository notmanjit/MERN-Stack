let gameSeq = [];
let userSeq = [];

let colors = ["red", "yellow", "green", "blue"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

// let body = document.querySelector("body");

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game started");
        start = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}

function wrongFlash() {
    let body = document.querySelector("body")
    body.style.backgroundColor = "red";
    setTimeout(function () {
        body.style.backgroundColor = "white";
    }, 150);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomInx = Math.floor(Math.random() * 4);
    let ranColor = colors[randomInx];

    gameSeq.push(ranColor);
    console.log(gameSeq);

    let ranBtn = document.querySelector(`.${ranColor}`);

    gameFlash(ranBtn);
}


function checkAns(idx) {
    // console.log(`curr level : ${level}`);
    // let idx = level - 1;

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `GAME OVER! Your score was ${level - 1} <br>Press any key to restart`;
        wrongFlash();
        reset();
    }
}


function btnPress() {
    let btn = this;
    userFlash(btn);
    // console.dir(this);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}


let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}


function reset() {
    start = false;
    gameSeq = [];
    level = 0;
}