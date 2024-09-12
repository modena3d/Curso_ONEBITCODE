const n1 = prompt('Digite o 1 numero: ');
const n2 = prompt('Digite o 2 numero: ');

const x = parseFloat(n1);
const y = parseFloat(n2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(`
    Soma: ${x} + ${y} = ${soma}\n
    Subtração: ${x} - ${y} = ${subtracao}\n
    Multiplicação: ${x} * ${y} = ${multiplicacao}\n
    Divisao: ${x} / ${y} = ${divisao}`)