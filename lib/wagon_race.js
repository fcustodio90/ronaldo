function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

const buttonBuilder = () => {
  const d1 = document.getElementById("controllers");
  if (isMobileDevice()) {
    d1.insertAdjacentHTML('beforeend', '<li id="controller-ronaldo" class="btn btn-primary">MOVE RONALDO</li>');
    d1.insertAdjacentHTML('beforeend', '<li id="controller-mayorga" class="btn btn-success">MOVE MAYORGA</li>');
  } else {
    d1.insertAdjacentHTML('beforeend', '<li>PRESS  <strong>P</strong>  TO MOVE RONALDO</li>');
    d1.insertAdjacentHTML('beforeend', '<li>PRESS  <strong>L</strong>  TO MOVE MAYORGA</li>');
  }
};

Window.onload = buttonBuilder();

const tilesRonaldo = document.querySelectorAll('#player1_race td');
const tilesMayorga = document.querySelectorAll('#player2_race td');

let counterRonaldo = 0;
let counterMayorga = 0;

const gameOver = () => {
  setTimeout(() => alert("Ups. Forgot to interpolate names."), 0);
  location.reload();
};

const whichPlayer = (event) => {
  if (event.key === "p" || event.target.id === "controller-ronaldo") {
    tilesRonaldo[counterRonaldo].classList.remove("active");
    tilesRonaldo[counterRonaldo + 1].classList.add("active");
    tilesRonaldo[counterRonaldo + 1].classList.remove("viagra");
    counterRonaldo += 1;
    const audio = new Audio('images/cr_suuu.mp3');
    audio.play();
    if (counterRonaldo + 1 === tilesRonaldo.length) {
      gameOver();
    }
  } else if (event.key === "l" || event.target.id === "controller-mayorga") {
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
document.getElementById("controller-ronaldo").addEventListener("click", whichPlayer);
document.getElementById("controller-mayorga").addEventListener("click", whichPlayer);

// const whichPlayerMobile = (event) => {
//   if (event.target.id === "controller-ronaldo") {
//     tilesRonaldo[counterRonaldo].classList.remove("active");
//     tilesRonaldo[counterRonaldo + 1].classList.add("active");
//     tilesRonaldo[counterRonaldo + 1].classList.remove("viagra");
//     counterRonaldo += 1;
//     const audio = new Audio('images/cr_suuu.mp3');
//     audio.play();
//     if (counterRonaldo + 1 === tilesRonaldo.length) {
//       gameOver();
//     }
//   } else if (event.target.id === "controller-mayorga") {
//     tilesMayorga[counterMayorga].classList.remove("active");
//     tilesMayorga[counterMayorga + 1].classList.add("active");
//     tilesMayorga[counterMayorga + 1].classList.remove("dollar");
//     counterMayorga += 1;
//     const audio = new Audio('images/Cha_Ching_Register-Muska666-173262285.mp3');
//     audio.play();
//     if (counterMayorga === tilesMayorga.length - 1) {
//       gameOver();
//     }
//   }
// };
