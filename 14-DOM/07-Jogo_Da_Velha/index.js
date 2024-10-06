const inputNameplayer_1_X = document.getElementById('inputNamePlayer_1')
const inputNamePlayer_2_O = document.getElementById('inputNamePlayer_2')
const displayMesage = document.getElementById('displayMesage')


document.getElementById('btnPlay').addEventListener('click', function (clickBtnPlay) {
  const namePlay1 = inputNameplayer_1_X.value
  const namePlay2 = inputNamePlayer_2_O.value
  startGame(namePlay1, namePlay2, clickBtnPlay.target);
})

function checkNameInputField(play1, play2, clickBtnPlay) {
  if (play1 == '' || play2 == '') {
    if (play1 == '' && !play2 == '') {
      displayMesage.innerText = `Preencha o nome do jogador 1`
    } else if (play2 == '' && !play1 == '') {
      displayMesage.innerText = `Preencha o nome do jogador 2`
    } else {
      displayMesage.innerText = `Preencha os nomes dos jogadores`
    }
  } else {
    checkTimePlay(play1, play2, clickBtnPlay)
    return true
  }
}

function checkTimePlay(play1, play2, clickBtnPlay) {
  const nametoShowInDisplayToPlay = toggleClassAddButtonPlay(play1, play2, clickBtnPlay)
  if (nametoShowInDisplayToPlay == play1) {
    displayMesage.innerText = `Vez do ${play1}: (X) jogar`
  } else {
    displayMesage.innerText = `Vez do ${play2}: (O) jogar`
  }
}

function toggleClassAddButtonPlay(play1, play2, clickBtnPlay) {
  if (clickBtnPlay.classList.contains('player1')) {
    clickBtnPlay.classList.remove('player1')
    clickBtnPlay.classList.add('player2')
    return play2

  } else {
    clickBtnPlay.classList.remove('player2')
    clickBtnPlay.classList.add('player1')
    return play1
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

function activeBoard() {
  document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function (ev) {
      console.log(ev.target);
    })
  });
}

function startGame(play1, play2, clickBtnPlay) {
  const letsPlay = checkNameInputField(play1, play2, clickBtnPlay)
  if (letsPlay) {
    btnPlayResetGame()
    activeBoard()
  } else {
    console.log('NOT PLAY');
  }
}