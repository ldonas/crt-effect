// Este script crea un efecto de tipografía en la pantalla de la consola.

// El evento DOMContentLoaded se dispara cuando el documento HTML inicial ha sido completamente cargado y parseado.
document.addEventListener("DOMContentLoaded", function(){
    // screen_string es un array que contiene las líneas de texto que se mostrarán en la consola.
    const screen_string = ["> Username:", "Tayrvs", "> Password:", "********", "> Login...", "> Incoming Message:", "Welcome aboard, Captain."];
    // Selecciona el elemento con el id "text" y lo almacena en la variable screen_container.
    const screen_container = document.getElementById("screen");
    // Llama a la función printScreenLines con los elementos seleccionados y las líneas de texto.
    printScreenLines(screen_container, screen_string);
});

// La función printStringByLetter imprime una cadena de texto letra por letra en un elemento dado.
function printStringByLetter(element, string) {
    let i = 0;
    // setInterval llama a una función o evalúa una expresión a intervalos específicos (en milisegundos).
    let intervalId = setInterval(function() {
        // Agrega una letra de la cadena al contenido del elemento cada 100 milisegundos.
        element.textContent = string.substring(0,i+1) + "_";
        i++;
        // Cuando todas las letras de la cadena han sido impresas, se detiene el intervalo.
        if(i == string.length){
            element.textContent = string;
            clearInterval(intervalId);
        }
    }, 100);
}

// La función printScreenLines imprime todas las líneas de texto en los elementos dados.
function printScreenLines(container, strings){
    let time = 0;
    for(let i = 0; i < strings.length; i++){
        // Crea un nuevo elemento p y lo agrega al contenedor.
        const console_line = document.createElement("P");
        container.appendChild(console_line);
        // setTimeout llama a una función o evalúa una expresión después de un número específico de milisegundos.
        setTimeout(function(){
            // Llama a la función printStringByLetter con el elemento y la cadena de texto correspondiente.
            printStringByLetter(console_line, strings[i]);
        }, time);
        // Aumenta el tiempo de espera antes de imprimir la siguiente línea.
        time += strings[i].length * 100;
        // Agrega un tiempo de espera aleatorio entre 100 y 1100 milisegundos después de cada línea.
        time += Math.floor(Math.random() * 1000) + 100;
    }
}