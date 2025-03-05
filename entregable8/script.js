document.addEventListener("DOMContentLoaded", () => {
    const password = document.getElementById("password");
    const copyBtn = document.getElementById("btn-copy");

    const characterValue = document.querySelector("#character-value");
    const rangePassword = document.querySelector("#range-password");

    const checkbox1 = document.getElementById("checkbox-1");
    const checkbox2 = document.getElementById("checkbox-2");
    const checkbox3 = document.getElementById("checkbox-3");
    const checkbox4 = document.getElementById("checkbox-4");

    const passwordLevel = document.getElementById("password-level");
    const level1 = document.getElementById("level-1");
    const level2 = document.getElementById("level-2");
    const level3 = document.getElementById("level-3");
    const level4 = document.getElementById("level-4");

    const generateButton = document.getElementById("btn-generate");

    let isChecked1 = false;
    let isChecked2 = false;
    let isChecked3 = false;
    let isChecked4 = false;

    rangePassword.addEventListener("input", (e) => {
        characterValue.textContent = e.target.value;
    });

    checkbox1.addEventListener("change", (e) => {
        isChecked1 = checkbox1.checked;
        console.log(isChecked1);
    });

    checkbox2.addEventListener("change", (e) => {
        isChecked2 = checkbox2.checked;
    });

    checkbox3.addEventListener("change", (e) => {
        isChecked3 = checkbox3.checked;
    });

    checkbox4.addEventListener("change", (e) => {
        isChecked4 = checkbox4.checked;
    });

    copyBtn.addEventListener("click", () => {
        //password.innerHTML = "hola";
        if(password.innerText !== ""){
            navigator.clipboard.writeText(password.innerText);
            console.log(password.innerText);
            alert("Password copiado");
        }
    });

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '"', ',', '.', '<', '>', '/', '?', '\\', '|', '`', '~'];

    const generatePassword = () => {
        level1.style.backgroundColor = "black";
        level1.style.borderColor = "white";
        level2.style.backgroundColor = "black";
        level2.style.borderColor = "white";
        level3.style.backgroundColor = "black";
        level3.style.borderColor = "white";
        level4.style.backgroundColor = "black";
        level4.style.borderColor = "white";

        const tam = parseInt(characterValue.textContent);
        if(tam == 0) return;
        
        // mayusculas
        if(isChecked1 && isChecked2 == false && isChecked3 == false && isChecked4 == false){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos = Math.floor(Math.random() * letters.length);

                pass += (letters[pos]).toUpperCase();
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass;
            passwordLevel.innerHTML = "LOW";
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
        }

        //minusculas
        if(isChecked1 == false && isChecked2 == true && isChecked3 == false && isChecked4 == false){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos = Math.floor(Math.random() * letters.length);

                pass += letters[pos];
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass;
            passwordLevel.innerHTML = "LOW";
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
        }
        
        //numeros
        if(isChecked1 == false && isChecked2 == false && isChecked3 == true && isChecked4 == false){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos = Math.floor(Math.random() * tam);

                pass += pos;
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass;
            passwordLevel.innerHTML = "LOW";
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
        }

        //simbolos
        if(isChecked1 == false && isChecked2 == false && isChecked3 == false && isChecked4 == true){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos = Math.floor(Math.random() * symbols.length);

                pass += symbols[pos];
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass;
            passwordLevel.innerHTML = "LOW";
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
        }

        // mayusculas - minusculas
        if(isChecked1 && isChecked2 && isChecked3 == false && isChecked4 == false){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * letters.length);
                const pos2 = Math.floor(Math.random() * letters.length);

                pass += (letters[pos1]).toUpperCase();
                pass += letters[pos2];
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            passwordLevel.innerHTML = "LOW";
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
        }

        // mayusculas - numeros
        if(isChecked1 && isChecked2 == false && isChecked3 && isChecked4 == false){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * letters.length);
                const pos2 = Math.floor(Math.random() * tam);

                pass += (letters[pos1]).toUpperCase();
                pass += pos2;
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            passwordLevel.innerHTML = "LOW";
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
        }
        
        // mayusculas - simbolos
        if(isChecked1 && isChecked2 == false && isChecked3 == false && isChecked4){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * letters.length);
                const pos2 = Math.floor(Math.random() * symbols.length);

                pass += (letters[pos1]).toUpperCase();
                pass += symbols[pos2];
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            passwordLevel.innerHTML = "LOW";
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
        }

        // minusculas - numeros
        if(isChecked1 == false && isChecked2 && isChecked3 && isChecked4 == false){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * letters.length);
                const pos2 = Math.floor(Math.random() * tam);

                pass += letters[pos1];
                pass += pos2;
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            passwordLevel.innerHTML = "LOW";
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
        }

        // minusculas - simbolos
        if(isChecked1 == false && isChecked2 && isChecked3 == false && isChecked4){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * letters.length);
                const pos2 = Math.floor(Math.random() * symbols.length);

                pass += letters[pos1];
                pass += symbols[pos2];
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            passwordLevel.innerHTML = "LOW";
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
        }

        // numeros - simbolos
        if(isChecked1 == false && isChecked2 == false && isChecked3 && isChecked4){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * tam);
                const pos2 = Math.floor(Math.random() * symbols.length);

                pass += pos1;
                pass += symbols[pos2];
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            passwordLevel.innerHTML = "LOW";
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
        }

        // mayusculas - minusculas - numeros
        if(isChecked1 && isChecked2 && isChecked3 && isChecked4 == false){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * letters.length);
                const pos2 = Math.floor(Math.random() * letters.length);
                const pos3 = Math.floor(Math.random() * tam);

                pass += (letters[pos1]).toUpperCase();
                pass += letters[pos2];
                pass += pos3;
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";

            if(tam >= 10){
                passwordLevel.innerHTML = "MEDIUM";
                level2.style.backgroundColor = "yellow";
                level2.style.borderColor = "yellow";
                level3.style.backgroundColor = "yellow";
                level3.style.borderColor = "yellow";
            } else {
                passwordLevel.innerHTML = "LOW";
            }
        }

        // mayusculas - minusculas - simbolos
        if(isChecked1 && isChecked2 && isChecked3 == false && isChecked4){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * letters.length);
                const pos2 = Math.floor(Math.random() * letters.length);
                const pos3 = Math.floor(Math.random() * symbols.length);

                pass += (letters[pos1]).toUpperCase();
                pass += letters[pos2];
                pass += symbols[pos3];
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";

            if(tam >= 10){
                passwordLevel.innerHTML = "MEDIUM";
                level2.style.backgroundColor = "yellow";
                level2.style.borderColor = "yellow";
                level3.style.backgroundColor = "yellow";
                level3.style.borderColor = "yellow";
            } else {
                passwordLevel.innerHTML = "LOW";
            }
        }

        // mayusculas - numeros - simbolos
        if(isChecked1 && isChecked2 == false && isChecked3 && isChecked4){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * letters.length);
                const pos2 = Math.floor(Math.random() * tam);
                const pos3 = Math.floor(Math.random() * symbols.length);

                pass += (letters[pos1]).toUpperCase();
                pass += pos2;
                pass += symbols[pos3];
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";

            if(tam >= 10){
                passwordLevel.innerHTML = "MEDIUM";
                level2.style.backgroundColor = "yellow";
                level2.style.borderColor = "yellow";
                level3.style.backgroundColor = "yellow";
                level3.style.borderColor = "yellow";
            } else {
                passwordLevel.innerHTML = "LOW";
            }
        }

        // minusculas - numeros - simbolos
        if(isChecked1 == false && isChecked2 && isChecked3 && isChecked4){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * letters.length);
                const pos2 = Math.floor(Math.random() * tam);
                const pos3 = Math.floor(Math.random() * symbols.length);

                pass += letters[pos1];
                pass += pos2;
                pass += symbols[pos3];
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";

            if(tam >= 10){
                passwordLevel.innerHTML = "MEDIUM";
                level2.style.backgroundColor = "yellow";
                level2.style.borderColor = "yellow";
                level3.style.backgroundColor = "yellow";
                level3.style.borderColor = "yellow";
            } else {
                passwordLevel.innerHTML = "LOW";
            }
        }

        // mayusculas - minusculas - numeros - simbolos
        if(isChecked1 && isChecked2 && isChecked3 && isChecked4){
            let pass = "";
            for(let i=0; i<tam; i++){
                const pos1 = Math.floor(Math.random() * letters.length);
                const pos2 = Math.floor(Math.random() * letters.length);
                const pos3 = Math.floor(Math.random() * tam);
                const pos4 = Math.floor(Math.random() * symbols.length);

                pass += (letters[pos1]).toUpperCase();
                pass += letters[pos2];
                pass += pos3;
                pass += symbols[pos4];
            }
            passwordLevel.style.display = "block";
            password.innerHTML = pass.slice(0, tam);
            level1.style.backgroundColor = "yellow";
            level1.style.borderColor = "yellow";
            level2.style.backgroundColor = "yellow";
            level2.style.borderColor = "yellow";
            level3.style.backgroundColor = "yellow";
            level3.style.borderColor = "yellow";

            if(tam > 15){
                passwordLevel.innerHTML = "HIGH";
                level4.style.backgroundColor = "yellow";
                level4.style.borderColor = "yellow";
            } else if(tam >= 10 && tam <= 15){
                passwordLevel.innerHTML = "MEDIUM";
            }
            else {
                passwordLevel.innerHTML = "LOW";
                level2.style.backgroundColor = "black";
                level2.style.borderColor = "white";
                level3.style.backgroundColor = "black";
                level3.style.borderColor = "white";
                level4.style.backgroundColor = "black";
                level4.style.borderColor = "white";
            }
        }
    }

    generateButton.addEventListener("click", () => {
        generatePassword();
    });
})