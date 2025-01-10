
let gameSeq = [];
let userSeq = [];

let colors = ["red", "yellow", "green", "blue"];

let start = false;
let level = 0;
let highScore = level;

let h2 = document.querySelector("h2");
let cont = document.querySelector(".container");

let hs = document.createElement("h2");
cont.insertAdjacentElement("beforebegin", hs);

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game started");
        start = true;
        levelUp();
    }
})

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 4);
    let ranCol = colors[ranIdx];
    let ranBtn = document.querySelector(`.${ranCol}`);

    // console.log(ranIdx);
    // console.log(ranCol);
    // console.log(ranBtn);

    gameSeq.push(ranCol);
    console.log(gameSeq);

    gameFlash(ranBtn);
}

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 250)
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);

}

function btnPress() {
    let btn = this;
    // console.log(btn);

    let userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    // console.log(userSeq);

    userFlash(btn);

    checkAns(userSeq.length - 1);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250)
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        let score = level - 1;
        h2.innerHTML = `GAME OVER! Your score was ${score}.<br> Press any key to restart`;

        if (score > highScore) {
            highScore = score;
        }
        hs.innerText = `High Score : ${highScore}`;

        wrongFlash();
        reset();
    }
}

function wrongFlash() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(function () {
        body.style.backgroundColor = "white";
    }, 150)
}

function reset() {
    start = false;
    level = 0;
    gameSeq = [];
}