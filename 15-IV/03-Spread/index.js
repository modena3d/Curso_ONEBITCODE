const frutas = [ 'ZEZE','Banana', 'Maca', 'Uva', 'Melao', 'Abacaxi', 'Maracujá']

console.log(frutas);
console.log(...frutas);
console.log(...frutas[4]);

const frutasCopy = frutas
frutasCopy.pop()
frutasCopy.pop()
frutasCopy.push('CIDADE')
console.log(frutas, frutasCopy);

const frutasClone = [...frutas]
frutasClone.push('CARROS')


console.log(frutas, frutasCopy, frutasClone);

const frutasObj = {...frutas}
const frutasObjClone = {...frutasObj}
console.log({frutasObj});
console.log({frutasObjClone});

frutasObjClone.test = 'Teste'
console.log({frutasObj,frutasObjClone});

console.log(frutasObjClone[2]);

const numbers = [1,2,3,'asasa',5,6,7,8,9]

console.log(...numbers[3]);
