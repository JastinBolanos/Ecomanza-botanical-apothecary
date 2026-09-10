import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EcomanzaLogo } from './EcomanzaLogo';
import { useWelcome } from '../context/WelcomeContext';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { openWelcome } = useWelcome();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/home');
    openWelcome();
  };

  return (
    <footer id="app-footer" className="w-full border-t border-neutral-300/80 bg-[#e5e4e4] text-neutral-600 mt-auto">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <button
              type="button"
              onClick={handleLogoClick}
              className="inline-block cursor-pointer bg-transparent border-none p-0 group"
              aria-label="Ir a la bienvenida de Ecomanza"
            >
              <EcomanzaLogo className="h-5 w-auto transition-transform group-hover:scale-105 duration-200" color="#611C35" />
            </button>
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed font-light">
              Formulaciones botánicas de aseo e higiene personal diseñadas con ingredientes 100% biodegradables y frascos de vidrio ámbar recargables.
            </p>
            <div className="pt-2 flex items-center gap-3 text-[11px] font-mono text-neutral-400">
              <span>Vidrio Ámbar</span>
              <span>·</span>
              <span>Cero Sulfatos</span>
              <span>·</span>
              <span>Economía Circular</span>
            </div>
          </div>

          {/* Navigation Links (Commercial Names, never slugs) */}
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-neutral-900 font-mono font-semibold">
              Explorar
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/home" className="hover:text-[#611C35] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/home/productos" className="hover:text-[#611C35] transition-colors">
                  Catálogo Botánico
                </Link>
              </li>
              <li>
                <Link to="/home/sostenibilidad" className="hover:text-[#611C35] transition-colors">
                  Filosofía y Recargas
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Area */}
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-neutral-900 font-mono font-semibold">
              Atención y Cuenta
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/home/perfil" className="hover:text-[#611C35] transition-colors">
                  Mi Perfil y Pedidos
                </Link>
              </li>
              <li>
                <Link to="/home/perfil/direcciones" className="hover:text-[#611C35] transition-colors">
                  Direcciones de Entrega
                </Link>
              </li>
              <li>
                <Link to="/home/contacto" className="hover:text-[#611C35] transition-colors">
                  Atención al Cliente
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-300/70 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 font-mono">
          <p>© {new Date().getFullYear()} Ecomanza. Todos los derechos reservados.</p>
          <p>Compromiso de envase retornable y neutralidad de carbono.</p>
        </div>
      </div>
    </footer>
  );
};
