import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { HolisticEmblem } from '../components/HolisticEmblem';
import { WaveDivider } from '../components/WaveDivider';
import { ProfessionalCard } from '../components/ProfessionalCard';
import { PROFESSIONISTI } from '../data/professionisti';
import { STUDIO_CONFIG, STUDIO_MODEL_NOTE } from '../data/studio';
import { 
  HeartHandshake, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
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

      <div className="bg-slate-50 min-h-screen">
        {/* Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        </div>

        {/* Hero Header Section */}
        <section className="pt-8 pb-14 bg-gradient-to-b from-sky-50/50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">
                La Struttura
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight font-heading mt-2 mb-4">
                Lo Studio Medico 4M a Bollate
              </h1>
              <p className="text-lg text-sky-800 font-serif italic mb-4">
                “Dove mente e corpo ritrovano equilibrio”
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Studio Medico 4M è uno spazio professionale pensato per accogliere persone che desiderano prendersi cura della propria salute, della riabilitazione fisica e del benessere psicofisico in un contesto ordinato, riservato e facilmente accessibile a Bollate.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Filosofia & Payoff */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">
                  La Nostra Visione
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight font-heading">
                  L'equilibrio integrato tra mente e corpo
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Il payoff dello studio — <em>“Dove mente e corpo ritrovano equilibrio”</em> — sintetizza la volontà di riunire in uno stesso luogo professionisti con percorsi e metodologie complementari.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Il benessere di una persona non è mai un fatto unicamente articolare o meramente psicologico: posture alterate, tensioni emotive, abitudini alimentari e disordini muscolari sono spesso profondamente correlati. L'offerta di discipline differenti permette a ciascun utente di trovare la risposta più coerente al proprio momento di vita.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                    <span>Rispetto della libera professione di ogni specialista</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                    <span>Ambiente accogliente, pulito e riservato</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="p-8 rounded-3xl bg-sky-50/60 border border-sky-100 flex flex-col items-center text-center max-w-sm">
                  <HolisticEmblem size={150} className="mb-4" />
                  <h3 className="text-base font-semibold text-slate-900 font-sans">
                    Integrazione e Armonia
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Dalla colonna vertebrale all'appoggio plantare, dall'ascolto psicologico all'educazione nutrizionale.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Spazio fisico e modello operativo */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">
                L'Organizzazione
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight font-heading">
                Come è strutturato lo studio
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Una gestione trasparente, pensata per mettere sempre al centro la relazione diretta tra paziente/cliente e professionista.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 font-sans">
                  Spazi per visite e trattamenti
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lo studio in Via Madonnina 17 dispone di ambienti dedicati alle visite specialistiche, ai trattamenti di fisioterapia, osteopatia e riflessologia, nonché a colloqui di sostegno psicologico in totale riservatezza.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 font-sans">
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
        <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">
                Il Team di Professionisti
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight font-heading mt-1">
                Tutti i 12 professionisti ospitati
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Consulta le schede per visualizzare le prestazioni, gli orari indicativi e le note informative relative a ciascun professionista.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        <section className="py-16 bg-slate-100/70 border-t border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <MapPin className="w-8 h-8 text-sky-700 mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 font-heading">
              Sede e recapiti a Bollate
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Studio Medico 4M si trova in <strong>{STUDIO_CONFIG.address}</strong>. Per informazioni dettagliate su come raggiungere lo studio o per inviare una richiesta, consulta la pagina dedicata.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/contatti')}
                className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-950 rounded-xl transition-all shadow-xs focus-ring"
              >
                Vai alla pagina Contatti
              </button>
              <a
                href={STUDIO_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-xs focus-ring"
              >
                <span>Indicazioni stradali</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
