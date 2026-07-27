// @ts-nocheck
import React from 'react';
import { DATOS_PACIENTES } from './planesNutricionales';

export default function VistaProgreso({ metricas, modoPareja }) {
  // Tomamos los datos oficiales
  const paciente = DATOS_PACIENTES.carlos;

  const pesoActual = parseFloat(paciente.pesoActual);
  const metaPeso = parseFloat(paciente.metaPeso);
  const pesoInicial = 92.5; 
  const porcentajeLogrado = Math.max(0, Math.min(100, Math.round(((pesoInicial - pesoActual) / (pesoInicial - metaPeso)) * 100)));

  const historialPesos = [92.5, 90.1, 88.3, 86.8, pesoActual];
  const semanas = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Actual'];

  // Datos de Rendimiento
  const eficienciaDieta = 88; 
  const diasActividad = 4; 
  const comidasLibresRegistradas = 2; 
  const rachaActual = 12; 

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. GRID DE RENDIMIENTO RÁPIDO (Racha, Dieta, Entrenos, Flexibilidad) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Racha */}
        <div className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center font-bold text-lg">🔥</div>
          </div>
          <div>
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Racha Actual</p>
            <p className="text-2xl font-extrabold text-gray-900">{rachaActual} <span className="text-xs font-bold text-gray-400">días</span></p>
          </div>
        </div>

        {/* Eficiencia */}
        <div className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-lg">🎯</div>
          </div>
          <div>
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Apego a Dieta</p>
            <p className="text-2xl font-extrabold text-gray-900">{eficienciaDieta}%</p>
          </div>
        </div>

        {/* Entrenamientos */}
        <div className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">⚡</div>
          </div>
          <div>
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Actividad</p>
            <p className="text-2xl font-extrabold text-gray-900">{diasActividad}/5 <span className="text-xs font-bold text-gray-400">días</span></p>
          </div>
        </div>

        {/* Flexibilidad */}
        <div className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center font-bold text-lg">🍕</div>
          </div>
          <div>
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Comidas Fuera</p>
            <p className="text-2xl font-extrabold text-gray-900">{comidasLibresRegistradas} <span className="text-xs font-bold text-gray-400">veces</span></p>
          </div>
        </div>
      </div>

      {/* 2. EVOLUCIÓN DE PESO Y GRÁFICA */}
      <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
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

          <div className="mb-8">
            <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
              <span>Inicio: {pesoInicial} kg</span>
              <span className="text-emerald-600">{porcentajeLogrado}% Completado</span>
              <span>Meta: {paciente.metaPeso}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3.5 shadow-inner overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-3.5 rounded-full transition-all duration-1000" style={{ width: `${porcentajeLogrado}%` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-white/20"></div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-50">
            <div className="flex items-end justify-between h-32 gap-3">
              {historialPesos.map((peso, idx) => {
                const alturaPorcentaje = `${((peso - 75) / (95 - 75)) * 100}%`;
                const esActual = idx === historialPesos.length - 1;
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="w-full relative h-full flex items-end justify-center bg-gray-50 rounded-t-xl group-hover:bg-gray-100 transition-colors">
                      <div style={{ height: alturaPorcentaje }} className={`w-full rounded-t-xl transition-all duration-1000 shadow-sm relative ${esActual ? 'bg-gradient-to-t from-emerald-500 to-teal-400' : 'bg-gray-300 group-hover:bg-gray-400'}`}>
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold py-1 px-2 rounded transition-opacity whitespace-nowrap z-20">
                          {peso} kg
                        </div>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold ${esActual ? 'text-emerald-600' : 'text-gray-400'}`}>{semanas[idx]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3. MEDIDAS Y COMPOSICIÓN (Músculo, Grasa, Cintura, Cadera) */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center text-center">
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Masa Muscular</p>
          <p className="text-2xl font-extrabold text-gray-900">{paciente.porcentajeMusculo}</p>
        </div>
        <div className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center text-center">
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Grasa Corporal</p>
          <p className="text-2xl font-extrabold text-gray-900">{paciente.porcentajeGrasa}</p>
        </div>
        <div className="bg-gray-900 rounded-[2rem] p-5 border border-gray-800 shadow-xl text-white col-span-2 sm:col-span-1">
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Cintura</p>
          <p className="text-2xl font-extrabold">{paciente.cintura}</p>
        </div>
        <div className="bg-gray-900 rounded-[2rem] p-5 border border-gray-800 shadow-xl text-white col-span-2 sm:col-span-1">
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Cadera</p>
          <p className="text-2xl font-extrabold">{paciente.cadera}</p>
        </div>
      </div>

      {/* 4. SINERGIA EN PAREJA */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2rem] p-6 sm:p-8 border border-emerald-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">👥</span>
          <h3 className="text-lg font-bold text-emerald-900">Sinergia en Pareja</h3>
        </div>
        <p className="text-emerald-700 text-sm leading-relaxed mb-4">
          {modoPareja 
            ? "¡Excelente sincronización! Ambos están cumpliendo sus porciones, lo que optimiza las compras y el apego al plan."
            : "Activa el 'Modo Pareja (x2)' en Mi Día o Súper para sincronizar los objetivos y compras con tu hogar."}
        </p>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-emerald-200/60 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase">Estado actual</p>
            <p className="text-sm font-extrabold text-gray-900">{modoPareja ? 'Sincronización Activa ⚡' : 'Modo Individual'}</p>
          </div>
          {modoPareja && (
            <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-sm">x2 Porciones</span>
          )}
        </div>
      </div>
    </div>
  );
}