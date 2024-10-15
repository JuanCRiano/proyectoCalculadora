// Creación de constante para guardar lo registrado en la pantalla
const pantalla = document.querySelector(".pantalla");

// Creación de constante para guardar los botones presionados en la calculadora
const botones = document.querySelectorAll(".boton");


//tamaño del texto

// Registro de eventos (Clicks) para cada boton en la calculadora
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    
    // Guarda el registro del valor presionado(Agregado)
    const botonOn = boton.textContent; 

    //Guarda en un array los simbolos aritméticos usados en la calculadora
    const simboloOperacion = ['+', '-', '*', '/'];

    //Guarda el registro del ultimo valor ingresado antes del valor presionado
    const ultimoIngreso = pantalla.textContent.slice(-1);

    // Si se hace clic en el botón "C" (limpiar), reinicia la pantalla a "0"
    if (boton.id === "limpiar") {
        pantalla.textContent = "0";
        pantalla.style.fontSize = "3rem";
        return;
    }
    
    // Evalua que la operación matemática sea correcta
    if (boton.id === "igual") {
        try {
            pantalla.textContent = eval(pantalla.textContent);
        } catch {
            pantalla.textContent = "¡Syntax Error!";
        }

        if (pantalla.textContent.length > 7 || pantalla.textContent === "¡Syntax Error!"){

            pantalla.style.fontSize = "1.8rem";
    
        } else if(pantalla.textContent.length > 14){

            pantalla.style.fontSize = "1.2rem";

        } else{

            pantalla.style.fontSize = "3rem";
            
        }

        return;
    } 
    

    // Elimina o reemplaza a "0" los valores mostrados en pantalla al oprimir el boton "Borrar"
    if (boton.id === "borrar") {
        if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Syntax Error!"){
            pantalla.textContent = "0";
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        return;
    }
    // Reemplaza el valor mostrado en pantalla en caso de que sea "0" o "¡Syntax Error!" por el valor presionado
    // Compara
    if (pantalla.textContent === "0" || pantalla.textContent === "¡Syntax Error!" ){

        pantalla.textContent = botonOn;

    } else if(simboloOperacion.includes(botonOn) && simboloOperacion.includes(ultimoIngreso)) {

        pantalla.textContent = pantalla.textContent.slice(0,-1) + botonOn;

    } else{

        pantalla.textContent += botonOn;

    }

    // Desplaza la información ingresada hacia la derecha, permitiendo ver los valores ingresados
    pantalla.scrollLeft = pantalla.scrollWidth;
  })
})