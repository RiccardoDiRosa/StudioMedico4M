export type ProfessionalCategory = 
  | 'ortopedia' 
  | 'riabilitazione' 
  | 'benessere' 
  | 'psicologia' 
  | 'nutrizione' 
  | 'specialistico';

export interface ProfessionalSocial {
  platform: 'linkedin' | 'instagram' | 'website';
  url: string;
}

export interface ProfessionalCV {
  experienceYears?: string;
  experiences?: string[];
  subSpecializations?: string[];
  academicMilestones?: string[];
  publicationsAndConferences?: string[];
  languages?: string[];
}

export interface Professional {
  id: string;
  slug: string;
  gender: 'M' | 'F';
  title: string;
  firstName: string;
  lastName: string;
  role: string;
  category: ProfessionalCategory;
  categoryLabel: string;
  shortDescription: string;
  fullBio: string;
  bioParagraphs?: string[];
  services: string[];
  education?: string[];
  consultationDays?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  socials?: ProfessionalSocial[];
  photoUrl?: string;
  isComplete: boolean;
  isPublished: boolean;
  noteForConfirmation?: string;
  topDoctorsUrl?: string;
  curriculumVitae?: ProfessionalCV;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
  flyerOrder: number;
}

export interface StudioConfig {
  name: string;
  payoff: string;
  address: string;
  street: string;
  civic: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  googleMapsUrl: string;
  googleMapsDirectionsUrl: string;
  publicPhoneConfirmed: boolean;
  publicPhone?: string;
  publicEmailConfirmed: boolean;
  publicEmail?: string;
  publicHoursConfirmed: boolean;
  publicHours?: string;
  projectReferentName: string;
  projectReferentNote: string;
  canonicalBaseUrl: string;
  contactWebhookUrl?: string;
}

export interface ContactFormData {
  fullName: string;
  contact: string; // phone or email
  subjectType: string;
  professionalRecipientId?: string;
  message: string;
  privacyConsent: boolean;
  honeypot: string; // spam prevention
}
