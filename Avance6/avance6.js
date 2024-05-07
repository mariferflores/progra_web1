// Simulación de comentarios cargados desde una base de datos
const comentarios = [
    { nombre: "Usuario1", comentario: "¡Esto es genial!" },
    { nombre: "Usuario2", comentario: "Me encanta el manejo de archivos JavaScript." }
];

// Función para mostrar los comentarios en la página
function mostrarComentarios() {
    const comentariosDiv = document.getElementById('comentarios');
    comentariosDiv.innerHTML = '';

    comentarios.forEach(comentario => {
        comentariosDiv.innerHTML += `<p><strong>${comentario.nombre}:</strong> ${comentario.comentario}</p>`;
    });
}

mostrarComentarios();

// Manejo del envío de comentarios
document.getElementById('formulario-comentario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    
    comentarios.push({ nombre: nombre, comentario: comentario });
    mostrarComentarios();

    // Puedes agregar aquí la lógica para guardar el comentario en una base de datos
});
