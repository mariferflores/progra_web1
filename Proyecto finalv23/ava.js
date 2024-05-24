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

document.addEventListener('click', function(event) {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    if (!menuToggle.contains(event.target) && !menu.contains(event.target) && menuToggle.querySelector('input').checked) {
        menuToggle.querySelector('input').checked = false;
    }
});