
// Utilizando Condicionais
// O CÓDIGO DEVE ESTAR NUM ARQUIVO SEPARADO E IMPORTADO NUMA PÁGINA HTML
// Neste exercício vamos simular o sistema de navegação de uma nave interagindo com o usuário.
// O sistema deve fazer o seguinte:
// 1 Perguntar o nome do piloto
// 2 Colocar a velocidade inicial da nave como 0
// 3 Perguntar a que velocidade ele gostaria de acelerar a nave 
// 4 Pedir uma confirmação informando que está indo para velocidade X km/s.
// • Se quiser, atualizar a velocidade.
// 5. Exibir uma das seguintes mensagens com base na velocidade escolhida:

// • Se for menor que Okm/s: "Nave está parada. Considere partir e aumentar a velocidade"
// • Se for menor que 40km/s: "Você está devagar, podemos aumentar mais"
// • Se for maior ou igual a 40km/s e menor que 80km/s:
// "Parece uma boa velocidade para manter"
// • Se for maior ou igual a 80km/s e menor que 100km/s: "Velocidade alta. Considere diminuir."
// •Se for maior ou igual a 100km/s: "Velocidade perigosa. Controle automático forçado."
// 6 Imprimir no final o nome do piloto com a velocidade atual

const nomePiloto = prompt("Digite o nome do piloto:")
let velocidade = 0;

const velocidadeObjetivo = prompt('Qual velocidade gostaria de acelerar a nave?')

const confirmar = confirm(`Deseja mesmo acelerar para a velocidade de ${velocidadeObjetivo}km ?`)

if (confirmar) {
  velocidade = velocidadeObjetivo
  if (velocidade < 0) {
    alert(`Nave está parada. Considere partir e aumentar a velocidade`)
  } else if (velocidade < 40) {
    alert(`Você está devagar, podemos aumentar mais`)
  } else if (velocidade >= 40 && velocidade < 80) {
    alert(`Parece uma boa velocidade para manter`)
  } else if (velocidade >= 80 && velocidade < 100) {
    alert(`Velocidade alta. Considere diminuir.`)
  } else {
    alert(`Velocidade perigosa. Controle automático forçado.`)
  }
  alert(`Piloto: ${nomePiloto}, está a uma velocidade de ${velocidade}km por hora.`)
}

