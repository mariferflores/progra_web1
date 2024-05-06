let slideIndex = 0;
showSlides();

function showSlides() {
	// Obtiene todas las imágenes dentro del elemento con la clase 'carousel-content'
  const slides = document.querySelectorAll('.carousel-content img');
  // Itera sobre todas las imágenes y remueve la clase 'active' para ocultarlass
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slideIndex++;
   // Si slideIndex supera la cantidad de imágenes, vuelve a la primera imagen
  if (slideIndex > slides.length) { slideIndex = 1; }
   // Agrega la clase 'active' a la imagen actual para mostrarla
  slides[slideIndex - 1].classList.add('active');
 // Llama a la función showSlides nuevamente después de 2000 milisegundos (2 segundos)
  setTimeout(showSlides, 2000); 
}
