// @ts-nocheck
import React from 'react';
import { DATOS_PACIENTES } from '../data/planesNutricionales';

export default function VistaSuper({ datosPaciente, diaSeleccionado, modoPareja }) {
  // 1. Extraemos TODOS los ingredientes de toda la semana para proyectar la quincena completa
  const diasPlan = DATOS_PACIENTES.carlos.dias;
  const todosLosIngredientes = Object.values(diasPlan).flatMap(dia =>
    Object.values(dia).flatMap((comida: any) => comida.ingredientes || [])
  );

  // 2. Agrupamos los ingredientes en categorías y limpiamos duplicados
  const categorizarIngredientes = (ingredientes) => {
    const categorias = {
      verduras: { categoria: 'Frutas y Verduras', bg: 'bg-emerald-50', color: 'text-emerald-700', icono: '🥦', items: [] },
      proteinas: { categoria: 'Carnes y Lácteos', bg: 'bg-orange-50', color: 'text-orange-700', icono: '🥩', items: [] },
      abarrotes: { categoria: 'Abarrotes y Otros', bg: 'bg-blue-50', color: 'text-blue-700', icono: '🛒', items: [] }
    };

    const kwVerduras = ['acelga', 'espinaca', 'jitomate', 'cebolla', 'naranja', 'jícama', 'fresa', 'plátano', 'pera', 'manzana', 'aguacate', 'elote', 'chile', 'zanahoria', 'calabacita', 'chayote', 'champiñon', 'sandía', 'limón', 'fruta'];
    const kwProteinas = ['pollo', 'queso', 'panela', 'huevo', 'salchicha', 'crema', 'res', 'philadelphia', 'jamón', 'carne'];

    ingredientes.forEach(ing => {
      const lowerIng = ing.toLowerCase();
      if (kwVerduras.some(kw => lowerIng.includes(kw))) {
        categorias.verduras.items.push(ing);
      } else if (kwProteinas.some(kw => lowerIng.includes(kw))) {
        categorias.proteinas.items.push(ing);
      } else {
        categorias.abarrotes.items.push(ing);
      }
    });

    // Filtramos los ingredientes repetidos para que la lista sea limpia
    Object.values(categorias).forEach(cat => {
      cat.items = [...new Set(cat.items)];
    });

    // Retornamos solo las categorías que tengan elementos
    return Object.values(categorias).filter(cat => cat.items.length > 0);
  };

  const lista = categorizarIngredientes(todosLosIngredientes);

  const ajustarCantidad = (texto) => {
    // Multiplicamos por 2 para la quincena normal, o por 4 si es modo pareja
    const multiplicador = modoPareja ? 4 : 2;
    
    return texto.replace(
      /(\d+(?:\.\d+)?)\s*(tza|taza|cda|cucharada|pza|pieza|manojo|filete|g|kg|grs)/gi,
      (match, numero, unidad) => {
        const nuevoNumero = parseFloat(numero) * multiplicador;
        let nuevaUnidad = unidad;
        if (nuevoNumero > 1) {
          if (unidad.toLowerCase() === 'taza' || unidad.toLowerCase() === 'tza') nuevaUnidad = 'tazas';
          else if (unidad.toLowerCase() === 'cda' || unidad.toLowerCase() === 'cucharada') nuevaUnidad = 'cucharadas';
          else if (unidad.toLowerCase() === 'pza' || unidad.toLowerCase() === 'pieza') nuevaUnidad = 'piezas';
          else if (unidad.toLowerCase() === 'filete') nuevaUnidad = 'filetes';
          else if (unidad.toLowerCase() === 'manojo') nuevaUnidad = 'manojos';
        }
        return `${nuevoNumero} ${nuevaUnidad}`;
      }
    );
  };

  const exportarAWhatsApp = () => {
    let texto = `🛒 *LISTA DE SÚPER QUINCENAL - NutriColab* 🛒\n`;
    if (modoPareja) texto += `*(⚠️ Lista ajustada para 2 personas por 15 días)*\n\n`;
    else texto += `*(Calculada para 1 persona por 15 días)*\n\n`;

    lista.forEach((bloque) => {
      texto += `${bloque.icono} *${bloque.categoria.toUpperCase()}*\n`;
      bloque.items.forEach((item) => {
        texto += `▫️ ${ajustarCantidad(item)}\n`;
      });
      texto += `\n`;
    });

    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Alerta minimalista integrada */}
      <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold px-4 py-3 rounded-2xl text-center shadow-sm flex flex-col items-center justify-center gap-1">
        <span className="flex items-center gap-2">
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Cantidades calculadas para tu Quincena {modoPareja ? '(x4 porciones)' : '(x2 porciones)'}
        </span>
      </div>

      {/* Grid de Categorías del Súper */}
      {lista.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-8 text-center border border-gray-100">
          <p className="text-gray-400 font-medium">No hay ingredientes registrados para este plan.</p>
        </div>
      ) : (
        lista.map((bloque, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden"
          >
            <div
              className={`${bloque.bg} px-5 py-4 border-b border-gray-100 flex items-center gap-3`}
            >
              <span className="text-2xl">{bloque.icono}</span>
              <h3 className={`font-bold ${bloque.color} text-lg`}>
                {bloque.categoria}
              </h3>
            </div>
            <div className="p-4 space-y-2">
              {bloque.items.map((item, itemIdx) => (
                <label
                  key={itemIdx}
                  className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer hover:bg-gray-50 transition"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 transition"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {ajustarCantidad(item)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))
      )}

      {/* Botón WhatsApp */}
      {lista.length > 0 && (
        <div className="pt-2 pb-8">
          <button
            onClick={exportarAWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold py-4 px-6 rounded-2xl shadow-[0_10px_20px_-10px_rgba(37,211,102,0.5)] flex items-center justify-center gap-3 transition-transform active:scale-95"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"></path>
            </svg>
            Mandar lista por WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}