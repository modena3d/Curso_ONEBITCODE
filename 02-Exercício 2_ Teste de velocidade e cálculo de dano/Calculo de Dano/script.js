const nomePoderChar1 = prompt('Digite o nome do poder de ataque do personagem1:');
const poderAtaque1 = prompt('Digite a força do poder de ataque personagem1:');
const person1 = prompt('Digite o nome do personagem1:');
const pontoVida1 = prompt('Digite a Quantidade de pontos de vida do personagem1:');
const poderDefesa2 = prompt('Digite a força do poder de defesa do personagem2:');
const possuiEscudo2 = prompt('O personagem2 possui escudo (Sim/Não)?:');

const person2 = 'Personagem2';

let dano = 0;

if(poderAtaque1 > poderDefesa2 && possuiEscudo2 === 'Não'){
    dano = poderDefesa2 - poderAtaque1;  
}else if(poderAtaque1 > poderDefesa2 && possuiEscudo2 === 'Sim'){
    dano = poderDefesa2 - (poderAtaque1 / 2);
}else{
    dano = 0;
}

pontoVida1 -= dano;

alert(`O personagem ${person1}, atacou com o ${nomePoderChar1}
    de força ${poderAtaque1} `)