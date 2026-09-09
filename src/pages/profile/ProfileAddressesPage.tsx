import React, { useState } from 'react';
import { INITIAL_USER_ADDRESSES } from '../../data/products';
import { UserAddress } from '../../types';
import { MapPin, Plus, Check, Trash2, Home, Building2, UserCheck } from 'lucide-react';
import { useComingSoonModal } from '../../context/ComingSoonModalContext';

export const ProfileAddressesPage: React.FC = () => {
  const { openModal: openComingSoon } = useComingSoonModal();
  const [addresses, setAddresses] = useState<UserAddress[]>(INITIAL_USER_ADDRESSES);
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newRecipient, setNewRecipient] = useState('');
  const [newStreet, setNewStreet] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newPostalCode, setNewPostalCode] = useState('');

  const handleSetDefault = (id: string) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const handleDelete = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStreet || !newCity) return;
    const newAddr: UserAddress = {
      id: `addr-${Date.now()}`,
      title: newTitle || 'Ubicación de entrega',
      recipient: newRecipient || 'Destinatario',
      street: newStreet,
      city: newCity,
      postalCode: newPostalCode || '28001',
      country: 'España',
      isDefault: addresses.length === 0,
    };
    setAddresses([...addresses, newAddr]);
    setShowForm(false);
    setNewTitle('');
    setNewRecipient('');
    setNewStreet('');
    setNewCity('');
    setNewPostalCode('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-serif text-neutral-900">
            Direcciones de Entrega
          </h2>
          <p className="text-xs text-neutral-500 font-light mt-0.5">
            Configura tus destinos de envío para pedidos con neutralidad de carbono.
          </p>
        </div>

        <button
          id="btn-add-new-address"
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider font-medium transition-all shadow-xs cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{showForm ? 'Cancelar' : 'Nueva Dirección'}</span>
        </button>
      </div>

      {/* New address form */}
      {showForm && (
        <form
          onSubmit={handleAddAddress}
          className="bg-white border border-[#611C35]/30 rounded-2xl p-6 shadow-xs space-y-4 animate-in fade-in duration-200"
        >
          <h3 className="text-sm font-semibold text-neutral-900">
            Añadir Dirección de Envío Local
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-neutral-500 mb-1">
                Etiqueta (Ej. Domicilio, Estudio)
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Identificador de la dirección"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#611C35]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-neutral-500 mb-1">
                Nombre de quien recibe
              </label>
              <input
                type="text"
                value={newRecipient}
                onChange={(e) => setNewRecipient(e.target.value)}
                placeholder="Nombre y apellidos"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#611C35]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-neutral-500 mb-1">
              Dirección y número
            </label>
            <input
              type="text"
              value={newStreet}
              onChange={(e) => setNewStreet(e.target.value)}
              placeholder="Calle, vía, piso o puerta"
              required
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#611C35]"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono text-neutral-500 mb-1">
                Ciudad
              </label>
              <input
                type="text"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                placeholder="Ciudad"
                required
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#611C35]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-neutral-500 mb-1">
                Código Postal
              </label>
              <input
                type="text"
                value={newPostalCode}
                onChange={(e) => setNewPostalCode(e.target.value)}
                placeholder="28001"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#611C35]"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-mono text-neutral-500 mb-1">
                País
              </label>
              <input
                type="text"
                value="España"
                disabled
                className="w-full bg-neutral-100 border border-neutral-200 rounded-xl px-3.5 py-2 text-xs text-neutral-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#611C35] text-white rounded-xl text-xs font-mono uppercase font-semibold cursor-pointer"
            >
              Guardar Dirección
            </button>
          </div>
        </form>
      )}

      {/* Addresses Empty State */}
      {addresses.length === 0 && !showForm ? (
        <div
          id="profile-empty-addresses"
          className="bg-white border border-neutral-200/90 rounded-2xl p-8 sm:p-12 text-center shadow-xs space-y-4 max-w-xl mx-auto my-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-neutral-100 border border-neutral-200/80 mx-auto flex items-center justify-center text-neutral-500">
            <MapPin className="w-6 h-6" strokeWidth={1.5} />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-base font-serif text-neutral-900 font-medium">
              Sin direcciones guardadas
            </h3>
            <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-md mx-auto">
              No tienes ninguna dirección registrada en tu sesión actual. Inicia sesión o regístrate en Ecomanza para guardar tus destinos habituales y recibir tus pedidos con un solo clic cuando la tienda esté disponible.
            </p>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="btn-empty-address-register"
              type="button"
              onClick={openComingSoon}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer active:scale-[0.99]"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Iniciar sesión o registrarse</span>
            </button>

            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono uppercase tracking-wider font-medium transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Añadir dirección local</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`bg-white border rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-4 transition-all ${
                addr.isDefault
                  ? 'border-[#611C35]/60 ring-1 ring-[#611C35]/20'
                  : 'border-neutral-200/90'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {addr.title.toLowerCase().includes('estudio') || addr.title.toLowerCase().includes('trabajo') ? (
                      <Building2 className="w-4 h-4 text-neutral-500" />
                    ) : (
                      <Home className="w-4 h-4 text-neutral-500" />
                    )}
                    <span className="text-sm font-semibold text-neutral-900 font-serif">
                      {addr.title}
                    </span>
                  </div>

                  {addr.isDefault && (
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border border-emerald-200">
                      <Check className="w-3 h-3" />
                      Predeterminada
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-800 font-medium">{addr.recipient}</p>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {addr.street}
                </p>
                <p className="text-xs text-neutral-500 font-mono">
                  {addr.postalCode} · {addr.city} ({addr.country})
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                {!addr.isDefault ? (
                  <button
                    type="button"
                    onClick={() => handleSetDefault(addr.id)}
                    className="text-neutral-600 hover:text-[#611C35] font-medium cursor-pointer"
                  >
                    Usar como predeterminada
                  </button>
                ) : (
                  <span className="text-neutral-400 text-[11px] font-mono">
                    Dirección de entrega activa
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => handleDelete(addr.id)}
                  aria-label={`Eliminar ${addr.title}`}
                  className="text-neutral-400 hover:text-rose-500 p-1 rounded transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
