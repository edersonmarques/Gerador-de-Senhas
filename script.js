import { getRandomInt, passGen } from './passGen.js';

let passphrase = document.getElementById("pass");

passphrase.innerHTML = passGen();