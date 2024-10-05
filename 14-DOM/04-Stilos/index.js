// Manipulando estilos diretamente pela propriedade style
function useLightTheme() {
  document.body.style.color = '#212529'
  document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme() {
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor = '#212529'
}

// Manipulando estilos através das classes utilizadas pelo CSS
let count = 0;
function switchTheme(count) {
  count++
  console.log(count);
  switch (count) {
    case '1':
      console.log(count);

      document.body.classList.add('is-light')
      count++
      break;
    case '2':
      document.body.classList.add('is-dark')
      count++
      break;
    case '3':
      document.body.classList.add('is-modern')
      count = 1;
      break;
    default:
      break;
  }
}

// Adicionando os eventos
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme(count))