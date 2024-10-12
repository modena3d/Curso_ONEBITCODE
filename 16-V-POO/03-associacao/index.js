const Address = require("./Adress");
const Person = require("./Person");

const addr = new Address("RUa Inga", 248, "Norte", "Sao Caetano do Sul", "SP");
const henrique = new Person(`Henrique`, addr);

console.log(henrique);
console.log(henrique.addres.fullAddress());
