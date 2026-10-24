fetch("https://api.disneyapi.dev/character?pageSize=700")          // Ruta al archivo JSON, son muchas páginas, entonces porgo qué pagina y el tamaño del array data
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                  
    console.log(data);    
    personajes = data.data;                   // Porque es un objeto, con nombre data y adentro de eso está el array
    MostrarPersonajes(personajes)
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });


let personajes = []
let personajesContainer = document.getElementById("personajes-container")

function MostrarPersonajes (personajes) {
  personajesContainer.innerHTML=""
  personajes.forEach (personaje =>{
    personajesContainer.innerHTML+=
    `<section class=card>
    <h2 class="nombre">${personaje.name}</h2>
    <img src=${personaje.imageUrl} alt="Personaje ${personaje.name}">
    <ul>
    ${personaje.films.map(pelicula => `<li>${pelicula}</li>`).join('')}
    ${personaje.shortFilms.map(pelicula => `<li>${pelicula}</li>`).join('')} 
    ${personaje.tvShows.map(show => `<li>${show}</li>`).join('')}
    </ul>
    </section>`
  })
}