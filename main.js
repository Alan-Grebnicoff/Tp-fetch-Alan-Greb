fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")          // Ruta al archivo JSON, son muchas páginas, entonces porgo qué pagina y el tamaño del array data
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                  
    console.log(data);
    data.slice(0, 100) 
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
  personajes.forEach (personaje =>{
    personajesContainer.innerHTML+=
    `<section class=card>
    <h2 class="nombre">${personaje.name}</h2>
    <img src=${personaje.images.lg} alt="foto de ${personaje.name}">
    <h3 class="familia">${personaje.family}</h3>
    <p class="titulo">${personaje.title}</p>
    </section>`
  })
}

let filtrarFamilia = document.getElementById("filtrar-familia")
let filtrarTitulo = document.getElementById("filtrar-titulo")


function actualizarFiltros () {
  let familias = []
  let titulos = []
  personajes.forEach(personaje =>{
    if (!familias.includes(personaje.family)) {
      familias.push(personaje.family)
    }
    if (!titulos.includes(personaje.title)) {
      titulos.push(personaje.title)
    }
  })
  
  familias.forEach (familia => {
    filtrarFamilia.innerHTML += `<option value="${familia}">${familia}</option>`
  })

  titulos.forEach (title => {
    filtrarTitulo.innerHTML += `<option value="${title}">${title}</option>`
  })
}


function filtrar() {
  let personajesFiltrados = personajes.filter(personaje => {
    return personaje.family.includes(filtrarFamilia.value)
    && personaje.title.includes(filtrarTitulo.value)
  })

  Mostrarpersonajes(personajesFiltrados)
}

filtrarFamilia.addEventListener ("change", filtrar)
filtrarTitulo.addEventListener("change", filtrar)