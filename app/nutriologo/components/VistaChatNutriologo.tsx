// @ts-nocheck
'use client';
import React, { useState } from 'react';
import { mensajesChatDB } from '../../../data/mockDb';

export default function VistaChatNutriologo() {
  const [mensajes, setMensajes] = useState(mensajesChatDB);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!nuevoMensaje.trim()) return;

    const mensajeObj = {
      id: Date.now(),
      remitente: 'nutriologo',
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
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[650px]">
      {/* Header del Chat */}
      <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
            CS
          </div>
          <div>
            <h3 className="font-bold text-gray-900">
              Carlos Santiago Martínez
            </h3>
            <p className="text-xs text-emerald-600 font-medium">
              ● En línea (App Paciente)
            </p>
          </div>
        </div>
        <span className="text-xs font-bold text-gray-400">Canal Seguro 🔒</span>
      </div>

      {/* Cuerpo de Mensajes */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/30">
        {mensajes.map((msg) => {
          const esNutriologo = msg.remitente === 'nutriologo';
          return (
            <div
              key={msg.id}
              className={`flex ${
                esNutriologo ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[70%] p-4 rounded-2xl text-sm ${
                  esNutriologo
                    ? 'bg-emerald-500 text-white rounded-br-none shadow-sm'
                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none shadow-sm'
                }`}
              >
                <p>{msg.texto}</p>
                <p
                  className={`text-[9px] mt-1 text-right ${
                    esNutriologo ? 'text-emerald-100' : 'text-gray-400'
                  }`}
                >
                  {msg.hora}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input de Enviar */}
      <form
        onSubmit={enviarMensaje}
        className="p-4 border-t border-gray-100 bg-white flex gap-3"
      >
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          placeholder="Escribe una indicación o respuesta..."
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm"
        />
        <button
          type="submit"
          className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-400 transition shadow-sm"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
