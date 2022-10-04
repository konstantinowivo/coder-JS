// OBJETO 
// son estructuras que podemos definir para agrupar
// valores bajo un mismo criterio, son una colección
// de datos relacionados con una entidad

/*

Esta manera de escribir los objetos se llaman "literales"

const mascota1 = {
    nombre: "panchito",
    tipo: "pajaro",
    gracia: "canta",
    edad: 3,
    castrasdo: true,
}

console.log (mascota1);

// 2 maneras de accedder a la propiedad

console.log(mascota1("nombre"));

console.log(mascota.nombre);

En caso de tener que cambiar la condición de un valor
que se encuentre en un objeto, podemos hacerlo

mascota.castrado = false;

//También podemos agregar objetos dentro de objetos

const jugadores = {
    1:{
        nombre: "juan",
        apellido: "gutierrez",
        edad: 30,
    }
}

// y podemos acceder de esta manera

console.log(jugadores[1].nombre);

Para crear un objeto cada vez que sea necesario, vamos
a utilizar una función constructora


//En estos casos los nombres de las funciones deben tener la primer letra en mayúscula.


function Mascotas(nombre, tipo, edad, castrado){ 
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;
    this.castrado = castrado;
    this.resumen = () => {
        return `esta mascota es un ${this.tipo} se llama ${this.nombre} , tiene ${this.edad} anios, está castrado ${this.castrado}`;
        }
    this.castrar = () => {
        if (this.castrado == false) {
        this.castrado = true;
        }
    }
}


const pancho = new Mascotas("pancho", "perro", 30, true);
const pepito = new Mascotas("pepito", "gato", 15, false);

console.log(pancho);
console.log(pancho.resumen());
console.log(pepito.resumen());

Para poder llamar al METODO, tenemos que hacerlo de esta manera
debido al ámbito del mismo, son locales a diferencia de las funciones
que son globales y podemos usarlas dónde querramos.

pepito.castrar(); <--- el método sería ".castrar"


console.log(pepito);


Para no tener que estar repitiendo el código, cada vez
que tenemos que cargar un animal nuevo, lo que podemos hacer
es una función


const crearMascotas = ()=> {
    let nombreMascota = prompt ("cual es el nombre de la mascota?");
    let tipoMascota = prompt ("cual es el nombre de la mascota?");
    let edadMascota = parseInt(prompt("cual es la edad de la mascota?"));
    
    const mascotas2 = new Mascotas(nombreMascota, tipoMascota, edadMascota);
    return mascotas2;
}

//Para recorrer todas las propiedades de los objetos podemos usar:
//for.... in, vamos a inventar la propiedad, en este caso prop


for(let prop in pancho){
    console.log(`la propiedad es ${prop} y su valor es ${pancho[prop]}`);
}

//Clases, permiten una sintaxis mucho mas clara y simple para crear objetos
//personalizados, equivalen al empleo de una funcion constructora y permiten
//definir distintos tipos de métodos, se utilizan mucho en backend


class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}
const personal = new Persona("homero", 39, "siempreviva 742");

console.log(Persona);


//

class Producto {
    constructor(nombre,precio){
        this.nombre = nombre.toUppercase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva(){
        this.precio = this.precio * 1,21;
    }
    vender(){
        this.vendido = true;
    }
}

const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("jamón", "400");

producto1.sumaIva();
producto2.sumaIva();
producto1.vender();



// TAREA

// 1)crear una clase con un constructor de productos
// tiene que aceptar nombre del producto, categoria,
// precio y stock

// 2)crear metodo que se llame comprar y que acepte como parametro
// cantidad, este metodo debe actualizar el stock y me dirá
// cuantos quedan disponibles.


class Productos{
    constructor(nombre, categoria, precio){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.stock = 15;
    }
    comprar(cantidad){
        if(cantidad < this.stock){
            alert("no hay esa cantidad disponible")
        } else {
            alert("gracias por tu compra")
        }
    }
}

*/