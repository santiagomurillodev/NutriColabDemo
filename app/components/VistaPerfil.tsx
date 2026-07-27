// @ts-nocheck
import React from 'react';

export default function VistaPerfil(props: any) {
  const { datosPaciente, cerrarSesion } = props;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-8">
      {/* Tarjeta Principal de Perfil */}
      <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-emerald-400 to-teal-500"></div>

        <div className="relative mt-8 mb-4 inline-block">
          <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-3xl font-bold">
              {datosPaciente.nombre
                .split(' ')
                .map((n) => n[0])
                .join('')
                .substring(0, 2)}
            </div>
          </div>
          {/* Botón flotante para "Cambiar Foto" */}
          <button className="absolute bottom-0 right-0 bg-gray-900 text-white p-2.5 rounded-full border-2 border-white shadow-md hover:scale-105 transition active:scale-95">
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
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </button>
        </div>

        <h2 className="text-2xl font-extrabold text-gray-900">
          {datosPaciente.nombre}
        </h2>
        <p className="text-emerald-600 font-bold text-sm mt-1">
          Paciente Activo
        </p>
        <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
          Registrado desde abril de 2026. Plan nutricional enfocado en
          recomposición corporal y aumento de masa muscular.
        </p>
      </div>

      {/* Tarjeta de Datos Clínicos */}
      <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h3 className="font-extrabold text-gray-900 mb-6 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          Expediente Clínico
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              Edad
            </p>
            <p className="font-extrabold text-gray-900">24 años</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              Tipo de Sangre
            </p>
            <p className="font-extrabold text-gray-900">O+</p>
          </div>
          <div className="col-span-2 p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              Observaciones Físicas
            </p>
            <p className="font-bold text-gray-900 text-sm">
              Pie plano severo (sin arco). Requiere precaución con rutinas de
              alto impacto.
            </p>
          </div>
          <div className="col-span-2 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">
              Nutriólogo Asignado
            </p>
            <p className="font-extrabold text-emerald-900">
              {datosPaciente.nutriologo}
            </p>
          </div>
        </div>
      </div>

      {/* Botón de Cerrar Sesión */}
      <button
        onClick={cerrarSesion}
        className="w-full py-4 bg-red-50 text-red-600 font-bold rounded-2xl hover:bg-red-100 transition-colors border border-red-100 flex items-center justify-center gap-2"
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
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
        Cerrar Sesión
      </button>
    </div>
  );
}