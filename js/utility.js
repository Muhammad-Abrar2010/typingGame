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


function bgColor(elementId){
  const element = document.getElementById(elementId)
  // element.classList.remove('bg-gray-700')
  element.classList.add('bg-yellow-800')

}

function keyUp(){
  console.log('i am pressed, impressed')
}


document.addEventListener('keyup',keyUp())
// function showRandomLetter(event) {

//   const pressed = event.key;
//   const changeTheLetter = document.getElementById("rndmAlphabet");

//   const changedLetter = (changeTheLetter.innerText = getRandomAlphabets());

// }

// document.addEventListener("keyup", showRandomLetter);

