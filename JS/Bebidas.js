const menuData = {
  destilados: {
    items: [
      { tipo: 'titulo', texto: 'TEQUILA' },
        { nombre: 'DON JULIO 70', copa: 50, bot: 105, descripcion: '750 ml' },
          
      { tipo: 'titulo', texto: 'VODKA' },
        { nombre: 'DON JULIO 70', copa: 50, bot: 105, descripcion: '750 ml' },
      
      { tipo: 'titulo', texto: 'GINEBRA' },
        { nombre: 'DON JULIO 70', copa: 50, bot: 105, descripcion: '750 ml' },

      { tipo: 'titulo', texto: 'COGNAC' },
        { nombre: 'DON JULIO 70', copa: 50, bot: 105, descripcion: '750 ml' },
        
      { tipo: 'titulo', texto: 'BRANDY' },
        { nombre: 'DON JULIO 70', copa: 50, bot: 105, descripcion: '750 ml' },
        
      { tipo: 'titulo', texto: 'MEZCAL' },
        { nombre: 'DON JULIO 70', copa: 50, bot: 105, descripcion: '750 ml' },
        
      { tipo: 'titulo', texto: 'RAICILLA' },
        { nombre: 'DON JULIO 70', copa: 50, bot: 105, descripcion: '750 ml' },
        
      { tipo: 'titulo', texto: 'RON' },
        { nombre: 'DON JULIO 70', copa: 50, bot: 105, descripcion: '750 ml' },
        
      { tipo: 'titulo', texto: 'WHISKY' },
        { nombre: 'DON JULIO 70', copa: 50, bot: 105, descripcion: '750 ml' },
        

    ],
    imagenes: [
      { src: '../IMG/jpg/bebidas/', titulo: '' },
    ]
  },
cerveza: {
    items: [
      { tipo: 'titulo', texto: 'SOPAS' },
      { nombre: "CREMA DE CHAMPIÑONES FRESCOS", precio: 95 },
      { nombre: "SOPA AZTECA", precio: 98, descripcion: 'Tortilla frita, queso, crema y aguacate' },
      { nombre: "SOPA DE VERDURAS", precio: 87 },
      { nombre: "CONSOMÉ DE POLLO", precio: 95, descripcion: '* SOLO LOS DOMINGOS' },
      
      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'ENSALADAS' },
      { nombre: "DE LA CAMPIÑA", precio: 165, descripcion: 'Espinacas, tomate cherry, nuez de la India y queso de cabra con vinagreta de mandarina' },
      { nombre: "PINAR", precio: 158, descripcion: 'Lechuga, pera, ciruela pasa y nuez con vinagreta de arándanos' },
      { nombre: "PRIMAVERA", precio: 160, descripcion: 'Lechuga, almendra, amaranto y uvas con vinagreta de mango' },

    ],
    imagenes: [
      { src: '../IMG/jpg/platillos/sopaAzteca.avif', titulo: 'SOPA AZTECA' },
      { src: '../IMG/jpg/platillos/cremaDeChampinones.avif', titulo: 'CREMA DE CHAMPIÑONES' },
      { src: '../IMG/jpg/platillos/ensaladaPinar.avif', titulo: 'ENSALADA PINAR' },
      { src: '../IMG/jpg/platillos/ensaladaPrimavera.avif', titulo: 'ENSALADA PRIMAVERA' },
      { src: '../IMG/jpg/platillos/ensaladaDeLaCampina.avif', titulo: 'ENSALADA DE LA CAMPIÑA' },
    ]
  },
  cocteleria: {
    items: [
      { tipo: 'titulo', texto: 'MOLCAJETES' },
      { nombre: "CODORNIZ EN SALSA VERDE", precio: 215, descripcion: '(3 PIEZAS)' },
      { nombre: "ARRACHERA EN SALSA VERDE", precio: 330, descripcion: '(Aprox. 300 gramos)' },
      { nombre: 'CAMARÓN EN SALSA ROJA', precio: 335, descripcion: '(aprox. 250 gramos)' },
      { nombre: 'MAR Y TIERRA', precio: 334, descripcion: '150 grs. de camarón y 150 grs. de arrachera en salsa roja' },
      
      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'POLLOS Y MARISCOS' },
      { nombre: 'POLLO EN MOLE DULCE ESTILO COLIMA ', precio: 190, descripcion: '(Pierna & Muslo)' },
      { nombre: 'POLLO A LA CERVEZA', precio: 185, descripcion: 'Pierna y muslo en salsa cremosa de cerveza y naranja' },
      { nombre: 'PECHUGA A LAS FINAS HIERVAS', precio: 179, descripcion: '300 grs.' },
      { nombre: 'PECHUGA CON CREMA', precio: 185, descripcion: 'CHIPOTLE, CILANTRO O HUITLACOCHE (300 grs.)' },
      { nombre: 'SALMÓN A LAS FINAS HIERBAS ', precio: 310, descripcion: '250 grs.' },
      { nombre: 'SALMÓN CON CREMA DE CILANTRO', precio: 315, descripcion: '250 grs.' },
      { nombre: 'SALMÓN EN SALSA AGRIDULCE ESTILO ASIÁTICO', precio: 320, descripcion: '250 grs. Con miel de abeja, soya, limón, naranja, jengibre y especias asiáticas' },
      { nombre: 'CAMARONES', precio: 335, descripcion: '280 grs. Al ajo, ajillo, diabla o media diabla' },
      
      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'CARNES' },
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

      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'CORTES FINOS' },
      { nombre: 'RIB EYE', precio: 460, descripcion: '450 grs. Aprox.' },
      { nombre: 'VACÍO ARGENTINO', precio: 455, descripcion: '450 grs. Aprox.' },
      { nombre: 'COWBOY', precio: 485, descripcion: '500 grs. Aprox.' },

      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'CARNES EXÓTICAS' },
      { tipo: 'nota', texto: '*SUJETO A DISPONIBILIDAD' },
      { nombre: 'JABALÍ ASADO EN SALSA DE FRUTOS ROJOS Y VINO TINTO', precio: 470, descripcion: '300 grs.' },
      { nombre: 'BÚFALO EN SALSA DE FRUTOS  ROJOS Y VINO TINTO', precio: 470, descripcion: '300 grs.' },
      { nombre: 'CODORNIZ ASADA', precio: 199, descripcion: '3 Piezas' },
      { nombre: 'CONEJO ADOBADO O ADOBADO AL HORNO', precio: 208, descripcion: '1/2 Conejo' },
      { nombre: 'CONEJO AL VINO BLANCO Y CHAMPIÑONES', precio: 210, descripcion: '1/2 Conejo' },
      { tipo: 'espacio' },
      { tipo: 'nota', texto: '*No se aceptan cambios o devoluciones, tome en cuenta que éstas carnes tienen un sabor más fuerte y su consistencia no es blanda.' }


    ],
    imagenes: [
      { src: '../IMG/jpg/platillos/marytierra.avif', titulo: 'MAR Y TIERRA' },
      { src: '../IMG/jpg/platillos/codornizEnSalsaVerde.avif', titulo: 'CODORNIZ EN SALSA VERDE' },
      { src: '../IMG/jpg/platillos/camaronEnSalsaRoja.avif', titulo: 'CAMARÓN EN SALSA ROJA' },
      { src: '../IMG/jpg/platillos/arracheraEnSalsaVerde.avif', titulo: 'ARRACHERA EN SALSA VERDE' },
      { src: '../IMG/jpg/platillos/polloEnMole.avif', titulo: 'POLLO EN MOLE DULCE ESTILO COLIMA' },
      { src: '../IMG/jpg/platillos/polloALaCerveza.avif', titulo: 'POLLO A LA CERVEZA' },
      { src: '../IMG/jpg/platillos/salmonAlCilantro.avif', titulo: 'SALMÓN CON CREMA DE CILANTRO' },
      { src: '../IMG/jpg/platillos/pechugaAlCilantro.avif', titulo: 'PECHUGA CON CREMA DE CILANTRO' },
      { src: '../IMG/jpg/platillos/salmonAgridulce.avif', titulo: 'SALMÓN EN SALSA AGRIDULCE ESTILO ASIÁTICO' },
      { src: '../IMG/jpg/platillos/camarones.avif', titulo: 'CAMARONES' },
      { src: '../IMG/jpg/platillos/chamorroDeCerdo.avif', titulo: 'CHAMORRO DE CERDO' },
      { src: '../IMG/jpg/platillos/arrachera.avif', titulo: 'ARRACHERA' },
      { src: '../IMG/jpg/platillos/brochetasDeArrachera.avif', titulo: 'BROCHETAS DE ARRACHERA' },
      { src: '../IMG/jpg/platillos/arracheraPinar.avif', titulo: 'ARRACHERA PINAR' },
      { src: '../IMG/jpg/platillos/arracheraAlChipotle.avif', titulo: 'ARRACHERA CON CREMA DE CHIPOTLE' },
      { src: '../IMG/jpg/platillos/sabanaChayan.avif', titulo: 'SABANA CHAYÁN' },
      { src: '../IMG/jpg/platillos/ribEye.avif', titulo: 'RIB EYE' },
      { src: '../IMG/jpg/platillos/conejoAdobado.avif', titulo: 'CONEJO ADOBADO' },
      { src: '../IMG/jpg/platillos/codornizAsada.avif', titulo: 'CODORNIZ ASADA' },
      { src: '../IMG/jpg/platillos/cowboy.avif', titulo: 'COWBOY' },
      { src: '../IMG/jpg/platillos/conejoAlVinoBlanco.avif', titulo: 'CONEJO AL VINO BLANCO' },
      { src: '../IMG/jpg/platillos/vacio.avif', titulo: 'VACÍO' },

    ]
  },
  aperitivos: {
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
      { src: '../IMG/jpg/platillos/payDeNuez.avif', titulo: 'PAY DE NUEZ' },
      { src: '../IMG/jpg/platillos/tartaletaDeGuayaba.avif', titulo: 'TARTALETA DE GUAYABA' },
      { src: '../IMG/jpg/platillos/payDeManzana.avif', titulo: 'PAY DE MANZANA' },
      { src: '../IMG/jpg/platillos/payDeCoco.avif', titulo: 'PAY DE COCO' },
      { src: '../IMG/jpg/platillos/panDeElote.avif', titulo: 'PAN DE ELOTE' },
      { src: '../IMG/jpg/platillos/pastelDeTresLeches.avif', titulo: 'PASTEL DE TRES LECHES' },

    ]
  },
  vino: {
    items: [
      { tipo: 'titulo', texto: 'TEQUILA' },
        { nombre: 'DON JULIO 70', copa: 50, bot: 105, descripcion: '750 ml' },
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
      { src: '../IMG/jpg/platillos/payDeNuez.avif', titulo: 'PAY DE NUEZ' },
      { src: '../IMG/jpg/platillos/tartaletaDeGuayaba.avif', titulo: 'TARTALETA DE GUAYABA' },
      { src: '../IMG/jpg/platillos/payDeManzana.avif', titulo: 'PAY DE MANZANA' },
      { src: '../IMG/jpg/platillos/payDeCoco.avif', titulo: 'PAY DE COCO' },
      { src: '../IMG/jpg/platillos/panDeElote.avif', titulo: 'PAN DE ELOTE' },
      { src: '../IMG/jpg/platillos/pastelDeTresLeches.avif', titulo: 'PASTEL DE TRES LECHES' },

    ]
  }
};

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



function renderMenu(tipo, button = null) {
  // Activar pestaña
  document.querySelectorAll('#menuTabs .nav-link').forEach(btn => btn.classList.remove('active', 'bg-success', 'text-white'));
  if (button) button.classList.add('active', 'bg-success', 'text-white');

  const data = menuData[tipo];
  const container = document.getElementById('menuContent');

  container.innerHTML = `
    <div class="col-md-6">
      ${data.items.map(item => {
if (item.tipo === 'titulo') {
  return `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--nar); padding-bottom: 4px; margin-bottom: 12px; margin-right:10px;">
      <h5 style="margin: 0; text-decoration: none; border: 0; outline: 0; box-shadow: none;">${item.texto}</h5>
      ${['destilados', 'vino'].includes(tipo) ? `
        <div style="display: flex; gap: 24px; font-size: 0.7rem; font-weight: 500;">
          <span style="font-size: 0.9rem !important;">COPA</span>
          <span style="font-size: 0.9rem !important;">BOT</span>
        </div>` : ''}
    </div>
  `;
} else if (item.tipo === 'espacio') {
          return `<br>`;
        } else if (item.tipo === 'nota') {
          return `<small class="d-block fw-bold mb-3">${wrapText(item.texto, 45)}</small>`;
        }

        // Items con copa y bot
        if (item.copa !== undefined && item.bot !== undefined) {
          return `
            <div class="mb-3">
              <div class="d-flex justify-content-between">
                <strong style="flex: 1;">${wrapText(item.nombre, 25)}</strong>
                <span style="width: 50px; text-align: right;">$${item.copa}</span>
                <span style="width: 50px; text-align: right;">$${item.bot}</span>
              </div>
              ${item.descripcion ? `<small class="text-muted d-block">${wrapText(item.descripcion, 33)}</small>` : ''}
            </div>
          `;
        }

        // Items con solo precio
        return `
          <div class="mb-3">
            <div class="d-flex justify-content-between">
              <strong>${wrapText(item.nombre, 25)}</strong>
              <span>$${item.precio}</span>
            </div>
            ${item.descripcion ? `<small class="text-muted d-block">${wrapText(item.descripcion, 33)}</small>` : ''}
          </div>
        `;
      }).join('')}
    </div>

    <div class="col-md-6">
      <div class="row row-cols-2 g-2">
        ${data.imagenes.map(img => `
          <div class="col text-center">
            <p class="titulo-imagen">
              <span>${wrapTextBackwards(img.titulo, 24)}</span>
            </p>
            <img src="${img.src}" alt="${img.titulo}" class="img-fluid rounded shadow-sm">
          </div>
        `).join('')}
      </div>
    </div>
  `;
}



// Mostrar menú por defecto al cargar
document.addEventListener('DOMContentLoaded', () => renderMenu('entradas'));

