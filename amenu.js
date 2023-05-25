//Con esta funcion voy a consumir mi API, es importante que sea una async para indicar que su ejecución no bloqueará el hilo principal y, por lo tanto, la interfaz de usuario no se congelará mientras se realiza la llamada a la API.

//Son 4 pasos al momento de consumir una JSON.API:
// 1: Crear funcion asincrona para no congelar la pagina mientras se obtengan los datos

// 2: Declarar una variable e igualarla a await fetch(colocandoaqui el link de la api) espera hasta que la promesa devuelta por fetch se complete antes de continuar con la ejecución del código. Sin el uso de await, la respuesta de la API no sería accesible hasta que se complete. Esto podría resultar en una respuesta no disponible cuando se intenta acceder a ella más adelante en el código. Con await, se asegura que la respuesta esté disponible antes de intentar acceder a ella.

// 3: Igualar nuestra variable que contiene todo lo de la API a await ____.json() para transformarlo a formato json y poder utilizarla, se hace para convertir la respuesta del servidor que se recibe en formato JSON (JavaScript Object Notation), lo cual lo convierte en un objeto de JavaScript manipulable. Si no se hiciera dataApi.json(), se recibiría la respuesta en formato binario y no podrías acceder a su contenido de manera sencilla..

// 4: Inicializar la funcion asincrona.
//Another Wordpress day
//-----------------------------------------------------------//

//01:01, 2nd commit of the day.
//FIXED GA4 CONVERSIONS!
//-2000
//FIxy
//Saturday --
//Tuesday Bamboo Plumbing
//RIP M1
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
