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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Brand Wordmark Element */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="focus-ring rounded-lg shrink-0 transition-opacity hover:opacity-95"
          aria-label="Studio Medico 4M - Home"
        >
          <Logo variant="full" showPayoff={false} />
        </a>

        {/* Zone 2: 4-5 Concise Single-line Nav Links (Desktop) */}
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
                    ? 'text-sky-900 font-semibold' 
                    : 'hover:text-slate-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={STUDIO_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-950 active:scale-[0.99] rounded-lg transition-all shadow-xs focus-ring whitespace-nowrap shrink-0"
            aria-label="Apri posizione su Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
            <span>Come raggiungerci</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus-ring rounded-lg"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  currentPath === link.path
                    ? 'bg-sky-50 text-sky-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={STUDIO_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg shadow-xs"
              >
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Apri Google Maps (Via Madonnina 17)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
