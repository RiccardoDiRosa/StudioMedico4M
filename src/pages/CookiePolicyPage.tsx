import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { STUDIO_CONFIG } from '../data/studio';
import { Cookie, CheckCircle2 } from 'lucide-react';

interface CookiePolicyPageProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onNavigate }) => {
  const breadcrumbItems = [
    { label: 'Informativa sui Cookie' }
  ];

  return (
    <>
      <SEOHead
        title="Informativa sui Cookie | Studio Medico 4M Bollate"
        description="Informativa trasparente sull'uso dei cookie tecnici nel sito web di Studio Medico 4M a Bollate (MI). Zero cookie di profilazione o tracciamento pubblicitario."
        canonicalPath="/cookie-policy"
      />

      <div className="bg-slate-50 min-h-screen pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xs space-y-8">
            
            <div>
              <div className="flex items-center gap-2 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-2">
                <Cookie className="w-4 h-4 text-sky-600" />
                <span>Trasparenza Digitale</span>
              </div>
              <h1 className="text-3xl font-normal text-slate-900 font-heading">
                Informativa sui Cookie
              </h1>
              <p className="text-xs text-slate-500 mt-2">
                Ultimo aggiornamento: Ottobre 2026
              </p>
            </div>

            {/* Zero-Tracking Highlight */}
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-xs text-emerald-950 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-emerald-950">Nessun cookie di profilazione o tracciamento pubblicitario:</p>
                <p className="leading-relaxed">
                  Il sito web di Studio Medico 4M è progettato nel pieno rispetto della privacy dei visitatori: non vengono installati cookie di terze parti a fini commerciali né strumenti invasivi di fingerprinting o profilazione pubblicitaria.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 font-sans">
                  1. Cosa sono i cookie
                </h2>
                <p>
                  I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo dispositivo, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 font-sans">
                  2. Tipologie di cookie impiegate su questo sito
                </h2>
                <p>
                  Questo sito utilizza <strong>esclusivamente cookie tecnici strettamente necessari</strong> al corretto funzionamento della navigazione e alla trasmissione delle informazioni sulla rete elettronica (es. gestione delle sessioni e sicurezza contro gli attacchi informatici).
                </p>
                <p>
                  In conformità alle <em>Linee guida cookie e altri strumenti di tracciamento</em> del Garante per la Protezione dei Dati Personali (10 giugno 2021) e all'art. 122 del Codice Privacy, i cookie tecnici non richiedono la previa acquisizione del consenso dell'utente e non necessitano di banner invasivi.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 font-sans">
                  3. Collegamenti a servizi esterni
                </h2>
                <p>
                  Nel sito sono presenti link esterni a Google Maps per agevolare il calcolo dell'itinerario verso la sede di <strong>{STUDIO_CONFIG.address}</strong>. Tali collegamenti aprono la pagina esterna di Google su richiesta esplicita dell'utente, senza caricare script di tracciamento preventivo sul presente sito.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 font-sans">
                  4. Come gestire o disabilitare i cookie nel browser
                </h2>
                <p>
                  L'utente può comunque gestire le proprie preferenze sui cookie direttamente attraverso le impostazioni del proprio browser (Chrome, Safari, Firefox, Edge), bloccandone l'installazione o cancellando quelli già salvati.
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xs">
              <button
                type="button"
                onClick={() => onNavigate('/')}
                className="text-sky-800 font-semibold hover:underline"
              >
                ← Torna alla Home
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/privacy-policy')}
                className="text-slate-600 hover:text-slate-900"
              >
                Consulta la Privacy Policy →
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
