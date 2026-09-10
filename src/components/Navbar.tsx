import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { EcomanzaLogo } from './EcomanzaLogo';
import { useCart } from '../context/CartContext';
import { useWelcome } from '../context/WelcomeContext';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { totalCartCount, openSidebar } = useCart();
  const { openWelcome } = useWelcome();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/home');
    openWelcome();
  };

  const navLinks = [
    { name: 'Catálogo', path: '/home/productos' },
    { name: 'Filosofía', path: '/home/sostenibilidad' },
    { name: 'Contacto', path: '/home/contacto' },
  ];

  return (
    <header
      id="app-header"
      className="w-full border-b border-neutral-300/70 bg-[#ecebeb]/95 backdrop-blur-md sticky top-0 z-30 px-4 sm:px-8 lg:px-12 py-3.5 transition-colors"
    >
      <div className="max-w-[1680px] mx-auto flex items-center justify-between">
        {/* Left: Mobile menu toggle & Logo */}
        <div className="flex items-center gap-3">
          <button
            id="btn-mobile-nav"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-300/50 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={handleBrandClick}
            id="brand-logo-link"
            className="flex items-center gap-2.5 group cursor-pointer text-left bg-transparent border-none p-0 focus:outline-hidden"
            aria-label="Ir a la bienvenida de Ecomanza"
          >
            <div className="py-1 px-1.5 transition-transform group-hover:scale-105 duration-200">
              <EcomanzaLogo className="h-4 sm:h-4.5 w-auto" color="#611C35" />
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-[#611C35]/80 uppercase font-semibold border-l border-neutral-300 pl-2.5">
              Aseo Botánico
            </span>
          </button>
        </div>

        {/* Center: Desktop Navigation with clean commercial labels */}
        <nav id="desktop-main-nav" className="hidden md:flex items-center gap-7 text-xs tracking-wide">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors font-medium py-1 relative ${
                  isActive
                    ? 'text-[#611C35] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#611C35]'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: User Account Quick Link & Cart Drawer Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <NavLink
            to="/home/perfil"
            id="header-user-profile-btn"
            aria-label="Ir a mi cuenta"
            className={({ isActive }) =>
              `hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                isActive
                  ? 'bg-neutral-300/80 text-[#611C35] font-medium'
                  : 'text-neutral-700 hover:bg-neutral-200/80'
              }`
            }
          >
            <User className="w-3.5 h-3.5" strokeWidth={1.8} />
            <span className="hidden lg:inline">Mi Cuenta</span>
          </NavLink>

          <button
            id="header-cart-toggle-btn"
            type="button"
            onClick={openSidebar}
            aria-label="Abrir bandeja de compra"
            className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium text-neutral-800 bg-neutral-200/90 hover:bg-neutral-300/80 active:scale-95 transition-all cursor-pointer border border-neutral-300/80 shadow-2xs"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#611C35]" strokeWidth={2} />
            <span className="hidden xs:inline">Cesta</span>
            <span
              id="header-cart-badge"
              className="font-mono font-semibold text-[#611C35] bg-white px-1.5 py-0.2 rounded text-[11px]"
            >
              {totalCartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden pt-3 pb-2 border-t border-neutral-300/80 mt-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-[#611C35] text-white'
                    : 'text-neutral-700 hover:bg-neutral-200/70'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
