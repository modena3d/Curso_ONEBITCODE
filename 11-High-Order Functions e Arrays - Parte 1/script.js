const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]


//----------FOR-------------
//   const nomes = [];

//   for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
//   }

//   console.log(nomes);


//----------MAP-------------
const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

// console.log(nomes);


//----------FILTER-------------
// const orcs = [];

// for (let i = 0; i < personagens.length; i++) {
//     if(personagens[i].raca === 'Orc'){
//         orcs.push(personagens[i])
//     }
// }

const orcs = personagens.filter(function (personagem) {
    return personagem.raca === 'Orc'
})

// console.log(orcs);


//----------REDUCE-------------
const nivelTotal = personagens.reduce(function (valAcum, personagem) {
    return valAcum + personagem.nivel

}, 0)

// console.log(nivelTotal);

const racas = personagens.reduce(function (valAcum, personagem){
    if(valAcum[personagem.raca]){
        valAcum[personagem.raca].push(personagem)
    }else{
        valAcum[personagem.raca] = [personagem]
    }
    return valAcum
}, {})

// console.log(racas);

const niveis = personagens.reduce(function(acum, pers){
    if(pers.nivel <= 30){
        acum[pers.nivel] = [pers.nome]
        // console.log(acum[pers.nivel].push(pers));
        console.log(pers.nivel);
        
    }else{
        console.log(pers.nivel);
        acum[pers.nivel] = [pers.nome]
    }
    return acum
    
}, {})

console.log(niveis);
