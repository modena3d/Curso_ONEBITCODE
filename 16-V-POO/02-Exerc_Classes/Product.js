// Classe Product
//5- um atributo name, atribuível na instanciação
//6- um atributo description, atribuível na instanciação
//7- um atributo price, atribuível na instanciação
//8- um atributo inStock, inicializado sempre em 0
//9- um método addToStock, que tem como parâmetro a quantidade a ser adicionada
//  em estoque e deve somar essa quantidade à variável inStock
//10- um método calculateDiscount, que tem como parâmetro a percentagem de desconto
//  a ser aplicada e retorne o valor do preço com o desconto aplicado

class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(amount) {
       this.inStock += amount
    }
    calculateDiscount(discount) {
        const resultDiscount = (this.price * discount / 100)
        console.log(`O valor total do Produto é de: ${this.price}, com o desconto de ${discount}%, ficará em: ${resultDiscount}`);
    }
}

const tv = new Product('TV', '58 polegadas', '2800')

tv.addToStock(55)
tv.calculateDiscount(50)
console.log(tv);



