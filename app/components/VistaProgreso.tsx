// @ts-nocheck

import React from 'react';

export default function VistaProgreso({ metricas }) {
  return (
    <div className="space-y-6">
      {/* Tarjeta de Peso */}
      <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -z-0"></div>
        <h2 className="font-bold text-gray-900 mb-6 relative z-10 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-emerald-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            ></path>
          </svg>
          Evolución de Peso
        </h2>

        <div className="flex items-end gap-4 mb-5 relative z-10">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Peso Actual
            </p>
            <h3 className="text-4xl font-extrabold text-gray-900">
              {metricas.pesoActual}
              <span className="text-xl text-gray-400 font-medium ml-1">kg</span>
            </h3>
          </div>
          <div className="pb-1.5">
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
              ↓ -2.4 kg este mes
            </span>
          </div>
        </div>
        <div className="relative z-10 bg-gray-50 p-4 rounded-2xl">
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
            <span>Meta: 80.0 kg</span>
            <span className="text-emerald-600">60% completado</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-emerald-500 h-2.5 rounded-full"
              style={{ width: '60%' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Grid de Composición */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-[1.5rem] border border-blue-100 shadow-sm relative overflow-hidden group hover:border-blue-300 transition">
          <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">
            Masa Muscular
          </p>
          <h3 className="text-2xl font-extrabold text-gray-900">
            {metricas.porcentajeMusculo}%
          </h3>
        </div>
        <div className="bg-white p-5 rounded-[1.5rem] border border-orange-100 shadow-sm relative overflow-hidden group hover:border-orange-300 transition">
          <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">
            Grasa Corporal
          </p>
          <h3 className="text-2xl font-extrabold text-gray-900">
            {metricas.porcentajeGrasa}%
          </h3>
        </div>
      </div>
    </div>
  );
}
