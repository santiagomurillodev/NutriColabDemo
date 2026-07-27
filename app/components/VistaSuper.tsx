// @ts-nocheck
import React from 'react';

export default function VistaSuper({ generarListaSuper, modoPareja }) {
  const lista = generarListaSuper();

  const ajustarCantidad = (texto) => {
    if (!modoPareja) return texto;
    return texto.replace(
      /(\d+)\s*(tza|taza|cda|cucharada|pza|pieza|manojo|filete|g|kg)/gi,
      (match, numero, unidad) => {
        const nuevoNumero = parseInt(numero) * 2;
        let nuevaUnidad = unidad;
        if (nuevoNumero > 1) {
          if (unidad.toLowerCase() === 'taza') nuevaUnidad = 'tazas';
          else if (unidad.toLowerCase() === 'cucharada')
            nuevaUnidad = 'cucharadas';
          else if (unidad.toLowerCase() === 'pieza') nuevaUnidad = 'piezas';
          else if (unidad.toLowerCase() === 'filete') nuevaUnidad = 'filetes';
          else if (unidad.toLowerCase() === 'manojo') nuevaUnidad = 'manojos';
        }
        return `${nuevoNumero} ${nuevaUnidad}`;
      }
    );
  };

  const exportarAWhatsApp = () => {
    let texto = `🛒 *LISTA DE SÚPER - NutriColab* 🛒\n`;
    if (modoPareja) texto += `*(⚠️ Lista ajustada para 2 personas)*\n\n`;
    else texto += `\n`;

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
      {modoPareja && (
        <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold px-4 py-3 rounded-2xl text-center shadow-sm flex items-center justify-center gap-2">
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
          Cantidades ajustadas automáticamente para 2 porciones
        </div>
      )}

      {/* Grid de Categorías del Súper */}
      {lista.map((bloque, idx) => (
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
      ))}

      {/* Botón WhatsApp */}
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
    </div>
  );
}
