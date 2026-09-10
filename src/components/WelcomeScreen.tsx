import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AnimatedEcomanzaLogo } from './AnimatedEcomanzaLogo';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  // Allow keyboard Enter / Space to enter immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEnter]);

  return (
    <motion.div
      id="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.015, filter: 'blur(6px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 text-neutral-900 flex flex-col justify-center items-center px-6 py-12 select-none overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 45%, #FFFFFF 0%, #F9F7F2 50%, #ECE6DC 100%)',
      }}
    >
      {/* Delicate Architectural Frame & Corner Notches */}
      <div className="fixed inset-4 sm:inset-6 md:inset-8 border border-[#611C35]/12 pointer-events-none transition-opacity duration-700">
        <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#611C35]/40" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-[#611C35]/40" />
        <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-[#611C35]/40" />
        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#611C35]/40" />
      </div>

      {/* Main Minimalist Center Stage */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto py-8 z-10">
        {/* Animated Minimalist Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8, letterSpacing: '0.25em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.42em' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm font-mono uppercase text-[#611C35]/85 font-medium mb-6 sm:mb-8"
        >
          Línea Botánica Esencial
        </motion.div>

        {/* The Animated ECOMANZA Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center px-2 py-3 sm:py-5 cursor-pointer"
          onClick={onEnter}
        >
          <AnimatedEcomanzaLogo color="#611C35" />
        </motion.div>

        {/* Minimalist Editorial Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-neutral-600 font-light max-w-md mx-auto leading-relaxed mt-4 sm:mt-6 px-4"
        >
          Formulaciones de aseo puro elaboradas con extractos botánicos de bajo impacto.
        </motion.p>

        {/* Ultra-Premium Minimalist CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex flex-col items-center gap-3.5"
        >
          <button
            id="btn-enter-store"
            type="button"
            onClick={onEnter}
            className="group relative px-9 py-3.5 rounded-full bg-[#611C35] hover:bg-[#4E1428] text-white text-xs sm:text-sm font-mono uppercase tracking-[0.22em] flex items-center gap-3 transition-all duration-300 active:scale-[0.98] shadow-md hover:shadow-xl hover:shadow-[#611C35]/25 cursor-pointer border border-[#C5A880]/35 overflow-hidden"
          >
            {/* Specular Shimmer Pass on Button */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <span className="relative font-medium">Entrar a la tienda</span>
            <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-white/90" strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};


