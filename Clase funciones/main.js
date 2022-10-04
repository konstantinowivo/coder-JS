/* function nota(){
    let tuNota = parseInt(prompt("cual fue tu nota"));
    if (tuNota > 5){
        alert ("aprobado");
    } else {
        alert ("desaprobado");
}
}

nota() 

Scope "resultado" local


let unNumero = parseInt(prompt("decime un numero plis"));
let otroNumero = parseInt(prompt("otro numero más"));

function sumar(num1, num2){ 
    let resultado = num1 + num2;
    alert(resultado);
}

sumar(unNumero, otroNumero)

Scope "resultado" global


let resultado = "";

function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero ;
}

function mostrar(mensaje){
    console.log(mensaje)
}

sumar(6, 3);
mostrar(resultado);



//Ejemplo calucladora

function sumar(num1, num2){
    let resultado = num1 + num2;
    return(resultado);
}

function restar(num1, num2){
    let resultado = num1 - num2;
    return (resultado);
}

function multiplicar(num1, num2){
    let resultado = num1 * num2;
    return (resultado);
}

function dividir(num1, num2){
    let resultado = num1 % num2;
    return (resultado);
}


let numeroUno = parseInt(prompt("Decime un número"));
let numeroDos = parseInt(prompt("Decime otro número"));
let operación = prompt("que calculo queres hacer");

switch (operación){
    case "+":
        sumar(numeroUno, numeroDos);
        break;
    case "-":
        restar(numeroUno, numeroDos);
        break;
    case "x":
        multiplicar(numeroUno, numeroDos);
        break;
    case "%":
        dividir(numeroUno, numeroDos);
        break;
}


//Otro ejemplo de como hacer la calculadora comnbina function y switch

function calculadora(numeroUno, numeroDos, operación){
    switch (operación) {
        case "+":
            return numeroUno + numeroDos;
            break;
        case "-":
            return numeroUno - numeroDos;
            break;
        default:
            return 0;
            break
    }
}



//Ejemplo para aplicar descuentos en e-commerce

function valorProducto(precio, descuento){
    let valorDescuento = precio * descuento /100;
    let valorFinal = precio - valorDescuento;
    return valorFinal
}

// Ejemplo funcion dentro de otra funcion

function productoNuevo(){
    let precioLista = parseInt(prompt("cual es el precio del producto"));
    let descuento = parseInt(prompt("cual es el descuento a aplicar"));
    return valorProducto(precioLista, descuento);
}

console.log(productoNuevo());


// Ejemplos de variables locales y globales
// El ambito de una variable es llamado "scope"

// variable LOCAL se crean y se usan siempre en las funciones

// variable GLOBAL se definen por fuerta de las funciones
// y se pueden usar en cualquier parte del código. 

let nombre = "john doe" // variable global

function saludar(){
    let nombre = "juan coder" // variable local
    console.log(nombre)
}

//aca accedemos a la global
console.log(nombre) // --> "john doe"

//accedes a la local o la que diga la funcion
saludar() //osea juan coder.


// Funciones anonimas (se asignan a variables)

const suma = function (a, b) { return a + b }
const resta = function (a, b) { return a - b}

console.log( suma(14, 20));
console.log ( resta(15, 5));


// Funciones flecha (funciones anónimas de sintaxis simplificada,
// a partir de ES6)
const suma = (a, b) => {return a + b }

// pero se puede simplificar un poco más(el return queda implicito)

const resta = (a, b) => a - b;
console.log (suma(5,6));
console.log (resta(5,4));

// con un solo parametro no necesitamos ()
// ejemplo para calcular precio


const suma = (a,b) => a + b
const resta = (a,b) => a - b

const iva = x => x * 0.21
let precioProducto = 50;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
console.log(nuevoPrecio);

*/
