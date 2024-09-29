
// Utilizando o While
// O CÓDIGO DEVE ESTAR NUM ARQUIVO SEPARADO E IMPORTADO NUMA PÁGINA HTML
// Neste exercício vamos simular o sistema de navegação de uma nave interagindo com o usuário.
// Para este problema, precisamos:
// 1 Pedir nome da nave

// 2 Perguntar se deseja entrar na dobra com o seguinte mensagem:
// Deseja entrar em dobra espacial?
// 1- Sim
// 2- Não
// Se a resposta for sim, contabilizaremos uma dobra

// 3 O usuário deve ser perguntado se deseja realizar a próxima dobra
// Deseja realizar a próxima dobra?
// 1- Sim
// 2- Não
// Para cada "Sim", vamos contabilizar mais uma dobra realizada;

// 4 A pergunta deve ser feita novamente, até que escolha seja “Não” 

// 5 Ao escolher "Não” em qualquer pergunta, a contagem deve ser encerrada;

// 6 O programa deve informar o nome da nave e o número de vezes seguidos que a dobra espacial foi realizada

const nomeNave = prompt('Qual é o nome da nave?')
let count = 0;
let dobraEspacial = prompt('Deseja entrar em dobra espacial?\n' + '1-Sim\n' + '2-Não\n')

while (dobraEspacial === '1') {
  count++
  dobraEspacial = prompt('Deseja entrar em dobra espacial?\n' + '1-Sim\n' + '2-Não\n')
}

alert(`Nome da Nave: ${nomeNave}\n` + `Quantidades de dobras espaciais: ${count}`)


