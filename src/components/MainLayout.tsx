import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { useCart } from '../context/CartContext';

export const MainLayout: React.FC = () => {
  const { cartItems, updateQuantity, clearCart, isSidebarOpen, closeSidebar } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-[#ecebeb] text-neutral-900 selection:bg-[#611c35]/20 selection:text-[#611c35]">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <Footer />

      {/* Synchronized Shopping Cart Drawer */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
      />
    </div>
  );
};
