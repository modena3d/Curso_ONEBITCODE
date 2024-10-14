// 7-Uma classe específica para elementos form, que deve ser uma subclasse da classe 
// Component e possuir um método para adicionar elementos como filhos (através das 
//     instâncias das classes Component e suas subclasses).
import Component from "./Component.js";

export default class Form extends Component {
    constructor(parent) {
        super('form', parent, '');
        this.parent = parent

    }
    addChildren(...children) {
        children.forEach(child => {
          this.getElement().appendChild(child.getElement())
        })
      }
}