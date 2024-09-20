// Menu Interativo
// Escreva um programa em javascript que simule um 
// menu interativo com 5 opções diferentes. 
// O programa deverá iniciar mostrando as 5 opções disponíveis,
//  as quatro primeiras não precisam de nenhuma funcionalidade 
// específica, a última opção deve ser a opção “Encerrar”.
// Ao clicar em alguma das quatro primeiras opções uma mensagem 
// deve ser exibida na tela indicando qual foi a opção escolhida 
// e depois o programa deve exibir novamente o menu com as 5 opções. 
// Isso deve continuar acontecendo até que o usuário escolha a opção 
// “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema 
// está sendo encerrado deve ser exibida na tela e então o 
// programa é finalizado.
let options = '';
do {
    options = prompt('Escolha uma das opção a baixo:' +
        '\n (1) -  Opcão 1' +
        '\n (2) -  Opcão 2' +
        '\n (3) -  Opcão 3' +
        '\n (4) -  Opcão 4' +
        '\n (5) -  Encerrar');
    
    
    switch (options) {
        case '1':
            alert('Você escolheu a opção 1')
            break;
        case '2':
            alert('Você escolheu a opção 2')
            break;
        case '3':
            alert('Você escolheu a opção 3')
            break;
        case '4':
            alert('Você escolheu a opção 4')
            break;
        case '5':
            alert('O sistema está sendo encerrado...')
            break;
        default:
            break;
    }
    
}while(options !== '5');
