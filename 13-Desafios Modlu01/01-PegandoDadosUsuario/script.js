
// Pegando Dados do Usuário
// 1 Exiba com um alerta a seguinte mensagem de boas-vindas ao usuário
// Bem-vindo! A seguir pediremos que informe alguns dados.
// 2. Peça que usuário informe seu nome
// 3 Peça que o usuário informe sua idade
// 4 Peça que ele confirme a idade
// 5 Exiba com um alerta:
// O nome do usuário digitado
// A idade digitada
// A confirmação da idade

const mensagem = alert('Bem-vindo! A seguir pediremos que informe alguns dados.')
const nome = prompt('Digite o seu nome:')
const idade = prompt('Digite a sua idade:')
const confirmaçãoIdade = confirm(`Por favor! Confirme se a sua idade está correta? ${idade}`)
let simOunao = ''
const usuario = { nome, idade, confirmaçãoIdade }
if (confirmaçãoIdade) {
  simOunao = 'SIM'
} else {
  simOunao = 'NÃO'

}

alert(`Nome: ${nome}\n` +
  `Idade: ${idade}\n` +
  `Usuário confirmou a idade? ${simOunao}`
)
