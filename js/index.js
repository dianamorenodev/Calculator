/* BOTON PALABRAS */

function palabras(){
    principal = document.getElementsByClassName("ejercicioPalabras")[0];
    principal.style.display = "flex";
    segundo = document.getElementsByClassName("Calculadora")[0];
    segundo.style.display = "none";
    tercero = document.getElementsByClassName("imagenContenido")[0];
    tercero.style.display = "none";
    cuarto = document.getElementsByClassName("inicio")[0];
    cuarto.style.display = "none";
}

/* BOTON CALCULADORA */

function calculadora(){
    principal = document.getElementsByClassName("Calculadora")[0];
    principal.style.display = "flex";
    segundo = document.getElementsByClassName("ejercicioPalabras")[0];
    segundo.style.display = "none";
    tercero = document.getElementsByClassName("imagenContenido")[0];
    tercero.style.display = "none";
    cuarto = document.getElementsByClassName("inicio")[0];
    cuarto.style.display = "none";
}

/* BOTON IMAGEN */

function imagen(){
    principal = document.getElementsByClassName("imagenContenido")[0];
    principal.style.display = "flex";
    segundo = document.getElementsByClassName("ejercicioPalabras")[0];
    segundo.style.display = "none";
    tercero = document.getElementsByClassName("Calculadora")[0];
    tercero.style.display = "none";
    cuarto = document.getElementsByClassName("inicio")[0];
    cuarto.style.display = "none";
}