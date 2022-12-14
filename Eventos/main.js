/* Temario
* Comprender que son los eventos y para que sirven
* Aprender cuales son las tres opciones para definir eventos
* Entender como escuchar un evento sobre el DOM
* Conocer los eventos mas comunes
* Identificar que es la información del evento
*/


// Clase n° 9 Eventos
// Son la manera de controlar las acciones de los usuarios
// En base a ellos podemos definir un comportamiento de la pag
// o aplicación cuando se produzcan
// La idea de utilizar eventos es asignar una función a cada uno
// de ellos (event handler). En base al evento que "escuchamos" se realice determinada
// acción. (event listener).

// vamos a intentar, que, cuando apretemos el botón se escriba algo en el DOM

const paragraph = document.querySelector('#parrafo'); //<-- tener en cuenta que a partir de usar DOM, tenemos 
const button = document.querySelector('#btn');        //    primero que ingrear al documento y como lo llamamos por el id usamos queryselector.

/*
// Basicamente lo que va a hacer la función es:
// 1) Pedir al usuario un texto
// 2) Retorna agregandolo a nuestro parrafo
const pushButton = () => { // declaramos como una constante la función flecha
    let texto = prompt("write a text");
    paragraph.textContent = texto; //<-- de esta manera accedemos al parrafo "del html" a traves del DOM
//  return <-- no vamos a poner el return, porque estamos inyectando contenido en el html, pero no en JS
}




// 3 FORMAS DE ESCUCHAR EVENTOS

// 1 - método addEventlistener(EVENTO, FUNCION); <-- si recibe una función por parámetro es una función de orden superior
// En este caso, vamos a declarar la función por fuera
// boton.addEventListener("click",pushButton);

// 2 - Acá declaramos la función en el mismo código del "escuchador de eventos" función flecha
// button.addEventListener("click", () =>{
//     pushButton();
// });

// 3 - Forma reducida, el evento es el método (no es buena práctica)
//button.onclick = () =>{pushButton()};  //luego vamos al HTML y agregamos onclick="pushButton()";


// Eventos mecánicos
// El usuario tiene que hacer algún tipo de "acto mecánico"
// para que se lleve a cabo el evento, ej. clickear, apretar alguna tecla, etc.
// 1 pueden ser de acciones del mouse
// 2 o acciones del teclado


// Mouse
button.addEventListener("mouseover",()=>{   //<-- ver porque la consola no reconoce
    console.log("hola");
});


// Teclado - keyUp/keyDown
const text = document.querySelector("#texto");
text.onkeydown = () => {
    console.log(text.value.length); //<-- agregando la propiedad length, vamos a poder analizar el texto como un array
}


// Eventos de lógica (CHANGE, INPUT)
// Registran los cambios que veamos en el elemento que seleccionemos


// Change - registra el cambio cuando salimos de foco
const text = document.querySelector("#texto");
text.addEventListener("change", () =>{
    console.log(`el nuevo valor es: ${text.value}`);
})



// Input - Registra cada cambio que hacemos al input en este caso
// En este caso vamos a ver que pasa especificamente con un input
const text = document.querySelector("#texto");
text.addEventListener("input", () =>{
    console.log(`el nuevo valor es: ${text.value}`);
})

// Input - con select
const select = document.querySelector("#select"); //<--así accedemos al DOM para "modificar el html"
select.addEventListener("change", ()=>{                                     
    console.log(`el usuario eleigió la opción n°: ${select.value}`); //<-- nos puede servir por ej. según la opción elegida, pasa tal cosa, sino tal otra (if)
})                                                                   //    Pero para eso necesitamos que JS pueda leer el valor de la opción, en ese caso podemos agregar un; value="x", en las options de html

*/
// Evento Submit
// Este evento se activa cuando el formulario es enviado, generalmente se usa
// para validar el formulario antes de enviarlo al servidor o bien para abortar
// el envío y procesarlo con JS

const formulario = document.querySelector("form"); //<-- por default al enviar el formulario se refresca la página
formulario.addEventListener("submit", (e)=>{  //<-- para acceder al evento por default, agregamos un parámetro a la función, que actuaría como envento.
    e.preventDefault(); //<-- de esta manera prevenimos la acción por default.
    console.log(`tu formulario fue enviado`);  
})


const text = document.querySelector("#texto");
text.addEventListener("keydown", (e)=>{                                     
    console.log(`el usuario eleigió la opción n°: ${e.keyCode}`); //<-- esto nos va a dar el valor de la tecla que apreté en ese momento.
}) 