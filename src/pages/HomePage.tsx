import React, { useState } from 'react';
import { STUDIO_CONFIG, STUDIO_MODEL_NOTE } from '../data/studio';
import { STUDIO_SERVICES } from '../data/services';
import { PROFESSIONISTI, CATEGORIES_CONFIG } from '../data/professionisti';
import { Professional, ServiceItem, ProfessionalCategory } from '../types';
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
  ShieldCheck, 
  Navigation, 
  Clock, 
  HelpCircle,
  ExternalLink
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
      <section className="relative bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pt-10 sm:pt-16 pb-16 lg:pb-24 overflow-hidden">
        {/* Subtle background decorative shapes */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 rounded-full bg-blue-100/40 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Presentation & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Unboxed Location Kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-800">
                <MapPin className="w-4 h-4 text-sky-600" aria-hidden="true" />
                <span>Bollate (Milano) · Via Madonnina 17</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.15] text-balance font-heading">
                Studio Medico <span className="font-semibold text-sky-900">4M</span>
              </h1>

              {/* Payoff */}
              <p className="text-xl sm:text-2xl text-sky-800/90 font-serif italic tracking-tight">
                “Dove mente e corpo ritrovano equilibrio”
              </p>

              {/* Verified Editorial Copy */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Studio Medico 4M ospita professionisti che operano in diversi ambiti della salute e del benessere. Scopri i servizi disponibili e le competenze dei professionisti presenti nella sede di Bollate.
              </p>

              {/* Transparent Clinic Model Note */}
              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs flex items-start gap-3 text-xs text-slate-600 max-w-xl">
                <Users className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  Sede condivisa da <strong>12 liberi professionisti indipendenti</strong>. Ciascuno gestisce i propri appuntamenti in autonomia, senza segreteria centralizzata.
                </p>
              </div>

              {/* Action Buttons: 2 Distinct CTAs as required */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#professionisti"
                  onClick={(e) => scrollToSection(e, 'professionisti')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-sky-950 active:scale-[0.99] rounded-xl transition-all shadow-sm focus-ring whitespace-nowrap"
                >
                  <span>Scopri i professionisti</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" aria-hidden="true" />
                </a>

                <a
                  href={STUDIO_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 active:scale-[0.99] border border-slate-300 rounded-xl transition-all shadow-xs focus-ring whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 text-sky-600" aria-hidden="true" />
                  <span>Come raggiungerci</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Composition inspired by the flyer */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                
                {/* Main Circular Visual Badge inspired by the flyer */}
                <div className="relative aspect-square rounded-full p-3 bg-gradient-to-tr from-sky-600 via-sky-400 to-sky-200 shadow-xl shadow-sky-900/10 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-8 text-center relative overflow-hidden border-4 border-white">
                    
                    {/* Background subtle waves inside badge */}
                    <div className="absolute inset-x-0 bottom-0 opacity-15 pointer-events-none">
                      <WaveDivider fillColor="#0284C7" height={40} />
                    </div>

                    {/* Holistic Emblem in top portion */}
                    <HolisticEmblem size={130} className="mb-4" />

                    <span className="text-xs uppercase tracking-widest font-semibold text-sky-800">
                      Studio Medico 4M
                    </span>
                    <span className="text-sm font-serif italic text-slate-600 mt-1 max-w-[220px]">
                      Equilibrio, prevenzione e benessere
                    </span>
                  </div>
                </div>

                {/* Floating pill badge for the 12 professionals */}
                <div className="absolute -bottom-4 -left-2 sm:bottom-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200/90 shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 block font-sans">
                      12 Professionisti
                    </span>
                    <span className="text-xs text-slate-500">
                      Attività sanitarie e del benessere
                    </span>
                  </div>
                </div>

                {/* Floating pill badge for the 8 services */}
                <div className="absolute -top-3 -right-2 sm:top-2 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/90 shadow-md flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-semibold text-slate-800">
                    8 Aree di Servizio
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider position="bottom" fillColor="#FFFFFF" height={42} className="bg-slate-50" />

      {/* 2. PRESENTAZIONE DELLO STUDIO */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">
              Chi Siamo
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight font-heading">
              Uno spazio dedicato al benessere di mente e corpo
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Studio Medico 4M nasce con l'intento di offrire a Bollate una sede confortevole e professionale dove differenti discipline sanitarie e del benessere convivono armoniosamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-800 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 font-sans mb-2">
                12 Liberi Professionisti
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                I professionisti che operano presso lo studio esercitano individualmente la propria attività, mettendo a disposizione competenze qualificate e approcci mirati per ogni specifica esigenza.
              </p>
            </div>

            <div className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-800 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 font-sans mb-2">
                Gestione Diretta Appuntamenti
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Non essendovi una segreteria unificata, le visite vengono concordate direttamente con il professionista scelto, garantendo contatto immediato e massima riservatezza.
              </p>
            </div>

            <div className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-800 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 font-sans mb-2">
                Posizione Strategica a Bollate
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Situato in Via Madonnina 17, lo studio è facilmente raggiungibile sia in automobile che con i mezzi pubblici, a breve distanza dalla stazione ferroviaria di Bollate Centro.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => onNavigate('/lo-studio')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 hover:text-sky-950 focus-ring py-2 px-4 rounded-lg hover:bg-sky-50 transition-colors"
            >
              <span>Approfondisci la presentazione dello studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. PANORAMICA DEI SERVIZI (I NOSTRI SERVIZI DAL VOLANTINO) */}
      <section id="servizi" className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">
              I Nostri Servizi
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight font-heading">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg focus-ring"
              aria-label="Chiudi dettaglio servizio"
            >
              ✕
            </button>
            <div className="mb-4">
              <span className="text-xs font-mono text-sky-700 block mb-1">
                Servizio #{String(activeServiceModal.flyerOrder).padStart(2, '0')}
              </span>
              <h3 className="text-2xl font-normal text-slate-900 font-heading">
                {activeServiceModal.title}
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeServiceModal.fullDescription}
            </p>
            <div className="bg-sky-50/80 rounded-xl p-4 border border-sky-100 text-xs text-sky-950 mb-6">
              <p className="font-semibold mb-1">Punti chiave:</p>
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
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-950 rounded-lg transition-colors"
              >
                Vedi i professionisti
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. PRESENTAZIONE DEI PROFESSIONISTI */}
      <section id="professionisti" className="py-16 sm:py-24 bg-white border-t border-slate-200/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">
                I Professionisti
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight font-heading mt-1">
                12 Specialisti al tuo fianco
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Ciascun professionista opera in autonomia. Seleziona una disciplina per individuare il profilo più adatto alle tue esigenze.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/professionisti')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-950 focus-ring py-2 px-3 rounded-lg"
            >
              <span>Elenco completo dei 12 profili</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Category Filter Tabs (Single-line, anti-slop) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {CATEGORIES_CONFIG.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
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
          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-sky-700 shrink-0" />
              <p>
                Hai bisogno di contattare uno specialista? Clicca su <strong>Visualizza profilo</strong> per conoscere orari e modalità di contatto diretto.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/contatti')}
              className="text-xs font-semibold text-sky-900 hover:underline whitespace-nowrap"
            >
              Come funzionano i contatti →
            </button>
          </div>

        </div>
      </section>

      {/* 5. SEZIONE INFORMATIVA SUL FUNZIONAMENTO DEI CONTATTI */}
      <section className="py-16 sm:py-20 bg-sky-950 text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
            Trasparenza e Organizzazione
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal font-heading tracking-tight text-white max-w-2xl mx-auto">
            {STUDIO_MODEL_NOTE.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {STUDIO_MODEL_NOTE.summary}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/contatti')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-sky-300 hover:bg-sky-200 active:scale-[0.99] rounded-xl transition-all shadow-sm focus-ring"
            >
              <span>Leggi tutti i dettagli sui contatti</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">
                Dove Trovarci
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight font-heading">
                Nel cuore di Bollate
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Lo Studio Medico 4M si trova in <strong>{STUDIO_CONFIG.address}</strong>. La sede è facilmente accessibile da tutta l'area a nord di Milano, Rho, Novate Milanese, Baranzate, Senago e Cormano.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Indirizzo Ufficiale</h3>
                    <p className="text-sm text-slate-800 font-medium mt-0.5">{STUDIO_CONFIG.address}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3.5">
                  <Navigation className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Come Raggiungerci</h3>
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-950 active:scale-[0.99] rounded-xl transition-all shadow-xs focus-ring"
                >
                  <span>Apri navigatore Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Map Card (Click to load external Google Maps, respecting privacy) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-[4/3] flex flex-col justify-between p-6">
                
                {/* Visual Map Representation */}
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                  <div className="w-full h-full opacity-60 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                {/* Pin Card overlay */}
                <div className="relative z-10 bg-white/95 backdrop-blur-sm p-5 rounded-2xl border border-slate-200 shadow-sm max-w-xs space-y-2">
                  <div className="flex items-center gap-2 text-sky-800 font-semibold text-sm">
                    <MapPin className="w-4 h-4 text-sky-600" />
                    <span>Studio Medico 4M</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Via Madonnina 17, Bollate (MI)
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Coordinate certificate nel centro di Bollate
                  </p>
                </div>

                {/* Privacy-friendly Click-to-Action */}
                <div className="relative z-10 text-right">
                  <a
                    href={STUDIO_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
                  >
                    <span>Visualizza mappa dettagliata</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION FINALE */}
      <section className="py-16 sm:py-20 bg-slate-100/70 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-normal text-slate-900 tracking-tight font-heading">
            Desideri maggiori informazioni sui professionisti o sulla sede?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Visita la sezione contatti per scoprire le modalità di accesso, visualizzare i recapiti diretti o inviare una richiesta informativa generale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/professionisti')}
              className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-950 rounded-xl transition-all shadow-xs focus-ring"
            >
              Consulta i 12 professionisti
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contatti')}
              className="px-6 py-3 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-xs focus-ring"
            >
              Pagina contatti e indicazioni
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
