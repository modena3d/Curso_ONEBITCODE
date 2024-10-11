// Treinando a Criação de Classes
// Classe USER
//1- um atributo fullname, atribuível na instanciação
//2- um atributo email, atribuível na instanciação
//3- um atributo password, atribuível na instanciação
//4- um método login, que tem como parâmetros um email e uma senha e 
// deve comparar esses parâmetros com o email e a senha do usuário e 
// mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não

class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
        if (email === this.email && password === this.password) {
            console.log(`Usuario: ${this.fullname}, logado com sucesso!`);
        }else{
            console.log(`Usuario: ${this.fullname}, dados inválidos!`);
        }
    }
}

const jose = new User('Jose', 'jose@gmail.com', '123_456')
jose.login('Joao@dsd', '85')

// console.log();
