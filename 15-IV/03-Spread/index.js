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
