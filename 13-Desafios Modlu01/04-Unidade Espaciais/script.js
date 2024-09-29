
// Fixando o uso do Switch
// O CÓDIGO DEVE ESTAR NUM ARQUIVO SEPARADO E IMPORTADO NUMA PÁGINA HTML
// Neste exercício faremos um conversor de distâncias espaciais.
// ▪ O objetivo é colocarmos uma distância em
// anos-luz (l.y.) e converter para uma unidade desejada.
// ■ O conversor deve:
// 1 Perguntar a distância em anos-luz

// 2 Oferecer uma lista de opções com
//  Parsec (pc)
//  Unidade astronônima (AU)
//  Quilômetros (km)

// 3 Perguntar qual operação deseja realizar
//  A resposta receberá o número da opção escolhida

// 4. Utilize o switch para verificar a opção escolhida pelo usuário
//  Armazenar o nome da unidade
//  Armazenar o valor convertido de anos-luz para a unidade desejada

// 5 Exiba com alerta contendo a distância em anos-luz e a distância convertida para a operação desejada
//  Distância em Anos-luz: <distancia digitada em anos-luz> <Conversão desejada>: <distància convertida>

// 6 Utiliza as seguintes conversões
// 1L.y.= 0,306601pc
// 1L.y. = 63241,1 AU
// 1L.y.=9,5 * 10 elev a 12

// 7 Utilize a biblioteca Math para a conversão de anos-luz para quilômetros.
// Utilize Math.pow(10, 12) para obter o valor de 1012 na conversão de anos-luz para quilômetro

// 8 Caso o usuário digite uma opção que não seja uma das três, em vez do nome da distâcia e da conversão, deve ser exibido:
// Distância em Anos-luz: <distancia digitada em anos-luz>
// Unidade não identificada: Conversão fora do escopo

const anoLuz = prompt('Digite a unidade de ano luz que deseja converter:')

const listaUnidades = prompt(`Escolha quais unidades abaixo deseja converter ${anoLuz}:\n` +
  '1- Parsec (pc)\n' +
  '2- Unidade astronômica (AU)\n' +
  '3- Quilômetros (km)\n' +
  '\n (Digite o número da opção desejada:)'
)

switch (listaUnidades) {
  case '1':
    const pc = anoLuz / 3.262
    alert(pc.toFixed(4))
    break;
  case '2':
    const au = anoLuz * 63241.1
    alert(au.toFixed(1))
    break;
  case '3':
    const km = anoLuz * 9.5 * Math.pow(10, 12)
    alert(km)
    break;

  default:
    alert('Unidade não identificada: Conversão fora do escopo')
}