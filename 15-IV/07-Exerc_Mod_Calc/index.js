// ### Modularizando uma Aplicação

// Para esse exercício você irá utilizar o código do projeto **Calc.js**, 
// desenvolvido nas aulas Projeto Prático Guiado do módulo anterior,
// **Javascript II - DOM**. Você deverá modularizar o código javascript da aplicação,
//  dividindo o conteúdo do arquivo index.js em diferentes módulos utilizando a sintaxe 
//   ES Modules. Seu projeto deve conter **pelo menos 3 módulos**.

// Caso você não tenha os arquivos do projeto Calc.js você poderá baixá-los na aba de 
// materiais dessa aula.
import calculate from "./calculate.js";
import { copyToClipboard } from "./copyToClipboard.js";
import { clear, keydown } from "./events.js";
import themeSwitcher from "./themeSwitcher.js";

const input = document.getElementById("input")

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.number.value
    input.value += value
  })
})

document.getElementById("clear").addEventListener("click", clear)

input.addEventListener("keydown", keydown)

document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)