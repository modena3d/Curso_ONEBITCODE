// Desestruturação
const person = {
    name: 'Henrique',
    job: 'Designer3D',
    parents: ['Giovanna', 'Bruna']
}

const { name: nome } = person

console.log(nome);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

let [,,,carro,...restosss] = numbers

carro = 'car'

console.log(carro);

let [teste, ok, ok2] = numbers

console.log(ok);

function createUser({name, job, parents}) {
    const id = 18545
    return {
        id,
        name,
        job,
        parents
    }
}

const Maria = createUser(person)
Maria.name = 'Maria'
console.log(Maria.name);
