let answer = random(1, 10) ;
let done = false

while (! done) {
    let guess = prompt("Enter a number from 1-10");

    if (guess > 10) {
        alert("Invalid number");
    break;
    }
    if (guess < answer) {
        alert("Too low.");
    }
    else if (guess > answer) {
        alert("Too high.");
    }
    else {
        alert("You win!!");
        done = true;
    }
}