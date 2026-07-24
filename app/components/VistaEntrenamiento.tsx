'use client';
import React, { useState } from 'react';

export default function VistaEntrenamiento() {
  const [tipo, setTipo] = useState('');
  const [duracion, setDuracion] = useState(0);
  const [intensidad, setIntensidad] = useState('');
  const [guardando, setGuardando] = useState(false);
  const [guardado, setGuardado] = useState(false);

  // Historial simulado de la semana
  const semana = [
    { dia: 'L', estado: 'fuerza' },
    { dia: 'M', estado: 'cardio' },
    { dia: 'M', estado: 'descanso' },
    { dia: 'J', estado: 'fuerza' },
    { dia: 'V', estado: 'pendiente' }, // Hoy
    { dia: 'S', estado: 'futuro' },
    { dia: 'D', estado: 'futuro' },
  ];

  const registrarEntrenamiento = () => {
    setGuardando(true);
    setTimeout(() => {
      setGuardando(false);
      setGuardado(true);
      setTimeout(() => setGuardado(false), 3000);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Resumen de la Semana (Gamificación) */}
      <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h3 className="font-extrabold text-gray-900 mb-4 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            ></path>
          </svg>
          Tu racha semanal
        </h3>
        <div className="flex justify-between items-center">
          {semana.map((dia, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm transition-transform hover:scale-110 cursor-default ${
                  dia.estado === 'fuerza'
                    ? 'bg-gray-900 text-white'
                    : dia.estado === 'cardio'
                    ? 'bg-emerald-500 text-white'
                    : dia.estado === 'descanso'
                    ? 'bg-indigo-500 text-white'
                    : dia.estado === 'pendiente'
                    ? 'bg-orange-100 text-orange-600 border border-orange-200 animate-pulse'
                    : 'bg-gray-50 text-gray-400 border border-gray-100'
                }`}
              >
                {dia.estado === 'fuerza'
                  ? '🏋️'
                  : dia.estado === 'cardio'
                  ? '🏃'
                  : dia.estado === 'descanso'
                  ? '🧘'
                  : dia.dia}
              </div>
              <span
                className={`text-[10px] font-bold ${
                  dia.estado === 'pendiente'
                    ? 'text-orange-600'
                    : 'text-gray-400'
                }`}
              >
                {dia.dia}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Formulario de Registro */}
      <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
        {guardado ? (
          <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-emerald-100">
              <svg
                className="w-10 h-10"
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
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              ¡Brutal! 🔥
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              Tu entrenamiento ha sido registrado en tu expediente.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 1. Tipo de Entrenamiento */}
            <div>
              <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">
                1. Tipo de Actividad
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <button
                  onClick={() => setTipo('fuerza')}
                  className={`p-4 rounded-2xl border transition-all active:scale-95 flex flex-col items-center gap-2 ${
                    tipo === 'fuerza'
                      ? 'bg-gray-900 border-gray-900 text-white shadow-lg shadow-gray-200'
                      : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  <span className="text-3xl">🏋️‍♂️</span>
                  <span className="text-xs font-bold">Fuerza</span>
                </button>
                <button
                  onClick={() => setTipo('cardio')}
                  className={`p-4 rounded-2xl border transition-all active:scale-95 flex flex-col items-center gap-2 ${
                    tipo === 'cardio'
                      ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-200'
                      : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  <span className="text-3xl">🏃‍♂️</span>
                  <span className="text-xs font-bold">Cardio</span>
                </button>
                <button
                  onClick={() => setTipo('deporte')}
                  className={`p-4 rounded-2xl border transition-all active:scale-95 flex flex-col items-center gap-2 ${
                    tipo === 'deporte'
                      ? 'bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-200'
                      : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  <span className="text-3xl">🥊</span>
                  <span className="text-xs font-bold">Deporte</span>
                </button>
                <button
                  onClick={() => setTipo('descanso')}
                  className={`p-4 rounded-2xl border transition-all active:scale-95 flex flex-col items-center gap-2 ${
                    tipo === 'descanso'
                      ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-200'
                      : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  <span className="text-3xl">🧘‍♂️</span>
                  <span className="text-xs font-bold">Descanso</span>
                </button>
              </div>
            </div>

            {/* Solo mostramos Tiempo e Intensidad si no es descanso */}
            {tipo && tipo !== 'descanso' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* 2. Duración */}
                <div>
                  <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">
                    2. Tiempo Total
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {[30, 45, 60, 90, 120].map((min) => (
                      <button
                        key={min}
                        onClick={() => setDuracion(min)}
                        className={`px-4 py-2.5 rounded-xl border font-bold text-sm transition-colors active:scale-95 ${
                          duracion === min
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-600 shadow-sm'
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {min} min
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Intensidad */}
                <div>
                  <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">
                    3. Intensidad
                  </h3>
                  <div className="flex bg-gray-100 p-1 rounded-2xl">
                    <button
                      onClick={() => setIntensidad('baja')}
                      className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        intensidad === 'baja'
                          ? 'bg-white text-green-600 shadow-sm'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Baja (Verde)
                    </button>
                    <button
                      onClick={() => setIntensidad('media')}
                      className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        intensidad === 'media'
                          ? 'bg-white text-orange-500 shadow-sm'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Media (Naranja)
                    </button>
                    <button
                      onClick={() => setIntensidad('alta')}
                      className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        intensidad === 'alta'
                          ? 'bg-white text-red-600 shadow-sm'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Alta (Roja)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Botón de Guardado */}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={registrarEntrenamiento}
                disabled={
                  !tipo ||
                  (tipo !== 'descanso' && (!duracion || !intensidad)) ||
                  guardando
                }
                className="w-full flex justify-center items-center gap-2 py-4 rounded-2xl shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-400 transition transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:hover:translate-y-0 disabled:shadow-none"
              >
                {guardando ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                    </svg>{' '}
                    Registrando...
                  </>
                ) : (
                  'Guardar Entrenamiento'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
