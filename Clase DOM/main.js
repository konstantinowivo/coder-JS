// Clase n° 8 DOM (Document object model)
// Con JS no vamos a poder modificar el html "directamente"
// La estructura de un documento HTML son las etiquetas
// con DOM cada etiqueta HTML se convierte en un objeto al que llamamos nodo
// Las etiquetas anidadas son llamadas "nodos hijo" del nodo padre que las contiene

// Nodo padre <HTML>
// Nodo hijo <head>
// Nodo hijo <body>

// Todos los objetos son accesibles empleando document
// Ej: el elemento body sería document.body


// Maneras de acceder al DOM
// Dependiendo que nos devulva el DOM
// vamos a poder aplicar diferentes herramientas
// no podemos aplicar las mismas herramientas a un objeto que a un array

// Por ID (En este caso nos devulve un objeto)
// acceder al elemento de la estructura HTML, usando su id como identificación

let titulo = document.getElementById("titulo"); // Con id sólo puede existir un objeto
console.log(titulo);

// Por Class (Acá nos devuelve un array)
// accede a un conjunto de elementos de la estruc. HTML 
// usando su atributo class como identificador. Nos devuelve array

let parrafo = document.getElementsByClassName("parrafo"); // Puedo tener varios elementos con la misma clase
console.log(parrafo[1]) //<-- podemos recorrerlo con un for o for each por ejemplo


// Por etiqueta
// accede a un conjunto de etiquetas, es el método menos especifico
// Debido a que pueden haber varias etiquetas que se repitan

let subtitulo = document.getElementsByTagName("h2");
console.log(subtitulo);


// Por selector (a partir de ES6) con # como si fuese CSS
// Lo bueno de querySelector es que también aplica a pseudo clases
// de CSS, brindando un nivel mas avanzado de precisión
// Solo nos da el primer objeto

let selectorParrafo = document.querySelector(".parrafo");
console.log(selectorParrafo);

let radioChecked = document. querySelector(".radio:checked") //<-- solo vamos a seleccionar el elemeneto que está "checked"

//document.querySelector("#titulo");
//document.querySelector("h2");
//document.querySelector("div form .parrafo")


// Por selector (todos los objetos, una lista de nodos)

let selectorParrafo1 = document.querySelectorAll(".parrafo");



// Así como podemos acceder a los diferentes objetos,
// podemos acceder a las diferentes propiedades (?) de los mismos

titulo.innerText = "cambio de titulo";

// Con la propiedad innerText nos va a mostrar todo lo que está
// dentro del id "titulo", y sus propiedades. En ese caso vamos
// a poder modificar el código HTML y no sólo el texto dentro
// de las etiquetas


titulo.innerHTML = "este es un titulo <a href=''> nuevo </a>";

// Por ejemplo con la propiedad style.color
// vamos a poder cambiar el color de nuestro texto
titulo.style.color = "red"

// setAttribute y getAttribute
titulo.setAttribute("class", "titulo1"); // nos va a pedir dos parametros, con uno seteamos el atributo ("atributo", "nombre del atributo")
console.log(titulo.getAttribute("id"));  //este nos devuelve el atributo que luego buscamos por parametro

// Como acceder a los elementos li y nos sean devueltos en forma de array
let lista = document.querySelectorAll("li");
console.log(lista);

lista.forEach((el)=>{
    console.log(el.innerText);
})



// Ejemplo aplicado a las propiedades que acabamos de ver
// vamos a recorrer el HTMLcollection con for of


let paises = document.getElementsByClassName("paises")
let contenedores = document.getElementsByTagName("div");

for (const pais of paises){
    console.log(pais.innerHTML);
}

for (const div of contenedores){
    console.log(div.innerHTML);
}




// Como podemos inyectar o quitar nodos del HTML


// AGREGAR
// creamos una variable con los datos que queremos crear
let elementoNuevo = document.createElement("h2");
elementoNuevo.setAttribute("id", "subtitulo");
elementoNuevo.innerHTML = "Este es un titulo nuevo"

// vamos a establecer otra variable, para el contenedor existente
// en HTML y con la propiedad .appendChild vamos a inyectar la
// variable que creamos anteriormente
let contenedor = document.getElementById("contenedor");
contenedor.appendChild(elementoNuevo); //<-- de esta manera inyectamos la variable
console.log(elementoNuevo);

//QUITAR
contenedor.removeChild(elementoNuevo);

// Como podriamos agregar elementos a nuestra lista <ul></ul>

let materias = ["matematica", "lengua", "historia", "geografía"];
let ulPadre = document.getElementsByTagName("ul")

materias.forEach((el)=>{
    let eleLista = document.querySelector("li");
    eleLista.innerHTML = el;
    ulPadre.appendChild(eleLista);
})


// Como obtenemos datos de inputs
// let nombre = document.getElementById("nombre")
// console.log(nombre) //<-- en estos casos sólo nos va a dar la etiqueta, no el valor


// Esto estaría en el HTML..
//<input id = "nombre" type = "text">
//<input id = "edad" type = "number">

// Esto iría en nuestr código JS
// document.getElementById("nombre").value = "Homero";
// document.getElementById("edad").value = 39;


// Plantillas literales e innerHTML
// son un medio para incluir variables en la estructura HTML de
// nodos nuevos o existentes, modificando el innerHTML

let producto2 = { id: 1, nombre: "arroz", precio: 100};
let contenedor2 = document.createElement("div");

// Podemos definirlo en una plantilla de texto

contenedor.innerHTML = `<h3> ID: ${producto.id} </h3>
                        <p> Prodcuto: ${producto.nomnbre} </p>
                        <b> $ ${producto.precio} </b>`

// Ahora agregamos el contenedor creado al body
document.body.appendChild(contenedor);


const productos = [ { id: 1, nombre: "arroz", precio: 120},
                    { id: 2, nombre: "Fideos", precio: 120},
                    { id: 3, nombre: "pan", precio: 120},
                    { id: 4, nombre: "lentejas", precio: 120}];

for (const producto of productos){
    let contenedor = document.createElement("div");
    //definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id} </h3>
                            <p> Prodcuto: ${producto.nomnbre} </p>
                            <b> $ ${producto.precio} </b>`
}

// vamos a ver el ejemplo debajo

class Producto{
    constructor(nombre, categoria, precio){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

let listaProductos = [];
const guardarDatos = () => {
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let precio = document.getElementById("precio").value;

    let nuevoProd = new Producto(nombre, categoria, precio);
    listaProductos.push(nuevoProd);
}   

// Luego vamos a hacer una función para que guardarDatos se ejecute

function agregarhtml {
    listaProductos.forEach((prod)=>{
        let nodo = document.createElement("div");
        nodo.innerHTML = `<h3>${prod.nombre}</h3>
                            <p${prod.categoria}</p>
                            <span>$${prod.precio}</span>
                            `
        contenedor.appendChild(nodo);
    })
}