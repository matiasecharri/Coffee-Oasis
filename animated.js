console.log("Nipon Bites fue diseñado y codeado por Matias Echarri");
console.log("Nipon Bites was designed and coded by Matias Echarri");
console.log("https://github.com/matiasecharri");
const $misDivs = document.querySelectorAll(".mi-clase");

$misDivs.forEach(div => {
  div.addEventListener("click", event => {
    window.location.href = "/menu.html";
  });
});

// Selecciona el elemento que deseas animar
const animatedElement = document.querySelector(".animado");

// Crea el observer
const observer = new IntersectionObserver(function (entries) {
  // Comprueba si el elemento es visible
  if (entries[0].isIntersecting) {
    setTimeout(() => {
      animatedElement.classList.add("h4koi");
    }, 200); // Retrasa la animación 2 segundos
  }
});

// Comienza a observar el elemento ???? OBSERVA DESDE QUE CARGA!!!
observer.observe(animatedElement);

const animatedElement2 = document.querySelector(".animado2");

// Crea el observer
const observer2 = new IntersectionObserver(function (entries) {
  // Comprueba si el elemento es visiblex
  if (entries[0].isIntersecting) {
    setTimeout(() => {
      animatedElement2.classList.add("h5koi");
    }, 1500); // Retrasa la animación 1.5* segundos
  }
});
// Comienza a observar el elemento
observer2.observe(animatedElement2);
