const inputNameplayer_1_X = document.getElementById('inputNamePlayer_1')
const inputNamePlayer_2_O = document.getElementById('inputNamePlayer_2')
const displayMesage = document.getElementById('displayMesage')
const board = document.querySelector('.board')



document.getElementById('btnPlay').addEventListener('click', function (clickBtnPlay) {
  const namePlayer1 = inputNameplayer_1_X.value
  const namePlayer2 = inputNamePlayer_2_O.value
  console.log('--------------');
  let letsPlay = checkNameInputField(namePlayer1, namePlayer2)
  startGame(namePlayer1, namePlayer2, letsPlay);

})

function startGame(playerName_1, playerName_2, letsPlay) {
  console.log('letOut', letsPlay);
  let playerTime = checkTimePlay(playerName_1, playerName_2)
  console.log('Pl: ', playerTime);

  if (letsPlay) {
    squareClickedCliked(letsPlay)
    console.log('letMiddle', letsPlay);
    letsPlay = btnPlayResetGame()
    add_X_or_O_toTheSquare(playerTime, playerName_1, squareClicked)
    console.log('PLAYTIME: ', playerTime);
    console.log('letIn', letsPlay);

  } else {
    console.log('NOT PLAY');
  }
  return letsPlay
}

function squareClickedCliked(letsPlay) {
  let squareNum = 0

  console.log('LETS inside clicksaque:', letsPlay);
  if (letsPlay) {
    document.querySelectorAll('.square').forEach(square => {
      square.addEventListener('click', handleSquareClick)
      console.log('SQ: ', squareNum);
    });
    return squareNum
  } else {
    document.querySelectorAll('.square').forEach(square => {
      square.removeEventListener('click', handleSquareClick)
    });
    console.log('DESATIVADO');
  }
}
function handleSquareClick(ev) {
  let squareClicked = 0;
  console.log(ev.target.dataset.number); // Acessa o número do quadrado clicado
  squareClicked = ev.target.dataset.number
  ev.target.removeEventListener('click', arguments.callee);
  console.log(squareClicked);
  return squareClicked
}
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
    displayMesage.innerText = `Vez do ${playerName_1}: (X) jogar`
    return true
  }
}



function btnPlayResetGame() {
  console.log('PLAY');
  const btnPlay = document.getElementById('btnPlay')
  let textBtn = btnPlay.innerText
  if (textBtn == 'Play') {
    btnPlay.innerText = 'Reset'
    board.classList.add('playerName_1')
    return true
  } else {
    btnPlay.innerText = 'Play'
    inputNameplayer_1_X.value = ''
    inputNamePlayer_2_O.value = ''
    board.classList.remove('playerName_1')
    board.classList.remove('playerName_2')
    displayMesage.innerText = `Preencha os nomes dos jogadores`
    document.querySelectorAll('.square').forEach(square => {
      square.innerText = ''
    })
    return false
  }
}



function checkTimePlay(playerName_1, playerName_2, letsPlay) {
  // console.log(board.classList);
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

function add_X_or_O_toTheSquare(playerTime, playerName_1, squareClicked) {
  // console.log('NOME:', playerTime);
  // console.log('SQUARE_NUM: ', squareClicked);
  // console.log('PLAY: NAME',playerTime == playerName_1);

  if (playerTime == playerName_1) {
    const square = document.querySelector(`[data-number="${squareClicked}"]`)
    // console.log(square);
    square.innerText = 'O'
    const squares = []
  } else {
    const square = document.querySelector(`[data-number="${squareClicked}"]`)
    square.innerText = 'X'

  }
}

