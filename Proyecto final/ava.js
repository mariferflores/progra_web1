function mostrarVideos() {
    ocultarTodo();
    document.getElementById('video-gallery').classList.add('active');
}

function mostrarFotos() {
    ocultarTodo();
    document.getElementById('photo-gallery').classList.add('active');
}

function mostrarFAQ() {
    ocultarTodo();
    document.getElementById('faq').classList.add('active');
}

function ocultarTodo() {
    var galleries = document.querySelectorAll('.gallery');
    galleries.forEach(function(gallery) {
        gallery.classList.remove('active');
    });
}