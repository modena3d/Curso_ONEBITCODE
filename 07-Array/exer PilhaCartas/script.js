// Pilha de Cartas
// Escreva um programa em javascript para simular um baralho de cartas. 
// O programa deve iniciar mostrando na tela um menu interativo contendo 
// a quantidade de cartas que estão atualmente no baralho e as 
// opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”.
//  Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta
//   e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa 
//   deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada.
//    O programa só deve ser encerrado ao escolher a opção de “Sair”, 
//    caso contrário deve voltar ao menu.
let cards = [];
let menu1 = '';
do {
    
        menu1 = prompt(`Cartas no baralho: ${cards.length}\n` +
        '1. Adicionar uma carta\n' +
        '2. Puxar uma carta\n' +
        '3. Sair'
    );
    
    switch (menu1) {
        case '1':
            let addCard = prompt('Qual é a carta?');
            cards.push(addCard);
            console.log(cards);  
            break;
        case '2':
            let removeCards = cards.pop();
            alert(`Você puxou a ${removeCards}`);
            break;
        case '3':
            alert('Saindo...')
            break;    
        default:
            alert('Opção inválida!');
    }
} while (menu1 !== '3');