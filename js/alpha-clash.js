// function play() {
//   const play = document.getElementById("play");
//   play.classList.add("hidden");
//   const mainGame = document.getElementById("mainGame")
//   mainGame.classList.remove("hidden")
// }

function continueGame(){
    const alphabet = getRandomAlphabets();
    console.log(alphabet);
}

function play(){
    hideElementById("play");
    showElementById("mainGame");
    continueGame();
}


