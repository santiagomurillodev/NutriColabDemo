// @ts-nocheck
import React from 'react';

export default function VistaAlertas() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-xl font-extrabold text-gray-900">
            Centro de Atención
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Intervenciones requeridas y acciones de la IA.
          </p>
        </div>
        <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition">
          Marcar todas como leídas
        </button>
      </div>

      <div className="space-y-4">
        {/* ALERTA 1: INTERVENCIÓN CLÍNICA (ROJA) */}
        <div className="bg-white rounded-[1.5rem] p-5 sm:p-6 border border-red-100 shadow-sm flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <div className="w-12 h-12 flex-shrink-0 bg-red-50 text-red-500 rounded-full flex items-center justify-center border border-red-100">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-extrabold text-red-500 uppercase tracking-widest mb-1">
              Riesgo de Abandono
            </p>
            <p className="font-bold text-gray-900">
              Roberto Gómez lleva 4 días sin registrar comidas ni agua.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Su adherencia semanal bajó al 45%.
            </p>
          </div>
          <button className="w-full sm:w-auto text-white bg-[#25D366] hover:bg-[#1EBE5A] px-4 py-2.5 rounded-xl text-sm font-bold transition shadow-sm flex items-center justify-center gap-2 flex-shrink-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"></path>
            </svg>
            Mandar WhatsApp
          </button>
        </div>

        {/* ALERTA 2: SUSTITUCIÓN IA (ÍNDIGO) */}
        <div className="bg-white rounded-[1.5rem] p-5 sm:p-6 border border-indigo-100 shadow-sm flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <div className="w-12 h-12 flex-shrink-0 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center border border-indigo-100">
            <span className="text-xl">🤖</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xs font-extrabold text-indigo-500 uppercase tracking-widest">
                Sustitución IA
              </p>
              <span className="bg-indigo-100 text-indigo-700 text-[9px] font-bold px-2 py-0.5 rounded-md">
                Macros Conservados
              </span>
            </div>
            <p className="font-bold text-gray-900">
              Carlos Santiago reemplazó el Salmón.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              La IA le sugirió Pechuga de Pollo + Nuez (grasas saludables). El
              balance energético no se vio afectado.
            </p>
          </div>
          <div className="w-full sm:w-auto flex gap-2 flex-shrink-0">
            <button className="flex-1 sm:flex-none text-gray-500 bg-gray-50 hover:bg-gray-100 px-4 py-2.5 rounded-xl text-sm font-bold transition border border-gray-200">
              Revisar
            </button>
            <button className="flex-1 sm:flex-none text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2.5 rounded-xl text-sm font-bold transition border border-indigo-100">
              Aprobar
            </button>
          </div>
        </div>

        {/* ALERTA 3: LOGRO DEL PACIENTE (ESMERALDA) */}
        <div className="bg-white rounded-[1.5rem] p-5 sm:p-6 border border-emerald-100 shadow-sm flex flex-col sm:flex-row gap-5 items-start sm:items-center opacity-80">
          <div className="w-12 h-12 flex-shrink-0 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100">
            <span className="text-xl">🏆</span>
          </div>
          <div className="flex-1">
            <p className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest mb-1">
              Meta Cumplida
            </p>
            <p className="font-bold text-gray-900">
              Alejandra Ibarra cerró su semana perfecta.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              100% de comidas registradas y 4 días de entrenamiento de fuerza.
            </p>
          </div>
          <button className="w-full sm:w-auto text-gray-400 font-bold text-sm bg-gray-50 px-4 py-2.5 rounded-xl">
            Leído
          </button>
        </div>
      </div>
    </div>
  );
}
