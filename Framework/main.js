// Framework & NodeJS

// Temario
// * Comprender que es NodeJS y NPM
// * Aprender a ejecutar archivos con Node e iniciar proyectos con NPM
// * Entender los conceptos de SPA y MVC
// * Analizar y comparar los principales frameworks de Frontend

// Que es NodeJS
// Es un entorno adicional de ejecucion para JSON. es un programa que permite
// ejecutar código JS por fuera del navegador. Con él podemos construir desde
// aplicaciones en linea de comandos (consola) hasta servidores

// El comando Node es provisto por NodeJS y sirve para ejecutar archivos JS.
// Supongamos que tenemos un archivo denominado coder.js con lo siguiente

// coder.js
// let mensaje = "hola mundo coder";
// console.log(mensaje)

// Luego podemos ejecutar este archivo usando el comando node desde cualquier terminar de comandos

// Vamos a probar NodeJS con un poco de código:

let num1 = 3;
let num2 = 5;
let mensaje = "este es un mensaje de js";

function suma(num1, num2){
    return num1 + num2;
}

console.log(mensaje);
console.log(suma(num1, num2));

// Vamos a ingresar a la carpeta "padre" de nuestro archivo .js y luego
// Ingresando cd + (nombre de la carpeta)
// A continuación ingresaremos "node main.js"
// De esta manera ejecutaremos nuestro archivo JS
// PS C:\Users\PC\Desktop\CODE\program\CODER JS\Framework> node main.js
// hola mundo coder
// PS C:\Users\PC\Desktop\CODE\program\CODER JS\Framework> node main.js
// este es un mensaje de js
// 8

// A tener en cuenta:
// Node es un entorno diferente al navegador, por lo que no posee los mismos recursos.
// Las variables globales como Object, array o JSON están disponibles; pero no podemos
// acceder a recursos provistos por el navegador como el alert(), prompt() o el DOM

// Sin embargo, Node también ofrece otras grandes herramientas que el navegador no posee, 
// como el File System (Sistema de archivos) o el modulo HTTP para crear servidores web.

// Al trabajar en el back no disponemos de la UI del navegador para ir testeando los resul.
// La principal herramienta para esto es la consola cli (command line interface)
// Con ella podemos ejecutar nuestro programa en el servidor, ver los los que generamos,
// visualizar errores y mensajes informativos explicitamente generados por JS en tiempo
// de ejecución dentro del contexto del programa del servidor.


// NPM
// Es un repositorio de módulos de Node. Muchos de esos programas que incorporamos a nuestros
// proyectos estan escritos como paquetes o modulos de Node. En el repositorio NPM se listan y
// alojan para descargarlos e integrarlos a las APPs de forma sencilla.
// El comando NPM nos permite acceder a este repositorio y administrar estos paquetes.
// El comando NPM install nos permite instalar cualquier módulo disponible en este repo.

// El comando nom init crea un archivo llamado package.json que contiene información sobre nuestra app,
// como nombre, autor, versión, dependencias, etc.autor
// ¿Cómo lo hacemos?
// Abrimos nuestro proyecto y corremos el comnado npm init.
// Aceptamos todas las opciones y tendríamos un archivo como el siguiente.


// Minuto 42 explica como instalar librerias, copiladores, proyectos, etc.


// ¿Para que es util init npm & package.json?
// Lo que vimos en el ejemplo es util cuando clonamos otros proyectos de algún repo.
// y necesitamos instalar todos los paquetes necesarios para que funcione. En el apartado
// scripts se pueden listar comandos para la CLI a correr a través de npm


// Por que vemos esto?
// Aparte del Backend, los principales frameworks de Frontend tienen ambientes de desarrollo que trabajan
// con Node y con npm para instalar y manipular modulos y el proyecto en general.
// NPM, Node, y el package es algo con lo que trabajarán habitualmente al perfeccionarse en Backend y Frontend

// Principales librerías.
// * React JS (más popular... ponele)
// * Angular
// * Vue JS


// ¿Que es un spa? (minuto 55 explicación SPA)
// Un SPA (Simple Page Application), o aplicación de una sola página, es una web app que consiste de un único archivo
// html que se carga al ingresar al SVGTextPositioningElement, y el resto de la navegación y cambios de página, se da
// mediante modificación dinámica del DOM con JS 

// Un spa tiene el própisto de brindar una experiencia más fluida
// al usuario, mejorando la performan y velocidad
// ¿De qué manera hace esto? En ella, todos los códigos de HTML, JS y CSS se cargan
// una sóla vez o los recursos necesarios se cargan dinámicamente cuando lo requiera
// la página, normalmente como respuesta a las acciones del usuario. 

// Arquitectura SPA
// la mayor parte de la funcionalidad de la aplicacion queda en el cliente.
// Se accede al servidor usando AJAC para obtener los datos necesarios
// para su funcionamiento.
// Toda la información necesari para que la aplicación funcione se cargará
// en el cliente durante la petición inicial y el acceso a diferente
// páginas de la aplicación las maneja el router.

// Router (rauder en criollo) (según el click, modifica una parte de la página)
// Controla e interpreta cada solicitud del usuario.
// En una SPA los cambios de URL no signidican cargar nuevos archivos html,
// sino que son captados por el router que entiende qué modificar el DOM para
// representar una nueva vista. Todo el proceso ocurre de manera asincrónica.

// MVC
// Es un patrón de arquitectura de software que separa los datos de una aplicación
// de su representación, y el módulo encargado de gestionar los eventos y la comunicación
// dfine, por un lado, componentes para la representación de la información y por otro lado,
// para la interacción del usuario.

// Modelo
// Es la representación de la información con la que opera el sistema y se encarga de gestionar
// su proceso

// Vista
// Presenta el modelo en un formato adecuado para interactuar (UI). Requiere del modelo la info.
// a presentar

// Controlador (genera la conexión de la vista y el modelo)
// Responde a eventos e invoca peticiones al modelo cuando se hace una solicitud sobre info.

// Representación de la petición

// Usuario ---(acción de usuario)-->vista--(datos)--> controlador --(datos)--> modelo (es el servidor, nube.. etc)

// Y luego es a la inversa pero devolviendo una respuesta


// React, Angular y VUE JS trabajan con componentes
// ¿Que es un componente? Es un conjunto de elementos que conforman una unidad
// funcional(un header, un footer, un carrousel, etc.). Pensar en componentes permite dividir
// nuestra app en diferentes piezas y trbajarlas por separado, integrandosé en una estructura mayor
// para formar la app
// Este enfoque nos permite desarrollar la logica de comportamiento de cada componente de forma modular,
// sin interferir en la logica de los otros
// Estos singifica que un componente se componen de tanto por los elementos que los representan como
// por la lógica que le da funcionamiento

// Frameworks (los más usados hoy en día)

// Angular: 
// Desarollado en 2010.
// Fue lanzado por Google, todo lo referido a Google, utiliza React.
// Cuenta con 13 versiones.

// * Se basa en typescript. (basado en JS, hay que "informar" que tipo de dato estamos ingresando)
// * Utiliza un sistema de inyección de dependencias jerárquico impulsando su rendimiento
// * Implementa la detección de cambios basados en árboles unidireccionales
// * Posee una curva de aprendizaje empinada
// * Ofrece una solución integral y completa para desarrollar aplicaciones


// React:
// Desarollado por Facebook.
// Cuenta con 17 versiones.

// * Combina la lógica y la vista de los componentes, y su integración entre ellos.
//   Es decir, en el mismo bloque de código define la estructura del elemento y su lógica.
// * La documentación ofrece guías prácticas que facilitan su aprendizaje.
// * No es completo, las funciones avanzadas requieren instalación de librerías de terceros
// * Es customizable, permite crear aplicaciones de todo tipo y complejidad.
// * Su flexibilidad y performance lo hacen el más popular de los tres.


// Vue:
// Desarrollado en 2014
// Fue lanzado por Evan You
// Versión actual 3.0

// * Incorpora un conjunto de herramientas y funciones para un desarrollo dinámico de páginas y apps web.
// * Permite crear aplicaciones SPA altamente flexibles y dinámicas.
// * La vista (UI) y el comportamiento (lógica) forman parte de los componentes.
// * Es altamente customizable
// * Framework progresivo: Contiene todas sus funcionalidades principales en una librería muy pequeña y
// permite ir añadiendo otras librerías a medidad que se necesiten.
// * Se podría decir que es la más orientada al frontend de las 3


// Fullstack con JS
// La sigla MERN, MEAN Y MEVN STACK
// MERN: MongoDB, Express, React, Node.
// MEAN: MongoDB, Express, Angular, Node.
// MEVN: MongoDB, Express, Vue, Node.

// MongoDB: Es un sistema de base de datos NoSQL orientado a documentos y de código abierto.

// Express: Es un framework para Node.js, que sirve para crear aplicaciones de Backend en menos tiempo.

// React/Angular/Vue: Frameworks de frontend para crear aplicaciones web.

// Node: Entorno en tiempo de ejecución multiplataforma para la capa del servidor basado en JS.