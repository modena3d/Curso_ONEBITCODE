const nomeCarro1 =  prompt('Digite o nome do modelo do 1 carro:');
const nomeCarro2 =  prompt('Digite o nome do modelo do 2 carro:');
const velCarro1 =  prompt('Digite a velocidade do 1 carro:');
const velCarro2 =  prompt('Digite a velocidade do 2 carro:');

const vel1 = parseFloat(velCarro1);
const vel2 = parseFloat(velCarro2);

if(vel1 > vel2){
    alert(`O carro ${nomeCarro1} é o mais rápido com a velocidade de ${vel1}`);
}else if(vel1 === vel2){
    alert(`Ambos os carros: ${nomeCarro1}, ${nomeCarro2}, tem a mesma velocidade de: ${vel1} `)
}else{
    alert(`O carro ${nomeCarro2} é o mais rápido com a velocidade de ${vel2}`);
}
