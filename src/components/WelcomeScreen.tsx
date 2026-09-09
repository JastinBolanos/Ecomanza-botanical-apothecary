import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { EcomanzaLogo } from './EcomanzaLogo';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  return (
    <motion.div
      id="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-[#ecebeb] text-neutral-900 flex flex-col justify-center items-center px-6 py-12 sm:py-16 select-none overflow-y-auto"
    >
      {/* Center: Giant ECOMANZA presentation as requested */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto py-8">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.35em] text-[#611c35]/80 font-medium mb-4 sm:mb-6">
          Línea Botánica Esencial
        </span>

        <div className="w-full flex justify-center px-2 py-4">
          <EcomanzaLogo
            className="h-16 sm:h-24 md:h-32 lg:h-36 w-auto max-w-[92vw] drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            color="#611C35"
          />
        </div>

        <p className="text-sm sm:text-base text-neutral-600 font-light max-w-lg mx-auto leading-relaxed mt-4 sm:mt-6 px-4">
          Formulaciones de aseo puro elaboradas con extractos botánicos de bajo impacto.
        </p>

        {/* Minimal CTA to enter the store */}
        <div className="mt-10 sm:mt-12">
          <button
            id="btn-enter-store"
            type="button"
            onClick={onEnter}
            className="group px-8 py-3.5 rounded-full bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-mono uppercase tracking-[0.2em] flex items-center gap-3 transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Entrar a la tienda</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
