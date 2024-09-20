// Fila de Espera
// Escreva um programa em javascript 
// para simular uma fila de espera em 
// um consultório médico. O programa 
// deve iniciar mostrando na tela um 
// menu interativo contendo a lista de 
// todos os pacientes esperando em ordem 
// mostrando sua posição ao lado do nome 
// (ex.: 1º Matheus, 2º Marcos, etc).
//  O menu também deve permitir escolher 
//  entre as opções de “Novo paciente”, 
//  para adicionar um novo paciente ao 
//  fim da fila (pedindo o nome do paciente), 
//  “Consultar paciente”, que retira o primeiro 
//  paciente da fila e mostra na tela o nome do 
//  paciente consultado, e “Sair”. O programa só 
//  deve ser encerrado ao escolher a opção de “Sair”, 
//  caso contrário deve voltar ao menu.

let filaDeEspera = ['Joao', 'Maria', 'Marcos', 'Jose'];
let display = '';


do {   
    let pacientes = '';
    for (let i = 0; i < filaDeEspera.length ; i++) {
        pacientes += (i + 1) + 'º ' + `${filaDeEspera[i]}` + `\n`;
    }

    display = prompt('Lista de Espera:\n' +
    `${pacientes}\n` +
    `Escolha umas das opção a baixo:\n` +
    `1 - Novo paciente\n` +
    `2 - Consultar paciente\n` +
    `3 - Sair`
)
    
    switch (display) {
        case "1":
            const novoPaciente = prompt('Digite o nome do paciente:');
            filaDeEspera.push(novoPaciente);
            break;
        case "2":
            const pacienteConsultado = filaDeEspera.shift()
            if(!pacienteConsultado){
                alert("Não há pacientes na fila!")
            }else{
                alert(pacienteConsultado + ' foi removido')
            }
    
            break;
        case "3":
    
            break;
        default:
            break;
    }
} while (display !== "3");