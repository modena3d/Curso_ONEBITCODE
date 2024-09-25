// Calculadora Geométrica
// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. 
// O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções 
// devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. 
// O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar
//  ao menu.

let menu = '';

do {
    menu = prompt('Calculadora Geométrica:\n' +
        '1. área do triângulo: base * altura / 2\n' +
        '2. área do retângulo: base * altura\n' +
        '3. área do quadrado: lado²\n' +
        '4. área do trapézio: (base maior + base menor) * altura / 2\n' +
        '5. área do círculo: pi * raio² (considere pi = 3.14)\n' +
        '6. Sair'
    );

    menuEscolha(menu);
} while (menu !== '6');



//-----CALCULOS--------
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

function areaRetangulo(base, altura) {
    return base * altura;
};

function areaQuadrado(lados) {
    return areaRetangulo(lados, lados)
};

function areaTrapezio(bMaior, bMenor, alt) {
    return (bMaior + bMenor) * alt / 2
};

function areaCirculo(raio) {
    return  Math.PI * (raio * raio);
}

//-----FUNCTION Switch--------
function menuEscolha(num) {
    let base = '';
    let altura = '';
    switch (num) {
        case '1':
            base = prompt('Digite a dimensão da base:');
            altura = prompt('Digite a dimensão da altura:');
            alert(`A área do triângulo cuja a base é de: ${base} e a altura é de: ${altura}\n` +
                `Resultado: ${areaTriangulo(base, altura)}m²`)
            break;
        case '2':
            base = prompt('Digite a dimensão da base:');
            altura = prompt('Digite a dimensão da altura:');
            alert(`A área do retangulo cuja a base é de: ${base} e a altura é de: ${altura}\n` +
                `Resultado: ${areaRetangulo(base, altura)}m²`)
            break;
        case '3':
            lados = prompt('Digite a dimensão dos lados:');
            alert(`A área do quadrado cujo ambos os lados são de: ${lados}\n` +
                `Resultado: ${areaQuadrado(lados)}m²`)
            break;
        case '4':
            bMaior = prompt('Digite a dimensão da base maior:');
            bMenor = prompt('Digite a dimensão da base menor:');
            altura = prompt('Digite a dimensão da altura:');
            alert(`A área do trapézio cuja a base maior é de: ${bMaior} e a base menor de: ${bMenor} e a altura é de: ${altura}\n` +
                `Resultado: ${areaTrapezio(bMaior, bMenor, altura)}m²`)
            break;
        case '5':
            raio = prompt('Digite a dimensão do raio:');
            alert(`A área do círculo cujo o raio é de: ${raio}\n` +
                `Resultado: ${areaCirculo(raio).toFixed(2)}m²`)
            break;
        case '6':
            alert('Saindo...')
            break;
        default:
            alert('Opção inválida');
    }
}



