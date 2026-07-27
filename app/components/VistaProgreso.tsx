// @ts-nocheck
import React from 'react';
import { DATOS_PACIENTES } from './planesNutricionales';

export default function VistaProgreso() {
  // Tomamos tus datos oficiales directamente del archivo centralizado
  const paciente = DATOS_PACIENTES.carlos;

  const pesoActual = parseFloat(paciente.pesoActual);
  const metaPeso = parseFloat(paciente.metaPeso);
  const pesoInicial = 92.5; // Peso de partida simulado para ilustrar el progreso
  const porcentajeLogrado = Math.max(0, Math.min(100, Math.round(((pesoInicial - pesoActual) / (pesoInicial - metaPeso)) * 100)));

  // Datos simulados para la gráfica de las últimas 5 semanas
  const historialPesos = [92.5, 90.1, 88.3, 86.8, pesoActual];
  const semanas = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Actual'];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* TARJETA PRINCIPAL: EVOLUCIÓN DE PESO Y GRÁFICA */}
      <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-sm font-extrabold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                Evolución de Peso
              </h2>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-extrabold text-gray-900 tracking-tighter">{paciente.pesoActual}</span>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-lg">
                  {paciente.perdidaMensual} este mes
                </span>
              </div>
            </div>
          </div>

          {/* Barra de Progreso */}
          <div className="mb-8">
            <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
              <span>Inicio: {pesoInicial} kg</span>
              <span className="text-emerald-600">{porcentajeLogrado}% Completado</span>
              <span>Meta: {paciente.metaPeso}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3.5 shadow-inner overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-400 to-teal-500 h-3.5 rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: `${porcentajeLogrado}%` }}
              >
                {/* Brillo en la barra */}
                <div className="absolute top-0 left-0 w-full h-full bg-white/20"></div>
              </div>
            </div>
          </div>

          {/* Gráfica de Barras Dinámica (Hecha con Tailwind) */}
          <div className="mt-8 pt-6 border-t border-gray-50">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Historial Reciente</h3>
            <div className="flex items-end justify-between h-32 gap-3">
              {historialPesos.map((peso, idx) => {
                // Calculamos la altura de la barra dinámicamente
                const alturaPorcentaje = `${((peso - 75) / (95 - 75)) * 100}%`;
                const esActual = idx === historialPesos.length - 1;
                
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="w-full relative h-full flex items-end justify-center bg-gray-50 rounded-t-xl group-hover:bg-gray-100 transition-colors">
                      <div 
                        style={{ height: alturaPorcentaje }} 
                        className={`w-full rounded-t-xl transition-all duration-1000 shadow-sm relative ${esActual ? 'bg-gradient-to-t from-emerald-500 to-teal-400' : 'bg-gray-300 group-hover:bg-gray-400'}`}
                      >
                        {/* Tooltip Hover */}
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold py-1 px-2 rounded transition-opacity whitespace-nowrap z-20">
                          {peso} kg
                        </div>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold ${esActual ? 'text-emerald-600' : 'text-gray-400'}`}>
                      {semanas[idx]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* COMPOSICIÓN CORPORAL (Grasa vs Músculo) */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-1">Masa Muscular</p>
          <p className="text-3xl font-extrabold text-gray-900">{paciente.porcentajeMusculo}</p>
        </div>

        <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
          <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-1">Grasa Corporal</p>
          <p className="text-3xl font-extrabold text-gray-900">{paciente.porcentajeGrasa}</p>
        </div>
      </div>

      {/* MEDIDAS ANTROPOMÉTRICAS (Cintura y Cadera) */}
      <div className="bg-gray-900 rounded-[2rem] p-6 sm:p-8 border border-gray-800 shadow-xl relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black opacity-50"></div>
        
        <div className="relative z-10">
          <h2 className="text-sm font-extrabold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
            </svg>
            Medidas Corporales
          </h2>
          
          <div className="grid grid-cols-2 gap-6 divide-x divide-gray-700">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Cintura</p>
              <p className="text-3xl font-extrabold">{paciente.cintura}</p>
            </div>
            <div className="pl-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Cadera</p>
              <p className="text-3xl font-extrabold">{paciente.cadera}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}