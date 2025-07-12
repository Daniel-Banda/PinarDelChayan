document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('navContainer');
  if (navContainer) {
    fetch('nav.html')
      .then(res => res.text())
      .then(html => {
        navContainer.innerHTML = html;

        const isDesktop = window.innerWidth >= 768;
        const desktopNav = document.getElementById('desktopNav');

        // Detectar página actual
        let currentPage = window.location.pathname.split('/').pop().toLowerCase();
        if (!currentPage || currentPage === '') currentPage = 'index.html';

        // Nav desktop: posición absoluta centrada según página
        if (isDesktop && desktopNav) {
          desktopNav.style.position = 'absolute';

          if (currentPage === 'index.html') {
            desktopNav.style.top = '65%';
          } else if (currentPage === 'eventos.html') {
            desktopNav.style.top = '35%';
          } else {
            desktopNav.style.top = '10%';
          }

          desktopNav.style.left = '50%';
          desktopNav.style.transform = 'translate(-50%, -50%)';
          desktopNav.style.zIndex = '10';
          desktopNav.style.width = '100%';
          desktopNav.style.textAlign = 'center';
        }

        // Resaltar enlace activo
        const links = navContainer.querySelectorAll('a.nav-link-custom');
        links.forEach(link => {
          const href = link.getAttribute('href');
          if (!href || href.startsWith('http')) return; // Ignorar enlaces externos

          const hrefNormalized = href.split('/').pop().toLowerCase();

          if (
            currentPage === 'index.html' && (hrefNormalized === 'index.html' || hrefNormalized === '')
          ) {
            link.classList.add('active');
          } else if (hrefNormalized === currentPage) {
            link.classList.add('active');
          }
        });

        // Funcionalidad botón hamburguesa móvil
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (hamburgerBtn && mobileMenu) {
          hamburgerBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            hamburgerBtn.setAttribute('aria-expanded', isOpen);
            mobileMenu.setAttribute('aria-hidden', !isOpen);
          });

          // Cerrar menú al hacer clic fuera de él
          document.addEventListener('click', (event) => {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnButton = hamburgerBtn.contains(event.target);
            const isMenuOpen = mobileMenu.classList.contains('open');

            if (!isClickInsideMenu && !isClickOnButton && isMenuOpen) {
              mobileMenu.classList.remove('open');
              hamburgerBtn.setAttribute('aria-expanded', 'false');
              mobileMenu.setAttribute('aria-hidden', 'true');
            }
          });
        }
      });
  }

  // Cargar footer
  const footerCont = document.getElementById('footerContainer');
  if (footerCont) {
    fetch('footer.html')
      .then(res => res.text())
      .then(html => {
        footerCont.innerHTML = html;
      });
  }
});
