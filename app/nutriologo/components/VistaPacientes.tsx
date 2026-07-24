'use client';
import React from 'react';

export default function VistaPacientes({ onNuevoPaciente, onVerPerfil }) {
  const pacientes = [
    {
      nombre: 'Carlos Santiago',
      objetivo: 'Recomposición',
      adhesion: 92,
      tendencia: '↓ 1.2% Grasa',
      riesgo: 'Bajo',
      proxCita: 'Hoy, 07:30 pm',
    },
    {
      nombre: 'Alejandra Ibarra',
      objetivo: 'Mantenimiento',
      adhesion: 88,
      tendencia: '↑ 0.5kg Músculo',
      riesgo: 'Bajo',
      proxCita: '28 Jul, 04:00 pm',
    },
    {
      nombre: 'Roberto Gómez',
      objetivo: 'Déficit Calórico',
      adhesion: 45,
      tendencia: 'Sin cambios',
      riesgo: 'Alto',
      proxCita: '02 Ago, 10:00 am',
    },
  ];

  return (
    <div className="space-y-6">
      {/* KPIs Superiores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
            Retención Mensual
          </p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-extrabold text-gray-900">87%</h3>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md mb-1">
              ↑ +2%
            </span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
            Pacientes en Riesgo
          </p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-extrabold text-red-600">3</h3>
            <span className="text-xs font-bold text-gray-400 mb-1">
              Requieren atención
            </span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
            Consultas de Hoy
          </p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-extrabold text-indigo-600">4</h3>
            <span className="text-xs font-bold text-gray-400 mb-1">
              Programadas
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50/50">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">
              Directorio de Pacientes
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Expedientes y evolución clínica.
            </p>
          </div>
          <button
            onClick={onNuevoPaciente}
            className="w-full sm:w-auto bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-emerald-400 transition active:scale-95 flex items-center justify-center gap-2"
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
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Nuevo Expediente
          </button>
        </div>

        {/* 🚀 VISTA MÓVIL: TARJETAS RESPONSIVAS (Se oculta en Desktop) 🚀 */}
        <div className="block md:hidden p-4 space-y-4 bg-gray-50/30">
          {pacientes.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${
                      p.riesgo === 'Alto'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-emerald-100 text-emerald-600'
                    }`}
                  >
                    {p.nombre
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">
                      {p.nombre}
                    </span>
                    <span className="text-xs text-gray-500">{p.objetivo}</span>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    p.riesgo === 'Alto'
                      ? 'bg-red-50 text-red-600'
                      : 'bg-emerald-50 text-emerald-600'
                  }`}
                >
                  {p.riesgo === 'Alto' ? 'En Riesgo' : 'Estable'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-xl text-xs">
                <div>
                  <span className="text-gray-400 block mb-0.5">Adherencia</span>
                  <span
                    className={`font-bold ${
                      p.adhesion > 80 ? 'text-emerald-600' : 'text-red-600'
                    }`}
                  >
                    {p.adhesion}%
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5">Evolución</span>
                  <span className="font-bold text-gray-700">{p.tendencia}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-medium">
                  📅 {p.proxCita}
                </span>
                <button
                  onClick={() => onVerPerfil(p.nombre)}
                  className="text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl text-xs font-bold transition"
                >
                  Ver Expediente
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 🚀 VISTA DESKTOP: TABLA CLÁSICA (Se oculta en Móvil) 🚀 */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-[10px] uppercase tracking-widest text-gray-400">
                <th className="p-5 font-bold">Paciente</th>
                <th className="p-5 font-bold">Adherencia</th>
                <th className="p-5 font-bold">Evolución Médica</th>
                <th className="p-5 font-bold">Próxima Cita</th>
                <th className="p-5 font-bold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {pacientes.map((p, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${
                          p.riesgo === 'Alto'
                            ? 'bg-red-100 text-red-600'
                            : 'bg-emerald-100 text-emerald-600'
                        }`}
                      >
                        {p.nombre
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 block">
                          {p.nombre}
                        </span>
                        <span className="text-xs text-gray-500">
                          {p.objetivo}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-100 rounded-full h-1.5 max-w-[80px]">
                          <div
                            className={`h-1.5 rounded-full ${
                              p.adhesion > 80 ? 'bg-emerald-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${p.adhesion}%` }}
                          ></div>
                        </div>
                        <span
                          className={`text-xs font-bold ${
                            p.adhesion > 80
                              ? 'text-emerald-600'
                              : 'text-red-600'
                          }`}
                        >
                          {p.adhesion}%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 text-sm font-bold text-gray-700">
                    {p.tendencia}
                  </td>
                  <td className="p-5 text-sm text-gray-600 font-medium">
                    {p.proxCita}
                  </td>
                  <td className="p-5">
                    <button
                      onClick={() => onVerPerfil(p.nombre)}
                      className="text-gray-500 bg-white border border-gray-200 hover:bg-gray-50 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
                    >
                      Ver Perfil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
