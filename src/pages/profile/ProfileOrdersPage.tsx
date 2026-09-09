import React from 'react';
import { INITIAL_USER_ORDERS } from '../../data/products';
import { Package, ArrowRight, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useComingSoonModal } from '../../context/ComingSoonModalContext';

export const ProfileOrdersPage: React.FC = () => {
  const { openModal: openComingSoon } = useComingSoonModal();
  const orders = INITIAL_USER_ORDERS;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h2 className="text-xl font-serif text-neutral-900">
            Historial de Pedidos
          </h2>
          <p className="text-xs text-neutral-500 font-light mt-0.5">
            Registro de compras, entregas neutrales en carbono y recargas de frascos.
          </p>
        </div>

        <Link
          to="/home/productos"
          className="text-xs font-mono uppercase tracking-wider text-[#611C35] hover:underline flex items-center gap-1 self-start sm:self-auto"
        >
          <span>Explorar catálogo</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {orders.length === 0 ? (
        <div
          id="profile-empty-orders"
          className="bg-white border border-neutral-200/90 rounded-2xl p-8 sm:p-12 text-center shadow-xs space-y-4 max-w-xl mx-auto my-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-neutral-100 border border-neutral-200/80 mx-auto flex items-center justify-center text-neutral-500">
            <Package className="w-6 h-6" strokeWidth={1.5} />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-base font-serif text-neutral-900 font-medium">
              Sin pedidos registrados
            </h3>
            <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-md mx-auto">
              Actualmente estás navegando en modo invitado. Inicia sesión o crea una cuenta en Ecomanza para consultar tus compras, solicitar facturas y rastrear pedidos una vez habilitada la tienda.
            </p>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="btn-empty-orders-register"
              type="button"
              onClick={openComingSoon}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer active:scale-[0.99]"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Iniciar sesión o registrarse</span>
            </button>

            <Link
              to="/home/productos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono uppercase tracking-wider font-medium transition-all"
            >
              <span>Ver catálogo botánico</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-neutral-900">
                      {order.orderNumber}
                    </span>
                    <p className="text-[11px] text-neutral-500 font-light">
                      Realizado el {order.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <span className="text-sm font-semibold font-mono text-neutral-900">
                    {order.total.toFixed(2)} {order.currency}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
