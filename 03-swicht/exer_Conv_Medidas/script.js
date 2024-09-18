const mt = prompt("Digite uma medida em metros:");
const op = prompt("Escolha para qual unidade gostaria de converter:"+
    '\n-milímetro'+
    '(mm)\n-centímentro'+ 
    '(cm)\n-decímetro'+ 
    '(dm)\n-decâmetro'+ 
    '(dam)\n-hectômetro'+ 
    '(hm)\n-quilômetro (km)');
let convert;

switch (op) {
    case 'mm':
        convert = parseFloat(mt) * 1000;
        alert(`${mt} metros são ${convert} em milímetros`)
        break;
    case 'cm':
        convert = parseFloat(mt) * 100;
        alert(`${mt} metros são ${convert} em centímetros`)
        break;
    case 'dm':
        convert = parseFloat(mt) * 10;
        alert(`${mt} metros são ${convert} em decímetros`)
        break;
    case 'dam':
        convert = 0.1 * parseFloat(mt);
        alert(`${mt} metros são ${convert} em decâmetro`)
        break;
    case 'hm':
        convert = 0.01 * parseFloat(mt);
        alert(`${mt} metros são ${convert} em hectômetro`)
        break;
    case 'km':
        convert = 0.001 * parseFloat(mt);
        alert(`${mt} metros são ${convert} em quilômetro`)
        break;
        
    default:
        break;
}