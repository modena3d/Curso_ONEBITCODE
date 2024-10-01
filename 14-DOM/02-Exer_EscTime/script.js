
// Construa uma página web que permita montar a escalação de um time de jogadores.
// Nele deverá ser possível:
// - Escalar um jogador
// - Informar a posição do jogador a ser escalado para o time.
// - Informar o nome do jogador.
// - Informar o número da camisa do jogador.
// - Ter um botão "Escalar" que pergunta ao usuário se ele deseja confirmar a escalação
// daquele jogador e então insere as informações em uma lista na página.
// - Após o jogador ser escalado os campos de texto devem ser limpos.
// - Remover um jogador
// - Informar o número da camisa do jogador.
// - Ter um botão "Remover" que pergunta ao usuário se ele deseja confirmar a remoção 
//daquele jogador e então exclui ele da lista na página.
// - Após o jogador ser removido o campo de texto deve ser limpo.
// Dica: lembrando que é possível acessar o texto de um input através da propriedade value.

let jogadores = []
let jogad = {}

function addPlayer() {
    const position = document.getElementById('input_position').value
    const name = document.getElementById('input_nome').value
    const number = document.getElementById('input_number').value

    const confirmar = confirm(`Deseja mesmo escalar este jogador?\n` +
        `-Jogador: ${name} -Posição: ${position} -Número: ${number}`)

    if (confirmar) {
        const spanListPlayers = document.getElementById('list_players')
        const liPlayer = document.createElement('li')
        liPlayer.id = 'player-' + number
        liPlayer.innerText = position + ': ' + name + ' (' + number + ')'
        spanListPlayers.appendChild(liPlayer)
        document.getElementById('input_position').value = ''
        document.getElementById('input_nome').value = ''
        document.getElementById('input_number').value = ''
    }

}

function removePlayer() {
    const number = document.getElementById('input_remover').value
    const playToRemove = document.getElementById('player-' + number)

    const confirmar = confirm(`Deseja mesmo remover este jogador?\n` +
        `${playToRemove.innerText} ?`)
        if(confirmar){
            document.getElementById('list_players').removeChild(playToRemove)
            document.getElementById('input_remover').value = ''
        }
}