function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getRandomAlphabets() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const randomLetter = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const randomIndex = Math.round(randomNumber);
  const alphabet = randomLetter[randomIndex];
  return alphabet;
}

function showRandomLetter(event) {
  const changeTheLetter = document.getElementById("rndmAlphabet");
  const changedLetter = (changeTheLetter.innerText = getRandomAlphabets());
  console.log(changedLetter);
}

document.addEventListener('keyup', showRandomLetter)
