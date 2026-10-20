import React, { useState, useEffect } from 'react';
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

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    // Check if it's an in-page hash on Home
    if (path.startsWith('/#')) {
      const hashId = path.replace('/#', '');
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

    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
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
      const prof = PROFESSIONISTI.find(p => p.slug === slug || (slug === 'specialista-ortopedia-traumatologia' && p.id === 'prof-01-ortopedia'));
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

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f9fd] selection:bg-[#b3e5fc] selection:text-[#01579b]">
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
