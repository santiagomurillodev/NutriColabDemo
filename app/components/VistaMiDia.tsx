// @ts-nocheck
import React, { useState } from 'react';
import TarjetaComida from './TarjetaComida';

interface VistaMiDiaProps {
  datosPaciente: any;
  fechaHoy: string;
  manejarCompletado: (id: string, estado: boolean) => void;
  modoPareja: boolean;
  setModoPareja: (modo: boolean) => void;
  onVerReceta: (comida: any) => void;
  isDarkMode: boolean;
}

export default function VistaMiDia({
  datosPaciente,
  fechaHoy,
  manejarCompletado,
  modoPareja,
  setModoPareja,
  onVerReceta,
  isDarkMode,
}: VistaMiDiaProps) {
  
  // Días de la semana disponibles para navegar
  const diasDisponibles = [
    { id: 'lunes', label: 'LUN', nombreCompleto: 'Lunes' },
    { id: 'martes', label: 'MAR', nombreCompleto: 'Martes' },
    { id: 'miercoles', label: 'MIÉ', nombreCompleto: 'Miércoles' },
    { id: 'jueves', label: 'JUE', nombreCompleto: 'Jueves' },
    { id: 'viernes', label: 'VIE', nombreCompleto: 'Viernes' },
    { id: 'sabado', label: 'SÁB', nombreCompleto: 'Sábado' },
    { id: 'domingo', label: 'DOM', nombreCompleto: 'Domingo' },
  ];

  // Estado para el día seleccionado (por defecto lunes o el actual)
  const [diaSeleccionado, setDiaSeleccionado] = useState('lunes');

  // Obtenemos el plan del día seleccionado (si no existe un día como sábado, recurrimos a lunes como ejemplo)
  const planDelDia = datosPaciente?.dias?.[diaSeleccionado] || datosPaciente?.dias?.lunes || {};
  const menuOficial = Object.values(planDelDia).map((comida: any, index: number) => ({
    ...comida,
    id: `comida-${diaSeleccionado}-${index}`,
    completado: false
  }));

  return (
    <div className="space-y-6">
      
      {/* 📅 SELECTOR DE DÍAS DE LA SEMANA */}
      <div className={`p-2 rounded-2xl border shadow-sm flex items-center justify-between gap-1 overflow-x-auto ${isDarkMode ? 'bg-gray-800/80 border-gray-700 text-white' : 'bg-white border-gray-100 text-gray-800'}`}>
        {diasDisponibles.map((dia) => {
          const isActive = diaSeleccionado === dia.id;
          return (
            <button
              key={dia.id}
              onClick={() => setDiaSeleccionado(dia.id)}
              className={`flex-1 min-w-[42px] py-2.5 rounded-xl font-bold text-xs transition-all duration-300 flex flex-col items-center justify-center ${
                isActive
                  ? 'bg-emerald-500 text-white shadow-md scale-105'
                  : isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>{dia.label}</span>
            </button>
          );
        })}
      </div>

      <div className="sm:hidden bg-gray-100 p-1 rounded-2xl flex items-center mb-2">
        <button
          onClick={() => setModoPareja(false)}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
            !modoPareja ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => setModoPareja(true)}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
            modoPareja ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500'
          }`}
        >
          Pareja (x2)
        </button>
      </div>

      {/* Cabecera del Día Seleccionado */}
      <div className="flex justify-between items-end border-b border-gray-200/40 pb-3">
        <div>
          <h2 className={`text-xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Plan para {diasDisponibles.find(d => d.id === diaSeleccionado)?.nombreCompleto}
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">Mostrando recetas y porciones sincronizadas.</p>
        </div>
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          🗓️ Vista Semanal
        </span>
      </div>

      {/* Listado de Comidas */}
      {menuOficial.length > 0 ? (
        menuOficial.map((comida: any) => (
          <TarjetaComida
            key={comida.id}
            comida={comida}
            onCompletar={manejarCompletado}
            modoPareja={modoPareja}
            onVerReceta={onVerReceta}
            isDarkMode={isDarkMode}
          />
        ))
      ) : (
        <div className={`rounded-[2rem] p-8 text-center border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-100 text-gray-400'}`}>
          <p className="font-medium text-sm">
            No hay elementos cargados para este día.
          </p>
        </div>
      )}
    </div>
  );
}