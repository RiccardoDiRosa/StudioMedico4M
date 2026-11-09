import { StudioConfig } from '../types';

export const STUDIO_CONFIG: StudioConfig = {
  name: 'Studio 4M',
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
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Via%20Madonnina%2017%2C%2020021%20Bollate%20MI&t=&z=16&ie=UTF8&iwloc=&output=embed',
  
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
  summary: 'Presso Studio 4M operano liberi professionisti indipendenti. Non è presente una segreteria centralizzata: ogni professionista gestisce in piena autonomia le visite, le tariffe e il proprio calendario.',
  instructions: 'Per richiedere un appuntamento, una visita specialistica o informazioni su un trattamento, contatta direttamente il professionista di riferimento tramite i suoi recapiti dedicati.'
};

/**
 * Galleria fotografica dello Studio 4M
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
    id: 'studio-accoglienza',
    title: 'Sala d\'attesa e accoglienza',
    area: 'Ingresso',
    tagline: 'Un ambiente caldo e riservato dove attendere con tranquillità prima della visita.',
    url: '/images/studio/studio1.webp',
    badge: 'Accoglienza'
  },
  {
    id: 'studio-ambulatorio',
    title: 'Ambulatorio con lettino',
    area: 'Sala visite',
    tagline: 'Sala visite attrezzata con lettino professionale e scrivania per il colloquio e la valutazione.',
    url: '/images/studio/studio2.webp',
    badge: 'Ambulatorio'
  },
  {
    id: 'studio-colloqui',
    title: 'Studio per colloqui',
    area: 'Sala consulenze',
    tagline: 'Stanza luminosa e raccolta, pensata per colloqui, consulenze e percorsi individuali.',
    url: '/images/studio/studio3.webp',
    badge: 'Consulenze'
  },
  {
    id: 'studio-trattamenti',
    title: 'Sala trattamenti',
    area: 'Sala terapie',
    tagline: 'Spazio confortevole per visite, trattamenti e sedute riabilitative.',
    url: '/images/studio/studio4.webp',
    badge: 'Trattamenti'
  }
];
