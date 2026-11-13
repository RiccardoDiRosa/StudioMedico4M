import React, { useState } from 'react';
import { STUDIO_CONFIG, STUDIO_MODEL_NOTE } from '../data/studio';
import { STUDIO_SERVICES } from '../data/services';
import { PROFESSIONISTI, CATEGORIES_CONFIG } from '../data/professionisti';
import { ServiceCard } from '../components/ServiceCard';
import { ProfessionalCard } from '../components/ProfessionalCard';
import { StudioPhotoCarousel } from '../components/StudioPhotoCarousel';
import { HolisticEmblem } from '../components/HolisticEmblem';
import { WaveDivider } from '../components/WaveDivider';
import { SEOHead } from '../components/SEOHead';
import { 
  MapPin, 
  ArrowRight, 
  Users, 
  Navigation, 
  Clock, 
  HelpCircle,
  ExternalLink,
  Camera
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProfessional: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProfessional }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

  const handleHeroCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const element = document.getElementById('professionisti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured Data Schema for Local Medical Practice
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Studio Professionale 4M',
    'description': 'Studio Professionale 4M a Bollate (MI). Studio di liberi professionisti per la salute e il benessere dove trovi specialisti indipendenti.',
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
      'name': 'Servizi Studio Professionale 4M',
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
        title="Studio Professionale 4M a Bollate | Professionisti e servizi per la salute"
        description="Studio Professionale 4M a Bollate (MI): studio di liberi professionisti per la salute e il benessere. Ortopedia, Fisioterapia, Osteopatia, Nutrizione, Psicologia."
        canonicalPath="/"
        schemaJson={homeSchema}
      />

      {/* 1. HERO SECTION - LUMINOUS LIGHT-AZURE IMMERSIVE ARCHITECTURAL SHOWCASE */}
      <section className="relative bg-[#f0f9ff] overflow-hidden group/hero border-b border-[#b3e5fc]/60">
        
        {/* ========================================================= */}
        {/* MOBILE FULL-SCREEN HERO VIEW (< lg)                       */}
        {/* ========================================================= */}
        <div className="block lg:hidden relative flex flex-col bg-gradient-to-b from-[#e0f2fe]/60 via-[#f0f9ff] to-white">
          
          {/* Upper/Middle Immersive Studio Photo with Gentle Edge Blend and Wide Framing */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[380px] overflow-hidden shrink-0">
            <img
              src="/images/studio/studiohome.webp"
              alt="Interni, ambulatori e spazi specialistici dello Studio Professionale 4M a Bollate (Milano)"
              className="w-full h-full object-cover object-[60%_center]"
              loading="eager"
              fetchPriority="high"
            />
            {/* Top very light atmospheric fade */}
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#e0f2fe]/30 to-transparent pointer-events-none" />
            
            {/* Bottom delicate feathered edge (soft transition without hard cut) */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#f0f9ff] via-[#f0f9ff]/40 to-transparent pointer-events-none" />

            {/* Floating Top Location Pill over the image (compact & discreet) */}
            <div className="absolute top-2.5 left-3 z-10">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#b3e5fc]/80 text-[10px] font-semibold text-[#01579b] shadow-xs">
                <MapPin className="w-2.5 h-2.5 text-[#039be5] shrink-0" aria-hidden="true" />
                <span>Bollate · Via Madonnina 17</span>
              </div>
            </div>
          </div>

          {/* Lower Editorial Stage (Luminous light-blue background, compact rhythm) */}
          <div className="relative z-10 px-4 pt-2 pb-4 flex flex-col space-y-2.5">
            
            {/* Monumental Mobile Headline & Payoff */}
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#0277bd] mb-0.5">
                Studio Professionale · Salute e Benessere
              </span>
              <h1 className="text-3xl sm:text-4xl font-normal text-[#01579b] tracking-tight leading-[1.08] font-heading">
                Studio{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#01579b] via-[#0277bd] to-[#039be5] font-brand tracking-wide inline-flex items-baseline lining-nums">
                  <span>4</span><span>M</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#0277bd] font-serif italic mt-0.5 font-medium">
                “Dove mente e corpo ritrovano equilibrio”
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                Un unico spazio riservato e accogliente a Bollate dove specialisti della salute e del benessere collaborano per prendersi cura della persona.
              </p>
            </div>

            {/* Mobile Primary CTAs */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#professionisti"
                onClick={(e) => scrollToSection(e, 'professionisti')}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] active:scale-[0.98] rounded-xl shadow-md shadow-[#0277bd]/25 text-center focus-ring"
              >
                <span>I Professionisti</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#b3e5fc]" aria-hidden="true" />
              </a>

              <a
                href={STUDIO_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#01579b] bg-white active:scale-[0.98] border border-[#b3e5fc] rounded-xl shadow-xs text-center focus-ring"
              >
                <Navigation className="w-3.5 h-3.5 text-[#039be5]" aria-hidden="true" />
                <span>Come Arrivare</span>
              </a>
            </div>

            {/* Frosted White/Sky Emblem Card */}
            <div className="p-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-[#b3e5fc] shadow-sm flex items-center gap-3">
              <div className="shrink-0 p-1.5 rounded-xl bg-[#f0f9ff] border border-[#b3e5fc]/60 shadow-2xs">
                <HolisticEmblem size={46} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[13px] font-bold text-[#01579b] leading-tight font-sans">
                  Mente e Corpo in Equilibrio
                </h3>
                <p className="text-xs text-[#0277bd] font-semibold mt-0.5">
                  Approccio integrato alla salute
                </p>
              </div>
            </div>

            {/* Quick-Jump Interactive Specialties Strip */}
            <div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
                {CATEGORIES_CONFIG.filter(c => c.id !== 'all').map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleHeroCategoryClick(cat.id)}
                    className="px-2.5 py-1 rounded-lg bg-white hover:bg-[#b3e5fc]/30 border border-[#b3e5fc] text-[10px] font-semibold text-[#01579b] whitespace-nowrap shrink-0 transition-colors shadow-2xs"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP FULL-SCREEN HERO VIEW (hidden lg:flex)            */}
        {/* ========================================================= */}
        <div className="hidden lg:flex relative min-h-[calc(100vh-4.5rem)] flex-col justify-between bg-gradient-to-br from-[#e0f2fe]/90 via-[#f0f9ff] to-white">
          
          {/* Full-Bleed Background Photograph: natural wide aspect ratio shifted right so the orange wall and logo shine */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#e0f2fe]">
            <img
              src="/images/studio/studiohome.webp"
              alt="Interni, ambulatori e spazi specialistici dello Studio Professionale 4M a Bollate (Milano)"
              className="w-full h-full object-contain lg:object-right"
              loading="eager"
              fetchPriority="high"
            />
            
            {/* Luminous Light-Blue Gradient Veil: confined solely to the left text zone, leaving the right side (orange wall & logo) 100% crisp and clear */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e0f2fe] via-[#e0f2fe]/85 via-32% to-transparent to-55% pointer-events-none" />
            
            {/* Top & bottom soft atmospheric edge blend — transparent on the right to keep the orange wall bright */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f0f9ff]/90 via-[#f0f9ff]/30 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#e0f2fe]/40 to-transparent pointer-events-none" />

            {/* Subtle ambient light-cyan radial glow on the bottom left */}
            <div className="absolute -bottom-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-[#039be5]/10 blur-3xl pointer-events-none" />
          </div>

          {/* Main Desktop Content Stage */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-8 xl:pt-10 pb-6 w-full flex-1 flex flex-col justify-between">
            
            {/* Upper/Center Grid */}
            <div className="grid grid-cols-12 gap-8 items-center my-auto py-3">
              
              {/* Left Column: Editorial Presentation over the Soft Light-Azure Fade */}
              <div className="col-span-7 xl:col-span-6 space-y-4">
                
                {/* Frosted Light Location Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-xl border border-[#b3e5fc] text-[11px] font-semibold tracking-wide text-[#01579b] shadow-2xs">
                  <MapPin className="w-3 h-3 text-[#039be5]" aria-hidden="true" />
                  <span>Bollate (Milano) · Via Madonnina 17</span>
                </div>

                {/* Monumental Display Headline */}
                <div className="space-y-1.5">
                  <span className="block text-xs font-bold uppercase tracking-[0.25em] text-[#0277bd]">
                    Studio Professionale Multidisciplinare
                  </span>
                  <h1 className="text-5xl xl:text-7xl font-normal text-[#01579b] tracking-tight leading-[1.06] font-heading drop-shadow-xs">
                    Studio{' '}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#01579b] via-[#0277bd] to-[#039be5] font-brand tracking-wide inline-flex items-baseline lining-nums">
                      <span>4</span><span>M</span>
                    </span>
                  </h1>
                </div>

                {/* Poetic Payoff with Accent Line */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[2px] bg-gradient-to-r from-[#039be5] to-transparent rounded-full" />
                  <p className="text-2xl xl:text-3xl text-[#0277bd] font-serif italic tracking-tight font-medium">
                    “Dove mente e corpo ritrovano equilibrio”
                  </p>
                </div>

                {/* Editorial Lead Paragraph */}
                <p className="text-base xl:text-lg text-slate-700 leading-relaxed max-w-xl font-normal">
                  Presso lo Studio Professionale 4M a Bollate trovi specialisti che operano in diversi ambiti della salute, della riabilitazione e del benessere psicofisico, in un ambiente moderno, riservato e facilmente accessibile.
                </p>

                {/* High-Impact Action Buttons: perfectly aligned with equal height and clear prominence */}
                <div className="flex flex-wrap items-stretch gap-3 pt-1">
                  <a
                    href="#professionisti"
                    onClick={(e) => scrollToSection(e, 'professionisti')}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] active:scale-[0.99] rounded-xl transition-all shadow-md shadow-[#0277bd]/25 hover:shadow-lg hover:shadow-[#039be5]/30 focus-ring whitespace-nowrap group/btn"
                  >
                    <span>Scopri i Professionisti</span>
                    <ArrowRight className="w-4 h-4 text-[#b3e5fc] group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>

                  <a
                    href="#servizi"
                    onClick={(e) => scrollToSection(e, 'servizi')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#01579b] bg-white/95 hover:bg-white backdrop-blur-xl active:scale-[0.99] border border-[#b3e5fc] hover:border-[#0277bd] rounded-xl transition-all shadow-xs focus-ring whitespace-nowrap"
                  >
                    <span>Esplora i Servizi</span>
                  </a>

                  <a
                    href={STUDIO_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#0284c7] to-[#039be5] hover:from-[#039be5] hover:to-[#0284c7] active:scale-[0.99] border border-[#38bdf8]/40 rounded-xl transition-all shadow-md shadow-[#0284c7]/25 hover:shadow-lg hover:shadow-[#039be5]/35 focus-ring whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4 text-white" aria-hidden="true" />
                    <span>Come Raggiungerci</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Empty to allow the studio room photograph to shine completely */}
              <div className="col-span-5 xl:col-span-6" />

            </div>

            {/* Bottom Floating Glassmorphic Console: Light-Blue/White Theme */}
            <div className="mt-4 rounded-2xl bg-white/85 backdrop-blur-2xl border border-[#b3e5fc] p-3 xl:p-3.5 shadow-xl shadow-[#0284c7]/10 flex items-center justify-between gap-4">
              
              {/* Left: Holistic Emblem & Identity */}
              <div className="flex items-center gap-3 shrink-0 pr-4 border-r border-[#b3e5fc]/70">
                <div className="shrink-0 p-1.5 rounded-xl bg-[#f0f9ff] border border-[#b3e5fc]/60 shadow-xs">
                  <HolisticEmblem size={52} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#01579b] leading-tight font-sans">
                    Mente e Corpo in Equilibrio
                  </h2>
                  <p className="text-xs text-[#0277bd] font-semibold mt-1">
                    Approccio integrato alla salute
                  </p>
                </div>
              </div>

              {/* Right: Interactive Quick-Select Specialties */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#01579b]">
                    Filtra subito per area specialistica:
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {CATEGORIES_CONFIG.filter(c => c.id !== 'all').map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleHeroCategoryClick(cat.id)}
                      className="px-2.5 py-1 rounded-lg bg-white hover:bg-gradient-to-r hover:from-[#01579b] hover:to-[#0277bd] text-[#01579b] hover:text-white border border-[#b3e5fc] hover:border-[#01579b] text-[11px] font-semibold transition-all duration-200 shadow-2xs hover:shadow-md active:scale-95 cursor-pointer"
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 2. PANORAMICA DEI SERVIZI (I NOSTRI SERVIZI) */}
      <section id="servizi" className="py-10 sm:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-4 mb-6 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0277bd]">
              I Nostri Servizi
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-[#01579b] tracking-tight font-heading">
              Ambiti di competenza e prestazioni disponibili
            </h2>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Dalla valutazione ortopedica alla riabilitazione, dal supporto psicologico ai percorsi olistici e nutrizionali: le 8 aree di attività svolte dai professionisti presso la sede di Bollate.
            </p>
          </div>

          {/* 8 Services Grid: 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {STUDIO_SERVICES.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRESENTAZIONE DEI PROFESSIONISTI */}
      <section id="professionisti" className="py-10 sm:py-24 bg-gradient-to-b from-[#f4f9fd] to-white border-t border-[#b3e5fc]/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 mb-4 sm:mb-10">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0277bd]">
                I Professionisti
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#01579b] tracking-tight font-heading mt-1">
                I Professionisti al tuo fianco
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2 max-w-xl">
                Ciascun professionista opera in autonomia. Seleziona una disciplina per individuare il profilo più adatto alle tue esigenze.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/professionisti')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0277bd] hover:text-[#039be5] focus-ring py-1.5 px-3 rounded-xl hover:bg-[#b3e5fc]/25 transition-colors self-start md:self-auto"
            >
              <span>Elenco completo dei professionisti</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#039be5]" />
            </button>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2.5 sm:pb-4 mb-4 sm:mb-8 scrollbar-none">
            {CATEGORIES_CONFIG.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#01579b] to-[#0277bd] text-white shadow-md shadow-[#0277bd]/25 scale-[1.02]'
                    : 'bg-white text-[#01579b] hover:bg-[#b3e5fc]/25 hover:text-[#0277bd] border border-[#b3e5fc]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 12 Professionals Grid: 2 columns on mobile, 3/4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
            {filteredProfessionals.map((prof) => (
              <ProfessionalCard
                key={prof.id}
                professional={prof}
                onViewProfile={(slug) => onSelectProfessional(slug)}
              />
            ))}
          </div>

          {/* Transparency note below the grid */}
          <div className="mt-6 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-[#b3e5fc]/25 border border-[#b3e5fc] text-xs text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
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

      {/* 4. SEZIONE INFORMATIVA SUL FUNZIONAMENTO DEI CONTATTI (TRASPARENZA E ORGANIZZAZIONE) */}
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

      {/* 5. POSIZIONE E INDICAZIONI STRADALI (MAPPA E DOVE TROVARCI) */}
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
                Lo Studio Professionale 4M si trova in <strong>{STUDIO_CONFIG.address}</strong>. La sede è facilmente accessibile da tutta l'area a nord di Milano, Rho, Novate Milanese, Baranzate, Senago e Cormano.
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

            {/* Right Column: Interactive Google Maps Preview */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#b3e5fc] shadow-xl bg-white flex flex-col">
                
                {/* Header bar sopra la mappa - zero sovrapposizioni visive */}
                <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-white border-b border-[#b3e5fc]/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#b3e5fc]/40 border border-[#039be5]/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#01579b]" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#01579b] block leading-tight">
                        Studio Professionale 4M · Bollate
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-500 block mt-0.5">
                        Via Madonnina 17 (a pochi minuti dalla stazione)
                      </span>
                    </div>
                  </div>

                  <a
                    href={STUDIO_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#01579b] bg-[#b3e5fc]/30 hover:bg-[#b3e5fc]/60 border border-[#b3e5fc] rounded-xl transition-all shrink-0 focus-ring"
                  >
                    <span>Apri in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#039be5]" />
                  </a>
                </div>

                {/* Embedded Interactive Google Maps senza elementi sovrapposti */}
                <div className="w-full h-[360px] sm:h-[440px] bg-slate-100">
                  <iframe
                    title="Posizione di Studio 4M su Google Maps"
                    src={STUDIO_CONFIG.googleMapsEmbedUrl || "https://maps.google.com/maps?q=Via%20Madonnina%2017%2C%2020021%20Bollate%20MI&t=&z=16&ie=UTF8&iwloc=&output=embed"}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. GLI SPAZI DELLO STUDIO (FOTO E AMBIENTI) */}
      <section className="py-10 sm:py-20 bg-gradient-to-b from-white via-[#f4f9fd] to-white border-t border-[#b3e5fc]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-3 mb-6 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0277bd] inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b3e5fc]/35 border border-[#039be5]/20">
              <Camera className="w-3.5 h-3.5 text-[#039be5]" />
              <span>La Nostra Sede a Bollate</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#01579b] tracking-tight font-heading">
              Gli ambienti e gli spazi dello studio
            </h2>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Un contesto curato, riservato e rilassante nel centro di Bollate, progettato per accogliere visite specialistiche, sedute riabilitative e consulenze per il benessere della persona.
            </p>
          </div>

          {/* Studio Photos Interactive Carousel with 4s autoplay & arrows */}
          <StudioPhotoCarousel />

          {/* Quick Info Strip */}
          <div className="mt-6 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-[#b3e5fc] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-700">
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

      {/* 7. PRESENTAZIONE DELLO STUDIO (CHI SIAMO) */}
      <section className="py-10 sm:py-20 bg-white border-t border-[#b3e5fc]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-4 mb-6 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0277bd]">
              Chi Siamo · Studio Professionale
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-[#01579b] tracking-tight font-heading">
              Uno spazio dedicato al benessere di mente e corpo
            </h2>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Studio 4M è uno studio professionale nato con l'intento di offrire a Bollate una sede confortevole dove differenti discipline sanitarie e del benessere convivono armoniosamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-8">
            <div className="bg-[#f4f9fd]/80 rounded-2xl p-4 sm:p-7 border border-[#b3e5fc]/80 hover:border-[#039be5] hover:shadow-lg hover:shadow-[#039be5]/10 transition-all flex md:flex-col items-start gap-3.5 md:gap-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#b3e5fc]/50 text-[#01579b] border border-[#039be5]/30 flex items-center justify-center shrink-0 md:mb-4 shadow-xs">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#0277bd]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#01579b] font-sans mb-1 sm:mb-2">
                  Liberi Professionisti
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

      {/* 8. CALL TO ACTION FINALE */}
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
              Consulta i professionisti
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
