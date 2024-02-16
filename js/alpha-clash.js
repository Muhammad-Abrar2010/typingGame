// function play() {
//   const play = document.getElementById("play");
//   play.classList.add("hidden");
//   const mainGame = document.getElementById("mainGame")
//   mainGame.classList.remove("hidden")
// }

function continueGame() {
  const randomAlphabets = getRandomAlphabets();
  const currentAlphabets = document.getElementById("rndmAlphabet");
  currentAlphabets.innerText = randomAlphabets;
  console.log(currentAlphabets.innerText);

  bgColor(randomAlphabets)
}

function play() {
  hideElementById("play");
  showElementById("mainGame");
  continueGame();
}
