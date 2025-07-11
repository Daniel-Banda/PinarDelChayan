const menuData = {
 entradas: {
    items: [
      { nombre: 'Guacamole', precio: 105 },
      { nombre: 'Queso Fundido', precio: 135 },
      { nombre: 'Queso Fundido Mixto', precio: 145, descripcion: 'Con champiñones, chorizo, tocino o rajas' },
      { nombre: 'Quesadillas', precio: 85 },
      { nombre: 'Panela Horneada', precio: 145, descripcion: 'A la fina hierba' },
      { nombre: 'Chistorra', precio: 135 },
      { nombre: 'Cecina (200grs)', precio: 235 },
      { nombre: 'Manitas De Cerdo', precio: 95, descripcion: 'Cocidas con salsa mexicana' },
      { nombre: 'Jalapeños Don Cástulo', precio: 99, descripcion: 'Rellenos de queso crema y envueltos en tocino' },
      { nombre: 'Chiles Don Polo', precio: 105, descripcion: 'Chiles güeros rellenos de queso de cabra, ceniza de chile guajillo y nueces' },
      { nombre: 'Tacos De Cabeza', precio: 89 },
      { nombre: 'Tacos De Frijoles', precio: 69, descripcion: 'A las brasas (4 pzas.)' },
      { nombre: 'Champiñones', precio: 125, descripcion: 'Frescos, al ajo o al ajillo' },
      { nombre: 'Nopales Gratinados', precio: 90 },
      { nombre: 'Nopales En 3 Salsas', precio: 88, descripcion: 'Chipotle, cilantro y huitlacoche' },
    ],
    imagenes: [
      { src: '../IMG/jpg/platillos/guacamole.avif', titulo: 'Guacamole' },
      { src: '../IMG/jpg/platillos/quesoFundido.avif', titulo: 'Queso Fundido Mixto' },
      { src: '../IMG/jpg/platillos/panelaHorneada.avif', titulo: 'Panela Horneada' },
      { src: '../IMG/jpg/platillos/cecina.avif', titulo: 'Cecina' },
      { src: '../IMG/jpg/platillos/chistorra.avif', titulo: 'Chistorra' },
      { src: '../IMG/jpg/platillos/jalapenosDonCastulo.avif', titulo: 'Jalapeños Don Cástulo' },
      { src: '../IMG/jpg/platillos/chilesDonPolo.avif', titulo: 'Chiles Don Polo' },
      { src: '../IMG/jpg/platillos/champinones.avif', titulo: 'Champiñones' },
    ]
  },
  sopas: {
    items: [
      { tipo: 'titulo', texto: 'Sopas' },
      { nombre: "Crema De Champiñones Frescos", precio: 95 },
      { nombre: "Sopa Azteca", precio: 98, descripcion: 'Tortilla frita, queso, crema y aguacate' },
      { nombre: "Sopa De Verduras", precio: 87 },
      { nombre: "Consomé De Pollo", precio: 95, descripcion: '* SOLO LOS DOMINGOS' },

      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'Ensaladas' },
      { nombre: "De La Campiña", precio: 165, descripcion: 'Espinacas, tomate cherry, nuez de la India y queso de cabra con vinagreta de mandarina' },
      { nombre: "Pinar", precio: 158, descripcion: 'Lechuga, pera, ciruela pasa y nuez con vinagreta de arándanos' },
      { nombre: "Primavera", precio: 160, descripcion: 'Lechuga, almendra, amaranto y uvas con vinagreta de mango' },
    ],
    imagenes: [
      { src: '../IMG/jpg/platillos/sopaAzteca.avif', titulo: 'Sopa Azteca' },
      { src: '../IMG/jpg/platillos/consome.avif', titulo: 'Consomé de Pollo' },
      { src: '../IMG/jpg/platillos/cremaDeChampinones.avif', titulo: 'Crema De Champiñones' },
      { src: '../IMG/jpg/platillos/ensaladaPinar.avif', titulo: 'Ensalada Pinar' },
      { src: '../IMG/jpg/platillos/ensaladaPrimavera.avif', titulo: 'Ensalada Primavera' },
      { src: '../IMG/jpg/platillos/ensaladaDeLaCampina.avif', titulo: 'Ensalada De La Campiña' },
    ]
  },
  carnes: {
    items: [
      { tipo: 'titulo', texto: 'Molcajetes' },
      { nombre: "Codorniz En Salsa Verde", precio: 215, descripcion: '(3 PIEZAS)' },
      { nombre: "Arrachera En Salsa Verde", precio: 330, descripcion: '(Aprox. 300 gramos)' },
      { nombre: 'Camarón En Salsa Roja', precio: 335, descripcion: '(aprox. 250 gramos)' },
      { nombre: 'Mar Y Tierra', precio: 334, descripcion: '150 grs. de camarón y 150 grs. de arrachera en salsa roja' },

      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'Pollos Y Mariscos' },
      { nombre: 'Pollo En Mole Dulce Estilo Colima ', precio: 190, descripcion: '(Pierna & Muslo)' },
      { nombre: 'Pollo A La Cerveza', precio: 185, descripcion: 'Pierna y muslo en salsa cremosa de cerveza y naranja' },
      { nombre: 'Pechuga A Las Finas Hiervas', precio: 179, descripcion: '300 grs.' },
      { nombre: 'Pechuga Con Crema', precio: 185, descripcion: 'CHIPOTLE, CILANTRO O HUITLACOCHE (300 grs.)' },
      { nombre: 'Salmón A Las Finas Hierbas ', precio: 310, descripcion: '300 grs.' },
      { nombre: 'Salmón Con Crema De Cilantro', precio: 315, descripcion: '300 grs.' },
      { nombre: 'Salmón En Salsa Agridulce Estilo Asiático', precio: 320, descripcion: '300 grs. Con miel de abeja, soya, limón, naranja, jengibre y especias asiáticas' },
      { nombre: 'Camarones', precio: 335, descripcion: '280 grs. Al ajo, ajillo, diabla o media diabla' },

      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'Carnes' },
      { nombre: 'Carne En Su Jugo', precio: 120, descripcion: '200 grs.' },
      { nombre: 'Tocinilla De Cerdo', precio: 165, descripcion: '300 grs.' },
      { nombre: 'Chamorro De Cerdo', precio: 199, descripcion: 'Adobado o adobado al horno' },
      { nombre: 'Brochetas De Arrachera', precio: 320, descripcion: '200 grs. Arrachera con cebolla y pimientos' },
      { nombre: 'Arrachera', precio: 320, descripcion: '300 grs.' },
      { nombre: 'Arrachera Con Crema De Champiñones Al Brandy', precio: 326, descripcion: '300 grs.' },
      { nombre: 'Arrachera Con Crema De Chipotle O Huitlacoche', precio: 324, descripcion: '300 grs.' },
      { nombre: 'Tambor En Salsa De Betabel Y Limón', precio: 328, descripcion: 'Arrachera en corte grueso, 300 grs' },
      { nombre: 'Sabana Chayán', precio: 338, descripcion: '300 grs. Arrachera con queso gratinado' },
      { nombre: 'Arrachera Pinar', precio: 345, descripcion: '300 grs. Con jamón de pierna, queso y champiñones' },
      { nombre: 'Lengua De Res En Salsa Almendrada', precio: 320, descripcion: '300 grs. *SUJETO A DISPONIBILIDAD' },
      { nombre: 'Lengua De Res En Salsa Verde', precio: 318, descripcion: '300 grs. *SUJETO A DISPONIBILIDAD' },

      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'Cortes Finos' },
      { nombre: 'Rib Eye', precio: 460, descripcion: '450 grs. Aprox.' },
      { nombre: 'Vacío Argentino', precio: 455, descripcion: '450 grs. Aprox.' },
      { nombre: 'Cowboy', precio: 485, descripcion: '500 grs. Aprox.' },

      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'Carnes Exóticas' },
      { tipo: 'nota', texto: '*SUJETO A DISPONIBILIDAD' },
      { nombre: 'Jabalí Asado En Salsa De Frutos Rojos Y Vino Tinto', precio: 470, descripcion: '300 grs.' },
      { nombre: 'Búfalo En Salsa De Frutos Rojos Y Vino Tinto', precio: 470, descripcion: '300 grs.' },
      { nombre: 'Codorniz Asada', precio: 199, descripcion: '3 Piezas' },
      { nombre: 'Conejo Adobado O Adobado Al Horno', precio: 208, descripcion: '1/2 Conejo' },
      { nombre: 'Conejo Al Vino Blanco Y Champiñones', precio: 210, descripcion: '1/2 Conejo' },
      { tipo: 'espacio' },
      { tipo: 'nota', texto: '*No se aceptan cambios o devoluciones, tome en cuenta que éstas carnes tienen un sabor más fuerte y su consistencia no es blanda.' }
    ],
    imagenes: [
      { src: '../IMG/jpg/platillos/marytierra.avif', titulo: 'Mar Y Tierra' },
      { src: '../IMG/jpg/platillos/codornizEnSalsaVerde.avif', titulo: 'Codorniz En Salsa Verde' },
      { src: '../IMG/jpg/platillos/camaronEnSalsaRoja.avif', titulo: 'Camarón En Salsa Roja' },
      { src: '../IMG/jpg/platillos/arracheraEnSalsaVerde.avif', titulo: 'Arrachera En Salsa Verde' },
      { src: '../IMG/jpg/platillos/polloEnMole.avif', titulo: 'Pollo En Mole Dulce Estilo Colima' },
      { src: '../IMG/jpg/platillos/polloALaCerveza.avif', titulo: 'Pollo A La Cerveza' },
      { src: '../IMG/jpg/platillos/salmonAlCilantro.avif', titulo: 'Salmón Con Crema De Cilantro' },
      { src: '../IMG/jpg/platillos/pechugaAlCilantro.avif', titulo: 'Pechuga Con Crema De Cilantro' },
      { src: '../IMG/jpg/platillos/salmonAgridulce.avif', titulo: 'Salmón En Salsa Agridulce Estilo Asiático' },
      { src: '../IMG/jpg/platillos/camarones.avif', titulo: 'Camarones' },
      { src: '../IMG/jpg/platillos/chamorroDeCerdo.avif', titulo: 'Chamorro De Cerdo' },
      { src: '../IMG/jpg/platillos/arrachera.avif', titulo: 'Arrachera' },
      { src: '../IMG/jpg/platillos/brochetasDeArrachera.avif', titulo: 'Brochetas De Arrachera' },
      { src: '../IMG/jpg/platillos/arracheraPinar.avif', titulo: 'Arrachera Pinar' },
      { src: '../IMG/jpg/platillos/arracheraAlChipotle.avif', titulo: 'Arrachera Con Crema De Chipotle' },
      { src: '../IMG/jpg/platillos/sabanaChayan.avif', titulo: 'Sabana Chayán' },
      { src: '../IMG/jpg/platillos/ribEye.avif', titulo: 'Rib Eye' },
      { src: '../IMG/jpg/platillos/conejoAdobado.avif', titulo: 'Conejo Adobado' },
      { src: '../IMG/jpg/platillos/codornizAsada.avif', titulo: 'Codorniz Asada' },
      { src: '../IMG/jpg/platillos/cowboy.avif', titulo: 'Cowboy' },
      { src: '../IMG/jpg/platillos/conejoAlVinoBlanco.avif', titulo: 'Conejo Al Vino Blanco' },
      { src: '../IMG/jpg/platillos/vacio.avif', titulo: 'Vacío' },
    ]
  },
  postres: {
    items: [
      { nombre: "Jericalla", precio: 59 },
      { nombre: "Tarta De Requesón", precio: 85 },
      { nombre: 'Tarta De Nuez', precio: 87, },
      { nombre: 'Tarta De Coco', precio: 85, },
      { nombre: 'Tarta De Manzana', precio: 85, },
      { nombre: 'Tartaleta De Guayaba', precio: 87, },
      { nombre: 'Tarta Lila Arroz', precio: 89, descripcion: 'A la Vainilla relleno de duraznos y cubierto de almendras' },
      { nombre: 'Flan Napolitano', precio: 78, },
      { nombre: 'Pan De Elote', precio: 78, },
      { nombre: 'Pastel De Tres Leches', precio: 89, },
      { nombre: 'Pastel De Chocolate O Zanahoria', precio: 85, },
      { nombre: 'Chongos Estilo Zamorano', precio: 75, descripcion: 'Hechos en casa' },
      { nombre: 'Helados Bellagio', precio: 88, descripcion: 'Coco, Elote, Chocolate, Galleta Oreo, Vainilla con Chocolate o Vainilla con Fresa' },
    ],
    imagenes: [
      { src: '../IMG/jpg/platillos/payDeNuez.avif', titulo: 'Pay De Nuez' },
      { src: '../IMG/jpg/platillos/tartaletaDeGuayaba.avif', titulo: 'Tartaleta De Guayaba' },
      { src: '../IMG/jpg/platillos/payDeManzana.avif', titulo: 'Pay De Manzana' },
      { src: '../IMG/jpg/platillos/payDeCoco.avif', titulo: 'Pay De Coco' },
      { src: '../IMG/jpg/platillos/panDeElote.avif', titulo: 'Pan De Elote' },
      { src: '../IMG/jpg/platillos/pastelDeTresLeches.avif', titulo: 'Pastel De Tres Leches' },
    ]
  },
}

function wrapText(text, maxCharsPerLine) {
  if (!text) return '';
  const words = text.split(' ');
  let line = '', result = '';
  for (const word of words) {
    if ((line + word).length <= maxCharsPerLine) {
      line += word + ' ';
    } else {
      result += line.trim() + '<br>';
      line = word + ' ';
    }
  }
  return result + line.trim();
}

function wrapTextBackwards(text, maxCharsPerLine) {
  if (!text) return '';
  const reversedWords = text.split(' ').reverse();
  let line = '', result = '';
  for (const word of reversedWords) {
    if ((line.length + word.length + 1) <= maxCharsPerLine) {
      line = word + ' ' + line;
    } else {
      result = line.trim() + '<br>' + result;
      line = word + ' ';
    }
  }
  return line.trim() + '<br>' + result.trim();
}

function renderMenu(tipo) {
  const container = document.getElementById('menuContent');
  if (!container) return;

  const data = menuData[tipo];
  if (!data) return;

  const clickedButton = document.getElementById(`tab-${tipo}`);
  const tabsContainer = clickedButton?.closest('ul');

  if (tabsContainer) {
    tabsContainer.querySelectorAll('.nav-link').forEach(btn => {
      btn.classList.remove('active', 'bg-success', 'text-white');
    });
    clickedButton?.classList.add('active', 'bg-success', 'text-white');
  }

  container.innerHTML = `
    <div class="col-md-6">
      ${data.items.map(item => {
        if (item.tipo === 'titulo') {
          return `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--nar); padding-bottom: 4px; margin-bottom: 12px; margin-right:10px;">
              <h5 style="margin: 0;">${item.texto}</h5>
            </div>`;
        }
        if (item.tipo === 'espacio') return '<br>';
        if (item.tipo === 'nota') return `<small class="d-block fw-bold mb-3">${wrapText(item.texto, 50)}</small>`;
        return `
          <div class="mb-3">
            <div class="d-flex justify-content-between">
              <strong>${wrapText(item.nombre, 25)}</strong>
              <span>$${item.precio}</span>
            </div>
            ${item.descripcion ? `<small class="text-muted d-block">${wrapText(item.descripcion, 33)}</small>` : ''}
          </div>`;
      }).join('')}
    </div>

    <div class="col-md-6">
      <div class="row row-cols-2 g-2">
        ${data.imagenes.map(img => `
          <div class="col text-center">
            <p class="titulo-imagen">
              <span>${wrapTextBackwards(img.titulo, 28)}</span>
            </p>
            <img src="${img.src}" alt="${img.titulo}" class="img-fluid rounded shadow-sm">
          </div>`).join('')}
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname.toLowerCase();

  const pageToMenuMap = {
    '/platillos': 'entradas',
    '/platillos.html': 'entradas',
    '/': 'entradas',
    '/index': 'entradas',
    '/index.html': 'entradas'
  };

  for (const path in pageToMenuMap) {
    if (pathname.endsWith(path)) {
      renderMenu(pageToMenuMap[path]);
      break;
    }
  }
});
