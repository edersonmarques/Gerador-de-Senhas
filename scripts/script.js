import { getRandomInt, passGenerate } from './passGenerate.js';

let passphrase = document.getElementById("pass"), generate_button = document.getElementById("generate_button"), copy_button = document.getElementById("copy_button"), pass_text = document.getElementById("pass_text");

generate_button.addEventListener('click', showPass);
copy_button.addEventListener('click', copyPass);


function showPass() {
    pass_text.innerHTML = `A senha gerada é: `;
    passphrase.innerHTML = `${passGenerate()}`;
}

function copyPass() {
    navigator.clipboard.writeText(passphrase.innerText);
}

export {pass_text};