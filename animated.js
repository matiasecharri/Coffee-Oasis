console.log("Nipon Bites fue diseñado y codeado por Matias Echarri");
console.log("Nipon Bites was designed and coded by Matias Echarri");
console.log("https://github.com/matiasecharri");

//// Esto es para aplicarle link a las imagenes triangulares, nada más que eso jaja, no me acuerdo que problema tenia que no funcionaba
let misDivs = document.getElementsByClassName("mi-clase");
for (let i = 0; i < misDivs.length; i++) {
  misDivs[i].addEventListener("click", function () {
    window.location.href = "https://nippon-bites.vercel.app/menu.html";
  });
}

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

// Comienza a observar el elemento
observer.observe(animatedElement);

const animatedElement2 = document.querySelector(".animado2");

// Crea el observer
const observer2 = new IntersectionObserver(function (entries) {
  // Comprueba si el elemento es visible
  if (entries[0].isIntersecting) {
    setTimeout(() => {
      animatedElement2.classList.add("h5koi");
    }, 1500); // Retrasa la animación 2 segundos
  }
});
// Comienza a observar el elemento
observer2.observe(animatedElement2);



