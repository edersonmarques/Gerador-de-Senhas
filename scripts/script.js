import { getRandomInt, passGenerate } from './passGenerate.js';

let passphrase = document.getElementById("pass"), generate_button = document.getElementById("generate_button"), copy_button = document.getElementById("copy_button"), pass_text = document.getElementById("pass_text"), infoPassLength = document.querySelector('label[for="pass_size_range"]'), pass_size_range = document.getElementById("pass_size_range");

infoPassLength.innerHTML = document.getElementById("pass_size_range").value;

const showPass = () => {
    passphrase.value = `${passGenerate()}`;
}

const copyPass = () => navigator.clipboard.writeText(passphrase.value);

generate_button.addEventListener('click', showPass);
copy_button.addEventListener('click', copyPass);
pass_size_range.addEventListener("change", () => {
    infoPassLength.innerHTML = document.getElementById("pass_size_range").value;
});

export {pass_text};