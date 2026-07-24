export const pacientesDB = [
  {
    id: 'pac_001',
    nombre: 'Carlos Santiago Martínez',
    objetivo: 'Recomposición Corporal',
    nutriologo: 'Mtro. Luis Ceja',
    correo: 'carlos.santiago@ejemplo.com',
    edad: 24,
    estatura: 175,
    tipoSangre: 'O+',
    observaciones: 'Pie plano severo (sin arco). Precaución con alto impacto.',
    metricas: {
      pesoActual: 85.8,
      pesoInicial: 87.8,
      porcentajeGrasa: 33.7,
      porcentajeMusculo: 33.2,
      cintura: 96.5,
      cadera: 103.0,
    },
    metasDiarias: {
      agua: { actual: 1.0, meta: 2.5 },
    },
    listaSuperSemanal: [
      {
        categoria: 'Proteínas',
        icono: '🥩',
        color: 'text-red-500',
        bg: 'bg-red-50',
        items: [
          '500g Pechuga de Pollo',
          '2 filetes de Salmón (300g)',
          '1 docena de Huevos',
          '250g Requesón fresco',
        ],
      },
      {
        categoria: 'Verduras y Hortalizas',
        icono: '🥦',
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        items: [
          '1kg Ejotes',
          '1 manojo de Perejil',
          '3 Pepinos',
          '1kg Nopales limpios',
          '1 manojo de Espárragos',
        ],
      },
    ],
    planHoy: [
      {
        id: 'c1',
        tipo: 'Desayuno',
        horario: '8:00 am - 10:00 am',
        titulo: 'Ejotes con queso y Jugo verde',
        macros: { kcal: 320, prot: 18, carb: 35, grasa: 12 },
        ingredientes: [
          '1 tza ejotes a la mexicana con 1 cdita aceite olivo',
          '4 cdas queso fresco desmoronado',
          '4 pza tostada de nopal',
        ],
        completado: false,
      },
      {
        id: 'c3',
        tipo: 'Comida',
        horario: '2:00 pm - 4:00 pm',
        titulo: 'Huarache de nopal con requesón',
        macros: { kcal: 450, prot: 32, carb: 45, grasa: 14 },
        ingredientes: [
          '1 penca nopal sellada, 6 cdas requesón fresco',
          '1/3 taza arroz blanco',
          '4 pza tortilla de nopal',
        ],
        completado: false,
      },
      {
        id: 'c5',
        tipo: 'Cena',
        horario: '8:00 pm - 9:30 pm',
        titulo: 'Salmón Lemon Pepper',
        macros: { kcal: 390, prot: 38, carb: 8, grasa: 22 },
        ingredientes: [
          '150g de salmón sellado en sartén con especias lemon pepper',
          '1 taza de espárragos al vapor',
          '1/3 de aguacate',
        ],
        completado: false,
      },
    ],
  },
  {
    id: 'pac_002',
    nombre: 'Alejandra Ibarra',
    objetivo: 'Mantenimiento / Salud',
    nutriologo: 'Mtro. Luis Ceja',
    correo: 'alejandra.ibarra@ejemplo.com',
    edad: 24,
    estatura: 165,
    tipoSangre: 'A+',
    observaciones: 'Sin lesiones previas. Práctica de violín y fitness.',
    metricas: {
      pesoActual: 58.5,
      pesoInicial: 60.0,
      porcentajeGrasa: 24.5,
      porcentajeMusculo: 38.0,
      cintura: 68.0,
      cadera: 94.0,
    },
    metasDiarias: { agua: { actual: 2.0, meta: 2.0 } },
    listaSuperSemanal: [],
    planHoy: [],
  },
];

// Base de datos inicial para el Chat Interno
export const mensajesChatDB = [
  {
    id: 1,
    remitente: 'nutriologo',
    texto:
      'Hola Carlos, ¿cómo te has sentido con el cambio de horario del desayuno?',
    hora: '10:15 am',
  },
  {
    id: 2,
    remitente: 'paciente',
    texto: '¡Hola doc! Bien, la verdad me da mucha más energía por la mañana.',
    hora: '10:20 am',
  },
  {
    id: 3,
    remitente: 'nutriologo',
    texto:
      'Excelente. Recuerda mantener los 2.5 litros de agua hoy que te toca entrenamiento de fuerza.',
    hora: '10:22 am',
  },
];
