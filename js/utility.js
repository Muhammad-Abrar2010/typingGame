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


function bgColorAdd(elementId){
  const element = document.getElementById(elementId)
  // element.classList.remove('bg-gray-700')
  element.classList.add('bg-yellow-800')

}
function bgColorRemove(elementId){
  const element = document.getElementById(elementId)
  // element.classList.remove('bg-gray-700')
  element.classList.remove('bg-yellow-800')

}

// function keyUp(e){
//   const playerPressed = e.key;
//   console.log('player pressed',playerPressed);
//   console.log(currentAlphabets.innerText);

  
// }


document.addEventListener('keyup',keyUp)
// function showRandomLetter(event) {

//   const pressed = event.key;
//   const changeTheLetter = document.getElementById("rndmAlphabet");

//   const changedLetter = (changeTheLetter.innerText = getRandomAlphabets());

// }

// document.addEventListener("keyup", showRandomLetter);

