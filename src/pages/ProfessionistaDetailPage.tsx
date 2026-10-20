import React, { useState } from 'react';
import { Professional } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { STUDIO_CONFIG } from '../data/studio';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldAlert, 
  Calendar,
  Building2,
  ExternalLink,
  ShieldCheck,
  Award,
  GraduationCap,
  BookOpen,
  Sparkles,
  Globe2,
  ChevronDown,
  Layers
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

  // Collapsible Accordion State - starts collapsed to keep page compact on mobile and desktop
  const [openSections, setOpenSections] = useState<{
    bio: boolean;
    cv: boolean;
    services: boolean;
  }>({
    bio: false,
    cv: false,
    services: false
  });

  const toggleSection = (section: 'bio' | 'cv' | 'services') => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isAllOpen = openSections.bio && (professional.curriculumVitae ? openSections.cv : true) && openSections.services;
  const toggleAll = () => {
    const nextState = !isAllOpen;
    setOpenSections({
      bio: nextState,
      cv: nextState,
      services: nextState
    });
  };

  const isMiranda = professional.id === 'prof-01-ortopedia' || professional.slug === 'michele-roberto-miranda';

  const breadcrumbItems = [
    { label: 'Professionisti', path: '/professionisti' },
    { label: `${professional.title} ${fullName}` }
  ];

  const pageTitle = `${professional.title} ${fullName}, ${professional.role} a Bollate | Studio Medico 4M`;
  const pageDescription = `Profilo di ${professional.title} ${fullName}, ${professional.role} presso Studio Medico 4M a Bollate (MI). Ambiti di attività, prestazioni e informazioni per appuntamenti.`;

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
    'description': professional.shortDescription,
    ...(professional.topDoctorsUrl && {
      'sameAs': [professional.topDoctorsUrl]
    })
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalPath={`/professionisti/${professional.slug}`}
        noindex={!professional.isPublished}
        schemaJson={personSchema}
      />

      <div className="bg-[#f4f9fd] min-h-screen pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        </div>

        {/* Back navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0277bd] hover:text-[#01579b] transition-colors py-1.5 focus-ring rounded"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#039be5]" />
            <span>Torna all'elenco dei professionisti</span>
          </button>
        </div>

        {/* Profile Card Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#b3e5fc]/80 shadow-sm relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#01579b] via-[#039be5] to-[#b3e5fc]" />

            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 flex-1">
                {/* Doctor Avatar */}
                <div className="shrink-0 relative">
                  {professional.photoUrl ? (
                    <img
                      src={professional.photoUrl}
                      alt={`${professional.title} ${fullName}`}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover object-top ring-4 ring-[#b3e5fc] shadow-md"
                    />
                  ) : (
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#01579b] via-[#0277bd] to-[#039be5] text-white font-serif font-bold text-2xl sm:text-3xl flex items-center justify-center ring-4 ring-[#b3e5fc] shadow-md">
                      {initials}
                    </div>
                  )}
                  {professional.isComplete && (
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#0277bd] text-white flex items-center justify-center shadow-md ring-2 ring-white" title="Specialista Confermato">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Identity & Role */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-xs font-semibold text-[#01579b] bg-[#b3e5fc]/35 px-2.5 py-0.5 rounded-full border border-[#b3e5fc]">
                      {professional.categoryLabel}
                    </span>
                    <span className="text-[#039be5]" aria-hidden="true">·</span>
                    <span className="text-xs text-[#0277bd] font-semibold">
                      Sede di Bollate (MI)
                    </span>
                    {professional.curriculumVitae?.experienceYears && (
                      <>
                        <span className="text-[#039be5]" aria-hidden="true">·</span>
                        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          {professional.curriculumVitae.experienceYears}
                        </span>
                      </>
                    )}
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-[#039be5] block">
                      {professional.title}
                    </span>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#01579b] font-heading">
                      {fullName}
                    </h1>
                    <p className="text-base text-slate-700 font-medium mt-1 leading-snug">
                      {professional.role}
                    </p>
                  </div>

                  {/* Sede e orari */}
                  <div className="flex flex-wrap items-center gap-6 pt-1 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#039be5]" />
                      <span>Via Madonnina 17, Bollate</span>
                    </div>
                    {professional.consultationDays && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#039be5]" />
                        <span>{professional.consultationDays}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Header Right Actions (Top Doctors Button) */}
              {professional.topDoctorsUrl && (
                <div className="shrink-0 w-full sm:w-auto flex flex-col gap-2 pt-2 lg:pt-0">
                  <a
                    href={professional.topDoctorsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#01579b] via-[#0277bd] to-[#039be5] hover:from-[#0277bd] hover:to-[#01579b] text-white text-xs font-bold tracking-wide shadow-md shadow-[#0277bd]/25 transition-all hover:scale-[1.02] focus-ring"
                  >
                    <ShieldCheck className="w-4 h-4 text-sky-200" />
                    <span>Profilo su Top Doctors®</span>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-200 ml-1" />
                  </a>
                  <span className="text-[11px] text-center text-slate-500">
                    Profilo certificato e recensioni verificate
                  </span>
                </div>
              )}

            </div>

            {/* Incomplete / Verification Warning if not yet validated */}
            {!professional.isComplete && (
              <div className="mt-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-amber-950">
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

        {/* Detailed Sections: Bio, CV, Services, Contact Modalities */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 Cols: Overview, CV, and Services in Accordions */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              
              {/* Quick utility bar to expand / collapse all */}
              <div className="flex items-center justify-between px-1 pb-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0277bd]">
                  <Layers className="w-3.5 h-3.5 text-[#039be5]" />
                  <span>Approfondimenti Specialistici</span>
                </div>
                <button
                  type="button"
                  onClick={toggleAll}
                  className="text-xs font-semibold text-[#01579b] hover:text-[#0277bd] transition-colors px-3 py-1.5 rounded-lg bg-white border border-[#b3e5fc] hover:bg-[#b3e5fc]/25 shadow-2xs focus-ring"
                >
                  {isAllOpen ? 'Comprimi tutte le sezioni' : 'Espandi tutte le sezioni'}
                </button>
              </div>

              {/* 1. SEZIONE: Perché è uno specialista di prim'ordine */}
              <div className="bg-white rounded-3xl border border-[#b3e5fc]/80 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  type="button"
                  onClick={() => toggleSection('bio')}
                  aria-expanded={openSections.bio}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-[#f4f9fd]/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#039be5]"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#01579b] to-[#039be5] text-white flex items-center justify-center shadow-xs shrink-0">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#01579b] font-sans">
                        {isMiranda ? "Perché è uno specialista di prim'ordine" : "Presentazione e Profilo Professionale"}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#0277bd] font-medium mt-0.5 line-clamp-1 sm:line-clamp-none">
                        {isMiranda 
                          ? "Alta Specialità Chirurgia della Spalla · Ospedale Niguarda di Milano"
                          : `${professional.role} · Studio Medico 4M`}
                      </p>
                    </div>
                  </div>

                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    openSections.bio 
                      ? 'bg-[#01579b] text-white border-[#01579b] shadow-xs' 
                      : 'bg-[#f4f9fd] text-[#0277bd] border-[#b3e5fc] hover:bg-[#b3e5fc]/30'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ease-in-out ${openSections.bio ? 'rotate-180' : 'rotate-0'}`} />
                  </div>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openSections.bio ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 sm:p-8 pt-3 sm:pt-4 border-t border-[#b3e5fc]/60 space-y-6">
                      {/* Paragraphs */}
                      <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-sans">
                        {professional.bioParagraphs && professional.bioParagraphs.length > 0 ? (
                          professional.bioParagraphs.map((paragraph, idx) => (
                            <p key={idx} className="leading-relaxed">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p className="leading-relaxed">
                            {professional.fullBio}
                          </p>
                        )}
                      </div>

                      {/* Highlight Badges (Niguarda, Milano-Cortina, FISI) */}
                      {isMiranda && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                          <div className="p-3.5 rounded-2xl bg-[#f4f9fd] border border-[#b3e5fc]/70 space-y-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0277bd] block">
                              Ospedale Niguarda
                            </span>
                            <p className="text-xs text-slate-700 font-medium">
                              Alta Specialità & Resp. Ambulatorio Chirurgia della Spalla
                            </p>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-[#f4f9fd] border border-[#b3e5fc]/70 space-y-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0277bd] block">
                              Milano-Cortina 2026
                            </span>
                            <p className="text-xs text-slate-700 font-medium">
                              Membro attivo Ospedale Olimpico Niguarda XXV Giochi Olimpici
                            </p>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-[#f4f9fd] border border-[#b3e5fc]/70 space-y-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0277bd] block">
                              Nazionali Sci Alpino FISI
                            </span>
                            <p className="text-xs text-slate-700 font-medium">
                              Collaborazione medica decennale con la Commissione FISI
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="pt-2 text-xs text-[#0277bd] font-medium italic border-t border-[#b3e5fc]/40">
                        Svolge attività clinica e chirurgica in ambito ospedaliero ed esercita come libero professionista indipendente presso la sede di Studio Medico 4M a Bollate.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. SEZIONE: Curriculum Vitae (se presente) */}
              {professional.curriculumVitae && (
                <div className="bg-white rounded-3xl border border-[#b3e5fc]/80 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md">
                  <button
                    type="button"
                    onClick={() => toggleSection('cv')}
                    aria-expanded={openSections.cv}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-[#f4f9fd]/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#039be5]"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#01579b] to-[#0277bd] text-white flex items-center justify-center shadow-xs shrink-0">
                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#01579b] font-sans">
                          Curriculum Vitae
                        </h2>
                        <p className="text-xs sm:text-sm text-[#0277bd] font-medium mt-0.5 line-clamp-1 sm:line-clamp-none">
                          Esperienza professionale, sottospecializzazioni e percorso accademico
                        </p>
                      </div>
                    </div>

                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      openSections.cv 
                        ? 'bg-[#01579b] text-white border-[#01579b] shadow-xs' 
                        : 'bg-[#f4f9fd] text-[#0277bd] border-[#b3e5fc] hover:bg-[#b3e5fc]/30'
                    }`}>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ease-in-out ${openSections.cv ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openSections.cv ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 sm:p-8 pt-3 sm:pt-4 border-t border-[#b3e5fc]/60 space-y-6">
                        
                        {/* Esperienza professionale */}
                        {professional.curriculumVitae.experiences && professional.curriculumVitae.experiences.length > 0 && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-bold uppercase tracking-wider text-[#01579b] flex items-center gap-2">
                                <span>Esperienza professionale</span>
                              </h3>
                              {professional.curriculumVitae.experienceYears && (
                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#b3e5fc]/30 text-[#01579b] border border-[#b3e5fc]">
                                  {professional.curriculumVitae.experienceYears}
                                </span>
                              )}
                            </div>
                            <ul className="space-y-2.5">
                              {professional.curriculumVitae.experiences.map((exp, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed p-3 rounded-xl bg-[#f4f9fd] border border-[#b3e5fc]/50">
                                  <Sparkles className="w-4 h-4 text-[#039be5] shrink-0 mt-0.5" />
                                  <span className="font-medium">{exp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Sottospecializzazione */}
                        {professional.curriculumVitae.subSpecializations && professional.curriculumVitae.subSpecializations.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#01579b]">
                              Sottospecializzazione
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {professional.curriculumVitae.subSpecializations.map((sub, idx) => (
                                <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#b3e5fc]/35 border border-[#b3e5fc] text-xs font-semibold text-[#01579b]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0277bd]" />
                                  <span>{sub}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Risultati accademici salienti */}
                        {professional.curriculumVitae.academicMilestones && professional.curriculumVitae.academicMilestones.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#01579b] flex items-center gap-2">
                              <GraduationCap className="w-4 h-4 text-[#0277bd]" />
                              <span>Risultati accademici salienti</span>
                            </h3>
                            <ul className="space-y-2">
                              {professional.curriculumVitae.academicMilestones.map((milestone, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed p-2.5 rounded-xl bg-[#f4f9fd] border border-[#b3e5fc]/40">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#039be5] shrink-0 mt-1.5" />
                                  <span>{milestone}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Pubblicazioni e conferenze */}
                        {professional.curriculumVitae.publicationsAndConferences && professional.curriculumVitae.publicationsAndConferences.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#01579b] flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-[#0277bd]" />
                              <span>Pubblicazioni, Corsi & Congressi</span>
                            </h3>
                            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                              {professional.curriculumVitae.publicationsAndConferences.map((pub, idx) => (
                                <p key={idx} className="p-3 rounded-xl bg-[#f4f9fd] border border-[#b3e5fc]/40">
                                  {pub}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Lingue */}
                        {professional.curriculumVitae.languages && professional.curriculumVitae.languages.length > 0 && (
                          <div className="space-y-2 pt-2 border-t border-[#b3e5fc]/40">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#01579b] flex items-center gap-1.5">
                              <Globe2 className="w-3.5 h-3.5 text-[#0277bd]" />
                              <span>Lingue parlate</span>
                            </span>
                            <div className="flex flex-wrap gap-2 pt-1">
                              {professional.curriculumVitae.languages.map((lang, idx) => (
                                <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-[#b3e5fc] text-xs font-semibold text-[#01579b] capitalize shadow-xs">
                                  {lang}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. SEZIONE: Prestazioni ed Ambiti di Trattamento */}
              <div className="bg-white rounded-3xl border border-[#b3e5fc]/80 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  type="button"
                  onClick={() => toggleSection('services')}
                  aria-expanded={openSections.services}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-[#f4f9fd]/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#039be5]"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#01579b] to-[#0277bd] text-white flex items-center justify-center shadow-xs shrink-0">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#01579b] font-sans">
                        Prestazioni ed Ambiti di Trattamento
                      </h2>
                      <p className="text-xs sm:text-sm text-[#0277bd] font-medium mt-0.5 line-clamp-1 sm:line-clamp-none">
                        Diagnosi clinica, chirurgia specialistica e follow-up dedicato
                      </p>
                    </div>
                  </div>

                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    openSections.services 
                      ? 'bg-[#01579b] text-white border-[#01579b] shadow-xs' 
                      : 'bg-[#f4f9fd] text-[#0277bd] border-[#b3e5fc] hover:bg-[#b3e5fc]/30'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ease-in-out ${openSections.services ? 'rotate-180' : 'rotate-0'}`} />
                  </div>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openSections.services ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 sm:p-8 pt-3 sm:pt-4 border-t border-[#b3e5fc]/60 space-y-4">
                      <p className="text-xs text-slate-600">
                        Ambiti diagnostici, clinici e chirurgici trattati presso Studio Medico 4M a Bollate e in sede ospedaliera:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1" aria-label="Elenco prestazioni">
                        {professional.services.map((srv, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#f4f9fd] border border-[#b3e5fc]/70 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#039be5] shrink-0 mt-0.5" />
                            <span className="font-medium">{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 4 Cols: Top Doctors CTA, Contact Box & Directions */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Top Doctors Dedicated Card */}
              {professional.topDoctorsUrl && (
                <div className="bg-gradient-to-br from-[#01579b] via-[#0277bd] to-[#01579b] text-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-[#0277bd]/20 space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-white/10 blur-xl pointer-events-none" />
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-200">
                      Piattaforma Medica Certificata
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-sans">
                    Prenota o consulta su Top Doctors®
                  </h3>

                  <p className="text-xs text-sky-100 leading-relaxed">
                    Consulta il profilo verificato del Dott. Michele Roberto Miranda su Top Doctors® per informazioni approfondite, recensioni dei pazienti e canali di prenotazione.
                  </p>

                  <a
                    href={professional.topDoctorsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-[#01579b] bg-white hover:bg-sky-50 rounded-xl transition-all shadow-md group"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#0277bd]" />
                    <span>Apri profilo Top Doctors®</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#0277bd] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#b3e5fc]/80 shadow-sm space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#01579b] font-sans">
                  Come prenotare una visita
                </h3>

                <div className="p-3.5 rounded-xl bg-[#b3e5fc]/25 border border-[#b3e5fc] text-xs text-[#01579b] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#01579b]">
                    <Calendar className="w-4 h-4 text-[#0277bd]" />
                    <span>Riceve su appuntamento</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Le visite specialistiche presso Studio Medico 4M a Bollate vengono concordate nel rispetto della disponibilità del professionista.
                  </p>
                </div>

                {/* Direct Contacts if officially authorized */}
                {professional.phone ? (
                  <a
                    href={`tel:${professional.phone.replace(/\s+/g, '')}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] rounded-xl transition-all shadow-md shadow-[#0277bd]/25"
                  >
                    <Phone className="w-4 h-4 text-[#b3e5fc]" />
                    <span>Chiama {professional.phone}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigate('/contatti')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] rounded-xl transition-all shadow-md shadow-[#0277bd]/25 focus-ring"
                  >
                    <Building2 className="w-4 h-4 text-[#b3e5fc]" />
                    <span>Richiedi informazioni sulla sede</span>
                  </button>
                )}

                {professional.email && (
                  <a
                    href={`mailto:${professional.email}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#01579b] bg-white hover:bg-[#b3e5fc]/25 border-2 border-[#b3e5fc] hover:border-[#039be5] rounded-xl transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#039be5]" />
                    <span>Invia email al professionista</span>
                  </a>
                )}

                <div className="pt-3 border-t border-[#b3e5fc]/50 text-[11px] text-slate-500 space-y-1">
                  <p><strong>Sede:</strong> Via Madonnina 17, Bollate (MI)</p>
                  <a
                    href={STUDIO_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0277bd] hover:text-[#039be5] font-semibold pt-1"
                  >
                    <span>Apri navigatore Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-[#039be5]" />
                  </a>
                </div>
              </div>

              {/* Scheda Sintetica Profilo */}
              <div className="bg-[#f4f9fd] rounded-3xl p-6 border border-[#b3e5fc]/70 text-xs space-y-3">
                <h4 className="font-bold text-[#01579b] uppercase tracking-wider text-[11px]">
                  Riepilogo Professionale
                </h4>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between border-b border-[#b3e5fc]/40 pb-1.5 gap-2">
                    <span className="text-slate-500 shrink-0">Disciplina:</span>
                    <span className="font-semibold text-slate-800 text-right">{professional.categoryLabel}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#b3e5fc]/40 pb-1.5 gap-2">
                    <span className="text-slate-500 shrink-0">Ruolo:</span>
                    <span className="font-semibold text-slate-800 text-right">{professional.role}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#b3e5fc]/40 pb-1.5 gap-2">
                    <span className="text-slate-500 shrink-0">Sede:</span>
                    <span className="font-semibold text-slate-800">Bollate (Via Madonnina 17)</span>
                  </div>
                  {professional.phone && (
                    <div className="flex justify-between border-b border-[#b3e5fc]/40 pb-1.5 gap-2">
                      <span className="text-slate-500 shrink-0">Recapito:</span>
                      <a href={`tel:${professional.phone.replace(/\s+/g, '')}`} className="font-semibold text-[#01579b] hover:underline">
                        {professional.phone}
                      </a>
                    </div>
                  )}
                  {professional.curriculumVitae?.experienceYears && (
                    <div className="flex justify-between border-b border-[#b3e5fc]/40 pb-1.5 gap-2">
                      <span className="text-slate-500 shrink-0">Esperienza:</span>
                      <span className="font-semibold text-emerald-700">{professional.curriculumVitae.experienceYears}</span>
                    </div>
                  )}
                  {professional.curriculumVitae?.languages && (
                    <div className="flex justify-between gap-2">
                      <span className="text-slate-500 shrink-0">Lingue:</span>
                      <span className="font-semibold text-slate-800">{professional.curriculumVitae.languages.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
};
