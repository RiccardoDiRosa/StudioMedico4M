import React from 'react';
import { Logo } from './Logo';
import { WaveDivider } from './WaveDivider';
import { STUDIO_CONFIG } from '../data/studio';
import { MapPin, HeartPulse, ExternalLink } from 'lucide-react';

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
    <footer className="relative bg-[#01579b] text-sky-100 mt-auto">
      {/* Wave transition into palette dark footer */}
      <WaveDivider position="top" fillColor="#01579b" accentColor="#039be5" height={28} className="bg-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-10 pb-5 sm:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 lg:gap-12">

          {/* Col 1: Identity & Payoff */}
          <div className="col-span-2 md:col-span-1 space-y-2 sm:space-y-4">
            <Logo variant="white" showPayoff={false} />
            <p className="text-[11px] sm:text-xs text-sky-100/90 leading-relaxed max-w-sm">
              Studio professionale a Bollate dedicato alla salute, alla riabilitazione e al benessere della persona.
            </p>
          </div>

          {/* Col 2: Navigazione rapida */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-sans mb-1.5 sm:mb-4">
              Navigazione
            </h3>
            <ul className="space-y-1 sm:space-y-2.5 text-xs text-sky-100">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink(e, '/')}
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 py-0.5 sm:py-0"
                >
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/#servizi"
                  onClick={(e) => handleLink(e, '/#servizi')}
                  className="hover:text-white hover:underline transition-colors block py-0.5 sm:py-0"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="/professionisti"
                  onClick={(e) => handleLink(e, '/professionisti')}
                  className="hover:text-white hover:underline transition-colors block py-0.5 sm:py-0"
                >
                  Professionisti
                </a>
              </li>
              <li>
                <a
                  href="/lo-studio"
                  onClick={(e) => handleLink(e, '/lo-studio')}
                  className="hover:text-white hover:underline transition-colors block py-0.5 sm:py-0"
                >
                  Lo Studio
                </a>
              </li>
              <li>
                <a
                  href="/contatti"
                  onClick={(e) => handleLink(e, '/contatti')}
                  className="hover:text-white hover:underline transition-colors block py-0.5 sm:py-0"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Sede & Indicazioni */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-sans mb-1.5 sm:mb-4">
              Sede
            </h3>
            <div className="space-y-1.5 sm:space-y-3 text-xs text-sky-100/90 leading-relaxed">
              <div className="flex items-start gap-1.5 sm:gap-2">
                <MapPin className="w-4 h-4 text-[#039be5] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold leading-tight">{STUDIO_CONFIG.name}</p>
                  <p className="text-sky-100 leading-tight mt-0.5">{STUDIO_CONFIG.street} {STUDIO_CONFIG.civic}</p>
                  <p className="text-sky-100 leading-tight">{STUDIO_CONFIG.city} ({STUDIO_CONFIG.province})</p>
                  <p className="hidden sm:block text-[#b3e5fc]/80 mt-0.5">A pochi minuti da Bollate Centro</p>
                </div>
              </div>

              <div className="pt-0.5 sm:pt-1">
                <a
                  href={STUDIO_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#b3e5fc] hover:text-white font-semibold transition-colors py-0.5"
                >
                  <span>Mappa</span>
                  <ExternalLink className="w-3 h-3 text-[#039be5]" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Modello organizzativo */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="hidden sm:block text-sm font-semibold uppercase tracking-wider text-white font-sans mb-4">
              Informazioni e Prenotazioni
            </h3>
            <div className="bg-[#0277bd]/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-[#039be5]/40 text-[11px] sm:text-xs text-sky-100 space-y-1 sm:space-y-2 backdrop-blur-xs">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#b3e5fc] font-semibold">
                <HeartPulse className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#039be5]" />
                <span>Gestione autonoma</span>
              </div>
              <p className="leading-relaxed text-sky-100/90">
                Senza segreteria centralizzata. Visite e appuntamenti gestiti direttamente dai singoli professionisti.
              </p>
            </div>
          </div>
        </div>

        {/* Hairline divider */}
        <div className="my-3 sm:my-8 border-t border-[#0277bd]" />

        {/* Bottom bar with legal notices & copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-[10px] sm:text-xs text-sky-200/80 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {STUDIO_CONFIG.name} — Bollate (MI)
          </p>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLink(e, '/privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-[#0277bd]" aria-hidden="true">·</span>
            <a
              href="/cookie-policy"
              onClick={(e) => handleLink(e, '/cookie-policy')}
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Small credit link */}
        <div className="mt-2.5 pt-2 sm:mt-4 sm:pt-3 border-t border-[#0277bd]/40 text-center">
          <p className="text-[9px] sm:text-[10px] text-sky-200/50">
            {' '}
            <a
              href="https://www.linkedin.com/in/riccardo-di-rosa-4b972439a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-100 hover:underline transition-colors"
            >
              Realizzato da Di Rosa Riccardo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
