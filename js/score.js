let p1Btn = document.querySelector("#p1");
let p2Btn = document.querySelector("#p2");
let resetBtn = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");

let numIput = document.querySelector("#numInput");
let targetScore = document.querySelector("#targetScore");
let gameOver = false;
let winningScore = 5;


p1Btn.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
    }
    p1Display.textContent = p1Score;
    if(p1Score === winningScore) {
        p1Display.classList.add("winner");
        gameOver = true;
    }
});

p2Btn.addEventListener("click", function() {
    if(!gameOver){
        p2Score++;
    }
    p2Display.textContent = p2Score;
    if(p2Score === winningScore) {
        p2Display.classList.add("winner");
        gameOver = true;
    }
});

resetBtn.addEventListener("click", function() {
    reset();
});

numInput.addEventListener("change", function() {
    reset();
    winningScore = Number(numInput.value);
    targetScore.textContent = winningScore;
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
    winningScore = 5;
}