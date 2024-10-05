const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = ''

  console.log(input.value)
  console.log(input.getAttribute('value'))
})