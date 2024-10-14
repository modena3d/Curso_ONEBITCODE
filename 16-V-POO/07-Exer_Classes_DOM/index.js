

// 5-Uma classe específica para elementos input, que deve ser uma subclasse 
// da classe Component.
// 6-Uma classe específica para elementos label, que deve ser uma subclasse da classe 
// Component e no seu construtor deve ser possível indicar como primeiro parâmetro qual
//  será o seu conteúdo em texto.
// 7-Uma classe específica para elementos form, que deve ser uma subclasse da classe 
// Component e possuir um método para adicionar elementos como filhos (através das 
//     instâncias das classes Component e suas subclasses).

import Component from './Component.js'; // Import usando ES6 modules
import Input from './Input.js'

const h1 = new Component('h1',document.body, '----'); // Instancia o Component com 'h1'
h1.render()

const input1 = new Input('text', 'InputText', document.body )
input1.render()