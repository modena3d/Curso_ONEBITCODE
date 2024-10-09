function sum(param,...numbers) {//no final
    return numbers.reduce((ac, num)=> ac + num,0)
}

console.log(sum(1,1));
console.log(sum(1,1,2,2,2,5,5,5,5,54,4,));
