import React from 'react';
import { motion } from 'motion/react';

interface ProductItem {
  id: string;
  name: string;
  number: string;
  imageUrl: string;
}

// 35 completely distinct botanical products across 5 independent columns with zero repetition
const COLUMN_1_ITEMS: ProductItem[] = [
  { id: 'p01', name: 'Jabón Botánico de Manos', number: 'Nº 01', imageUrl: '/products/jabon-manos.jpg' },
  { id: 'p02', name: 'Bálsamo Exfoliante Diario', number: 'Nº 02', imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80' },
  { id: 'p03', name: 'Gel Purificante Sin Enjuague', number: 'Nº 03', imageUrl: '/products/gel-purificante.jpg' },
  { id: 'p04', name: 'Jabón Nutritivo al Olivo', number: 'Nº 04', imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80' },
  { id: 'p05', name: 'Loción Reparadora de Cutículas', number: 'Nº 05', imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80' },
  { id: 'p06', name: 'Gel de Baño Revitalizante', number: 'Nº 06', imageUrl: '/products/gel-ducha.jpg' },
  { id: 'p07', name: 'Aceite Botánico de Ducha', number: 'Nº 07', imageUrl: '/products/aceite-ducha.jpg' },
];

const COLUMN_2_ITEMS: ProductItem[] = [
  { id: 'p08', name: 'Exfoliante Sal Marina & Cedro', number: 'Nº 08', imageUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80' },
  { id: 'p09', name: 'Limpiador Piel Sensible', number: 'Nº 09', imageUrl: 'https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=600&q=80' },
  { id: 'p10', name: 'Jabón Saponificado en Frío', number: 'Nº 10', imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=600&q=80' },
  { id: 'p11', name: 'Champú Purificante Ortiga', number: 'Nº 11', imageUrl: '/products/champu-botanico.jpg' },
  { id: 'p12', name: 'Acondicionador Desenredante', number: 'Nº 12', imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80' },
  { id: 'p13', name: 'Mascarilla Nutrición Murumuru', number: 'Nº 13', imageUrl: '/products/mascarilla-capilar.jpg' },
  { id: 'p14', name: 'Limpiador Facial de Azahar', number: 'Nº 14', imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80' },
];

const COLUMN_3_ITEMS: ProductItem[] = [
  { id: 'p15', name: 'Sérum Limpiador y Desmaquillante', number: 'Nº 15', imageUrl: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80' },
  { id: 'p16', name: 'Bálsamo Regenerador Nocturno', number: 'Nº 16', imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80' },
  { id: 'p17', name: 'Elixir Facial de Caléndula', number: 'Nº 17', imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80' },
  { id: 'p18', name: 'Aceite Corporal de Jojoba', number: 'Nº 18', imageUrl: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80' },
  { id: 'p19', name: 'Tónico Botánico de Hamamelis', number: 'Nº 19', imageUrl: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=600&q=80' },
  { id: 'p20', name: 'Jabón Exfoliante de Arcilla', number: 'Nº 20', imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=600&q=80' },
  { id: 'p21', name: 'Bruma Esencial de Lavanda', number: 'Nº 21', imageUrl: 'https://images.unsplash.com/photo-1556228852-6d35a585d566?auto=format&fit=crop&w=600&q=80' },
];

const COLUMN_4_ITEMS: ProductItem[] = [
  { id: 'p22', name: 'Emulsión Corporal de Karité', number: 'Nº 22', imageUrl: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80' },
  { id: 'p23', name: 'Mascarilla de Arcilla Rosa', number: 'Nº 23', imageUrl: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=600&q=80' },
  { id: 'p24', name: 'Bálsamo Labial de Cera Vegetal', number: 'Nº 24', imageUrl: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80' },
  { id: 'p25', name: 'Sales de Baño Herbáceas', number: 'Nº 25', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80' },
  { id: 'p26', name: 'Hidrolato Puro de Rosa Mosqueta', number: 'Nº 26', imageUrl: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?auto=format&fit=crop&w=600&q=80' },
  { id: 'p27', name: 'Concentrado de Romero y Cedro', number: 'Nº 27', imageUrl: 'https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=600&q=80' },
  { id: 'p28', name: 'Champú Fortificante de Salvia', number: 'Nº 28', imageUrl: '/products/champu-salvia.jpg' },
];

const COLUMN_5_ITEMS: ProductItem[] = [
  { id: 'p29', name: 'Aceite Seco Nutritivo de Argán', number: 'Nº 29', imageUrl: '/products/aceite-argan.jpg' },
  { id: 'p30', name: 'Gel de Baño Ciprés & Tomillo', number: 'Nº 30', imageUrl: 'https://images.unsplash.com/photo-1597354984706-fac992d9306f?auto=format&fit=crop&w=600&q=80' },
  { id: 'p31', name: 'Elixir Corporal Ámbar', number: 'Nº 31', imageUrl: 'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=600&q=80' },
  { id: 'p32', name: 'Jabón de Avena Saponificado', number: 'Nº 32', imageUrl: '/products/jabon-avena.jpg' },
  { id: 'p33', name: 'Mascarilla Purificante de Algas', number: 'Nº 33', imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80' },
  { id: 'p34', name: 'Bruma Atmosférica de Enebro', number: 'Nº 34', imageUrl: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&w=600&q=80' },
  { id: 'p35', name: 'Bálsamo Botánico de Noche', number: 'Nº 35', imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
];

// 5 staggered columns with completely unique products and varied descent paces
const COLUMNS: { items: ProductItem[]; duration: number }[] = [
  {
    items: COLUMN_1_ITEMS,
    duration: 44,
  },
  {
    items: COLUMN_2_ITEMS,
    duration: 36,
  },
  {
    items: COLUMN_3_ITEMS,
    duration: 48,
  },
  {
    items: COLUMN_4_ITEMS,
    duration: 38,
  },
  {
    items: COLUMN_5_ITEMS,
    duration: 46,
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
                      referrerPolicy="no-referrer"
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
