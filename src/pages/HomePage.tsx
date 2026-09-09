import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, RefreshCw, Leaf } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { useCart } from '../context/CartContext';

export const HomePage: React.FC = () => {
  const { addToCart, cart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const query = searchQuery.trim().toLowerCase();
  const filteredProducts = PRODUCTS.filter((product) => {
    if (!query) return true;
    return (
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      (product.notes && product.notes.some((n) => n.toLowerCase().includes(query))) ||
      'ecomanza'.includes(query) ||
      'aseo'.includes(query)
    );
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-12 md:py-16 max-w-[1680px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/90 border border-neutral-300/80 text-[10px] font-mono uppercase tracking-[0.2em] text-[#611C35] mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Línea Completa de Aseo Botánico</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight max-w-4xl mx-auto leading-[1.12]">
          Esenciales de Higiene y Cuidado Consciente
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
          Quince formulaciones botánicas biodegradables de bajo impacto para el aseo de manos, cuerpo, cabello y cuidado facial, envasadas en vidrio ámbar recargable.
        </p>

        {/* Quick Value Props Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-neutral-300/60 max-w-5xl mx-auto text-left">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-neutral-200/80 shadow-2xs">
            <RefreshCw className="w-5 h-5 text-[#611C35] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-neutral-900">Vidrio Retornable</p>
              <p className="text-[11px] text-neutral-500 font-light">Envases circulares con 2,50 € de retorno</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-neutral-200/80 shadow-2xs">
            <Leaf className="w-5 h-5 text-[#611C35] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-neutral-900">100% Biodegradable</p>
              <p className="text-[11px] text-neutral-500 font-light">Cero sulfatos agresivos ni microplásticos</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-neutral-200/80 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-[#611C35] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-neutral-900">Extractos Silvestres</p>
              <p className="text-[11px] text-neutral-500 font-light">Destilación botánica con aceites puros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Search Section */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pb-20 max-w-[1680px] mx-auto">
        <div className="max-w-2xl mx-auto mb-10">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
            placeholder="Buscar por extracto, jabón, ducha, champú o notas..."
          />
        </div>

        {searchQuery.trim() !== '' && (
          <p className="text-[11px] font-mono text-neutral-500 text-center uppercase tracking-wider mb-6">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
          </p>
        )}

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                inCartQuantity={cart[product.id] || 0}
                layout="grid"
              />
            ))}
          </div>
        ) : (
          <div
            id="no-search-results"
            className="text-center py-12 px-6 bg-white border border-neutral-200 rounded-2xl max-w-xl mx-auto"
          >
            <p className="text-sm font-medium text-neutral-800">
              Sin coincidencias para "{searchQuery}"
            </p>
            <p className="text-xs text-neutral-500 font-light mt-1">
              Prueba buscando "jabón", "ducha", "champú", "romero" o "eucalipto".
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 text-xs font-mono uppercase tracking-wider text-[#611C35] hover:underline cursor-pointer"
            >
              Restablecer búsqueda
            </button>
          </div>
        )}

        {/* Action Link to Full Catalog */}
        <div className="mt-14 text-center">
          <Link
            to="/home/productos"
            className="inline-flex items-center gap-2.5 py-3.5 px-8 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium tracking-wide uppercase transition-all shadow-xs cursor-pointer"
          >
            <span>Explorar Todo el Catálogo Botánico</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
