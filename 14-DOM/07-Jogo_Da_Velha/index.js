const inputNameplayer_1_X = document.getElementById("inputNamePlayer_1");
const inputNamePlayer_2_O = document.getElementById("inputNamePlayer_2");
const displayMesage = document.getElementById("displayMesage");
const board = document.querySelector(".board");
let clickedSquare = null;

document
  .getElementById("btnPlay")
  .addEventListener("click", function (clickBtnPlay) {
    const namePlayer1 = inputNameplayer_1_X.value;
    const namePlayer2 = inputNamePlayer_2_O.value;
    console.log("--------------");
    let letsPlay = checkNameInputField(namePlayer1, namePlayer2);
    startGame(namePlayer1, namePlayer2, letsPlay);
  });

function startGame(playerName_1, playerName_2, letsPlay) {
  console.log("letOut", letsPlay);
  let playerTime = checkTimePlay(playerName_1, playerName_2);
  console.log("Pl: ", playerTime);
  if (letsPlay) {
    squareClicked(letsPlay);
    console.log("letMiddle", letsPlay);
    add_X_or_O_toTheSquare(playerTime, playerName_1, clickedSquare);
    letsPlay = btnPlayResetGame();
    console.log("PLAYTIME: ", playerTime);
    console.log("letIn", letsPlay);
  } else {
    console.log("NOT PLAY");
  }
  return letsPlay;
}
function squareClicked(letsPlay) {
  if (letsPlay) {
    document.querySelectorAll(".square").forEach((square) => {
      square.addEventListener("click", handleSquareClick);
    });
  } else {
    document.querySelectorAll(".square").forEach((square) => {
      square.removeEventListener("click", handleSquareClick);
    });
    console.log("DESATIVADO");
  }
}
function handleSquareClick(ev) {
  const squareNumber = ev.target.dataset.number; // Acessa o número do quadrado clicado
  clickedSquare = squareNumber; // Armazena na variável externa
  console.log(`Quadrado clicado:`, squareNumber);

  ev.target.removeEventListener("click", handleSquareClick); // Remove o evento de clique desse quadrado
  // Retorna o valor diretamente, mas ele não será capturado fora do escopo imediato.
  return squareNumber;
}
// A qualquer momento, você pode acessar o valor do último quadrado clicado usando a variável "clickedSquare".

function checkNameInputField(playerName_1, playerName_2) {
  if (playerName_1 == "" || playerName_2 == "") {
    if (playerName_1 == "" && !playerName_2 == "") {
      displayMesage.innerText = `Preencha o nome do jogador 1`;
    } else if (playerName_2 == "" && !playerName_1 == "") {
      displayMesage.innerText = `Preencha o nome do jogador 2`;
    } else {
      displayMesage.innerText = `Preencha os nomes dos jogadores`;
    }
  } else {
    displayMesage.innerText = `Vez do ${playerName_1}: (X) jogar`;
    return true;
  }
}

function btnPlayResetGame() {
  console.log("PLAY");
  const btnPlay = document.getElementById("btnPlay");
  let textBtn = btnPlay.innerText;
  if (textBtn == "Play") {
    btnPlay.innerText = "Reset";
    board.classList.add("playerName_1");
    return true;
  } else {
    btnPlay.innerText = "Play";
    inputNameplayer_1_X.value = "";
    inputNamePlayer_2_O.value = "";
    board.classList.remove("playerName_1");
    board.classList.remove("playerName_2");
    displayMesage.innerText = `Preencha os nomes dos jogadores`;
    document.querySelectorAll(".square").forEach((square) => {
      square.innerText = "";
    });
    return false;
  }
}

function checkTimePlay(playerName_1, playerName_2, letsPlay) {
  // console.log(board.classList);
  if (board.classList.contains("playerName_1")) {
    board.classList.remove("playerName_1");
    board.classList.add("playerName_2");
    displayMesage.innerText = `Vez do ${playerName_2}: (O) jogar`;
    return playerName_2;
  } else {
    board.classList.remove("playerName_2");
    board.classList.add("playerName_1");
    displayMesage.innerText = `Vez do ${playerName_1}: (X) jogar`;
    return playerName_1;
  }
}

function add_X_or_O_toTheSquare(playerTime, playerName_1, clickedSquare) {
  let id = Number(clickedSquare);
  console.log("ID: ", id);

  if (playerTime == playerName_1) {
    const square = document.querySelector(`[data-number="${id}"]`);
    // console.log(square);
    square.innerText = "O";
    const squares = [];
  } else {
    const square = document.querySelector(`[data-number="${id}"]`);
    square.innerText = "X";
  }
}
console.log("Último quadrado clicado:", clickedSquare);
