document.addEventListener('DOMContentLoaded', () => {
  const menuCont = document.getElementById('navContainer');
  if (menuCont) {
    fetch('menu.html')
      .then(res => res.text())
      .then(html => {
        menuCont.innerHTML = html;

        // Centrado (asegúrate de que estas propiedades no interfieran con tu CSS para el navbar)
        menuCont.style.position = 'absolute';
        menuCont.style.top = '50%';
        menuCont.style.left = '50%';
        menuCont.style.transform = 'translate(-50%, -50%)';
        menuCont.style.width = '100%';
        menuCont.style.textAlign = 'center';
        menuCont.style.zIndex = '10';

        // Lógica para resaltar la página activa
        const currentPage = window.location.pathname.split('/').pop().toLowerCase();
        const links = menuCont.querySelectorAll('a.nav-link-custom');
          links.forEach(link => {
            const linkHref = link.getAttribute('href').split('/').pop().toLowerCase(); 
            if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
});

      });
  }

  const footerCont = document.getElementById('footerContainer');
  if (footerCont) {
    fetch('footer.html')
      .then(res => res.text())
      .then(html => {
        footerCont.innerHTML = html;
      });
  }
});