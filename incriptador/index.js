const ingresoTexto = document.querySelector('.ingreso__texto');
const salidaTexto = document.querySelector('.resultado__texto')

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar(){
    const textoEncriptado = encriptar(ingresoTexto.value);
    salidaTexto.value = textoEncriptado;
    salidaTexto.style.backgroundImage = 'none';
    ingresoTexto.value = "";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(ingresoTexto.value);
    salidaTexto.value = textoDesencriptado;
    salidaTexto.style.backgroundImage = 'none';
    ingresoTexto.value = "";
}

function btnCopiar(){
    salidaTexto.select(); // selecciona la variable o lo que va a copiar
    navigator.clipboard.writeText(salidaTexto.value); // Copia y lo guarda en el portapapaeles del navegar (parametros a copiar y guardar)
    salidaTexto.value = ""; // Limpia el Textarea
    alert('texto copiado')

}

function encriptar(stringEncriptar){
    // Cracion de matriz de las letras encriptadas
    let letraEnciptadas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringEncriptar = stringEncriptar.toLowerCase() // Pasar todo a minuscula
    // bucle for que busca las letras que considan con letrasEmcriptadas
    for(let i = 0; i < letraEnciptadas.length; i++){
        if(stringEncriptar.includes(letraEnciptadas[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(letraEnciptadas[i][0], letraEnciptadas[i][1]);
        }
    }
    return stringEncriptar;
}

function desencriptar(stringDesencriptar){
    let letraEncriptada = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < letraEncriptada.length; i++){
        if(stringDesencriptar.includes(letraEncriptada[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(letraEncriptada[i][1], letraEncriptada[i][0]);
        }
    }
    return stringDesencriptar;
}
