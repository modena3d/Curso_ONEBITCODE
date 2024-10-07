const inputNameplayer_1_X = document.getElementById('inputNamePlayer_1')
const inputNamePlayer_2_O = document.getElementById('inputNamePlayer_2')
const displayMesage = document.getElementById('displayMesage')
const board = document.querySelector('.board')
console.log(board);



document.getElementById('btnPlay').addEventListener('click', function (clickBtnPlay) {
  const namePlayer1 = inputNameplayer_1_X.value
  const namePlayer2 = inputNamePlayer_2_O.value
  startGame(namePlayer1, namePlayer2);
})

function checkNameInputField(playerName_1, playerName_2) {
  if (playerName_1 == '' || playerName_2 == '') {
    if (playerName_1 == '' && !playerName_2 == '') {
      displayMesage.innerText = `Preencha o nome do jogador 1`
    } else if (playerName_2 == '' && !playerName_1 == '') {
      displayMesage.innerText = `Preencha o nome do jogador 2`
    } else {
      displayMesage.innerText = `Preencha os nomes dos jogadores`
    }
  } else {
    return true
  }
}



function btnPlayResetGame() {
  console.log('PLAY');
  const btnPlay = document.getElementById('btnPlay')
  const textBtn = btnPlay.innerText
  if (textBtn == 'Play') {
    btnPlay.innerText = 'Reset'
    board.classList.add('playerName_1')
  } else {
    btnPlay.innerText = 'Play'
    inputNameplayer_1_X.value = ''
    inputNamePlayer_2_O.value = ''
    board.classList.remove('playerName_1')
    board.classList.remove('playerName_2')
    displayMesage.innerText = `Preencha os nomes dos jogadores`
  }
}

function squareNumberCliked(playerName_1, playerName_2, playerTime) {
  let squareNumber;
  document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function (ev) {
      squareNumber = ev.target.dataset.number
      ev.target.removeEventListener('click', arguments.callee);
      console.log(squareNumber);
      add_X_or_O_toTheSquare(playerTime, playerName_1, squareNumber)

    })
  });
}

function checkTimePlay(playerName_1, playerName_2) {
  if (board.classList.contains('playerName_1')) {
    board.classList.remove('playerName_1')
    board.classList.add('playerName_2')
    displayMesage.innerText = `Vez do ${playerName_2}: (O) jogar`
    return playerName_2
  } else {
    board.classList.remove('playerName_2')
    board.classList.add('playerName_1')
    displayMesage.innerText = `Vez do ${playerName_1}: (X) jogar`
    return playerName_1
  }
}

function add_X_or_O_toTheSquare(playerTime, playerName_1, squareNumber) {
  console.log('NOME:', playerTime);
  console.log('SQUARE_NUM: ', squareNumber);
  console.log(playerTime == playerName_1);
  
  if (playerTime == playerName_1) {
    const square = document.querySelector(`[data-number="${squareNumber}"]`)
    console.log(square);
    square.innerText = 'X'
    const squares = []
  }else{
    const square = document.querySelector(`[data-number="${squareNumber}"]`)
    square.innerText = 'O'

  }
}

function startGame(playerName_1, playerName_2) {
  const letsPlay = checkNameInputField(playerName_1, playerName_2)
  if (letsPlay) {
    const playerTime = checkTimePlay(playerName_1, playerName_2)
    squareNumberCliked(playerName_1, playerName_2, playerTime)
    btnPlayResetGame()
  } else {
    console.log('NOT PLAY');
  }
}