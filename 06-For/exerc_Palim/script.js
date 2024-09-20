// Procurando Palíndromos
// Escreva um programa em javascript 
// que seja capaz de identificar se uma palavra 
// é um palíndromo. Um palíndromo é uma palavra 
// que lida de trás para frente possui as
//  mesmas letras na mesma ordem. O programa deve 
//  iniciar pedindo que seja informada uma palavra 
//  e então deve exibir uma mensagem dizendo se 
//  aquela palavra é ou não um palíndromo. 
//  Caso não seja um palíndromo, o programa 
//  deve mostrar a palavra lida da esquerda para 
//  direita e da direita para esquerda.

const frase = prompt('Escreva a palavra ou frase:')
let fraseRevers = ''
for(let i = frase.length-1; i >= 0; i--){
     fraseRevers += frase[i]

};

if(frase.toLocaleLowerCase === fraseRevers.toLocaleLowerCase){
    alert(`A frase :'${fraseRevers}' é um palíndromo `)
    }else{
    alert(`A frase :'${fraseRevers}' não é um palíndromo `)
    }