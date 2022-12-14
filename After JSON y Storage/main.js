// De esta manera vamos a vincular nuestras variables a través del DOM
// con nuestro HTML.. (En realidad no se modifica el html, modificamos el DOM
// que sería como una "pantalla" arriba de nuestro html)


// Cómo "cart" es un id, usamos #cart
let btnCarrito = document.querySelector("#cart");
// Cómo cart-modal-overlay es una clase, usamos .cart-modal-overlay.
let carrito = document.querySelector(".cart-modal-overlay");
let CerrarCarrito = document.querySelector("#close-btn");

/* Que vamos a hacer con todo lo obtenido a través de nuestra función
declarada más abajo agregarCarrito()? Vamos a crear nuestro carrito
dentro de una variable y asignarle un array vacío que se va a ir llenando
a medida que demos click en comprar */
let arrayCarrito = [];

// Ahora utilizamos un constructor
class Producto{
    constructor(id, nombre, image, precio) {
        this.id = id;
        this.nombre = nombre;
        this.image = image;
        this.precio = precio;
    }
}


// Primer caso, abrir y cerrar el carrito

/* En este caso, lo que vamos a hacer es desplazar el .cart-modal-overlay
por el eje "y", para eso tenemos que observar el CSS de nuestras clases
.cart-modal-overlay {} y .cart-modal-overlay.open {} cómo se posicionan mediante
transform: translateY(-200%) y ransform: translateY(0%), uno va a ubircarlo por
encima de nuestra pantalla y el otro va a centrarlo*/


// Cómo esta acción la vamos a tener que repetir reiteradas veces, lo que tenemos
// que hacer es declarar una función
function abrirCerrarCarrito () {
    // vamos a corroborar si nuestro botón tiene incluida una clase open, en caso
    // de que no tenga incluida la clase, se la asignamos y si la tiene se la sacamos
    // .classList nos va a dar una lista de clases, cómo es un array podemos usar
    // .contains, para ver si existe la clase que queremos en este caso ("open")
    if(carrito.classList.contains("open")){
        carrito.classList.remove("open");
    } else{
        carrito.classList.add("open")
    }
}

// para poder hacer esto, vamos a tener que asignarle un evento a nuestro botón
// en este caso el evento "click" y posteriormente asignarle una función, para agregarle o quitarle la clase
// según corresponda
btnCarrito.addEventListener("click", abrirCerrarCarrito);
CerrarCarrito.addEventListener("click", abrirCerrarCarrito);


// Agregar elementos a nuestro carrito
// En este caso vamos a utilizar querySelectorAll, porque hay varios
// botones con la misma clase.
let botonesComprar = document.querySelectorAll(".add-to-cart");
// Cuando hacemos un console.log a nuestro "botonesComprar", vemos que estamos
// trabajando con un array, un listado de elementos.
console.log(botonesComprar);

// Ahora vamos a agregar una funcionalidad a cada uno de nuestros botones
// para eso vamos a utilizar for
for(let i=0; i<botonesComprar.length; i++){
    let boton = botonesComprar[i];
    boton.addEventListener("click", agregarCarrito)
}

// Estamos tomando como referencia nuestro botón comprar, pero al acceder a él
// necesitamos acceder a todo nuestro div (imagen, precio, el titulo..), en este caso
// neceistamos acceder a su div "padre", para eso utilizamos el evento por default

function agregarCarrito(e){
    let boton = e.target;
    // .parentElement, nos permite acceder al elemento padre, en este caso al div contenedor
    let padre = boton.parentElement;
    let prodId = padre.getAttribute("id");
    let prodNombre = padre.querySelector("h3").innerText;
    let prodPrecio = padre.querySelector(".product-price").innerText;
    let prodImg = padre.querySelector(".product-image").src;
    // siempre podemos utilizar el console.log() para confirmar 
    // si obtenemos la respuesta esperada.
    console.log(prodImg);
    // declaramos un new Producto, con las variables dentro de nuestra función
    // como parámetros, esto va a crear un nuevo objeto, que posteriormente
    // va a ser metido dentro de nuestro array, mediante la función .push(prodNuevo)
    let prodNuevo = new Producto(prodId, prodNombre, prodImg, prodPrecio);
    arrayCarrito.push(prodNuevo);
    // Una vez que pusheamos los objetos dentro del arrayCarrito vacío, podemos
    // guardar nuestro arrayCarrito, en nuestro localStorage, para no perder los datos.
    localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
    
    agregarElemCarrito(prodNuevo);
}

// Nuestra agregarElemCarrito(), se va a encargar de inyectar
// nuestros elementos del carrito dentro del <div class="product-rows">, que 
// se encuentra vacío dentro de nuestro modal
function agregarElemCarrito(producto){
    let contenedorCarrito = document.querySelector(".product-rows");
    let carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    console.log(carritoStorage);
        contenedorCarrito.innerHTML += `
        <div class='product-row' id='${producto.id}'>
        <img class='cart-image' src='${producto.image}' />
        <span>${producto.nombre}</span>
        <span>${producto.precio}</span>
        <button class='remove-btn'>X</button>
        </div>
        `
    cartQuantity();
}

function cartQuantity (){
    let cantidad = document.querySelector(".cart-quantity");
    cantidad.innerText = arrayCarrito.length;
}