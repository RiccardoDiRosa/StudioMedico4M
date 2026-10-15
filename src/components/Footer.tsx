import React from 'react';
import { Logo } from './Logo';
import { WaveDivider } from './WaveDivider';
import { STUDIO_CONFIG } from '../data/studio';
import { MapPin, ShieldCheck, HeartPulse, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate(path);
  };

  return (
    <footer className="relative bg-[#0a1926] text-slate-300 mt-auto">
      {/* Wave transition into dark footer */}
      <WaveDivider position="top" fillColor="#0a1926" height={48} className="bg-slate-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Col 1: Identity & Payoff */}
          <div className="space-y-4">
            <Logo variant="white" showPayoff={true} />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Spazio polifunzionale a Bollate dedicato alla salute, alla riabilitazione e al benessere della persona. Una sede accogliente per 12 liberi professionisti indipendenti.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-sky-300">
              <ShieldCheck className="w-4 h-4 shrink-0 text-sky-400" />
              <span>Studio professionale di libera professione</span>
            </div>
          </div>

          {/* Col 2: Navigazione rapida */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-sans mb-4">
              Navigazione
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href="/" 
                  onClick={(e) => handleLink(e, '/')} 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="/lo-studio" 
                  onClick={(e) => handleLink(e, '/lo-studio')} 
                  className="hover:text-white transition-colors"
                >
                  Lo Studio
                </a>
              </li>
              <li>
                <a 
                  href="/#servizi" 
                  onClick={(e) => handleLink(e, '/#servizi')} 
                  className="hover:text-white transition-colors"
                >
                  I Nostri Servizi
                </a>
              </li>
              <li>
                <a 
                  href="/professionisti" 
                  onClick={(e) => handleLink(e, '/professionisti')} 
                  className="hover:text-white transition-colors"
                >
                  I 12 Professionisti
                </a>
              </li>
              <li>
                <a 
                  href="/contatti" 
                  onClick={(e) => handleLink(e, '/contatti')} 
                  className="hover:text-white transition-colors"
                >
                  Contatti e Sede
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Sede & Indicazioni */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-sans mb-4">
              Sede di Bollate
            </h3>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{STUDIO_CONFIG.name}</p>
                  <p>{STUDIO_CONFIG.address}</p>
                  <p className="text-slate-500 mt-0.5">A pochi minuti dalla stazione Trenord Bollate Centro</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={STUDIO_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium transition-colors"
                >
                  <span>Apri percorso su Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Modello organizzativo & Note etiche */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-sans mb-4">
              Informazioni e Prenotazioni
            </h3>
            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-sky-300 font-medium">
                <HeartPulse className="w-4 h-4 shrink-0" />
                <span>Gestione autonoma</span>
              </div>
              <p className="leading-relaxed">
                Nello studio non è attiva una segreteria centralizzata. Per appuntamenti o tariffe, si prega di fare riferimento direttamente ai singoli professionisti.
              </p>
            </div>
          </div>
        </div>

        {/* Hairline divider */}
        <div className="my-8 border-t border-slate-800/80" />

        {/* Bottom bar with legal notices & copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {STUDIO_CONFIG.name} — Via Madonnina 17, 20021 Bollate (MI). Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="/privacy-policy" 
              onClick={(e) => handleLink(e, '/privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <a 
              href="/cookie-policy" 
              onClick={(e) => handleLink(e, '/cookie-policy')}
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
