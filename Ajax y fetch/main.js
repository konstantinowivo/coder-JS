// AJAX & Fetch
// Objetivos de la clase

// * Comprender AJAX y el modelo cliente-servido
// * Entender la estructura de una petición y sus métodos
// * Comprender que es una API y cómo nos comunicamos con ElementInternals
// * Aprender a usar FETCH y vincular resultados con el DOM


// Que es AJAX?
// En los 2000, los desarrolladores web se encontraban ante el constante
// desafío de obtener o enviar información sin afectar el estado actual
// de la página (sin requerir una recarga completa/ refresco de la página).
// Para dar solución a este problema, surgió AJAX (JS asincrónico y XML),
// un conjunto de técnicas de desarrollo que permiten que las aplicaciones web 
// funcionen de forma asincrónica para procesar tareas en segundo plano

// En consecuencia, cualquier app o web que emplee AJAX puede enviar y recibir datos
// sin volver a cargar toda la página, evitando la interrupcion de acciones realizadas
// por el usuario, añadiendo interactividad y dinamismo a nuestra aplicación.
// Esto hace a las características esenciales del software moderno.


// Comunicación con el servidor

// Repasemos el funcionamiento de una aplicación web. Se accede a las mismas mediante
// Conexión a internet, empleando un navegador y referenciando la dirección web del sitio
// (también llamado dominio)
//  El dominio está también asociado a un servidor, es decir, un ordenador que tiene
// la aplicación web (el servidor aloja a la aplicación). Cuando carga el sitio, el usuario
// visualiza la parte frontal de la aplicación llamada front-end o lado del cliente, con la que 
// puede interactuar

// Las apps modernas suelen generar experiencias dew usuario enriquecidas gracias
// a su conexxión a servicios de datos. Las apps consumen recursos provistos por algún servidor
// (back-end) o envía datos a éste para almacenarlos de forma persistente.Las
// Es fundamental aprender a dominar los métodos para realizar este intercambio de info 
// y comprender el protocolo implicado

// Peticiones HTTP
// El mecanismo por el cual se piden y proveen datos a través de internet es HTTP (Hypertext Transfer Protocol)
// Cuando emitimos una orden al navegador, hace una pretición (o request) HTTP a algún servidor. Luego, la recibirá,
// procesará y nos devolverá una respuesta con información que usaremos en la aplicación.

// Las peticiones que debemos hacer están definidas por varias partes:

// * Una URL o dirección
// Cuando nos comunicamos con un servidor para pedir info lo hacemos a través de una URL, ya que 
// éste es un programa alojado en algún host y nos comunicamos con él a través de la dirección correcta

// * Un método (GET, POST, PUT, DELETE)
// Cada petición que hacemos está acompañada por un verbo que indica al servidor
// cuál es nuestra intención. El servidor tiene la capacidad de escuchar distintas peticiones
// en la misma URL, decidir a cuál responder y cómo. Son 4 los verbos más usados, aunque hay muchos más: Get, Post, Put & delete.
// Las peticiones de tipo POST y PUT van acompañadas de un body (cuerpo de la request)
// dónde se definen los datos o info. a enviar al servidor. GET o DELETE, por su parte, no tienen
// body ya que no necesitan enviar datos adjuntos. Los datos siempre se envían en formato JSON y
// el back-end van a tener que parsearlos para interpretarlos.

// Get: para obtener info. (o recurso) del servidor. Suelen ser las mas usadas

// Post: Para enviar innfo. al servidor para crear algún recurso.

// Put: Para crear o modificar algún recurso con el servidor.

// Delete: Para eliminar algún recurso en el servidor.

// * Headers
// Las cabeceras (headers) HTTP permiten al cliente y servidor enviar info
// sobre la petición y la respuesta. Los headers incluyen info sobre la petición para establecer una transferencia
// segura y clara y de ser necesario se pueden modificar para agregar datos adicionales.
// Dato adicional: La idea es que nosotros vamos a estar trabajando con un servidor privado (debido a los datos que manejamos),
// mercado pago, google maps.
// Existen de tipos de información primero tenemos el header con los datos de la petición y por otro los datos que mando.


// * Body
// Es el espacio en la petición donde se definen los datos a enviar al servidor

//  Post /create-user HTTP/1.1

//  Host: localhost: 3000
//  connection:keep-alive
//  Content-type: application/json <-- Hasta acá el el header

//  {"name": "John", "age: 25"} <--- Esto es el body, los datos que enviamos

// * Parámetros (Query Params o URL Params).
// Para especificar una petición, se puede enviar información adicional en la forma de Parámetros
// a través de la URL. Tenemos dos formas de definir parámetros a través de la URL.

// * Query params
// Esta sintaxis permite adjuntar en la URL una serie de parámetros en la forma de pares clave-valor
// Por ejemplo, si queremos buscar algo por google, debemos enviarle un valor de búsqueda por el parámetro q,
// a través de la url:

// https://www.google.com.ar/search?q=coderhouse <-- en este caso sería "q="

// se usa el simbolo ? para indicar el final de la parte de la dirección de la url y el comienzo del query.
// A partir de allí, se escriben parámtros con la forma clave=valor, pudiendo definir varios separándolos
// con el signo

//  * URL params
// Esta sintaxis permite enviar parámetros directamente en la forma de segmentos de la url, es decir separados por /.
// Por ejemplo, la PokeApi nos indica lo siguiente..

// https://pokeapi.com/api/v2/pokemon/{id_or_name}/

// significa que es {id or name} es un parámetros, un valor dinámico que insertamos en la URL, em este caso para
// obtener información sobre un pokemon según su ID o nombre.
// Para obtener aquel con id = 1, haríamos una petición GET a la siguiente url:
// https://pokeapi.com/api/v2/pokemon/1 


// Estados de petición
// En la pestaña Network de las herramientas de desarrollador podemos ver todas las peticiones realizadas por el navegador.
// Por ejemplo, al solicitar acceso a algún sitio web, el navegador realiza numerosas peticiones tipo GET para obtener
// recursos del servidor en cuestión 

// Comienzan en 2, (generalmente 200), significa que la petición fue exitosa

// Los códigos que empiezan con 4 significan que hubo algún error con la petición.
// El famoso 404 indica que el recurso buscado no fue encontrado
// 403 nos indica que se necesita autorización

// Códigos que empiezan con 5 significan que hubo un error con el servidor, por lo tanto no deviene de un error en la petición.
// Pero cuidado, en caso de que hayamos ingresado mal la URL, el error será nuestro, debido a que no va a poder encontrar el servidor


// API (es una interfaz)
// Una API(application programming interfaces) es una aplicación web construida en base a la arquitectura API REST,
// a la cual podemos solicitar y enviar información desde el cliente. Generalmente, nos comunicamos con aplicaciones
// de este tipo y es la tendencia actual de desarrollo.

// La ventaja de este modelo es que está orientado a recursos y define métodos claros para solicitar y enviar info.
// Hay muchas APIs disponibles que podemos usar para acceder a diferentes recursos útiles para nuestra app, Servicios de
// contenido, plataformas de pago, Servicios de e-mail, etc.

// Incluso hay APIs creadas como bancos de info. sobre series y videojuegos populares, como la PokeApi(Documentation - PokéAPI )
// o Star Wars API (SWAPI)

// Una API suele tener una URL base(el dominio donde está alohada la aplicación) y luego puede tener varios endpoints,
// es decir, distintas secciones a las que podemos acceder.
// A la vez, se pueden hacer peticiones con distintos métodos al mismo endpoint y obtener distintos resultados.

// Generalmente, similar a cuando queremos incorporar una librería, al momento de consumir una API debemos revisar
// su documentación. Allí se definen los distintos endpoints disponibles, los métodos a usar para hacer una petición
// y que se nos ofrecerá en respuesta.



// FETCH
// JS nos ofrece el método fetch(), para hacer diferentes peticiones HTTP a algún servicio externo. Cómo estas peticiones son
// asincrónicas, convenientemente el método fetch() trabaja con promesas.

// El método recibe un primer parámetro que es la URL a la cual hacer la petición, y un segundo parámetro opcional de la config:

// fetch(url, config) //<-- en la config. le agregamos el body, header..


// Práctica:

const boton = document.querySelector("#btn");
const contenedor = document.querySelector("#fetch");

// Vamos a realizar una función que va a llamar los datos

// const obtenerDatos = () =>{
//     // Recordar que fetch nos solicta dos parámetros, en este caso sólo usaremos uno
//     fetch("./datos.txt")
//     // Cómo es una promesa tenemos que esperar que se ejecuten otros archivos
//     // a mi respuesta vamos a incluirle el método text(), para que nos devuelva un array
//         .then(response => response.text())
//         // a continuación llamamos a nuestro segundo .then() y en vez de pasar como parametro
//         // un response, vamos a llamar al resultado 
//         .then(result => contenedor.innerHTML = result);
// }

// ANALIZANDO RESPUESTAS
// Al obtener la respuesta de la API, recorremos el array obtenido y agregamos a la <ul> un elemento
// <li> con el contenido de cada post en el array

// const obtenerDatos = () =>{
//     fetch("./datos.json")
//     // para poder obtener los datos solicitados en nuestro response vamos a agregar la propiedad .json() es diferente a JSON!
//     // Gracias a .json(), nos va a devolver un array parseado. Ya podemos trabajar con los datos. 
//         .then(response => response.json())
//         .then(result => {
//             result.forEach(persona => {
//                 contenedor.innerHTML += `
//                 <div>
//                     <h3>${persona.nombre}</h3>
//                     <p>${persona.edad} anios</p>
//                     <p>Ocupación: ${persona.ocupacion}</p>
//                 </div>`
//             });
//         })
//         .catch(error => console.log(error))
//         .finally(()=>{//toastify que diga proceso terminado
//         })
// }



// const obtenerDatos = () =>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(result => {
//             result.forEach(persona => {
//                 contenedor.innerHTML += `
//                 <div>
//                     <h3>${persona.name}</h3>
//                     <p>${persona.email} anios</p>
//                     <p>Ocupación: ${persona.address.street}</p>
//                 </div>`
//             });
//         })
//         .catch(error => console.log(error))
//         .finally(()=>{//toastify que diga proceso terminado
//         })
// }


// para eso tenemos que determinar una función, que llame a obtenerDatos cuando identifique el click en el "boton"

// boton.onclick = () =>{
//     obtenerDatos()
// }




// COMO HARÍAMOS PARA ENVIAR DATOS??
// La API de JSON Placeholder mtambien nos permite simular peticiones POST,
// es decir podemos hacer una peticion para enviar datos a la API. Al ser una simulación,
// no se crear recursos realmente en el servidor, pero si obtenemos una respuesta aceptando
// el POST.
// Dijimos que el segundo parámetro del método fetch es un objeto de configuración.
// En este podemos definir el método, los headers y el body de la petición. Si bien fetch trae
// valores por defecto para esto (cómo el método que es GET), podemos modificarlo a discreción
// según sea necesario

// Para eso vamos a tener que utilizar el segundo parámetro de Fetch
// la configuración.


let usuario = {
    id: 120,
    title: "dato de prueba",
    body: "este es un dato post del cruso..."
}

// En este caso la documentación nos indica que, para hacer un post, debemos hacer
// un fetch con las siguientes caracteristicas:

// En el objeto de configuración tenemos varias propiedades a definir:

// * method: "POST". Significa que el metodo de la petición será POST. Si no lo modificamos,
// será de tipo GET por defecto
// * header: En este caso se agrega una propiedad 'Content-type', con el valor que nos indica
// la documentación de la apellido. Si no se agrega la petición sería rechazada por el servidor.
// * body: Aquí se adjuntan los datos a enviar al servidor. En este caso se envía un objeto con la forma
// {title, body, userId}. El body debe enviarse en formato JSON, por eso lo vemos envuelto en un JSON.stringify()


// const obtenerDatos = () =>{
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {'content-type': 'application/json; charset=UTF-8'}, // es necesario que sepa que tipo de dato enviamos
//         body: JSON.stringify(usuario)
//     })
//         .then(response => response.json())
//         .then(result => console.log(result))
// }

// boton.onclick = () =>{
//     obtenerDatos()
// }


// ASYNC - AWAY
// Podemos resumir todo lo escrito anteriormente con este método.
// Informando a JS, que nuestra función va a ser asincrónica.


const obtenerDatos = async () =>{ // async siempre va a ir acompañada de await
    // Perfecto, podemos resumir pero.. como hacemos con el error?
    // para eso vamos a utilizar el try y catch
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let result = await response.json();
    result.forEach(persona => {
        contenedor.innerHTML += `
            <div>
                <h3>${persona.name}</h3>
                <p>${persona.email} anios</p>
                <p>Ocupación: ${persona.address.street}</p>
            </div>`
    })
    } catch(error){
        console.log(error);
    }
}

boton.onclick = () =>{
    obtenerDatos()
}