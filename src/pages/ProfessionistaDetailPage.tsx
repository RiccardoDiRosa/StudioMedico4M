import React from 'react';
import { Professional } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { STUDIO_CONFIG } from '../data/studio';
import { 
  UserCheck, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldAlert, 
  Calendar,
  Building2,
  ExternalLink
} from 'lucide-react';

interface ProfessionistaDetailPageProps {
  professional: Professional;
  onNavigate: (path: string) => void;
  onBack: () => void;
}

export const ProfessionistaDetailPage: React.FC<ProfessionistaDetailPageProps> = ({
  professional,
  onNavigate,
  onBack
}) => {
  const fullName = `${professional.firstName} ${professional.lastName}`;
  const initials = `${professional.firstName.charAt(0)}${professional.lastName.charAt(0)}`.toUpperCase();

  const breadcrumbItems = [
    { label: 'Professionisti', path: '/professionisti' },
    { label: `${professional.title} ${fullName}` }
  ];

  // Specific SEO Title & Description matching PRD Section 5.4 & 7.2
  const pageTitle = `${professional.title} ${fullName}, ${professional.role} a Bollate | Studio Medico 4M`;
  const pageDescription = `Profilo di ${professional.title} ${fullName}, ${professional.role} presso Studio Medico 4M a Bollate (MI). Ambiti di attività, prestazioni e informazioni per appuntamenti.`;

  // Schema.org Structured Data (Person + MedicalBusiness affiliation)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': `${professional.title} ${fullName}`,
    'jobTitle': professional.role,
    'worksFor': {
      '@type': 'MedicalBusiness',
      'name': STUDIO_CONFIG.name,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': `${STUDIO_CONFIG.street} ${STUDIO_CONFIG.civic}`,
        'addressLocality': STUDIO_CONFIG.city,
        'postalCode': STUDIO_CONFIG.postalCode,
        'addressCountry': 'IT'
      }
    },
    'description': professional.shortDescription
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalPath={`/professionisti/${professional.slug}`}
        noindex={!professional.isPublished} // Guard: Incomplete drafts are automatically excluded from Google index
        schemaJson={personSchema}
      />

      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        </div>

        {/* Back navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors py-1.5 focus-ring rounded"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Torna all'elenco dei professionisti</span>
          </button>
        </div>

        {/* Profile Card Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs">
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              
              {/* Doctor Avatar / Temporary Placeholder */}
              <div className="shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-sky-950 via-sky-800 to-sky-600 text-white font-serif font-bold text-2xl sm:text-3xl flex items-center justify-center ring-4 ring-sky-50 shadow-inner">
                  {initials}
                </div>
              </div>

              {/* Identity & Role */}
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium text-slate-500">
                    {professional.categoryLabel}
                  </span>
                  <span className="text-slate-300" aria-hidden="true">·</span>
                  <span className="text-xs text-sky-800 font-medium">
                    Sede di Bollate (MI)
                  </span>
                </div>

                <div>
                  <span className="text-sm font-medium text-sky-700 block">
                    {professional.title}
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 font-heading">
                    {fullName}
                  </h1>
                  <p className="text-base text-slate-700 font-medium mt-1">
                    {professional.role}
                  </p>
                </div>

                {/* Sede e orari */}
                <div className="flex flex-wrap items-center gap-6 pt-1 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-700" />
                    <span>Via Madonnina 17, Bollate</span>
                  </div>
                  {professional.consultationDays && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-700" />
                      <span>{professional.consultationDays}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Incomplete / Verification Warning if not yet validated */}
            {!professional.isComplete && (
              <div className="mt-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 flex items-start gap-3 text-xs text-amber-900">
                <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-amber-950">
                    Scheda professionale in fase di validazione editoriale
                  </p>
                  <p className="text-amber-900/90 leading-relaxed">
                    I titoli specifici, l'iscrizione all'albo e i recapiti diretti di questo profilo sono in corso di verifica formale con il professionista per garantire la massima accuratezza dei contenuti sanitari.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Detailed Sections: Bio, Services, Contact Modalities */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 Cols: Bio and Services */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Presentation */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-lg font-semibold text-slate-900 font-sans">
                  Presentazione e Ambito di Attività
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {professional.fullBio}
                </p>
                <div className="pt-2 text-xs text-slate-500 italic">
                  Esercita come libero professionista indipendente presso la sede di Studio Medico 4M.
                </div>
              </div>

              {/* Prestazioni & Servizi Svolti */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-lg font-semibold text-slate-900 font-sans">
                  Prestazioni ed Ambiti di Trattamento
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Elenco prestazioni">
                  {professional.services.map((srv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right 4 Cols: Contact Box & Directions */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Contact Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 font-sans">
                  Come prenotare una visita
                </h3>

                <div className="p-3.5 rounded-xl bg-sky-50 text-xs text-sky-950 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-sky-900">
                    <Calendar className="w-4 h-4 text-sky-700" />
                    <span>Riceve su appuntamento</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    La visita viene concordata direttamente con il professionista per assicurare date e orari compatibili con le tue necessità.
                  </p>
                </div>

                {/* Direct Contacts if officially authorized */}
                {professional.phone ? (
                  <a
                    href={`tel:${professional.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-950 rounded-xl transition-all shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-sky-400" />
                    <span>Chiama {professional.phone}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigate('/contatti')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-950 rounded-xl transition-all shadow-xs focus-ring"
                  >
                    <Building2 className="w-4 h-4 text-sky-400" />
                    <span>Richiedi informazioni sulla sede</span>
                  </button>
                )}

                {professional.email && (
                  <a
                    href={`mailto:${professional.email}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                  >
                    <Mail className="w-4 h-4 text-slate-600" />
                    <span>Invia email al professionista</span>
                  </a>
                )}

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  <p><strong>Sede:</strong> Via Madonnina 17, Bollate (MI)</p>
                  <a
                    href={STUDIO_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-700 hover:underline pt-1"
                  >
                    <span>Apri navigatore Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
};
