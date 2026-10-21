fetch("https://api.disneyapi.dev/character")          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                  
    console.log(data);    
    /*comidas = data;                   // Asignar el JSON a la variable comidas
    mostrarComidas(comidas)
    actualizarFiltros()*/
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

function MostrarPersonajes () {}