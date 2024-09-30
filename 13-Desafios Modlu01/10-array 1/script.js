
// Praticando Arrays
// O CÓDIGO DEVE ESTAR NUM ARQUIVO SEPARADO E IMPORTADO NUMA PÁGINA HTML
// ■ Temos abaixo, uma array bidimensional de naves que estão engatadas numa 
// estação espacial.
// ■ Para cada sub-array, a primeira posição é o nome da nave, a segunda é a 
// quantidade de tripulantes e a terceira informa se o processo de engate já foi 
// concluído ou não.
// ■Nesta lista, a plataforma de engate
// que a nave está parada é o [índice da nave no array + 1]
// const hitchedSpaceships = [ [Fenix", 8, true], ["Golias", 10, true], 
//     ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false]
// ■Com base neste array, nós queremos:
// 1 Filtrar o nome das naves que tem mais de 9 tripulantes
// 2 Informar o número da plataforma em que está a primeira nave que ainda está 
// com engate pendente
// Utilize a função findIndex, que é bem parecida como find, mas retorna o índice 
// de um filtro em vez do elemento do Array
// 3 Destacar o nome de todas as naves colando-as em caixa alta e exibindo
// 4 Exibir um alerta com todos estas informações
// - Dica
// Leia sobre as funções findIndex e join dos arrays nos links abaixo. 
// Utilizaremos na resolução :)

// Essa página diz
// Espaçonaves com mais de 9 tripulantes: Golias, Darwin 
// Plataform com processo de engate: 3
// Espaçonaves destacadas: FENIX, GOLIAS, HELMET, ELEMENTAL, DARWIN
let count = 0;
const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
];

let naves9 = hitchedSpaceships.filter(nave => {
    return nave[1] >= 9
}).map(nave => {
    return nave[0]
})

let engates = hitchedSpaceships.reduce((acum, nave) => {
    if(nave[2] === true){
        acum++
    }
    return acum
}, 0)

let nomes = hitchedSpaceships.map(nave =>{
    return nave[0].toUpperCase()
})


let text = `Espaçonaves com mais de 9 tripulantes: ${naves9}\n`+
            `Plataform com processo de engate: ${engates}`+
            `Espaçonaves destacadas: ${nomes.join( ', ')}`
alert(text)

