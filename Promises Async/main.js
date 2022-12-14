// Promises Async
/* Temario
* Identificar modelos sincrónicos y asincrónicos de programación.
* Comprender ventajas y desventajas de cada modelo según el contexto.
* Comprender el funcionamiento del Call Stack y Event Loop.
* Aprender a manipular Promesas en JS.
*/

// Asincronía


/* Programación SINCRÓNICA (así trabaja JS)
Nuestro programa funciona de manera lineal, ejecutando una acción
y despues otra. Sólo podemos realizar una tarea a la vez y cada tarea es
bloqueante de la siguiente. Cada linea de código, debe aguardar a que se
ejecute la anterior. Sólo una tarea a la vez y cada tarea es bloqueante
de la siguiente


Programación ASINCRÓNICA (Nos facilita la experiencia del usuario)
Este modelo permite que múltiples tareas sucedan a la vez. Al comenzar
una acción, nuestro programa sigue en ejecución; y cuando la acción termina,
nuestro programa es informado y consigue acceso al resultado correspondiente.
Onda malavares.

* Una de las PRINCIPALES VENTAJAS del modelo asincrónico: facilita el manejo de
programas que realizan múltiples acciones a la vez.

* Uno de sus PRINCIPALES RIESGOS: puede dificultar la comprensión de aquellos
programas que tienden a seguir una única línea de acción

*/

// El código debajo, será ejecutado de manera sincrónica por nuestro
// JS. De arriba hacia abajo 
/*
console.log("1 bienvenidos");
console.log("============");

console.log("2 Este es el curso de js");
console.log("============")

console.log("3 Fin del mensaje")
*/

// Método setTimeout
// Es una función que nos va a permitir realizar tareas en segundo plano
// esta función recibe dos parámetros
// * primero vamos a pasarle una función
// * segundo un tiempo en ms (El tiempo que quiero esperar para que se ejecute
//  la funcion del primer parametro)

//setTimeout(fn, time)

// Así la función que pasamos por primer paramtro se ejecuta luego de que 
// transcurra el tiempo definido e el segundo parámetro. Por ejmplo:

/*
console.log("1 bienvenidos");
console.log("============");

// El navegador va a ejecutar esta parte del código en segundo plano
// Que será ejecutada luego de 3 segundos
setTimeout(() => { //notar la función fleca dentro del llamado de la función
    console.log("2 Este es el curso de js");
    console.log("============")} , 3000);

console.log("3 Fin del mensaje");

// Otro ejemplo
// Acá se agrega una clase a un elemento tras clickear un botón y luego se dispara
// un setTimeout que remueve esa clase del elemento tras 2500 milisegundos.
// Permite automatizar un evento interactivo.


//Podemos estilar un elemento del DOM tras un evento y removerle ua clase tras cierto tiempo:
const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('pop-active');
setTimeout(() => {
    popup.classList.remove('popup-active')
}, 2500)
})

// Ejemplo de aplicación de setTimeout
// Que pasa cuando dentro de los iteradores agregamos a cada console.log?
// El iterador ejecuta de forma sincrónnica los llamados al seTimeout dor cada letra, y estos se
// resuelven en orden con el delay correspodneitne de forma asincrónica:
*/

// for (let letra of "hola"){
//     setTimeout(() => {
//         console.log(letra)
//     }, 1000)
// }
// for (let letra of "mundo"){
//     setTimeout(() => {
//         console.log(letra)
//     }, 3000)
// }

// Antes de seguir, lo visto anteriormente en los ejemplos no se explica
// precisamente con el tiempo de ejecución del proceso, sino con el orden
// que ocupa en el listado de peticiones a ejecutar
// El "callstack" está "por encima" de relevancia que los métodos, por lo tanto
// En caso de setear nuestro segundo parámetro en "0", igualmente se ejecutaría 
// En su posición.

// CALL STACK (PILA DE EJECUCIÓN)
// Es una lista donde se apilan las distintas tareas a ejecutar por nuestro
// programa. JS es un lenguaje single threaded, o de un único hilo
// por lo que significa que tiene un único stack o pila de ejecución. De ahí que la
// ejecución es implicitamente sincrónica

// Cómo es el proceso de Call Stack?
// Cuando se está a punto de ejecutar una función, ésta es añadida al stack.
// Si la función llama a la vez, a otra función, ésta es agregada sobre la anterior


// Vamos a observar en lo que sucede en este ejemplo
// Teniendo en cuenta el "callstack"
// function multiply (x, y){
//     return x * y;
// }
// function printSquare (x){
//     //primero va a llamar a la función que escribimos anteriormente
//     let s = multiply(x, x);
//     //luego un console.log
//     console.log(s);
// }

//Por último llamamos a la función y le pasamos un parámetro
// printSquare(5);

// Teniendo en cuenta el ejemplo anterior:
// Los estado de Call Stack son:

// PASO 1
// printSquare(5)

// PASO 2
// multiply(x,x)
// printSquare(5)

// PASO 3
// console.log(s)
// printSquare(5)

// PASO 4
// printSquare(5)

// PASO 5
// LIMPIO


// EVENT LOOP (permite la sincronización)
// Muchas funciones asincrónicas se ejecutan en un stack diferente. El Event Loop
// es la herrramienta que permite la sincronización entre nuestro call stack 
// con estas tareas asincrónicas que funcionan en un thread (hilo) aparte.
// Si el stack está vacío, el Event Loop envía la primera función que esté en la callback queque
// al call stack y comienza a ejecutarse

// Ver herramienta "Loupe" (http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
// Es una visualización que nos ayuda a comprender como interactuan
// entre si call stack, event loop y callback queue. Podemos escribir código sincrónico y 
// asincrónico y ver cómo es el funcionamineto de estas piezas en conjunto

// Retomamos EVENT LOOP
// Así entendemos como funciona de tal manera una instrucción como la siguiente
// Por mas que hagamos el timeout con 0 milisegundos, éste se envía al stack de web apis primero, luego al
// callback queue y finalmente el event loop lo incorpora al callstack para su ejecución, luego de los
// console.log anteriores

// console.log("inicia proceso");

// setTimeout(()=>{
//     console.log("mitad de proceso")
// }, 0)

// console.log("fin de proceso")

// Inicia proceso
// Fin de proceso
// mitad de proceso



// Dato de color!
// El ejemplo de abajo es un llamado "stack overflow",
// digamos una "función infinita".

// function fun(){
//     fun()
// }

// fun()


// setInterval
// Nos permite repetir tareas, cada una cantidad de tiempo determinada
// Tiene la misma sintaxis quew setTimeout, pero la unidad de tiempo es un  intervalo
// para la repetición de la función asociada, pero si no lo ussamos correctamente
// podemos crear una función infinita ("stack overflow")
// Por lo que vamos a tener que codear una "salida" de esta función (se explica mas abajo)

// setInterval(()=>{
//     console.log("tic")
// }, 1000)

// Permite ejecutar funciones de manera reiterativa tras los milisegundos indicados
// hasta que indiquemos su detención o se cierre la aplicación


// clearInterval & clearTimeout ("Salidas de las funciones")
// En caso de querer remover un intervalo, utilizamos la función clearInterval().
// También podemos detener la ejecución de un setTimeout invocando clearTimeout()

// Cuando llamamos un setInterval éste retorna una referencia al intervalo generado, el cual
// podemos almacenar en una variable. Es esta referencia la que debemos pasar a la función clearInterval 
// para que la limpieza tenga efecto, ej:

// let counter = 0

// const interval = setInterval(() => {
//     // para cambiar los segundos, vamos a sumarles los segundos de a 1 con el operador ++
//     counter++
//     console.log("Counter: ", counter)

//     // Vamos a insertar la salida con un if
//     if(counter >= 5){
//         clearInterval(interval)
//         console.log("se removió el intervalo")
//     }
// }, 1000)


// Por ejemplo podemos utilizar esto en una aplicación a página web:
// Si el sitio o aplicación no carga después de una x cantidad de tiempo,
// mostrar un error en pantalla, sea 400, 500 o el que corresponda.


// POMESAS
// Es un objeto de JS que representa un evento a futuro. Es una acción asincrónica
// que se puede completar en algún momento y producir un valor, y notificar cuando
// Esto suceda.

// Una promesa cuenta con tres estados posibles: pending, fulfilled y rejected.
// Las promesas pueden de ser resueltas o rechazadas.

// Podemos crear promesas a través de su constructor new Promise. Su sintaxis,
// es algo compleja, ya que recibe una función por parámetro que a su vez recibe por parámetro
// las funciones de resolve y reject


// de la misma manera que creamos clases con "new" creamos promesas

// new Promise((resolve, reject) =>{ 
//     //cuerpo de la promesa
// })

// Veamos como se crea una promesa

// va a recibir dentro de los paréntesis una función
// y a su vez esa función va a recibir 2 parámetros,
// la resolución y el rechazo
// const promesa = new Promise((resolve, reject)=>{
//     // vamos a pedirle un número random, por medio de el objeto Math.random()
//     // pero como sabemos que los numeros random tienen muchos decimales
//     // agregamos el objeto Math.floor, que va a redondear para abajo
//     let num = Math.floor(Math.random() * 10);
//     //Vamos a simular que hay mucho para "pensar"
//     setTimeout(()=>{num > 5 ? resolve(num): reject(new Error("el numero es menor a 5"))}, 2000);
// });

// En un principio, una promesa se retorna con estado pending, entendiendo que el valor a generar,
// aún no fué resuelto

// A continuación, podemos ver como cambia de estado la promesa con dif. valores.
// Según el llamado de la función la promesa se verá resuelta o rechazada. Sin embargo,
// lo que vemos por consola es el objeto Promise que retorna la función y con lo que nos interesa
// trabajar en realidad es con el valor de la resolución de la promesa

// Veamos un ejemplo
// acá podemos ver como cambia de estado la promesa con dif. valores.
// Según el llamado de la función la promesa se verá resuelta o rechazada. Sin embargo,
// lo que no vemos por consola es el objeto Promise que retorna la función, y con lo que
// nos interesa trabajar en realidad es con el valor de resolución de la promesa

// const eventoFuturo = (res) => {
//     return new Promise((resolve, reject)=>{
//         if(res === true){
//             resolve('promesa resuelta')
//         } else {
//             reject('promesa rechazada')
//         }
//     })
// }

// console.log(eventoFuturo(true)) // Promise ('promesa resuelta')
// console.log(eventoFuturo(false)) // Promise ( <rejected> 'promesa rechazada')

// Veamos el mismo caso agregando un delay con setTimeout:
// En el caso, el console.log es sincrónico y vemos que la promesa está en pending en ambos
// llamados(su resolución se generará dentro de 2s.). Las promesas tiene un mecanismo para
// trabajar esta asincronía y poder ejecutar funciones cuando cambie su estado.

// const eventoFuturo = (res) => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             res ? resolve('promesa resuelta') : reject('promesa rechazada')
//         }, 2000)
//     })
// }

// console.log(eventoFuturo(true)) // Promise ('promesa resuelta')
// console.log(eventoFuturo(false)) // Promise ( <rejected> 'promesa rechazada')


// Cual es el objetivo de la asincronía?
// Cuando sabemos que algún proceso de nuestro código va a llevar un tiempo en cargar.
// Vamos a tener la posibilidad de cargarlo en segundo plano, para que no
// demore, el resto de mi código.

// const promesa = new Promise((resolve, reject)=>{
//     let num = Math.floor(Math.random() * 10);
//     setTimeout(()=>{num > 5 ? resolve(num): reject(new Error("el numero es menor a 5"))}, 2000);
// });

// console.log(promesa);



// THEN & CATCH
// Son métodos que me van a servir para trabajar con mis promesas

// THEN
// Agrega funcionalidades si mi promesa es resuelta

// Los parametros los obtuvimos anteriormente
// En el caso de .then lo obtenemos del resolve
// En el caso del catch del reject

// promesa
//     .then(numero => console.log(numero))
//     // .then()(number... podemos agregar la cantidad de then's que necesitemos, pero tenemos que saber que se van a ejecutar de arriba hacia abajo.
//     .catch(error => console.log(error)) // referido al error
//     .finally(()=>{console.log("fin del proceso")})// se ejecute, no importa se rechaza o se resuelve


// Lo que queremos ejecutar cuando la promesa se resuelva o rechace, debemos definirlo dentro de un .then() ó .catch(), según sea el CacheStorage

// eventoFuturo(true)
//     .then((response) =>{
//         console.log(response) // promesa resuelta
//     })

// eventoFuturo(false)
//     .catch((error)=>{
//         console.log(error) // promesa rechazada
//     })

// Se aprecian los console.log tras 2 segundos de delay y lo que vemos es,
// precisamente, el valor que retornan el resolve o reject de la promesa.

// Como una promesa puede tener varios estados posibles, se puede concatenar
// varios .then() ó .catch() es un mismo llamado, y caeremos en el caso que corresponda
// según como se haya resuelto la promesa

// eventoFuturo(true)
//     .then((response)=>{
//         console.log(response) // Promesa resuelta
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

// eventoFuturo(false)
//     .then((response)=>{
//     console.log(response)
// })
//     .catch((error)=>{
//     console.log(error) // Promesa rechazada
// })

// Para cada promesa podemos definir una estructura para trabajar los dif.
// casos posibles. cada promesa sólo puede resolverse o rechazarse una unica vez
// Es un mecanismo de control clario y ordenado para trabajar la asincronía y los posibles
// valores a recibir.


// FINALLY
// finally() es un método que recibe una función la cual se ejecutará siempre al finalizar
// la secuencia, sin importar si se haya resuelto o no la promesa

// eventoFuturo(true)
//     .then((response)=>{
//         console.log(response) 
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//     .finally(()=>{
//         console.log("fin del proceso")
//     })

// Promesa resuelta
// Fin del proceso


// EJERCICIO
// Ahora, entendiendo el concepto de sincronía y asincronía, vamos a simular
// la petición de datos a un servidor y generar alguna interacción con el resultado

// const llamarProductos = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             //llamamos a nuestro array por el nombre
//             resolve(listaProductos);
//         },5000);
//     })
// }

// let contenedor = document.querySelector("#productos");
// let boton = document.querySelector("#btn");

// const mostrarProductos = (array) =>{
//     array.forEach(producto => {
//         contenedor.innerHTML += `
//             <div>
//                 <h3>${producto.title}</h3>
//                 <p>${producto.description}</p>
//                 <span>$${producto.price}</span>
//             </div>
//         `
//     })
// }

// boton.onClick = () =>{
//     llamarProductos()
//         .then(productos => {
//             mostrarProductos(productos)
//         })
// }

// Ejercicio :
// Crear una funcion que retorne una promesa que se resuelva trans unos
// segundos, retornando datos relevantes (productos, usuarios, etcétera).Crear
// localStorage,ar a esta funcion y captura su resolucion con un .then(),
// generando alguna interacción relevante con la respuesta.