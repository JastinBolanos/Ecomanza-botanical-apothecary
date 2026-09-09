import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Consulta sobre fórmulas botánicas');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#611C35] font-semibold">
          Canal Directo
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 tracking-tight">
          Atención al Cliente y Asesoramiento
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
          ¿Tienes dudas sobre los extractos botánicos, el sistema de retorno de vidrio o un pedido en curso? Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-xs space-y-5">
            <h2 className="text-base font-serif text-neutral-900">
              Canales de Asistencia
            </h2>

            <div className="space-y-4 text-xs text-neutral-600">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Correo Electrónico</p>
                  <p className="text-neutral-500 font-mono text-[11px]">atencion@ecomanza.es</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Respuesta en menos de 24 horas laborables</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Teléfono Botánico</p>
                  <p className="text-neutral-500 font-mono text-[11px]">+34 910 234 567</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Lunes a Viernes, de 09:00 a 18:00 h</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Punto Central y Taller</p>
                  <p className="text-neutral-600">Calle Silvestre 8, Barrio de las Letras</p>
                  <p className="text-neutral-500 font-mono text-[11px]">28014 Madrid, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Box */}
          <div className="bg-neutral-100/80 border border-neutral-200/80 rounded-2xl p-6 space-y-3">
            <h3 className="text-xs font-semibold uppercase font-mono tracking-wider text-neutral-800">
              Preguntas Rápidas
            </h3>
            <div className="space-y-2 text-xs text-neutral-600 font-light">
              <p>
                <strong className="font-medium text-neutral-900">¿Cómo esterilizan los envases?</strong>
                <br />
                Mediante un circuito térmico y vapor libre de químicos residuales.
              </p>
              <p>
                <strong className="font-medium text-neutral-900">¿Qué plazo tienen los envíos?</strong>
                <br />
                24 a 48 horas en península mediante mensajería neutral en emisiones.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <h2 className="text-lg font-serif text-neutral-900">
              Envíanos un Mensaje
            </h2>

            <div>
              <label className="block text-xs font-mono text-neutral-500 mb-1">
                Tu Nombre
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Nombre y apellidos"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#611C35]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-500 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="correo@ejemplo.com"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#611C35]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-500 mb-1">
                Motivo de Consulta
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#611C35]"
              >
                <option value="Consulta sobre fórmulas botánicas">Consulta sobre fórmulas botánicas</option>
                <option value="Retorno y recarga de envases de vidrio">Retorno y recarga de envases de vidrio</option>
                <option value="Estado de un pedido activo">Estado de un pedido activo</option>
                <option value="Colaboración o tiendas aliadas">Colaboración o tiendas aliadas</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-500 mb-1">
                Mensaje
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Escribe aquí tu consulta con el mayor detalle posible..."
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#611C35]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              {sent && (
                <span className="text-xs text-emerald-700 font-medium flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Mensaje enviado. Te responderemos a la brevedad.
                </span>
              )}
              <button
                type="submit"
                className="ml-auto inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[#611C35] hover:bg-[#4E1428] text-white text-xs font-medium tracking-wide uppercase transition-all shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar Consulta</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
