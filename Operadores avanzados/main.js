/* Temario

* simplificar procesos con operadores ternarios y logicos.
* entender como aplica la desestructuración de objetos y arrays.
* Comprender el funcionamiento del operador spread.
* Identificar oportunidades de optimización de código.


Sugar syntax
Es el nombre que se le da a los operadores avanzados, que funcionan
como simplificadores de tareas más complejas ej: ++ nos va a aumentar
el valor de la variable en 1. Estos se aplican para poder optimizar
código. 


Ejemplos:

num = num + 1;
// simplificado
num += 1;
// o bien
num++;

Operadores ternarios
Estos operan sobre nuestros condicionales (if...else)

let temperatura = 31;

if (temperatura > 30){
    alert("dia caluroso!")
} else {
    alert("dia agradable")
}

Vamos a poder modificar casos como el anterior utilizando un nuevo
modo de sintaxis, donde se incluyen:
* La condición
* El caso de ejecución en caso de que se cumpla
* y el caso else , en caso de que no se cumpla

Sintaxis
condicion ? caso1 : caso2
La condición resuelve true o false. En caso1 se escribe la instrucción
para ejecutar true y en caso2 si es negativa.
Por ejemplo con un operador ternario quedaría así
temperatura > 30 ? alert ("dia caluroso") : alert ("dia agradable");


Esto podemos utilizarlo en un checkbox por ejemplo


let persona = {
    nombre: "juan",
    apellido: "perez",
    edad: 20,
    casado: false
}
// vamos a pasar nuestro objeto a la tabla en nuestro html
let tabla = document.querySelector("#tabla");


cuando inyectamos nuestro objeto en nuestro html, en el apartado de casado
nos va a dar "false", como nuestros usuarios no debería ver esa respuesta
vamos a agregarles un operador ternario, para que en vez de true o false, digan
si o no.

tabla.innerHTML += `
    <tr>
        <td>${persona.nombre}</td>
        <td>${persona.apellido}</td>
        <td>${persona.edad > 18 ? "si": "no, es muy pequeno"}</td>
        <td>${persona.casado ?  "si" : "no"}</td> 
    </tr>`



// Una vez comencemos a trabajar con frameworks, podemos utilizar el método anterior,
// para determinar dinámicamente si aplicamos una clase al HTML o no.


// Otro ejemplo de cómo podemos optimizar código con este tipo de operadores
const usuario = {
    nombre: "john Doe",
    edad: 22
}
// declaramos y asignamos condicionalmente
const permiso = (usuario.edad >= 18) ? true : false;
// mostramos el mensaje
permiso ? alert("puede comprar cerveza") : alert("no puede comprar");

console.log(permiso);


// Operador lógico AND
// Es una resucción de un condicional, pero trata de ejecutar(o retornad)
// algo sólo si la condición es verdadera, reduce un if sencillo con un
// sólo bloque de ejecución, ej:

const carrito = [];

if(carrito.length === 0){
    console.log("el carrito está vacío")
}

// con operador AND (&&)
// es una reducción del condicional, que sólo se ejecutará
// en el caso de que la condición dé true
// Digamos que nos servirá, para ejecutar algo o nos dará false
carrito.length === 0 && console.log("el carrito está vacío");

// otro ejemplo de &&
const usuario1 = {
    nombre: "john Doe",
    edad: 14}

const registroIngreso = usuario.edad >= 18 && new Date();

console.log(registroIngreso) //Nos devolverá false



// Resultados de variables - valido, falsy
// Falsy, puede ser cuando nos dé null, Undefined, Nan, false, 0, ""
// Teniendo en cuenta esto, vamos a explicar:

// Operador lógico OR (||) (Analiza falsy)
// la diferencia entre or y and, es que or consta de dos operandos
// y no de una condición explícita: operando1 || operando2.
// En caso de que no sea falsy, el operador OR retorna operador1,
// de lo contrario retorna operador2.
// Vamos a utilizar el ejemplo del array vacío de un carrito de compras


De esta manera, utilizando el operador or (||), vamos a poder
meter los nuevos productos que se encuentran en nuestro localStorage 
dentro de nuestro array, sin sobreescribir los productos existentes.
En caso de que nuestro array tenga algo, lo usará, de lo contrario usará
un array vacío.
Pero en el caso de que no haya ningún elemento en nuestro localStorage,
llamado "carrito", pedimos que se utilice un array vacío 


let carrito1 = JSON.parse(localStorage.getItem("carrito")) || [];
class Producto{}
function agregarProducto(){
    let nombre = prompt("nombre");
    let categoria = prompt("categoria");
    let precio = prompt("precio");
    let stock = prompt("stock");

    let productoNuevo = new Producto(nombre, categoria, precio, stock);
    carrito.push(productoNuevo)
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
agregarProducto();
console.log(carrito1);


// También podemos utilizar OR (||), para condicionar asignaciones
// de variables o de parámetros sencillamente ej:

const usuario2 = {
    nombre: "juan pedro",
    edad: 20
}

const usuario3 = null;

// Este console.log, nos dará como resultado {nombre: "juan pedro", edad: 20}
console.log(usuario2 || "el usuario no existe");

// En este caso nos devolverá el usuario no existe, ya que es null
console.log(usuario3 || "el usuario no existe");


// Por ejemplo, para recuperar el utlimo estado de  un carrito de compras
// del usuario almacenado en el localStorage al inciar mi app, podría hacer esto:

// let carrito

let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))

if (carritoLocalStorage) {
    carrito = carritoLocalStorage
} else {
    carrito = []
}

// O podemos simplificarlo con el operador lógico OR (||)

const carrito2 = JSON.parse(localStorage.getItem('carrito2')) || [];



// Operador NULLISH COALESCING (??)
// Funciona igual que OR, pero que admite más valores
// cómo "verdaderos" (null y undefined)

console.log(0 ?? "Nullish") // 0
console.log(40 ?? "Nullish") // 40
console.log(null ?? "Nullish") // Nullish
console.log(undefined ?? "Nullish") // Nullish



// Acceso condicional a un objeto
// Nos permite ingresar condicionalmente a un objeto inexistente (null o undefined)
// y podremos setear una respuesta acorde al usuario.
// que pasaria si intentamos acceder a un objeto que no existe naturalmente?
// obtendremos un error, por ejemplo setear una profesión en el objeto persona

let persona = {
    nombre: "juan",
    apellido: "perez",
    edad: 20,
    casado: false
}

let tabla = document.querySelector("#tabla");

tabla.innerHTML += `
    <tr>
        <td>${persona.nombre}</td>
        <td>${persona.apellido}</td>
        <td>${persona.edad > 18 ? "si": "no, es muy pequeno"}</td>
        <td>${persona.casado ?  "si" : "no"}</td>
        <td>${persona?.profesion || "no tiene profesion"}</td> 
    </tr>`

console.log(persona.profesion || "el usuario no existe");
// Error: "no se pueden leer propiedades de Null"

console.log(persona?.profesion || "profesion no existe");
// Gracias al acceso condicional en este caso nos dará
// "profesion no existe"



DESESTRUCTURACIÓN
Muchas veces queremos acceder a propiedades de objetos y almacenarlas
en variables diferentes para un posterior uso. Para que hariamos esto?
para trabajar con inmutabilidad, es decir usar esos valores sin riesgo
de alterar las propiedades del objeto.
Típicamente hariamos esto:


const usuario = {
    nombre: "juan carlos",
    edad: 32
}

// Pero en este caso deberiamos realizar este proceso por cada una de las varibles
let nombre = usuario.nombre;
let edad = usuario.edad;


Sin embargo podemos usar la desestructuración para simplificar y agilizar
este tipo de procesos. Esta es una tecnica que nos permite declarar variables
donde guardar propiedades de un objeto de formar rapida y directa. Tengamos
en cuenta que hoy manejamos pocas propiedades en nuestros objetos, pero generalmente
existen cientos de propiedades

let persona = {
    nombre: "juan",
    apellido: "perez",
    edad: 20,
    casado: false,
    profesion: true,
    direccion: {
        calle: "av. rivadavia",
        numero: 1500,
        piso: 5,
        departamento: "A"
    }
}

// En este caso podemos agilizar el proceso escribiendo las variables de esta manera
// Tambien podemos agregar propiedades por default, como es el caso de genero = "desconocido", aunque
// En el caso de que el objeto ya posea una propiedad genero = "x", va a priorizar la propiedad existente
let {nombre, apellido, edad, casado, profesion, direccion:{calle, altura}, genero = "desconocido"} = persona;
console.log(calle)

// Esto quiere decir que estamos creando dos variables, prop1 y prop2, donde se almacenan 
// las propiedades con el mismo nombre del objeto que que referenciamos a la derecha
// E inyectamos el objeto al DOM de la siguiente manera

let tabla = document.querySelector("#tabla");

tabla.innerHTML += `
    <tr>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${casado ?  "si" : "no"}</td>
        <td>${profesion ?  "si" : "no"}</td>  
    </tr>`

En caso de que tengamos muchas "personas", seguramente se encuentren dentro
de un array, en ese caso vamos a usar la propiedad forEach, para recorrer el mismo
y luego dentro del forEach vamos a aplicar las propiedades que vimos
anteriormente ppara convertirse en variables locales para cada "persona" 


ALIAS
Generalmente los objetos, con sus correspondientes propiedades los vamos a 
traer de una API o base de datos. Muchas veces va a suceder que, estas
propiedades, van a ser inentendibles para nosotros, por lo que podemos, asignarles
un alias. EJ:

const item ={
    item_id: 432,
    product_name: "some product",
    price_per_unit: 5600
}

const {
    item_id: id,
    product_name: name,
    price_per_unit: price
} = item;


DESESTRUCTURACION EN PARAMETROS
Si en una funcion recibimos onjetos por parametros, tambien es posible
desestructurarlos directamente en el llamado, definiendo esto al declarar
la función. Ej: supongamos una función que recibe un objeto "producto"
por parámetro y debe trabajar con sus propiedades id y nombre 

const producto = {
    id:10,
    nombre: "curso js",
    precio: 1000
}

const desestructurar = (item) => {
    // desestructurando dentro del bloque
    const {id, nombre} = item;
    console.log(id, nombre)
}

desestructurar(producto);

// EJEMPLO APLICADO A ARRAY

//Esto nos llegaría desde una base de datos
let mascotas = [
    {nombre: "juan", edad: 3, castrado: true, tipo: "perro"},
    {nombre: "darwin", edad: 4, castrado: true, tipo: "gato"},
    {nombre: "melina", edad: 3, castrado: true, tipo: "gato"},
    {nombre: "pedro", edad: 45, castrado: false, tipo: "pez"},
]

// Lo primero que tenemos que hacer es iterar el array, para trabajar
// en cada uno de los objetos en particular.

mascotas.forEach(mascota=> {
    // Una vez que declaramos la función abajo,
    // pasamos a llamarla dentro de nuestro forEach y
    // le damos como parametro nuestra mascota
    imprimirDatos(mascota)
})

/*
function imprimirDatos(objeto){
    // Ahora lo podemos trabajar en el ámbito local
    // como para poder agregarlas al html por ejemplo
    let {nombre, edad, castrado, tipo} = objeto;
    // vamos a colocar el operador += para que vaya agregando
    // elementos sin sobreescribirlos, si pusieramos sólo =
    // al final de agregar todos los elementos sólo veriamos 1 de ellos (el último)
    tabla.innerHTML += `
    <tr>
        <td>${nombre}</td>
        <td>${edad}</td>
        <td>${castrado ? "castrado" : "no está castrado"}</td>
        <td>${tipo}</td>
    </tr>`
}
*/

// Pero podemos simplificarlo aún más, desestructurando la variable
// que está dentro de la función (local)
// Observar como agregamos {}, entre los parentesis de la función.
// function imprimirDatos({nombre, edad, castrado, tipo}){
//     tabla.innerHTML += `
//     <tr>
//         <td>${nombre}</td>
//         <td>${edad}</td>
//         <td>${castrado ? "castrado" : "no está castrado"}</td>
//         <td>${tipo}</td>
//     </tr>`
// }

// // Veamos un ejemplo de desestructuración aplicado al evento
// // de click con el mouse arriba a o abajo de la pantalla, en los
// // ejes "x" e "y".

// window.addEventListener('click', ({x, y}) => {
//     console.log(x, y)
// })

/* DESESTRUCTURACIÓN DE ARRAYS
No funciona acá la coincidencia por nombres, sino que se toman
los valores según la poisición. Las dos primeras variables que declaramos
tomaran los valores de los dos primeros elementos del array. Si queremos
acceder a otras posiciones o mejor dicho omitir las primeras, podemos
hacerlo dejando espacios vacíos con comas */

// const nombres = ["juan", "julieta", "carlos", "mariela"]

// const [a,b] = nombres;

// //en el caso de querer acceder a las ultimas dos propiedades:
// const [, ,a,b] = nombres;

// console.log(a) // "juan"
// console.log(b) // "julieta"

/* SPREAD
Es una herramienta que nos permite, como su nombre indica, desparramar
un array u objeto. En otras palabras, cambiar la forma en la que presentamos
este array u objeto. Digamos cambiar la forma que se presenta 
// EJ:
let colores = ["azul", "verde", "rojo", "amarillo", "violeta"];

console.log(colores); // Esto nos devuleve un array con 5 elementos
console.log(colores.join(",")); // Esto nos devuelve un texto plano separado con comas
console.log(...colores); //Nos devuelve, 5 textos diferentes (un por cada elemento). Nos va a servir para manejar cada elemento por separado

//EJ:

let nums = [0, 20, 3, 83, 12];

// Por ejemplo, queremos saber cual de todos los números de nuestro array es el mas grande
// entonces usamos la propiedad Math.max, pero esta propiedad no acepta arrays como parametros
console.log(Math.max(...nums)); //Nos devolverá 83 como resultado

// Otro ejemplo

const nombre1 = ["juan", "julieta"]
const nombre2 = ["carlos", "mariela"]

// spraed de los dos arrays dentro del otro
const nombres = {...nombre1, ...nombre2}

console.log(nombres) // {"juan", "julieta", "carlos", "mariela"}

// spread del array en un objeto
const nombresObj = {
    ...nombres
}

console.log(nombresObj) // {'0': 'juan, '1': 'julieta'...} */

/* Spread de objetos
Sólo vamos a poder realizar un spread de objetos dentro de otro objeto,
este presentaría cada par de clave-valor separado por comas, y ésto en una función
no sería admisible, pero si puede serlo dentro de otro objeto.
Un spread dentro de un objeto presentaría cada par de clave-valor separado por comas
y ésto en una función no es admisible, pero si se puede serlo dentro de otro objeto.
Esto suele ser útil cuando qeremos replicar o modificar estructuras de objetos,
ya que nos permite primero listar todas sus propiedades y valores y luego,
modificar/agregar las que queramos.


// Este tipo de operación se utiliza MUCHO, para poder trabajar con datos originales
// dentro de un ámbiente "controlado". Digamos sin modificarlos.

const usuario1 = {
    nombre: "juan",
    edad: 24,
    curso: "js"
}

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
// Abajo vemos cómo introducimos un array dentro de otro array
const usuario2 = {
    ...usuario1
}

console.log(usuario2) // {nombre: 'juan', edad: 24, curso: 'js'}

// En este caso va a sobreescribir el elemento curso:"js" x curso:"ReactJS"
const usuario3 = {
    ...usuario1,
    curso: "ReactJS",
    email: "juan@die.com"
}

console.log(usuario3) // { nombre: 'juan', edad: 24, curso: 'ReactJS', email:'juan@doe.com'}


Rest parameters (spread dentro de función)
El operador spread también puede usarse dentro de la declaración de una función, para
indicar que queremos recibir una cantidad indeterminada de parámetros.
Supongamos que quiero tener un función para sumar cualquier cantidad de números que reciba
por parámetros. Ej: */


// Debajo podemos observar el spread dentro de los parámetros, esto me va a permitir
// sumar la cantidad de número que existan
function sumar(...numeros){
    console.log(numeros)
}

// Antes haciamos esto
function sumar1(nums) {
    let resultado = 0;
    for(let i=0; i<nums.length; i++){
        resultado += nums[i];
    }
}

sumar1(4, 5);

// Con spread podemos hacerlo así

function sumar2(...numeros){
    let resultado = 0;
    for (let i of numeros){
        resultado += i;
    }
}

sumar2(2,3) // 5
sumar2(2,3,4,5,6) // 20