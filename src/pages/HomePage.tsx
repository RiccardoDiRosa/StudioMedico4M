import React, { useState } from 'react';
import { STUDIO_CONFIG, STUDIO_MODEL_NOTE, STUDIO_PHOTOS } from '../data/studio';
import { STUDIO_SERVICES } from '../data/services';
import { PROFESSIONISTI, CATEGORIES_CONFIG } from '../data/professionisti';
import { ServiceItem } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { ProfessionalCard } from '../components/ProfessionalCard';
import { HolisticEmblem } from '../components/HolisticEmblem';
import { WaveDivider } from '../components/WaveDivider';
import { SEOHead } from '../components/SEOHead';
import { 
  MapPin, 
  ArrowRight, 
  Users, 
  Sparkles, 
  Navigation, 
  Clock, 
  HelpCircle,
  ExternalLink,
  Camera,
  CheckCircle2,
  Calendar,
  ShieldCheck
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProfessional: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProfessional }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const filteredProfessionals = selectedCategory === 'all'
    ? PROFESSIONISTI
    : PROFESSIONISTI.filter(p => p.category === selectedCategory);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured Data Schema for Local Medical Practice
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    'name': STUDIO_CONFIG.name,
    'description': 'Studio Medico 4M a Bollate (MI). Spazio polifunzionale per la salute e il benessere che ospita 12 liberi professionisti indipendenti.',
    'url': STUDIO_CONFIG.canonicalBaseUrl,
    'slogan': STUDIO_CONFIG.payoff,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': `${STUDIO_CONFIG.street} ${STUDIO_CONFIG.civic}`,
      'addressLocality': STUDIO_CONFIG.city,
      'addressRegion': STUDIO_CONFIG.province,
      'postalCode': STUDIO_CONFIG.postalCode,
      'addressCountry': 'IT'
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Bollate e provincia di Milano'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Servizi Studio Medico 4M',
      'itemListElement': STUDIO_SERVICES.map((s, index) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': s.title,
          'description': s.shortDescription
        },
        'position': index + 1
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Studio Medico 4M a Bollate | Professionisti e servizi per la salute"
        description="Studio Medico 4M a Bollate (MI): spazio professionale per la salute e il benessere che ospita 12 specialisti. Ortopedia, Fisioterapia, Osteopatia, Nutrizione, Psicologia."
        canonicalPath="/"
        schemaJson={homeSchema}
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#b3e5fc]/35 via-white to-[#f4f9fd] pt-6 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        {/* Subtle background decorative shapes with palette colors */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#039be5]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 rounded-full bg-[#b3e5fc]/50 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* ========================================================= */}
          {/* MOBILE HERO VIEW (< lg) - Optimized for First Impression  */}
          {/* ========================================================= */}
          <div className="block lg:hidden">
            {/* Top location kicker */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b3e5fc]/50 border border-[#039be5]/30 text-[11px] font-semibold tracking-wide uppercase text-[#01579b]">
              <MapPin className="w-3.5 h-3.5 text-[#039be5]" aria-hidden="true" />
              <span>Bollate · Via Madonnina 17</span>
            </div>

            {/* Mobile Title & Payoff */}
            <h1 className="text-3xl sm:text-4xl font-normal text-[#01579b] tracking-tight leading-tight font-heading mt-2.5">
              Studio Medico <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#01579b] via-[#0277bd] to-[#039be5]">4M</span>
            </h1>
            <p className="text-base sm:text-lg text-[#0277bd] font-serif italic mt-1 font-medium">
              “Dove mente e corpo ritrovano equilibrio”
            </p>

            {/* HERO VISUAL STUDIO SHOWCASE CARD - Mobile Above-the-fold */}
            <div className="relative mt-4 mb-4 rounded-2xl overflow-hidden border-2 border-[#b3e5fc] shadow-xl shadow-[#0277bd]/15 group bg-white">
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                <img
                  src="/images/studio/studio-hero.jpg"
                  alt="Interni dello Studio Medico 4M a Bollate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01579b]/85 via-transparent to-black/20" />
              </div>

              {/* Badges on top of the image */}
              <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#b3e5fc] shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-[#01579b]">12 Professionisti della Salute</span>
              </div>

              <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg border border-[#b3e5fc] shadow-sm flex items-center gap-1">
                <span className="text-[10px] font-bold text-[#0277bd]">8 Discipline</span>
              </div>

              {/* Bottom text bar over image */}
              <div className="absolute bottom-0 inset-x-0 p-3 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold leading-tight drop-shadow-sm">Sede di Bollate · Via Madonnina 17</p>
                  <p className="text-[10px] text-sky-200">Accoglienza, riservatezza e cura della persona</p>
                </div>
                <div className="shrink-0 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-medium text-white border border-white/30">
                  Visite su appuntamento
                </div>
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href="#professionisti"
                onClick={(e) => scrollToSection(e, 'professionisti')}
                className="inline-flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-bold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] active:scale-[0.98] rounded-xl shadow-md shadow-[#0277bd]/25 text-center focus-ring"
              >
                <span>I Professionisti</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#b3e5fc]" aria-hidden="true" />
              </a>

              <a
                href={STUDIO_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-bold text-[#01579b] bg-white active:scale-[0.98] border border-[#b3e5fc] rounded-xl shadow-xs text-center focus-ring"
              >
                <Navigation className="w-3.5 h-3.5 text-[#039be5]" aria-hidden="true" />
                <span>Come Arrivare</span>
              </a>
            </div>

            {/* Key Trust Pillars Strip */}
            <div className="grid grid-cols-3 gap-2 pt-3">
              <div className="bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-[#b3e5fc]/70 text-center">
                <span className="block text-sm font-bold text-[#01579b]">12</span>
                <span className="block text-[10px] text-slate-600 font-medium">Specialisti</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-[#b3e5fc]/70 text-center">
                <span className="block text-sm font-bold text-[#01579b]">8</span>
                <span className="block text-[10px] text-slate-600 font-medium">Aree Mediche</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-[#b3e5fc]/70 text-center">
                <span className="block text-sm font-bold text-[#039be5]">Diretto</span>
                <span className="block text-[10px] text-slate-600 font-medium">Senza Attese</span>
              </div>
            </div>

            {/* Informative model pill */}
            <div className="mt-3.5 p-3 rounded-xl bg-white/90 border border-[#b3e5fc] shadow-xs flex items-start gap-2.5 text-[11px] text-slate-700">
              <Users className="w-3.5 h-3.5 text-[#0277bd] shrink-0 mt-0.5" aria-hidden="true" />
              <p>
                Sede condivisa da <strong className="text-[#01579b]">12 liberi professionisti indipendenti</strong>. Ciascuno gestisce i propri appuntamenti in autonomia, senza segreteria centralizzata.
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* DESKTOP HERO VIEW (hidden lg:grid) - The Approved Layout  */}
          {/* ========================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Presentation & CTAs */}
            <div className="col-span-7 space-y-6">
              
              {/* Pill Location Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b3e5fc]/45 border border-[#039be5]/30 text-xs font-semibold tracking-wider uppercase text-[#01579b]">
                <MapPin className="w-3.5 h-3.5 text-[#039be5]" aria-hidden="true" />
                <span>Bollate (Milano) · Via Madonnina 17</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl font-normal text-[#01579b] tracking-tight leading-[1.15] text-balance font-heading">
                Studio Medico <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#01579b] via-[#0277bd] to-[#039be5]">4M</span>
              </h1>

              {/* Payoff */}
              <p className="text-2xl text-[#0277bd] font-serif italic tracking-tight font-medium">
                “Dove mente e corpo ritrovano equilibrio”
              </p>

              {/* Verified Editorial Copy */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Studio Medico 4M ospita professionisti che operano in diversi ambiti della salute e del benessere. Scopri i servizi disponibili e le competenze dei professionisti presenti nella sede di Bollate.
              </p>

              {/* Transparent Clinic Model Note */}
              <div className="p-4 rounded-2xl bg-white/90 border border-[#b3e5fc] shadow-xs flex items-start gap-3 text-xs text-slate-700 max-w-xl backdrop-blur-xs">
                <Users className="w-4 h-4 text-[#0277bd] shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  Sede condivisa da <strong className="text-[#01579b]">12 liberi professionisti indipendenti</strong>. Ciascuno gestisce i propri appuntamenti in autonomia, senza segreteria centralizzata.
                </p>
              </div>

              {/* Action Buttons: 2 Distinct CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#professionisti"
                  onClick={(e) => scrollToSection(e, 'professionisti')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] active:scale-[0.99] rounded-xl transition-all shadow-md shadow-[#0277bd]/25 hover:shadow-lg hover:shadow-[#039be5]/30 focus-ring whitespace-nowrap"
                >
                  <span>Scopri i professionisti</span>
                  <ArrowRight className="w-4 h-4 text-[#b3e5fc]" aria-hidden="true" />
                </a>

                <a
                  href={STUDIO_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#01579b] bg-white hover:bg-[#b3e5fc]/25 active:scale-[0.99] border-2 border-[#b3e5fc] hover:border-[#039be5] rounded-xl transition-all shadow-xs focus-ring whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 text-[#039be5]" aria-hidden="true" />
                  <span>Come raggiungerci</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Composition with Studio Showcase & Emblem Badge */}
            <div className="col-span-5 flex justify-end">
              <div className="relative w-full max-w-md">
                
                {/* Main Framed Studio Showcase Card */}
                <div className="relative rounded-3xl p-2.5 bg-gradient-to-tr from-[#01579b] via-[#039be5] to-[#b3e5fc] shadow-2xl shadow-[#0277bd]/25 overflow-hidden group">
                  <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-slate-100">
                    <img
                      src="/images/studio/studio-hero.jpg"
                      alt="Interni dello Studio Medico 4M a Bollate"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01579b]/80 via-transparent to-black/15 pointer-events-none" />

                    {/* Overlay info tag */}
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold font-brand tracking-wider uppercase block text-white">
                          Studio Medico 4M
                        </span>
                        <span className="text-[11px] text-sky-200 block">
                          Bollate · Via Madonnina 17
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/30">
                        12 Specialisti
                      </span>
                    </div>
                  </div>
                </div>

                {/* Overlaid Authentic Holistic Emblem Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl border-2 border-[#b3e5fc] shadow-xl flex items-center gap-3 max-w-[240px]">
                  <div className="shrink-0 scale-90">
                    <HolisticEmblem size={52} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#01579b] block leading-tight">
                      Mente e Corpo in Equilibrio
                    </span>
                    <span className="text-[10px] text-[#0277bd] font-medium block mt-0.5">
                      Approccio integrato alla salute
                    </span>
                  </div>
                </div>

                {/* Floating pill badge for the 8 services */}
                <div className="absolute -top-3 -right-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border-2 border-[#b3e5fc] shadow-lg flex items-center">
                  <span className="text-xs font-bold text-[#01579b]">
                    8 Aree di Servizio
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider position="bottom" fillColor="#FFFFFF" accentColor="#039be5" height={42} className="bg-transparent" />

      {/* 2. PRESENTAZIONE DELLO STUDIO */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-4 mb-6 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0277bd]">
              Chi Siamo
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-[#01579b] tracking-tight font-heading">
              Uno spazio dedicato al benessere di mente e corpo
            </h2>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Studio Medico 4M nasce con l'intento di offrire a Bollate una sede confortevole e professionale dove differenti discipline sanitarie e del benessere convivono armoniosamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-8">
            <div className="bg-[#f4f9fd]/80 rounded-2xl p-4 sm:p-7 border border-[#b3e5fc]/80 hover:border-[#039be5] hover:shadow-lg hover:shadow-[#039be5]/10 transition-all flex md:flex-col items-start gap-3.5 md:gap-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#b3e5fc]/50 text-[#01579b] border border-[#039be5]/30 flex items-center justify-center shrink-0 md:mb-4 shadow-xs">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#0277bd]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#01579b] font-sans mb-1 sm:mb-2">
                  12 Liberi Professionisti
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Competenze qualificate e approcci mirati per ogni specifica esigenza, in piena autonomia professionale.
                </p>
              </div>
            </div>

            <div className="bg-[#f4f9fd]/80 rounded-2xl p-4 sm:p-7 border border-[#b3e5fc]/80 hover:border-[#039be5] hover:shadow-lg hover:shadow-[#039be5]/10 transition-all flex md:flex-col items-start gap-3.5 md:gap-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#b3e5fc]/50 text-[#01579b] border border-[#039be5]/30 flex items-center justify-center shrink-0 md:mb-4 shadow-xs">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#0277bd]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#01579b] font-sans mb-1 sm:mb-2">
                  Gestione Diretta Appuntamenti
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Visite concordate direttamente con lo specialista scelto, garantendo contatto immediato e massima riservatezza.
                </p>
              </div>
            </div>

            <div className="bg-[#f4f9fd]/80 rounded-2xl p-4 sm:p-7 border border-[#b3e5fc]/80 hover:border-[#039be5] hover:shadow-lg hover:shadow-[#039be5]/10 transition-all flex md:flex-col items-start gap-3.5 md:gap-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#b3e5fc]/50 text-[#01579b] border border-[#039be5]/30 flex items-center justify-center shrink-0 md:mb-4 shadow-xs">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0277bd]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#01579b] font-sans mb-1 sm:mb-2">
                  Posizione Strategica a Bollate
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In Via Madonnina 17, a breve distanza dalla stazione di Bollate Centro, facilmente raggiungibile in treno o in auto.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-10 text-center">
            <button
              type="button"
              onClick={() => onNavigate('/lo-studio')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0277bd] hover:text-[#039be5] focus-ring py-1.5 px-3 rounded-xl hover:bg-[#b3e5fc]/25 transition-colors"
            >
              <span>Approfondisci la presentazione dello studio</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#039be5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 2.5 GLI SPAZI DELLO STUDIO (FOTO E AMBIENTI) */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-[#f4f9fd] to-white border-t border-[#b3e5fc]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0277bd] inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b3e5fc]/35 border border-[#039be5]/20">
              <Camera className="w-3.5 h-3.5 text-[#039be5]" />
              <span>La Nostra Sede a Bollate</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#01579b] tracking-tight font-heading">
              Gli ambienti e gli spazi dello studio
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Un contesto curato, riservato e rilassante nel centro di Bollate, progettato per accogliere visite specialistiche, sedute riabilitative e consulenze per il benessere della persona.
            </p>
          </div>

          {/* Studio Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Photo 1: Accoglienza & Ricevimento */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-[#b3e5fc]/80 hover:border-[#039be5] shadow-sm hover:shadow-xl hover:shadow-[#039be5]/10 transition-all flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/images/studio/studio-hero.jpg"
                  alt="Area Accoglienza Studio Medico 4M Bollate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#01579b] border border-[#b3e5fc] shadow-xs">
                  Accoglienza & Ricevimento
                </span>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#01579b] mb-1.5">
                    Ambiente Luminoso e Confortevole
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spazi pensati per accogliere con tranquillità, offrendo la massima privacy e rispetto dei tempi di ciascun paziente prima dell'incontro con il medico.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#b3e5fc]/40 flex items-center justify-between text-[11px] text-[#0277bd] font-medium">
                  <span>Luce naturale & comfort</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#039be5]" />
                </div>
              </div>
            </div>

            {/* Photo 2: Ambulatorio & Trattamenti */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-[#b3e5fc]/80 hover:border-[#039be5] shadow-sm hover:shadow-xl hover:shadow-[#039be5]/10 transition-all flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/images/studio/studio-room.jpg"
                  alt="Ambulatorio e sala visite Studio Medico 4M Bollate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#01579b] border border-[#b3e5fc] shadow-xs">
                  Ambulatori & Trattamenti
                </span>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#01579b] mb-1.5">
                    Spazi Visite e Sedute Specialistici
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sale attrezzate per visite ortopediche, valutazioni posturali, osteopatia, fisioterapia e percorsi nutrizionali e psicologici individuali.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#b3e5fc]/40 flex items-center justify-between text-[11px] text-[#0277bd] font-medium">
                  <span>Attrezzature igienizzate</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#039be5]" />
                </div>
              </div>
            </div>

            {/* Photo 3: Spazio Predisposto per le Foto dello Studio */}
            <div className="group bg-gradient-to-br from-white to-[#f4f9fd] rounded-3xl overflow-hidden border-2 border-dashed border-[#b3e5fc] hover:border-[#039be5] shadow-sm hover:shadow-lg transition-all flex flex-col p-6 text-center justify-between">
              <div className="flex-1 flex flex-col items-center justify-center py-6">
                <div className="w-14 h-14 rounded-2xl bg-[#b3e5fc]/40 border border-[#039be5]/30 flex items-center justify-center text-[#01579b] mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="w-7 h-7 text-[#0277bd]" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#b3e5fc]/40 text-[#01579b] text-[10px] font-bold tracking-wide uppercase mb-2">
                  Galleria in Aggiornamento
                </span>
                <h3 className="text-base font-bold text-[#01579b] mb-2">
                  Nuove Fotografie della Sede
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                  Spazio predisposto per ulteriori scatti degli ambulatori specialistici e dei particolari della sede di Via Madonnina 17.
                </p>
              </div>

              <div className="pt-4 border-t border-[#b3e5fc]/40 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#039be5]" />
                <span>Aggiornato con le foto ufficiali dello studio</span>
              </div>
            </div>

          </div>

          {/* Quick Info Strip */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-[#b3e5fc] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#0277bd] shrink-0" />
              <p>
                La sede si trova in <strong>Via Madonnina 17 a Bollate</strong>, facilmente raggiungibile a piedi dalla stazione o con parcheggi auto vicini.
              </p>
            </div>
            <a
              href={STUDIO_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#01579b] hover:text-[#039be5] font-bold inline-flex items-center gap-1 underline whitespace-nowrap"
            >
              <span>Vedi posizione esatta</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 3. PANORAMICA DEI SERVIZI (I NOSTRI SERVIZI DAL VOLANTINO) */}
      <section id="servizi" className="py-16 sm:py-20 bg-gradient-to-b from-[#f4f9fd] to-white border-t border-[#b3e5fc]/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0277bd]">
              I Nostri Servizi
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#01579b] tracking-tight font-heading">
              Ambiti di competenza e prestazioni disponibili
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Dalla valutazione ortopedica alla riabilitazione, dal supporto psicologico ai percorsi olistici e nutrizionali: le 8 aree di attività svolte dai professionisti presso la sede di Bollate.
            </p>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDIO_SERVICES.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onSelect={(s) => setActiveServiceModal(s)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01579b]/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#b3e5fc] relative animate-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-[#01579b] p-1.5 rounded-lg focus-ring"
              aria-label="Chiudi dettaglio servizio"
            >
              ✕
            </button>
            <div className="mb-4">
              <span className="text-xs font-mono font-bold text-[#039be5] block mb-1">
                Servizio #{String(activeServiceModal.flyerOrder).padStart(2, '0')}
              </span>
              <h3 className="text-2xl font-normal text-[#01579b] font-heading">
                {activeServiceModal.title}
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeServiceModal.fullDescription}
            </p>
            <div className="bg-[#b3e5fc]/30 rounded-2xl p-4 border border-[#b3e5fc] text-xs text-[#01579b] mb-6">
              <p className="font-bold mb-1">Punti chiave:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {activeServiceModal.keyPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveServiceModal(null);
                  const el = document.getElementById('professionisti');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] rounded-xl transition-all shadow-sm"
              >
                Vedi i professionisti
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. PRESENTAZIONE DEI PROFESSIONISTI */}
      <section id="professionisti" className="py-16 sm:py-24 bg-white border-t border-[#b3e5fc]/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0277bd]">
                I Professionisti
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#01579b] tracking-tight font-heading mt-1">
                12 Specialisti al tuo fianco
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Ciascun professionista opera in autonomia. Seleziona una disciplina per individuare il profilo più adatto alle tue esigenze.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/professionisti')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0277bd] hover:text-[#039be5] focus-ring py-2 px-3 rounded-xl hover:bg-[#b3e5fc]/25 transition-colors"
            >
              <span>Elenco completo dei 12 profili</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#039be5]" />
            </button>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {CATEGORIES_CONFIG.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#01579b] to-[#0277bd] text-white shadow-md shadow-[#0277bd]/25 scale-[1.02]'
                    : 'bg-white text-[#01579b] hover:bg-[#b3e5fc]/25 hover:text-[#0277bd] border border-[#b3e5fc]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 12 Professionals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProfessionals.map((prof) => (
              <ProfessionalCard
                key={prof.id}
                professional={prof}
                onViewProfile={(slug) => onSelectProfessional(slug)}
              />
            ))}
          </div>

          {/* Transparency note below the grid */}
          <div className="mt-12 p-6 rounded-2xl bg-[#b3e5fc]/25 border border-[#b3e5fc] text-xs text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-[#0277bd] shrink-0" />
              <p>
                Hai bisogno di contattare uno specialista? Clicca su <strong>Visualizza profilo</strong> per conoscere orari e modalità di contatto diretto.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/contatti')}
              className="text-xs font-bold text-[#01579b] hover:text-[#039be5] underline whitespace-nowrap"
            >
              Come funzionano i contatti →
            </button>
          </div>

        </div>
      </section>

      {/* 5. SEZIONE INFORMATIVA SUL FUNZIONAMENTO DEI CONTATTI */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#01579b] via-[#0277bd] to-[#01579b] text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#039be5]/20 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b3e5fc]">
            Trasparenza e Organizzazione
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal font-heading tracking-tight text-white max-w-2xl mx-auto">
            {STUDIO_MODEL_NOTE.title}
          </h2>
          <p className="text-sm sm:text-base text-sky-100 leading-relaxed max-w-2xl mx-auto">
            {STUDIO_MODEL_NOTE.summary}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/contatti')}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold text-[#01579b] bg-[#b3e5fc] hover:bg-white active:scale-[0.99] rounded-xl transition-all shadow-lg shadow-[#01579b]/40 focus-ring"
            >
              <span>Leggi tutti i dettagli sui contatti</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0277bd]" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. POSIZIONE E INDICAZIONI STRADALI (DOVE TROVARCI DAL VOLANTINO) */}
      <section id="sede" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Address and Access Notes */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0277bd]">
                Dove Trovarci
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#01579b] tracking-tight font-heading">
                Nel cuore di Bollate
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Lo Studio Medico 4M si trova in <strong>{STUDIO_CONFIG.address}</strong>. La sede è facilmente accessibile da tutta l'area a nord di Milano, Rho, Novate Milanese, Baranzate, Senago e Cormano.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#f4f9fd] border border-[#b3e5fc]/80 flex items-start gap-3.5 hover:border-[#039be5] transition-colors">
                  <MapPin className="w-5 h-5 text-[#0277bd] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-[#01579b] uppercase tracking-wider">Indirizzo Ufficiale</h3>
                    <p className="text-sm text-slate-800 font-medium mt-0.5">{STUDIO_CONFIG.address}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f4f9fd] border border-[#b3e5fc]/80 flex items-start gap-3.5 hover:border-[#039be5] transition-colors">
                  <Navigation className="w-5 h-5 text-[#0277bd] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-[#01579b] uppercase tracking-wider">Come Raggiungerci</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      <strong>In treno:</strong> a pochi minuti a piedi dalla fermata <em>Bollate Centro</em> (linee ferroviarie S1 e S3 Trenord per Milano Cadorna / Saronno).
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      <strong>In auto:</strong> comodo accesso dalle principali arterie SP46 e tangenziale nord; parcheggi pubblici disponibili nelle immediate vicinanze di Via Madonnina.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={STUDIO_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] active:scale-[0.99] rounded-xl transition-all shadow-md shadow-[#0277bd]/25 focus-ring"
                >
                  <span>Apri navigatore Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#b3e5fc]" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Map Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#b3e5fc] shadow-lg bg-[#f4f9fd] aspect-[4/3] flex flex-col justify-between p-6">
                
                {/* Visual Map Representation */}
                <div className="absolute inset-0 bg-[#f4f9fd] flex items-center justify-center">
                  <div className="w-full h-full opacity-60 bg-[radial-gradient(#039be5_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
                </div>

                {/* Pin Card overlay */}
                <div className="relative z-10 bg-white/95 backdrop-blur-sm p-5 rounded-2xl border border-[#b3e5fc] shadow-md max-w-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#01579b] font-bold text-sm">
                    <MapPin className="w-4 h-4 text-[#039be5]" />
                    <span>Studio Medico 4M</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Via Madonnina 17, Bollate (MI)
                  </p>
                  <p className="text-[11px] text-[#0277bd] font-medium">
                    Coordinate certificate nel centro di Bollate
                  </p>
                </div>

                {/* Privacy-friendly Click-to-Action */}
                <div className="relative z-10 text-right">
                  <a
                    href={STUDIO_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#01579b] bg-white hover:bg-[#b3e5fc]/25 border-2 border-[#b3e5fc] hover:border-[#039be5] rounded-xl shadow-xs transition-all"
                  >
                    <span>Visualizza mappa dettagliata</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#039be5]" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION FINALE */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#b3e5fc]/30 via-white to-[#b3e5fc]/30 border-t border-[#b3e5fc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-normal text-[#01579b] tracking-tight font-heading">
            Desideri maggiori informazioni sui professionisti o sulla sede?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Visita la sezione contatti per scoprire le modalità di accesso, visualizzare i recapiti diretti o inviare una richiesta informativa generale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/professionisti')}
              className="px-7 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] rounded-xl transition-all shadow-md shadow-[#0277bd]/25 focus-ring"
            >
              Consulta i 12 professionisti
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contatti')}
              className="px-6 py-3.5 text-xs font-bold text-[#01579b] bg-white hover:bg-[#b3e5fc]/25 border-2 border-[#b3e5fc] hover:border-[#039be5] rounded-xl transition-all shadow-xs focus-ring"
            >
              Pagina contatti e indicazioni
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
