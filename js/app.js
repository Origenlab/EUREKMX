/**
 * EUREK.MX - Directorio Empresarial de México
 * Main Application JavaScript
 */

(function() {
  'use strict';

  // DOM Elements
  const header = document.querySelector('.header');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navActions = document.querySelector('.nav-actions');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchQuery');

  // State
  let lastScrollY = 0;
  let isMobileMenuOpen = false;

  /**
   * Initialize the application
   */
  function init() {
    setupMobileMenu();
    setupScrollEffects();
    setupSearch();
    setupSmoothScroll();
    setupStatCounters();
  }

  /**
   * Mobile Menu Toggle
   */
  function setupMobileMenu() {
    if (!mobileMenuToggle) return;

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (isMobileMenuOpen && !e.target.closest('.nav')) {
        closeMobileMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    });
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    mobileMenuToggle.setAttribute('aria-expanded', isMobileMenuOpen);

    if (isMobileMenuOpen) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  }

  function openMobileMenu() {
    navMenu.style.display = 'flex';
    navActions.style.display = 'flex';

    // Apply mobile styles
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
      top: calc(100% + 180px);
      left: 0;
      right: 0;
      background: rgba(10, 22, 40, 0.98);
      padding: 1.5rem;
      gap: 0.75rem;
      border-bottom: 1px solid #1e3a5f;
    `;

    mobileMenuToggle.classList.add('active');
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
    mobileMenuToggle.setAttribute('aria-expanded', 'false');

    // Reset to CSS default (hidden on mobile)
    if (window.innerWidth <= 768) {
      navMenu.style.display = 'none';
      navActions.style.display = 'none';
    }

    mobileMenuToggle.classList.remove('active');
  }

  /**
   * Scroll Effects
   */
  function setupScrollEffects() {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  function handleScroll() {
    const scrollY = window.scrollY;

    // Header background opacity
    if (header) {
      if (scrollY > 50) {
        header.style.background = 'rgba(10, 22, 40, 0.98)';
      } else {
        header.style.background = 'rgba(10, 22, 40, 0.95)';
      }
    }

    lastScrollY = scrollY;
  }

  /**
   * Search Functionality
   */
  function setupSearch() {
    if (!searchForm) return;

    searchForm.addEventListener('submit', handleSearch);

    // Auto-suggest setup (placeholder for future implementation)
    if (searchInput) {
      searchInput.addEventListener('input', debounce(handleSearchInput, 300));
    }
  }

  function handleSearch(e) {
    e.preventDefault();

    const formData = new FormData(searchForm);
    const query = formData.get('q');
    const location = formData.get('location');

    // Build search URL
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (location) params.set('location', location);

    // For now, log the search (replace with actual navigation)
    console.log('Search:', { query, location });

    // Navigate to search results (when page exists)
    // window.location.href = `/buscar?${params.toString()}`;

    // Show feedback
    showSearchFeedback();
  }

  function handleSearchInput(e) {
    const value = e.target.value;

    // Placeholder for auto-suggest functionality
    if (value.length >= 2) {
      // Fetch suggestions from API
      // displaySuggestions(suggestions);
    }
  }

  function showSearchFeedback() {
    const btn = searchForm.querySelector('.search-btn');
    const originalText = btn.innerHTML;

    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Buscando...</span>
    `;

    setTimeout(() => {
      btn.innerHTML = originalText;
    }, 1500);
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          // Close mobile menu if open
          if (isMobileMenuOpen) {
            closeMobileMenu();
          }

          // Calculate offset for fixed header
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Animated Stat Counters
   */
  function setupStatCounters() {
    const stats = document.querySelectorAll('.stat-number[data-count]');

    if (stats.length === 0) return;

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
  }

  function animateCounter(element) {
    const target = parseInt(element.dataset.count, 10);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    const suffix = element.textContent.includes('+') ? '+' : '';

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const current = Math.floor(start + (target - start) * easeOut);
      element.textContent = formatNumber(current) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /**
   * Utility Functions
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function formatNumber(num) {
    return num.toLocaleString('es-MX');
  }

  /**
   * Quick Filter Tags
   */
  document.querySelectorAll('.quick-filter-tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.preventDefault();
      const searchTerm = tag.textContent;

      if (searchInput) {
        searchInput.value = searchTerm;
        searchInput.focus();
      }
    });
  });

  /**
   * Category Cards Hover Effect
   */
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
