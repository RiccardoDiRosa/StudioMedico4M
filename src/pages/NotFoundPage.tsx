import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Home, ArrowLeft, Users, MapPin } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Pagina non trovata (404) | Studio Medico 4M Bollate"
        description="La pagina richiesta non è stata trovata. Esplora i servizi e i professionisti di Studio Medico 4M a Bollate."
        canonicalPath="/404"
        noindex={true}
      />

      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-20">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 text-center shadow-xs space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-800 flex items-center justify-center mx-auto text-2xl font-bold font-mono">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-normal text-slate-900 font-heading">
              Pagina non trovata
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed">
              L'indirizzo web inserito potrebbe essere errato, rimosso o temporaneamente non disponibile.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-950 rounded-xl transition-all shadow-xs focus-ring"
            >
              <Home className="w-4 h-4" />
              <span>Torna alla Home</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/professionisti')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <Users className="w-4 h-4 text-slate-500" />
              <span>Elenco dei 12 professionisti</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contatti')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>Contatti e sede a Bollate</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
