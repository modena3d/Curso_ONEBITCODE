// 5-Uma classe específica para elementos input, que deve ser uma subclasse 
// da classe Component.
import Component from "./Component.js";

export default class Input extends Component {
    constructor(type, name, parent) {
        super('input', parent, ''); // Chama o construtor da classe pai com 'input' como tag e texto vazio
        this.type = type; // Armazena o tipo do input
        this.name = name; // Armazena o nome do input
        
        this.getElement().type = this.type; // Define o tipo do input
        this.getElement().name = this.name; // Define o nome do input
    }
}
