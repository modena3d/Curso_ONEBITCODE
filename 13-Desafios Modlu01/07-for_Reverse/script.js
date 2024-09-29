
// Revisando as repetições
// O CÓDIGO DEVE ESTAR NUM ARQUIVO SEPARADO E IMPORTADO NUMA PÁGINA HTML
// Neste exercício vamos fazer novamente um código que oculte o nome da nave, mas desta invertedo-o, e que seja sensível a letra e.
// Para este problema, precisamos:
// 1 Solicitar o nome da espaçonave
// 2 Utilizar uma estrutura de repetição para inveter o nome da nave Esta estrutura deverá percorrer a nave do último caractere até o primeiro
// 3 Durante a inversão, procurar pelo caractere proibido
// 4 Caso encontre, a inversão deve ser parada onde estiver
// 5 O nome invertido deve ser impresso
// Mesmo que não esteja completo por ter encontrado um caractere proibido

const nome = prompt('Digite o nome da nave:')
let nomeReverse = ''
console.log(nome.length);

for (let i = nome.length - 1; i >= 0; i--) {
  if (nome[i] === 'e') {
    break
  }
  nomeReverse += nome[i];
}
alert(`Nome: ${nome}\n` + `Reverso: ${nomeReverse}`)
