// 1-Uma classe para um elemento genérico do DOM (dica: utilize o nome Component, 
//     pois o nome Element poderá gerar conflitos com a implementação do navegador).
//     Essa classe deverá possuir um atributo privado para armazenar a referência ao 
//     elemento do DOM e um método de acesso para ler o valor desse atributo.
//     Ela também deve possuir um método build para criar o elemento que deve ser
//      chamado uma vez no construtor, mas também deve ser possível chamá-lo novamente 
//      através da instância.Ela também deve possuir um método render para adicionar 
//      o elemento na página que poderá ser chamado pela instância a qualquer momento.

// 2-Essa classe deverá possuir um atributo privado para armazenar a referência ao 
// elemento do DOM e um método de acesso para ler o valor desse atributo.

// 3-Ela também deve possuir um método build para criar o elemento que deve ser chamado 
// uma vez no construtor, mas também deve ser possível chamá-lo novamente através da
//  instância.

// 4-Ela também deve possuir um método render para adicionar o elemento na página que 
// poderá ser chamado pela instância a qualquer momento.

class Component {
    constructor(name) {
        this.name = name
        build(this.name)
    }
    build(element){
        document.createElement(`${element}`)
    }
    render(){
        
    }
}