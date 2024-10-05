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
let count = 1;
function switchTheme(count) {
  console.log(count);
  switch (count) {
    case 1:
      count++
      document.body.classList.toggle('is-light')
      break;
    case 2:
      count++
      document.body.classList.toggle('is-dark')
      break;
    case 3:
      count = 1;
      console.log('Int:', count);
      document.body.classList.toggle('is-modern')
      break;
    default:
      break;
  }
  return count
}
document.getElementById('switchBtn').addEventListener('click', () => {
  count = switchTheme(count)
})

// Adicionando os eventos
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)