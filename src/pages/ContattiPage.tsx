import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { STUDIO_CONFIG, STUDIO_MODEL_NOTE } from '../data/studio';
import { PROFESSIONISTI, CATEGORIES_CONFIG } from '../data/professionisti';
import { 
  MapPin, 
  Clock, 
  Train, 
  Car, 
  ExternalLink, 
  Phone, 
  MessageCircle, 
  Search, 
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  Info
} from 'lucide-react';

interface ContattiPageProps {
  onNavigate: (path: string) => void;
}

export const ContattiPage: React.FC<ContattiPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const breadcrumbItems = [
    { label: 'Contatti e Sede' }
  ];

  // Filter professionals based on search and category
  const filteredProfessionals = PROFESSIONISTI.filter((prof) => {
    const matchesCategory = selectedCategory === 'all' || prof.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const fullName = `${prof.title} ${prof.firstName} ${prof.lastName}`.toLowerCase();
    const matchesQuery = !query || 
      fullName.includes(query) || 
      prof.role.toLowerCase().includes(query) || 
      prof.categoryLabel.toLowerCase().includes(query) ||
      (prof.phone && prof.phone.includes(query));

    return matchesCategory && matchesQuery;
  });

  const contattiSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contatti e indicazioni | Studio Medico 4M Bollate',
    'description': 'Recapiti diretti dei 12 professionisti dello Studio Medico 4M a Bollate (MI) e indicazioni stradali per raggiungere la sede in Via Madonnina 17.',
    'url': `${STUDIO_CONFIG.canonicalBaseUrl}/contatti`
  };

  return (
    <>
      <SEOHead
        title="Contatti Diretti e Sede | Studio Medico 4M Bollate"
        description="Recapiti telefonici diretti dei 12 specialisti dello Studio Medico 4M in Via Madonnina 17 a Bollate (MI). Orari su appuntamento e indicazioni stradali."
        canonicalPath="/contatti"
        schemaJson={contattiSchema}
      />

      <div className="bg-[#f4f9fd] min-h-screen pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        </div>

        {/* Page Header */}
        <section className="pt-8 pb-10 bg-gradient-to-b from-[#b3e5fc]/35 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0277bd]">
                Informazioni e Recapiti Diretti
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#01579b] tracking-tight font-heading mt-2 mb-3">
                Contatti e come raggiungerci
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                Presso lo Studio Medico 4M non è presente una segreteria centralizzata: ogni professionista riceve su appuntamento e gestisce direttamente le proprie prenotazioni. Trova qui sotto i recapiti diretti di ciascun medico e le indicazioni per raggiungere la nostra sede a Bollate.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column (5 Cols): Sede, Come Arrivare, Trasparenza */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card Sede Principale */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#b3e5fc]/80 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-[#0277bd] font-bold text-xs uppercase tracking-wider mb-2">
                    <MapPin className="w-4 h-4 text-[#039be5]" />
                    <span>Sede dello Studio</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#01579b] font-sans">
                    {STUDIO_CONFIG.name}
                  </h2>
                  <p className="text-sm text-slate-700 font-medium mt-1">
                    {STUDIO_CONFIG.address}
                  </p>
                  <p className="text-xs text-[#0277bd] mt-0.5 font-medium">
                    Provincia di Milano, Lombardia
                  </p>
                </div>

                <div className="pt-1">
                  <a
                    href={STUDIO_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] active:scale-[0.99] rounded-xl transition-all shadow-md shadow-[#0277bd]/25 focus-ring"
                  >
                    <span>Apri percorso su Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#b3e5fc]" />
                  </a>
                </div>

                {/* Mezzi Pubblici & Accesso */}
                <div className="pt-4 border-t border-[#b3e5fc]/50 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#01579b]">
                    Come arrivare
                  </h3>

                  <div className="flex items-start gap-3 text-xs text-slate-600">
                    <div className="w-8 h-8 rounded-lg bg-[#b3e5fc]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Train className="w-4 h-4 text-[#0277bd]" />
                    </div>
                    <div>
                      <strong className="text-[#01579b] block">In treno (Trenord)</strong>
                      <span>Fermata <em>Bollate Centro</em> (Linee S1 e S3), distante circa 8-10 minuti a piedi dallo studio.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-600">
                    <div className="w-8 h-8 rounded-lg bg-[#b3e5fc]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Car className="w-4 h-4 text-[#0277bd]" />
                    </div>
                    <div>
                      <strong className="text-[#01579b] block">In automobile</strong>
                      <span>Raggiungibile comodamente dalla Strada Statale 233 Varesina, dalla Tangenziale Nord (A52) e dalla SP46. Parcheggi pubblici nelle vie limitrofe.</span>
                    </div>
                  </div>
                </div>

                {/* Orari di Apertura */}
                <div className="pt-4 border-t border-[#b3e5fc]/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#01579b]">
                    <Clock className="w-4 h-4 text-[#039be5]" />
                    <span>Orari di visita</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {STUDIO_CONFIG.publicHours}
                  </p>
                </div>
              </div>

              {/* Card Trasparenza Organizzativa (Senza segreteria) */}
              <div className="bg-[#b3e5fc]/25 rounded-3xl p-6 sm:p-7 border border-[#b3e5fc] text-xs space-y-3">
                <div className="flex items-center gap-2 text-[#01579b] font-bold text-sm">
                  <CalendarCheck className="w-4 h-4 text-[#0277bd] shrink-0" />
                  <span>{STUDIO_MODEL_NOTE.title}</span>
                </div>
                <p className="leading-relaxed text-slate-700">
                  {STUDIO_MODEL_NOTE.summary}
                </p>
                <div className="p-3 bg-white/80 rounded-xl border border-[#b3e5fc]/60 text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-[#01579b]">
                    <Info className="w-3.5 h-3.5 text-[#039be5]" />
                    <span>Contatto diretto con lo specialista</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    In questo modo eviti tempi d'attesa e parli direttamente con il medico o terapista che ti seguirà nel tuo percorso di cura.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column (7 Cols): Rubrica Telefonica Diretta dei 12 Professionisti */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#b3e5fc]/80 shadow-sm space-y-6">
                
                {/* Header Rubrica */}
                <div>
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 text-[#0277bd] font-bold text-xs uppercase tracking-wider mb-1">
                        <Phone className="w-4 h-4 text-[#039be5]" />
                        <span>Rubrica Telefonica Diretta</span>
                      </div>
                      <h2 className="text-2xl font-bold text-[#01579b] font-sans">
                        I recapiti dei nostri 12 specialisti
                      </h2>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#b3e5fc]/40 text-[#01579b] border border-[#b3e5fc]">
                      {filteredProfessionals.length} professionisti
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">
                    Clicca su <strong>Chiama</strong> o <strong>WhatsApp</strong> accanto al professionista desiderato per concordare data e orario della visita.
                  </p>
                </div>

                {/* Search Bar & Category Filter */}
                <div className="space-y-3 pt-1 border-t border-[#b3e5fc]/50">
                  
                  {/* Search input */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Cerca per nome, cognome o specialità..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#b3e5fc] bg-[#f4f9fd]/50 hover:bg-white focus:bg-white focus:border-[#039be5] focus:ring-2 focus:ring-[#039be5]/20 focus:outline-none transition-all"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="text-xs text-slate-400 hover:text-slate-600 absolute right-3 top-1/2 -translate-y-1/2 px-1"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Category Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    {CATEGORIES_CONFIG.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1 text-[11px] font-semibold rounded-lg whitespace-nowrap transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-[#01579b] text-white shadow-xs'
                            : 'bg-[#f4f9fd] text-[#01579b] hover:bg-[#b3e5fc]/40 border border-[#b3e5fc]/60'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                </div>

                {/* Directory List */}
                <div className="space-y-3 pt-2">
                  {filteredProfessionals.length > 0 ? (
                    filteredProfessionals.map((prof) => {
                      const cleanPhone = prof.phone ? prof.phone.replace(/\s+/g, '') : '';
                      const initials = `${prof.firstName.charAt(0)}${prof.lastName.charAt(0)}`.toUpperCase();

                      return (
                        <div
                          key={prof.id}
                          className="p-4 sm:p-5 rounded-2xl bg-[#f4f9fd]/80 hover:bg-white border border-[#b3e5fc]/70 hover:border-[#039be5] hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          {/* Doctor Info */}
                          <div className="flex items-start gap-3.5 flex-1 min-w-0">
                            {/* Avatar */}
                            <div className="shrink-0 relative">
                              {prof.photoUrl ? (
                                <img
                                  src={prof.photoUrl}
                                  alt={`${prof.title} ${prof.firstName} ${prof.lastName}`}
                                  className="w-12 h-12 rounded-full object-cover object-top ring-2 ring-[#b3e5fc]"
                                />
                              ) : (
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#01579b] to-[#039be5] text-white font-serif font-bold text-sm flex items-center justify-center ring-2 ring-[#b3e5fc] shadow-xs">
                                  {initials}
                                </div>
                              )}
                              {prof.isComplete && (
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0277bd] text-white flex items-center justify-center text-[9px] ring-1 ring-white" title="Verificato">
                                  ✓
                                </div>
                              )}
                            </div>

                            {/* Details */}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-[10px] font-bold text-[#01579b] bg-[#b3e5fc]/40 px-2 py-0.5 rounded-full border border-[#b3e5fc]/60">
                                  {prof.categoryLabel}
                                </span>
                              </div>
                              <h3 className="text-sm sm:text-base font-bold text-[#01579b] mt-1 font-sans">
                                {prof.title} {prof.firstName} {prof.lastName}
                              </h3>
                              <p className="text-xs text-slate-600 line-clamp-1 mt-0.5 font-medium">
                                {prof.role}
                              </p>
                              
                              {/* Consultation Note */}
                              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                                <Clock className="w-3 h-3 text-[#039be5] shrink-0" />
                                <span>{prof.consultationDays || 'Riceve su appuntamento'}</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons (Call, WhatsApp, View Profile) */}
                          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#b3e5fc]/50">
                            
                            {prof.phone ? (
                              <div className="flex items-center gap-2 w-full sm:w-auto">
                                {/* Call Button */}
                                <a
                                  href={`tel:${cleanPhone}`}
                                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] transition-all shadow-xs"
                                  title={`Chiama ${prof.title} ${prof.lastName}`}
                                >
                                  <Phone className="w-3.5 h-3.5 text-[#b3e5fc]" />
                                  <span>{prof.phone}</span>
                                </a>

                                {/* WhatsApp Quick Link */}
                                <a
                                  href={`https://wa.me/39${cleanPhone}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center p-2 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-2xs"
                                  title="Scrivi su WhatsApp"
                                >
                                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                                </a>
                              </div>
                            ) : null}

                            {/* View Profile Link */}
                            <button
                              type="button"
                              onClick={() => onNavigate(`/professionisti/${prof.slug}`)}
                              className="text-[11px] font-semibold text-[#0277bd] hover:text-[#01579b] hover:underline inline-flex items-center gap-1 mt-0.5"
                            >
                              <span>Vedi scheda completa</span>
                              <ArrowRight className="w-3 h-3 text-[#039be5]" />
                            </button>
                          </div>

                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-10 bg-[#f4f9fd] rounded-2xl border border-[#b3e5fc]/60 p-6 space-y-3">
                      <p className="text-sm font-semibold text-slate-700">
                        Nessun professionista trovato per la ricerca "{searchQuery}"
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('all');
                        }}
                        className="text-xs font-semibold text-[#01579b] hover:underline"
                      >
                        Azzera filtri di ricerca
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer Assurance Banner */}
                <div className="p-4 rounded-2xl bg-sky-50 border border-[#b3e5fc] text-xs text-slate-700 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#0277bd] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Tutti i numeri riportati sono i recapiti professionali autorizzati per la prenotazione di visite e trattamenti presso lo <strong>Studio Medico 4M di Bollate (MI)</strong>.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};
