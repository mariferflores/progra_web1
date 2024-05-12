// JavaScript para mostrar y ocultar los botones al pasar el cursor sobre "Diseño Estructural"

document.addEventListener("DOMContentLoaded", function() {
    const desplegable = document.getElementById("desplegable");
    const disenoEstructural = document.getElementById("diseno-estructural");

    // Mostrar los botones desplegables cuando el cursor está sobre "Diseño Estructural"
    disenoEstructural.addEventListener("mouseover", function() {
        desplegable.style.display = "block";
    });

    // Ocultar los botones desplegables cuando el cursor está fuera de "Diseño Estructural" o de los botones desplegables
    disenoEstructural.addEventListener("mouseout", function(event) {
        const isInsideDisenoEstructural = disenoEstructural.contains(event.relatedTarget);
        const isInsideDesplegable = desplegable.contains(event.relatedTarget);

        if (!isInsideDisenoEstructural && !isInsideDesplegable) {
            desplegable.style.display = "none";
        }
    });

    // Mantener los botones desplegables visibles al pasar el cursor sobre ellos
    desplegable.addEventListener("mouseover", function() {
        desplegable.style.display = "block";
    });

    // Ocultar los botones desplegables cuando el cursor está fuera de ellos
    desplegable.addEventListener("mouseout", function(event) {
        if (!desplegable.contains(event.relatedTarget)) {
            desplegable.style.display = "none";
        }
    });
});
