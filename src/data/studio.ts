import { StudioConfig } from '../types';

export const STUDIO_CONFIG: StudioConfig = {
  name: 'Studio Medico 4M',
  payoff: 'Dove mente e corpo ritrovano equilibrio',
  address: 'Via Madonnina 17, 20021 Bollate (MI)',
  street: 'Via Madonnina',
  civic: '17',
  city: 'Bollate',
  province: 'MI',
  postalCode: '20021',
  country: 'Italia',
  
  // Official Google Maps direct link with precise search address
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Madonnina+17+20021+Bollate+MI',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Via+Madonnina+17+20021+Bollate+MI',
  
  // Explicitly tracked confirmation flags to ensure no fake contact numbers/emails are published
  publicPhoneConfirmed: false,
  publicPhone: undefined, // E.g. "+39 02 ..." once officially confirmed
  
  publicEmailConfirmed: false,
  publicEmail: undefined, // E.g. "info@studiomedico4m.it" once officially configured
  
  publicHoursConfirmed: false,
  publicHours: 'Gli orari di visita variano in base alla disponibilità del singolo professionista. Si riceve esclusivamente su appuntamento.',
  
  // Project internal reference - Doris (3386552277)
  // Per PRD, non mostrare come recapito pubblico dello studio finché non sarà autorizzato espressamente
  projectReferentName: 'Doris (Referente progetto)',
  projectReferentNote: 'Recapito interno 3386552277 non pubblicato sul sito come linea generale in attesa di conferma formale.',
  
  // Canonical base domain
  canonicalBaseUrl: 'https://studiomedico4m.it',
  
  // Webhook endpoint for static email dispatch (e.g. Formspree, Resend, Netlify Forms, or custom proxy)
  contactWebhookUrl: '' // Configurable before launch
};

export const STUDIO_MODEL_NOTE = {
  title: 'Come funzionano gli appuntamenti',
  summary: 'Presso Studio Medico 4M operano 12 liberi professionisti indipendenti. Non è presente una segreteria centralizzata: ogni professionista gestisce in piena autonomia le visite, le tariffe e il proprio calendario.',
  instructions: 'Per richiedere un appuntamento, una visita specialistica o informazioni su un trattamento, contatta direttamente il professionista di riferimento tramite i suoi recapiti dedicati.'
};

/**
 * Galleria fotografica dello Studio Medico 4M
 * File posizionati in public/images/studio/
 * Sostituibili direttamente quando l'utente fornirà le foto definitive della sede
 */
export interface StudioPhotoItem {
  id: string;
  title: string;
  area: string;
  tagline: string;
  url: string;
  badge: string;
}

export const STUDIO_PHOTOS: StudioPhotoItem[] = [
  {
    id: 'studio-hero',
    title: 'Accoglienza & Spazi Comuni',
    area: 'Area Consultazione & Ingresso',
    tagline: 'Uno spazio curato, silenzioso e luminoso per accogliere i pazienti con il massimo comfort e riservatezza.',
    url: '/images/studio/studio-hero.jpg',
    badge: 'Sede di Bollate'
  },
  {
    id: 'studio-ambulatorio',
    title: 'Ambulatorio & Sale Trattamenti',
    area: 'Spazi Visite & Terapia',
    tagline: 'Ambienti moderni e igienizzati, predisposti per visite specialistiche, fisioterapia e trattamenti benessere.',
    url: '/images/studio/studio-room.jpg',
    badge: 'Massimo Comfort'
  }
];

