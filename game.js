// const startBtn = document.getElementById("startBtn");
// const gameArea = document.getElementById("gameArea");
// const choiceButtons = document.querySelectorAll(".choiceBtn");
// const systemChoiceText = document.getElementById("systemChoiceText");
// const resultText = document.getElementById("resultText");
// const playAgainBtn = document.getElementById("playAgainBtn");

// const userChoiceImg = document.getElementById("userChoiceImg");
// const systemChoiceImg = document.getElementById("systemChoiceImg");

// const choices = ["stone", "paper", "scissor"];

// startBtn.addEventListener("click", function () {
//   startBtn.style.display = "none";
//   gameArea.style.display = "block";
//   systemChoiceText.textContent = "";
//   resultText.textContent = "";
// });

// choiceButtons.forEach((button) => {
//   button.onclick = () => {
//     const userChoice = button.getAttribute("data-choice");
//     const systemChoice = choices[Math.floor(Math.random() * 3)];

//     // systemChoiceText.textContent = `System choose ${systemChoice}`;

//     if (userChoice == systemChoice) {
//       resultText.textContent = "It's a Draw";
//     } else if (
//       (userChoice == "stone" && systemChoice == "scissor") ||
//       (userChoice == "paper" && systemChoice == "stone") ||
//       (userChoice == "scissor" && systemChoice == "paper")
//     ) {
//       resultText.textContent = "You win! 🎉";
//     } else {
//       resultText.textContent = "You lose! 😢";
//     }

//     userChoiceImg.style.backgroundImage = `url(images/${userChoice.toLowerCase()}.jpg)`;
//     systemChoiceImg.style.backgroundImage = `url(images/${systemChoice}.jpg)`;


//   };
// });

// playAgainBtn.addEventListener("click", function () {
//   systemChoiceText.textContent = "";
//   resultText.textContent = "";


//   userChoiceImg.style.backgroundImage = "";
// systemChoiceImg.style.backgroundImage = "";

// });


const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const choiceButtons = document.querySelectorAll(".choiceBtn");
const systemChoiceText = document.getElementById("systemChoiceText");
const resultText = document.getElementById("resultText");
const playAgainBtn = document.getElementById("playAgainBtn");

const userChoiceImg = document.getElementById("userChoiceImg");
const systemChoiceImg = document.getElementById("systemChoiceImg");

const choices = ["stone", "paper", "scissor"];

let roundCount = 0;
let userWins = 0;
let systemWins = 0;

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  gameArea.style.display = "block";
  resetGame();
});

choiceButtons.forEach((button) => {
  button.onclick = () => {
    if (roundCount >= 5) return;

    const userChoice = button.getAttribute("data-choice").toLowerCase();
    const systemChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === systemChoice) {
      resultText.textContent = `Round ${roundCount + 1}: It's a Draw`;
    } else if (
      (userChoice === "stone" && systemChoice === "scissor") ||
      (userChoice === "paper" && systemChoice === "stone") ||
      (userChoice === "scissor" && systemChoice === "paper")
    ) {
      resultText.textContent = `Round ${roundCount + 1}: You win! 🎉`;
      userWins++;
    } else {
      resultText.textContent = `Round ${roundCount + 1}: You lose! 😢`;
      systemWins++;
    }

    userChoiceImg.style.backgroundImage = `url(images/${userChoice}.jpg)`;
    systemChoiceImg.style.backgroundImage = `url(images/${systemChoice}.jpg)`;

    roundCount++;

    if (roundCount === 5) {
      showFinalResult();
    }
  };
});

playAgainBtn.addEventListener("click", function () {
  resetGame();
});

function resetGame() {
  roundCount = 0;
  userWins = 0;
  systemWins = 0;
  systemChoiceText.textContent = "";
  resultText.textContent = "";
  userChoiceImg.style.backgroundImage = "";
  systemChoiceImg.style.backgroundImage = "";
  choiceButtons.forEach(btn => btn.disabled = false);
}

function showFinalResult() {
  let finalMessage = "";

  if (userWins > systemWins) {
    finalMessage = `Game Over 🎉 You won ${userWins} out of 5 rounds!`;
  } else if (systemWins > userWins) {
    finalMessage = `Game Over 😢 System won ${systemWins} out of 5 rounds!`;
  } else {
    finalMessage = "Game Over 🤝 It's a tie!";
  }

  resultText.textContent = finalMessage;

  // Disable choice buttons
  choiceButtons.forEach(btn => btn.disabled = true);
}

resultText.classList.add("final");
resultText.classList.remove("final");
  
