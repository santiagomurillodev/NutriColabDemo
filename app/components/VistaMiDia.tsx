// @ts-nocheck
import React from 'react';
import TarjetaComida from './TarjetaComida';

interface VistaMiDiaProps {
  datosPaciente: {
    planHoy: any[];
    [key: string]: any;
  };
  fechaHoy: string;
  manejarCompletado: (id: string, estado: boolean) => void;
  modoPareja: boolean;
  setModoPareja: (modo: boolean) => void;
  onVerReceta: (comida: any) => void;
}

export default function VistaMiDia({
  datosPaciente,
  fechaHoy,
  manejarCompletado,
  modoPareja,
  setModoPareja,
  onVerReceta,
}: VistaMiDiaProps) {
  return (
    <div className="space-y-6">
      <div className="sm:hidden bg-gray-100 p-1 rounded-2xl flex items-center mb-2">
        <button
          onClick={() => setModoPareja(false)}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
            !modoPareja
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          Individual
        </button>
        <button
          onClick={() => setModoPareja(true)}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
            modoPareja
              ? 'bg-white text-emerald-600 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          Pareja (x2)
        </button>
      </div>

      <div className="flex justify-between items-end border-b border-gray-200 pb-2">
        <h2 className="text-xl font-bold text-gray-900">Menú de Hoy</h2>
        <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          📅 {fechaHoy}
        </span>
      </div>

      {datosPaciente.planHoy.map((comida: any) => (
        <TarjetaComida
          key={comida.id}
          comida={comida}
          onCompletar={manejarCompletado}
          modoPareja={modoPareja}
          onVerReceta={onVerReceta}
        />
      ))}
    </div>
  );
}