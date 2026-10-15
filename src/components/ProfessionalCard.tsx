import React from 'react';
import { Professional } from '../types';
import { UserCheck, ArrowRight, Clock, Info } from 'lucide-react';

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
    <article className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Top visual block: Clean circular medical avatar placeholder */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-900 to-sky-700 text-white font-serif font-bold text-lg flex items-center justify-center ring-4 ring-sky-50 shadow-inner group-hover:scale-105 transition-transform">
              {initials}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs">
              <UserCheck className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" />
            </div>
          </div>

          {/* Quiet, unboxed metadata */}
          <div className="text-right">
            <span className="text-xs text-slate-500 font-medium">
              {professional.categoryLabel}
            </span>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-2">
          <span className="text-xs text-sky-700 font-medium block">
            {professional.title}
          </span>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-950 transition-colors font-sans">
            {professional.firstName} {professional.lastName}
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            {professional.role}
          </p>
        </div>

        {/* Short Presentation */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {professional.shortDescription}
        </p>

        {/* Consultation days */}
        {professional.consultationDays && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span>{professional.consultationDays}</span>
          </div>
        )}

        {/* In-progress status flag if not yet officially validated by the doctor */}
        {!professional.isComplete && (
          <div className="mb-4 py-1.5 px-2.5 rounded-lg bg-amber-50/70 border border-amber-200/60 flex items-start gap-1.5 text-[11px] text-amber-800">
            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <span>Profilo professionale in fase di convalida</span>
          </div>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">Sede di Bollate</span>
        <button
          type="button"
          onClick={() => onViewProfile(professional.slug)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 group-hover:text-sky-950 group-hover:translate-x-0.5 transition-all focus-ring rounded"
        >
          <span>Visualizza profilo</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};
