import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDIO_CONFIG } from '../data/studio';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

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
            className="p-2 text-[#0277bd] hover:text-[#039be5] hover:bg-[#b3e5fc]/25 active:scale-95 rounded-lg transition-all focus-ring"
            aria-label="Posizione dello studio a Bollate"
            title="Via Madonnina 17, Bollate"
          >
            <MapPin className="w-5 h-5 text-[#039be5]" />
          </a>
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center text-[#01579b] hover:text-[#039be5] active:bg-[#b3e5fc]/30 hover:bg-[#b3e5fc]/20 focus-ring rounded-xl transition-colors relative"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
                className="w-6 h-6 flex items-center justify-center relative"
              >
                <AnimatePresence initial={false}>
                  {mobileMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute inset-0 flex items-center justify-center text-[#01579b]"
                    >
                      <X className="w-6 h-6" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute inset-0 flex items-center justify-center text-[#01579b]"
                    >
                      <Menu className="w-6 h-6" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Backdrop (click outside to close) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-16 sm:top-20 bg-slate-900/30 backdrop-blur-xs z-40 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer (Absolute overlay anchored to header: zero page shift, 120 FPS GPU fluid) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -16, scale: 0.99 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 420,
                damping: 32,
                mass: 0.7
              }
            }}
            exit={{ 
              opacity: 0, 
              y: -10, 
              scale: 0.99,
              transition: {
                duration: 0.18,
                ease: [0.32, 0, 0.67, 0]
              }
            }}
            style={{ 
              willChange: "transform, opacity",
              transformOrigin: "top center"
            }}
            className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-[#b3e5fc] shadow-2xl z-50 md:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.025,
                    delayChildren: 0.02
                  }
                }
              }}
              className="flex flex-col space-y-1.5 px-4 pt-3.5 pb-6 max-h-[calc(100vh-5rem)] overflow-y-auto"
              aria-label="Menu mobile"
            >
              {navLinks.map((link) => {
                const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
                return (
                  <motion.a
                    key={link.path}
                    variants={{
                      hidden: { opacity: 0, y: -6 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { 
                          type: "spring", 
                          stiffness: 480, 
                          damping: 32 
                        }
                      }
                    }}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors duration-150 flex items-center justify-between active:scale-[0.98] ${
                      isActive
                        ? 'bg-gradient-to-r from-[#b3e5fc]/45 to-[#b3e5fc]/15 text-[#01579b] font-bold border-l-4 border-[#039be5] shadow-xs'
                        : 'text-slate-700 hover:bg-[#b3e5fc]/20 hover:text-[#0277bd]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#039be5]" />}
                  </motion.a>
                );
              })}
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -6 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { 
                      type: "spring", 
                      stiffness: 480, 
                      damping: 32 
                    }
                  }
                }}
                className="pt-2.5 border-t border-[#b3e5fc]/60 flex flex-col gap-2"
              >
                <a
                  href={STUDIO_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] active:scale-[0.98] rounded-xl shadow-md shadow-[#0277bd]/25 transition-transform"
                >
                  <MapPin className="w-4 h-4 text-[#b3e5fc]" />
                  <span>Apri Google Maps (Via Madonnina 17)</span>
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

