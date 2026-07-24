'use client';
import React, { useState } from 'react';

export default function TarjetaComida({
  comida,
  onCompletar,
  modoPareja,
  onVerReceta,
}) {
  const [estaCompletada, setEstaCompletada] = useState(comida.completado);

  // Estados para la IA de Sustitución
  const [ingredientesSustituidos, setIngredientesSustituidos] = useState({});
  const [cargandoIA, setCargandoIA] = useState({});

  const handleCompletar = () => {
    setEstaCompletada(!estaCompletada);
    if (onCompletar) onCompletar(comida.id, !estaCompletada);
  };

  const ajustarCantidad = (texto) => {
    if (!modoPareja) return texto;
    return texto.replace(
      /(\d+)\s*(tza|taza|cda|cucharada|pza|pieza|manojo|filete|g|kg)/gi,
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

  // Simulación de conexión a la IA para sustituir ingredientes
  const simularSustitucionIA = (index, textoOriginal) => {
    setCargandoIA((prev) => ({ ...prev, [index]: true }));

    setTimeout(() => {
      let sustituto = 'Calculando equivalencia...';
      const textoLow = textoOriginal.toLowerCase();

      // Lógica de IA simulada basada en los macros
      if (textoLow.includes('salmón'))
        sustituto =
          '180g de pechuga de pollo + 15g de nuez (Grasas equivalentes)';
      else if (textoLow.includes('requesón'))
        sustituto = '80g de queso panela o tofu firme';
      else if (textoLow.includes('arroz'))
        sustituto = '1/2 taza de quinoa cocida';
      else if (textoLow.includes('melón') || textoLow.includes('sandía'))
        sustituto = '1 taza de fresas o papaya';
      else if (textoLow.includes('almendras') || textoLow.includes('nuez'))
        sustituto = '2 cdas de crema de cacahuate natural';
      else
        sustituto =
          'Opción libre de la misma categoría (Ver tabla de equivalencias)';

      setIngredientesSustituidos((prev) => ({ ...prev, [index]: sustituto }));
      setCargandoIA((prev) => ({ ...prev, [index]: false }));
    }, 1500); // 1.5 seg de "pensamiento" de la IA
  };

  return (
    <div
      className={`rounded-[2rem] p-5 sm:p-6 transition-all duration-300 ${
        estaCompletada
          ? 'bg-gray-50/50 border border-transparent opacity-70'
          : 'bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]'
      }`}
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <button
          onClick={handleCompletar}
          className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform active:scale-90 ${
            estaCompletada
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'bg-transparent border-gray-300 text-transparent hover:border-emerald-400'
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest mb-1 truncate">
              {comida.tipo} <span className="text-gray-300 mx-1">|</span>{' '}
              {comida.horario}
            </p>
          </div>

          <h3
            className={`text-lg sm:text-xl font-bold mb-2 transition-all ${
              estaCompletada ? 'text-gray-400 line-through' : 'text-gray-900'
            }`}
          >
            {comida.titulo}
          </h3>

          {/* 🚀 INSIGNIAS DE MACRONUTRIENTES 🚀 */}
          {comida.macros && (
            <div
              className={`flex flex-wrap gap-2 mb-4 transition-opacity ${
                estaCompletada ? 'opacity-50' : 'opacity-100'
              }`}
            >
              <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-gray-200 shadow-sm flex items-center gap-1">
                🔥 {modoPareja ? comida.macros.kcal * 2 : comida.macros.kcal}{' '}
                kcal
              </span>
              <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-red-100 flex items-center gap-1">
                🍗 {modoPareja ? comida.macros.prot * 2 : comida.macros.prot}g
              </span>
              <span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-amber-100 flex items-center gap-1">
                🍚 {modoPareja ? comida.macros.carb * 2 : comida.macros.carb}g
              </span>
              <span className="bg-yellow-50 text-yellow-600 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-yellow-100 flex items-center gap-1">
                🥑 {modoPareja ? comida.macros.grasa * 2 : comida.macros.grasa}g
              </span>
            </div>
          )}

          {/* LISTA DE INGREDIENTES Y BOTÓN DE IA */}
          <ul className="space-y-3 mb-5">
            {comida.ingredientes.map((ingrediente, index) => {
              const textoFinal = ingredientesSustituidos[index]
                ? ingredientesSustituidos[index]
                : ajustarCantidad(ingrediente);
              const estaCargando = cargandoIA[index];
              const fueSustituido = !!ingredientesSustituidos[index];

              return (
                <li
                  key={index}
                  className={`flex items-start justify-between gap-3 text-sm sm:text-base leading-snug rounded-xl transition-all ${
                    estaCompletada ? 'text-gray-400' : 'text-gray-700'
                  } ${
                    fueSustituido
                      ? 'bg-indigo-50/50 p-2 border border-indigo-100/50 -ml-2'
                      : ''
                  }`}
                >
                  <div className="flex items-start gap-2.5 flex-1 pt-1">
                    {estaCargando ? (
                      <svg
                        className="animate-spin w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <span
                        className={`mt-1 text-xs ${
                          fueSustituido
                            ? 'text-indigo-400'
                            : estaCompletada
                            ? 'text-gray-300'
                            : 'text-emerald-400'
                        }`}
                      >
                        ●
                      </span>
                    )}
                    <span
                      className={
                        fueSustituido ? 'font-medium text-indigo-900' : ''
                      }
                    >
                      {estaCargando ? (
                        <span className="text-indigo-400 animate-pulse">
                          Analizando macros con IA...
                        </span>
                      ) : (
                        textoFinal
                      )}
                    </span>
                  </div>

                  {/* 🚀 BOTÓN DE SUSTITUCIÓN IA 🚀 */}
                  {!estaCompletada && !fueSustituido && !estaCargando && (
                    <button
                      onClick={() => simularSustitucionIA(index, ingrediente)}
                      className="group flex-shrink-0 flex items-center justify-center w-7 h-7 bg-gray-50 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 text-gray-400 transition-all active:scale-95"
                      title="Buscar alternativa con IA"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        ></path>
                      </svg>
                    </button>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center w-full">
            <button
              onClick={() => onVerReceta(comida)}
              className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-emerald-600 transition-colors w-fit px-1 py-1 rounded-xl"
            >
              <div className="w-7 h-7 rounded-full bg-gray-50 group-hover:bg-emerald-50 border border-gray-100 group-hover:border-emerald-100 flex items-center justify-center transition-colors">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <span className="translate-y-[0.5px]">¿Cómo prepararlo?</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
