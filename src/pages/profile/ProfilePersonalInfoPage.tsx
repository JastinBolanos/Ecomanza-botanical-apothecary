import React, { useState } from 'react';
import { INITIAL_USER_PROFILE } from '../../data/products';
import { Check, Save, UserCheck, ShieldCheck } from 'lucide-react';
import { useComingSoonModal } from '../../context/ComingSoonModalContext';

export const ProfilePersonalInfoPage: React.FC = () => {
  const { openModal: openComingSoon } = useComingSoonModal();
  const [profile, setProfile] = useState(INITIAL_USER_PROFILE);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Guest notice card with action */}
      <div className="bg-neutral-50 border border-neutral-200/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#611C35]/10 text-[#611C35] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 font-serif">
              Sesión Anónima en Curso
            </h3>
            <p className="text-xs text-neutral-500 font-light mt-0.5">
              Tus datos no se sincronizan con la nube. Inicia sesión para vincular tus pedidos y preferencias de forma permanente.
            </p>
          </div>
        </div>

        <button
          id="btn-guest-notice-register"
          type="button"
          onClick={openComingSoon}
          className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer active:scale-[0.99] shrink-0 self-stretch sm:self-auto justify-center"
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Iniciar sesión o registrarse</span>
        </button>
      </div>

      <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-6 space-y-1">
          <h2 className="text-xl font-serif text-neutral-900">
            Datos de Contacto de Sesión
          </h2>
          <p className="text-xs text-neutral-500 font-light">
            Información temporal utilizada para recibos de compra y notificaciones de entrega.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="profile-name"
              className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5"
            >
              Nombre Completo
            </label>
            <input
              id="profile-name"
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              placeholder="Tu nombre completo"
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-[#611C35] transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="profile-email"
              className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5"
            >
              Correo Electrónico
            </label>
            <input
              id="profile-email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              placeholder="correo@ejemplo.com"
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-[#611C35] transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="profile-phone"
              className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5"
            >
              Teléfono Móvil (Opcional)
            </label>
            <input
              id="profile-phone"
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              placeholder="+34 600 000 000"
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-[#611C35] transition-colors"
            />
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-neutral-500 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200/60">
            <div>
              <span className="text-neutral-400 block">Tipo de sesión:</span>
              <span className="text-neutral-800 font-medium">Modo Invitado (Local)</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Estado de registro:</span>
              <span className="text-[#611C35] font-medium">Próximamente disponible</span>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-neutral-100">
            {saved && (
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <Check className="w-4 h-4 text-emerald-600" />
                Datos de sesión actualizados
              </span>
            )}
            <button
              type="submit"
              className="ml-auto inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Guardar en Sesión</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
