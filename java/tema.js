document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggleTheme');
    const lightThemeLink = document.getElementById('lightTheme');
    const darkThemeLink = document.getElementById('darkTheme');
    const body = document.body;

    // Obtener tema guardado
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        body.classList.add(savedTheme); // Aplicar tema guardado al cargar la página
    } else {
        // Si no hay tema guardado, establecer tema oscuro por defecto
        body.classList.add('dark-theme');
    }

    // Cambiar a tema claro
    lightThemeLink.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme'); // Guardar la preferencia
    });

    // Cambiar a tema oscuro
    darkThemeLink.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme'); // Guardar la preferencia
    });

    // Alternar entre temas al hacer clic en el botón
    toggleThemeButton.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme'); // Guardar la preferencia
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme'); // Guardar la preferencia
        }
    });
});
