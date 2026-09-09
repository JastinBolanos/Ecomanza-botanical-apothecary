import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, UserPlus, LogIn } from 'lucide-react';
import { CartItem } from '../types';
import { EcomanzaLogo } from './EcomanzaLogo';
import { useComingSoonModal } from '../context/ComingSoonModalContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onClearCart: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
}) => {
  const { openModal: openComingSoon } = useComingSoonModal();
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/30 backdrop-blur-xs z-40"
          />

          {/* Lateral Drawer */}
          <motion.aside
            id="sidebar-drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 w-full sm:w-[420px] max-w-[90vw] bg-neutral-900 text-neutral-100 shadow-2xl z-50 flex flex-col justify-between"
          >
            {/* Top Bar: Brand Ecomanza & Close Button */}
            <div>
              <div className="flex items-center justify-between p-6 border-b border-neutral-800">
                <div id="sidebar-brand" className="flex items-center gap-3">
                  <div className="bg-white/10 py-1.5 px-3 rounded-lg border border-white/10">
                    <EcomanzaLogo className="h-5 w-auto" color="#FFFFFF" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                    Bandeja
                  </span>
                </div>

                <button
                  id="btn-close-sidebar"
                  onClick={onClose}
                  aria-label="Cerrar bandeja"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              {/* Drawer Content: Cart & Status */}
              <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-210px)]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono">
                      Tu Selección ({totalCount})
                    </span>
                    {totalCount > 0 && (
                      <button
                        id="btn-clear-cart"
                        onClick={onClearCart}
                        className="text-[11px] text-neutral-400 hover:text-rose-400 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Vaciar</span>
                      </button>
                    )}
                  </div>

                  {cartItems.length > 0 ? (
                    <div id="sidebar-cart-list" className="space-y-3">
                      {cartItems.map(({ product, quantity }) => (
                        <div
                          key={product.id}
                          id={`cart-item-${product.id}`}
                          className="bg-neutral-800/80 rounded-xl p-3.5 border border-neutral-700/70 space-y-3"
                        >
                          <div className="flex justify-between items-start gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                              <img
                                src={product.imageUrl}
                                alt={product.name}
                                referrerPolicy="no-referrer"
                                className="w-12 h-12 rounded-lg object-cover border border-neutral-700 shrink-0 bg-neutral-900"
                              />
                              <div className="min-w-0">
                                <p className="text-xs font-medium text-white tracking-wide truncate">
                                  {product.name}
                                </p>
                                <p className="text-[11px] text-neutral-400 mt-0.5">
                                  {product.volume} · {product.price.toFixed(2)} {product.currency}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-medium text-white shrink-0">
                              {(quantity * product.price).toFixed(2)} {product.currency}
                            </span>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between pt-2 border-t border-neutral-700/60 text-xs">
                            <span className="text-[10px] uppercase font-mono text-neutral-500">
                              Cantidad
                            </span>
                            <div className="flex items-center gap-2 bg-neutral-900/80 rounded-lg p-0.5 border border-neutral-700">
                              <button
                                id={`btn-qty-minus-${product.id}`}
                                onClick={() => onUpdateQuantity(product.id, -1)}
                                aria-label={`Disminuir ${product.name}`}
                                className="w-6 h-6 flex items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span
                                id={`cart-qty-${product.id}`}
                                className="w-5 text-center font-mono text-xs font-semibold text-white"
                              >
                                {quantity}
                              </span>
                              <button
                                id={`btn-qty-plus-${product.id}`}
                                onClick={() => onUpdateQuantity(product.id, 1)}
                                aria-label={`Aumentar ${product.name}`}
                                className="w-6 h-6 flex items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      id="sidebar-cart-empty"
                      className="py-12 px-4 text-center border border-dashed border-neutral-800 rounded-xl"
                    >
                      <ShoppingBag className="w-6 h-6 text-neutral-600 mx-auto mb-2" strokeWidth={1.5} />
                      <p className="text-xs text-neutral-400 font-light">
                        El carrito está vacío
                      </p>
                      <p className="text-[11px] text-neutral-500 mt-1">
                        Añade productos de aseo desde el catálogo principal
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Checkout / Total Area */}
            {totalCount > 0 && (
              <div
                id="sidebar-checkout-panel"
                className="p-6 border-t border-neutral-800 bg-neutral-900/95 space-y-4"
              >
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-400 font-light">Total ({totalCount} productos)</span>
                  <span
                    id="sidebar-total-price"
                    className="text-lg font-semibold font-mono text-white"
                  >
                    {totalPrice.toFixed(2)} €
                  </span>
                </div>

                <div className="space-y-2.5 pt-1">
                  {/* Botón principal: Registrarse (color oscuro/tierra acorde a la marca) */}
                  <button
                    id="btn-sidebar-register"
                    type="button"
                    onClick={openComingSoon}
                    className="w-full py-3 px-4 rounded-xl bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Registrarse</span>
                  </button>

                  {/* Botón secundario: Iniciar sesión */}
                  <button
                    id="btn-sidebar-login"
                    type="button"
                    onClick={openComingSoon}
                    className="w-full py-2.5 px-4 rounded-xl bg-neutral-800/90 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider font-medium transition-all border border-neutral-700/80 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Iniciar sesión</span>
                  </button>
                </div>

                <div className="text-[10px] text-neutral-400 font-mono text-center">
                  Envío neutral en carbono incluido para pedidos locales
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
