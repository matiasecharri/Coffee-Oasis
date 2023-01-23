// Selecciona el elemento que deseas animar
const animatedElement = document.querySelector('.animado' );

// Crea el observer
const observer = new IntersectionObserver(function(entries) {
  // Comprueba si el elemento es visible
  if (entries[0].isIntersecting) {
    setTimeout(() => {
      animatedElement.classList.add('h4koi');
    }, 200); // Retrasa la animación 2 segundos
  }
});

console.log("saludos")
// Comienza a observar el elemento
observer.observe(animatedElement);



const animatedElement2 = document.querySelector('.animado2' );

// Crea el observer
const observer2 = new IntersectionObserver(function(entries) {
  // Comprueba si el elemento es visible
  if (entries[0].isIntersecting) {
    setTimeout(() => {
      animatedElement2.classList.add('h5koi');
    }, 1800); // Retrasa la animación 2 segundos
  }
});

console.log("saludos")
// Comienza a observar el elemento
observer2.observe(animatedElement2);



