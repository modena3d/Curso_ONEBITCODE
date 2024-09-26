// Sistema de Vagas de Emprego
// Escreva um programa em javascript que simule um sistema de vagas de emprego, 
// onde é possível gerenciar as vagas e adicionar candidatos às vagas. 
// Ele deve atender aos seguintes requisitos:
// 1-Ter um um menu onde é possível escolher entre as diferentes funcionalidades 
//   do sistema Listar vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever 
//   um candidato em uma vagaExcluir uma vagaSair
// 2-Listar vagas disponíveis
// 3-Criar um nova vaga
// 4-Visualizar uma vaga
// 5-Inscrever um candidato em uma vaga
// 6-Excluir uma vaga
// 7-Sair
// -*--- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de 
//       candidatos inscritos de todas as vagas.
// -*---A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e 
//       data limite, e também deve pedir que o usuário confirme as informações antes 
//       de salvá-las.
// -*---A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as 
//       informações dela: índice, nome, descrição, data limite, quantidade de candidatos 
//       e o nome dos candidatos.
// -*---A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o 
//       índice da vaga e então uma confirmação exibindo as informações da vaga antes de 
//       salvar o candidato na vaga.
// -*---A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações 
//      e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
let vagas = [];
let vaga = {};
let candidatos = [];

function start() {
    let option = '';
    do {
        option = menu();
        switch (option) {
            case '1':
                listarVagas()
                break;
            case '2':
                criarVaga()
                break;
            case '3':

                break;
            case '4':

                break;
            case '5':

                break;
            case '6':
                alert('Saindo...')
                break;
            default:

        }


    } while (option !== '6');
}
start();

function menu() {
    const menu = prompt(
        'Sistema Vg Ploy:\n' +
        '1-Listar vagas disponíveis\n' +
        '2-Criar um nova vaga\n' +
        '3-Visualizar uma vaga\n' +
        '4-Inscrever um candidato em uma vaga\n' +
        '5-Excluir uma vaga\n' +
        '6-Sair'
    )
    return menu
}

function listarVagas() {
    if (vagas.length > 0) {
        const resultVagas = vagas.reduce((text, vaga, indice) => {
            text += `Nº: ${indice} - Vaga: ${vaga.nome} - Descrição: ${vaga.descricao} - numero de candidatos: ${candidatos.length}\n`
            return text;
        }, '')
        alert(resultVagas)
    } else {
        alert('Nenhuma vaga cadastrada.')
    }
}

function criarVaga() {
    const nomeVaga = prompt('Digite o nome da vaga:');
    const descricao = prompt('Descreva sobre a vaga:');
    vaga = {};
    vaga.nome = nomeVaga;
    vaga.descricao = descricao;
    vagas.push(vaga);
    console.log(vagas);
}