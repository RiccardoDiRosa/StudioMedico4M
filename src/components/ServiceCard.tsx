import React from 'react';
import { ServiceItem } from '../types';
import { 
  Activity, 
  Sparkles, 
  HeartHandshake, 
  Compass, 
  Apple, 
  Footprints, 
  Smile, 
  Leaf, 
  CheckCircle2 
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect?: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  // Map service IDs to appropriate medical/wellness icons
  const getIcon = (id: string) => {
    switch (id) {
      case 'ortopedia-traumatologia':
        return <Activity className="w-5 h-5 text-[#0277bd]" />;
      case 'agopuntura':
        return <Sparkles className="w-5 h-5 text-[#0277bd]" />;
      case 'fisioterapia':
        return <HeartHandshake className="w-5 h-5 text-[#0277bd]" />;
      case 'osteopatia':
        return <Compass className="w-5 h-5 text-[#0277bd]" />;
      case 'nutrizione':
        return <Apple className="w-5 h-5 text-[#0277bd]" />;
      case 'plantari-su-misura':
        return <Footprints className="w-5 h-5 text-[#0277bd]" />;
      case 'supporto-psicologico':
        return <Smile className="w-5 h-5 text-[#0277bd]" />;
      case 'naturopatia-riflessologia':
        return <Leaf className="w-5 h-5 text-[#0277bd]" />;
      default:
        return <Activity className="w-5 h-5 text-[#0277bd]" />;
    }
  };

  return (
    <article className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#b3e5fc]/80 hover:border-[#039be5] hover:shadow-xl hover:shadow-[#039be5]/15 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      {/* Top subtle highlight gradient bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01579b] via-[#039be5] to-[#b3e5fc] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header with icon and order */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b3e5fc]/60 to-[#b3e5fc]/20 border border-[#039be5]/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#b3e5fc] transition-transform shadow-xs">
            {getIcon(service.id)}
          </div>
          <span className="text-xs font-mono font-bold text-[#039be5] px-2 py-0.5 rounded-full bg-[#b3e5fc]/30 border border-[#b3e5fc]">
            {String(service.flyerOrder).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#01579b] group-hover:text-[#0277bd] transition-colors font-sans mb-2.5">
          {service.title}
        </h3>

        {/* Short description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Key bullets */}
        <ul className="space-y-2 mb-6" aria-label={`Punti chiave di ${service.title}`}>
          {service.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#039be5] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer link to professionals */}
      <div className="pt-4 border-t border-[#b3e5fc]/50 flex items-center justify-between text-xs">
        <span className="text-[#0277bd] font-medium">Disponibile a Bollate</span>
        {onSelect && (
          <button
            type="button"
            onClick={() => onSelect(service)}
            className="text-[#0277bd] hover:text-[#039be5] font-semibold inline-flex items-center gap-1 focus-ring rounded transition-colors"
          >
            <span>Dettagli</span>
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </article>
  );
};
