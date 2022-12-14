// Lo primero que establecemos van a ser nuestras const que nos permiten acceder
// a nuestro html a traves del DOM


//Siempre es recomendable utilizar ó .getElementeById ó .querySelector. No ambas.
const formToDo = document.getElementById('formToDo'); 
const toDoInput = document.getElementById('toDo');
const listadoToDoDom = document.getElementById('listadoToDoDom');

// Vamos establecer variables, para que nuestros toDo's no se borren cada vez que refresco la página
// que tendríamos que hacer para que esto no suceda?

// Vamos a crear un array vacío que va a alojar nuestro todo creado mediante DOM
let listadoToDo = []; 

// Una vez que convertimos nuestro listadoToDo por medio de .JSON,
// Vamos a parsear listadoStorage, ya que mas abajo vamos asignarle el valor de listadoToDo
// que es un array vacío y no reconoce el formato de listaTodos (llave del localStorage)
const listadoStorage = JSON.parse(localStorage.getItem('listaToDos'));  

// Vamos a crear una función que verifique, si listadoStorage es diferente a null, entonces
// listadoToDo va a ser igual a listadoStorage que es la variable que tiene asignada la llave de
// nuestro localStorage "ListaTodos" que ya está parseada para que la pueda leer nuestro JS
const verificarStorage = () => {
    if(listadoStorage !== null){
        console.log(listadoStorage);
        // listadoStorage es la llave de nuestro localStorage
        listadoToDo = listadoStorage;
        // vamos a hacer un for que por cada todo (parámetro), de nuestro listadoToDo, ejecute la función agregarToDo(todo)
        for (const todo of listadoToDo){
            agregarToDo(todo);
        }
    }
}

// Vamos a declarar una función que se encargue de la lógica de JS

const agregarToDosJS = (todo) => {
    // pusheamos todo lo creado, mediante DOM (más abajo), dentro de un array (listadoToDo)
    listadoToDo.push(todo);
    // Luego seteamos el item dentro de nuestro localStorage('llave', y como nuestro localStorage no reconoce un array 
    // como valor agregamos la propiedad JSON.stringify.listadoToDo, que lo va a convertir en formato .JSON. 
    // Sino nos va a dar (object, object). Estp para setearlo en el localStorage. "Entregamos al localStorage"
    // vamos a setear el listadoToDo, dentro del array vacío
    localStorage.setItem('listaToDos', JSON.stringify(listadoToDo))
}


// Y esta función se va a encargar de lo que pasa en el DOM

// El parámetro que pasamos va a ser toDo y luego vamos a agregar el toDo a nuestro DOM
const agregarToDo = (todo) => {  
    //Este es el método para crear un nuevo nodo
    const elemento = document.createElement('p'); 
    // Lo que pasa en el DOM
    elemento.innerHTML = `
    <span>Tarea: ${todo.descripcion}</span>
    <span>Completado: ${todo.completado}</span>
    `
    // De esta manera lo inyectamos el objeto creado para modificar el HTML
    listadoToDoDom.append(elemento);
    // Esto lo hacemos para que no queden los datos guardados dentro del input
    toDoInput.value = "";
}


// Que va a pasar en el "escuchador de eventos" (listener)
// cuando realicemos click en "agregar a la lista"

// Accedemos primero al nodo padre "formToDo" y luego al nodo hijo "button" por medio
// de la acción "submit", preveemos la acción por default de "submit", sino se
// recargaría la pagina cada vez que le damos click.
formToDo.addEventListener('submit', (e)=>{
    e.preventDefault();
    //inyectamos un objeto con el valor de toDoInput
    const _todo = {
        descripcion: toDoInput.value,
        completado: false,
    };
    //llamamos a las funciónes con el parámetro (_todo)
    agregarToDosJS(_todo);
    agregarToDo(_todo);
})

verificarStorage();

// 01:50:00