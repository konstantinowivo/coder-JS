/* Temario

* Repasar temas y conceptos centrales de JS dados hasta el momento
* Brindar recomendaciones generales para la realización del proyecto final
* Promover el avance progresivo e individual en el proyecto final
*/

// Repaso localStorage y JSON

const productos = [{ id: 1, apellido: "perez", edad: 17,
                    id: 2, apellido: "perez", edad: 17,
                    id: 3, apellido: "perez", edad: 17,
                    id: 4, apellido: "perez", edad: 17,}];

/*  Que va a pasar si sólo seteamos nuestro objeto?
    Va a quedar guardado en nuestro localStorage cómo si fuese
    texto plano, eso quiere decir, que por ejemplo: En el caso
    de un booleano, va a guardar "true" en vez de true y cuando querramos
    utilizar ese valor para algúna otra funcionalidad, no lo vamos a poder hacer.
    Para evitar que suceda esto, tenemos que convertir nuestro objeto
    en algo más sencillo o devolverlo a su estado original mediante JSON. */

// seteando (metiendo..) en el localStorage, la llave en este caso "productos",
// luego convertimos nuestro objeto productos en texto plano a traves de 
// JSON.stringify(productos)
localStorage.setItem("productos", JSON.stringify(productos));

// Luego, cuando debamos obtener (sacar..) ese objeto o dato, que tenemos seteado en nuestro
// localStorage, nos va a devolver un texto plano, por lo que debemos devolverlo
// a su "estado original", para poder utilizarlo.

// Accedemos a nuestro array a través de la llave que establecimos
// Pero en este caso no va a poder ejecutarse, porque acceder a traves de getItem
// a nuestro array guardado en el localStorage a través de su llave "productos",
// nos va a devolver un string
let datos1 = localStorage.getItem("productos")
console.log(datos1);
datos1.forEach((producto) => {
    console.log(producto);
});

// Pero si al ejemplo anterior, le aplicamos JSON.parse(), nos va a devolver un array
// por lo tanto vamos a poder utilizarlo

let datos2 = Json.parse(localStorage.getItem("productos"))
console.log(datos2);
datos2.forEach((producto) => {
    console.log(producto);
});


/* A partir de este momento, vamos a enviar y recibir datos desde
    backend a frontend y visceversa. Eso lo vamos a tener que realizar
    a través de un lenguaje universal, que es texto plano, para eso vamos
    a usar JSON */ 

/* Recomendaciones para nuestros proyectos:

* Tener un código bien comentado, claro y epxlicativo de nuestras
    funcionalidades, probablemente alguna vez nos toque retomar un proyecto
    luego de un tiempo y si no sabemos porque hicimos lo que hicimos, todo
    se vuelve mas complicado

* Cada una de nuestros .HTML debe contar con su propio archivo .CSS y .JS
    Bien separados y bien identificados
    
* Hacer bocetos de nuestro sitio, sus diferentes funcionalidades, como se compenen 
    su formularios por ejemplo, que va a hacer cada botón, de dónde trae datos a 
    donde los envía...

* En caso de copiar el código, comprenderlo, copiar por copiar no funciona. */

