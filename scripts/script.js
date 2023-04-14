import { getRandomInt, passGenerate } from './passGenerate.js';

let passphrase = document.getElementById("pass"), generate_button = document.getElementById("generate_button"), copy_button = document.getElementById("copy_button"), pass_text = document.getElementById("pass_text");

const showPass = () => {
    pass_text.innerHTML = `A senha gerada é: `;
    passphrase.innerHTML = `${passGenerate()}`;
}

const copyPass = () => navigator.clipboard.writeText(passphrase.innerText);


generate_button.addEventListener('click', showPass);
copy_button.addEventListener('click', copyPass);



export {pass_text};