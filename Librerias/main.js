/* Temario
* Aprender que es una librería en JS
* Comprender las ventajas y beneficios de su uso
* Entender el proceso de investigación e integración de una libreria

Librerias
Son códigos pre-escritos que facilitam el desarrollo de aplicaciones.
Podemos pensar las librerías como pequeños programas escritos por terceros,
que podemos incorporar a nuestra aplicación para resolver problemas determinados

Librerias != Framework
Las librerias nos van a brindar pequeñas porciones de código, que nos van
a facilitar las tareas que queremos llevar a cabo, en cambio un framework
van a modificar gran parte de nuestro código y determinar nuestra manera
de trabajo.

Que tipos de problemas nos pueden resolver las librerias?
* validación de datos
* interfaces visuales
* manejo de fechas
* AJAX
* etc.

DESCARGA DE ARCHIVOS O CDN
Las librerias se incorporan al proyecto como archivos. Se vinculan a nuestra
aplicación en el HTML como cualquier otro script de JS.

Puede ser con la descarga de los archivos de la librería
(vamos inicializarlo como archivo dentro de una carpeta local):
<script src="js/libreria.js></script>

Y tambien puede ser a través de un CDN: (acceder a otro servidor y traerlo de allí)
Referenciaremos el http, pero el problema es que si se cae el servidor de el framework
No va a funcionar nuestro script. (ya no pasa tanto)
<script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/..."


COMO USAMOS LAS DIFERENTES LIBRERIAS??
Es muy importante leer la documentación de cada libreria antes de comerzar a usarlas.

DONDE TENEMOS QUE REFERENCIAR UNA LIBRERIA?
Vamos a referenciar nuestra libreria arriba de nuestro archivo JS,
primero va a leer la libreria y posteriormente nuestro archivo JS.

*/

// Como podríamos utilizar nuestra libreria?

let boton = document.querySelector("#btn");
let texto = "podria ser un formulario"

boton.addEventListener("click", ()=>{
    // Notamos abajo que las propiedades se encuentran dentro
    // de un objeto, de esta manera podemos modiciar nuestro elemento
    Swal.fire({
        title: "este es el titulo",
        showCancelButton: true,
        confirmButtonColor: "#000",
        background: "#ddd"
    });
})

/* RECOMENDACIONES DE USO PARA NUESTRAS LIBRERIAS

* En el caso de Sweet Alert, viene estilizado con bootstrap, por lo que se
recomienda tenerlo integrado, para lograr un mejor resultado visual
* es importante definir siempre los eventos y el comportamiento esperado en nuestor script

*/

/* LIBRERIA LUXON
¿Para que sirve esta librería?
Permite trabajar con fechas y horas de una forma sencilla. Con Luxon puedes
formatear, parsear, sumar y restar fechas, entre otras funciones.

¿Como se usa?
Podemos agregarla a nuestro proyecto siguiendo las instrucciones de la documentación, 
descargando el script correspondiente y vinculandolo al html.


La clase principal en luxon es DateTime. Para ser mas eficientes/ordenados, podemos
referenciarla en una variable global para facilitar su acceso:
*/

const DateTime = luxon.DateTime;

// Un DateTime representa un milisengundo especifico en el tiempo, junto con la zona horaria
// Podemos crear nuestro primer DateTime con el méotodo .local(), que recibe argumentos
// desde el año hasta los milisegundos.
// En principio es similiar al objeto Date de JS, pero trae diversos métodos útiles: 

// const dt = DateTime.local(2022, 1, 25, 12, 10) // 25/01/2022 - 12:10hs

/* Podemos crear un objeto de fecha con la fecha actual a través de DateTime.now(),
que es equivalente a llamar a DateTime.local(), sin argumentos.
También podemos crear fechas a través de un objeto, pasando las distintas carac. por propiedades
y valores */

// const dt = DateTime.fromObject(
//     { day: 22, hour: 12, moth: 2},
//     { zone: 'America/Buenos_Aires', numberingSystem: 'beng'}
// )
// console.log(dt.toString()) // 2022-02-22T12:00:00.000-03:00

/* Podemos ver que el método fromObject recibe dos objetos por parámetro
El primero donde definimos numéricamente la fecha y hora y el segundo donde
aclaramos la zona horaria y el tipo de numeración.
También podemos crear fechas a partir de un string siguiendo la norma ISO,
con el método fromISO:
*/

DateTime.fromIso("2017-05-15") // May 15, 2017 at midnight
DateTime.fromIso("2017-05-15T08:30:00") // May, 2017 at 8:30

/* Si hicimos console.log de los ejemplos anteriores notamos que no obtenemos una
presentación clara, útil, de las fechas creadas.

Para poder recuperar los valores en un formato legible debemos aplicar algunos métodos
específicos para esto.

Algo que sí queremos es recuperar la fecha como string, y para eso aplicamos el método 
.toString(), al objeto creado:
*/
const now = DateTime.now();
console.log(now.toString()) //2022-01-25T 12:31:00.774-03:00

// Podemos acceder a los distintos componentes de la fecha creada a través
// de propiedades específicas:

const dt = DateTime.now();
dt.year // 2022
dt.month // 1
dt.day // 25
dt.second // 22
dt.weekdat // 2

// https://moment.guthub.io/luxon/#/formatting?id=presets

/* Los objetos de Luxon son inmutables. Esto significa que los métodos de transformación
no modifican la variable sobre la cual los aplicamos, sino que retornan
nuevas instancias alteradas de ellos. Con los métodos plus y minus, podemos obtener cálculos sobre
las fechas de forma sencilla.
Pasamos  un objeto con la calidad de días, meses, horas, minutos, etc.. Que querramos sumar
o restar a la fecha de referencia: */

const dt1 = DateTime.now();

console.log(dt1.toLocaleString(DateTime.DATETIME.SHORT));
// 25/1/2022 14:21

const suma = dt1.plus({hours: 5, minutes: 15})
console.log(suma.toLocaleString(DateTime.DATETIME.SHORT));
// 25/1/2022 19:36

const resta = dt1.minus({ month: 2, days: 10});
console.log(resta.toLocaleString(DateTime.DATETIME.SHORT))
// 15/11/2021 14:21

// Se pueden crear nuevas instancias reemplazando propiedades específicas:
const dt2 = DateTime.now();
dt.set({hour: 3}).hour // => 3


// La clase Duration representa una cantidad de tiempo,
// como puede ser "3 horas y 15 minutos".
// Se crea a través de método .fromObject enviando un objeto con las carac. deseadas.
// Se puede sumar o restar a un objeto DateTime, y también tiene sus propios getters:

const Duration = luxon.Duration

const dt3 = DateTime.now();
const dur = Duration.fromObject({ hours: 3, minutes: 15});

console.log(dur.hours) // 3
console.log(dur.minutes) // 15
console.log(dur.seconds) // 0

console.log( dt.toLocaleString(DateTime.DATETIME.SHORT)) // 25/1/2022 14:35

const suma1 = dt.plus(dur)
console.log( dt.toLocaleString(DateTime.DATETIME.SHORT)) // 25/1/2022 17:50

const resta1 = dt.minus(dur)
console.log( dt.toLocaleString(DateTime.DATETIME.SHORT)) // 25/1/2022 11:20


// De forma similar podemos trabajar la clase Interval, que con su constructor podemos
// enviar dos fechas y nos devuelve el intervalo entre ellas, pudiendo acceder para realizar los cálculos que necesitemos.

const Interval = luxon.Interval

const now1 = DateTime.now1();
const later = DateTime.local(2022, 1, 26);
const i = Interval.fromDateTimes(now, later)

console.log(i.length('days')) // 0.390573....
console.log(i.length('hours')) // 9.37376666...
console.log(i.length('minutes')) // 562.426


/* Otras librerias

* Chart.js (Se usa para agregar gráficos), vamos a tener que agregar un canvas (una hoja para dibujar adentro)
* Slick (Se utiliza para hacer carrouseles, ES RESPONSIVO) Ver!
* Anime.js (para agregar animaciones)
