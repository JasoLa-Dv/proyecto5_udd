const products = [
  {
    id: "1",
    name: "Botín Cierre Negro",
    image: "/images/foto_1.jpg",
    description:
      "Botín Mujer Caña Media Alta, Con Cierre, Suela Prefinito, hecho a mano con cuero 100 % natural. El interior es forrado con Badana, favoreciendo la transpiración y la absorción del sudor en el pie. Talla: 36 37 38 39 40",
    price: 70000,
    countInStock: 6,
    rating: 4,
    numReviews: 4,
  },
  {
    id: "2",
    name: "Botin Combat Charol Negro",
    image: "/images/foto_2.jpg",
    description:
      "Hermosos y cómodos botines básicos ideales para lucir día a día y llevar con cualquier estilo, dale vida a tus outfits con este bello calzado. Modelo de charol para que puedas combinar con todo y un cómodo ajuste acordonado que puede ajustarse. Hecho con materiales de calidad garantizada. Talla: 36 37 38 39",
    price: 70000,
    countInStock: 8,
    rating: 2,
    numReviews: 2,
  },
  {
    id: "3",
    name: "Botín negro con broches",
    image: "/images/foto_3.jpg",
    description:
      "Color: Agreste negro con cuero texturado negro brilloCapellada (material exterior): CueroForro (material interior): Cuero Plantilla: Cuero Planta (suela): Goma Prensada   Color: natural rústico Taco: Madera. Talla: 37 39",
    price: 60000,
    countInStock: 3,
    rating: 3.5,
    numReviews: 3,
  },
  {
    id: "4",
    name: "Botín azul",
    image: "/images/foto_4.jpg",
    description:
      "Color: Azul marino Capellada (material exterior): CueroForro (material interior): BadanaPlantilla: Badana Planta: Suela Taco: Madera Altura taco: 5 cm Estilo: Botín. Talla: 38 39",
    price: 60000,
    countInStock: 2,
    rating: 5,
    numReviews: 9,
  },
  {
    id: "5",
    name: "Botín blanco",
    image: "/images/foto_5.jpg",
    description:
      "Color: Blanco Capellada (material exterior): CueroForro (material interior): BadanaPlantilla: Badana Planta: Suela Taco: Madera Altura taco: 5 cm Estilo: Botín. Talla: 35 38 39",
    price: 60000,
    countInStock: 4,
    rating: 2,
    numReviews: 2,
  },
  {
    id: "6",
    name: "Zapatos con cordones",
    image: "/images/foto_6.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 35 36 38",
    price: 70000,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "7",
    name: "Botin Animal print",
    image: "/images/foto_7.jpg",
    description:
      "Color: Animal print Capellada (material exterior): CueroForro (material interior): BadanaPlantilla: Badana Planta: Suela Taco: Madera Altura taco: 5 cm Estilo: Botín. Talla: 36 37 38",
    price: 70000,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "8",
    name: "Zapato cuero azul",
    image: "/images/foto_8.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 36 37 38",
    price: 29,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "9",
    name: "Zapatilla multicolor flores",
    image: "/images/foto_9.jpg",
    description:
      "Zapatilla Multicolor Refresh. Estilo urbano. Tipo Slip-On. Capellada y forro cuero. Diseño estilo floral.  Pespunte a tono. Costados elasticados. Talla: 36 37",
    price: 50000,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "10",
    name: "Zapatos Animal print",
    image: "/images/foto_10.jpg",
    description:
      "Color: Animal print y cuerio negro Capellada (material exterior): CueroForro (material interior): BadanaPlantilla: Badana Planta: Suela Taco: Madera Altura taco: 5 cm Estilo: Botín. Talla: 36 37 38 39",
    price: 60000,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "11",
    name: "Zapatos Animal print",
    image: "/images/foto_11.jpg",
    description:
      "Color: Animal print Capellada (material exterior): CueroForro (material interior): BadanaPlantilla: Badana Planta: Suela Taco: Madera Altura taco: 5 cm Estilo: Botín. Talla: 37",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "12",
    name: "Zapatos Animal print",
    image: "/images/foto_12.jpg",
    description:
      "Color: Animal print Capellada (material exterior): CueroForro (material interior): BadanaPlantilla: Badana Planta: Suela Taco: Madera Altura taco: 5 cm Estilo: Botín. Talla: 36",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "13",
    name: "Zapato cuero negro texturado",
    image: "/images/foto_13.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 37 38",
    price: 60000,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "14",
    name: "Botin Animal print y cuero negro",
    image: "/images/foto_14.jpg",
    description:
      "Color: Animal print y cuero negro Capellada (material exterior): CueroForro (material interior): BadanaPlantilla: Badana Planta: Suela Taco: Madera Altura taco: 5 cm Estilo: Botín. Talla: 37 39",
    price: 70000,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "15",
    name: "Zapato cuero cafe texturado",
    image: "/images/foto_15.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 37 38 39",
    price: 60000,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "16",
    name: "Zapatos con cierre Beige",
    image: "/images/foto_16.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 35 36",
    price: 50000,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "17",
    name: "Zapatos negro con punta ploma",
    image: "/images/foto_17.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 36 37",
    price: 60000,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "18",
    name: "Zapatilla Blancas y detalle animal print",
    image: "/images/foto_18.jpg",
    description:
      "Zapatilla Multicolor Refresh. Estilo urbano. Tipo Slip-On. Capellada y forro cuero. Diseño estilo floral.  Pespunte a tono. Costados elasticados. Talla: 38 39",
    price: 60000,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "19",
    name: "Zapatilla rojas",
    image: "/images/foto_19.jpg",
    description:
      "Zapatilla Multicolor Refresh. Estilo urbano. Tipo Slip-On. Capellada y forro cuero. Diseño estilo floral.  Pespunte a tono. Costados elasticados. Talla: 37",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "20",
    name: "Zapato color dorado",
    image: "/images/foto_20.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 36",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "21",
    name: "Zapato color negro con broches",
    image: "/images/foto_21.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 40",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "22",
    name: "Botín Negro con hebilla",
    image: "/images/foto_22.jpg",
    description:
      "Botín Mujer Caña Media Alta, Con Cierre, Suela Prefinito, hecho a mano con cuero 100 % natural. El interior es forrado con Badana, favoreciendo la transpiración y la absorción del sudor en el pie. Talla: 35",
    price: 70000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "23",
    name: "Zapato color negro",
    image: "/images/foto_23.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 38",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "24",
    name: "Zapato color cafe mullticolor",
    image: "/images/foto_24.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 39",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "25",
    name: "Zapato color rojo",
    image: "/images/foto_25.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 36",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "26",
    name: "Zapato color cafe con animal print",
    image: "/images/foto_26.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 38",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "27",
    name: "Zapato color azul",
    image: "/images/foto_27.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 37",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "28",
    name: "Zapato color verde mullticolor",
    image: "/images/foto_28.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 37",
    price: 29,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "29",
    name: "Zapato Animal print",
    image: "/images/foto_29.jpg",
    description:
      "Zapato Mujer, Hecho a Mano con Cuero (Liso y Texturado) 100 % natural. El interior es forrado completamente con Badana, favoreciendo la transpiración del pie. Talla: 37",
    price: 60000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
