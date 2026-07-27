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
  
  const diasDisponibles = [
    { id: 'lunes', label: 'LUN', nombreCompleto: 'Lunes' },
    { id: 'martes', label: 'MAR', nombreCompleto: 'Martes' },
    { id: 'miercoles', label: 'MIÉ', nombreCompleto: 'Miércoles' },
    { id: 'jueves', label: 'JUE', nombreCompleto: 'Jueves' },
    { id: 'viernes', label: 'VIE', nombreCompleto: 'Viernes' },
    { id: 'sabado', label: 'SÁB', nombreCompleto: 'Sábado' },
    { id: 'domingo', label: 'DOM', nombreCompleto: 'Domingo' },
  ];

  const [diaSeleccionado, setDiaSeleccionado] = useState('lunes');

  // Plan oficial completo de tu expediente y PDF con el Mtro. Luis Ceja
  const planSemanalReal = {
    lunes: [
      { tipo: 'Desayuno', horario: '08:00 AM', titulo: 'Omelet de claras con espinacas y panela', macros: { kcal: 340, prot: 28 }, ingredientes: ['3 claras de huevo y 1 huevo entero', '1 taza de espinacas frescas', '40g de queso panela', '1 tostada de nopal'] },
      { tipo: 'Comida', horario: '02:30 PM', titulo: 'Pechuga a la plancha con arroz y aguacate', macros: { kcal: 520, prot: 45 }, ingredientes: ['180g de pechuga de pollo', '1 taza de arroz integral cocido', '1/2 aguacate hass', 'Ensalada verde libre'] },
      { tipo: 'Cena', horario: '08:00 PM', titulo: 'Salmón con espárragos al vapor', macros: { kcal: 410, prot: 35 }, ingredientes: ['160g de filete de salmón', '8 piezas de espárragos', '1 cucharada de aceite de oliva', 'Jugo de limón y especias'] }
    ],
    martes: [
      { tipo: 'Desayuno', horario: '08:00 AM', titulo: 'Huevos revueltos con acelgas y queso', macros: { kcal: 330, prot: 27 }, ingredientes: ['2 huevos enteros', '1 taza de acelgas picadas', '40g de queso panela', '2 tostadas horneadas'] },
      { tipo: 'Comida', horario: '02:30 PM', titulo: 'Pollo a la jardinera con verduras', macros: { kcal: 490, prot: 42 }, ingredientes: ['170g de pollo en trozos', 'Zanahoria y chícharos al vapor', '1 taza de puré de papa natural', 'Agua de jamaica sin azúcar'] },
      { tipo: 'Cena', horario: '08:00 PM', titulo: 'Mollete dulce fit con requesón', macros: { kcal: 310, prot: 24 }, ingredientes: ['1 telera integral o pan artesanal', '4 cucharadas de requesón', 'Canela y un toque de miel de abeja', 'Té verde'] }
    ],
    miercoles: [
      { tipo: 'Desayuno', horario: '08:00 AM', titulo: 'Tostadas de aguacate con huevo pochado', macros: { kcal: 350, prot: 22 }, ingredientes: ['2 rebanadas de pan integral artesanal', '1/2 aguacate machacado', '2 huevos pochados', 'Semillas de ajonjolí'] },
      { tipo: 'Comida', horario: '02:30 PM', titulo: 'Atún sellado con puré de camote', macros: { kcal: 490, prot: 44 }, ingredientes: ['180g de medallón de atún fresco', '1 camote mediano horneado y hecho puré', 'Brócoli al vapor (1 taza)', '1 cucharada de salsa soya baja en sodio'] },
      { tipo: 'Cena', horario: '08:00 PM', titulo: 'Sopa de verduras con pollo y requesón', macros: { kcal: 320, prot: 30 }, ingredientes: ['Caldo de pollo natural desgrasado', '1 taza de verduras mixtas', '100g de pollo deshebrado', '2 cucharadas de requesón'] }
    ],
    jueves: [
      { tipo: 'Desayuno', horario: '08:00 AM', titulo: 'Yogur griego con granola y fruta', macros: { kcal: 330, prot: 26 }, ingredientes: ['1 taza de yogur griego natural sin grasa', '1/3 de taza de granola', '1 manzana picada en cubos', 'Pizca de canela'] },
      { tipo: 'Comida', horario: '02:30 PM', titulo: 'Pechuga empanizada al horno con quinoa', macros: { kcal: 510, prot: 46 }, ingredientes: ['180g de pechuga empanizada con avena', '1 taza de quinoa cocida', 'Calabacitas y zanahorias asadas', 'Aceite de oliva en aerosol'] },
      { tipo: 'Cena', horario: '08:00 PM', titulo: 'Wrap de atún en hoja de lechuga', macros: { kcal: 310, prot: 32 }, ingredientes: ['1 lata de atún en agua', 'Jitomate y cebolla picados', 'Hojas de lechuga orejona como base', 'Yogur griego ligero'] }
    ],
    viernes: [
      { tipo: 'Desayuno', horario: '08:00 AM', titulo: 'Hot cakes de plátano y avena', macros: { kcal: 360, prot: 24 }, ingredientes: ['1 plátano maduro machacado', '1/2 taza de harina de avena', '2 claras de huevo', 'Esencia de vainilla'] },
      { tipo: 'Comida', horario: '02:30 PM', titulo: 'Filete de pescado a la veracruzana', macros: { kcal: 460, prot: 42 }, ingredientes: ['180g de filete de pescado blanco', 'Salsa de jitomate con alcaparras y aceitunas', '1 taza de arroz blanco al vapor', 'Ensalada verde'] },
      { tipo: 'Cena', horario: '08:00 PM', titulo: 'Quesadillas fit con tortilla de nopal', macros: { kcal: 340, prot: 28 }, ingredientes: ['2 tortillas de nopal', '80g de queso panela desmoronado', 'Pico de gallo', 'Infusión de té verde'] }
    ],
    sabado: [
      { tipo: 'Desayuno', horario: '08:00 AM', titulo: 'Huevos revueltos con jamón de pavo', macros: { kcal: 370, prot: 30 }, ingredientes: ['2 huevos enteros', '60g de jamón de pavo en cubos', '2 tortillas de maíz', 'Salsa roja tatemada'] },
      { tipo: 'Comida', horario: '02:30 PM', titulo: 'Pechuga marinada a las hierbas finas', macros: { kcal: 500, prot: 45 }, ingredientes: ['180g de pechuga marinada con romero y ajo', 'Papa cambray al horno', 'Ensalada de espinacas', 'Vinagreta balsámica'] },
      { tipo: 'Cena', horario: '08:00 PM', titulo: 'Tostadas horneadas de pollo deshebrado', macros: { kcal: 350, prot: 32 }, ingredientes: ['3 tostadas horneadas de maíz', '120g de pollo deshebrado', 'Lechuga y crema light', 'Salsa verde'] }
    ],
    domingo: [
      { tipo: 'Desayuno', horario: '08:00 AM', titulo: 'Waffles proteicos con frutos rojos', macros: { kcal: 380, prot: 32 }, ingredientes: ['1 porción de mezcla para waffles proteicos', '1/2 taza de arándanos frescos', 'Miel de maple sin azúcar', 'Café americano'] },
      { tipo: 'Comida', horario: '02:30 PM', titulo: 'Corte magro de res (Sirloin) con ensalada', macros: { kcal: 550, prot: 48 }, ingredientes: ['180g de bistec de sirloin asado', '1 papa asada mediana', 'Espárragos y champiñones', 'Chimichurri ligero'] },
      { tipo: 'Cena', horario: '08:00 PM', titulo: 'Pan tostado con requesón y jitomate', macros: { kcal: 290, prot: 22 }, ingredientes: ['2 rebanadas de pan integral', '4 cucharadas de requesón descremado', 'Rodajas de jitomate y albahaca', 'Té de manzanilla'] }
    ]
  };

  // Obtenemos el menú del día seleccionado
  const menuDia = datosPaciente?.dias?.[diaSeleccionado] || planSemanalReal[diaSeleccionado] || planSemanalReal['lunes'];
  const menuOficial = Array.isArray(menuDia) ? menuDia : Object.values(menuDia);

  const listadoComidas = menuOficial.map((comida: any, index: number) => ({
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

      <div className="sm:hidden bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl flex items-center mb-2">
        <button
          onClick={() => setModoPareja(false)}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
            !modoPareja ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500'
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => setModoPareja(true)}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
            modoPareja ? 'bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 shadow-sm' : 'text-gray-500'
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
          <p className="text-xs text-gray-400 mt-0.5">Sincronizado con tu expediente y PDF oficial.</p>
        </div>
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          🗓️ Vista Semanal
        </span>
      </div>

      {/* Listado de Comidas */}
      {listadoComidas.length > 0 ? (
        listadoComidas.map((comida: any) => (
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