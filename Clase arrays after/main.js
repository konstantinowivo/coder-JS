let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

/*
function diasDeLaSemana(){
    return diasSemana.length;
}

const primerDia = () => {
    return diasSemana[0]
}

console.log(primerDia());

const ultimoDia = () => {
    return diasSemana[diasSemana.length -1]
}

console.log(ultimoDia());

//ejercicio n°1

let queDiaEs = prompt ("que dia de la semana es?").toLocaleLowerCase;

function quintoDia(dia){
    if(dia == "sabado" || dia == "domingo"){
        alert ("es fin de semana")
    } else {
        alert ("a laburar mi chango")
    }
}

quintoDia(queDiaEs);


//ejercicio n°2
// ejemplo cola de supermercado (?)
// lista de compra tal vez..

let lista = [];

function agregarPersona(name){
    lista.push(name)
    console.log(lista)
}

function sacarPersonas(){
    lista.shift()
    console.log(lista)
}

agregarPersona ("juana");
agregarPersona ("laura");
agregarPersona("juan");
sacarPersonas ();
sacarPersonas ();
agregarPersona("laura 2");

//Ejercicio 2 - to do list

let lista = [];

function agregarTarea(tarea){
    lista.push(tarea)
    console.log(lista)
}

function sacartarea(){
    lista.shift()
    console.log(lista)
}

let tarea = parseInt(prompt(`que acción desea realizar \n 1 - sumar tarea \n 2 - eliminar tarea \n 3 - esc`));

while(tarea != 3){
    if(tarea == 1){
        let nuevaTarea = prompt("ingrese una nueva tarea");
        agregarTarea(nuevaTarea);
        tarea = parseInt(prompt(`que acción desea realizar \n 1 - sumar tarea \n 2 - eliminar tarea \n 3 - esc`));
        console.log(tarea);
    } else if (tarea == 2){
        sacartarea();
        tarea = parseInt(prompt(`que acción desea realizar \n 1 - sumar tarea \n 2 - eliminar tarea \n 3 - esc`));
    } else {
        alert('dato erroneo, intente de nuevo')
        tarea = parseInt(prompt(`que acción desea realizar \n 1 - sumar tarea \n 2 - eliminar tarea \n 3 - esc`));
    }
}
alert("gracias vuelva pronto");

*/
//Ejercicio n° 3
// una función que elimine jueves y viernes
// ver documentación mozilla developer métodos de arrays
// ver método splice


let deleteDays = () => {
    diasSemana.splice(3, 2)
    return diasSemana
}

console.log(deleteDays());
/*

// Ejercicio n° 4
// una función que agregue un mes en el medio

let meses = ['enero', 'marzo', 'abril', 'junio']

let addMonth = () => {
    meses.splice(1, 0, 'Febrero')
}

console.log(meses);



// Ejercicio n° 5
// una fuincion que me devuelva los dias jueves y viernes
// vamos a utilizar método slice

let cortarSemana = () => {
    let juevesYviernes = diasSemana.slice(3, 5) //<--- es medio confuso, ver explicación
    console.log(juevesYviernes)
}

cortarSemana();

*/

// ejercicio n° 6
// buscar en el array si hay un animal, si no existe agregarlo
// vamos a utilizar método Index.of

let animales = ['gato', 'perro', 'pato'];

function agregarAnimalesConIndexOf(animal){
    if(animales.indexOf(animal) != -1){
        console.log(`${animal} ya existe`)
    } else {
        animales.push(animal)
        console.log(animales)
    }
}

//agregarAnimalesConIndexOf('perro');

// sumar animal con forOf

function agregarAnimalesConForOf(animal){
    for (const valor of animales){
        if(valor == animal){
            console.log(`${animal} ya existe`)
        } else {
            animales.push(animal)
            console.log(animales)
        }
    }
}

//agregarAnimalesConForOf('León')

//agregar animales con includes (en este caso sería el mas conveniente)


function agregarAnimalesConIncludes(animal){
    if(animales.includes(animal)){
        console.log(`El ${animal}, ya existe`)
    } else{
        animales.push(animal)
        console.log(animales)
    }
}

//agregarAnimalesConIncludes('mono');

//Función que invierta el orden de un array

function reverseNormal(array){
    array.reverse()
    return array
}
function reverseForOf(array){
    let newArr = []
    for (const value of array){
        newArr.unshift(value)
    }
    console.log(newArr)
}

reverseForOf(diasSemana)

// Funcion que sume objetos a un array

const object = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
const array = []

function addObjetToArray(objeto) {
    let newAray = [];
    var b = new object(objeto);
    a[0] = b;
}

addObjetToArray(object);