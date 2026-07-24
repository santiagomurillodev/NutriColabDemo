'use client';
import React, { useState, useEffect } from 'react';

export default function VistaReceta({ comida, volver, modoPareja }) {
  const [cargando, setCargando] = useState(true);

  // Animación de carga sutil
  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 1200); // Lo bajamos a 1.2s para que se sienta más responsivo
    return () => clearTimeout(timer);
  }, []);

  const ajustarCantidad = (texto) => {
    if (!modoPareja) return texto;
    return texto.replace(
      /(\d+)\s*(tza|taza|cda|cucharada|pza|pieza|manojo|filete|g)/gi,
      (match, numero, unidad) => {
        const nuevoNumero = parseInt(numero) * 2;
        let nuevaUnidad = unidad;
        if (nuevoNumero > 1) {
          if (unidad.toLowerCase() === 'taza') nuevaUnidad = 'tazas';
          else if (unidad.toLowerCase() === 'cucharada')
            nuevaUnidad = 'cucharadas';
          else if (unidad.toLowerCase() === 'pieza') nuevaUnidad = 'piezas';
          else if (unidad.toLowerCase() === 'filete') nuevaUnidad = 'filetes';
          else if (unidad.toLowerCase() === 'manojo') nuevaUnidad = 'manojos';
        }
        return `${nuevoNumero} ${nuevaUnidad}`;
      }
    );
  };

  if (cargando) {
    return (
      <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[2rem] border border-gray-100 shadow-sm">
        <div className="w-12 h-12 border-4 border-emerald-50 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-400 font-medium text-sm animate-pulse">
          Obteniendo receta...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
      {/* Header Limpio y Consistente */}
      <div className="bg-gray-50 border-b border-gray-100 p-6 sm:p-8 relative">
        <button
          onClick={volver}
          className="mb-6 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition font-bold text-sm bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm w-fit"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Volver al plan
        </button>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest border border-emerald-100">
              Instrucciones
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            {comida.titulo}
          </h1>
          <p className="text-gray-500 mt-2 text-sm font-medium flex items-center gap-3">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>{' '}
              20 min
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              {modoPareja ? '2 Porciones' : '1 Porción'}
            </span>
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Ingredientes Ajustados */}
        <div>
          <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">
            Ingredientes
          </h3>
          <ul className="space-y-3 bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
            {comida.ingredientes.map((ing, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-600 text-sm"
              >
                <span className="text-emerald-500 font-bold mt-0.5">•</span>{' '}
                {ajustarCantidad(ing)}
              </li>
            ))}
          </ul>
        </div>

        {/* Pasos Consistentes con el Diseño */}
        <div>
          <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">
            Preparación
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Preparar los ingredientes
                </h4>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Lava y desinfecta bien todos los ingredientes frescos.
                  Asegúrate de tener las porciones correctas medidas antes de
                  calentar.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Cocción principal
                </h4>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Lleva a fuego medio tu sartén o plancha con un toque de aceite
                  si tu receta lo requiere. Si preparas el Salmón, séllalo 4
                  minutos por lado hasta que la costra esté dorada.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Emplatado</h4>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Sirve en un plato amplio integrando todos los componentes.
                  ¡Disfruta tu comida cuidando tus macros!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 