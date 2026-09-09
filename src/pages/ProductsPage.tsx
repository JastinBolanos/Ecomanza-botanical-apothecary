import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { useCart } from '../context/CartContext';
import { ChevronRight, LayoutGrid, List } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { addToCart, cart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'row'>('grid');

  const categories = [
    'Todos',
    'Aseo e Higiene de Manos',
    'Aseo Corporal',
    'Aseo Capilar y Cuidado Facial',
  ];

  const query = searchQuery.trim().toLowerCase();
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesQuery =
      query === '' ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      (product.notes && product.notes.some((n) => n.toLowerCase().includes(query)));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-14">
      {/* Breadcrumb (pure human terms, no raw URLs) */}
      <nav aria-label="Migas de pan" className="mb-6 flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
        <Link to="/home" className="hover:text-neutral-900 transition-colors">
          Inicio
        </Link>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-neutral-900 font-medium">Catálogo Botánico</span>
      </nav>

      {/* Header */}
      <div className="mb-8 space-y-2">
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#611C35] font-semibold">
          Colección Completa de 15 Fórmulas
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 tracking-tight">
          Catálogo Botánico de Aseo
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-light max-w-3xl leading-relaxed">
          Quince formulaciones botánicas concebidas para un ritual de aseo diario respetuoso con la piel y el entorno acuático.
        </p>
      </div>

      {/* Search Bar & View Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-6">
        <div className="flex-1 max-w-xl">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
            placeholder="Buscar producto, extracto o propiedades..."
          />
        </div>

        {/* View mode toggle (Grid vs Row) */}
        <div className="hidden sm:flex items-center gap-1 bg-white p-1 rounded-xl border border-neutral-200 shadow-2xs shrink-0 self-end md:self-auto">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#611C35] text-white'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
            title="Vista en cuadrícula amplia"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px]">Cuadrícula</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('row')}
            className={`p-2 rounded-lg text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'row'
                ? 'bg-[#611C35] text-white'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
            title="Vista extendida en lista"
          >
            <List className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px]">Fila</span>
          </button>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#611C35] text-white font-medium shadow-2xs'
                : 'bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List/Grid */}
      <div>
        {filteredProducts.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6'
                : 'grid grid-cols-1 xl:grid-cols-2 gap-6'
            }
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                inCartQuantity={cart[product.id] || 0}
                layout={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-6 bg-white border border-neutral-200 rounded-2xl space-y-3 max-w-lg mx-auto">
            <p className="text-sm font-medium text-neutral-800">
              No se han encontrado productos
            </p>
            <p className="text-xs text-neutral-500 font-light">
              No existen artículos con los filtros seleccionados.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="text-xs font-mono uppercase tracking-wider text-[#611C35] hover:underline cursor-pointer"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
