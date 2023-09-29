let secretNum = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector(".message");
let score = 20,
  highScore = 0;

// document.querySelector(".number").textContent = secretNum;

document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "No Number";
  } else if (guess === secretNum) {
    message.textContent = "Correct Number";
    highScore = Math.max(highScore, score);
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').textContent = secretNum;
  } else if (guess !== secretNum) {
    if(score > 1) {
      message.textContent = guess > secretNum ? "Too High" : "Too Low"
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
  // else if (guess <= secretNum) {
  //   message.textContent = "Too Low";
  //   if (score == 0) {
  //     message.textContent = "You Lost the game";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
  // } else {
  //   message.textContent = "Too High";
  //   if (score == 0) {
  //     message.textContent = "You Lost the game";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
  // }
});
// console.log(secretNum)

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222'
  score = 20
  document.querySelector('.score').textContent = 20;
  message.textContent = 'Start guessing...'
  document.querySelector('.number').textContent = '?'
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = ''
  // console.log(secretNum)
})