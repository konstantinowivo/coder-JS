// Vamos a codear un juego donde haya que adivinar el número

// document.querySelector(".message").textContent = "Hola";
// Usamos text.Content porque dentro de las etiquetas hay
// texto.

// document.querySelector(".guess").value = 7;
// En esta caso vamos a usar .value porque dentro de la
// etiqueta hay números.

// 2) 
// a) Vamos a generar nuestro "número secreto", fuera de la función
// que veamos a continuación, esto lo hacemos debido al ámbito de los valores (scope)
// b) usamos el objeto "Math.random" que nos devuelve un número entre 0 y 1,
// como tenemos que adivinar entre 1 y 20 multiplicamos "Math.random() * 20".
// Pero si lo hacemos de esta manera, nos da un numero entre 1 y 19, entonces hacemos
// (Math.random() * 20 + 1) de esa manera entre 1 y 20,
// c) Luego vamos a utilizar el metodo .trunc (que nos va a anular los decimales)
const numeroSecreto = Math.trunc(Math.random() * 20 + 1);

// 6) Creamos una variable en 20, que va a representar a nuestras vidas
let lives = 20 ;

// 1) 
// Vamos a hacer es acceder al html mediante DOM
// En este caso lo hacemos con document.querySelector y la clase "check", que es un botón
document.querySelector(".check").addEventListener('click', function(){ //<-- Luego vamos a pasar el evento y luego la función
  const guess = Number(document.querySelector(".guess").value); //<-- vamos a aplicar la función Number(), porque va a entrar en método string
// 3) mediante un if, vamos a pedirle al usuario que ingrese una opción valida, anteriormente lo haciamos mediante un alert,
// pero ahora podemos hacerlo con DOM 
  if(!guess){
    document.querySelector(".message").textContent = "⛔ introduce un número";
// 4) Otra de las opciones es que mi usuario gane
  } else if (guess === numeroSecreto){
    document.querySelector(".message").textContent = "ADIVINASTE! 😁👍";
// 9) En caso de que ganemos podemos por ej. modificar el background del body
    document.querySelector('body').style.background = "#60b347"
// 5) Podemos brindar ayudas al usuario
  } else if (guess < numeroSecreto) {
// 8) para que el contador de vidas no nos de negativo, agregamos 
    if (lives > 0){
    document.querySelector(".message").textContent = "Numero muy bajo";
// 7) Vamos a restar vidas cada vez que nos equivocamos
    lives--;
    document.querySelector(".lives").textContent = lives;
  } else {
    document.querySelector(".message").textContent = "perdiste 😢";
  }
  }  else if (guess > numeroSecreto) {
    if (lives > 0){
    document.querySelector(".message").textContent = "Te pasaste..";
    lives--;
    document.querySelector(".lives").textContent = lives;
  } else {
    document.querySelector(".message").textContent = "perdiste 😢";
  }
  }
});



