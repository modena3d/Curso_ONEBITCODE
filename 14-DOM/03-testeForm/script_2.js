// # 14 - Exercício 12

// ## Cadastro de Devs

// Construa uma página web que permita cadastrar desenvolvedores, suas
// tecnologias e tempos de experiência.

// - A página deve ter um input para o nome completo do desenvolvedor e um botão
// para adicionar uma nova tecnologia.
// - Ao clicar no botão um evento deve ser disparado criando no formulário uma nova
// linha de inputs contendo:
//     - um campo de texto para o nome da tecnologia
//     - um grupo de botões tipo “radio” com opções de tempo de experiência
//     (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
//     - um botão de remover que deve excluir essa linha.
// - O formulário também deve ter um botão de cadastrar que salva as informações
// do dev em um array e limpa o formulário. Para testar o funcionamento você pode
// utilizar um simples console.log()

// Para esse exercício você deve utilizar apenas eventos adicionados via javascript
//  e a página deve funcionar sem acionar um recarregamento.

const btnAdd = document.getElementById("btnAddNewTec");
const ulList = document.getElementById("ulList");
let developers = [];
let tecnologias = [];
// console.log(list);
let id = 0;

//---------ADD tecnologias---------------//
btnAdd.addEventListener("click", function () {
  const li = document.createElement("li");
  li.id = "id-" + id++;
  li.innerText = "Nome: ";
  ulList.appendChild(li);
  const inputLinguagens = document.createElement("input");
  inputLinguagens.id = li.id;
  li.appendChild(inputLinguagens);
  const btnRadio1 = document.createElement("input");
  const LbParagraf1 = document.createElement("label");
  const LabelRadio1 = document.createElement("label");
  LbParagraf1.innerText = " Experiência: ";
  LabelRadio1.innerText = "0-2 anos";
  btnRadio1.type = "radio";
  btnRadio1.name = "xp" + id;
  LabelRadio1.htmlFor = "xp1_" + id;
  btnRadio1.id = "xp1_" + id;
  li.appendChild(LbParagraf1);
  li.appendChild(btnRadio1);
  li.appendChild(LabelRadio1);
  const btnRadio2 = document.createElement("input");
  const LabelRadio2 = document.createElement("label");
  LabelRadio2.innerText = "3-4 anos";
  btnRadio2.type = "radio";
  btnRadio2.name = "xp" + id;
  LabelRadio2.htmlFor = "xp2_" + id;
  btnRadio2.id = "xp2_" + id;
  li.appendChild(btnRadio2);
  li.appendChild(LabelRadio2);
  const btnRadio3 = document.createElement("input");
  const LabelRadio3 = document.createElement("label");
  LabelRadio3.innerText = "5+ anos ";
  btnRadio3.type = "radio";
  btnRadio3.name = "xp" + id;
  LabelRadio3.htmlFor = "xp3_" + id;
  btnRadio3.id = "xp3_" + id;
  li.appendChild(btnRadio3);
  li.appendChild(LabelRadio3);
  const btnRemover = document.createElement("button");
  btnRemover.innerText = "Remover";
  btnRemover.id = "btnDel_";
  btnRemover.addEventListener("click", function () {
    li.remove();
    if (tecnologias.length > 0) {
      tecnologias.pop();
      console.log(tecnologias);
    } else {
      console.log(tecnologias.length);
    }
  });
  li.appendChild(btnRemover);
  const br = document.createElement("br");
  br.innerHTML = "<br>";
  li.appendChild(br);
  // developers.push(li)
});
//------------------------------------------------------------------//
//------------------------------------------------------------------//
//------------------------------------------------------------------//
//------------------------------------------------------------------//
//---------CADASTRO---------------//
const btnCadastrar = document.getElementById("btnCadastrar");
//---------BTN CADASTRAR---------------//
btnCadastrar.addEventListener("click", function (eve) {
  eve.preventDefault();
  // dev = {} ---> push(tecnologias = [])---->push(infs = {})
  let dev = {};
  dev.tecnologias = [];
  let infs = {};
  const nome = document.getElementById("nome").value;
  const getAllLis = document.querySelectorAll("li");
  //-----Verifica se o campo Nome Completo foi preenchido---------------------------////////
  if (nome.length > 0) {//verifica se o nome está preenchido
    dev.nome = nome;
    verificadorInputTecs(getAllLis, dev, infs)
    verifInputRadios(getAllLis, dev, infs)
  } else {
    alert("Por favor, preencha o Nome Completo...");
  }
});

function verificadorInputTecs(getAllLis, dev, infs) {
  getAllLis.forEach((li) => {
    // Converte para array e busca todos os inputs
    const firstInput = Array.from(li.getElementsByTagName("input"));
    if (firstInput[0]) {// first input
      // console.log('FirstInput: ', firstInput[0]);
      let name = firstInput[0].value;
      let newInfs = { ...infs };  // ou `Object.assign({}, infs)`
      newInfs.nome = name;
      dev.tecnologias.push(newInfs);
      // console.log('Point: ', dev);
    }
  });
}

function verifInputRadios(getAllLis, dev, infs) {
  getAllLis.forEach((li) => {
    const checks = li.querySelectorAll('input[type="radio"]')
    console.log(checks);
    const checkedRadio = Array.from(checks).find(radio => radio.checked);
    if (checkedRadio) {
      console.log("Um rádio está marcado:", checkedRadio.value);
    } else {
      console.log("Nenhum rádio está marcado nesta <li>.");
    }
  })
}

// [{name: Jose Nobrega,
//   tecnologias:[{name:JS, exp: 0-anos}]
// }]

// dev.name
// tecnologias = []
// infs = {}