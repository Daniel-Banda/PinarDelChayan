const menuData = {
  entradas: {
    items: [
      { nombre: 'GUACAMOLE', precio: 105 },
      { nombre: 'QUESO FUNDIDO', precio: 135 },
      { nombre: 'QUESO FUNDIDO MIXTO', precio: 145, descripcion: 'Con champiñones, chorizo, tocino o rajas' },
      { nombre: 'QUESADILLAS', precio: 85 },
      { nombre: 'PANELA HORNEADA', precio: 145, descripcion: 'A la fina hierba' },
      { nombre: 'CHISTORRA', precio: 135 },
      { nombre: 'CECINA (200grs)', precio: 235 },
      { nombre: 'MANITAS DE CERDO', precio: 95, descripcion: 'Cocidas con salsa mexicana' },
      { nombre: 'JALAPEÑOS DON CÁSTULO', precio: 99, descripcion: 'Rellenos de queso crema y envueltos en tocino' },
      { nombre: 'CHILES DON POLO', precio: 105, descripcion: 'Chiles güeros rellenos de queso de cabra, ceniza de chile guajillo y nueces' },
      { nombre: 'TACOS DE CABEZA', precio: 89 },
      { nombre: 'TACOS DE FRIJOLES', precio: 69, descripcion: 'A las brasas (4 pzas.)' },
      { nombre: 'CHAMPIÑONES', precio: 125, descripcion: 'Frescos, al ajo o al ajillo' },
      { nombre: 'NOPALES GRATINADOS', precio: 90 },
      { nombre: 'NOPALES EN 3 SALSAS', precio: 88, descripcion: 'Chipotle, cilantro y huitlacoche' },

    ],
    imagenes: [
      { src: '../IMG/jpg/guacamole.avif', titulo: 'GUACAMOLE' },
      { src: '../IMG/jpg/quesoFundido.avif', titulo: 'QUESO FUNDIDO MIXTO' },
      { src: '../IMG/jpg/panelaHorneada.avif', titulo: 'PANELA HORNEADA' },
      { src: '../IMG/jpg/cecina.avif', titulo: 'CECINA' },
      { src: '../IMG/jpg/chistorra.avif', titulo: 'CHISTORRA' },
      { src: '../IMG/jpg/jalapenosDonCastulo.avif', titulo: 'JALAPEÑOS DON CÁSTULO' },
      { src: '../IMG/jpg/chilesDonPolo.avif', titulo: 'CHILES DON POLO' },
      { src: '../IMG/jpg/champinones.avif', titulo: 'CHAMPIÑONES' },
    ]
  },
sopas: {
    items: [
      { nombre: "CREMA DE CHAMPIÑONES FRESCOS", precio: 95 },
      { nombre: "SOPA AZTECA", precio: 98, descripcion: 'Tortilla frita, queso, crema y aguacate' },
      { nombre: "SOPA DE VERDURAS", precio: 87 },
      { nombre: "CONSOMÉ DE POLLO", precio: 95, descripcion: '* SOLO LOS DOMINGOS' },

      { nombre: "DE LA CAMPIÑA", precio: 165, descripcion: 'Espinacas, tomate cherry, nuez de la India y queso de cabra con vinagreta de mandarina' },
      { nombre: "PINAR", precio: 158, descripcion: 'Lechuga, pera, ciruela pasa y nuez con vinagreta de arándanos' },
      { nombre: "PRIMAVERA", precio: 160, descripcion: 'Lechuga, almendra, amaranto y uvas con vinagreta de mango' },

    ],
    imagenes: [
      { src: '../IMG/jpg/sopaAzteca.avif', titulo: 'SOPA AZTECA' },
      { src: '../IMG/jpg/cremaDeChampinones.avif', titulo: 'CREMA DE CHAMPIÑONES' },
      { src: '../IMG/jpg/ensaladaPinar.avif', titulo: 'ENSALADA PINAR' },
      { src: '../IMG/jpg/ensaladaPrimavera.avif', titulo: 'ENSALADA PRIMAVERA' },
      { src: '../IMG/jpg/ensaladaDeLaCampina.avif', titulo: 'ENSALADA DE LA CAMPIÑA' },
    ]
  },
  carnes: {
    items: [
      { nombre: "CODORNIZ EN SALSA VERDE", precio: 215, descripcion: '(3 PIEZAS)' },
      { nombre: "ARRACHERA EN SALSA VERDE", precio: 330, descripcion: '(Aprox. 300 gramos)' },
      { nombre: 'CAMARÓN EN SALSA ROJA', precio: 335, descripcion: '(aprox. 250 gramos)' },
      { nombre: 'MAR Y TIERRA', precio: 334, descripcion: '150 grs. de camarón y 150 grs. de arrachera en salsa roja' },
      
      { nombre: 'QUESO FNDIDO MIXTOPOLLO EN MOLE DULCE ESTILO COLIMA ', precio: 190, descripcion: '(Pierna & Muslo)' },
      { nombre: 'POLLO A LA CERVEZA', precio: 185, descripcion: 'Pierna y muslo en salsa cremosa de cerveza y naranja' },
      { nombre: 'PECHUGA A LAS FINAS HIERVAS', precio: 179, descripcion: '300 grs.' },
      { nombre: 'PECHUGA CON CREMA', precio: 185, descripcion: 'CHIPOTLE, CILANTRO O HUITLACOCHE (300 grs.)' },
      { nombre: 'SALMÓN A LAS FINAS HIERBAS ', precio: 310, descripcion: '250 grs.' },
      { nombre: 'SALMÓN CON CREMA DE CILANTRO', precio: 315, descripcion: '250 grs.' },
      { nombre: 'SALMÓN EN SALSA AGRIDULCE ESTILO ASIÁTICO', precio: 320, descripcion: '250 grs. Con miel de abeja, soya, limón, naranja, jengibre y especias asiáticas' },
      { nombre: 'CAMARONES', precio: 335, descripcion: '280 grs. Al ajo, ajillo, diabla o media diabla' },
      
      { nombre: 'CARNE EN SU JUGO', precio: 120, descripcion: '200 grs.' },
      { nombre: 'TOCINILLA DE CERDO', precio: 165, descripcion: '300 grs.' },
      { nombre: 'CHAMORRO DE CERDO', precio: 199, descripcion: 'Adobado o adobado al horno' },
      { nombre: 'BROCHETAS DE ARRACHERA', precio: 320, descripcion: '200 grs. Arrachera con cebolla y pimientos' },
      { nombre: 'ARRACHERA', precio: 320, descripcion: '300 grs.' },
      { nombre: 'ARRACHERA CON CREMA DE CHAMPIÑONES AL BRANDY', precio: 326, descripcion: '300 grs.' },
      { nombre: 'ARRACHERA CON CREMA DE CHIPOTLE O HUITLACOCHE', precio: 324, descripcion: '300 grs.' },
      { nombre: 'TAMBOR EN SALSA DE BETABEL Y LIMÓN', precio: 328, descripcion: 'Arrachera en corte grueso, 300 grs' },
      { nombre: 'SABANA CHAYÁN', precio: 338, descripcion: '300 grs. Arrachera con queso gratinado' },
      { nombre: 'ARRACHERA PINAR', precio: 345, descripcion: '300 grs. Con jamón de pierna, queso y champiñones' },
      { nombre: 'LENGUA DE RES EN SALSA ALMENDRADA', precio: 320, descripcion: '300 grs. *SUJETO A DISPONIBILIDAD' },
      { nombre: 'LENGUA DE RES EN SALSA VERDE', precio: 318, descripcion: '300 grs. *SUJETO A DISPONIBILIDAD' },

      { nombre: 'RIB EYE', precio: 460, descripcion: '450 grs. Aprox.' },
      { nombre: 'VACÍO ARGENTINO', precio: 455, descripcion: '450 grs. Aprox.' },
      { nombre: 'COWBOY', precio: 485, descripcion: '500 grs. Aprox.' },

      { nombre: 'JABALÍ ASADO EN SALSA DE FRUTOS ROJOS Y VINO TINTO', precio: 470, descripcion: '300 grs.' },
      { nombre: 'BÚFALO EN SALSA DE FRUTOS  ROJOS Y VINO TINTO', precio: 470, descripcion: '300 grs.' },
      { nombre: 'CODORNIZ ASADA', precio: 199, descripcion: '3 Piezas' },
      { nombre: 'CONEJO ADOBADO O ADOBADO AL HORNO', precio: 208, descripcion: '1/2 Conejo' },
      { nombre: 'CONEJO AL VINO BLANCO Y CHAMPIÑONES', precio: 210, descripcion: '1/2 Conejo' },


    ],
    imagenes: [
      { src: '../IMG/jpg/marytierra.avif', titulo: 'MAR Y TIERRA' },
      { src: '../IMG/jpg/codornizEnSalsaVerde.avif', titulo: 'CODORNIZ EN SALSA VERDE' },
      { src: '../IMG/jpg/camaronEnSalsaRoja.avif', titulo: 'CAMARÓN EN SALSA ROJA' },
      { src: '../IMG/jpg/arracheraEnSalsaVerde.avif', titulo: 'ARRACHERA EN SALSA VERDE' },
      { src: '../IMG/jpg/polloEnMole.avif', titulo: 'POLLO EN MOLE DULCE ESTILO COLIMA' },
      { src: '../IMG/jpg/polloALaCerveza.avif', titulo: 'POLLO A LA CERVEZA' },
      { src: '../IMG/jpg/salmonAlCilantro.avif', titulo: 'SALMÓN CON CREMA DE CILANTRO' },
      { src: '../IMG/jpg/pechugaAlCilantro.avif', titulo: 'PECHUGA CON CREMA DE CILANTRO' },
      { src: '../IMG/jpg/salmonAgridulce.avif', titulo: 'SALMÓN EN SALSA AGRIDULCE ESTILO ASIÁTICO' },
      { src: '../IMG/jpg/camarones.avif', titulo: 'CAMARONES' },
      { src: '../IMG/jpg/chamorroDeCerdo.avif', titulo: 'CHAMORRO DE CERDO' },
      { src: '../IMG/jpg/arrachera.avif', titulo: 'ARRACHERA' },
      { src: '../IMG/jpg/brochetasDeArrachera.avif', titulo: 'BROCHETAS DE ARRACHERA' },
      { src: '../IMG/jpg/arracheraPinar.avif', titulo: 'ARRACHERA PINAR' },
      { src: '../IMG/jpg/arracheraAlChipotle.avif', titulo: 'ARRACHERA CON CREMA DE CHIPOTLE' },
      { src: '../IMG/jpg/sabanaChayan.avif', titulo: 'SABANA CHAYÁN' },
      { src: '../IMG/jpg/ribEye.avif', titulo: 'RIB EYE' },
      { src: '../IMG/jpg/conejoAdobado.avif', titulo: 'CONEJO ADOBADO' },
      { src: '../IMG/jpg/codornizAsada.avif', titulo: 'CODORNIZ ASADA' },
      { src: '../IMG/jpg/cowboy.avif', titulo: 'COWBOY' },
      { src: '../IMG/jpg/conejoAlVinoBlanco.avif', titulo: 'CONEJO AL VINO BLANCO' },
      { src: '../IMG/jpg/vacio.avif', titulo: 'VACÍO' },

    ]
  },
  postres: {
    items: [
      { nombre: "JERICALLA", precio: 59 },
      { nombre: "TARTA DE REQUESÓN", precio: 85 },
      { nombre: 'TARTA DE NUEZ', precio: 87, },
      { nombre: 'TARTA DE COCO', precio: 85, },
      { nombre: 'TARTA DE MANZANA', precio: 85, },
      { nombre: 'TARTALETA DE GUAYABA', precio: 87, },
      { nombre: 'TARTA LILA ARROZ', precio: 89, descripcion: 'A la Vainilla relleno de duraznos y cubierto de almendras' },
      { nombre: 'FLAN NAPOLITANO', precio: 78, },
      { nombre: 'PAN DE ELOTE', precio: 78, },
      { nombre: 'PASTEL DE TRES LECHES', precio: 89, },
      { nombre: 'PASTEL DE CHOCOLATE O ZANAHORIA', precio: 85, },
      { nombre: 'CHONGOS ESTILO ZAMORANO', precio: 75, descripcion: 'Hechos en casa' },
      { nombre: 'HELADOS BELLAGIO', precio: 88, descripcion: 'Coco, Elote, Chocolate, Galleta Oreo, Vainilla con Chocolate o Vainilla con Fresa' },

    ],
    imagenes: [
      { src: '../IMG/jpg/payDeNuez.avif', titulo: 'PAY DE NUEZ' },
      { src: '../IMG/jpg/tartaletaDeGuayaba.avif', titulo: 'TARTALETA DE GUAYABA' },
      { src: '../IMG/jpg/payDeManzana.avif', titulo: 'PAY DE MANZANA' },
      { src: '../IMG/jpg/payDeCoco.avif', titulo: 'PAY DE COCO' },
      { src: '../IMG/jpg/panDeElote.avif', titulo: 'PAN DE ELOTE' },
      { src: '../IMG/jpg/pastelDeTresLeches.avif', titulo: 'PASTEL DE TRES LECHES' },

    ]
  }
};

function renderMenu(category) {
  // Agrega más secciones
};

function renderMenu(tipo, button = null) {
  // Activar pestaña
  document.querySelectorAll('#menuTabs .nav-link').forEach(btn => btn.classList.remove('active', 'bg-success', 'text-white'));
  if (button) button.classList.add('active', 'bg-success', 'text-white');

  const data = menuData[tipo];
  const container = document.getElementById('menuContent');
  container.innerHTML = `
    <div class="col-md-6">
      ${data.items.map(item => `
        <div class="mb-3">
          <div class="d-flex justify-content-between">
            <strong>${item.nombre}</strong>
            <span>$${item.precio}</span>
          </div>
          ${item.descripcion ? `<small class="text-muted">${item.descripcion}</small>` : ''}
        </div>
      `).join('')}
    </div>

    <div class="col-md-6">
      <div class="row row-cols-2 g-3">
        ${data.imagenes.map(img => `
          <div class="col text-center">
            <p class="fw-bold small mb-1">${img.titulo}</p>
            <img src="${img.src}" alt="${img.titulo}" class="img-fluid rounded shadow-sm">
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => renderMenu('entradas'));
