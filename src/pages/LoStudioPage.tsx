import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { HolisticEmblem } from '../components/HolisticEmblem';
import { ProfessionalCard } from '../components/ProfessionalCard';
import { PROFESSIONISTI } from '../data/professionisti';
import { STUDIO_CONFIG } from '../data/studio';
import { 
  MapPin, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

interface LoStudioPageProps {
  onNavigate: (path: string) => void;
  onSelectProfessional: (slug: string) => void;
}

export const LoStudioPage: React.FC<LoStudioPageProps> = ({ 
  onNavigate, 
  onSelectProfessional 
}) => {
  const breadcrumbItems = [
    { label: 'Lo Studio' }
  ];

  const loStudioSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'Lo Studio Medico 4M a Bollate | I professionisti e la struttura',
    'description': 'Informazioni sulla struttura di Studio Medico 4M a Bollate (MI). Spazio polifunzionale per 12 professionisti della salute e del benessere.',
    'url': `${STUDIO_CONFIG.canonicalBaseUrl}/lo-studio`
  };

  return (
    <>
      <SEOHead
        title="Lo Studio Medico 4M a Bollate | I professionisti e la sede"
        description="Scopri la filosofia e la struttura di Studio Medico 4M a Bollate (MI). Spazio professionale che ospita 12 specialisti della salute e del benessere psicofisico."
        canonicalPath="/lo-studio"
        schemaJson={loStudioSchema}
      />

      <div className="bg-[#f4f9fd] min-h-screen">
        {/* Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        </div>

        {/* Hero Header Section */}
        <section className="pt-8 pb-14 bg-gradient-to-b from-[#b3e5fc]/35 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0277bd]">
                La Struttura
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#01579b] tracking-tight font-heading mt-2 mb-4">
                Lo Studio Medico 4M a Bollate
              </h1>
              <p className="text-lg text-[#0277bd] font-serif italic mb-4 font-medium">
                “Dove mente e corpo ritrovano equilibrio”
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Studio Medico 4M è uno spazio professionale pensato per accogliere persone che desiderano prendersi cura della propria salute, della riabilitazione fisica e del benessere psicofisico in un contesto ordinato, riservato e facilmente accessibile a Bollate.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Filosofia & Payoff */}
        <section className="py-16 bg-white border-y border-[#b3e5fc]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0277bd]">
                  La Nostra Visione
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal text-[#01579b] tracking-tight font-heading">
                  L'equilibrio integrato tra mente e corpo
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Il payoff dello studio — <em>“Dove mente e corpo ritrovano equilibrio”</em> — sintetizza la volontà di riunire in uno stesso luogo professionisti con percorsi e metodologie complementari.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Il benessere di una persona non è mai un fatto unicamente articolare o meramente psicologico: posture alterate, tensioni emotive, abitudini alimentari e disordini muscolari sono spesso profondamente correlati. L'offerta di discipline differenti permette a ciascun utente di trovare la risposta più coerente al proprio momento di vita.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-[#f4f9fd] border border-[#b3e5fc]/80 hover:border-[#039be5] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#039be5] shrink-0 mt-0.5" />
                    <span>Rispetto della libera professione di ogni specialista</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-[#f4f9fd] border border-[#b3e5fc]/80 hover:border-[#039be5] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#039be5] shrink-0 mt-0.5" />
                    <span>Ambiente accogliente, pulito e riservato</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md rounded-3xl p-2 bg-gradient-to-tr from-[#01579b] via-[#039be5] to-[#b3e5fc] shadow-xl overflow-hidden group">
                  <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-slate-100">
                    <img
                      src="/images/studio/studio-room.jpg"
                      alt="Ambulatorio e sala trattamenti Studio Medico 4M"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01579b]/80 via-transparent to-black/10 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold font-brand tracking-wider uppercase block text-white">
                          Ambulatori & Trattamenti
                        </span>
                        <span className="text-[10px] text-sky-200 block">
                          Igiene, comfort e privacy per ogni visita
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold bg-white/20 backdrop-blur-md px-2 py-0.5 rounded border border-white/30">
                        Via Madonnina 17
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Spazio fisico e modello operativo */}
        <section className="py-16 bg-[#f4f9fd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0277bd]">
                L'Organizzazione
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#01579b] tracking-tight font-heading">
                Come è strutturato lo studio
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Una gestione trasparente, pensata per mettere sempre al centro la relazione diretta tra paziente/cliente e professionista.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              <div className="bg-white rounded-2xl p-7 border border-[#b3e5fc]/80 hover:border-[#039be5] hover:shadow-lg hover:shadow-[#039be5]/10 transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#b3e5fc]/50 text-[#01579b] border border-[#039be5]/30 flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#0277bd]" />
                </div>
                <h3 className="text-base font-bold text-[#01579b] font-sans">
                  Spazi per visite e trattamenti
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lo studio in Via Madonnina 17 dispone di ambienti dedicati alle visite specialistiche, ai trattamenti di fisioterapia, osteopatia e riflessologia, nonché a colloqui di sostegno psicologico in totale riservatezza.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-[#b3e5fc]/80 hover:border-[#039be5] hover:shadow-lg hover:shadow-[#039be5]/10 transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#b3e5fc]/50 text-[#01579b] border border-[#039be5]/30 flex items-center justify-center shadow-xs">
                  <Compass className="w-6 h-6 text-[#0277bd]" />
                </div>
                <h3 className="text-base font-bold text-[#01579b] font-sans">
                  Rapporto diretto e senza intermediari
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Non essendo presente un centralino unico o una segreteria sanitaria centralizzata, l'utente concorda date, orari, quesiti clinici e tariffe direttamente con il libero professionista di riferimento.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Griglia completa dei 12 professionisti */}
        <section className="py-10 sm:py-24 bg-white border-t border-[#b3e5fc]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-6 sm:mb-12">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0277bd]">
                Il Team di Professionisti
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#01579b] tracking-tight font-heading mt-1">
                Tutti i 12 professionisti ospitati
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                Consulta le schede per visualizzare le prestazioni, gli orari indicativi e le note informative relative a ciascun professionista.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
              {PROFESSIONISTI.map((prof) => (
                <ProfessionalCard
                  key={prof.id}
                  professional={prof}
                  onViewProfile={(slug) => onSelectProfessional(slug)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Recapiti e Sede */}
        <section className="py-16 bg-gradient-to-r from-[#b3e5fc]/30 via-white to-[#b3e5fc]/30 border-t border-[#b3e5fc]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-[#b3e5fc]/50 border border-[#039be5]/40 flex items-center justify-center mx-auto shadow-xs">
              <MapPin className="w-7 h-7 text-[#0277bd]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#01579b] font-heading">
              Sede e recapiti a Bollate
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Studio Medico 4M si trova in <strong>{STUDIO_CONFIG.address}</strong>. Per informazioni dettagliate su come raggiungere lo studio o per inviare una richiesta, consulta la pagina dedicata.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/contatti')}
                className="px-7 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] rounded-xl transition-all shadow-md shadow-[#0277bd]/25 focus-ring"
              >
                Vai alla pagina Contatti
              </button>
              <a
                href={STUDIO_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-[#01579b] bg-white hover:bg-[#b3e5fc]/25 border-2 border-[#b3e5fc] hover:border-[#039be5] rounded-xl transition-all shadow-xs focus-ring"
              >
                <span>Indicazioni stradali</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#039be5]" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
