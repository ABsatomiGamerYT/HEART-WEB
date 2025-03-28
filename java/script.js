document.addEventListener("DOMContentLoaded", () => {
    // Obtiene todos los botones del menú
    const menuButtons = document.querySelectorAll(".menu-btn");
    const subMenuButtons = document.querySelectorAll(".sub-menu-btn");
    // Obtiene todas las secciones de contenido
    const contentSections = document.querySelectorAll(".content-section");

    const buttons = document.querySelectorAll(".menu-btn");
    const sections = document.querySelectorAll(".content-section");

    // Obtener todos los botones del menú principal
    const menuBtns = document.querySelectorAll('.menu-btn');
    // Obtener todos los sub-menus
    const subMenus = document.querySelectorAll('.sub-menu');

    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const dropdownContent = this.nextElementSibling; // Encuentra el siguiente elemento (contenido)

            if (!dropdownContent || !dropdownContent.classList.contains("dropdown-content")) return;

            // Si ya está abierto, lo cierra
            if (dropdownContent.classList.contains("active")) {
                dropdownContent.classList.remove("active");
                dropdownContent.style.maxHeight = null;
            } else {
                // Cerrar otros dropdowns antes de abrir este
                document.querySelectorAll(".dropdown-content").forEach(content => {
                    content.classList.remove("active");
                    content.style.maxHeight = null;
                });

                dropdownContent.classList.add("active");
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
            }
        });
    });

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-target");

            sections.forEach((section) => {
                section.classList.remove("active");
            });

            document.getElementById(target).classList.add("active");
        });
    });

    // Función para ocultar todos los sub-menus
    function hideSubMenus() {
        subMenus.forEach(subMenu => {
            subMenu.classList.remove('active');
        });
    }

    // Función para mostrar el sub-menu asociado al botón
    function toggleSubMenu(event) {
        const subMenuId = event.target.dataset.section;
        const subMenu = document.getElementById('submenu' + subMenuId);
        
        // Si el submenú ya está activo, lo ocultamos
        if (subMenu.classList.contains('active')) {
            subMenu.classList.remove('active');
        } else {
            hideSubMenus(); // Primero ocultamos todos los sub-menus
            subMenu.classList.add('active'); // Mostramos el submenú correspondiente
        }
    }

    // Agregar evento de clic a cada botón del menú
    menuBtns.forEach(btn => {
        btn.addEventListener('click', toggleSubMenu);
    });

    // Función para mostrar la sección correspondiente al botón
    menuButtons.forEach(button => {
        button.addEventListener("click", () => {
            const sectionId = button.getAttribute("data-section");

            // Oculta todas las secciones
            contentSections.forEach(section => {
                section.classList.remove("active");
            });

            // Muestra la sección correspondiente
            const sectionToShow = document.getElementById(sectionId);
            sectionToShow.classList.add("active");

            // Alterna la visibilidad del sub-menú
            const submenu = document.getElementById("submenu" + sectionId.charAt(sectionId.length - 1));
            submenu.style.display = submenu.style.display === "none" || submenu.style.display === "" ? "block" : "none";
        });
    });

    // Función para manejar los sub-botones
    subMenuButtons.forEach(button => {
        button.addEventListener("click", () => {
            const sectionId = button.getAttribute("data-section");

            // Oculta todas las secciones
            contentSections.forEach(section => {
                section.classList.remove("active");
            });

            // Muestra la subsección correspondiente
            const sectionToShow = document.getElementById(sectionId);
            sectionToShow.classList.add("active");
        });
    });
});
