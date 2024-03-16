"use strict";

// variables
let randomNum = Math.floor(Math.random() * 20) + 1;
const secretNumber = document.querySelector(".secretNumber");
const guess = document.querySelector(".guess");
const score = document.querySelector(".score");
const highscoreValue = document.querySelector(".highscore");
const again = document.querySelector(".again");

let scoreNum = 10;
let highScore = 0;

// audios
const winSound = new Audio("/audio/mixkit-arcade-bonus-229.wav");
const loseSound = new Audio("/audio/mixkit-arcade-retro-game-over-213.wav");
const checkClickSound = new Audio(
  "/audio/mixkit-arcade-game-jump-coin-216.wav"
);

// adding the check logic
const checkBtn = document
  .querySelector(".check")
  .addEventListener("click", () => {
    checkClickSound.play();
    const inputNumber = Number(document.querySelector(".inputNumber").value);

    // no input
    if (!inputNumber) {
      guess.innerHTML = "⚠️ Choose a Number ";

      //   on Winning
    } else if (inputNumber === randomNum) {
      guess.innerHTML = "Correct Number 👌";
      secretNumber.innerHTML = inputNumber;
      document.body.style = "background-color : #16db65";
      secretNumber.style = "width : 12rem";
      if (scoreNum > highScore) {
        highScore = scoreNum;
        highscoreValue.innerHTML = highScore;
      }
      winSound.play();

      //   guess is too high
    } else if (inputNumber < randomNum) {
      if (scoreNum > 1) {
        guess.innerHTML = "↙️ Too low!  ";
        scoreNum--;
        score.innerHTML = scoreNum;
        document.body.style = "background-color : #ef233c";
      } else {
        guess.innerHTML = "❌ Game Over ";
        loseSound.play();
      }
      //   guess is too low
    } else if (inputNumber > randomNum) {
      if (scoreNum > 1) {
        guess.innerHTML = "↗️ Too high! ";
        scoreNum--;
        score.innerHTML = scoreNum;
        document.body.style = "background-color : #ef233c";
      } else {
        guess.innerHTML = "❌ Game Over ";
        loseSound.play();
      }
    }
  });

// again logic

again.addEventListener("click", () => {
  checkClickSound.play();
  randomNum = Math.floor(Math.random() * 20) + 1;
  scoreNum = 10;
  score.innerHTML = scoreNum;
  secretNumber.innerHTML = "?";
  document.body.style = "background-color : #222";
  secretNumber.style = "width : 8rem";
  guess.innerHTML = "Start guessing ...";
  document.querySelector(".inputNumber").value = "";
});
