const max = prompt("Enter the max number you want to guess within");

let ran = Math.floor(Math.random() * max) + 1;
console.log(ran);

let guess = prompt(`Guess the number between 1 to ${max}`);

while (true) {
    if(guess == "quit") {
        console.log("You quit");
        break;
    }
    else if (guess == ran) {
        console.log("Congratulation! You guess the right number");
        break;
    }
    else {
        if (guess > ran) {
            // console.log("HINT : Your guess is greater than the random number")
            guess = prompt("HINT : Your guess is greater than the random number")
        }
        else {
            // console.log("HINT : Your guess is lesser than the random number")
            guess = prompt("HINT : Your guess is lesser than the random number")
        }
        // guess = prompt("Wrong guess! try again");
    }
}