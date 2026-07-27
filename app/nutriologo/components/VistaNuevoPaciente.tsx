// @ts-nocheck
'use client';
import React, { useState } from 'react';

export default function VistaNuevoPaciente({ volver }) {
  const [guardadoExitoso, setGuardadoExitoso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuardadoExitoso(true);
    setTimeout(() => {
      volver();
    }, 1500);
  };

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 sm:p-10 relative overflow-hidden">
      <button
        onClick={volver}
        className="mb-6 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition font-bold text-sm bg-gray-50 px-4 py-2 rounded-full border border-gray-200 w-fit"
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
        Volver al Directorio
      </button>

      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Apertura de Expediente Clínico
        </h2>
        <p className="text-gray-500 text-sm mt-1 font-medium">
          Registra datos antropométricos y métricas corporales iniciales.
        </p>
      </div>

      {guardadoExitoso ? (
        <div className="py-12 text-center animate-in fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            ✓
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            ¡Paciente registrado con éxito!
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            Sincronizando credenciales de acceso...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                Nombre Completo
              </label>
              <input
                required
                type="text"
                placeholder="Ej. Roberto Gómez"
                className="w-full mt-1.5 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 outline-none bg-gray-50 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                Correo Electrónico
              </label>
              <input
                required
                type="email"
                placeholder="correo@paciente.com"
                className="w-full mt-1.5 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 outline-none bg-gray-50 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                Objetivo Físico
              </label>
              <select className="w-full mt-1.5 px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 outline-none bg-gray-50 focus:bg-white transition text-gray-700">
                <option>Recomposición Corporal</option>
                <option>Déficit Calórico</option>
                <option>Volumen Muscular</option>
                <option>Mantenimiento</option>
              </select>
            </div>
          </div>

          {/* MÉTRICAS ANTROPOMÉTRICAS */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">
              Métricas Antropométricas Iniciales
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">
                  Edad
                </label>
                <input
                  required
                  type="number"
                  placeholder="25"
                  className="w-full mt-1 p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">
                  Peso (kg)
                </label>
                <input
                  required
                  type="number"
                  step="0.1"
                  placeholder="78.5"
                  className="w-full mt-1 p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">
                  Estatura (cm)
                </label>
                <input
                  required
                  type="number"
                  placeholder="172"
                  className="w-full mt-1 p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">
                  % Grasa
                </label>
                <input
                  required
                  type="number"
                  step="0.1"
                  placeholder="22.5"
                  className="w-full mt-1 p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">
                  % Músculo
                </label>
                <input
                  required
                  type="number"
                  step="0.1"
                  placeholder="35.0"
                  className="w-full mt-1 p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">
                  Cintura (cm)
                </label>
                <input
                  required
                  type="number"
                  step="0.1"
                  placeholder="85.0"
                  className="w-full mt-1 p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={volver}
              className="px-6 py-3 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-bold text-white bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-200 transition flex items-center gap-2"
            >
              Guardar Expediente
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
