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
        return <Activity className="w-5 h-5 text-sky-600" />;
      case 'agopuntura':
        return <Sparkles className="w-5 h-5 text-sky-600" />;
      case 'fisioterapia':
        return <HeartHandshake className="w-5 h-5 text-sky-600" />;
      case 'osteopatia':
        return <Compass className="w-5 h-5 text-sky-600" />;
      case 'nutrizione':
        return <Apple className="w-5 h-5 text-sky-600" />;
      case 'plantari-su-misura':
        return <Footprints className="w-5 h-5 text-sky-600" />;
      case 'supporto-psicologico':
        return <Smile className="w-5 h-5 text-sky-600" />;
      case 'naturopatia-riflessologia':
        return <Leaf className="w-5 h-5 text-sky-600" />;
      default:
        return <Activity className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <article className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Header with icon and order */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-sky-100/70 transition-transform">
            {getIcon(service.id)}
          </div>
          <span className="text-xs font-mono font-medium text-slate-400">
            {String(service.flyerOrder).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-950 transition-colors font-sans mb-2.5">
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
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer link to professionals */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-400 font-medium">Disponibile a Bollate</span>
        {onSelect && (
          <button
            type="button"
            onClick={() => onSelect(service)}
            className="text-sky-700 hover:text-sky-900 font-semibold inline-flex items-center gap-1 focus-ring rounded"
          >
            <span>Dettagli</span>
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </article>
  );
};
