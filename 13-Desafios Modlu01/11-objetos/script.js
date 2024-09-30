
// Praticando Objetos
// O CÓDIGO DEVE ESTAR NUM ARQUIVO SEPARADO E IMPORTADO NUMA PÁGINA HTML

// Faremos um aplicativo que fará o mapeamento de velocidade de uma espaçonave.

// Neste aplicativo, vamos cadastrar uma espaçonave com seu nome, 

// tipo 
// e a velocidade máxima que esta nave pode atingir para que não entre 
// em combustão.

// 1 Nave deve partir da velocidade 0 km/s

// 2 Menu deve ser exibido para o usuário perguntando se ele quer acelerar ou parar 
// a nave.

// •Se ele quiser parar, uma mensagem deve ser exibida com as características da nave 
// (nome e tipo) e em que velocidade ele
// estava.

// • Se ele quiser acelerar, deve ser exibido um prompt para que ele informe quanto 
// ele quer acelerar e este valor será incrementado na velocidade.

// 3 Quando a velocidade for incrementada, deve-ser fazer. uma verificação para ver se a 
// espaçonave está acima da velocidade máxima dela.

// Se ela estiver, uma mensagem deve ser exibida informando a velocidade da nave e a 
// velocidade máxima permitida.

// Para resolver estes problemas precisaremos:
// • Exibir um prompt para o nome da nave

// Exibir um prompt para o tipo da nave

// • Exibir um prompt para velocidade máxima desta nave

// • Exibir um prompt perguntando se o usuário quer acelerar ou parar 
// ▪ Se ele quiser parar, vamos exibir a mensagem final
// • Se ele quiser acelerar, precisamos de um prompt para que o usuário informe o quanto quer acelerar
// • Exibir uma mensagem de alerta quando a velocidade máxima for ultrapassada
// • Criar um objeto para a nave


const nomeNave = prompt('Digite o nome da Nave:')
const tipoNave = prompt('Digite o tipo da Nave:')
const velMax = prompt('Qual a velocidade Máxima permetida?')

let speed = 0;

function dashBoard() {
    alert(`VELOCIDADE MÁXIMA ULTRAPASSADA!\n` +
        `Velocidade da Nave: ${speed}km/s\n` +
        `Velocidade máxima da Nave: ${velMax}km/s`
    )
}

function acelerar(speed) {
    console.log('SPEED:', speed);
    speed = prompt('Quanto deseja acelerar? (km/s)')
    speed = Number(speed)
    if (speed >= velMax) {
        dashBoard()
        speed += speed;
        console.log('If speed:', speed);
        console.log('If velMax:', velMax);
        return speed
    } else {
        speed += speed;
        console.log('Else speed:', speed);
        console.log('Else velMax:', velMax);
        return speed
    }
}

function stop(speed) {
    console.log('Stop: ', speed);
    
    alert(`Nome: ${nomeNave}\n` +
        `Tipo: ${tipoNave}\n` +
        `Velocidade da nave: ${speed}km/s\n` +
        `Máxima da Nave: ${velMax}km/s`
    )
}

function showMenu() {
    let menu;
    do {
        menu = prompt('Escolha uma das opções a baixo:\n' +
            `1- Acelerar\n` +
            `2- Parar a Nave`)

        switch (menu) {
            case '1':
                acelerar(speed)
                break;
            case '2':
                stop(speed)
                break;
            default:
                alert('Opção inválida, tente novamente...')
        }
    } while (menu !== '2');
}
showMenu()