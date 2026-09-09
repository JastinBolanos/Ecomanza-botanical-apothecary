import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Sparkles, Check } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Prevent body scroll when modal is open and handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="coming-soon-modal-container"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-modal-title"
        >
          {/* Backdrop with modern blur */}
          <motion.div
            id="coming-soon-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/40 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            id="coming-soon-card"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-md bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-center space-y-5"
          >
            {/* Close Button X */}
            <button
              id="btn-close-coming-soon-modal"
              type="button"
              onClick={onClose}
              aria-label="Cerrar ventana"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-xl text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>

            {/* Botanical / Sparkle Icon */}
            <div className="mx-auto w-14 h-14 rounded-2xl bg-[#611C35]/10 border border-[#611C35]/20 flex items-center justify-center text-[#611C35] shadow-xs">
              <Sparkles className="w-6 h-6" strokeWidth={1.5} />
            </div>

            {/* Badge & Title */}
            <div className="space-y-2">
              <span className="inline-block text-[10px] uppercase font-mono tracking-[0.25em] text-[#611C35] font-semibold">
                ECOMANZA · Aseo Botánico
              </span>
              <h3
                id="coming-soon-modal-title"
                className="text-2xl sm:text-3xl font-serif text-neutral-900 tracking-tight"
              >
                Próximamente
              </h3>
            </div>

            {/* Subtitle / Descriptive Text */}
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed max-w-sm mx-auto">
              El registro de cuentas y la tienda en línea de Ecomanza se habilitarán muy pronto en una próxima actualización.
            </p>

            {/* Subtle Circular Economy Feature Notice */}
            <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-200/60 text-[11px] text-neutral-500 font-mono space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-emerald-800 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Formulaciones 100% biodegradables</span>
              </div>
              <p className="text-neutral-400 font-light">
                Vidrio ámbar recargable y red de retorno de envases activa
              </p>
            </div>

            {/* Bottom Confirm Button "Entendido" */}
            <div className="pt-2">
              <button
                id="btn-understand-coming-soon"
                type="button"
                onClick={onClose}
                className="w-full py-3 px-6 rounded-xl bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-xs active:scale-[0.99]"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
