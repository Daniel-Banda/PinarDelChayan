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

  destilados: {
    items: [
      { tipo: 'titulo', texto: 'TEQUILA' },
      { nombre: 'Don Julio 70', copa: 198, bot: 2376, descripcion: '(750 ml)' },
      { nombre: 'Don Julio Blanco', copa: 135, bot: 1485, descripcion: '(700 ml)' },
      { nombre: 'Don Julio Reposado', copa: 145, bot: 1595, descripcion: '(700 ml)' },
      { nombre: 'Pueblo Viejo Añejo', copa: 97, bot: 1164, descripcion: '(750 ml)' },
      { nombre: 'Antiguo De Herradura', copa: 89, bot: 979, descripcion: '(700 ml)' },
      { nombre: 'Herradura Añejo', copa: 180, bot: 2160, descripcion: '(750 ml)' },
      { nombre: 'Tradicional Reposado', copa: 98, bot: 1176, descripcion: '(750 ml)' },
      { nombre: 'Herradura Blanco', copa: 125, bot: 1375, descripcion: '(700 ml)' },
      { nombre: '7 Leguas Blanco', copa: 130, bot: 1560, descripcion: '(750 ml)' },
      { nombre: 'Cuervo 1800 Añejo', copa: 130, bot: 1760, descripcion: '(700 ml)' },
      { nombre: 'Cuervo 1800 Cristalino', copa: 170, bot: 1870, descripcion: '(700 ml)' },
      { nombre: 'Gran Centenario Plata', copa: 110, bot: 1210, descripcion: '(700 ml)' },
      { nombre: 'Gran Centenario Añejo', copa: 120, bot: 1320, descripcion: '(695 ml)' },
      { nombre: 'Gran Centenario Reposado', copa: 115, bot: 1265, descripcion: '(700 ml)' },
      { nombre: 'Maestro Dobel Cristalino', copa: 185, bot: 2220, descripcion: '(750 ml)' },

      { tipo: 'titulo', texto: 'VODKA' },
      { nombre: 'Smirnoff', copa: 79, bot: 948, descripcion: '(750 ml)' },
      { nombre: 'Absolut Azul', copa: 128, bot: 1536, descripcion: '(750 ml)' },
      { nombre: 'Vodka Stolichnaya', copa: 125, bot: 1502, descripcion: '(750 ml)' },

      { tipo: 'titulo', texto: 'GINEBRA' },
      { nombre: 'Tanqueray', copa: 110, bot: 1320, descripcion: '(750 ml)' },
      { nombre: "Hendrick's", copa: 155, bot: 1860, descripcion: '(750 ml)' },

      { tipo: 'titulo', texto: 'COGNAC' },
      { nombre: 'V.S.O.P Hennessy', copa: 265, bot: 2915, descripcion: '(700 ml)' },
      { nombre: 'V.S.O.P Martell', copa: 180, bot: 1980, descripcion: '(700 ml)' },

      { tipo: 'titulo', texto: 'BRANDY' },
      { nombre: 'Azteca De Oro', copa: 75, bot: 825, descripcion: '(700 ml)' },
      { nombre: 'Torres 10', copa: 102, bot: 1122, descripcion: '(700 ml)' },

      { tipo: 'titulo', texto: 'MEZCAL' },
      { nombre: '400 Conejos', copa: 125, bot: 1502, descripcion: '(750 ml). Agave Espadín' },
      { nombre: 'Creyente Joven', copa: 135, bot: 1620, descripcion: '(750 ml). Agave Espadín' },
      { nombre: 'Don Fede 70', copa: 115, bot: 1380, descripcion: '(750 ml). Agave Ixtero Amarillo o Lineño' },
      { nombre: 'Chacolo', copa: 188, bot: 2256, descripcion: '(750 ml). Agave Ixtero Amarillo' },

      { tipo: 'titulo', texto: 'RAICILLA' },
      { nombre: 'Raicilla Tesoro Del Oeste', copa: 195, bot: 2340, descripcion: '(750 ml). Agave Maximiliana. San Sebastián del Oeste, Jalisco' },
      { nombre: 'Raicilla Cielo Azul', copa: 198, bot: 2376, descripcion: '(750 ml). Agave Angustifolia Haw. San Sebastián del Oeste, Jalisco' },

      { tipo: 'titulo', texto: 'RON' },
      { nombre: 'Ron Bacardí Blanco', copa: 88, bot: 968, descripcion: '(750 ml)' },
      { nombre: 'Bacardí Solera', copa: 105, bot: 1260, descripcion: '(750 ml)' },
      { nombre: 'Ron Clássico Añejo N°.3', copa: 120, bot: 1320, descripcion: '(750 ml) *Producto Local' },
      { nombre: 'Matusalem 18 Años', copa: 125, bot: 1500, descripcion: '(750 ml)' },

      { tipo: 'titulo', texto: 'WHISKY' },
      { nombre: 'Johnnie Walker Red Label', copa: 105, bot: 1155, descripcion: '(700 ml)' },
      { nombre: 'Johnnie Walker Black Label', copa: 190, bot: 2280, descripcion: '(750 ml)' },
      { nombre: "Buchanan's 12", copa: 160, bot: 1920, descripcion: '(750 ml)' },
      { nombre: "Buchanan's 18", copa: 298, bot: 3576, descripcion: '(750 ml)' },
      { nombre: 'Chivas Regal', copa: 185, bot: 2220, descripcion: '(750 ml)' }
    ],
    imagenes: [
      { src: '../IMG/jpg/bebidas/', titulo: '' },
    ]
  },
  cerveza: {
    items: [
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
    imagenes: [
      { src: '../IMG/jpg/bebidas/', titulo: '' },
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
      { src: '../IMG/jpg/bebidas/', titulo: '' },
    ]
  },
  aperitivos: {
    items: [
      { nombre: 'Licor De Café Kahlúa', precio: 98 },
      { nombre: 'Licor 43', precio: 105 },
      { nombre: 'Anís Chinchón (Dulce)', precio: 95 },
      { nombre: 'Anís Uxore (Seco)', precio: 93 },
      { nombre: 'Amaretto Disaronno', precio: 103 },
      { nombre: "Bailey's", precio: 98 },
      { nombre: 'Frangelico', precio: 93 },
      { nombre: 'Vacari Nero (Sambuca)', precio: 103 }
    ],

    imagenes: [
      { src: '../IMG/jpg/bebidas/', titulo: '' },
    ]
  },


  vino: {
    items: [
      { tipo: 'titulo', texto: 'VINO TINTO' },
      { nombre: 'Concha Y Toro Reservado', copa: 99, bot: 435, descripcion: 'Cabernet Sauvignon. Valle Central, Chile' },
      { nombre: 'XA Domecq', bot: 890, descripcion: 'Cabernet Sauvignon-Grenache. Valle de Guadalupe, Baja California, México' },
      { nombre: 'Casa Madero', bot: 890, descripcion: 'Syrah. Valle de Parras, México' },
      { nombre: '2V Casa Madero', bot: 950, descripcion: 'Cabernet Sauvignon, Merlot. Región Valle de Parras, México' },
      { nombre: 'Casillero Del Diablo', bot: 860, descripcion: 'Cabernet Sauvignon. Valle Central, Chile' },
      { nombre: 'AbA De Ramón Del Riscál', bot: 1150, descripcion: 'Rioja. Elciego, España' },
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
      { nombre: 'Riunite Blanco Espumoso', bot: 545, descripcion: 'Vino blanco espumoso extra seco' },
      { nombre: 'Riunite Rosado', bot: 545, descripcion: 'Vino rosado extra seco' },
      { nombre: 'Riunite Prosecco', bot: 670, descripcion: 'Vino blanco espumoso extra seco' },
      { nombre: 'Riunite Lambrusco', bot: 545, descripcion: 'Vino tinto espumoso' }

    ],
    imagenes: [
      { src: '../IMG/jpg/bebidas/', titulo: '' },
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

function renderMenu(tipo) {
  const container = document.getElementById('menuContent');
  if (!container) {
    console.error('El contenedor #menuContent no fue encontrado.');
    return;
  }

  const data = menuData[tipo];
  if (!data) {
    console.error(`No se encontraron datos para el tipo de menú: ${tipo}`);
    return;
  }

  document.querySelectorAll('#menuTabs .nav-link').forEach(btn => {
    btn.classList.remove('active', 'bg-success', 'text-white');
  });

  const activeButton = document.getElementById(`tab-${tipo}`);
  if (activeButton) {
    activeButton.classList.add('active', 'bg-success', 'text-white');
  }

  container.innerHTML = `
    <div class="col-md-6">
      ${data.items.map(item => {
    if (item.tipo === 'titulo') {
      return `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--nar); padding-bottom: 4px; margin-bottom: 12px; margin-right:10px;">
              <h5 style="margin: 0;">${item.texto}</h5>
              ${['destilados', 'vino'].includes(tipo) ? `
                <div style="display: flex; gap: 24px; font-size: 0.7rem; font-weight: 500;">
                  <span style="font-size: 0.9rem !important;">COPA</span>
                  <span style="font-size: 0.9rem !important;">BOT</span>
                </div>` : ''}
            </div>
          `;
    }

    if (item.tipo === 'espacio') return '<br>';
    if (item.tipo === 'nota') return `<small class="d-block fw-bold mb-3">${wrapText(item.texto, 50)}</small>`;

    if ('bot' in item) {
      return `
          <div class="mb-3">
            <div class="d-flex justify-content-between">
              <strong style="flex: 1;">${wrapText(item.nombre, 25)}</strong>
              <span style="width: 50px; text-align: right;">${item.copa ? `$${item.copa}` : 'N/A'}</span>
              <span style="width: 50px; text-align: right;">$${item.bot}</span>
            </div>
            ${item.descripcion ? `<small class="text-muted d-block">${wrapText(item.descripcion, 33)}</small>` : ''}
          </div>
        `;
    }

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
              <span>${wrapTextBackwards(img.titulo, 28)}</span>
            </p>
            <img src="${img.src}" alt="${img.titulo}" class="img-fluid rounded shadow-sm">
          </div>
        `).join('')}
      </div>
    </div>
  `;

  
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
