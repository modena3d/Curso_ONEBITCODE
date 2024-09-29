
// Utilizando o For
// O CÓDIGO DEVE ESTAR NUM ARQUIVO SEPARADO E IMPORTADO NUMA PÁGINA HTML
// Neste exercício utilizaremos o for para construir um ocultador de nome. Ele deve percorrer o nome de uma nave e substituir uma letra que o usuário desejar. Para este problema, precisamos:
// 1 Solicitar o nome da espaçonave
// 2 Perguntar o caractere que ele deseja substituir
// 3 Perguntar por qual caractere ele deseja substituir
// 4 Utilizar o FOR para resolver o problema
// 5 Para cada caractere igual ao informado, substituir pelo novo caractere
// 6 Exibir um alerta com o novo nome da nave
// O novo nome da nave é <nome da nave>

const nome = prompt('Digite o nome da nave:')
const charOld = prompt(`Qual caractere voce deseja substituir?\n` + `${nome}`)
let charNew = prompt(`Por qual caractere voce deseja substituir?`)
let novoNome = ''

for (let i = 0; i < nome.length; i++) {
  if (charOld === nome[i]) {
    novoNome += charNew;
  } else {
    novoNome += nome[i];
    console.log(novoNome);

  }
}

alert(`O novo nome da nave é ${novoNome}`)