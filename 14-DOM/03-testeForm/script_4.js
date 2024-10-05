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
let tecs = [];
// console.log(list);
let id = 0;

//---------ADD TECS---------------//
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
    if (tecs.length > 0) {
      tecs.pop();
      console.log(tecs);
    } else {
      console.log(tecs.length);
    }
  });
  li.appendChild(btnRemover);
  const br = document.createElement("br");
  br.innerHTML = "<br>";
  li.appendChild(br);
  // developers.push(li)
});

//---------CADASTRO---------------//
const btnCadastrar = document.getElementById("btnCadastrar");
btnCadastrar.addEventListener("click", function (eve) {
  eve.preventDefault();
  let dev = {};
  dev.tecs = [];
  dev.xp = [];
  const nome = document.getElementById("nome").value;
  let count = 0;
  let tecsSize;
  let groupRadio;
  const listTecs = document.querySelectorAll("li");
  console.log(listTecs);
  let fullNameOk = false;
  let fullTecksOk = false;
  let fullChecksOk = false;
  //-----Verifica se o campo Nome Completo foi preenchido---------------------------////////
  if (nome.length > 0) {
    dev.nome = nome;
    dev.tecs[count++];
    dev.xp[count++];
    fullNameOk = true;
    //-----push Dev.tecs names---------------------------////////
    listTecs.forEach((li) => {
      const arrayLi = Array.from(li.getElementsByTagName("input"));
      if (arrayLi[0]) {
        const name = arrayLi[0].value;
        console.log(name);
        dev.tecs.push(name);
      }
    });
    tecsSize = dev.tecs;
    xpSize = dev.xp;
    const li = document.getElementsByTagName("li");
    //-----Verifica se li das tecs existem---------------------------////////
    if (li.length > 0) {
      //-----Verifica se as Li estao preenchidas---------------------------////////
      for (let i = 0; i < tecsSize.length; i++) {
        if (tecsSize[i].length === 0) {
          alert("Por favor, preencha o Nome da tecnologia...");
          break;
        } else {
          fullTecksOk = true;
        }
      }
      //----Verifica se as os Radios e um push dev.xp------------------------////////
      listTecs.forEach((li) => {
        groupRadio = Array.from(li.querySelectorAll('li input[type="radio"]'));
        const isAnyChecked = groupRadio.some((radio) => radio.checked);
        groupRadio.filter((radio, index) => {
          if (radio.checked) {
            const label = li.getElementsByTagName("label");
            console.log(label[index + 1].innerText);
            dev.xp.push(label[index + 1].innerText);
          }
        });
        if (!isAnyChecked) {
          const inputName = li.getElementsByTagName("input");
          fullChecksOk = false;
          alert(
            `Selecione o tempo de experiência da(s) tecnologia(s): ${inputName[0].value}`
          );
        } else {
          fullChecksOk = true;
        }
      });
    } else {
      fullTecksOk = false;
      alert("Por favor, adicione uma experiencia...");
    }
  } else {
    fullNameOk = false;
    alert("Por favor, preencha o Nome Completo...");
  }
  if (fullNameOk && fullTecksOk && fullChecksOk) {
    developers.push(dev);
    console.log("Final: ", developers);
    fullNameOk = false;
    fullTecksOk = false;
    fullChecksOk = false;
  }
});

function verificadorInputTecs(listTecs) {}
