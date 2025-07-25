document.addEventListener('DOMContentLoaded', function() {

    // 1. Lógica del Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('hidden');
        
    });

    // 2. Inicializar AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 50
    });

    // 3. Lógica MEJORADA de la barra de navegación al hacer scroll
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // Al hacer scroll hacia abajo
            nav.classList.add('scrolled', 'navbar-light'); // Añade la clase para texto oscuro
            nav.classList.remove('navbar-dark'); // Quita la clase para texto claro
        } else {
            // Al estar arriba del todo
            nav.classList.remove('scrolled', 'navbar-light'); // Quita la clase para texto oscuro
            nav.classList.add('navbar-dark'); // Vuelve a poner la clase para texto claro
        }
    });

    // 4. Scroll suave para el indicador (sin cambios)
    const scrollLink = document.querySelector('.scroll-down-indicator');
    if (scrollLink) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});
