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

export default class Component {
    #elem = null
    constructor(tag, parent, text) {
        this.tag = tag
        this.parent = parent instanceof HTMLElement ? parent : null;
        this.text = text
        this.build();
    }
    getElement() {
        return this.#elem
    }
    build() {
        this.#elem = document.createElement(this.tag);
        this.#elem.innerText = this.text
        console.log(this.#elem);
        return this.#elem
    }
    render() {
        if (this.parent) {
            this.parent.appendChild(this.#elem); // Corrigido: agora acessa corretamente o elemento pai
        } else {
            console.error("Nenhum elemento pai foi fornecido.");
        }
    }
}

