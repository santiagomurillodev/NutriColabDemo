// @ts-nocheck
import React from 'react';

export default function VistaSuper({ datosPaciente, modoPareja }) {
  // Extraemos todos los ingredientes del plan para hacer la lista quincenal global
  const todosLosIngredientes = Object.values(datosPaciente?.dias || {}).flatMap(dia =>
    Object.values(dia).flatMap((comida: any) => comida.ingredientes || [])
  );

  const agruparYConvertirCompras = (ingredientesRaw) => {
    // Calculamos para 14 días. Modo pareja = 14 * 2 porciones extra.
    const factorQuincena = modoPareja ? 4 : 2;

    const listaDeCompras = {
      verduras: { categoria: 'Frutas y Verduras', bg: 'bg-emerald-50', color: 'text-emerald-700', icono: '🥦', items: [] },
      proteinas: { categoria: 'Carnes y Lácteos', bg: 'bg-orange-50', color: 'text-orange-700', icono: '🥩', items: [] },
      abarrotes: { categoria: 'Abarrotes y Otros', bg: 'bg-blue-50', color: 'text-blue-700', icono: '🛒', items: [] }
    };

    const textoUnido = ingredientesRaw.join(' ').toLowerCase();

    // Lógica inteligente de conversión a compras reales de súper (cantidades estimadas por quincena)
    if (textoUnido.includes('acelga') || textoUnido.includes('espinaca')) listaDeCompras.verduras.items.push(`${1 * factorQuincena} manojo(s) de Espinacas o Acelgas`);
    if (textoUnido.includes('jitomate')) listaDeCompras.verduras.items.push(`${1.5 * factorQuincena} kg de Jitomate Saladet`);
    if (textoUnido.includes('cebolla')) listaDeCompras.verduras.items.push(`${0.5 * factorQuincena} kg de Cebolla Blanca`);
    if (textoUnido.includes('aguacate')) listaDeCompras.verduras.items.push(`${1 * factorQuincena} kg de Aguacate Hass`);
    if (textoUnido.includes('jícama')) listaDeCompras.verduras.items.push(`${1 * factorQuincena} kg de Jícama`);
    if (textoUnido.includes('fresa')) listaDeCompras.verduras.items.push(`${1 * factorQuincena} domo(s) de Fresas`);
    if (textoUnido.includes('plátano') || textoUnido.includes('manzana') || textoUnido.includes('pera') || textoUnido.includes('naranja') || textoUnido.includes('sandía')) {
      listaDeCompras.verduras.items.push(`${2 * factorQuincena} kg de Fruta Mixta de temporada`);
    }
    if (textoUnido.includes('chile verde') || textoUnido.includes('limón')) listaDeCompras.verduras.items.push(`${0.5 * factorQuincena} kg de Limón y Chiles verdes`);
    if (textoUnido.includes('zanahoria') || textoUnido.includes('calabacita') || textoUnido.includes('chayote')) listaDeCompras.verduras.items.push(`${1.5 * factorQuincena} kg de Verdura Mixta (Zanahoria, Calabaza, Chayote)`);
    if (textoUnido.includes('champiñon')) listaDeCompras.verduras.items.push(`${1 * factorQuincena} domo(s) de Champiñones`);

    if (textoUnido.includes('pollo')) listaDeCompras.proteinas.items.push(`${2 * factorQuincena} kg de Pechuga o Pierna de Pollo sin piel`);
    if (textoUnido.includes('res') || textoUnido.includes('asada') || textoUnido.includes('deshebrada')) listaDeCompras.proteinas.items.push(`${1.5 * factorQuincena} kg de Carne de Res magra`);
    if (textoUnido.includes('panela')) listaDeCompras.proteinas.items.push(`${1 * factorQuincena} kg de Queso Panela`);
    if (textoUnido.includes('huevo')) listaDeCompras.proteinas.items.push(`${1 * factorQuincena} cartera(s) de Huevo (30 pzas)`);
    if (textoUnido.includes('salchicha') || textoUnido.includes('jamón')) listaDeCompras.proteinas.items.push(`${1 * factorQuincena} paquete(s) de Carnes frías de Pavo`);
    
    if (textoUnido.includes('tortilla')) listaDeCompras.abarrotes.items.push(`${2 * factorQuincena} kg de Tortilla de Maíz`);
    if (textoUnido.includes('pan integral')) listaDeCompras.abarrotes.items.push(`${1 * factorQuincena} barra(s) de Pan Integral`);
    if (textoUnido.includes('almendra')) listaDeCompras.abarrotes.items.push(`${250 * factorQuincena}g de Almendras`);
    if (textoUnido.includes('aceite')) listaDeCompras.abarrotes.items.push(`1 botella de Aceite para cocinar (Oliva/Aguacate)`);
    if (textoUnido.includes('crema') || textoUnido.includes('philadelphia')) listaDeCompras.abarrotes.items.push(`${1 * factorQuincena} envase(s) de Crema y Queso untable`);
    if (textoUnido.includes('stevia')) listaDeCompras.abarrotes.items.push(`1 caja de Edulcorante (Stevia)`);
    if (textoUnido.includes('jamaica')) listaDeCompras.abarrotes.items.push(`250g de Flor de Jamaica`);

    // Limpiamos duplicados si los hubiera
    Object.values(listaDeCompras).forEach(cat => { cat.items = [...new Set(cat.items)]; });
    return Object.values(listaDeCompras).filter(cat => cat.items.length > 0);
  };

  const lista = agruparYConvertirCompras(todosLosIngredientes);

  const exportarAWhatsApp = () => {
    let texto = `🛒 *LISTA DE SÚPER QUINCENAL - NutriColab* 🛒\n`;
    if (modoPareja) texto += `*(⚠️ Lista ajustada para 2 personas por 15 días)*\n\n`;
    else texto += `*(Calculada para 1 persona por 15 días)*\n\n`;

    lista.forEach((bloque) => {
      texto += `${bloque.icono} *${bloque.categoria.toUpperCase()}*\n`;
      bloque.items.forEach((item) => {
        texto += `▫️ ${item}\n`;
      });
      texto += `\n`;
    });

    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold px-4 py-3 rounded-2xl text-center shadow-sm flex flex-col items-center justify-center gap-1">
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Cantidades del súper calculadas para tu Quincena {modoPareja ? '(x4 porciones)' : '(x2 porciones)'}
        </span>
      </div>

      {lista.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-8 text-center border border-gray-100">
          <p className="text-gray-400 font-medium">No hay ingredientes registrados para este plan.</p>
        </div>
      ) : (
        lista.map((bloque, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className={`${bloque.bg} px-5 py-4 border-b border-gray-100 flex items-center gap-3`}>
              <span className="text-2xl">{bloque.icono}</span>
              <h3 className={`font-bold ${bloque.color} text-lg`}>{bloque.categoria}</h3>
            </div>
            <div className="p-4 space-y-2">
              {bloque.items.map((item, itemIdx) => (
                <label key={itemIdx} className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer hover:bg-gray-50 transition">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 transition" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>
        ))
      )}

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