let numero = 0;
let datos = [];
const boton = document.getElementById('btn');
const areaTitulo = document.getElementById("title");
const areaContenido = document.getElementById("content");
const areaVideo = document.getElementById("video");

// Esta función realiza una solicitud GET para obtener datos del servidor.
function obtenerDatos() {
  const solicitud = new XMLHttpRequest();
  solicitud.onreadystatechange = function() {
    if (solicitud.readyState == 4 && solicitud.status == 200) {
      datos = solicitud.response;
      actualizarContenido();
    }
  }
  solicitud.open("GET", "data/ajax.json");
  solicitud.responseType = "json";
  solicitud.send(null);
}

// Esta función actualiza el contenido de la página con los datos obtenidos.
function actualizarContenido() {
  areaTitulo.innerHTML = datos[numero].titulo;
  areaContenido.innerHTML = datos[numero].contenido;
  areaVideo.setAttribute("src", datos[numero].url);
  numero = (numero + 1) % datos.length;
}

// Esta función cambia el video cuando se hace clic en el botón.
function cambiarVideo() {
  if (datos.length === 0) {
    obtenerDatos();
  } else {
    actualizarContenido();
  }
}

boton.addEventListener('click', cambiarVideo);
window.onload = cambiarVideo;
