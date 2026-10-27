fetch("https://hp-api.onrender.com/api/characters/")          // Ruta al archivo JSON, son muchas páginas, entonces porgo qué pagina y el tamaño del array data
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                  
    console.log(data);
    data=data.slice(0, 100)    
    personajes = data;                   // Porque es un objeto, con nombre data y adentro de eso está el array
    Mostrarpersonajes(personajes)
    actualizarFiltros()
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });


let personajes = []
let personajesContainer = document.getElementById("personajes-container")

function Mostrarpersonajes (personajes) {
  personajesContainer.innerHTML=""
  let vivo = ""
  personajes.forEach (personaje =>{
    if (personaje.alive) {
      vivo="Está vivoooo 😊"
    }
    else {
      vivo="Está muerto 😢"
    }
    personajesContainer.innerHTML+=
    `<section class=card>
    <h2 class="nombre">${personaje.name}</h2>
    <img src=${personaje.image} alt="foto de ${personaje.name}">
    <h3 class="casa">${personaje.house}</h3>
    <p class="patronus">${personaje.patronus}</p>
    <p class="sangre">${personaje.ancestry}</p>
    <p class="vida">${vivo}</p>
    </section>`
  })
}

let filtrarCasa = document.getElementById("filtrar-casa")
let filtrarSangre = document.getElementById("filtrar-sangre")


function actualizarFiltros () {
  let casas = []
  let sangres = []
  personajes.forEach(personaje =>{
    if (!casas.includes(personaje.house)) {
      casas.push(personaje.house)
    }
    if (!sangres.includes(personaje.ancestry)) {
      sangres.push(personaje.ancestry)
    }
  })
  
  casas.forEach (casa => {
    filtrarCasa.innerHTML += `<option value="${casa}">${casa}</option>`
  })

  sangres.forEach (sangre => {
    filtrarSangre.innerHTML += `<option value="${sangre}">${sangre}</option>`
  })
}