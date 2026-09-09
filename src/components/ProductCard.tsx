import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  inCartQuantity?: number;
  layout?: 'grid' | 'row';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  inCartQuantity = 0,
  layout = 'grid',
}) => {
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1400);
  };

  const isRow = layout === 'row';

  return (
    <article
      id={`product-card-${product.id}`}
      className={`w-full bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-300 flex ${
        isRow ? 'flex-col md:flex-row' : 'flex-col h-full'
      }`}
    >
      {/* Product Image */}
      <Link
        to={`/home/productos/${product.id}`}
        aria-label={`Ver detalles de ${product.name}`}
        className={`bg-[#f5f4f2] p-4 sm:p-5 flex items-center justify-center border-neutral-200/60 shrink-0 group cursor-pointer block ${
          isRow
            ? 'md:w-5/12 border-b md:border-b-0 md:border-r'
            : 'w-full border-b'
        }`}
      >
        <div
          className={`relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-neutral-200/40 shadow-xs ${
            isRow ? 'max-w-[220px] sm:max-w-[250px]' : 'max-w-[240px] mx-auto'
          }`}
        >
          <img
            src={product.imageUrl}
            alt={product.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          {/* Minimalist pill label overlay */}
          <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-md text-[9px] font-mono uppercase tracking-widest text-[#611C35] font-semibold border border-neutral-200/80 shadow-xs">
            {product.number}
          </div>
          {inCartQuantity > 0 && (
            <div className="absolute top-2.5 right-2.5 bg-[#611C35] text-white px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold shadow-xs">
              x{inCartQuantity}
            </div>
          )}
        </div>
      </Link>

      {/* Product Details & Actions */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4 min-w-0">
        <div className="space-y-2 min-w-0">
          <div className="flex items-center justify-between gap-1.5 flex-wrap">
            <span className="text-[9px] uppercase font-mono tracking-[0.18em] text-[#611C35] font-semibold truncate max-w-[70%]">
              {product.category}
            </span>
            <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded shrink-0">
              {product.volume}
            </span>
          </div>

          <Link
            to={`/home/productos/${product.id}`}
            className="block group"
          >
            <h2 className="text-sm sm:text-base lg:text-lg font-serif text-neutral-900 tracking-tight group-hover:text-[#611C35] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h2>
          </Link>

          <p className="text-xs text-neutral-600 leading-relaxed font-light line-clamp-2">
            {product.description}
          </p>

          {product.notes && product.notes.length > 0 && (
            <div className="pt-1 flex flex-wrap items-center gap-1 text-[10px] text-neutral-500 font-mono">
              <span className="text-neutral-400 text-[9px]">Notas:</span>
              {product.notes.map((note) => (
                <span
                  key={note}
                  className="inline-flex items-center bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-700 text-[9px] max-w-[120px] truncate"
                >
                  {note}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Action Buttons - Adaptable without breaking */}
        <div className="pt-3 border-t border-neutral-100 mt-auto space-y-2.5">
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-mono block leading-none mb-0.5">
                Precio
              </span>
              <span className="text-base sm:text-lg font-semibold text-neutral-900 font-mono leading-none">
                {product.price.toFixed(2)} {product.currency}
              </span>
            </div>
            <span className="text-[9px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded shrink-0">
              Retorno 2,50 €
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-0.5">
            <Link
              to={`/home/productos/${product.id}`}
              id={`btn-view-detail-${product.id}`}
              className="py-2 px-2 rounded-xl text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1 text-center truncate"
            >
              <span>Fórmula</span>
              <ArrowRight className="w-3 h-3 shrink-0" />
            </Link>

            <button
              id={`btn-add-to-cart-${product.id}`}
              type="button"
              onClick={handleAdd}
              className={`py-2 px-2 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer active:scale-[0.98] ${
                added
                  ? 'bg-[#611C35] text-white ring-2 ring-[#611C35]/30 shadow-xs'
                  : 'bg-[#611C35] hover:bg-[#4E1428] text-white shadow-xs'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300 shrink-0" strokeWidth={2.5} />
                  <span className="truncate">Listo</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                  <span className="truncate">Añadir</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
