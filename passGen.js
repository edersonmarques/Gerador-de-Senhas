function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

function passGen() {
    const [numbers, upper, lower, specials] = [true, true, true, true];
    const pass_size = 20;
    let pass = "";
    const allowed = [];
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
    for (let count = 0; count < pass_size; count ++) {
        pass += allowed[getRandomInt(0, 67)];
    }
    console.log(pass);
    return pass;
}

export {getRandomInt, passGen};