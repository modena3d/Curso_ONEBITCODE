const inputNameplayer_1_X = document.getElementById("inputNamePlayer_1");
const inputNamePlayer_2_O = document.getElementById("inputNamePlayer_2");
const displayMesage = document.getElementById("displayMesage");
const board = document.querySelector(".board");
let clickedSquare = null;

document
  .getElementById("btnPlay")
  .addEventListener("click", function (clickBtnPlay) {
    const playerName_1 = inputNameplayer_1_X.value;
    const playerName_2 = inputNamePlayer_2_O.value;
    startGame(playerName_1, playerName_2);
  });

function startGame(playerName_1, playerName_2) {
  console.log("BORD: ", board.classList.value);

  let playGame = checkNameInputField(playerName_1, playerName_2);
  if (playGame) {
    activeSquareClick();
    checkTimePlay(playerName_1, playerName_2);
    btnPlayResetGame();
  }
}
function checkTimePlay(playerName_1, playerName_2) {
  if (board.classList.contains("playerName_1")) {
    console.log(board.classList.value);
    board.classList.remove("playerName_1");
    board.classList.add("playerName_2");
    displayMesage.innerText = `Vez do ${playerName_2}: (O) jogar`;
    return playerName_2;
  } else {
    console.log(board.classList.value);
    board.classList.remove("playerName_2");
    board.classList.add("playerName_1");
    displayMesage.innerText = `Vez do ${playerName_1}: (X) jogar`;
    return playerName_1;
  }
}

function checkNameInputField(playerName_1, playerName_2) {
  if (playerName_1 == "" || playerName_2 == "") {
    if (playerName_1 == "" && playerName_2 !== "") {
      displayMesage.innerText = `Preencha o nome do jogador 1`;
    } else if (playerName_2 == "" && playerName_1 !== "") {
      displayMesage.innerText = `Preencha o nome do jogador 2`;
    } else {
      displayMesage.innerText = `Preencha os nomes dos jogadores`;
    }
    return false;
  } else {
    displayMesage.innerText = `Vez do ${playerName_1}: (X) jogar`;
    return true;
  }
}

function btnPlayResetGame() {
  const btnPlay = document.getElementById("btnPlay");
  let textBtn = btnPlay.innerText;
  if (textBtn == "Play") {
    btnPlay.innerText = "Reset";
    board.classList.add("playerName_1");
    console.log("PLAY");
    return true;
  } else {
    btnPlay.innerText = "Play";
    inputNameplayer_1_X.value = "";
    inputNamePlayer_2_O.value = "";
    board.classList.remove("playerName_1");
    board.classList.remove("playerName_2");
    displayMesage.innerText = `Preencha os nomes dos jogadores`;
    disableSquareClick();
    document.querySelectorAll(".square").forEach((square) => {
      square.innerText = "";
    });
    console.log("RESET");
    return false;
  }
}

function activeSquareClick() {
  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("click", handleSquareClick);
  });
}
function disableSquareClick() {
  document.querySelectorAll(".square").forEach((square) => {
    square.removeEventListener("click", handleSquareClick);
  });
}
function handleSquareClick(ev) {
  const squareNumber = ev.target.dataset.number;
  clickedSquare = squareNumber;
  console.log(`Quadrado clicado:`, squareNumber);
  ev.target.removeEventListener("click", handleSquareClick);
  return squareNumber;
}
