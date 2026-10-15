import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';
import { STUDIO_CONFIG, STUDIO_MODEL_NOTE } from '../data/studio';
import { 
  MapPin, 
  Clock, 
  Train, 
  Car, 
  ExternalLink, 
  AlertCircle,
  HelpCircle,
  CalendarCheck
} from 'lucide-react';

interface ContattiPageProps {
  onNavigate: (path: string) => void;
}

export const ContattiPage: React.FC<ContattiPageProps> = ({ onNavigate }) => {
  const breadcrumbItems = [
    { label: 'Contatti e Sede' }
  ];

  const contattiSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contatti e indicazioni | Studio Medico 4M Bollate',
    'description': 'Informazioni di contatto e indicazioni stradali per raggiungere lo Studio Medico 4M in Via Madonnina 17 a Bollate (MI).',
    'url': `${STUDIO_CONFIG.canonicalBaseUrl}/contatti`
  };

  return (
    <>
      <SEOHead
        title="Contatti e indicazioni | Studio Medico 4M Bollate"
        description="Come raggiungere lo Studio Medico 4M a Bollate (MI) in Via Madonnina 17. Indicazioni stradali, mezzi pubblici, orari e modulo per informazioni generali."
        canonicalPath="/contatti"
        schemaJson={contattiSchema}
      />

      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        </div>

        {/* Page Header */}
        <section className="pt-8 pb-12 bg-gradient-to-b from-sky-50/50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">
                Informazioni e Raggiungibilità
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight font-heading mt-2 mb-4">
                Contatti e come raggiungerci
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                Tutte le indicazioni per raggiungere la nostra sede a Bollate e le modalità per richiedere informazioni o contattare i liberi professionisti dello studio.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content: Info & Location + Contact Form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column (5 Cols): Sede, Mezzi, Orari, Trasparenza */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card Sede Principale */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-sky-800 font-semibold text-xs uppercase tracking-wider mb-2">
                    <MapPin className="w-4 h-4 text-sky-600" />
                    <span>Sede dello Studio</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 font-sans">
                    {STUDIO_CONFIG.name}
                  </h2>
                  <p className="text-sm text-slate-700 font-medium mt-1">
                    {STUDIO_CONFIG.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Provincia di Milano, Lombardia
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={STUDIO_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-950 active:scale-[0.99] rounded-xl transition-all shadow-xs focus-ring"
                  >
                    <span>Apri percorso su Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  </a>
                </div>

                {/* Mezzi Pubblici & Accesso */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Come arrivare
                  </h3>

                  <div className="flex items-start gap-3 text-xs text-slate-600">
                    <Train className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">In treno (Trenord)</strong>
                      <span>Fermata <em>Bollate Centro</em> (Linee S1 e S3), distante circa 8-10 minuti a piedi dallo studio.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-600">
                    <Car className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">In automobile</strong>
                      <span>Raggiungibile rapidamente dalla Strada Statale 233 Varesina, dalla Tangenziale Nord (A52) e dalla SP46. Parcheggi pubblici nelle vie limitrofe.</span>
                    </div>
                  </div>
                </div>

                {/* Orari di Apertura */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                    <Clock className="w-4 h-4 text-sky-700" />
                    <span>Orari di visita</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {STUDIO_CONFIG.publicHours}
                  </p>
                </div>
              </div>

              {/* Card Organizzazione Appuntamenti */}
              <div className="bg-sky-50/70 rounded-3xl p-6 sm:p-7 border border-sky-100 text-xs text-sky-950 space-y-3">
                <div className="flex items-center gap-2 text-sky-900 font-semibold text-sm">
                  <CalendarCheck className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Come prenotare una visita</span>
                </div>
                <p className="leading-relaxed text-slate-600">
                  {STUDIO_MODEL_NOTE.summary}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('/professionisti')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-950 underline"
                  >
                    <span>Sfoglia le schede dei professionisti</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>

              {/* Note on Public Phone Confirmation */}
              {!STUDIO_CONFIG.publicPhoneConfirmed && (
                <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200/80 text-[11px] text-slate-500 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p>
                    I recapiti telefonici diretti dei singoli specialisti sono consultabili all'interno dei rispettivi profili non appena confermati.
                  </p>
                </div>
              )}

            </div>

            {/* Right Column (7 Cols): Modulo Informazioni Generali */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-2">
                <h2 className="text-2xl font-normal text-slate-900 font-heading">
                  Richiesta di informazioni generali
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Hai una domanda sulla sede, sugli spazi o sui servizi attivi a Bollate? Compila il modulo sottostante.
                </p>
              </div>

              <ContactForm 
                onNavigatePrivacy={() => onNavigate('/privacy-policy')}
              />
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
