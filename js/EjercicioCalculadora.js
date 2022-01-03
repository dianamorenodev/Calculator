
/* SUMA */
function suma(num1 , num2){
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    resul = num1 + num2;
    return document.getElementById('resultadoo').innerHTML = "La suma es: " + resul;
}

/* RESTA */
function resta(num1 , num2){
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    resul =num1 - num2;
    return document.getElementById('resultadoo').innerHTML = "La resta es: " + resul;
}

/* MULTIPLICACION */
function multi(num1 , num2){
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    return document.getElementById('resultadoo').innerHTML = "La multiplicacion es: " + num1 * num2;
}

/* DIVISION */
function divi(num1 , num2){
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    if(num1 == 0){
        alert("Error: Usted dividió entre 0")
    }
    else{
    return document.getElementById('resultadoo').innerHTML = "La division es: " + (num1/num2).toFixed(3);
}
}
