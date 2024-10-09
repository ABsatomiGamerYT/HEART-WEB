// Obtén el modal
var modal = document.getElementById("myModal");

// Obtén la imagen y el texto del caption
var img = document.getElementsByClassName("modal-img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Agrega el evento a cada imagen
for (let i = 0; i < img.length; i++) {
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.nextElementSibling.innerHTML; // Toma el texto del caption
    }
}

// Cuando el usuario hace clic en (x), cierra el modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}
