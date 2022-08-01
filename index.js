let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.getElementById("guesses");
let lastResult = document.getElementById("lastResult");
let lowOrHi = document.getElementById("lowOrHi");
let guessSubmit = document.getElementById("guessSubmit");
let guessField = document.getElementById("guessField");

let counter = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (counter === 1) {
    guesses.innerHTML = "Propositions précédentes:";
  }
  guesses.innerHTML += userGuess + ", ";

  if (userGuess == randomNumber) {
    lastResult.innerHTML = "vous avez gagné";
    lastResult.style.backgroundColor = "green";
    lowOrHi.innerHTML = "";
    setGameOver();
  } else if (counter === 10) {
    lastResult.innerHTML = "vous avez perdu :(";
    lastResult.style.backgroundColor = "black";
    lastResult.style.color = "white";
    setGameOver();
  } else {
    lastResult.innerHTML = "faux :/";
    lastResult.style.backgroundColor = "red";
    if (userGuess > randomNumber) {
      lowOrHi.innerHTML = "le nombre à trouver est plus petit !";
    } else if (userGuess < randomNumber) {
      lowOrHi.innerHTML = "le nombre à trouver est plus grand !";
    }
  }
  console.log("nouveau joueur");
  counter++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.innerHTML = "new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  counter = 1;
  let resetParas = document.querySelectorAll("#resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].innerHTML = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
