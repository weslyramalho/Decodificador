
function exibir(texto) {
    let campo = document.getElementById('textotraduzi');
    campo.innerHTML = texto;
}

function resetar(){
    let campo = document.getElementById('textoMensag');
    campo.innerHTML = ""
    let imag = document.getElementById('imagenresp');
    imag.style.display= "none"
}

let dicionario = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}



function criptografar() {
    resetar();
    let texto = document.querySelector('textarea').value;
    let novotexto = "";
    for (let i = 0; i < texto.length; i++)
    if (dicionario[texto[i].toLowerCase()]){
        novotexto += dicionario[texto[i]];
        } else {
            novotexto+= texto[i]
        }
    document.getElementById('copiar').removeAttribute('disabled')
    exibir(novotexto);


}

function descriptografar(){
    resetar();
    let text = document.querySelector('textarea').value;
   let novo = text.replace(/enter|imes|ai|ober|ufat/gi, function(letra) {
    switch(letra) {
        case 'enter': return 'e';
        case 'imes': return 'i';
        case 'ai': return 'a';
        case 'ober': return 'o';
        case 'ufat': return 'u';
    }
    
   });
   exibir(novo)
}

async function copiar() {
    let text = document.getElementById('textotraduzi').textContent;
   await navigator.clipboard.writeText(text)
    }

  
