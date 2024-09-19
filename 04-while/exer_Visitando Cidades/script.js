// Escreva um programa em javascript que peça o 
// nome de um turista e então pergunte se ele já visitou alguma cidade. 
// Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, 
// e então continue perguntando se o turista visitou alguma outra cidade 
// até que a resposta seja não. No fim, o programa deve exibir o nome do turista, 
// quantas e quais cidades ele visitou.

const nome = prompt('Qual é o seu nome? ');
const visitouCidades = prompt('Você já visitou alguma cidade?\n(S)sim\n(N)não');
let citys = '';

while (visitouCidades.toUpperCase() === "S") {
    

    let city = prompt('qual o nome da cidade? ');
    let visMais = prompt('Você já visitou alguma cidade a mais?\n(S)sim\n(N)não');
    citys += city + ', ';
    let cidades = [...citys];
    
    if(visMais.toUpperCase() === 'N'){
        alert(`${nome}, visitou ${cidades.length+1}.\n
            As cidade visitadas foram: ${citys}`)
        break;
    };
}


