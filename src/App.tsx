import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LoStudioPage } from './pages/LoStudioPage';
import { ContattiPage } from './pages/ContattiPage';
import { ProfessionistiListPage } from './pages/ProfessionistiListPage';
import { ProfessionistaDetailPage } from './pages/ProfessionistaDetailPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PROFESSIONISTI } from './data/professionisti';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [activeHash, setActiveHash] = useState<string>(() => {
    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
      return window.location.hash || '';
    }
    return '';
  });

  const scrollLockUntilRef = useRef<number>(0);

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setActiveHash(window.location.hash || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track active section (#servizi, #professionisti) when scrolling on Home
  useEffect(() => {
    if (currentPath !== '/' && currentPath !== '') {
      setActiveHash('');
      return;
    }

    const handleScroll = () => {
      if (Date.now() < scrollLockUntilRef.current) return;
      
      const professionistiEl = document.getElementById('professionisti');
      const serviziEl = document.getElementById('servizi');

      // Check professionisti first (lower in page)
      if (professionistiEl) {
        const pRect = professionistiEl.getBoundingClientRect();
        if (pRect.top <= 200 && pRect.bottom > 140) {
          setActiveHash('#professionisti');
          return;
        }
      }

      // Check servizi
      if (serviziEl) {
        const sRect = serviziEl.getBoundingClientRect();
        if (sRect.top <= 200 && sRect.bottom > 140) {
          setActiveHash('#servizi');
          return;
        }
      }

      setActiveHash('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const navigateTo = (path: string) => {
    // Check if it's an in-page hash on Home
    if (path.startsWith('/#')) {
      const hashId = path.replace('/#', '');
      scrollLockUntilRef.current = Date.now() + 900;
      setActiveHash(`#${hashId}`);

      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.getElementById(hashId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(hashId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    scrollLockUntilRef.current = Date.now() + 900;
    setActiveHash('');

    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === '/' || path === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route Dispatcher
  const renderCurrentPage = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage 
          onNavigate={navigateTo} 
          onSelectProfessional={(slug) => navigateTo(`/professionisti/${slug}`)} 
        />
      );
    }

    // 2. Lo Studio
    if (currentPath === '/lo-studio' || currentPath === '/lo-studio/') {
      return (
        <LoStudioPage 
          onNavigate={navigateTo} 
          onSelectProfessional={(slug) => navigateTo(`/professionisti/${slug}`)} 
        />
      );
    }

    // 3. Contatti
    if (currentPath === '/contatti' || currentPath === '/contatti/') {
      return <ContattiPage onNavigate={navigateTo} />;
    }

    // 4. Professionisti List
    if (currentPath === '/professionisti' || currentPath === '/professionisti/') {
      return (
        <ProfessionistiListPage 
          onNavigate={navigateTo} 
          onSelectProfessional={(slug) => navigateTo(`/professionisti/${slug}`)} 
        />
      );
    }

    // 5. Individual Professional Detail
    if (currentPath.startsWith('/professionisti/')) {
      const slug = currentPath.replace('/professionisti/', '').replace(/\/$/, '');
      const prof = PROFESSIONISTI.find(p => p.slug === slug || (slug === 'giulia-concetta-gentile' && p.slug === 'giulia-gentile') || (slug === 'specialista-ortopedia-traumatologia' && p.id === 'prof-01-ortopedia'));
      if (prof) {
        return (
          <ProfessionistaDetailPage 
            professional={prof} 
            onNavigate={navigateTo}
            onBack={() => navigateTo('/professionisti')}
          />
        );
      }
      return <NotFoundPage onNavigate={navigateTo} />;
    }

    // 6. Privacy Policy
    if (currentPath === '/privacy-policy' || currentPath === '/privacy-policy/') {
      return <PrivacyPolicyPage onNavigate={navigateTo} />;
    }

    // 7. Cookie Policy
    if (currentPath === '/cookie-policy' || currentPath === '/cookie-policy/') {
      return <CookiePolicyPage onNavigate={navigateTo} />;
    }

    // 8. 404
    return <NotFoundPage onNavigate={navigateTo} />;
  };

  const activeNavPath = (currentPath === '/' || currentPath === '') && activeHash
    ? `/${activeHash}`
    : currentPath;

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f9fd] selection:bg-[#b3e5fc] selection:text-[#01579b]">
      <Header currentPath={activeNavPath} onNavigate={navigateTo} />
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
