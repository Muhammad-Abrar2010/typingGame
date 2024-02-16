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
