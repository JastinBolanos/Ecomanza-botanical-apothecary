import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, Leaf, Droplets, ArrowRight } from 'lucide-react';

export const SustainabilityPage: React.FC = () => {
  return (
    <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-[11px] uppercase font-mono tracking-[0.25em] text-[#611C35] font-semibold">
          Compromiso Circular
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 tracking-tight">
          Filosofía Sostenible y Economía del Vidrio
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
          Diseñamos productos de aseo pensando en el ciclo completo: desde la destilación botánica responsable hasta la recirculación indefinida del envase.
        </p>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white/70 border border-neutral-200/90 rounded-2xl p-6 shadow-2xs backdrop-blur-xs">
        <div className="text-center space-y-1 p-3">
          <span className="text-3xl sm:text-4xl font-serif font-semibold text-[#611C35]">100%</span>
          <p className="text-xs text-neutral-700 font-medium">Vidrio Ámbar Reutilizable</p>
          <p className="text-[11px] text-neutral-400 font-light">Cero plásticos de un solo uso</p>
        </div>
        <div className="text-center space-y-1 p-3 border-t sm:border-t-0 sm:border-l border-neutral-200/80">
          <span className="text-3xl sm:text-4xl font-serif font-semibold text-emerald-800">&lt;28d</span>
          <p className="text-xs text-neutral-700 font-medium">Biodegradabilidad Acuática</p>
          <p className="text-[11px] text-neutral-400 font-light">Tensioactivos de origen vegetal</p>
        </div>
        <div className="text-center space-y-1 p-3 border-t lg:border-t-0 lg:border-l border-neutral-200/80">
          <span className="text-3xl sm:text-4xl font-serif font-semibold text-neutral-900">0%</span>
          <p className="text-xs text-neutral-700 font-medium">Sulfatos Agresivos</p>
          <p className="text-[11px] text-neutral-400 font-light">Sin SLS, SLES ni siliconas</p>
        </div>
        <div className="text-center space-y-1 p-3 border-t sm:border-t-0 sm:border-l border-neutral-200/80">
          <span className="text-3xl sm:text-4xl font-serif font-semibold text-[#611C35]">2,50 €</span>
          <p className="text-xs text-neutral-700 font-medium">Bonificación por Retorno</p>
          <p className="text-[11px] text-neutral-400 font-light">Recompensa directa en tu cuenta</p>
        </div>
      </div>

      {/* 3 Pillars - wide cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-neutral-200/90 rounded-2xl p-8 shadow-xs space-y-4 hover:border-neutral-300 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
            <RefreshCw className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-serif text-neutral-900">
            El Ciclo del Vidrio Ámbar
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
            El vidrio es químicamente inerte, no contamina las fórmulas con microplásticos y puede esterilizarse y recargarse cientos de veces sin perder pureza ni absorber olores.
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#611C35] uppercase tracking-wider font-semibold">
            Inercia química garantizada
          </div>
        </div>

        <div className="bg-white border border-neutral-200/90 rounded-2xl p-8 shadow-xs space-y-4 hover:border-neutral-300 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
            <Droplets className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-serif text-neutral-900">
            Biodegradabilidad del Agua
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
            Nuestros tensioactivos provienen de glucósidos derivados de coco y azúcar. Se degradan naturalmente en menos de 28 días sin alterar la flora acuática ni los cauces fluviales.
          </p>
          <div className="pt-2 text-[11px] font-mono text-emerald-800 uppercase tracking-wider font-semibold">
            Seguro para aguas grises
          </div>
        </div>

        <div className="bg-white border border-neutral-200/90 rounded-2xl p-8 shadow-xs space-y-4 hover:border-neutral-300 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#611C35] flex items-center justify-center">
            <Leaf className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-serif text-neutral-900">
            Extractos Silvestres Locales
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
            Recolectamos romero, ortiga blanca, lavanda y salvia en campos mediterráneos certificados con recolección controlada que preserva la regeneración natural y la biodiversidad.
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#611C35] uppercase tracking-wider font-semibold">
            Cosechas silvestres éticas
          </div>
        </div>
      </div>

      {/* How refill works - Full Wide Section */}
      <div className="bg-white border border-neutral-200/90 rounded-2xl p-8 sm:p-12 shadow-xs space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200/80 pb-6">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#611C35] font-semibold">
              Sistema Retornable
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mt-1">
              ¿Cómo Funciona el Retorno de Envases?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 font-light max-w-md">
            Un circuito cerrado diseñado para eliminar residuos desde el origen con beneficios económicos y ambientales directos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-neutral-700">
          <div className="space-y-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
            <span className="font-mono text-xl font-bold text-[#611C35]">01. Disfruta</span>
            <h3 className="text-sm font-semibold text-neutral-900">Aseo Botánico de Precisión</h3>
            <p className="text-xs text-neutral-600 leading-relaxed font-light">
              Usa tu jabón, gel o champú hasta la última gota gracias a nuestros dosificadores mecánicos diseñados para evitar desperdicio.
            </p>
          </div>

          <div className="space-y-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
            <span className="font-mono text-xl font-bold text-[#611C35]">02. Devuelve o Recarga</span>
            <h3 className="text-sm font-semibold text-neutral-900">Recogida en Entrega o Taller</h3>
            <p className="text-xs text-neutral-600 leading-relaxed font-light">
              En tu próximo pedido, entrega el envase vacío al repartidor o deposítalo en cualquiera de nuestros puntos asociados de la red.
            </p>
          </div>

          <div className="space-y-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
            <span className="font-mono text-xl font-bold text-[#611C35]">03. Bonificación</span>
            <h3 className="text-sm font-semibold text-neutral-900">2,50 € de Saldo Inmediato</h3>
            <p className="text-xs text-neutral-600 leading-relaxed font-light">
              Recibe 2,50 € de crédito directo en tu perfil de usuario por cada frasco devuelto para usar en tus siguientes compras.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <Link
          to="/home/productos"
          className="inline-flex items-center gap-2.5 py-3.5 px-8 rounded-xl bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-medium tracking-wide uppercase transition-all shadow-xs cursor-pointer"
        >
          <span>Descubrir las Formulaciones</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
