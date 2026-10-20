import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Home, Users, MapPin } from 'lucide-react';

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

      <div className="min-h-[70vh] flex items-center justify-center bg-[#f4f9fd] px-4 py-20">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#b3e5fc]/80 text-center shadow-sm space-y-6 relative overflow-hidden">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#01579b] via-[#039be5] to-[#b3e5fc]" />

          <div className="w-16 h-16 rounded-2xl bg-[#b3e5fc]/40 border border-[#039be5]/30 text-[#01579b] flex items-center justify-center mx-auto text-2xl font-bold font-mono shadow-xs">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-normal text-[#01579b] font-heading">
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
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] rounded-xl transition-all shadow-md shadow-[#0277bd]/25 focus-ring"
            >
              <Home className="w-4 h-4 text-[#b3e5fc]" />
              <span>Torna alla Home</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/professionisti')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-[#01579b] bg-white hover:bg-[#b3e5fc]/20 border border-[#b3e5fc] hover:border-[#039be5] rounded-xl transition-colors"
            >
              <Users className="w-4 h-4 text-[#039be5]" />
              <span>Elenco dei 12 professionisti</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contatti')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-[#0277bd] hover:text-[#01579b] transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#039be5]" />
              <span>Contatti e sede a Bollate</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
