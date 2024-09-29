
// Utilizando JS Externo
// 1 Crie um arquivo JS e o importe no seu arquivo HTML. Este arquivo JS será utilizado para informar a diferença de idade 2 Pedir o nome da pessoa mais velha
// 3 Pedir a idade da pessoa mais velha
// 4 Pedir o nome da pessoa mais nova
// 5 Pedir a idade da pessoa mais nova
// 6 Calcular a diferença de idade
// 7 Exibir o nome da pessoa mais velha e sua idade
// 8 Exibir o nome da pessoa mais nova e sua idade 9 Exibir a diferença de idade

const idadeVelha = prompt('Digite a idade de Pessoa mais velha:')
const nomeVelha = prompt('Digite o nome da Pessoa mais velha:')
const idadeNova = prompt('Digite a idade de Pessoa mais nova:')
const nomeNova = prompt('Digite o nome da Pessoa mais nova:')

const diferencaDeIdade = idadeVelha - idadeNova;

alert(`${nomeVelha}, tem ${idadeVelha} anos\n` +
  `${nomeNova}, tem ${idadeNova} anos\n` +
  `A diferença de idade entre ambos são de ${diferencaDeIdade} anos`
)

