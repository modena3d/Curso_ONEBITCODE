// Desestruturação
const person = {
    name: 'Henrique',
    job: 'Designer3D',
    parents: ['Giovanna', 'Bruna']
}

const name2 = person.name

const {name, job, parents } = person

console.log(name2, name, job);

const [filha, Esposa] = parents

console.log(filha, Esposa); 

