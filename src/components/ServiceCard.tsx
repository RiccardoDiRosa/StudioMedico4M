import React from 'react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className="group bg-white rounded-2xl sm:rounded-3xl border border-[#b3e5fc]/80 hover:border-[#039be5] shadow-xs hover:shadow-xl hover:shadow-[#039be5]/15 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Large Visual Header Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f9fd]">
        {service.imageUrl && (
          <img
            src={service.imageUrl}
            alt={`Servizio specialistico di ${service.title} - Studio Professionale 4M a Bollate`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#01579b]/40 via-transparent to-black/10 pointer-events-none" />

        {/* Top-right Order Pill */}
        <span className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 text-[10px] sm:text-xs font-mono font-bold text-[#01579b] px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-[#b3e5fc] shadow-sm">
          {String(service.flyerOrder).padStart(2, '0')}
        </span>
      </div>

      {/* Concise Text Content */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col">
        <h3 className="text-sm sm:text-lg font-bold text-[#01579b] group-hover:text-[#0277bd] transition-colors font-sans mb-1.5 leading-snug">
          {service.title}
        </h3>
        <p className="text-[11px] sm:text-xs lg:text-[13px] text-slate-600 leading-relaxed">
          {service.shortDescription}
        </p>
      </div>
    </article>
  );
};
