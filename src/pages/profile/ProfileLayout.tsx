import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { User, MapPin, Package, Settings, ChevronRight, UserCheck } from 'lucide-react';
import { useComingSoonModal } from '../../context/ComingSoonModalContext';

export const ProfileLayout: React.FC = () => {
  const { openModal: openComingSoon } = useComingSoonModal();

  const profileTabs = [
    { name: 'Información Personal', path: '/home/perfil/datos', icon: User },
    { name: 'Direcciones de Entrega', path: '/home/perfil/direcciones', icon: MapPin },
    { name: 'Historial de Pedidos', path: '/home/perfil/pedidos', icon: Package },
    { name: 'Preferencias y Seguridad', path: '/home/perfil/ajustes', icon: Settings },
  ];

  return (
    <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-14">
      {/* Breadcrumb with human names */}
      <nav aria-label="Migas de pan" className="mb-6 flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
        <Link to="/home" className="hover:text-neutral-900 transition-colors">
          Inicio
        </Link>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-neutral-900 font-medium">Mi Cuenta</span>
      </nav>

      {/* Profile Header Card - Modo Invitado */}
      <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 mb-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {/* Neutral Avatar */}
          <div className="w-14 h-14 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500 shrink-0">
            <User className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-serif text-neutral-900">
                Modo Invitado
              </h1>
              <span className="text-[10px] font-mono uppercase tracking-wider bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md border border-neutral-200">
                Sesión Local
              </span>
            </div>
            <p className="text-xs text-neutral-500 font-light mt-1">
              Navega de forma anónima o vincula tus pedidos con una cuenta personal.
            </p>
          </div>
        </div>

        {/* Botón Destacado: Iniciar sesión o registrarse */}
        <button
          id="btn-profile-login-register"
          type="button"
          onClick={openComingSoon}
          className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer active:scale-[0.99] shrink-0 self-stretch sm:self-auto justify-center"
        >
          <UserCheck className="w-4 h-4" />
          <span>Iniciar sesión o registrarse</span>
        </button>
      </div>

      {/* Commercial Tabs Navigation */}
      <div className="border-b border-neutral-300/80 mb-8 overflow-x-auto">
        <nav className="flex items-center gap-2 sm:gap-4 min-w-max pb-0.5">
          {profileTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-3 px-3.5 text-xs transition-colors relative border-b-2 font-medium ${
                    isActive
                      ? 'border-[#611C35] text-[#611C35] font-semibold'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                  }`
                }
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Sub-view Area */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
