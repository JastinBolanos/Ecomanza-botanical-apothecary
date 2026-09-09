import React, { useState } from 'react';
import { INITIAL_USER_SETTINGS } from '../../data/products';
import { Leaf, Check, Bell, Shield, UserCheck } from 'lucide-react';
import { useComingSoonModal } from '../../context/ComingSoonModalContext';

export const ProfileSettingsPage: React.FC = () => {
  const { openModal: openComingSoon } = useComingSoonModal();
  const [settings, setSettings] = useState(INITIAL_USER_SETTINGS);
  const [prefSaved, setPrefSaved] = useState(false);

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    setPrefSaved(true);
    setTimeout(() => setPrefSaved(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Environmental & Delivery Preferences */}
      <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Leaf className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-serif text-neutral-900">
              Preferencias Ecológicas de Envío
            </h2>
            <p className="text-xs text-neutral-500 font-light">
              Personaliza el embalaje y método de reparto para tu sesión actual.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs">
          <label className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70 cursor-pointer hover:bg-neutral-100/60 transition-colors">
            <div className="space-y-0.5">
              <span className="font-semibold text-neutral-900">
                Embalaje 100% Libre de Plásticos
              </span>
              <p className="text-neutral-500 font-light">
                Utilizar cajas de cartón reciclado certificado FSC y precinto de papel kraft engomado con adhesivo vegetal.
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.plasticFreePackaging}
              onChange={() => handleToggle('plasticFreePackaging')}
              className="mt-1 w-4 h-4 accent-[#611C35] rounded cursor-pointer shrink-0"
            />
          </label>

          <label className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70 cursor-pointer hover:bg-neutral-100/60 transition-colors">
            <div className="space-y-0.5">
              <span className="font-semibold text-neutral-900">
                Compensación de Huella de Carbono
              </span>
              <p className="text-neutral-500 font-light">
                Aportación automática en proyectos de reforestación botánica autóctona por cada envío.
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.carbonOffsetShipping}
              onChange={() => handleToggle('carbonOffsetShipping')}
              className="mt-1 w-4 h-4 accent-[#611C35] rounded cursor-pointer shrink-0"
            />
          </label>

          <label className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70 cursor-pointer hover:bg-neutral-100/60 transition-colors">
            <div className="space-y-0.5">
              <span className="font-semibold text-neutral-900">
                Facturas Exclusivamente Digitales
              </span>
              <p className="text-neutral-500 font-light">
                No incluir albaranes ni hojas impresas dentro del paquete para ahorrar papel.
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.emailReceipts}
              onChange={() => handleToggle('emailReceipts')}
              className="mt-1 w-4 h-4 accent-[#611C35] rounded cursor-pointer shrink-0"
            />
          </label>
        </div>

        {prefSaved && (
          <p className="text-xs text-emerald-700 font-medium flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" />
            Preferencias de envío guardadas para esta sesión
          </p>
        )}
      </div>

      {/* Communications */}
      <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-serif text-neutral-900">
              Avisos y Comunicaciones
            </h2>
            <p className="text-xs text-neutral-500 font-light">
              Controla qué notificaciones recibir en tus pedidos.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 cursor-pointer">
            <span className="text-neutral-800">
              Notificaciones de estado y seguimiento de envíos
            </span>
            <input
              type="checkbox"
              checked={settings.orderUpdates}
              onChange={() => handleToggle('orderUpdates')}
              className="w-4 h-4 accent-[#611C35] rounded cursor-pointer shrink-0"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 cursor-pointer">
            <span className="text-neutral-800">
              Boletín estacional con cosechas botánicas y nuevas recargas
            </span>
            <input
              type="checkbox"
              checked={settings.newsletter}
              onChange={() => handleToggle('newsletter')}
              className="w-4 h-4 accent-[#611C35] rounded cursor-pointer shrink-0"
            />
          </label>
        </div>
      </div>

      {/* Security in Guest Mode */}
      <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-serif text-neutral-900">
              Seguridad y Credenciales
            </h2>
            <p className="text-xs text-neutral-500 font-light">
              Gestión de contraseñas y doble factor de autenticación.
            </p>
          </div>
        </div>

        <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/70 text-xs text-neutral-600 space-y-3">
          <p className="font-light leading-relaxed">
            Las credenciales de acceso seguro y la modificación de contraseñas se activan al vincular una cuenta oficial en Ecomanza.
          </p>

          <button
            id="btn-settings-register-cta"
            type="button"
            onClick={openComingSoon}
            className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer active:scale-[0.99]"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Iniciar sesión o registrarse</span>
          </button>
        </div>
      </div>
    </div>
  );
};
