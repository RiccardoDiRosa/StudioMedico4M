import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, MapPin } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studio';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Lo Studio', path: '/lo-studio' },
    { label: 'Servizi', path: '/#servizi' },
    { label: 'Professionisti', path: '/professionisti' },
    { label: 'Contatti', path: '/contatti' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#b3e5fc]/80 transition-colors">
      {/* Top micro decorative palette stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-[#01579b] via-[#039be5] to-[#b3e5fc]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Zone 1: Brand Wordmark Element */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="focus-ring rounded-lg shrink-0 transition-opacity hover:opacity-95"
          aria-label="Studio Medico 4M - Home"
        >
          <Logo variant="full" showPayoff={false} />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600" aria-label="Navigazione principale">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  isActive 
                    ? 'text-[#01579b] font-bold' 
                    : 'hover:text-[#0277bd]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#039be5] rounded-full shadow-xs shadow-[#039be5]/50" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={STUDIO_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] active:scale-[0.99] rounded-xl transition-all shadow-md shadow-[#0277bd]/25 focus-ring whitespace-nowrap shrink-0"
            aria-label="Apri posizione su Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-[#b3e5fc]" aria-hidden="true" />
            <span>Come raggiungerci</span>
          </a>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex md:hidden items-center gap-1.5">
          <a
            href={STUDIO_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#0277bd] hover:text-[#039be5] hover:bg-[#b3e5fc]/25 rounded-lg transition-colors focus-ring"
            aria-label="Posizione dello studio a Bollate"
            title="Via Madonnina 17, Bollate"
          >
            <MapPin className="w-5 h-5 text-[#039be5]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#01579b] hover:text-[#039be5] hover:bg-[#b3e5fc]/20 focus-ring rounded-lg transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#b3e5fc] bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2.5" aria-label="Menu mobile">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`px-3.5 py-2.5 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#b3e5fc]/30 text-[#01579b] font-bold border-l-4 border-[#039be5]'
                      : 'text-slate-700 hover:bg-[#b3e5fc]/15 hover:text-[#0277bd]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            
            <div className="pt-3 border-t border-[#b3e5fc]/60 flex flex-col gap-2">
              <a
                href={STUDIO_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] rounded-xl shadow-md shadow-[#0277bd]/25"
              >
                <MapPin className="w-4 h-4 text-[#b3e5fc]" />
                <span>Apri Google Maps (Via Madonnina 17)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
