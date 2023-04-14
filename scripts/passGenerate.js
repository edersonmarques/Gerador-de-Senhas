import { pass_text } from "./script.js";
import getRandomInt from "./getRandomInt.js";

function passGenerate() {
    const [numbers, upper, lower, specials] = [document.getElementById("numbers").checked, document.getElementById("upper").checked, document.getElementById("lower").checked, document.getElementById("specials").checked];
    
    const pass_size = document.getElementById("pass_size").value;
    let pass = "";
    const allowed = [];
    
    if (pass_size >= 8 && pass_size <= 20) { 
        if (numbers) {
            for (let code = 48; code < 58; code ++ ) {
                allowed.push(String.fromCharCode(code));
            }
        }
        
        if (upper) {
            for (let code = 65; code < 91; code ++) {
                allowed.push(String.fromCharCode(code));
            }
        }

        if (lower) {
            for (let code = 97; code < 123; code ++) {
                allowed.push(String.fromCharCode(code));
            }
        }

        if (specials) {
            allowed.push('@', '$', '*', '-', '/', '%');
        }
        if ((numbers || upper || lower || specials)) {
            for (let count = 0; count < pass_size; count ++) {
                pass += allowed[getRandomInt(0, allowed.length - 1)];
            }
        } else {
            pass_text.innerText = "Por favor selecione pelo menos uma das opções.";
        }
        
    } else {
        pass_text.innerText = "O tamanho da senha deve ser maior ou igual a 8, ou menor ou igual a 20.";
    }
    return pass;
}

export {getRandomInt, passGenerate};