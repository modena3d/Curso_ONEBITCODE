const n1 = prompt('Digite o 1 numero: ');
const n2 = prompt('Digite o 2 numero: ');



const soma = parseFloat(n1) + parseFloat(n2);
const subtracao = parseFloat(n1) - parseFloat(n2);
const multiplicacao = parseFloat(n1) * (n2);
const divisao = parseFloat(n1 / n2);

alert(`
    Soma: ${n1} + ${n2} = ${soma}\n
    Subtração: ${n1} - ${n2} = ${subtracao}\n
    Multiplicação: ${n1} * ${n2} = ${multiplicacao}\n
    Divisao: ${n1} / ${n2} = ${divisao}`)