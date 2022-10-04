// Clase arrays
//  Son una colección de objetos, dentro de la misma variable
/*

// Definimos un array
// siempre el primer elemento del array está en posición "0"

let lista = ["texto", "otro texto", 2, 3, true, false, 
{nombre: "pillin", apellido: "garcía", edad: 43}, ["a", "b"]];

console.log(lista);
console.log(lista[2]); //<--- de esta manera accedemos al indice
console.log(lista[5].nombre); //<--- a un valor dentro de un objeto dentro de un array
console.log(lista[6][0]); //<--- de esta manera a un valor de un array dentro de un array

// para iterar nuestro array, es decir repasarlo para poder modificar estos valores
console.log(lista.length)

for (let i = 0; i < lista.length; i++){ //<--- no siempre vamos a saber el largo de nuestro array, 
    console.log(lista[i]);              //     con la propiedad length
}
*/


//  Que podemos hacer con un array?
let listaSuper = ["leche", "pan", "huevos", "fideos", "aceite"];
console.log(listaSuper);

// Metodos para agregar elemento nuevo al array


// "push" (agrega al final del array)


listaSuper.push("flautita")
console.log(listaSuper);

// "unshift" (agrega al principio del array) (modifica el elemento 0)


listaSuper.unshift("harina");
console.log(listaSuper);


// Metodos para sacar elementos del array


// "shift" (elmina el primer elemento del array) (modifica el elemento 0)


listaSuper.shift(); // <--- no hace falta detallarlo, ya que elimina el elemento 0
console.log(listaSuper);

// "pop" (elimina el ultimo elemento del array)


listaSuper.pop()
console.log(listaSuper);


// En caso de querer eliminar un elemento en particular


// "splice" (elimina el elemento seleccionado del array)


listaSuper.splice(2,1); // <--- se detalla el elemento y la cantidad que se desea eliminar
console.log(listaSuper);


// Metodo join 
// podemos separar los elementos del array con el valor
// que pasamos por parametro. ej.


const nombres = ["pablo", "ariel", "joana", "juan"];

console.log(nombres.join(", "));

let listaFerreteria = ["martillo", "destornillador", "clavo", "tornillos", "poxipol", "cinta doble faz"];


// Metodo concat , sirve para concatenar dos arrays


let listaDefinitiva = listaSuper.concat(listaFerreteria);


// Metodo slice , sirve para tomar una parte de tu array


let listaCorta = listaDefinitiva.slice(1,3); //<--- si ponemos hasta elem. n° 4, borra hasta el 3, si ponemos 5 borra hasta el 4 y así..

// Que pasaría si queremos eliminar el último elemento de nuestro array


let ultimoElemento = listaDefinitiva.length - 1;
let otraLista = listaDefinitiva.slice(2, ultimoElemento);
console.log(otraLista);


// Metodos para verificar la existencia de algún elemento existe en el array
// indexof - nos sirve para saber en que posición se encuentra nuestro elemento

// en el caso de que nuestro elemento figure en el array
console.log(listaDefinitiva.indexOf("destornillador"));

// pero que pasa si no existe dicho elemento?
console.log(listaDefinitiva.indexOf("tomates")); //<--- nos va a figurar -1, eso quiere decir que no existe

// y ahora queremos agregar dicho elemento al array, podemos hacer
if (listaDefinitiva.indexOf("tomates") == -1){
    listaDefinitiva.push("tomates");
}

// no va a hacer falta averiguar donde está el elemento, si usamos indexOf
listaDefinitiva.splice(listaDefinitiva.indexOf("fideos"), 1);

// ejemplo aplicado a prompt

function borrar(){
    let borrarElemento = prompt("que elemento queres borrar?");
    if (listaDefinitiva.indexOf(borrarElemento) != -1){
        listaDefinitiva.splice(listaDefinitiva.indexOf(borrarElemento),1);
        console.log(listaDefinitiva);
    }
    console.log(listaDefinitiva);
}


// Otro método para saber si existe un elemento del array
// includes nos devulve un booleano
console.log(listaDefinitiva.includes("papa"));



// Metodo para cargar un array con entradas

// declaramos un array vacío y una variable que determine la cantidad
const listaNombre = [];
let cantidad = 5;
// Usamos do... while para cargar nombres en el array con prompt
do{
    let entrada = prompt("ingresa el nombre");
    listaNombre.push(entrada.toLocaleUpperCase());
    console.log(listaNombre.length);
} while(listaNombre.length != cantidad)

const nuevaLista = listaNombre.concat(["ana", "ema"]);

alert(nuevaLista.join("\n"));

