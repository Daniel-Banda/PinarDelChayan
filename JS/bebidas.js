const menuData = {
   destilados: {
  bloques: [
    // IZQUIERDA
    { tipo: 'titulo', texto: 'TEQUILA', columna: 'izq' },
    { tipo: 'item', nombre: 'Don Julio 70', copa: 198, bot: 2376, descripcion: '(750 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Don Julio Blanco', copa: 135, bot: 1485, descripcion: '(700 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Don Julio Reposado', copa: 145, bot: 1595, descripcion: '(700 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Pueblo Viejo Añejo', copa: 97, bot: 1164, descripcion: '(750 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Antiguo De Herradura', copa: 89, bot: 979, descripcion: '(700 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Herradura Añejo', copa: 180, bot: 2160, descripcion: '(750 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Tradicional Reposado', copa: 98, bot: 1176, descripcion: '(750 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Herradura Blanco', copa: 125, bot: 1375, descripcion: '(700 ml)', columna: 'izq' },
    { tipo: 'item', nombre: '7 Leguas Blanco', copa: 130, bot: 1560, descripcion: '(750 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Cuervo 1800 Añejo', copa: 130, bot: 1760, descripcion: '(700 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Cuervo 1800 Cristalino', copa: 170, bot: 1870, descripcion: '(700 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Gran Centenario Plata', copa: 110, bot: 1210, descripcion: '(700 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Gran Centenario Añejo', copa: 120, bot: 1320, descripcion: '(695 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Gran Centenario Reposado', copa: 115, bot: 1265, descripcion: '(700 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Maestro Dobel Cristalino', copa: 185, bot: 2220, descripcion: '(750 ml)', columna: 'izq' },

    { tipo: 'espacio', columna: 'izq' },
    { tipo: 'titulo', texto: 'VODKA', columna: 'izq' },
    { tipo: 'item', nombre: 'Smirnoff', copa: 79, bot: 948, descripcion: '(750 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Absolut Azul', copa: 128, bot: 1536, descripcion: '(750 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'Vodka Stolichnaya', copa: 125, bot: 1502, descripcion: '(750 ml)', columna: 'izq' },

    { tipo: 'espacio', columna: 'izq' },
    { tipo: 'titulo', texto: 'GINEBRA', columna: 'izq' },
    { tipo: 'item', nombre: 'Tanqueray', copa: 110, bot: 1320, descripcion: '(750 ml)', columna: 'izq' },
    { tipo: 'item', nombre: "Hendrick's", copa: 155, bot: 1860, descripcion: '(750 ml)', columna: 'izq' },

    { tipo: 'espacio', columna: 'izq' },
    { tipo: 'titulo', texto: 'COGNAC', columna: 'izq' },
    { tipo: 'item', nombre: 'V.S.O.P Hennessy', copa: 265, bot: 2915, descripcion: '(700 ml)', columna: 'izq' },
    { tipo: 'item', nombre: 'V.S.O.P Martell', copa: 180, bot: 1980, descripcion: '(700 ml)', columna: 'izq' },

    // DERECHA
    { tipo: 'titulo', texto: 'BRANDY', columna: 'der' },
    { tipo: 'item', nombre: 'Azteca De Oro', copa: 75, bot: 825, descripcion: '(700 ml)', columna: 'der' },
    { tipo: 'item', nombre: 'Torres 10', copa: 102, bot: 1122, descripcion: '(700 ml)', columna: 'der' },

    { tipo: 'espacio', columna: 'der' },
    { tipo: 'titulo', texto: 'MEZCAL', columna: 'der' },
    { tipo: 'item', nombre: '400 Conejos', copa: 125, bot: 1502, descripcion: '(750 ml). Agave Espadín', columna: 'der' },
    { tipo: 'item', nombre: 'Creyente Joven', copa: 135, bot: 1620, descripcion: '(750 ml). Agave Espadín', columna: 'der' },
    { tipo: 'item', nombre: 'Don Fede 70', copa: 115, bot: 1380, descripcion: '(750 ml). Agave Ixtero Amarillo o Lineño', columna: 'der' },
    { tipo: 'item', nombre: 'Chacolo', copa: 188, bot: 2256, descripcion: '(750 ml). Agave Ixtero Amarillo', columna: 'der' },

    { tipo: 'espacio', columna: 'der' },
    { tipo: 'titulo', texto: 'RAICILLA', columna: 'der' },
    { tipo: 'item', nombre: 'Raicilla Tesoro Del Oeste', copa: 195, bot: 2340, descripcion: '(750 ml). Agave Maximiliana. San Sebastián del Oeste, Jalisco', columna: 'der' },
    { tipo: 'item', nombre: 'Raicilla Cielo Azul', copa: 198, bot: 2376, descripcion: '(750 ml). Agave Angustifolia Haw. San Sebastián del Oeste, Jalisco', columna: 'der' },

    { tipo: 'espacio', columna: 'der' },
    { tipo: 'titulo', texto: 'RON', columna: 'der' },
    { tipo: 'item', nombre: 'Ron Bacardí Blanco', copa: 88, bot: 968, descripcion: '(750 ml)', columna: 'der' },
    { tipo: 'item', nombre: 'Bacardí Solera', copa: 105, bot: 1260, descripcion: '(750 ml)', columna: 'der' },
    { tipo: 'item', nombre: 'Ron Clássico Añejo N°.3', copa: 120, bot: 1320, descripcion: '(750 ml) *Producto Local', columna: 'der' },
    { tipo: 'item', nombre: 'Matusalem 18 Años', copa: 125, bot: 1500, descripcion: '(750 ml)', columna: 'der' },

    { tipo: 'espacio', columna: 'der' },
    { tipo: 'titulo', texto: 'WHISKY', columna: 'der' },
    { tipo: 'item', nombre: 'Johnnie Walker Red Label', copa: 105, bot: 1155, descripcion: '(700 ml)', columna: 'der' },
    { tipo: 'item', nombre: 'Johnnie Walker Black Label', copa: 190, bot: 2280, descripcion: '(750 ml)', columna: 'der' },
    { tipo: 'item', nombre: "Buchanan's 12", copa: 160, bot: 1920, descripcion: '(750 ml)', columna: 'der' },
    { tipo: 'item', nombre: "Buchanan's 18", copa: 298, bot: 3576, descripcion: '(750 ml)', columna: 'der' },
    { tipo: 'item', nombre: 'Chivas Regal', copa: 185, bot: 2220, descripcion: '(750 ml)', columna: 'der' },

    // Imagen opcional
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/', titulo: '', columna: 'der' }
  ]

  },
  cerveza: {
  izquierda: [
    { tipo: 'espacio' },
    { tipo: 'titulo', texto: 'INDUSTRIAL' },
    { nombre: 'Corona, Victoria, Modelo De Bote', precio: 56 },
    { nombre: 'Modelo Especial, Negra Modelo, Ultra Michelob, Corona Light, Stella Artois', precio: 59 },
    { nombre: 'Michelada Cerveza, Limón, Sal Y Salsas', precio: 65 },
    { nombre: 'Chelada Cerveza, Limón Y Sal', precio: 63 },
    { nombre: 'Michelada Con Clamato', precio: 75 },

    { tipo: 'espacio' },
    { tipo: 'titulo', texto: 'ARTESANAL' },
    { nombre: 'Colombo', precio: 79, descripcion: 'Zapotiltíc, Jalisco' },
    { nombre: 'Mestiza', precio: 79, descripcion: 'Ale con destilado de Agave' },
    { nombre: 'Forajido', precio: 79, descripcion: 'Coffe Dry Stout' },
    { nombre: 'Coffee Porter', precio: 79 },
    { nombre: 'Smoked Black Ipa', precio: 79 },
    { nombre: 'Blond Ale', precio: 79 },
    { nombre: 'Pale Ale', precio: 79 },
    { nombre: 'Irish Red', precio: 79 },
    { nombre: 'Zapotlense', precio: 79, descripcion: 'Large Clara' },
    { nombre: 'Colimita', precio: 79 },
    { nombre: 'Cayaco', precio: 79 },
    { nombre: 'Ticus', precio: 79 },
    { nombre: 'Piedra Lisa', precio: 79 }
  ],
  derecha: [
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/colAma.avif', titulo: 'Blonde Ale' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/colAqu.avif', titulo: 'Mestiza' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/colBco.avif', titulo: 'Coffee Porter' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/colDor.avif', titulo: 'Forajido' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/colRoj.avif', titulo: 'Pale Ale' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/colVer.avif', titulo: 'Smoked Black IPA' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/Colimita.avif', titulo: 'Colimita' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/Paramo.avif', titulo: 'Páramo' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/PiedraLisa.avif', titulo: 'Piedra Lisa' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/Ticus.avif', titulo: 'Ticús' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/Cayaco.avif', titulo: 'Cayaco' }
  ]
},

  cocteleria: {
    items: [
      { tipo: 'nota', texto: '*La coctelería se sirve con licores y destilados de la casa, los cambios por su marca de preferencia aplican iguala al respectivo costo.' },

      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'LOS CLÁSICOS' },
      { nombre: 'Piña Colada, Margarita De Limón, Vampiro, Desarmador, Ruso Blanco, Ruso Negro, Medias De Seda, Bloody Mary, Paloma,etc.', precio: 118 },
      { nombre: 'Sin Alcohol', precio: 105 },

      { tipo: 'espacio' },
      { tipo: 'titulo', texto: 'DE LA CASA' },
      { nombre: 'Margarita De Fresa, Mango O Tamarindo', precio: 125, descripcion: 'Limón, tequila, licor de naranja y fruta a elegir' },
      { nombre: 'Márgara Apasionada', precio: 140, descripcion: 'Margarita clásica con pulpa de maracuyá' },
      { nombre: 'Gin Tonic Clásico', precio: 130, descripcion: 'Ginebra, agua tónica y twist de limón' },
      { nombre: 'Gin Tonic Afrutado', precio: 135, descripcion: 'Ginebra Tanqueray, agua de coco natural, limón y frutos rojos' },
      { nombre: 'Passion Tonic', precio: 140, descripcion: 'Ginebra Tanqueray, jugo de maracuyá y pulpa de fruta tropical' },
      { nombre: 'Gin Tonic Enebro Y Limón', precio: 135 },
      { nombre: 'Moscow Mule', precio: 125, descripcion: 'Vodka, limón, ginger ale y jengibre' },
      { nombre: 'Jalisco Mule', precio: 140, descripcion: 'Tequila, limón, ginger ale y jengibre' },
      { nombre: 'Mojito', precio: 135, descripcion: 'Ron, hierbabuena, limón y azúcar' },
      { nombre: 'Sangría', precio: 135, descripcion: 'Vino tinto, limón, azúcar y agua mineral' },
      { nombre: 'Clericot', precio: 140, descripcion: 'Vino tinto, limón, azúcar, sangría artesanal y frutas' },
      { nombre: 'Chamuquín', precio: 147, descripcion: 'Mezcal de la casa, limón, naranja, hierbabuena y refresco de toronja' },
      { nombre: 'Tejuino Con Mezcal', precio: 148, descripcion: '*Sujeto a disponibilidad' },
      { nombre: 'Mezcla De La Palma', precio: 130, descripcion: 'Tuba de Colima con mezcal *Sujeto a disponibilidad' },
      { nombre: 'Aperol Spritz', precio: 130, descripcion: 'Aperol, vino espumoso extra seco y naranja rebajada con soda' }


    ],
    imagenes: [
      { src: '../IMG/jpg/bebidas/CocoGinebra.avif', titulo: 'Coco con Ginebra' },
      { src: '../IMG/jpg/bebidas/GinFrutosRojos.avif', titulo: 'Gin and Tonic de Frutos Rojos' },
      { src: '../IMG/jpg/bebidas/JaliscoMule.avif', titulo: 'Jalisco Mule' },
      { src: '../IMG/jpg/bebidas/Margarita.avif', titulo: 'Margarita' },
      { src: '../IMG/jpg/bebidas/Tuba.avif', titulo: 'Tuba' },
      { src: '../IMG/jpg/bebidas/TejuinoMezcal.avif', titulo: 'Tejuino con Mezcal' },
    ]
  },

  vino: {
  izquierda: [
    { tipo: 'titulo', texto: 'VINO TINTO' },
    { nombre: 'Concha Y Toro Reservado', copa: 99, bot: 435, descripcion: 'Cabernet Sauvignon. Valle Central, Chile' },
    { nombre: 'XA Domecq', bot: 890, descripcion: 'Cabernet Sauvignon-Grenache. Valle de Guadalupe, Baja California, México' },
    { nombre: 'Casa Madero', bot: 890, descripcion: 'Syrah. Valle de Parras, México' },
    { nombre: '2V Casa Madero', bot: 950, descripcion: 'Cabernet Sauvignon, Merlot. Región Valle de Parras, México' },
    { nombre: 'Casillero Del Diablo', bot: 860, descripcion: 'Cabernet Sauvignon. Valle Central, Chile' },
    { nombre: 'Aba De Ramón Del Riscál', bot: 1150, descripcion: 'Rioja. Elciego, España' },
    { nombre: 'Tablas', bot: 1250, descripcion: 'Tempranillo-Grenache. Valle de Guadalupe, Baja California, México' },
    { nombre: 'Catena', bot: 860, descripcion: 'Malbec. Mendoza, Argentina' },

    { tipo: 'espacio' },
    { tipo: 'titulo', texto: 'VINO BLANCO' },
    { nombre: 'XA Domecq', copa: 87, bot: 435, descripcion: 'Chenin Blanc & Chardonnay. Valle de Guadalupe, Baja California, México' },
    { nombre: 'Concha Y Toro', copa: 83, bot: 415, descripcion: 'Sauvignon Blanc. Chile' },
    { nombre: '2V Casa Madero', bot: 720, descripcion: 'Chardonnay. Valle de Parras, México' },
    { nombre: 'Casillero Del Diablo', bot: 745, descripcion: 'Chardonnay. Chile' },
    { nombre: 'LA Cetto Blanc De Blancs', bot: 545, descripcion: 'Valle de Guadalupe, México' },

    { tipo: 'espacio' },
    { tipo: 'titulo', texto: 'VINO ESPUMOSO' },
    { nombre: 'Riunite Blanco Espumoso', precio: 545, descripcion: 'Vino blanco espumoso extra seco' },
    { nombre: 'Riunite Rosado', precio: 545, descripcion: 'Vino rosado extra seco' },
    { nombre: 'Riunite Prosecco', precio: 670, descripcion: 'Vino blanco espumoso extra seco' },
    { nombre: 'Riunite Lambrusco', precio: 545, descripcion: 'Vino tinto espumoso' },
  ],
  derecha: [
    { tipo: 'titulo', texto: 'APERITIVOS Y DIGESTIVOS' },
    { nombre: 'Licor De Café Kahlúa', precio: 98 },
    { nombre: 'Licor 43', precio: 105 },
    { nombre: 'Anís Chinchón (Dulce)', precio: 95 },
    { nombre: 'Anís Uxore (Seco)', precio: 93 },
    { nombre: 'Amaretto Disaronno', precio: 103 },
    { nombre: "Bailey's", precio: 98 },
    { nombre: 'Frangelico', precio: 93 },
    { nombre: 'Vacari Nero (Sambuca)', precio: 103 },
    { tipo: 'espacio' },
    { tipo: 'espacio' },
  

    // Puedes poner las imágenes aquí también para que aparezcan en la misma columna
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/3v.avif', titulo: 'Casa Madero' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/Catena.avif', titulo: 'Catena' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/Tablas.avif', titulo: 'Tablas' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/Rioja.avif', titulo: 'Marqués de Riscal' },
    { tipo: 'imagen', src: '../IMG/jpg/bebidas/Cinzano.avif', titulo: 'Cinzano' },
  ]
}

  // aperitivos: {
  //   items: [

  //   ],

  //   imagenes: [
  //     { src: '../IMG/jpg/bebidas/', titulo: '' },
  //   ]
  // }
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

function renderMenu(tipo) {
  const container = document.getElementById('menuContent');
  if (!container) return;

  const data = menuData[tipo];
  if (!data) return;

  // Caso 1: estructura con 'bloques' y columnas 'izq' y 'der'
  if (data.bloques) {
    const colIzq = data.bloques.filter(b => b.columna === 'izq');
    const colDer = data.bloques.filter(b => b.columna === 'der');

    container.innerHTML = `
      <div class="col-md-6">
        ${colIzq.map(renderBloque).join('')}
      </div>
      <div class="col-md-6">
        ${colDer.map(renderBloque).join('')}
      </div>
    `;
    return;
  }

  // Caso 2: estructura con 'izquierda' y 'derecha'
  if (data.izquierda && data.derecha) {
    container.innerHTML = `
      <div class="col-md-6">
        ${data.izquierda.map(renderBloque).join('')}
      </div>
      <div class="col-md-6">
        <div class="row">
          ${data.derecha.map(bloque => {
            if (bloque.tipo === 'imagen') {
              return `
                <div class="col-6 text-center mb-3">
                  <p class="titulo-imagen"><span>${wrapTextBackwards(bloque.titulo || '', 28)}</span></p>
                  <img src="${bloque.src}" alt="${bloque.titulo || ''}" class="img-fluid rounded shadow-sm">
                </div>`;
            }
            return `
              <div class="col-12">
                ${renderBloque(bloque)}
              </div>`;
          }).join('')}
        </div>
      </div>
    `;
    return;
  }

  // Caso 3: estructura con 'items' e 'imagenes' (por si tienes datos así)
  if (tipo === 'cocteleria') {
    container.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          ${data.items.map(renderBloque).join('')}
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-start">
          <div class="image-column">
            ${data.imagenes.map(img => `
              <div class="text-center mb-4">
                <p class="titulo-imagen"><span>${wrapTextBackwards(img.titulo || '', 20)}</span></p>
                <img src="${img.src}" alt="${img.titulo || ''}" class="uniform-img">
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    return;
  }



  // Fallback
  container.innerHTML = '<p class="text-danger">Sección no disponible.</p>';
}



function renderBloque(bloque) {
if (bloque.tipo === 'titulo') {
  const categoriasConCopaBot = [
    'TEQUILA', 'VODKA', 'GINEBRA', 'COGNAC', 'BRANDY', 'MEZCAL', 'RAICILLA', 'RON', 'WHISKY',
    'VINO TINTO', 'VINO BLANCO'
  ];

  const mostrarCopaBot = categoriasConCopaBot.includes(bloque.texto.toUpperCase());

  return `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--nar); padding-bottom: 4px; margin-bottom: 12px;">
      <h5 style="margin: 0;">${bloque.texto}</h5>
      ${mostrarCopaBot ? '<small style="font-weight: bold; color: var(--nar); margin-right: 10px;">COPA &nbsp;&nbsp; BOT</small>' : ''}
    </div>`;
}


  if (bloque.tipo === 'espacio') return '<br>';

  if (bloque.tipo === 'nota') {
    return `<small class="d-block fw-bold mb-3">${wrapText(bloque.texto, 50)}</small>`;
  }

  if (bloque.tipo === 'imagen') {
    return `
      <div class="text-center mb-3">
        <p class="titulo-imagen"><span>${wrapTextBackwards(bloque.titulo, 28)}</span></p>
        <img src="${bloque.src}" alt="${bloque.titulo}" class="img-fluid rounded shadow-sm">
      </div>`;
  }

  if ('bot' in bloque) {
    return `
      <div class="mb-3">
        <div class="d-flex justify-content-between">
          <strong style="flex: 1;">${wrapText(bloque.nombre, 25)}</strong>
          <span style="width: 50px; text-align: right;">${bloque.copa ? `$${bloque.copa}` : 'N/A'}</span>
          <span style="width: 50px; text-align: right;">$${bloque.bot}</span>
        </div>
        ${bloque.descripcion ? `<small class="text-muted d-block">${wrapText(bloque.descripcion, 33)}</small>` : ''}
      </div>`;
  }

  if ('precio' in bloque) {
    return `
      <div class="mb-3">
        <div class="d-flex justify-content-between">
          <strong>${wrapText(bloque.nombre, 25)}</strong>
          <span>$${bloque.precio}</span>
        </div>
        ${bloque.descripcion ? `<small class="text-muted d-block">${wrapText(bloque.descripcion, 33)}</small>` : ''}
      </div>`;
  }

  return '';
}


document.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname.toLowerCase();

  const pageToMenuMap = {
    '/platillos': 'entradas',
    '/platillos.html': 'entradas',
    '/bebidas': 'destilados',
    '/bebidas.html': 'destilados',
    '/': 'entradas',
    '/index': 'entradas',
    '/index.html': 'entradas'
  };

  // Buscar la clave más parecida en la ruta
  for (const path in pageToMenuMap) {
    if (pathname.endsWith(path)) {
      renderMenu(pageToMenuMap[path]);
      break;
    }
  }
});

// Asignar eventos a pestañas después de cargar
document.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname.toLowerCase();

  const pageToMenuMap = {
    '/platillos': 'entradas',
    '/platillos.html': 'entradas',
    '/bebidas': 'destilados',
    '/bebidas.html': 'destilados',
    '/': 'entradas',
    '/index': 'entradas',
    '/index.html': 'entradas'
  };

  for (const path in pageToMenuMap) {
    if (pathname.endsWith(path)) {
      const tipoActivo = pageToMenuMap[path];
      renderMenu(tipoActivo);
      setActiveTab(tipoActivo);
      break;
    }
  }

  // 🔁 Escucha clics en pestañas de bebidas
  document.querySelectorAll('#menuTabsBebidas .nav-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const tipo = btn.dataset.tipo;
      if (!tipo) return;
      renderMenu(tipo);
      setActiveTab(tipo);
    });
  });
});

// ✅ Marca la pestaña activa visualmente
function setActiveTab(tipo) {
  document.querySelectorAll('#menuTabsBebidas .nav-link').forEach(btn => {
    if (btn.dataset.tipo === tipo) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
