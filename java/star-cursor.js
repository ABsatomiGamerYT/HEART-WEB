document.addEventListener('mousemove', function(e) {
    const menu = document.querySelector('nav'); // Seleccionamos el menú
    
    // Verificamos si el cursor está dentro del menú
    const isOverMenu = e.target.closest('nav');
    
    // Si el cursor está en el menú, no creamos el destello
    if (!isOverMenu) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        document.body.appendChild(sparkle);
        
        sparkle.style.left = `${e.pageX - 5}px`;
        sparkle.style.top = `${e.pageY - 5}px`;

        // Remover el destello después de 0.5 segundos
        setTimeout(() => {
            sparkle.remove();
        }, 500);
    }
});
