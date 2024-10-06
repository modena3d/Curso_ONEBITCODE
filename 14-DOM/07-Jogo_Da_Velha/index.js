const inputNameplayer_1_X = document.getElementById('inputNamePlayer_1')
const inputNamePlayer_2_O = document.getElementById('inputNamePlayer_2')
const displayMesage = document.getElementById('displayMesage')


document.getElementById('btnPlay').addEventListener('click', function (clickBtnPlay) {
  const namePlayer1 = inputNameplayer_1_X.value
  const namePlayer2 = inputNamePlayer_2_O.value
  startGame(namePlayer1, namePlayer2, clickBtnPlay.target);
})

function checkNameInputField(playerName_1, playerName_2, clickBtnPlay) {
  if (playerName_1 == '' || playerName_2 == '') {
    if (playerName_1 == '' && !playerName_2 == '') {
      displayMesage.innerText = `Preencha o nome do jogador 1`
    } else if (playerName_2 == '' && !playerName_1 == '') {
      displayMesage.innerText = `Preencha o nome do jogador 2`
    } else {
      displayMesage.innerText = `Preencha os nomes dos jogadores`
    }
  } else {
    const playerTime = checkTimePlay(playerName_1, playerName_2, clickBtnPlay)
    return true, playerTime
  }
}



function checkTimePlay(playerName_1, playerName_2, clickBtnPlay) {
  const nametoShowInDisplayToPlay = toggleClassAddButtonPlay(playerName_1, playerName_2, clickBtnPlay)
  if (nametoShowInDisplayToPlay == playerName_1) {
    displayMesage.innerText = `Vez do ${playerName_1}: (X) jogar`
    return playerName_1
  } else {
    displayMesage.innerText = `Vez do ${playerName_2}: (O) jogar`
    return playerName_2
  }
}

function toggleClassAddButtonPlay(playerName_1, playerName_2, clickBtnPlay) {
  if (clickBtnPlay.classList.contains('playerName_1')) {
    clickBtnPlay.classList.remove('playerName_1')
    clickBtnPlay.classList.add('playerName_2')
    return playerName_2

  } else {
    clickBtnPlay.classList.remove('playerName_2')
    clickBtnPlay.classList.add('playerName_1')
    return playerName_1
  }
}

function btnPlayResetGame() {
  console.log('PLAY');
  const btnPlay = document.getElementById('btnPlay')
  const textBtn = btnPlay.innerText
  if (textBtn == 'Play') {
    btnPlay.innerText = 'Reset'

  } else {
    btnPlay.innerText = 'Play'
    inputNameplayer_1_X.value = ''
    inputNamePlayer_2_O.value = ''
  }
}

function activeBoard(playerTime, playerName_1, playerName_2) {
  document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function (ev) {
      console.log(ev.target);
    })
  });
  if (playerTime == playerName_1) {
    playersClicks(playerName_1)

  } else {
    playersClicks(playerName_2)
  }

}

function playersClicks(playerName) {
  if (playerName) {
    const squares = []
  }
}

function startGame(playerName_1, playerName_2, clickBtnPlay) {
  const letsPlay = checkNameInputField(playerName_1, playerName_2, clickBtnPlay)
  if (letsPlay) {
    btnPlayResetGame()
    const playerTime = letsPlay;
    activeBoard(playerTime, playerName_1, playerName_2)
  } else {
    console.log('NOT PLAY');
  }
}