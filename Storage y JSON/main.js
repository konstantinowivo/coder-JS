/* Temario

* Definir storage
* identificar y diferenciar localStorage y sessionStorage
* Definir JSON y entender su alcance y utilidad en cada situación

*/

// Clase Storage y JSON
// Como no vamos a tener acceso al backend, de momento, vamos a almacenar
// todos nuestros datos en el localStorage (guardo en DOM, en array y localStorage)

/* Storage (API de almacenamiento web)
Existen dos tipos de Storage (localStorage y sessionStorage)
El storage permite almacenar datos de manera local en el navegador
sin necesidad de realizar ninguna conexión con el servidor, así cada cliente
puede preservar info de la aplicación*/


// Que podemos guardar dentro del storage??
// (Sin realizar ningún proceso adicional)
// localStorage.setItem("valorTexto", "lalala")
// localStorage.setItem("valorNum", 123)
// localStorage.setItem("valorBoolean", "true")


// 3 Diferencias localStorage y cookies

// localStorage puede almacenar hasta 5MB de info, cookies 15KB aprox.
// localstorage no tiene fecha de expiración a las cookies puedo setearle una fecha de expiración.
// Cada sitio tiene su localStorage propio, las cookies pueden ser compartidas entre aplicaciones, de ahí la publicidades compartidas entre sitios web.


// Diferencias entre localStorage y sessionStorage

// localStorage:
// Es infinito, depende del navegardor (no se borra)

// sessionStorage:
// Sólo existe en la pestaña (se cierra la ventana y se pierde la info)


// Cuando utilizamos sessionStorage y localStorage?
// Eso va a depender de la utilidad que le queremos dar a nuestro storage
// En caso de una página de un banco, vamos a utilizar sessionStorage, por cuestiones de seguridad
// En caso de un carrito de compras, vamos a utilizar localStorage, para que guarde nuestros productos

// Métodos
// Existen 3 tipos de métodos que podemos utilizar con nuestro storage

// 1) setItem para configurar un nuevo valor

localStorage.setItem('llave', 'valor') //Recibe dos parámetros

sessionStorage.setItem('otraLlave', 'otroValor')

// 2) getItem para consumir un valor
/* De esta manera vamos a establecer una variable "item", que va a ser igual
    a localStorage.getItem('llave'), y eso nos va a traer el "valor" alojado
    en "llave"
*/

//const item = localStorage.getItem('llave'); 
//console.log(item); //<-- En este caso nos imprime 'valor' en la consola

//document.write(item); //<-- En este caso escribiría 'valor' en pantalla

// 3) removeItem para remover un valor


//localStorage.removeItem('llave') //<-- establecemos como parámetro que llave queremos eliminar

// Inicio de sesión (ver formulario en index.html)
const formularioUsuario = document.querySelector('#formularioUsuario'); // vamos a acceder al DOM, para poder modificar el html
const nombreFormulario = document.querySelector('#nombre');
const apellidoFormulario = document.querySelector('#apellido');
const saludoUsuario = document.querySelector('#saludoUsuario'); //<-- saludoUsuario está en nuestro html, ingresamos por medio del DOM a traves de su id, por eso querySelector
const logout = document.querySelector('#logout');

// variables
let nombre;
let apellido;

let nombreStorage = localStorage.getItem('nombre'); //<-- Va a consumir el valor guardado dentro de esta llave, si no encuentra un valor, nos dará null
let apellidoStorage = localStorage.getItem('apellido');

// funcion
const imprimirSaludo = () => { //<-- función que va a modificar nuestro saludo en html
    saludoUsuario.innerHTML = `Hola ${nombre} ${apellido}`  //<--En el html, va a ingresar el nombre y apellido que se ingresó en el formulario
    formularioUsuario.style.display='none';  //<-- y luego va a ocultar el formulario para dar paso al saludo.
}

const revertirSaludo = () => { 
    saludoUsuario.innerHTML = '';  
    formularioUsuario.style.display='block';  
}

const ejecutarFormulario = () => {
    nombre = nombreFormulario.value; //<-- value hace referencia al valor que se encuentre dentro del input que esté en ese momento
    apellido = apellidoFormulario.value;

    localStorage.setItem('nombre', nombre); //<-- primero tenemos que guardar nuestros datos en el localStorage
    localStorage.setItem('apellido', apellido);

    imprimirSaludo();
}

// Función para realizar un log in

// Con la función flecha que declaramos debajo hacemos qué, en caso de que los valores guardados en en el localStorage
// sean diferentes a null, se ejecutará el saludo.
// Pero si el localStorage, no contiene ningún tipo de llave, ni valor, va a ejecutar el formulario.
const verificarStorage = () => {
    if(nombreStorage !== null && apellidoStorage !== null){
        nombre = nombreStorage;
        apellido = apellidoStorage;

        imprimirSaludo();
    } else{ //
        formularioUsuario.addEventListener('submit', (e) => { //<-- que va a pasar cuando escuche el evento "submit" del formulario
            e.preventDefault(); //<-- preventDefault para prevenir la funcionalidad por default que tiene el botón submit, que recarga la página.
            ejecutarFormulario();
            nombreFormulario.value = ""; //<-- de esta manera podemos hacer que nuestros datos no queden guardados en los inputs.
            apellidoFormulario.value = "";
        })
    }
}

// Cerrar sesiómn,n.

const cerrarSesion = () => {
// Forma 1 con .removeItem
    localStorage.removeItem('nombre'); //<-- .removeItem, nos va a permitir borrar llave por llave del localStorage
    localStorage.removeItem('apellido');

    revertirSaludo();
}

// Forma 2 .clear (va a borrar todo el localStorage)
// Dependiendo de que tenemos guardado en nuestro localStorage, nos va a convenir usar
// o .removeItem (de a uno), o .clear (todo)

logout.addEventListener('click', ()=> {
    cerrarSesion();
})

verificarStorage();



// Como podemos almacenar objetos y arrays en nuestro storage? con JSON.
// En caso de que querramos almacenar la información de un objeto
// hay que tener en cuenta que tanto la llave como el valor se almacenan
// en strings

// Que es JSON?
// es un formato basado en texto plano, se usa para almacenar datos en aplicaciones web
// es un método de comunicación entre aplicaciones.

// No podemos obtener objetos de nuestro localStorage, ya que no sabe como interpretarlos

/*
const objeto = {usuario: "ljksadlk", edad: 31, monto: 1245}

localStorage.setItem("obeto", objeto) //<-- de esta manera sólo vamos a obtener [object Object]
saludoUsuariod.innerHTML = objeto;

*/


// El siguiente ejemplo está dentro del archivo .JSON
// (vamos a ver como se redacta)
// notar como la llave tenemos que escribirla con entre "", al igual que los valores

/* [{
    "usuario" : "asass",  // sólo acepta "", ningún otro tipo de comillas.
    "edad": 21,
    "booleano": true  // notar como, el último elemento no lleva ","
    }, // puedo separar los objetos con comas
    {
    "usuario" : "pepe",
    "edad" : 23,
    "boolean" : true
    }
]
*/

// Ahora bien, sabemos que para almacenar obejetos dentro de nuestro localStorage
// tenemos que convertirlos en .JSON, pero que pasa cuando queremos consumirlos?
// Si lo establecemos como .JSON, vamos a recibirlo como .JSON

// Existen 2 metodos que nos van a permitir convertir el objeto .JSON
// en un objeto JS y viceversa


//JSON.stringify(objeto) // de JS a JSON
//JSON.parse(objeto) // de JSON a JS

// vamos a verlo aplicado

// De esta manera vamos a guardar el objeto dentro del localStorage
// De que nos sirve guardar un objeto en nuestro localStorage?
// Es para que no tengamos que hacer un 
// localStorage.setItem('nombre', nombre);
// localStorage.setItem('apellido', apellido); y así..
// En ese caso ya traeríamos un objeto con todos los datos: nombre, apellido, precio...


const objeto =[{
    usuario: 'asdasd',
    edad: 31,
    monto: 1234,
},
{
    usuario: 'qqweqwe',
    edad: 20,
    monto: 55,
}];

localStorage.setItem('objeto', JSON.stringify(objeto));

saludoUsuario.innerHTML = objeto;

// Vamos a ver en los siguientes dos ejemplos, un obejto parseado y uno sin parsear

const objetoStorage = JSON.parse(localStorage.getItem('objeto'));
const objetoStorageSinParse = localStorage.getItem('objeto');

console.log(objetoStorageSinParse); //<-- de esta manera, este objeto ya lo podemos manipular con JS
console.log(objetoStorage);