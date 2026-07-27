// @ts-nocheck
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import VistaPacientes from './components/VistaPacientes';
import VistaCreadorDietas from './components/VistaCreadorDietas';
import VistaAlertas from './components/VistaAlertas';
import VistaNuevoPaciente from './components/VistaNuevoPaciente';
import VistaPerfilPaciente from './components/VistaPerfilPaciente';
import VistaChatNutriologo from './components/VistaChatNutriologo';

export default function NutriologoDashboard() {
  const [vistaActiva, setVistaActiva] = useState('pacientes');
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const router = useRouter();

  const irAlHome = () => setVistaActiva('pacientes');
  const abrirNuevoPaciente = () => setVistaActiva('nuevo-paciente');
  const abrirPerfil = (nombre) => {
    setPacienteSeleccionado(nombre);
    setVistaActiva('perfil-paciente');
  };

  return (
    <div className="bg-[#F8FAFC] font-sans antialiased text-gray-800 min-h-screen pb-24 md:pb-0">
      {/* NAVBAR CORPORATIVO */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <button
              onClick={irAlHome}
              className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer text-left"
            >
              <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900 hidden sm:block">
                NutriColab{' '}
                <span className="text-emerald-600 text-sm font-medium ml-1">
                  Pro
                </span>
              </span>
            </button>

            {/* TABS DESKTOP */}
            <div className="hidden md:flex gap-6 text-sm font-bold text-gray-500 h-full">
              <button
                onClick={irAlHome}
                className={`px-1 py-5 border-b-2 transition-all ${
                  vistaActiva === 'pacientes' ||
                  vistaActiva === 'perfil-paciente' ||
                  vistaActiva === 'nuevo-paciente'
                    ? 'text-emerald-600 border-emerald-600'
                    : 'border-transparent hover:text-gray-900'
                }`}
              >
                Mis Pacientes
              </button>
              <button
                onClick={() => setVistaActiva('chat')}
                className={`px-1 py-5 border-b-2 transition-all ${
                  vistaActiva === 'chat'
                    ? 'text-emerald-600 border-emerald-600'
                    : 'border-transparent hover:text-gray-900'
                }`}
              >
                Chat Interno
              </button>
              <button
                onClick={() => setVistaActiva('creador')}
                className={`px-1 py-5 border-b-2 transition-all ${
                  vistaActiva === 'creador'
                    ? 'text-emerald-600 border-emerald-600'
                    : 'border-transparent hover:text-gray-900'
                }`}
              >
                SmartPlan AI
              </button>
              <button
                onClick={() => setVistaActiva('alertas')}
                className={`px-1 py-5 border-b-2 transition-all ${
                  vistaActiva === 'alertas'
                    ? 'text-emerald-600 border-emerald-600'
                    : 'border-transparent hover:text-gray-900'
                }`}
              >
                Alertas
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-50 py-1 px-3 rounded-full border border-gray-100">
                <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs shadow-sm">
                  LC
                </div>
                <span className="text-sm font-bold text-gray-700 hidden sm:block pr-1">
                  Mtro. Luis Ceja
                </span>
              </div>
              <button
                onClick={() => router.push('/')}
                className="text-xs text-gray-400 hover:text-red-500 font-bold transition"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {vistaActiva === 'pacientes' && (
              <VistaPacientes
                onNuevoPaciente={abrirNuevoPaciente}
                onVerPerfil={abrirPerfil}
              />
            )}
            {vistaActiva === 'nuevo-paciente' && (
              <VistaNuevoPaciente volver={irAlHome} />
            )}
            {vistaActiva === 'perfil-paciente' && (
              <VistaPerfilPaciente
                nombrePaciente={pacienteSeleccionado}
                volver={irAlHome}
              />
            )}
            {vistaActiva === 'chat' && <VistaChatNutriologo />}
            {vistaActiva === 'creador' && <VistaCreadorDietas />}
            {vistaActiva === 'alertas' && <VistaAlertas />}
          </div>

          <div className="hidden lg:block space-y-6">
            <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">
                Métricas del Mes
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 font-bold mb-1">
                    Pacientes Activos
                  </p>
                  <p className="text-2xl font-extrabold text-gray-900">42</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold mb-1">
                    Adherencia Promedio
                  </p>
                  <p className="text-2xl font-extrabold text-emerald-600">
                    87%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* NAVBAR MÓVIL NUTRIÓLOGO (Estilo idéntico al de la app del paciente) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-200 z-50">
        <div className="flex justify-around items-center h-16 px-2">
          <button
            onClick={irAlHome}
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <div
              className={`flex items-center justify-center w-14 h-8 rounded-full transition-all duration-300 ${
                vistaActiva === 'pacientes' ||
                vistaActiva === 'perfil-paciente' ||
                vistaActiva === 'nuevo-paciente'
                  ? 'bg-emerald-100 text-emerald-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <span
              className={`text-[10px] font-bold mt-1 ${
                vistaActiva === 'pacientes' ||
                vistaActiva === 'perfil-paciente' ||
                vistaActiva === 'nuevo-paciente'
                  ? 'text-emerald-700'
                  : 'text-gray-400'
              }`}
            >
              Pacientes
            </span>
          </button>

          <button
            onClick={() => setVistaActiva('chat')}
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <div
              className={`flex items-center justify-center w-14 h-8 rounded-full transition-all duration-300 ${
                vistaActiva === 'chat'
                  ? 'bg-emerald-100 text-emerald-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </div>
            <span
              className={`text-[10px] font-bold mt-1 ${
                vistaActiva === 'chat' ? 'text-emerald-700' : 'text-gray-400'
              }`}
            >
              Chat
            </span>
          </button>

          <button
            onClick={() => setVistaActiva('creador')}
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <div
              className={`flex items-center justify-center w-14 h-8 rounded-full transition-all duration-300 ${
                vistaActiva === 'creador'
                  ? 'bg-emerald-100 text-emerald-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
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
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                ></path>
              </svg>
            </div>
            <span
              className={`text-[10px] font-bold mt-1 ${
                vistaActiva === 'creador' ? 'text-emerald-700' : 'text-gray-400'
              }`}
            >
              SmartPlan
            </span>
          </button>

          <button
            onClick={() => setVistaActiva('alertas')}
            className="flex flex-col items-center justify-center w-full h-full relative"
          >
            <div
              className={`flex items-center justify-center w-14 h-8 rounded-full transition-all duration-300 ${
                vistaActiva === 'alertas'
                  ? 'bg-emerald-100 text-emerald-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </div>
            <span className="absolute top-2 right-4 bg-emerald-500 w-2 h-2 rounded-full"></span>
            <span
              className={`text-[10px] font-bold mt-1 ${
                vistaActiva === 'alertas' ? 'text-emerald-700' : 'text-gray-400'
              }`}
            >
              Alertas
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
