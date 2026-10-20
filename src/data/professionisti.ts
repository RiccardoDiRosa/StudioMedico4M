import { Professional } from '../types';

/**
 * Registro dei 12 liberi professionisti sanitari e del benessere operanti presso Studio Medico 4M a Bollate (MI).
 * Dati ufficiali verificati dal volantino del team ("IL NOSTRO TEAM").
 */
export const PROFESSIONISTI: Professional[] = [
  // 1. Dr Michele Miranda
  {
    id: 'prof-01-ortopedia',
    slug: 'michele-roberto-miranda',
    gender: 'M',
    title: 'Dr',
    firstName: 'Michele',
    lastName: 'Miranda',
    role: 'Medico Chirurgo Specialista in Ortopedia e Traumatologia – Alta Specialità Chirurgia della Spalla',
    category: 'ortopedia',
    categoryLabel: 'Ortopedia',
    phone: '335 6239371',
    shortDescription: 'Dirigente Medico Ospedale Niguarda di Milano con Alta Specialità in Chirurgia della Spalla, artroscopia, protesica e traumatologia sportiva.',
    fullBio: 'Il Dott. Michele Roberto Miranda è medico chirurgo specialista in Ortopedia e Traumatologia e svolge attività clinica presso l’Ospedale Niguarda di Milano come Dirigente Medico di I° livello – Alta Specialità Chirurgia della Spalla. Nel corso della sua esperienza ha sviluppato un profilo dedicato alla patologia della spalla, ricoprendo il ruolo di Responsabile dell’Ambulatorio Istituzionale di Chirurgia della Spalla e con un contratto ospedaliero di Alta Specialità per la Patologia della Spalla. L’attività chirurgica comprende sia l’approccio artroscopico sia la gestione protesica, con esperienza consolidata nella protesizzazione della spalla, inclusi primi impianti e revisioni. Ha maturato inoltre esperienze in contesti clinici differenti, tra cui l’Istituto Clinico Humanitas (1997–1999), e ha collaborato con la Commissione Medica FISI come medico delle Nazionali di Sci Alpino (1994–2004). Accanto all’attività ospedaliera, svolge incarichi di docenza come Professore universitario a contratto presso UNIMI (Corso di Laurea in Scienze Infermieristiche) ed è stato membro attivo dell’Ospedale Olimpico Niguarda durante i XXV Giochi Olimpici Invernali Milano-Cortina 2026. Nel suo approccio clinico integra l’esperienza maturata in ambito ospedaliero con un percorso di presa in carico chiaro e personalizzato, orientato al recupero della funzione e al ritorno alle attività quotidiane e sportive in sicurezza, attraverso una pianificazione attenta del trattamento e un follow-up dedicato.',
    bioParagraphs: [
      'Il Dott. Michele Roberto Miranda è medico chirurgo specialista in Ortopedia e Traumatologia e svolge attività clinica presso l’Ospedale Niguarda di Milano come Dirigente Medico di I° livello – Alta Specialità Chirurgia della Spalla.',
      'Nel corso della sua esperienza ha sviluppato un profilo dedicato alla patologia della spalla, ricoprendo il ruolo di Responsabile dell’Ambulatorio Istituzionale di Chirurgia della Spalla e con un contratto ospedaliero di Alta Specialità per la Patologia della Spalla.',
      'L’attività chirurgica comprende sia l’approccio artroscopico sia la gestione protesica, con esperienza consolidata nella protesizzazione della spalla, inclusi primi impianti e revisioni.',
      'Ha maturato inoltre esperienze in contesti clinici differenti, tra cui l’Istituto Clinico Humanitas (1997–1999), e ha collaborato con la Commissione Medica FISI come medico delle Nazionali di Sci Alpino (1994–2004).',
      'Accanto all’attività ospedaliera, svolge incarichi di docenza come Professore universitario a contratto presso UNIMI (Corso di Laurea in Scienze Infermieristiche) ed è stato membro attivo dell’Ospedale Olimpico Niguarda durante i XXV Giochi Olimpici Invernali Milano-Cortina 2026.',
      'Nel suo approccio clinico integra l’esperienza maturata in ambito ospedaliero con un percorso di presa in carico chiaro e personalizzato, orientato al recupero della funzione e al ritorno alle attività quotidiane e sportive in sicurezza, attraverso una pianificazione attenta del trattamento e un follow-up dedicato.'
    ],
    services: [
      'Visita specialistica ortopedica per patologie della spalla',
      'Chirurgia della spalla (artroscopica e a cielo aperto)',
      'Artroscopia di spalla',
      'Protesizzazione della spalla (primi impianti e revisioni)',
      'Trattamento lesioni della cuffia dei rotatori e instabilità articolare',
      'Traumatologia dello sport e lesioni articolari',
      'Inquadramento clinico e diagnostico personalizzato',
      'Pianificazione del percorso di riabilitazione e follow-up post-operatorio'
    ],
    topDoctorsUrl: 'https://www.topdoctors.it/dottor/michele-roberto-miranda/',
    photoUrl: '/michele-miranda.jpg',
    curriculumVitae: {
      experienceYears: '29 anni di esperienza',
      experiences: [
        'Dirigente Medico di I° livello – Alta Specialità Chirurgia della Spalla presso l\'Ospedale Niguarda di Milano',
        'Responsabile dell’Ambulatorio Istituzionale di Chirurgia della Spalla (Ospedale Niguarda)',
        'Membro attivo dell’Ospedale Olimpico Niguarda durante i XXV Giochi Olimpici Invernali Milano-Cortina 2026',
        'Medico delle Nazionali di Sci Alpino con la Commissione Medica FISI (1994–2004)',
        'Attività clinica e chirurgica presso l’Istituto Clinico Humanitas (1997–1999)',
        'Professore universitario a contratto presso UNIMI (Corso di Laurea in Scienze Infermieristiche)'
      ],
      subSpecializations: [
        'Chirurgia della spalla',
        'Artroscopia di spalla',
        'Protesizzazione della spalla (primi impianti e revisioni)',
        'Traumatologia dello sport e patologie articolari complesse'
      ],
      academicMilestones: [
        'Laurea in Medicina e Chirurgia – Università degli Studi di Milano (03/07/1992)',
        'Specializzazione in Ortopedia e Traumatologia II – Milano (05/11/1997)',
        'Professore universitario a contratto – Università degli Studi di Milano (UNIMI, Corso di Laurea in Scienze Infermieristiche)'
      ],
      publicationsAndConferences: [
        'Partecipazione frequente a congressi nazionali e internazionali nell’ambito della patologia articolare e traumatica della spalla',
        'Docente e discente in corsi avanzati e cadaver-lab dedicati alla patologia e chirurgia della spalla'
      ],
      languages: [
        'Italiano',
        'Francese'
      ]
    },
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 2. Dr Enrico Lovati
  {
    id: 'prof-02-agopuntura',
    slug: 'enrico-lovati',
    gender: 'M',
    title: 'Dr',
    firstName: 'Enrico',
    lastName: 'Lovati',
    role: 'Medico Chirurgo – Agopuntura e Terapia Antalgica Riabilitativa con ENF',
    category: 'specialistico',
    categoryLabel: 'Agopuntura',
    phone: '335 1270226',
    shortDescription: 'Medico Chirurgo esperto in Agopuntura e terapia antalgica riabilitativa con tecnologia ENF (Electro Neuro Feedback).',
    fullBio: 'Il Dott. Enrico Lovati è Medico Chirurgo specializzato in agopuntura clinica e percorsi integrati di terapia antalgica e riabilitativa. Presso Studio Medico 4M a Bollate applica trattamenti personalizzati di agopuntura e metodiche all\'avanguardia basate sulla tecnologia ENF (Electro Neuro Feedback), offrendo un supporto concreto ed efficace nella gestione del dolore muscolo-scheletrico acuto e cronico, delle contratture, delle cefalee e nel recupero funzionale della persona.',
    services: [
      'Visita medica preliminare e inquadramento clinico',
      'Sedute di agopuntura medica antalgica',
      'Terapia antalgica riabilitativa con tecnologia ENF (Electro Neuro Feedback)',
      'Trattamento del dolore articolare e muscolo-scheletrico acuto e cronico',
      'Trattamento di cefalee muscolo-tensive ed emicranie',
      'Riequilibrio funzionale e rilascio delle contratture'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 3. Dr Roberto Parmigiani
  {
    id: 'prof-03-nutrizione',
    slug: 'roberto-parmigiani',
    gender: 'M',
    title: 'Dr',
    firstName: 'Roberto',
    lastName: 'Parmigiani',
    role: 'Biologo Nutrizionista',
    category: 'nutrizione',
    categoryLabel: 'Nutrizione',
    phone: '351 9417635',
    shortDescription: 'Biologo Nutrizionista: educazione alimentare, piani nutrizionali calibrati, ricomposizione corporea e nutrizione per lo sport.',
    fullBio: 'Il Dott. Roberto Parmigiani è Biologo Nutrizionista operante presso la sede di Studio Medico 4M a Bollate. Accompagna i pazienti in percorsi personalizzati di rieducazione alimentare e benessere metabolico, formulando piani nutrizionali scientificamente fondati e calibrati sulle abitudini di vita, sugli obiettivi di salute e sulle specifiche esigenze di chi pratica attività sportiva.',
    services: [
      'Valutazione dello stato nutrizionale e delle abitudini alimentari',
      'Analisi della composizione corporea',
      'Elaborazione di piani dietetici e nutrizionali personalizzati',
      'Consulenza e nutrizione specifica per lo sportivo',
      'Percorsi di educazione alimentare e gestione del peso',
      'Monitoraggio periodico e verifiche dei risultati'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 4. Dr Mirko Sacrato
  {
    id: 'prof-04-osteopatia',
    slug: 'mirko-sacrato',
    gender: 'M',
    title: 'Dr',
    firstName: 'Mirko',
    lastName: 'Sacrato',
    role: 'Osteopata D.O. m. ROI',
    category: 'benessere',
    categoryLabel: 'Osteopatia',
    phone: '334 3937737',
    shortDescription: 'Osteopata D.O. membro ROI: valutazione posturale, trattamento manipolativo strutturale, fasciale, viscerale e cranio-sacrale.',
    fullBio: 'Il Dott. Mirko Sacrato è Osteopata D.O. iscritto al Registro degli Osteopati d\'Italia (m. ROI). Esercita la libera professione presso Studio Medico 4M a Bollate, applicando tecniche manuali raffinate volte a individuare e trattare le restrizioni di mobilità a carico di colonna, articolazioni, sistema fasciale e viscerale, favorendo il ripristino della fisiologia e dell\'equilibrio globale del corpo.',
    services: [
      'Valutazione posturale globale e analisi biomeccanica',
      'Trattamento manipolativo osteopatico strutturale e fasciale',
      'Approccio viscerale e cranio-sacrale',
      'Trattamento di cervicalgie, dorsalgie, lombalgie e sciatalgie',
      'Osteopatia per atleti e persone con sovraccarico lavorativo',
      'Consigli di ergonomia posturale e prevenzione'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 5. Dr Davide Maria Condoleo
  {
    id: 'prof-05-fisioterapia',
    slug: 'davide-maria-condoleo',
    gender: 'M',
    title: 'Dr',
    firstName: 'Davide Maria',
    lastName: 'Condoleo',
    role: 'Fisioterapista – Sedute di Fisioterapia e Riabilitazione Funzionale',
    category: 'riabilitazione',
    categoryLabel: 'Fisioterapia',
    phone: '329 8193901',
    shortDescription: 'Fisioterapista: riabilitazione motoria post-chirurgica e post-traumatica, terapia manuale ortopedica ed esercizio guidato.',
    fullBio: 'Il Dott. Davide Maria Condoleo è fisioterapista e riabilitatore funzionale presso Studio Medico 4M a Bollate. Struttura percorsi riabilitativi mirati al recupero dell\'autonomia, della forza e della corretta mobilità articolare a seguito di interventi ortopedici, traumi o sindromi dolorose da sovraccarico funzionale, combinando terapia manuale ed esercizio terapeutico attivo.',
    services: [
      'Sedute individuali di fisioterapia e rieducazione motoria',
      'Riabilitazione ortopedica post-operatoria e post-traumatica',
      'Terapia manuale ortopedica per articolazioni e muscoli',
      'Rieducazione funzionale e ginnastica posturale',
      'Esercizio terapeutico personalizzato e rinforzo muscolare',
      'Prevenzione delle recidive e recupero dell\'attività quotidiana e sportiva'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 6. Dr Stefano Rizzi
  {
    id: 'prof-06-plantari',
    slug: 'stefano-rizzi',
    gender: 'M',
    title: 'Dr',
    firstName: 'Stefano',
    lastName: 'Rizzi',
    role: 'Tecnico Ortopedico – Esame Baropodometrico, Studio del Passo e Plantari',
    category: 'specialistico',
    categoryLabel: 'Plantari su Misura',
    phone: '345 5825127',
    shortDescription: 'Tecnico Ortopedico: esame baropodometrico, studio computerizzato del passo e realizzazione artigianale di plantari su misura.',
    fullBio: 'Il Dott. Stefano Rizzi è tecnico ortopedico operante presso lo Studio Medico 4M in Via Madonnina 17 a Bollate. Specializzato nella biomeccanica dell\'appoggio podalico, esegue esami baropodometrici sia statici che dinamici e progetta plantari su misura per la correzione, lo scarico del dolore e l\'ottimizzazione dell\'efficienza in cammino e durante l\'attività sportiva.',
    services: [
      'Esame baropodometrico statico e dinamico computerizzato',
      'Studio approfondito della biomeccanica del passo e dell\'appoggio',
      'Progettazione e realizzazione di plantari ortopedici su misura',
      'Plantari personalizzati per lo sport (corsa, calcio, tennis, sci)',
      'Ortesi di scarico per metatarsalgie, fasciti plantari e talloniti',
      'Controlli periodici e adattamenti progressivi dell\'ortesi'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 7. Dr.ssa Elisa Corsi
  {
    id: 'prof-07-naturopatia',
    slug: 'elisa-corsi',
    gender: 'F',
    title: 'Dr.ssa',
    firstName: 'Elisa',
    lastName: 'Corsi',
    role: 'Naturopata – Specializzata in Riflessologia Plantare',
    category: 'benessere',
    categoryLabel: 'Naturopatia',
    phone: '338 5922800',
    shortDescription: 'Naturopata: riflessologia plantare zonale, riequilibrio psicofisico e consigli di benessere naturale integrato.',
    fullBio: 'La Dr.ssa Elisa Corsi è naturopata specializzata in riflessologia plantare zonale presso la sede di Studio Medico 4M a Bollate. Secondo i principi della naturopatia e dell\'ascolto globale della persona, agisce attraverso la digitopressione dei punti riflessi del piede per stimolare i naturali processi di autoregolazione dell\'organismo, favorire il rilassamento profondo e sciogliere tensioni fisiche ed emotive.',
    services: [
      'Sedute di riflessologia plantare zonale integrata',
      'Consulenza naturopatica personalizzata per il benessere quotidiano',
      'Riequilibrio energetico e riduzione degli stati di tensione e stress',
      'Supporto alla vitalità, alla digestione e al drenaggio naturale',
      'Consigli orientativi su ritmi biologici e rimedi naturali'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 8. Dr.ssa Barbara Palmieri
  {
    id: 'prof-08-psicologia-palmieri',
    slug: 'barbara-palmieri',
    gender: 'F',
    title: 'Dr.ssa',
    firstName: 'Barbara',
    lastName: 'Palmieri',
    role: 'Psicologa Psicoterapeuta – Terapie Individuali e di Coppia, Metodo EMDR',
    category: 'psicologia',
    categoryLabel: 'Psicologia & Psicoterapia',
    phone: '347 8202143',
    shortDescription: 'Psicologa e Psicoterapeuta: percorsi individuali e di coppia, elaborazione di traumi e blocchi emotivi con metodo EMDR.',
    fullBio: 'La Dr.ssa Barbara Palmieri è psicologa e psicoterapeuta attiva presso Studio Medico 4M a Bollate. Accoglie la persona in uno spazio di ascolto protetto e confidenziale, conducendo percorsi di psicoterapia individuale e di coppia. È formata nel metodo EMDR (Eye Movement Desensitization and Reprocessing), un approccio evidence-based riconosciuto a livello internazionale per l\'elaborazione di traumi, lutti, stati d\'ansia, fobie e momenti di crisi esistenziale o relazionale.',
    services: [
      'Colloqui di psicoterapia individuale per adulti e giovani adulti',
      'Terapia di coppia e supporto alla comunicazione relazionale',
      'Trattamento con metodo EMDR per traumi, ansia ed eventi stressanti',
      'Gestione di attacchi di panico, fobie e sovraccarico emotivo',
      'Accompagnamento nelle fasi critiche di transizione di vita',
      'Sviluppo delle risorse personali e dell\'autostima'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 9. Dr.ssa Paola Scaturchio
  {
    id: 'prof-09-psicologia-scaturchio',
    slug: 'paola-scaturchio',
    gender: 'F',
    title: 'Dr.ssa',
    firstName: 'Paola',
    lastName: 'Scaturchio',
    role: 'Psicologa Psicoterapeuta – Terapie Individuali, di Coppia e Familiari',
    category: 'psicologia',
    categoryLabel: 'Psicologia & Psicoterapia',
    phone: '371 4466123',
    shortDescription: 'Psicologa Psicoterapeuta: percorsi clinici individuali, terapia di coppia e supporto alle dinamiche e complessità familiari.',
    fullBio: 'La Dr.ssa Paola Scaturchio è psicologa e psicoterapeuta presso Studio Medico 4M a Bollate. Svolge la propria attività clinica dedicandosi alla presa in carico del singolo, della coppia e del nucleo familiare. Offre uno spazio accogliente e non giudicante per affrontare sofferenze emotive, conflitti relazionali, difficoltà educative o genitoriali, sostenendo la costruzione di nuovi equilibri e legami più armoniosi.',
    services: [
      'Psicoterapia individuale per disagio psicologico e relazionale',
      'Terapia di coppia per crisi coniugali e difficoltà di comunicazione',
      'Consulenza e psicoterapia familiare',
      'Supporto alla genitorialità nelle diverse fasi di crescita dei figli',
      'Elaborazione di separazioni, conflitti familiari e momenti di crisi',
      'Percorsi di consapevolezza emotiva e relazionale'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 10. Dr.ssa Maristella Santaguida
  {
    id: 'prof-10-psicologia-santaguida',
    slug: 'maristella-santaguida',
    gender: 'F',
    title: 'Dr.ssa',
    firstName: 'Maristella',
    lastName: 'Santaguida',
    role: 'Psicologa Psicoterapeuta – Terapie Individuali, di Coppia e Familiari',
    category: 'psicologia',
    categoryLabel: 'Psicologia & Psicoterapia',
    phone: '329 2750720',
    shortDescription: 'Psicologa e Psicoterapeuta: consulenze individuali, percorsi di coppia e sostegno per dinamiche e passaggi evolutivi familiari.',
    fullBio: 'La Dr.ssa Maristella Santaguida è psicologa psicoterapeuta attiva presso Studio Medico 4M a Bollate. Con competenza ed empatia guida la persona, la coppia e la famiglia nella comprensione dei momenti di fragilità, guidando il processo terapeutico verso la risoluzione di blocchi comunicativi, disagi ansioso-depressivi e cambiamenti significativi nella sfera personale o lavorativa.',
    services: [
      'Colloqui clinici e psicoterapia individuale',
      'Percorsi terapeutici di coppia e gestione delle conflittualità',
      'Sostegno alle famiglie e consulenza genitoriale',
      'Supporto nell\'affrontare lutti, cambiamenti radicali e stress prolungato',
      'Interventi per il benessere psicologico e l\'autoefficacia relazionale'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 11. Dr.ssa Beatrice Scutieri
  {
    id: 'prof-11-psicologia-scutieri',
    slug: 'beatrice-scutieri',
    gender: 'F',
    title: 'Dr.ssa',
    firstName: 'Beatrice',
    lastName: 'Scutieri',
    role: 'Psicologa – Supporto Psicologico e Valutazioni Psicodiagnostiche',
    category: 'psicologia',
    categoryLabel: 'Psicologia Clinica',
    phone: '351 3961939',
    shortDescription: 'Psicologa: percorsi di supporto psicologico, assessment diagnostico e valutazioni psicodiagnostiche strutturate.',
    fullBio: 'La Dr.ssa Beatrice Scutieri è psicologa clinica presso Studio Medico 4M a Bollate. Si occupa di consulenza psicologica individuale e di percorsi mirati di valutazione psicodiagnostica, offrendo un inquadramento attento e scientifico delle risorse emotive e cognitive della persona, con colloqui di supporto orientati a superare momenti di blocco, ansia o disorientamento.',
    services: [
      'Valutazioni psicodiagnostiche e assessment clinico della personalità',
      'Colloqui individuali di ascolto e supporto psicologico',
      'Inquadramento clinico per difficoltà emotive e adattive',
      'Orientamento nella gestione di ansia, stress e sovraccarico',
      'Sviluppo di strategie di coping e consapevolezza di sé'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  },

  // 12. Dr.ssa Giulia Concetta Gentile
  {
    id: 'prof-12-psicologia-gentile',
    slug: 'giulia-concetta-gentile',
    gender: 'F',
    title: 'Dr.ssa',
    firstName: 'Giulia Concetta',
    lastName: 'Gentile',
    role: 'Psicologa – Supporto Psicologico e Valutazioni Psicodiagnostiche',
    category: 'psicologia',
    categoryLabel: 'Psicologia Clinica',
    phone: '375 8761376',
    shortDescription: 'Psicologa clinica: colloqui di supporto psicologico per giovani e adulti, assessment e percorsi psicodiagnostici.',
    fullBio: 'La Dr.ssa Giulia Concetta Gentile è psicologa clinica operante presso Studio Medico 4M a Bollate. Accoglie adolescenti, giovani adulti e adulti in uno spazio empatico e protetto per percorsi di supporto psicologico e valutazioni psicodiagnostiche, promuovendo il riconoscimento delle proprie potenzialità e il superamento di fasi di disagio emotivo, relazionale o scolastico/professionale.',
    services: [
      'Consulenza e colloqui di sostegno psicologico individuale',
      'Valutazioni psicodiagnostiche e inquadramento clinico',
      'Supporto per problematiche d\'ansia, autostima e sfera emotiva',
      'Interventi per giovani adulti e sfide evolutive di autonomia',
      'Promozione del benessere psicologico e resilienza individuale'
    ],
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'Tutti i professionisti' },
  { id: 'ortopedia', label: 'Ortopedia' },
  { id: 'riabilitazione', label: 'Fisioterapia & Riabilitazione' },
  { id: 'benessere', label: 'Osteopatia & Benessere' },
  { id: 'psicologia', label: 'Psicologia & Psicoterapia' },
  { id: 'nutrizione', label: 'Nutrizione' },
  { id: 'specialistico', label: 'Agopuntura & Podologia' }
] as const;
