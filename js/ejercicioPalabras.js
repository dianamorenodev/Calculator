
/* LONGITUD */
function longitud() {
    let contenido = document.getElementById("texto").value;
    let longitud = contenido.length;
    return document.getElementById("resultado").innerHTML = ("La cantidad de caracteres es: " + longitud);
}

/* MAYUSCULAS */
function mayus() {
    let contenido = document.getElementById("texto").value;
    let mayus = contenido.toUpperCase();
    return document.getElementById("resultado").innerHTML = ("La palabra en mayusculas es: " + mayus);
}

/* MINUSCULAS */
function minus() {
    let contenido = document.getElementById("texto").value;
    let minus = contenido.toLowerCase();
    return document.getElementById("resultado").innerHTML = ("La palabra en minusculas es: " + minus);
}
