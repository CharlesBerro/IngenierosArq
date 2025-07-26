document.addEventListener('DOMContentLoaded', function() {

    // 1. Lógica del Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('hidden');
    });

    // 2. Inicializar AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 50
    });

    // =====================================================================
    // =================== LÓGICA AVANZADA DE NAVEGACIÓN ===================
    // =====================================================================
    const nav = document.querySelector('.main-nav');
    const navToggler = document.querySelector('.navbar-toggler');
    let lastScrollY = window.scrollY;

    function handleNavBackground() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            if (!nav.classList.contains('menu-open')) {
                nav.classList.remove('scrolled');
            }
        }
    }

    function handleNavVisibility() {
        // Ocultar solo si hemos bajado más de la altura de la propia nav
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }
        lastScrollY = window.scrollY;
    }

    window.addEventListener('scroll', function() {
        handleNavBackground();
        if (!nav.classList.contains('menu-open')) {
            handleNavVisibility();
        }
    });

    if (navToggler) {
        navToggler.addEventListener('click', function() {
            nav.classList.toggle('menu-open');
            if (nav.classList.contains('menu-open')) {
                nav.classList.add('scrolled');
                nav.classList.remove('nav-hidden');
            } else {
                handleNavBackground();
            }
        });
    }

    window.addEventListener('pageshow', function(event) {
        if (nav.classList.contains('menu-open')) {
            nav.classList.remove('menu-open');
            const bsCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {
              toggle: false
            });
            bsCollapse.hide();
        }
    });
});
