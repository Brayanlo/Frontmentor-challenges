const ingresoTexto = document.querySelector('.ingreso__texto');
const salidaTexto = document.querySelector('.resultado__texto');
var btnCopy = document.getElementById('copy').style.visibility = 'hidden'; // Esconde el boton
var parraFound = document.getElementById('parrafo__found').style.visibility = 'hidden';

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar(){

    if(ingresoTexto.value == ''){
        salidaTexto.style.backgroundImage = 'url(./images/Muñeco.svg)';
        salidaTexto.style.backgroundRepeat = 'no-repeat'
        salidaTexto.style.backgroundPosition = '0% 20%'
        btnCopy = document.getElementById('copy').style.visibility = 'hidden';
        parraFound = document.getElementById('parrafo__found').style.visibility = 'visible';
        salidaTexto.value = '';
    }else{
        const textoEncriptado = encriptar(ingresoTexto.value);
        salidaTexto.value = textoEncriptado;
        salidaTexto.style.backgroundImage = 'none';
        parraFound = document.getElementById('parrafo__found').style.visibility = 'hidden';
        btnCopy = document.getElementById('copy').style.visibility = 'visible';
        ingresoTexto.value = '';

    }
}

function btnDesencriptar(){

    if(ingresoTexto.value == ''){
        salidaTexto.style.backgroundImage = 'url(./images/Muñeco.svg)';
        salidaTexto.style.backgroundRepeat = 'no-repeat'
        salidaTexto.style.backgroundPosition = '0% 20%'
        btnCopy = document.getElementById('copy').style.visibility = 'hidden';
        parraFound = document.getElementById('parrafo__found').style.visibility = 'visible';
        salidaTexto.value = '';
    }else{
        const textoDesencriptado = desencriptar(ingresoTexto.value);
        salidaTexto.value = textoDesencriptado;
        salidaTexto.style.backgroundImage = 'none';
        parraFound = document.getElementById('parrafo__found').style.visibility = 'hidden';
        btnCopy = document.getElementById('copy').style.visibility = 'visible';
        ingresoTexto.value = '';

    }
}

function btnCopiar(){
    salidaTexto.select();
    navigator.clipboard.writeText(salidaTexto.value);
    salidaTexto.value = '';
    alert('TEXTO COPIADO')
}

function encriptar (srtEncriptar){
    var cadenaEncriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    srtEncriptar = srtEncriptar.toLowerCase();

    for(let i = 0; i < cadenaEncriptar.length; i++){
        if(srtEncriptar.includes(cadenaEncriptar[i][0])){
            srtEncriptar = srtEncriptar.replaceAll(cadenaEncriptar[i][0], cadenaEncriptar[i][1])
        }
    }
    return srtEncriptar;
}

function desencriptar (srtDesencriptar){
    var cadenaDesencriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    srtDesencriptar = srtDesencriptar.toLowerCase();

    for(let i = 0; i < cadenaDesencriptar.length; i++){
        if(srtDesencriptar.includes(cadenaDesencriptar[i][0])){
            srtDesencriptar = srtDesencriptar.replaceAll(cadenaDesencriptar[i][1], cadenaDesencriptar[i][0])
        }
    }
    return srtDesencriptar;
}