document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenedor-imagenpresentacion
    var contenedorpre = document.getElementById("contenedor-imagenpresentacion");
    var contenedorcon = document.getElementById("contenedor-conocimientos");
    var contenedorcur = document.getElementById("contenedor-cursos");

    // Agregar la clase 'reveal' después de 1.5 segundos
    setTimeout(function() {
        contenedorpre.classList.add("reveal");
        contenedorcon.classList.add("reveal");
        contenedorcur.classList.add("reveal");
    }, 550); // Ajusta el tiempo de espera según sea necesario
});
/*
document.addEventListener("DOMContentLoaded", function () {
    // Obtener los contenedores
    var contenedorpre = document.getElementById("contenedor-imagenpresentacion");
    var contenedorcon = document.getElementById("contenedor-conocimientos");
    var contenedorcur = document.getElementById("contenedor-cursos");

    // Función para verificar si un elemento está visible en la ventana del navegador
    function estaVisible(elemento) {
        var rect = elemento.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Verificar si la parte superior o inferior del elemento está dentro de la ventana
        return (
            (rect.top <= windowHeight && rect.bottom >= 0) ||
            (rect.bottom >= 0 && rect.top <= 0)
        );
    }

    // Función para manejar el evento de desplazamiento
    function manejarDesplazamiento() {
        if (estaVisible(contenedorpre)) {
            setTimeout(function () {
                contenedorpre.classList.add("reveal");
                contenedorpre.style.animation = "slideInFromLeft 0.7s ease-out forwards";
            }, 600); // Agregar la clase después de 1.5 segundos
        } else {
            contenedorpre.classList.remove("reveal");
            contenedorpre.style.animation = "none";
        }
        if (estaVisible(contenedorcon)) {
            setTimeout(function () {
                contenedorcon.classList.add("reveal");
                contenedorcon.style.animation = "slideInFromRight 0.7s ease-out forwards";
            }, 600); // Agregar la clase después de 1.5 segundos
        } else {
            contenedorcon.classList.remove("reveal");
            contenedorcon.style.animation = "none";
        }
        if (estaVisible(contenedorcur)) {
            setTimeout(function () {
                contenedorcur.classList.add("reveal");
                contenedorcur.style.animation = "slideInFromLeft 0.7s ease-out forwards";
            }, 600); // Agregar la clase después de 1.5 segundos
        } else {
            contenedorcur.classList.remove("reveal");
            contenedorcur.style.animation = "none";
        }
    }

    // Llamar a la función al cargar la página y al desplazarse
    manejarDesplazamiento();
    window.addEventListener("scroll", manejarDesplazamiento);
});
*/
