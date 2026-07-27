// @ts-nocheck
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { mensajesChatDB, pacientesDB } from '../data/mockDb';
import { DATOS_PACIENTES } from './components/planesNutricionales';

// Importamos todas tus Vistas Modulares
import VistaMiDia from './components/VistaMiDia';
import VistaSuper from './components/VistaSuper';
import VistaProgreso from './components/VistaProgreso';
import VistaReceta from './components/VistaReceta';
import VistaPerfil from './components/VistaPerfil';
import VistaEntrenamiento from './components/VistaEntrenamiento';

// Componente del Chat Interno para el Paciente
function VistaChatPaciente() {
  const [mensajes, setMensajes] = useState(mensajesChatDB);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!nuevoMensaje.trim()) return;

    const mensajeObj = {
      id: Date.now(),
      remitente: 'paciente',
      texto: nuevoMensaje,
      hora: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMensajes([...mensajes, mensajeObj]);
    setNuevoMensaje('');
  };

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shadow-inner">
            LC
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Mtro. Luis Ceja</h3>
            <p className="text-xs text-emerald-600 font-medium">
              ● Tu Nutriólogo Asignado
            </p>
          </div>
        </div>
        <span className="text-xs font-bold text-gray-400">Canal Seguro 🔒</span>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/30">
        {mensajes.map((msg) => {
          const esPaciente = msg.remitente === 'paciente';
          return (
            <div
              key={msg.id}
              className={`flex ${esPaciente ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] p-4 rounded-2xl text-sm ${
                  esPaciente
                    ? 'bg-emerald-500 text-white rounded-br-none shadow-md'
                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none shadow-sm'
                }`}
              >
                <p>{msg.texto}</p>
                <p
                  className={`text-[9px] mt-1 text-right ${
                    esPaciente ? 'text-emerald-100' : 'text-gray-400'
                  }`}
                >
                  {msg.hora}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <form
        onSubmit={enviarMensaje}
        className="p-4 border-t border-gray-100 bg-white flex gap-3"
      >
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          placeholder="Escribe una duda sobre tu dieta..."
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-sm bg-gray-50 hover:bg-white focus:bg-white"
        />
        <button
          type="submit"
          className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default function AppPrincipal() {
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [estaIngresando, setEstaIngresando] = useState(false);
  const router = useRouter();

  const simularLogin = () => {
    setEstaIngresando(true);
    setTimeout(() => {
      setEstaIngresando(false);
      setEstaAutenticado(true);
    }, 1200);
  };

  if (!estaAutenticado) {
    return (
      <div className="min-h-dvh flex bg-white selection:bg-emerald-200">
        {/* Lado Izquierdo (Branding - Solo Desktop) */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-emerald-600 to-teal-800 items-center justify-center p-12 relative overflow-hidden">
          {/* Efectos de fondo glassmorphic */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-300/20 blur-[120px] rounded-full"></div>
          
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
              backgroundSize: '30px 30px',
            }}
          ></div>
          <div className="relative z-10 text-white max-w-lg animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] mb-8 border border-white/20">
              <span className="text-white font-extrabold text-4xl tracking-tighter">N</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              La evolución de tu<br/>consultorio nutricional.
            </h1>
            <p className="text-emerald-50 text-lg font-medium opacity-90 leading-relaxed">
              Conecta con tu especialista, automatiza tus listas de compras y
              monitorea tu progreso en tiempo real.
            </p>
          </div>
        </div>

        {/* Lado Derecho (Formulario) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 bg-[#F8FAFC]">
          <div className="max-w-md w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
            {/* Logo móvil */}
            <div className="lg:hidden flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 mb-4">
                <span className="text-white font-extrabold text-3xl">N</span>
              </div>
              <h2 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight">
                NutriColab
              </h2>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 sm:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
              <div className="mb-8 hidden lg:block">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  Bienvenido de nuevo
                </h2>
                <p className="text-gray-500 mt-2 font-medium">Ingresa a tu cuenta para continuar.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest ml-1 block mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    defaultValue="carlos.santiago@ejemplo.com"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all bg-white text-gray-900 font-medium shadow-sm hover:border-gray-300"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center ml-1 mb-2">
                    <label className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">
                      Contraseña
                    </label>
                    <span className="text-[11px] font-bold text-emerald-600 cursor-pointer hover:text-emerald-700 transition-colors">
                      ¿Olvidaste tu contraseña?
                    </span>
                  </div>
                  <input
                    type="password"
                    defaultValue="••••••••"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all bg-white text-gray-900 tracking-widest font-medium shadow-sm hover:border-gray-300"
                  />
                </div>

                <button
                  onClick={simularLogin}
                  disabled={estaIngresando}
                  className="w-full flex justify-center items-center gap-2 py-4.5 px-4 mt-8 rounded-2xl shadow-xl shadow-emerald-500/20 text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0 h-14"
                >
                  {estaIngresando ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verificando credenciales...
                    </>
                  ) : (
                    'Iniciar Sesión'
                  )}
                </button>

                <div className="pt-8 mt-8 border-t border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase text-center tracking-widest mb-4">
                    Accesos Rápidos de Demostración
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={simularLogin}
                      className="py-3 px-3 bg-white text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span className="text-base">👤</span> Paciente
                    </button>
                    <button
                      onClick={() => router.push('/nutriologo')}
                      className="py-3 px-3 bg-white text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span className="text-base">👨‍⚕️</span> Profesional
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <LayoutPaciente cerrarSesion={() => setEstaAutenticado(false)} />;
}

// === CASCARÓN PRINCIPAL DE LA APP ===
function LayoutPaciente({ cerrarSesion }) {
  const [datosPaciente] = useState(DATOS_PACIENTES.carlos);
  const [vistaActiva, setVistaActiva] = useState('mi-dia');
  const [comidaParaReceta, setComidaParaReceta] = useState(null);
  const [modoPareja, setModoPareja] = useState(false);
  const [fechaHoy, setFechaHoy] = useState('');

  useEffect(() => {
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const fecha = new Date().toLocaleDateString('es-MX', opciones);
    setFechaHoy(fecha.charAt(0).toUpperCase() + fecha.slice(1));
  }, []);

  const manejarCompletado = (idComida, nuevoEstado) =>
    console.log(`Comida ${idComida}: ${nuevoEstado}`);

  const abrirReceta = (comida) => {
    setComidaParaReceta(comida);
    setVistaActiva('receta');
  };

  if (!datosPaciente)
    return (
      <div className="p-10 text-center font-bold text-emerald-600">
        Cargando entorno...
      </div>
    );

  return (
    <div className="bg-[#F8FAFC] font-sans antialiased text-gray-800 min-h-dvh pb-28 md:pb-0">
      {/* NAVBAR SUPERIOR */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm transform transition hover:rotate-3">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900 hidden sm:block">
                NutriColab
              </span>
            </div>

            {/* TABS DESKTOP */}
            <div className="hidden md:flex gap-6 text-sm font-bold text-gray-500 h-full">
              <button
                onClick={() => setVistaActiva('mi-dia')}
                className={`px-1 py-5 border-b-2 transition-all ${
                  vistaActiva === 'mi-dia' || vistaActiva === 'receta'
                    ? 'text-emerald-600 border-emerald-600'
                    : 'border-transparent hover:text-gray-900'
                }`}
              >
                Mi Día
              </button>
              <button
                onClick={() => setVistaActiva('super')}
                className={`px-1 py-5 border-b-2 transition-all ${
                  vistaActiva === 'super'
                    ? 'text-emerald-600 border-emerald-600'
                    : 'border-transparent hover:text-gray-900'
                }`}
              >
                Súper
              </button>
              <button
                onClick={() => setVistaActiva('entrenamiento')}
                className={`px-1 py-5 border-b-2 transition-all ${
                  vistaActiva === 'entrenamiento'
                    ? 'text-emerald-600 border-emerald-600'
                    : 'border-transparent hover:text-gray-900'
                }`}
              >
                Actividad
              </button>
              <button
                onClick={() => setVistaActiva('chat')}
                className={`px-1 py-5 border-b-2 transition-all ${
                  vistaActiva === 'chat'
                    ? 'text-emerald-600 border-emerald-600'
                    : 'border-transparent hover:text-gray-900'
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => setVistaActiva('progreso')}
                className={`px-1 py-5 border-b-2 transition-all ${
                  vistaActiva === 'progreso'
                    ? 'text-emerald-600 border-emerald-600'
                    : 'border-transparent hover:text-gray-900'
                }`}
              >
                Progreso
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setVistaActiva('perfil')}
                className={`flex items-center gap-2 py-1 px-1 sm:px-3 rounded-full border transition-all ${
                  vistaActiva === 'perfil'
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs shadow-sm">
                  {datosPaciente.nombre
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .substring(0, 2)}
                </div>
                <span className="text-sm font-bold text-gray-700 hidden sm:block pr-1">
                  Mi Perfil
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ÁREA DE CONTENIDO */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Cabeceras Dinámicas */}
        {vistaActiva !== 'receta' && vistaActiva !== 'perfil' && (
          <div className="mb-8 flex justify-between items-end">
            <div>
              {vistaActiva === 'mi-dia' && (
                <>
                  <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    ¡Hola, {datosPaciente.nombre.split(' ')[0]}! 👋
                  </h1>
                  <p className="text-gray-500 mt-1 font-medium">
                    Este es tu plan de alimentación para hoy.
                  </p>
                </>
              )}
              {vistaActiva === 'super' && (
                <>
                  <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Tu Despensa 🛒
                  </h1>
                  <p className="text-gray-500 mt-1 font-medium">
                    Ingredientes extraídos automáticamente.
                  </p>
                </>
              )}
              {vistaActiva === 'entrenamiento' && (
                <>
                  <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Registro de Actividad 🏃‍♂️
                  </h1>
                  <p className="text-gray-500 mt-1 font-medium">
                    Monitorea tu balance energético.
                  </p>
                </>
              )}
              {vistaActiva === 'chat' && (
                <>
                  <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Chat Especialista 💬
                  </h1>
                  <p className="text-gray-500 mt-1 font-medium">
                    Resuelve cualquier duda sobre tu plan al instante.
                  </p>
                </>
              )}
              {vistaActiva === 'progreso' && (
                <>
                  <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Tus Métricas 📈
                  </h1>
                  <p className="text-gray-500 mt-1 font-medium">
                    Así va tu evolución antropométrica.
                  </p>
                </>
              )}
            </div>

            {/* Modo Pareja Global */}
            {(vistaActiva === 'mi-dia' || vistaActiva === 'super') && (
              <div className="hidden sm:flex bg-white p-1 rounded-2xl w-64 h-12 border border-gray-200 shadow-sm">
                <button
                  onClick={() => setModoPareja(false)}
                  className={`flex-1 rounded-xl text-xs font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
                    !modoPareja
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Individual
                </button>
                <button
                  onClick={() => setModoPareja(true)}
                  className={`flex-1 rounded-xl text-xs font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
                    modoPareja
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  Pareja
                </button>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {vistaActiva === 'perfil' ? (
            <div className="lg:col-span-3">
              <VistaPerfil
                datosPaciente={datosPaciente}
                cerrarSesion={cerrarSesion}
              />
            </div>
          ) : (
            <>
              <div className="lg:col-span-2 space-y-6">
                {vistaActiva === 'mi-dia' && (
                  <VistaMiDia
                    datosPaciente={datosPaciente}
                    fechaHoy={fechaHoy}
                    manejarCompletado={manejarCompletado}
                    modoPareja={modoPareja}
                    setModoPareja={setModoPareja}
                    onVerReceta={abrirReceta}
                  />
                )}

                {vistaActiva === 'super' && (
                  <div className="space-y-6">
                    <div className="sm:hidden bg-white p-1 rounded-2xl flex items-center mb-2 border border-gray-200 shadow-sm h-12">
                      <button
                        onClick={() => setModoPareja(false)}
                        className={`flex-1 h-full rounded-xl text-xs font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
                          !modoPareja
                            ? 'bg-gray-900 text-white shadow-sm'
                            : 'text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        Individual
                      </button>
                      <button
                        onClick={() => setModoPareja(true)}
                        className={`flex-1 h-full rounded-xl text-xs font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
                          modoPareja
                            ? 'bg-emerald-500 text-white shadow-sm'
                            : 'text-gray-500 hover:bg-emerald-50 hover:text-emerald-600'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        Pareja
                      </button>
                    </div>
                    <VistaSuper
                      datosPaciente={datosPaciente}
                      modoPareja={modoPareja}
                    />
                  </div>
                )}

                {vistaActiva === 'entrenamiento' && <VistaEntrenamiento />}
                {vistaActiva === 'chat' && <VistaChatPaciente />}
                {vistaActiva === 'progreso' && (
                  <VistaProgreso metricas={datosPaciente.metricas || pacientesDB[0]?.metricas || []} />
                )}
                {vistaActiva === 'receta' && comidaParaReceta && (
                  <VistaReceta
                    comida={comidaParaReceta}
                    modoPareja={modoPareja}
                    volver={() => setVistaActiva('mi-dia')}
                  />
                )}
              </div>

              {/* Sidebar Derecho (Widgets) */}
              <div className="hidden lg:block space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-7 text-white shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                      </svg>
                    </div>
                    <p className="text-sm font-extrabold text-blue-100 uppercase tracking-widest">
                      Tu Nutriólogo
                    </p>
                  </div>
                  <p className="text-3xl font-extrabold tracking-tight mb-2 leading-none">
                    {datosPaciente.nutriologo}
                  </p>
                  <div className="bg-black/10 inline-block px-3 py-1.5 rounded-lg border border-white/10 mt-2">
                    <p className="text-sm font-medium text-blue-50 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Próxima cita: 7 de agosto
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* NAVBAR MÓVIL INFERIOR */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-100 z-50 h-20 pb-safe">
        <div className="flex justify-around items-center h-full px-2 max-w-md mx-auto">
          {[
            { id: 'mi-dia', label: 'Mi Día', icon: 'M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z' },
            { id: 'super', label: 'Súper', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z', outline: true },
            { id: 'entrenamiento', label: 'Actividad', icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z', outline: true },
            { id: 'chat', label: 'Chat', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', outline: true },
            { id: 'progreso', label: 'Progreso', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', outline: true }
          ].map((tab) => {
            const isActivo = vistaActiva === tab.id || (tab.id === 'mi-dia' && vistaActiva === 'receta');
            return (
              <button
                key={tab.id}
                onClick={() => { setVistaActiva(tab.id); if (tab.id === 'mi-dia') setComidaParaReceta(null); }}
                className="flex flex-col items-center justify-center w-full h-full relative group"
              >
                <div
                  className={`flex items-center justify-center w-12 h-8 rounded-2xl transition-all duration-300 ${
                    isActivo
                      ? 'bg-emerald-100 text-emerald-600 shadow-inner scale-110'
                      : 'text-gray-400 group-hover:text-gray-600 group-hover:bg-gray-50'
                  }`}
                >
                  <svg className="w-5 h-5" fill={tab.outline && !isActivo ? "none" : "currentColor"} stroke={tab.outline && !isActivo ? "currentColor" : "none"} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={tab.outline && !isActivo ? "2" : "0"} d={tab.icon}></path>
                  </svg>
                </div>
                <span
                  className={`text-[9px] font-extrabold mt-1.5 transition-colors ${
                    isActivo ? 'text-emerald-700' : 'text-gray-400'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}