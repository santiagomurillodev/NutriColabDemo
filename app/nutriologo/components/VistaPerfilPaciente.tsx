// @ts-nocheck
'use client';
import React from 'react';

export default function VistaPerfilPaciente({ nombrePaciente, volver }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl font-extrabold shadow-inner">
            {nombrePaciente
              ? nombrePaciente
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .substring(0, 2)
              : 'XX'}
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              {nombrePaciente}
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                Activo
              </span>
              <span className="text-sm font-medium text-gray-500">
                Plan: Recomposición Corporal
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <button
            onClick={volver}
            className="flex justify-center items-center gap-2 text-gray-500 hover:text-gray-900 transition font-bold text-sm bg-gray-50 px-4 py-2 rounded-xl border border-gray-200"
          >
            Volver
          </button>
          <button className="flex justify-center items-center gap-2 text-white bg-[#25D366] hover:bg-[#1EBE5A] px-4 py-2 rounded-xl text-sm font-bold transition shadow-sm">
            WhatsApp
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="sm:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm text-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Adherencia Semanal
            </p>
            <div className="relative w-32 h-32 mx-auto flex items-center justify-center rounded-full border-[8px] border-emerald-500">
              <span className="text-3xl font-extrabold text-gray-900">92%</span>
            </div>
            <p className="text-xs text-gray-400 mt-4 font-medium">
              Excelente disciplina en comidas y registros diarios.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-[2rem] text-white shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Target Calórico
            </p>
            <h3 className="text-3xl font-extrabold text-emerald-400 mb-4">
              2,150 <span className="text-sm text-gray-400">kcal</span>
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-sm text-gray-300">Proteína</span>
                <span className="font-bold">160g</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-sm text-gray-300">Carbohidratos</span>
                <span className="font-bold">180g</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Grasas</span>
                <span className="font-bold">85g</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-extrabold text-gray-900">
                Evolución Antropométrica
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Peso
                </p>
                <p className="text-2xl font-extrabold text-gray-900">
                  85.8 kg{' '}
                  <span className="text-xs text-emerald-500 font-bold ml-1">
                    ↓ 2kg
                  </span>
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Masa Muscular
                </p>
                <p className="text-2xl font-extrabold text-gray-900">
                  33.2%{' '}
                  <span className="text-xs text-emerald-500 font-bold ml-1">
                    ↑ 0.5%
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                Notas Clínicas
              </h3>
              <div className="bg-orange-50 text-orange-800 text-sm p-4 rounded-xl border border-orange-100">
                <b>Observación:</b> Paciente con pie plano severo (sin arco).
                Evitar rutinas de alto impacto o running en asfalto.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
