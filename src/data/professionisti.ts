import { Professional } from '../types';

/**
 * Registro dei 12 liberi professionisti operanti presso Studio Medico 4M.
 * 
 * VINCOLO DI PROGETTO (PRD Sezione 5.4 e Sezione 11):
 * - Non inventare titoli accademici, numeri d'iscrizione all'albo o recapiti personali.
 * - Le schede con 'isComplete: false' e 'isPublished: false' sono considerate bozze interne:
 *   vengono mostrate con apposita etichetta di aggiornamento in corso e sono ESCLUSE
 *   automaticamente dalla sitemap.xml e marcate con 'noindex' per evitare l'indicizzazione
 *   di contenuti non ancora formalmente approvati dai singoli professionisti.
 */
export const PROFESSIONISTI: Professional[] = [
  {
    id: 'prof-01-ortopedia',
    slug: 'specialista-ortopedia-traumatologia',
    gender: 'M',
    title: 'Dott.',
    firstName: 'Specialista',
    lastName: 'Ortopedia e Traumatologia',
    role: 'Specialista in Ortopedia e Traumatologia',
    category: 'ortopedia',
    categoryLabel: 'Ortopedia',
    shortDescription: 'Visite specialistiche per patologie articolari, lesioni legamentose, artrosi e traumi dell\'apparato locomotore.',
    fullBio: 'Opera come libero professionista presso Studio Medico 4M a Bollate. Si occupa della diagnosi clinica e dell\'inquadramento terapeutico delle patologie ortopediche acute e croniche di colonna, spalla, anca, ginocchio e caviglia. I dettagli sul percorso formativo e i recapiti diretti sono in fase di convalida formale.',
    services: [
      'Visita specialistica ortopedica',
      'Inquadramento clinico patologie articolari',
      'Valutazione post-traumatica',
      'Indicazioni a percorsi conservativi o chirurgici'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome, curriculum sintetico e recapito telefonico/email diretto.'
  },
  {
    id: 'prof-02-agopuntura',
    slug: 'medico-agopuntura',
    gender: 'F',
    title: 'Dott.ssa',
    firstName: 'Medico',
    lastName: 'Esperto in Agopuntura',
    role: 'Medico Chirurgo esperto in Agopuntura Clinica',
    category: 'specialistico',
    categoryLabel: 'Agopuntura',
    shortDescription: 'Trattamenti di agopuntura medica per dolore cronico, cefalea, contratture e riequilibrio psicofisico.',
    fullBio: 'Esercita la libera professione medica a Bollate con percorsi personalizzati di agopuntura integrata per la gestione del dolore muscolo-scheletrico, delle tensioni da stress e dell\'emicrania, secondo evidenze scientifiche e rispetto della persona.',
    services: [
      'Consulenza medica preliminare',
      'Sedute di agopuntura antalgica',
      'Trattamento cefalee e tensioni cervicali',
      'Riequilibrio funzionale'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome, ordine dei medici di appartenenza e recapito diretto.'
  },
  {
    id: 'prof-03-fisioterapia',
    slug: 'fisioterapia-riabilitazione',
    gender: 'M',
    title: 'Dott.',
    firstName: 'Fisioterapista',
    lastName: 'Riabilitazione Motoria',
    role: 'Fisioterapista e Riabilitatore Funzionale',
    category: 'riabilitazione',
    categoryLabel: 'Fisioterapia',
    shortDescription: 'Recupero motorio, riabilitazione post-chirurgica e terapia manuale per il ripristino dell\'autonomia.',
    fullBio: 'Professionista sanitario della riabilitazione presso Studio Medico 4M. Elabora programmi riabilitativi mirati per il recupero della motilità e della forza a seguito di eventi traumatici, interventi ortopedici o problemi posturali cronici.',
    services: [
      'Riabilitazione post-operatoria',
      'Terapia manuale ortopedica',
      'Rieducazione motoria e funzionale',
      'Esercizio terapeutico guidato'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome, titolo di studio e contatto diretto.'
  },
  {
    id: 'prof-04-osteopatia',
    slug: 'osteopata-postura',
    gender: 'F',
    title: 'Dott.ssa',
    firstName: 'Osteopata',
    lastName: 'Equilibrio Posturale',
    role: 'Osteopata D.O.',
    category: 'benessere',
    categoryLabel: 'Osteopatia',
    shortDescription: 'Trattamento manipolativo osteopatico per il ripristino della mobilità fisiologica di colonna e articolazioni.',
    fullBio: 'Esercita come osteopata presso la sede di Bollate, applicando tecniche manuali dolci volte a liberare restrizioni di mobilità articolare, fasciale e viscerale, favorendo l\'armonia e l\'equilibrio globale del corpo.',
    services: [
      'Valutazione posturale e biomeccanica',
      'Trattamento osteopatico strutturale e fasciale',
      'Approccio viscerale e cranio-sacrale',
      'Consigli di ergonomia posturale'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome, scuola di osteopatia e recapito di prenotazione.'
  },
  {
    id: 'prof-05-nutrizione',
    slug: 'biologo-nutrizionista',
    gender: 'F',
    title: 'Dott.ssa',
    firstName: 'Biologa',
    lastName: 'Nutrizionista',
    role: 'Biologa Nutrizionista',
    category: 'nutrizione',
    categoryLabel: 'Nutrizione',
    shortDescription: 'Educazione alimentare e piani nutrizionali calibrati sulle reali esigenze di salute e stile di vita.',
    fullBio: 'Consulente nutrizionale per percorsi di rieducazione al cibo, supporto in condizioni fisiologiche speciali (gravidanza, menopausa, attività sportiva) e ottimizzazione dell\'energia quotidiana.',
    services: [
      'Valutazione dello stato nutrizionale e abitudini alimentari',
      'Elaborazione piano dietetico personalizzato',
      'Consulenza per nutrizione nello sport',
      'Incontri periodici di monitoraggio'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome, albo dei biologi e contatti diretti.'
  },
  {
    id: 'prof-06-plantari',
    slug: 'tecnico-plantari-su-misura',
    gender: 'M',
    title: 'Dott.',
    firstName: 'Specialista',
    lastName: 'Plantari su Misura',
    role: 'Tecnico Ortopedico / Podologo',
    category: 'specialistico',
    categoryLabel: 'Plantari su Misura',
    shortDescription: 'Analisi del passo, valutazione podologica e realizzazione di plantari ortopedici personalizzati.',
    fullBio: 'Presso lo studio di Via Madonnina 17 si occupa dello studio della dinamica del piede e della realizzazione artigianale e su misura di ortesi plantari per problematiche di appoggio, sport o affaticamento.',
    services: [
      'Esame baropodometrico e morfologico del piede',
      'Progettazione plantari personalizzati correttivi o di scarico',
      'Plantari per sportivi e scarpe da lavoro',
      'Verifiche e adattamenti periodici'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome, specialità esatta e contatti per presa misure.'
  },
  {
    id: 'prof-07-psicologia',
    slug: 'psicologia-psicoterapia',
    gender: 'F',
    title: 'Dott.ssa',
    firstName: 'Psicologa',
    lastName: 'Supporto Clinico',
    role: 'Psicologa e Psicoterapeuta',
    category: 'psicologia',
    categoryLabel: 'Supporto Psicologico',
    shortDescription: 'Ascolto empatico e supporto psicologico per ansia, stress, momenti di crisi personale o relazionale.',
    fullBio: 'Professionista iscritta all\'Ordine degli Psicologi che accoglie la persona in uno spazio protetto e confidenziale a Bollate. Aiuta a comprendere e superare blocchi emotivi, fasi di transizione ed eventi complessi della vita.',
    services: [
      'Colloqui individuali di sostegno psicologico',
      'Consulenza per gestione di ansia e stress',
      'Supporto nelle fasi di cambiamento di vita',
      'Percorsi di crescita personale e autostima'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome, ordine psicologi e modalità di contatto riservato.'
  },
  {
    id: 'prof-08-naturopatia',
    slug: 'naturopatia-riflessologia-plantare',
    gender: 'F',
    title: 'Operatrice',
    firstName: 'Naturopata',
    lastName: 'Riflessologa',
    role: 'Naturopata e Riflessologa Plantare',
    category: 'benessere',
    categoryLabel: 'Naturopatia',
    shortDescription: 'Riflessologia plantare zonale e rimedi naturali per favorire l\'equilibrio e il rilassamento profondo.',
    fullBio: 'Opera secondo principi olistici per il benessere naturale della persona. Attraverso la digitopressione dei punti riflessi del piede e suggerimenti sullo stile di vita naturale, stimola la vitalità e scioglie tensioni accumulate.',
    services: [
      'Trattamento riflessologico plantare',
      'Consulenza naturopatica integrata',
      'Rilassamento e distensione psico-corporea',
      'Consigli naturali per il benessere quotidiano'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome, attestati professionali e recapito per appuntamenti.'
  },
  {
    id: 'prof-09-fisioterapia-2',
    slug: 'fisioterapista-posturologia',
    gender: 'M',
    title: 'Dott.',
    firstName: 'Fisioterapista',
    lastName: 'Rieducazione Posturale',
    role: 'Fisioterapista specializzato in Posturologia',
    category: 'riabilitazione',
    categoryLabel: 'Fisioterapia',
    shortDescription: 'Ginnastica posturale individuale e riequilibrio delle catene muscolari per dolori vertebrali.',
    fullBio: 'Attivo presso Studio Medico 4M con interventi mirati alla correzione dei vizi posturali e al superamento di algie cervicali e lombari attraverso metodiche di allungamento e potenziamento selettivo.',
    services: [
      'Valutazione posturale globale',
      'Sedute individuali di rieducazione posturale',
      'Mobilizzazioni articolari',
      'Prevenzione recidive del mal di schiena'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome e canali autorizzati per le sedute.'
  },
  {
    id: 'prof-10-psicologia-2',
    slug: 'psicologia-relazionale-coppia',
    gender: 'F',
    title: 'Dott.ssa',
    firstName: 'Psicologa',
    lastName: 'Consulenza Relazionale',
    role: 'Psicologa Clinica',
    category: 'psicologia',
    categoryLabel: 'Supporto Psicologico',
    shortDescription: 'Consulenze psicologiche per giovani adulti, dinamiche relazionali e genitorialità.',
    fullBio: 'Svolge la propria attività clinica nello studio di Bollate, accompagnando le persone nel trovare chiarezza e strategie efficaci di fronte a sfide relazionali, familiari o lavorative.',
    services: [
      'Consulenza psicologica individuale',
      'Supporto per genitorialità e dinamiche familiari',
      'Orientamento nelle scelte di vita e lavoro',
      'Gestione dei conflitti relazionali'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome e contatto telefonico/email.'
  },
  {
    id: 'prof-11-osteopatia-2',
    slug: 'osteopata-strutturale-fasciale',
    gender: 'M',
    title: 'Dott.',
    firstName: 'Osteopata',
    lastName: 'Biomeccanica e Sport',
    role: 'Osteopata D.O. - Ambito Sportivo',
    category: 'benessere',
    categoryLabel: 'Osteopatia',
    shortDescription: 'Osteopatia per atleti, amatori e lavoratori con sovraccarichi posturali e articolari.',
    fullBio: 'Interviene per migliorare la mobilità articolare e ottimizzare il recupero muscolare negli sportivi e in chi svolge attività sedentarie o gravose a livello muscolo-scheletrico.',
    services: [
      'Trattamento osteopatico per sportivi',
      'Sblocco tensioni muscolari da sovraccarico',
      'Valutazione della biomeccanica articolare',
      'Mantenimento dell\'efficienza fisica'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome e contatti per visite.'
  },
  {
    id: 'prof-12-benessere-integrato',
    slug: 'salute-benessere-integrato',
    gender: 'F',
    title: 'Dott.ssa',
    firstName: 'Professionista',
    lastName: 'Salute Integrata',
    role: 'Consulente per la Salute e il Benessere Psicofisico',
    category: 'benessere',
    categoryLabel: 'Benessere Olistico',
    shortDescription: 'Consulenze integrate per il mantenimento dell\'equilibrio psicofisico e stili di vita sani.',
    fullBio: 'Opera all\'interno dello studio nell\'ottica di coniugare mente e corpo per il raggiungimento di un benessere duraturo, promuovendo abitudini quotidiane sane e prevenzione attiva.',
    services: [
      'Colloqui orientativi per il benessere globale',
      'Piani per il rilassamento e l\'equilibrio energetico',
      'Integrazione mente-corpo',
      'Educazione alla prevenzione quotidiana'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: false,
    isPublished: false,
    noteForConfirmation: 'In attesa di conferma: Nome, Cognome, esatta disciplina specialistica e recapiti.'
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'Tutti i professionisti' },
  { id: 'ortopedia', label: 'Ortopedia' },
  { id: 'riabilitazione', label: 'Fisioterapia & Riabilitazione' },
  { id: 'benessere', label: 'Osteopatia & Benessere' },
  { id: 'psicologia', label: 'Psicologia' },
  { id: 'nutrizione', label: 'Nutrizione' },
  { id: 'specialistico', label: 'Agopuntura & Podologia' }
] as const;
