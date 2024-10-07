// Obtener los elementos del DOM
const body = document.body;
const lightThemeBtn = document.getElementById('lightTheme');
const darkThemeBtn = document.getElementById('darkTheme');

// Función para aplicar el tema
function applyTheme(theme) {
    body.classList.remove('light-theme', 'dark-theme'); // Elimina temas anteriores
    body.classList.add(theme); // Aplica el tema seleccionado
}

// Función para guardar el tema en LocalStorage
function setTheme(theme) {
    localStorage.setItem('selectedTheme', theme); // Guarda el tema en LocalStorage
    applyTheme(theme); // Aplica el tema inmediatamente
}

// Eventos para cambiar el tema
lightThemeBtn.addEventListener('click', function() {
    setTheme('light-theme'); // Al hacer clic en el tema claro
});

darkThemeBtn.addEventListener('click', function() {
    setTheme('dark-theme'); // Al hacer clic en el tema oscuro
});

// Comprobar si hay un tema guardado en LocalStorage y aplicarlo
const savedTheme = localStorage.getItem('selectedTheme');
if (savedTheme) {
    applyTheme(savedTheme); // Si hay un tema guardado, se aplica
} else {
    setTheme('light-theme'); // Por defecto, se aplica el tema claro
}
