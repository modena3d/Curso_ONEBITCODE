// Cadastro de Imóveis
// Escreva um programa em javascript que funcione como um cadastro de imóveis
//  e atenda aos seguintes requisitos:

// 1-Deve ter um menu interativo que sempre é exibido até que o usuário 
// escolha sair.
// 2-O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// 3-O menu deve ter a opção de salvar um imóvel.
// 4-Para salvar um novo imóvel o programa deve pedir as seguintes informações:
//  Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui 
// garagem.
// 5-Nome do proprietário.
// 6-Quantidade de quartos.
// 7-Quantidade de banheiros.
// 8-Se possui garagem.
// 9-O menu também deve ter a opção de mostrar todos os imóveis salvos.


function imovelConst(proprietario, quartos, banheiros, garagem) {
    this.proprietario = proprietario;
    this.quartos = quartos;
    this.banheiros = banheiros;
    this.garagem = garagem;
}
const imv1 = new imovelConst('1-Henrique', '2', '1', 'Sim')
const imv2 = new imovelConst('2-Marcelo', '3', '2', 'Sim');
const imv3 = new imovelConst('3-Maria', '5', '3', 'Nao');

let imoveis = [imv1, imv2, imv3];
// let teste = imoveis.splice(2)
// console.log(teste);
// console.log(imoveis);



let menu = '';

let showimovel;
do {

    menu = prompt(`Quantidades de imovel: ${imoveis.length}\n` +
        `1-Cadastrar Imóvel \n` +
        `2-Mostrar todos os imóveis \n` +
        `3-Deletar imóvel \n` +
        `4-Sair `
    );

    switch (menu) {
        case '1':
            const imovel = {};
            imovel.proprietario = prompt('Digite o Nome do proprietário:');
            imovel.quartos = prompt('Digite a quantidade de quartos:');
            imovel.banheiros = prompt('Digite a quantidade de banheiros:');
            imovel.garagem = prompt('Possui Garagem:(Sim/Nao):');

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
              )
        
              if (confirma) {
                imoveis.push(imovel)
              }

            break;
        case '2':
            if(imoveis.length < 1){
                alert('Nenhum Imóvel cadastrado...')
            }
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    `Imóvel ${(i + 1)}\n` +
                    `Proprietário:  ${imoveis[i].proprietario}\n` +
                    `Quartos:  ${imoveis[i].quartos}\n` +
                    `Banheiros:  ${imoveis[i].banheiros}\n` +
                    `Possui Garagem?  ${imoveis[i].garagem}\n\n`)
            }
            break;
        case '3':
            idNum = prompt(`Se deseja excluir algum imóvel, digite o numero dele:`)
            let idImovel = '';
            // console.log(Number(idNum - 1), 'idImovel: ', idImovel);
            // console.log(imoveis);
            console.log(imoveis[Number(idNum - 1)].proprietario);
            alert(`O imovel que deseja remover é o de numero: ${idNum}\n` +
                `Proprietário:  ${imoveis[Number(idNum - 1)].proprietario}\n` + 
                `Quartos:  ${imoveis[Number(idNum - 1)].banheiros}\n` +
                `Possui Garagem?  ${imoveis[Number(idNum - 1)].garagem}\n\n`
            )
            idImovel = imoveis.splice(Number(idNum - 1), 1);

            break;
        case '4':
            alert('Programa sendo encerrado...')
            break;
        default:
            alert('Comando inválido tente novamente...')
    }
} while (menu !== '4');


/* -------------TESTES--------------
let simpArray = ['a',['1','2',['3'],['4',['5']]],'c','d']
console.table(simpArray);



// [[1,2,3], [4,5,6],[7,8,9]]
let charCode = 97; // Código ASCII da letra 'a'

let testeForArray = [];
let count = 1;
for (let i = 0; i < 3; i++) {
    testeForArray[i] = [];
    for (let j = 0; j < 6; j++) {
        if (j < 3) {
            testeForArray[i][j] = count++;
        } else {
            testeForArray[i][j] = String.fromCharCode(charCode);
            charCode++
        }
    }
}
// console.table( testeForArray)

const tableArray = [[1, 2, 3, 'a', 'b', 'c'], [4, 5, 6, 'd', 'e', 'f'], [7, 8, 9, 'g', 'h', 'i']];

// console.table(tableArray)


let tableArrayAbc = [];

for (let i = 0; i < 3; i++) {
    tableArrayAbc[i] = [];
    for (let j = 0; j < 3; j++) {
        tableArrayAbc[i][j] = String.fromCharCode(charCode) // Converte o código ASCII em uma letra
        charCode++; // Incrementa para a próxima letra
    }
}

// console.table(tableArrayAbc);

const abcArray = [[1, 2, 3, 4, 'a', 'b', 'c'], [5, 6, 7, 'd', 'e', 'f'], [8, 9, 10, 11, 12, 'g', 'h', 'i']];
let resultNum = '';
let resultStr = '';
let result ='';
for (let i = 0; i < abcArray.length; i++) {
    let sizeNum = 0;
    for (let j = 0; j < abcArray[i].length; j++) {
        if (typeof abcArray[i][j] === 'number') {
            sizeNum++
            resultNum += `${abcArray[i][j]}, `;
        }else{ 
            resultStr += `${abcArray[i][j]}, `;
        } 
    }
    result += resultNum.slice(0, -2) + '\n' + resultStr.slice(0, -2) + '\n';
}   
console.log(result);


// unshift insere os valores fornecidos no início de um objeto do tipo array.
// push: Adiciona um elemento no final do array e devolve o novo tamanho do array

// shift remove o elemento de índice zero, diminui em 1 os indices dos demais valores e retorna o valor removido.
// pop: Remove um elemento no final do array e devolve o elemento removido

// includes: Verifica se um certo elemento está presente no array

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original

// splice: Permite remover elementos em qualquer posição do array e substituir por novos

// Usando o for para percorrer cada elemento do array*/