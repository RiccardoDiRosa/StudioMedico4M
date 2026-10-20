import React from 'react';
import { Professional } from '../types';
import { UserCheck, ArrowRight, Clock, Info, ShieldCheck, ExternalLink, Phone } from 'lucide-react';

interface ProfessionalCardProps {
  professional: Professional;
  onViewProfile: (slug: string) => void;
}

export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ 
  professional, 
  onViewProfile 
}) => {
  // Initials for temporary medical avatar placeholder
  const initials = `${professional.firstName.charAt(0)}${professional.lastName.charAt(0)}`.toUpperCase();

  return (
    <article className="group bg-white rounded-2xl p-6 border border-[#b3e5fc]/80 hover:border-[#039be5] hover:shadow-xl hover:shadow-[#039be5]/15 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
      {/* Top subtle highlight gradient bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01579b] via-[#039be5] to-[#b3e5fc] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top visual block: Clean circular medical avatar */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="relative">
            {professional.photoUrl ? (
              <img
                src={professional.photoUrl}
                alt={`${professional.title} ${professional.firstName} ${professional.lastName}`}
                className="w-16 h-16 rounded-full object-cover object-top ring-4 ring-[#b3e5fc] shadow-md group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#01579b] via-[#0277bd] to-[#039be5] text-white font-serif font-bold text-lg flex items-center justify-center ring-4 ring-[#b3e5fc] shadow-md group-hover:scale-105 transition-transform">
                {initials}
              </div>
            )}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-[#b3e5fc] flex items-center justify-center shadow-xs">
              <UserCheck className="w-3.5 h-3.5 text-[#0277bd]" aria-hidden="true" />
            </div>
          </div>

          {/* Category metadata badge */}
          <div className="text-right">
            <span className="text-xs text-[#01579b] font-semibold bg-[#b3e5fc]/35 px-2.5 py-0.5 rounded-full border border-[#b3e5fc]">
              {professional.categoryLabel}
            </span>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-2">
          <span className="text-xs text-[#039be5] font-semibold block">
            {professional.title}
          </span>
          <h3 className="text-lg font-semibold text-[#01579b] group-hover:text-[#0277bd] transition-colors font-sans">
            {professional.firstName} {professional.lastName}
          </h3>
          <p className="text-xs text-slate-600 font-medium mt-0.5">
            {professional.role}
          </p>
        </div>

        {/* Short Presentation */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-3">
          {professional.shortDescription}
        </p>

        {/* Top Doctors Verified Badge */}
        {professional.topDoctorsUrl && (
          <div className="mb-3">
            <a
              href={professional.topDoctorsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#b3e5fc]/30 hover:bg-[#b3e5fc]/50 text-[#01579b] text-[11px] font-bold border border-[#b3e5fc] transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#0277bd]" />
              <span>Top Doctors® Verificato</span>
              <ExternalLink className="w-3 h-3 text-[#039be5]" />
            </a>
          </div>
        )}

        {/* Direct Phone Contact */}
        {professional.phone && (
          <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-2.5">
            <Phone className="w-3.5 h-3.5 text-[#039be5] shrink-0" aria-hidden="true" />
            <a 
              href={`tel:${professional.phone.replace(/\s+/g, '')}`}
              onClick={(e) => e.stopPropagation()}
              className="text-[#01579b] hover:text-[#0277bd] font-semibold hover:underline"
              title={`Chiama ${professional.title} ${professional.lastName}`}
            >
              {professional.phone}
            </a>
          </div>
        )}

        {/* Consultation days */}
        {professional.consultationDays && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
            <Clock className="w-3.5 h-3.5 text-[#0277bd] shrink-0" aria-hidden="true" />
            <span>{professional.consultationDays}</span>
          </div>
        )}

        {/* In-progress status flag if not yet officially validated by the doctor */}
        {!professional.isComplete && (
          <div className="mb-4 py-1.5 px-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 flex items-start gap-1.5 text-[11px] text-amber-800">
            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <span>Profilo professionale in fase di convalida</span>
          </div>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-[#b3e5fc]/50 flex items-center justify-between">
        <span className="text-xs text-[#0277bd] font-medium">Sede di Bollate</span>
        <button
          type="button"
          onClick={() => onViewProfile(professional.slug)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0277bd] group-hover:text-[#039be5] group-hover:translate-x-0.5 transition-all focus-ring rounded"
        >
          <span>Visualizza profilo</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#039be5]" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};
