// Controle Financeiro
// Escreva um programa em javascript que comece perguntando 
// pela quantidade inicial de dinheiro disponível e então mostre 
// na tela essa quantidade juntamente com as opções de adicionar e 
// remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar 
// dinheiro o programa deve perguntar pela quantidade a ser adicionada, 
// somar esse valor com a quantidade inicial e então mostrar novamente o 
// menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro 
// deve fazer o mesmo, porém subtraindo o valor.
//  A opção de sair deve encerrar o programa.

let dinheiroDisponivel = prompt('Digite a quantidade de dinheiro disponivel:')
let menu1 = '';

do {
    menu1 = prompt(`Escolha uma das opções:\n` +
        `Total disponível: R$${dinheiroDisponivel}\n` +
        `1 - Adicionar dinheiro\n` +
        `2 - Remover dinheiro\n` +
        `3 - Sair`);

    switch (menu1) {
        case '1':
            let addMoney = prompt(`Digite a quantia a ser adicionada: `);
            dinheiroDisponivel = Number(dinheiroDisponivel);
            dinheiroDisponivel += Number(addMoney);
            break;
        case '2':
            let subMoney = prompt(`Digite a quantia a ser retirada: `);
            dinheiroDisponivel = Number(dinheiroDisponivel);
            dinheiroDisponivel -= Number(subMoney);
            break;
        case '3':
            alert('O sistema está sendo encerrado...')
            break;
        default:
            break;
    }
} while (menu1 !== '3');