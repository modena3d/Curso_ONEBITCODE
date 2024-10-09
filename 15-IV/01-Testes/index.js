const coisas = {
    frutas: ['pera', 'uva', 'maca', 'banana', 'abacaxi'],
    numbers: [10, 50, 20, 5, 42, 8, 60],
    booleanArray: [false, false, true, false, true, false, true]
}

const filtrados = coisas.numbers.filter(valor => valor > 40)
console.log(filtrados);

const numbers = [...coisas.frutas[4]].filter(vl => vl === 'a').map(vl => vl)
console.log(numbers);
console.log(coisas.numbers);

