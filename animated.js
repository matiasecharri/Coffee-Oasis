// Selecciona el elemento que deseas animar
const animatedElement = document.querySelector('.animado');

// Crea el observer
const observer = new IntersectionObserver(function(entries) {
  // Comprueba si el elemento es visible
  if (entries[0].isIntersecting) {
    setTimeout(() => {
      animatedElement.classList.add('h4koi');
    }, 100); // Retrasa la animación 2 segundos
  }
});

console.log("saludos")
// Comienza a observar el elemento
observer.observe(animatedElement);



