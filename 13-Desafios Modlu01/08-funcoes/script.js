// Programa de Bordo
// Exercitando Funções ▸

// 1 Acelerar a nave em 5km/s

// 2 Desacelerar em 5km/s
// Por mais que desacelere, a nave não pode ter uma velocidade menor que Okm/s

// 3 Imprimir dados de bordo
// Deve ser impresso o nome da nave com sua velocidade atual

// 4 Sair do programa

// Caso a pessoa escolha um número que não está na lista, é necessário exibir o menu novamente até que seja escolhida uma opção válida. 

//Para fazer este app precisaremos:
// 1 Criar uma função que exiba o menu a valide a opção escolhida.
// 2 Uma função para cada ação do menu de acelerar, desacelerar e imprimir dados de bordo.
// 3 Encerrar o app somente quando digitar para sair.

// Lembre-se que funções podem ser chamadas e construídas à vontade para estruturar seu código: dentro de switches, ifs, elses, estruturas de repetição. Deixa o espírito de programador fluir! =)
let speed = 0;
let menu = '';

let nave = prompt('Digite o nome da nave:')


function speedNave() {
  speed += 5
}
function slowNave(){
  if (speed >0) {
    speed -= 5
  }else{
    alert('A nave já se encontra parada')
  }
}

function showMenu() {
  let option
  while (option !== '1' && option != '2' && option != '3' && option != '4')
    option = prompt('Escolhas umas das opções a baixo:\n' +
      '1- Acelerar a nave em 5km/s\n' +
      '2- Desacelerar em 5km/s\n' +
      '3- Imprimir dados de bordo\n' +
      '4- Sair')
return option
}

function dadosBordo(){
  alert ('Nave: '+ nave + '\n' + 'Speed: '+ speed + ' km')
}


do {
  menu = showMenu()
  switch (menu) {
    case '1':
      speedNave()
      break;
    case '2':
      slowNave()
      break;
    case '3':
      dadosBordo();
      break;
    case '4':
      alert('Encerrando o programa...')
      break;
    default:
      alert('Opção inválida, tente novamente...')
  }
} while (menu !== '4');

