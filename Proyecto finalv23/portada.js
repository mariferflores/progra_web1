document.addEventListener('click', function(event) {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    // Si el clic ocurre fuera del menú y el menú está abierto, cierra el menú
    if (!menuToggle.contains(event.target) && !menu.contains(event.target) && menuToggle.querySelector('input').checked) {
        menuToggle.querySelector('input').checked = false;
    }
});