import React from 'react';
import { motion } from 'motion/react';

interface ProductItem {
  id: string;
  name: string;
  number: string;
  imageUrl: string;
}

const CURTAIN_PRODUCTS: ProductItem[] = [
  {
    id: 'p1',
    name: 'Jabón de Manos',
    number: 'Nº 01',
    imageUrl: '/products/jabon-manos.jpg',
  },
  {
    id: 'p2',
    name: 'Gel Revitalizante',
    number: 'Nº 06',
    imageUrl: '/products/gel-ducha.jpg',
  },
  {
    id: 'p3',
    name: 'Champú Purificante',
    number: 'Nº 11',
    imageUrl: '/products/champu-botanico.jpg',
  },
  {
    id: 'p4',
    name: 'Mascarilla Capilar',
    number: 'Nº 13',
    imageUrl: '/products/mascarilla-capilar.jpg',
  },
  {
    id: 'p5',
    name: 'Bálsamo Exfoliante',
    number: 'Nº 02',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p6',
    name: 'Aceite de Ducha',
    number: 'Nº 07',
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p7',
    name: 'Gel Purificante',
    number: 'Nº 03',
    imageUrl: 'https://images.unsplash.com/photo-1556228852-6d35a585d566?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p8',
    name: 'Exfoliante Sal Marina',
    number: 'Nº 08',
    imageUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p9',
    name: 'Loción Reparadora',
    number: 'Nº 05',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p10',
    name: 'Limpiador Corporal',
    number: 'Nº 09',
    imageUrl: 'https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p11',
    name: 'Acondicionador Ligero',
    number: 'Nº 12',
    imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p12',
    name: 'Jabón al Olivo',
    number: 'Nº 04',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
  },
];

// Split into 5 staggered columns for an organic curtain cascade
const COLUMNS: { items: ProductItem[]; duration: number; delay: number }[] = [
  {
    items: [CURTAIN_PRODUCTS[0], CURTAIN_PRODUCTS[4], CURTAIN_PRODUCTS[8], CURTAIN_PRODUCTS[1]],
    duration: 34,
    delay: 0,
  },
  {
    items: [CURTAIN_PRODUCTS[2], CURTAIN_PRODUCTS[6], CURTAIN_PRODUCTS[10], CURTAIN_PRODUCTS[3]],
    duration: 26,
    delay: -12,
  },
  {
    items: [CURTAIN_PRODUCTS[5], CURTAIN_PRODUCTS[9], CURTAIN_PRODUCTS[1], CURTAIN_PRODUCTS[7]],
    duration: 38,
    delay: -6,
  },
  {
    items: [CURTAIN_PRODUCTS[3], CURTAIN_PRODUCTS[7], CURTAIN_PRODUCTS[11], CURTAIN_PRODUCTS[0]],
    duration: 29,
    delay: -18,
  },
  {
    items: [CURTAIN_PRODUCTS[1], CURTAIN_PRODUCTS[5], CURTAIN_PRODUCTS[9], CURTAIN_PRODUCTS[2]],
    duration: 35,
    delay: -8,
  },
];

export const ProductCurtain: React.FC = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-80"
      aria-hidden="true"
    >
      {/* 5-column responsive curtain grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 w-full h-full px-3 sm:px-6">
        {COLUMNS.map((col, colIdx) => {
          // Exactly two sets for mathematically seamless infinite falling loop with -50% translation
          const looped = [...col.items, ...col.items];

          return (
            <div
              key={`col-${colIdx}`}
              className={`relative h-full overflow-hidden flex flex-col ${
                colIdx >= 2 ? 'hidden sm:flex' : ''
              } ${colIdx >= 3 ? 'hidden md:flex' : ''} ${
                colIdx >= 4 ? 'hidden lg:flex' : ''
              }`}
            >
              <motion.div
                className="flex flex-col gap-4 sm:gap-5 w-full"
                animate={{ y: ['-50%', '0%'] }}
                transition={{
                  duration: col.duration,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  willChange: 'transform',
                }}
              >
                {looped.map((prod, itemIdx) => (
                  <div
                    key={`${prod.id}-${itemIdx}`}
                    className="relative w-full aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-[#e8e4dc]/70 border border-[#611C35]/12 shadow-sm"
                  >
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                    />

                    {/* Subtle warm apothecary gradient tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                    {/* Bottom Product Info Tag */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white drop-shadow-xs">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider font-semibold opacity-95">
                        {prod.number}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-sans font-light tracking-wide truncate max-w-[65%] text-right opacity-90">
                        {prod.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Atmospheric Central Scrim & Radial Fade Mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(249, 247, 242, 0.95) 0%, rgba(249, 247, 242, 0.82) 42%, rgba(249, 247, 242, 0.45) 75%, rgba(236, 230, 220, 0.25) 100%)',
        }}
      />

      {/* Soft Vignette on top and bottom edges */}
      <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-[#F9F7F2] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#ECE6DC] to-transparent pointer-events-none" />
    </div>
  );
};
