// Abstracción - abstracción de valores
/*
let total = 0;
for(let i=0; i < 10; i++){
    total += i;
    console.log(total);
} 

//vemos esa operación y nos resulta sencillo de leer
// pero que pasa si la agregamos una función al código?

function sumarRango(start, end){
    let total = 0;
    for(let i=start; i < end; i++){
    total += i;
    }
    return total;
}  

sumarRango(2, 5);

// Abstracción de acciones
// funciones de orden superior

// existen dos tipos de funciones de ordenes superior
// 1) Retorna una función como parámetro ej: function fn() {return funcion}
function mayorQue(n){
    //quiero que evalue si un numero es mayor a m
    return (m) => m > n;
}

let mayorQueDiez = mayorQue(10); //<--- vamos a comprar un numero para ver si es mayor que el parametro n, en este caso 10
let mayorQueCien = mayorQue(100); //<--- en este caso vamos a comprarlo con 100
console.log(mayorQueDiez(20));//true //<-- y luego pasamos parametros en para compararlos con nuetro dato n
console.log(mayorQueCien(20));//false

//otro ejemplo
function asignarOperacion(op){
    if(op == "sumar"){
        return (a, b) => a + b
    } else if (op = "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar");
let resta = asignarOperacion("restar");

console.log(suma(4, 5))
console.log(resta(67, 9))


// 2) Que recibe una función como parámetro ej: function fn(function) {}

function porCadaUno (array, funcion){
    for(const elemento of array) {
        funcion(elemento);
    }
}

let numeros = [5,8,20,44];

let total = 0;

function acumular(num){
    total += num; // es lo mismo que total = total + num
    console.log(total);
}

porCadaUno(numeros, acumular); // en este caso seria funcion(array, funcion)

const dobles = [];

porCadaUno(numeros, (elemento) => {dobles.push(elemento*2)}) //<--- en este caso nos va a brindar los elementos del array x 2

console.log(dobles);
*/

let listaProductos = [
    {nombre: "televisor", precio: 2000},
    {nombre: "ventilador", precio: 200},
    {nombre: "escritorio", precio: 1000},
]

// metodo foreach para recorrer nuestro array y luego va a ejecutar una función
// es un método mas agil que forOf por ejemplo

/*
listaProductos.forEach(producto => {
    console.log(`este producto ${producto.nombre} y cuesta ${producto.precio}`)
})



// ahora vemos el ejemplo de arriba aplicado a un carrito de compras

let totalCarrito = 0;
listaProductos.forEach(producto => {
    console.log(`has sumado ${producto.nombre}, precio ${producto.precio} `)
    totalCarrito += producto.precio;
    console.log(totalCarrito);
})

58:19
*/
