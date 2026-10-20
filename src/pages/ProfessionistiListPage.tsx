import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { ProfessionalCard } from '../components/ProfessionalCard';
import { PROFESSIONISTI, CATEGORIES_CONFIG } from '../data/professionisti';
import { STUDIO_CONFIG } from '../data/studio';
import { Filter } from 'lucide-react';

interface ProfessionistiListPageProps {
  onNavigate: (path: string) => void;
  onSelectProfessional: (slug: string) => void;
}

export const ProfessionistiListPage: React.FC<ProfessionistiListPageProps> = ({ 
  onNavigate, 
  onSelectProfessional 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const breadcrumbItems = [
    { label: 'Professionisti' }
  ];

  const filtered = activeCategory === 'all'
    ? PROFESSIONISTI
    : PROFESSIONISTI.filter(p => p.category === activeCategory);

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'I 12 Professionisti di Studio Medico 4M a Bollate',
    'description': 'Elenco completo dei 12 liberi professionisti sanitari e del benessere che operano presso Studio Medico 4M a Bollate.',
    'url': `${STUDIO_CONFIG.canonicalBaseUrl}/professionisti`
  };

  return (
    <>
      <SEOHead
        title="I 12 Professionisti dello Studio Medico 4M a Bollate"
        description="Consulta l'elenco dei 12 specialisti operanti presso lo Studio Medico 4M a Bollate (MI). Ortopedia, riabilitazione, osteopatia, nutrizione, psicologia e benessere."
        canonicalPath="/professionisti"
        schemaJson={listSchema}
      />

      <div className="bg-[#f4f9fd] min-h-screen pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        </div>

        {/* Page Header */}
        <section className="pt-4 sm:pt-8 pb-6 sm:pb-10 bg-gradient-to-b from-[#b3e5fc]/35 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0277bd]">
                La Sede di Bollate
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#01579b] tracking-tight font-heading mt-1 sm:mt-2 mb-2 sm:mb-3">
                I 12 Professionisti
              </h1>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
                Studio Medico 4M ospita 12 liberi professionisti indipendenti dedicati alla salute e alla cura del corpo e della mente. Ciascuno gestisce individualmente i propri appuntamenti e percorsi assistenziali.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2.5 sm:pb-4 mb-4 sm:mb-8 scrollbar-none border-b border-[#b3e5fc]/80">
            <div className="flex items-center gap-1.5 text-xs text-[#0277bd] font-semibold mr-1 sm:mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#039be5]" />
              <span>Filtra:</span>
            </div>
            {CATEGORIES_CONFIG.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#01579b] to-[#0277bd] text-white shadow-md shadow-[#0277bd]/25 scale-[1.02]'
                    : 'bg-white text-[#01579b] hover:bg-[#b3e5fc]/25 hover:text-[#0277bd] border border-[#b3e5fc]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Professionals Grid: 2 columns on mobile, 3/4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
            {filtered.map((prof) => (
              <ProfessionalCard
                key={prof.id}
                professional={prof}
                onViewProfile={(slug) => onSelectProfessional(slug)}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
