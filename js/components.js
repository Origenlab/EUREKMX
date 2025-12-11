/**
 * EUREK.MX - Component Loader
 * Carga el header y footer en todas las páginas
 */

(function() {
  'use strict';

  /**
   * Carga un componente HTML en un elemento
   * @param {string} componentPath - Ruta al archivo del componente
   * @param {string} targetSelector - Selector del elemento donde insertar
   * @param {string} position - 'replace', 'prepend', o 'append'
   */
  async function loadComponent(componentPath, targetSelector, position = 'replace') {
    try {
      const response = await fetch(componentPath);

      if (!response.ok) {
        throw new Error(`Error cargando ${componentPath}: ${response.status}`);
      }

      const html = await response.text();
      const target = document.querySelector(targetSelector);

      if (!target) {
        console.warn(`Elemento ${targetSelector} no encontrado`);
        return;
      }

      switch (position) {
        case 'prepend':
          target.insertAdjacentHTML('afterbegin', html);
          break;
        case 'append':
          target.insertAdjacentHTML('beforeend', html);
          break;
        case 'replace':
        default:
          target.innerHTML = html;
          break;
      }

      // Disparar evento cuando el componente se carga
      document.dispatchEvent(new CustomEvent('componentLoaded', {
        detail: { path: componentPath, target: targetSelector }
      }));

    } catch (error) {
      console.error('Error cargando componente:', error);
    }
  }

  /**
   * Inicializa los componentes del sitio
   */
  async function initComponents() {
    // Cargar header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      await loadComponent('/components/header.html', '#header-placeholder');
    }

    // Cargar footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      await loadComponent('/components/footer.html', '#footer-placeholder');
    }

    // Marcar enlace activo en navegación
    markActiveNavLink();

    // Inicializar funcionalidad del menú móvil después de cargar
    initMobileMenu();
  }

  /**
   * Marca el enlace de navegación activo
   */
  function markActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');

      // Comparar rutas
      if (href === currentPath ||
          (currentPath === '/' && href === '/index.html') ||
          (currentPath.endsWith('/') && href === currentPath + 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Inicializa el menú móvil
   */
  function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navActions = document.querySelector('.nav-actions');

    if (!mobileMenuToggle) return;

    let isMobileMenuOpen = false;

    mobileMenuToggle.addEventListener('click', () => {
      isMobileMenuOpen = !isMobileMenuOpen;
      mobileMenuToggle.setAttribute('aria-expanded', isMobileMenuOpen);

      if (isMobileMenuOpen) {
        navMenu.style.cssText = `
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(10, 22, 40, 0.98);
          padding: 1.5rem;
          gap: 1rem;
          border-top: 1px solid #1e3a5f;
        `;

        navActions.style.cssText = `
          display: flex;
          flex-direction: column;
          position: absolute;
          top: calc(100% + 160px);
          left: 0;
          right: 0;
          background: rgba(10, 22, 40, 0.98);
          padding: 1.5rem;
          gap: 0.75rem;
          border-bottom: 1px solid #1e3a5f;
        `;

        mobileMenuToggle.classList.add('active');
      } else {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
          navActions.style.display = 'none';
        }
        mobileMenuToggle.classList.remove('active');
      }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (isMobileMenuOpen && !e.target.closest('.nav')) {
        isMobileMenuOpen = false;
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
          navActions.style.display = 'none';
        }
        mobileMenuToggle.classList.remove('active');
      }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        isMobileMenuOpen = false;
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
          navActions.style.display = 'none';
        }
        mobileMenuToggle.classList.remove('active');
      }
    });
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents();
  }

  // Exponer función para uso externo si es necesario
  window.EurekComponents = {
    loadComponent,
    initComponents
  };

})();
