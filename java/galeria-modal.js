// Obtener el modal y el contenido de la imagen
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var images = document.getElementsByClassName("imagen-port");
var closeBtn = document.getElementsByClassName("close")[0];

// Agregar el evento de click a cada imagen para abrir el modal
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.querySelector('img').src; // Tomar la fuente de la imagen dentro del contenedor .imagen-port
    }
}

// Evento de cierre del modal cuando se presiona el botón "X"
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// También puedes permitir cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
