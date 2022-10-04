// Clase ciclos o loops

// CICLOS POR CONTEO (una cantidad de veces especificas)
/*
for (desde; hasta; actualización){
    lo que se escriba acá, se ejecutará mientras dure
    el ciclo.
}
ej:


for (let i=0; i<10; i++){ //<-- (++ va a agregar 1)
    console.log (i);
}



// el "i", puede ser reemplazado por una variable, siempre y cuando
// los otros "i" tengan la misma variable

//También podemos hacerlo al revés

for (let i=10; i>0; i--){
    console.log(i);
}


// ciclos condicionales WHILE, DO.. WHILE (siempre que la condición evaluada
// sea verdadera)

//Ejemplo aplicado a tablas de multiplicar

let ingresarNumero = parseInt(prompt("ingresar un número"));
let numeroRepeticones = parseInt(prompt("cuantas veces queres repetir"))

for (let i=1; i<=numeroRepeticones; i++){
    let resultado = ingresarNumero * i;
    alert(`${ingresarNumero} x ${i} = ${resultado}`);
}


//Ejemplo aplicado a turnos 

for (let i=1; i<20; i++){
    let turnos = prompt("ingresá un nombre");
    alert(`turno n° ${i} nombre: ${turnos}`)
}



// sentencia break (interrumpe el ciclo según una condición)
// agregado al código anterior

let numeroIngresado = parseInt(prompt("ingresa un numero"));
let numeroRepeticiones = parseInt(prompt("cuantas veces queres repetir"));

for (let i = 1; i <= numeroRepeticiones; i++){
    let resultado = numeroIngresado * i;

    if(resultado == 54){
        break;
    }

    if (resultado == 12){
        continue;
    }
    console.log(`el numero ${numeroIngresado} x ${i} = ${resultado}`);
}


// podriamos utilizar continue por ejemplo para mostrar productos
// que su precio sea  > $1000

// CICLOS POR CONDICION
// Mientras se cumpla la condición indicada, repite las instrucciones
// que se encuentren dentro del bucle.
// tengo que buscar la manera de salir de la condición, sino
// loop infinito

// ciclo WHILE
// este ciclo puede que nunca llegue a ejecutarse

let entrada = prompt("ingresar un dato");

while(entrada != "voldemort"){
    alert("el usuario ingresó "+ entrada);
    entrada = prompt("ingresar otro dato");
}

// ciclo DO... WHILE
// Con do... while, por lo menos el bloque de código se ejecuta
// una sola vez, debido a que primero interpreta y se evalúa
// al final (es el menos usado)

let repetir = false;

do{
    console.log("solo una vez");
} while(repetir)


//algoritmo que solicita entrada y se detiene cuando NO es un número

let numero = 0;

do{
    numero = prompt("ingresar numero");
    console.log(numero);
}while(parseInt(numero))


// validación de contraseña


let password = 1234;
let dato = parseInt(prompt("cual es la contraseña"));
let intentos = 3;

while((dato != password) && (intentos > 0)){
    alert("contraseña incorrecta, te quedan " + intentos);
    dato = parseInt(prompt("ingresá nuevamente la contraseña"));
    intentos--;
}
}

// otra manera de hacerlo es

let password = 1234;
let dato = parseInt(prompt("cual es la contraseña"));
let intentos = 3;

while(dato != password){
    intentos--;  //<-- tener en cuenta como cambiar la condicion
    alert("contraseña incorrecta, te quedan " + intentos);
    dato = parseInt(prompt("ingresá nuevamente la contraseña"));
    if(intentos == 0){
        alert("te quedaste sin intentos");
        break;
    }
}

*/

// Estructura SWITCH
// Se utiliza para evitar porner else if, else if...

let numero = parseInt(prompt("agregar un numero del 1 al 4:"))

switch (numero){
    case 1:
        alert ("ingresaste 1");
        break;
    case 2:
        alert ("ingresaste 2");
        break;
    case 3:
        alert ("ingresaste 3");
        break;
    case 4:
        alert ("ingresaste 4");
        break;
    default:
        alert("por favor ingresá una opción valida")
        break;
}