const tilesRonaldo = document.querySelectorAll('#player1_race td');
const tilesMayorga = document.querySelectorAll('#player2_race td');


let counterRonaldo = 0;
let counterMayorga = 0;

const gameOver = () => {
  setTimeout(() => alert("GAME OVER"), 0);
  location.reload();
};


const whichPlayer = (event) => {
  if (event.key === "p") {
    tilesRonaldo[counterRonaldo].classList.remove("active");
    tilesRonaldo[counterRonaldo + 1].classList.add("active");
    tilesRonaldo[counterRonaldo + 1].classList.remove("viagra");
    counterRonaldo += 1;
    const audio = new Audio('images/cr_suuu.mp3');
    audio.play();
    if (counterRonaldo + 1 === tilesRonaldo.length) {
      gameOver();
    }
  } else if (event.key === "l") {
    tilesMayorga[counterMayorga].classList.remove("active");
    tilesMayorga[counterMayorga + 1].classList.add("active");
    tilesMayorga[counterMayorga + 1].classList.remove("dollar");
    counterMayorga += 1;
    const audio = new Audio('images/Cha_Ching_Register-Muska666-173262285.mp3');
    audio.play();
    if (counterMayorga === tilesMayorga.length - 1) {
      gameOver();
    }
  }
};

window.addEventListener("keypress", whichPlayer);

