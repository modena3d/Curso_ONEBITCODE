const inputNameplayer_1_X = document.getElementById("inputNamePlayer_1");
const inputNamePlayer_2_O = document.getElementById("inputNamePlayer_2");
const displayMesage = document.getElementById("displayMesage");
const board = document.querySelector(".board");
let clickedSquare = null;
let playerName_1 = ''
let playerName_2 = ''
let squaresPlayer1 = []
let squaresPlayer2 = []

document
  .getElementById("btnPlay")
  .addEventListener("click", function (clickBtnPlay) {
    playerName_1 = inputNameplayer_1_X.value;
    playerName_2 = inputNamePlayer_2_O.value;
    startGame();
  });

function startGame() {
  let playGame = checkNameInputField();
  if (playGame) {
    activeSquareClick();
    btnPlayResetGame();
  }
}
function checkTimePlay() {
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

function checkNameInputField() {
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
      square.classList.remove('wins')
      square.classList.remove('loser')
    });
    squaresPlayer1 = []
    squaresPlayer2 = []
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
  ev.target.removeEventListener("click", handleSquareClick);
  let playerTime = checkTimePlay();
  add_X_or_O_toTheSquare(playerTime)
}

function add_X_or_O_toTheSquare(playerTime) {
  let id = Number(clickedSquare)
  if (playerTime == playerName_1) {
    const square = document.querySelector(`[data-number="${id}"]`)
    square.innerText = 'O'
    squaresPlayer2.push(id)
  } else {
    const square = document.querySelector(`[data-number="${id}"]`)
    square.innerText = 'X'
    squaresPlayer1.push(id)
  }
  sequenceChecker(squaresPlayer1, squaresPlayer2)
}

function sequenceChecker(squaresPlayer1, squaresPlayer2) {
  //123
  const sequence_1 = [1, 2, 3]
  const p1Sq1 = sequence_1.every(num => squaresPlayer1.includes(num));
  const p2Sq1 = sequence_1.every(num => squaresPlayer2.includes(num));
  //456
  const sequence_2 = [4, 5, 6]
  const p1Sq2 = sequence_2.every(num => squaresPlayer1.includes(num));
  const p2Sq2 = sequence_2.every(num => squaresPlayer2.includes(num));
  //789
  const sequence_3 = [7, 8, 9]
  const p1Sq3 = sequence_3.every(num => squaresPlayer1.includes(num));
  const p2Sq3 = sequence_3.every(num => squaresPlayer2.includes(num));
  //147
  const sequence_4 = [1, 4, 7]
  const p1Sq4 = sequence_4.every(num => squaresPlayer1.includes(num));
  const p2Sq4 = sequence_4.every(num => squaresPlayer2.includes(num));
  //258
  const sequence_5 = [2, 5, 8]
  const p1Sq5 = sequence_5.every(num => squaresPlayer1.includes(num));
  const p2Sq5 = sequence_5.every(num => squaresPlayer2.includes(num));
  //369
  const sequence_6 = [3, 6, 9]
  const p1Sq6 = sequence_6.every(num => squaresPlayer1.includes(num));
  const p2Sq6 = sequence_6.every(num => squaresPlayer2.includes(num));
  //159
  const sequence_7 = [1, 5, 9]
  const p1Sq7 = sequence_7.every(num => squaresPlayer1.includes(num));
  const p2Sq7 = sequence_7.every(num => squaresPlayer2.includes(num));
  //357
  const sequence_8 = [3, 5, 7]
  const p1Sq8 = sequence_8.every(num => squaresPlayer1.includes(num));
  const p2Sq8 = sequence_8.every(num => squaresPlayer2.includes(num));

  let checkWinnerPlayer_1 = {
    p1Sq1,
    p1Sq2,
    p1Sq3,
    p1Sq4,
    p1Sq5,
    p1Sq6,
    p1Sq7,
    p1Sq8
  }
  let checkWinnerPlayer_2 = {
    p2Sq1,
    p2Sq2,
    p2Sq3,
    p2Sq4,
    p2Sq5,
    p2Sq6,
    p2Sq7,
    p2Sq8
  }
  const winner = getIdSequenceWin(checkWinnerPlayer_1, checkWinnerPlayer_2)
  if (winner.won) {
    paintSquares(winner);
  }
}

function getIdSequenceWin(checkWinnerPlayer_1, checkWinnerPlayer_2) {
  const p1 = checkWinnerPlayer_1
  const p2 = checkWinnerPlayer_2
  const winner = {
    won: false
  }
  const hasWin1 = Object.values(p1).some(value => value === true);
  if (hasWin1) {
    const idResultSequence = Object.values(p1).findIndex(value => value === true) + 1;
    winner.nome = playerName_1
    winner.id = idResultSequence.toString()
    winner.won = true;
    return winner;
  }
  const hasWin2 = Object.values(p2).some(value => value === true);
  if (hasWin2) {
    const idResultSequence = Object.values(p2).findIndex(value => value === true) + 1;
    winner.nome = playerName_2
    winner.id = idResultSequence.toString()
    winner.won = true;
    return winner;
  }
  return winner
}

function paintSquares(winner) {
  const squares = document.querySelectorAll('.square')
  //1//123  
  if (winner.id === '1') {
    squares.forEach(square => {
      const number = square.dataset.number;
      if (number === '1' || number === '2' || number === '3') {
        square.classList.add('wins')
        displayMesage.innerText = `O jogador: ${winner.nome}, venceu!!!`
      } else {
        square.classList.add('loser')
      }
      disableSquareClick();
    });
  }
  //2//456
  if (winner.id === '2') {
    squares.forEach(square => {
      const number = square.dataset.number;
      if (number === '4' || number === '5' || number === '6') {
        square.classList.add('wins')
        displayMesage.innerText = `O jogador: ${winner.nome}, venceu!!!`
      } else {
        square.classList.add('loser')
      }
      disableSquareClick();
    });
  }
  //3//789
  if (winner.id === '3') {
    squares.forEach(square => {
      const number = square.dataset.number;
      if (number === '7' || number === '8' || number === '9') {
        square.classList.add('wins')
        displayMesage.innerText = `O jogador: ${winner.nome}, venceu!!!`
      } else {
        square.classList.add('loser')
      }
      disableSquareClick();
    });
  }
  //4//147
  if (winner.id === '4') {
    squares.forEach(square => {
      const number = square.dataset.number;
      if (number === '1' || number === '4' || number === '7') {
        square.classList.add('wins')
        displayMesage.innerText = `O jogador: ${winner.nome}, venceu!!!`
      } else {
        square.classList.add('loser')
      }
      disableSquareClick();
    });
  }
  //5//258
  if (winner.id === '5') {
    squares.forEach(square => {
      const number = square.dataset.number;
      if (number === '2' || number === '5' || number === '8') {
        square.classList.add('wins')
        displayMesage.innerText = `O jogador: ${winner.nome}, venceu!!!`
      } else {
        square.classList.add('loser')
      }
      disableSquareClick();
    });
  }
  //6//369
  if (winner.id === '6') {
    squares.forEach(square => {
      const number = square.dataset.number;
      if (number === '3' || number === '6' || number === '9') {
        square.classList.add('wins')
        displayMesage.innerText = `O jogador: ${winner.nome}, venceu!!!`
      } else {
        square.classList.add('loser')
      }
      disableSquareClick();
    });
  }
  //7//159
  if (winner.id === '7') {
    squares.forEach(square => {
      const number = square.dataset.number;
      if (number === '1' || number === '5' || number === '9') {
        square.classList.add('wins')
        displayMesage.innerText = `O jogador: ${winner.nome}, venceu!!!`
      } else {
        square.classList.add('loser')
      }
      disableSquareClick();
    });
  }
  //8//357
  if (winner.id === '8') {
    squares.forEach(square => {
      const number = square.dataset.number;
      if (number === '3' || number === '5' || number === '7') {
        square.classList.add('wins')
        displayMesage.innerText = `O jogador: ${winner.nome}, venceu!!!`
      } else {
        square.classList.add('loser')
      }
      disableSquareClick();
    });
  }
}

