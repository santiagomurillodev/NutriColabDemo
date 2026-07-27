// @ts-nocheck
'use client';
import React, { useState } from 'react';

export default function VistaCreadorDietas() {
  const [estado, setEstado] = useState('inicio');

  const procesarPDF = () => {
    setEstado('cargando');
    setTimeout(() => {
      setEstado('listo');
    }, 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          SmartPlan AI ✨
        </h2>
        <p className="text-gray-500 text-sm mt-2 font-medium">
          Convierte tus PDFs estáticos en aplicaciones interactivas para tus
          pacientes.
        </p>
      </div>

      {estado === 'inicio' && (
        <div
          onClick={procesarPDF}
          className="border-2 border-dashed border-emerald-300 bg-emerald-50/30 rounded-[2.5rem] p-16 text-center cursor-pointer hover:bg-emerald-50 transition-colors group shadow-sm"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform mb-6 border border-emerald-100">
            <svg
              className="w-10 h-10 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-emerald-900">
            Sube la dieta del paciente (PDF o Word)
          </h3>
          <p className="text-emerald-600/70 text-sm mt-3 font-medium max-w-md mx-auto">
            Nuestro motor leerá tus alimentos, calculará los macros y generará
            la lista de súper de forma automática.
          </p>
        </div>
      )}

      {estado === 'cargando' && (
        <div className="bg-white border border-indigo-100 rounded-[2.5rem] p-16 text-center shadow-lg shadow-indigo-50/50">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-3xl">
              🤖
            </div>
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 animate-pulse mb-6">
            NutriAI Analizando Documento...
          </h3>
          <div className="space-y-3 mt-6 max-w-sm mx-auto text-sm font-medium text-gray-600 text-left bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <p className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                ✔
              </span>{' '}
              Extrayendo 5 tiempos de comida
            </p>
            <p className="flex items-center gap-3 animate-pulse text-indigo-600">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">
                ⚙
              </span>{' '}
              <b>Validando contra SMAE 5ta Edición...</b>
            </p>
            <p className="flex items-center gap-3 text-gray-400">
              <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs">
                ○
              </span>{' '}
              Generando recetas paso a paso
            </p>
          </div>
        </div>
      )}

      {/* 🚀 NUEVO: VISTA PREVIA DE EDICIÓN (UX PROFESIONAL) 🚀 */}
      {estado === 'listo' && (
        <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-lg animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
          <div className="bg-gray-900 p-8 text-white flex justify-between items-center">
            <div>
              <span className="bg-emerald-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">
                Plan Generado
              </span>
              <h3 className="text-2xl font-extrabold">Plan de Recomposición</h3>
              <p className="text-sm text-gray-400 font-medium mt-1">
                Asignar a: Carlos Santiago
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400 font-bold mb-1">
                Balance Energético
              </p>
              <p className="text-2xl font-extrabold text-emerald-400">
                2,150 <span className="text-sm">kcal</span>
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Validación Clínica
                </p>
                <p className="font-bold text-emerald-600 flex items-center gap-1">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>{' '}
                  SMAE Correcto
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Lista de Súper
                </p>
                <p className="font-bold text-gray-900">32 Ingredientes</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Recetas IA
                </p>
                <p className="font-bold text-indigo-600">5 Generadas</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setEstado('inicio')}
                className="flex-1 bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-2xl hover:bg-gray-50 transition active:scale-95"
              >
                Editar Manualmente
              </button>
              <button className="flex-[2] bg-emerald-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-400 transition active:scale-95 flex justify-center items-center gap-2">
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
                Publicar en la App del Paciente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
