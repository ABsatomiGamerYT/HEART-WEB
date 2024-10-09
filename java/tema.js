// tema.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggleTheme');
    const lightThemeLink = document.getElementById('lightTheme');
    const darkThemeLink = document.getElementById('darkTheme');
    const body = document.body;

    // Obtener tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Cambiar a tema claro
    lightThemeLink.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    });

    // Cambiar a tema oscuro
    darkThemeLink.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    });

    // Alternar entre temas
    toggleThemeButton.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});
