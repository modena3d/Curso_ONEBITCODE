const primeiroNome = prompt('Informe o primeiro nome do recruta: ');
const sobreNome = prompt('Informe o sobrenome do recruta: ');
const campoDeEstudo = prompt('Informe o campo de estudo: ');
const anoDeNascimento = prompt('Informe o ano de nascimento: ');


const date = new Date();
const anoAtual = date.getFullYear();

alert(`Recruta cadastrado com sucesso!\n
    Nome completo: ${primeiroNome} ${sobreNome}\n
    Campo de estudo: ${campoDeEstudo}\n
    Idade: ${anoAtual - anoDeNascimento}`)