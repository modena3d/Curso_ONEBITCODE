
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


let nave = {
    velocidade: 0,
    acelerarUp: function (aceleracao) {
        this.velocidade += aceleracao
    }
}

function registrarNave() {
    nave.name = prompt('Digite o nome da Nave:')
    nave.tipo = prompt('Digite o tipo da Nave:')
    nave.velMax = prompt('Qual a velocidade Máxima permetida?')
}

function acelerar() {
    let aceleracao = Number(prompt('Quanto você quer acelerar? (km/s)'))
    nave.acelerarUp(aceleracao)
    if (nave.velocidade >= nave.velMax) {
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!" +
            "\nVelocidade da Nave: " + nave.velocidade + "km/s" +
            "\nVelocidade máxima da Nave: " + nave.velMax + "km/s")
    }
}

function stop() {
    alert(`Nome: ${nave.name}\n` +
        `Tipo: ${nave.tipo}\n` +
        `Velocidade da nave: ${nave.velocidade}km/s\n` +
        `Máxima da Nave: ${nave.velMax}km/s`
    )
}

function dashBoard() {
    alert(`VELOCIDADE MÁXIMA ULTRAPASSADA!\n` +
        `Velocidade da Nave: ${nave.velocidade}km/s\n` +
        `Velocidade máxima da Nave: ${nave.velMax}km/s`
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
                acelerar()
                break;
            case '2':
                stop()
                break;
            default:
                alert('Opção inválida, tente novamente...')
        }
    } while (menu !== '2');
}
registrarNave()
showMenu()