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
  console.log('you have to pressed',currentAlphabets.innerText);

  bgColorAdd(randomAlphabets)
}

function play() {
  hideElementById("play");
  showElementById("mainGame");
  continueGame();
}

function keyUp(e){
  const playerPressed = e.key;
  const exPressed = playerPressed.toLowerCase();
  console.log('player pressed',exPressed);
  const youHavetoPressed =  document.getElementById("rndmAlphabet");
  const pressed = youHavetoPressed.innerText;
  const expected = pressed.toLowerCase();
  console.log(expected);

  if(exPressed === expected)
  {console.log('You got a point!')
  bgColorRemove(expected);
  continueGame();
    
  }
  else{console.log("Try again");}
  
}

document.addEventListener('keyup',keyUp)