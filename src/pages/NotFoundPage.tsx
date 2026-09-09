import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { EcomanzaLogo } from '../components/EcomanzaLogo';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto px-6 py-20 text-center space-y-6">
      <div className="flex justify-center">
        <EcomanzaLogo className="h-6 w-auto" color="#611C35" />
      </div>

      <div className="space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#611C35]">
          Aviso de Navegación
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif text-neutral-900">
          Página No Encontrada
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
          El contenido que buscas no existe o ha sido reubicado dentro de nuestro catálogo botánico.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/home"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-medium tracking-wide uppercase transition-all shadow-xs"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Volver al Inicio</span>
        </Link>
        <Link
          to="/home/productos"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 text-xs font-medium tracking-wide uppercase transition-all shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Ver Catálogo</span>
        </Link>
      </div>
    </div>
  );
};
