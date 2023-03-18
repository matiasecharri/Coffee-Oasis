//Con esta funcion voy a consumir mi API, es importante que sea una async para indicar que su ejecución no bloqueará el hilo principal y, por lo tanto, la interfaz de usuario no se congelará mientras se realiza la llamada a la API.

//Son 4 pasos al momento de consumir una JSON.API:
// 1: Crear funcion asincrona para no congelar la pagina mientras se obtengan los datos

// 2: Declarar una variable e igualarla a await fetch(colocandoaqui el link de la api) espera hasta que la promesa devuelta por fetch se complete antes de continuar con la ejecución del código. Sin el uso de await, la respuesta de la API no sería accesible hasta que se complete. Esto podría resultar en una respuesta no disponible cuando se intenta acceder a ella más adelante en el código. Con await, se asegura que la respuesta esté disponible antes de intentar acceder a ella.

// 3: Igualar nuestra variable que contiene todo lo de la API a await ____.json() para transformarlo a formato json y poder utilizarla, se hace para convertir la respuesta del servidor que se recibe en formato JSON (JavaScript Object Notation), lo cual lo convierte en un objeto de JavaScript manipulable. Si no se hiciera dataApi.json(), se recibiría la respuesta en formato binario y no podrías acceder a su contenido de manera sencilla..

// 4: Inicializar la funcion asincrona.

//-----------------------------------------------------------//
//CONSUMIENDO API----------------// CODE BLOCK 1
async function consumiendoApi() {
  let containerCards = document.getElementById("menumain");
  containerCards.innerHTML = ` <div class="dot-spinner">
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
`;
  let datosNipponBitesFetch = await fetch(
    "https://my-json-server.typicode.com/matiasecharri/nippon-bites/products"
  );
  let datosNipponBites = await datosNipponBitesFetch.json();
  printer(datosNipponBites);

  //SEARCHBAR----------------// CODE BLOCK 2
  function mySearchbar() {
    //Declaro mi funcion simplemente para mantener organizado el código.
    let userTextFilter = ""; // Creo una variable vacía donde posteriormente voy a guardar lo que escriba el usuario.
    let searchbar = document.getElementById("searchbar1"); // Declaro una variable donde voy a traer mi searchbar.
    searchbar.addEventListener("keyup", (x) => {
      // Necesito que la searchbar responda a lo que se escribe asi que, addEventListener("keyup").
      userTextFilter = x.target.value.toLowerCase(); // Le voy a decir que userTextFiltered va a ser igual al valor en tiempo real que tenga X o sea mi searchbar.
      let datosFiltrados = datosNipponBites.filter((x) => {
        // Voy a crear una variable donde se van a guardar los datos que filtre el usuario al escribir.
        return x.name.toLowerCase().includes(userTextFilter); // Le voy a pedir que me retorne x.name(de mi array nippon) pero solo si incluye lo que el user escribió.
      });
      console.log(userTextFilter);
      if (datosFiltrados.length === 0) {
        //Le voy a decir que si datos filtrados es === 0 me de un mensaje de que eso no existe, porque si el array pasó a tener un .length de 0 es porque no hubo coincidencias entre lo que hay dentro de el y lo que escribio el usuario.
        containerCards.innerHTML = `<p class="text-focus-in" >Sorry, nothing to show! <br> 
      表示するものは何もありません。<p>`; //Aca le digo que quiero mostrarr en ese caso.
      } else {
        printer(datosFiltrados); //En cambio si hay coincidencia quiero que me muestre los datos filtrados.
      }
    });
    searchbar.addEventListener("input", (x) => {
      //Ademas tuve que agregar un addEventListener extra para que cuando el valor de la searchbar sea de ""
      if (searchbar.value === "") {
        //Es decir para cuando el usuario no escribió nada.
        printer(datosNipponBites); //Esto le indica que si el usuario no escribe nada y searchbar sigue vacio tiene que imprimir todo.
      }
    });
  }
  mySearchbar();
  //FIN SEARCHBAR-------------//
}
consumiendoApi();
//IMPRESORA-------------------// CODE ssBLOCK 3
function printer(array) {
  let containerCards = document.getElementById("menumain");
  containerCards.innerHTML = "";
  array.forEach((x) => {
    containerCards.innerHTML += `
<div class="card">
    <div class="cardimage">
      <img src="${x.photo}">
    </div>
    <div class="descriptioncontainercard">
    <h3>${x.name}</h3>
    <p>${x.description}
    </p>
    <div class="pricecard"> Price: $${x.pricex5}</div>
    <button> 私を食べなさい</button>
  </div>
  </div>`;
  });
}
//

//Day 14.9) Working day my friend


//FIN IMPRESORA---------------//

///BOTONES, NO AGREGAR HASTA NO ENTTENDER BIEN EL FILTRO:

// let isFilterActive = false;

// function onlyRolls() {
//   if (isFilterActive) {
//     printer(datosNipponBites);
//     isFilterActive = false;
//   } else {
//     let filteredRolls = datosNipponBites.filter((x) => {
//       return x.categorie === "roll";
//     });
//     printer(filteredRolls);
//     isFilterActive = true;
//   }
// }
// let buttonRoll = document.getElementById("rolls");
// buttonRoll.addEventListener("click", onlyRolls);

// function onlyGourmet() {
//   if (isFilterActive) {
//     printer(datosNipponBites);
//     isFilterActive = false;
//   } else {
//     let filteredGourmet = datosNipponBites.filter((x) => {
//       return x.categorie === "gourmet";
//     });
//     printer(filteredGourmet);
//     isFilterActive = true;
//   }
// }
// let buttonGourmet = document.getElementById("gourmet");
// buttonGourmet.addEventListener("click", onlyGourmet);

// function onlySalads() {
//   if (isFilterActive) {
//     printer(datosNipponBites);
//     isFilterActive = false;
//   } else {
//     let filteredSalads = datosNipponBites.filter((x) => {
//       return x.categorie === "salad";
//     });
//     printer(filteredSalads);
//     isFilterActive = true;
//   }
// }

// let buttonSalads = document.getElementById("salad");
// buttonSalads.addEventListener("click", onlySalads);
