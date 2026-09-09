import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { PRODUCTS } from '../data/products';

interface CartContextType {
  cart: Record<string, number>;
  cartItems: CartItem[];
  totalCartCount: number;
  totalPrice: number;
  isSidebarOpen: boolean;
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('ecomanza_cart');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('ecomanza_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + quantity,
    }));
    setIsSidebarOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[productId] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: next };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const totalCartCount = Object.values(cart).reduce<number>(
    (sum: number, qty: number) => sum + qty,
    0
  );

  const cartItems: CartItem[] = Object.entries(cart)
    .map(([productId, quantity]) => {
      const prod = PRODUCTS.find((p) => p.id === productId);
      if (!prod) return null;
      return { product: prod, quantity };
    })
    .filter((item): item is CartItem => item !== null);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        totalCartCount,
        totalPrice,
        isSidebarOpen,
        addToCart,
        updateQuantity,
        clearCart,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
