import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronRight, Plus, Minus, Check, ArrowLeft, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, cart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center space-y-4">
        <h1 className="text-2xl font-serif text-neutral-900">
          Producto no encontrado
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 font-light">
          La formulación botánica que buscas no se encuentra en nuestro catálogo activo.
        </p>
        <Link
          to="/home/productos"
          className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[#611C35] text-white text-xs font-medium tracking-wide uppercase transition-all shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al Catálogo</span>
        </Link>
      </div>
    );
  }

  const inCartCount = cart[product.id] || 0;

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-14 space-y-8">
      {/* Clean Human Breadcrumbs (No raw URLs) */}
      <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
        <Link to="/home" className="hover:text-neutral-900 transition-colors">
          Inicio
        </Link>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <Link to="/home/productos" className="hover:text-neutral-900 transition-colors">
          Catálogo Botánico
        </Link>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-neutral-900 font-medium truncate max-w-[200px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Detail Grid */}
      <div className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Product Image */}
        <div className="lg:col-span-5 bg-[#f5f4f2] p-6 sm:p-10 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-neutral-200/70">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-sm bg-neutral-200/50">
            <img
              src={product.imageUrl}
              alt={product.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest text-[#611C35] font-semibold border border-neutral-200/80 shadow-2xs">
              {product.number}
            </div>
            {inCartCount > 0 && (
              <div className="absolute top-3 right-3 bg-[#611C35] text-white px-2.5 py-1 rounded-full text-xs font-mono font-semibold shadow-xs">
                {inCartCount} en tu cesta
              </div>
            )}
          </div>
        </div>

        {/* Right: Formulation, Details & Purchasing */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#611C35] font-semibold">
                {product.category}
              </span>
              <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded">
                {product.volume}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif text-neutral-900 tracking-tight">
              {product.name}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Botanical extracts badges */}
            {product.notes && product.notes.length > 0 && (
              <div className="pt-2">
                <span className="text-[11px] uppercase font-mono text-neutral-400 block mb-1.5">
                  Principios Botánicos Activos
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="inline-flex items-center gap-1 bg-[#611C35]/5 border border-[#611C35]/15 text-[#611C35] px-2.5 py-1 rounded-lg text-xs font-medium"
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Ingredients breakdown */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="pt-2 border-t border-neutral-100">
                <span className="text-[11px] uppercase font-mono text-neutral-400 block mb-1.5">
                  Fórmula Completa
                </span>
                <ul className="space-y-1 text-xs text-neutral-600 font-light">
                  {product.ingredients.map((ing) => (
                    <li key={ing} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#611C35]/60 shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Usage ritual */}
            {product.usageInstructions && (
              <div className="pt-2 border-t border-neutral-100">
                <span className="text-[11px] uppercase font-mono text-neutral-400 block mb-1.5">
                  Modo de Empleo y Ritual
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed font-light bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                  {product.usageInstructions}
                </p>
              </div>
            )}

            {/* Circular economy commitment */}
            {product.sustainabilityCommitment && (
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-900">
                <RefreshCw className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                <p className="font-light leading-relaxed">
                  {product.sustainabilityCommitment}
                </p>
              </div>
            )}
          </div>

          {/* Pricing & Add to Cart action */}
          <div className="pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
                Precio Unitario
              </span>
              <span className="text-2xl font-semibold font-mono text-neutral-900">
                {product.price.toFixed(2)} {product.currency}
              </span>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto">
              {/* Quantity control */}
              <div className="flex items-center border border-neutral-200 rounded-xl bg-neutral-50 p-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Disminuir unidades"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-white transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-mono text-xs font-semibold text-neutral-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Aumentar unidades"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-white transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to cart */}
              <button
                type="button"
                onClick={handleAdd}
                className={`py-3 px-6 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer flex-1 sm:flex-initial min-w-[160px] ${
                  added
                    ? 'bg-[#611C35] text-white ring-2 ring-[#611C35]/30 shadow-sm'
                    : 'bg-[#611C35] hover:bg-[#4E1428] text-white active:scale-[0.98] shadow-xs'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300 shrink-0" strokeWidth={2.5} />
                    <span>Añadido</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 shrink-0" strokeWidth={2} />
                    <span>Añadir a la Cesta</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
