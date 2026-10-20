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
    const iconClass = "w-4 h-4 sm:w-5 sm:h-5 text-[#0277bd]";
    switch (id) {
      case 'ortopedia-traumatologia':
        return <Activity className={iconClass} />;
      case 'agopuntura':
        return <Sparkles className={iconClass} />;
      case 'fisioterapia':
        return <HeartHandshake className={iconClass} />;
      case 'osteopatia':
        return <Compass className={iconClass} />;
      case 'nutrizione':
        return <Apple className={iconClass} />;
      case 'plantari-su-misura':
        return <Footprints className={iconClass} />;
      case 'supporto-psicologico':
        return <Smile className={iconClass} />;
      case 'naturopatia-riflessologia':
        return <Leaf className={iconClass} />;
      default:
        return <Activity className={iconClass} />;
    }
  };

  return (
    <article 
      onClick={() => onSelect && onSelect(service)}
      className="group bg-white rounded-2xl p-3.5 sm:p-6 lg:p-7 border border-[#b3e5fc]/80 hover:border-[#039be5] hover:shadow-xl hover:shadow-[#039be5]/15 transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-pointer active:scale-[0.98]"
    >
      {/* Top subtle highlight gradient bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01579b] via-[#039be5] to-[#b3e5fc] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header with icon and order */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 mb-2 sm:mb-4">
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#b3e5fc]/60 to-[#b3e5fc]/20 border border-[#039be5]/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#b3e5fc] transition-transform shadow-xs">
            {getIcon(service.id)}
          </div>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-[#039be5] px-1.5 sm:px-2 py-0.5 rounded-full bg-[#b3e5fc]/30 border border-[#b3e5fc]">
            {String(service.flyerOrder).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-lg font-bold sm:font-semibold text-[#01579b] group-hover:text-[#0277bd] transition-colors font-sans mb-1 sm:mb-2.5 line-clamp-2 leading-tight">
          {service.title}
        </h3>

        {/* Short description */}
        <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed mb-2 sm:mb-5 line-clamp-2 sm:line-clamp-none">
          {service.shortDescription}
        </p>

        {/* Key bullets - visible on tablet and desktop */}
        <ul className="hidden sm:block space-y-2 mb-6" aria-label={`Punti chiave di ${service.title}`}>
          {service.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#039be5] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer link to professionals / details */}
      <div className="pt-2 sm:pt-4 border-t border-[#b3e5fc]/50 flex items-center justify-between text-[11px] sm:text-xs">
        <span className="hidden sm:inline text-[#0277bd] font-medium">Disponibile a Bollate</span>
        <span className="sm:hidden text-[10px] text-[#0277bd] font-semibold">Dettagli →</span>
        {onSelect && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(service);
            }}
            className="hidden sm:inline-flex text-[#0277bd] hover:text-[#039be5] font-semibold items-center gap-1 focus-ring rounded transition-colors"
          >
            <span>Dettagli</span>
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </article>
  );
};
