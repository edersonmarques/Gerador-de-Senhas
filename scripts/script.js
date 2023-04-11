import { getRandomInt, passGen } from './passGen.js';

let passphrase = document.getElementById("pass");
let botao_gerar = document.getElementById("gen");

botao_gerar.addEventListener('click', showPass);

function showPass() {
    passphrase.innerHTML = `A senha gerada é: ${passGen()}`;
}

