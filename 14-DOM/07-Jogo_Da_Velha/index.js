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



// function checkTimePlay(playerName_1, playerName_2, clickBtnPlay) {
//   const nametoShowInDisplayToPlay = toggleClassAddButtonPlay(playerName_1, playerName_2, clickBtnPlay)
//   if (nametoShowInDisplayToPlay == playerName_1) {
//     displayMesage.innerText = `Vez do ${playerName_1}: (X) jogar`
//     return playerName_1
//   } else {
//     displayMesage.innerText = `Vez do ${playerName_2}: (O) jogar`
//     return playerName_2
//   }
// }
function checkTimePlay(playerName_1, playerName_2) {
  if (board.classList.contains('playerName_1')) {
    board.classList.remove('playerName_1')
    board.classList.add('playerName_2')
    displayMesage.innerText = `Vez do ${playerName_1}: (X) jogar`
    return playerName_2
  } else {
    board.classList.remove('playerName_2')
    board.classList.add('playerName_1')
    displayMesage.innerText = `Vez do ${playerName_2}: (O) jogar`
    return playerName_1
  }
}
function activeBoard(playerName_1, playerName_2) {
  let squareComparatorNumber = '';
  document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function (ev) {
      squareComparatorNumber = ev.target.dataset.number
      ev.target.removeEventListener('click', arguments.callee);
      console.log(squareComparatorNumber);
    })
  });
}

function playersClicks(playerName) {
  if (playerName) {
    const squares = []
  }
}

function startGame(playerName_1, playerName_2) {
  const letsPlay = checkNameInputField(playerName_1, playerName_2)
  if (letsPlay) {
    activeBoard(playerName_1, playerName_2)
    checkTimePlay(playerName_1, playerName_2)
    btnPlayResetGame()
  } else {
    console.log('NOT PLAY');
  }
}