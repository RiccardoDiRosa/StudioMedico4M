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
    shortDescription: 'Dirigente Medico ASST Grande Ospedale Metropolitano Niguarda di Milano con Alta Specialità in Chirurgia della Spalla, traumatologia sportiva e patologia ortopedica articolare.',
    fullBio: 'Il Dott. Michele Roberto Miranda è Medico Chirurgo Specialista in Ortopedia e Traumatologia e svolge attività clinica presso l’ASST Grande Ospedale Metropolitano Niguarda di Milano come Dirigente Medico di I° livello – Alta Specialità Chirurgia della Spalla. Grazie all’esperienza sviluppata in 29 anni di Specializzazione gestisce la traumatologia sportiva e della strada di tutti i distretti corporei in fase acuta e cronica, in pazienti dall’età pediatrica al grande anziano. Si confronta giornalmente con la patologia ortopedica di tutte le articolazioni con predilezione per ginocchio, spalla e mano; tratta incruentemente la patologia vertebrale e le affezioni funzionali del piede. Ha sviluppato un profilo particolarmente dedicato alla patologia dell’arto superiore, ricoprendo attualmente il ruolo di Responsabile dell’Ambulatorio Istituzionale di Chirurgia della Spalla con un contratto ospedaliero di Alta Specialità per la Patologia della Spalla. La sua attività chirurgica, svolta in urgenza ed in elezione, comprende sia l’approccio a cielo aperto che quello artroscopico e mininvasivo, sia le tecniche ricostruttive che quelle protesiche, con esperienza consolidata nella protesizzazione della spalla per primi impianti e revisioni. Ha maturato esperienze in contesti clinici differenti, tra cui l’Istituto Ortopedico G. Pini (1990-1997), l’Istituto Clinico Humanitas (1997–1999), l’Institut de la main e de l’epaule Jouvenet di Parigi ed ha collaborato con la Commissione Medica FISI come Medico delle Nazionali di Sci Alpino (1994–2004). Accanto all’attività ospedaliera, ha svolto incarichi di docenza come Professore Universitario a contratto presso UNIMI (Corso di Laurea in Scienze Infermieristiche) ed è stato membro attivo dell’Ospedale Olimpico Niguarda durante i XXV Giochi Olimpici Invernali Milano-Cortina 2026. Partecipa costantemente a congressi/corsi/cadaver-lab nazionali ed internazionali con ruolo di discente, relatore, moderatore, istruttore. Nel suo approccio clinico integra l’esperienza maturata in ambito ospedaliero con un percorso di presa in carico chiaro e personalizzato, orientato al recupero della funzione e al ritorno alle attività quotidiane e sportive in sicurezza, attraverso una pianificazione attenta del trattamento e un follow-up dedicato.',
    bioParagraphs: [
      'Il Dott. Michele Roberto Miranda è Medico Chirurgo Specialista in Ortopedia e Traumatologia e svolge attività clinica presso l’ASST Grande Ospedale Metropolitano Niguarda di Milano come Dirigente Medico di I° livello – Alta Specialità Chirurgia della Spalla.',
      'Grazie all’esperienza sviluppata in 29 anni di Specializzazione gestisce la traumatologia sportiva e della strada di tutti i distretti corporei in fase acuta e cronica, in pazienti dall’età pediatrica al grande anziano. Si confronta giornalmente con la patologia ortopedica di tutte le articolazioni con predilezione per ginocchio, spalla e mano; tratta incruentemente la patologia vertebrale e le affezioni funzionali del piede.',
      'Ha sviluppato un profilo particolarmente dedicato alla patologia dell’arto superiore, ricoprendo attualmente il ruolo di Responsabile dell’Ambulatorio Istituzionale di Chirurgia della Spalla con un contratto ospedaliero di Alta Specialità per la Patologia della Spalla.',
      'La sua attività chirurgica, svolta in urgenza ed in elezione, comprende sia l’approccio a cielo aperto che quello artroscopico e mininvasivo, sia le tecniche ricostruttive che quelle protesiche, con esperienza consolidata nella protesizzazione della spalla per primi impianti e revisioni.',
      'Ha maturato esperienze in contesti clinici differenti, tra cui l’Istituto Ortopedico G. Pini (1990-1997), l’Istituto Clinico Humanitas (1997–1999), l’Institut de la main e de l’epaule Jouvenet di Parigi ed ha collaborato con la Commissione Medica FISI come Medico delle Nazionali di Sci Alpino (1994–2004).',
      'Accanto all’attività ospedaliera, ha svolto incarichi di docenza come Professore Universitario a contratto presso UNIMI (Corso di Laurea in Scienze Infermieristiche) ed è stato membro attivo dell’Ospedale Olimpico Niguarda durante i XXV Giochi Olimpici Invernali Milano-Cortina 2026.',
      'Partecipa costantemente a congressi/corsi/cadaver-lab nazionali ed internazionali con ruolo di discente, relatore, moderatore, istruttore.',
      'Nel suo approccio clinico integra l’esperienza maturata in ambito ospedaliero con un percorso di presa in carico chiaro e personalizzato, orientato al recupero della funzione e al ritorno alle attività quotidiane e sportive in sicurezza, attraverso una pianificazione attenta del trattamento e un follow-up dedicato.'
    ],
    services: [
      'Visite specialistiche ortopediche per tutte le articolazioni (con predilezione per spalla, ginocchio e mano)',
      'Traumatologia sportiva e della strada in fase acuta e cronica (dall\'età pediatrica al grande anziano)',
      'Chirurgia della spalla (a cielo aperto, artroscopica e mininvasiva, ricostruttiva e protesica)',
      'Protesizzazione della spalla per primi impianti e revisioni',
      'Trattamento incruento della patologia vertebrale e delle affezioni funzionali del piede',
      'Pianificazione personalizzata del trattamento e follow-up dedicato per il recupero funzionale e sportivo'
    ],
    topDoctorsUrl: 'https://www.topdoctors.it/dottor/michele-roberto-miranda/',
    photoUrl: '/images/michele.webp',
    curriculumVitae: {
      experienceYears: '29 anni di specializzazione',
      experiences: [
        'Dirigente Medico di I° livello – Alta Specialità Chirurgia della Spalla presso l\'ASST Grande Ospedale Metropolitano Niguarda di Milano',
        'Responsabile dell’Ambulatorio Istituzionale di Chirurgia della Spalla (Ospedale Niguarda)',
        'Membro attivo dell’Ospedale Olimpico Niguarda durante i XXV Giochi Olimpici Invernali Milano-Cortina 2026',
        'Medico delle Nazionali di Sci Alpino con la Commissione Medica FISI (1994–2004)',
        'Attività clinica e chirurgica presso l’Istituto Clinico Humanitas (1997–1999)',
        'Esperienza presso l’Istituto Ortopedico G. Pini (1990–1997) e l’Institut de la main e de l’epaule Jouvenet di Parigi',
        'Professore Universitario a contratto presso UNIMI (Corso di Laurea in Scienze Infermieristiche)'
      ],
      subSpecializations: [
        'Patologia dell’arto superiore e Chirurgia della spalla',
        'Chirurgia a cielo aperto, artroscopica e mininvasiva',
        'Tecniche ricostruttive e protesiche (primi impianti e revisioni)',
        'Patologia ortopedica di ginocchio, spalla e mano',
        'Traumatologia sportiva e della strada in fase acuta e cronica',
        'Trattamento incruento patologia vertebrale e affezioni funzionali del piede'
      ],
      academicMilestones: [
        'Laurea in Medicina e Chirurgia – Università degli Studi di Milano (03/07/1992)',
        'Specializzazione in Ortopedia e Traumatologia II – Milano (05/11/1997)',
        'Professore Universitario a contratto – Università degli Studi di Milano (UNIMI, Corso di Laurea in Scienze Infermieristiche)'
      ],
      publicationsAndConferences: [
        'Partecipa costantemente a congressi, corsi e cadaver-lab nazionali ed internazionali con ruolo di discente, relatore, moderatore e istruttore'
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
    role: 'Medico Chirurgo – Esperto in Agopuntura',
    category: 'agopuntura',
    categoryLabel: 'Agopuntura',
    phone: '335 1270226',
    photoUrl: '/images/enricolovati.webp',
    shortDescription: 'Medico Chirurgo con oltre 40 anni di esperienza clinica e medico di medicina generale SSN fino al 2024. Diplomato in Agopuntura presso la scuola SOWEN di Milano.',
    fullBio: 'Il Dott. Enrico Lovati è Medico Chirurgo con oltre quarant’anni di esperienza clinica e di assistenza sanitaria territoriale. Laureato in Medicina e Chirurgia presso l’Università degli Studi di Milano nel 1982, ha esercitato la professione odontoiatrica presso il proprio studio dal 1982 al 2020 e, dal 1987 al 2024, ha operato come Medico di Medicina Generale convenzionato con il Servizio Sanitario Nazionale (SSN). Dal 2022 ha integrato la propria attività con la specialità di Agopuntura medica, conseguendo il diploma quadriennale presso la prestigiosa scuola SOWEN di Milano. Presso Studio Medico 4M a Bollate applica le pratiche dell’agopuntura classica e olistica per ristabilire lo stato di salute e di equilibrio dell’organismo attraverso l’inserimento di aghi sottili lungo i meridiani energetici. L’agopuntura favorisce la corretta circolazione di energia e sangue, potenziando le difese naturali del corpo e trovando efficace applicazione in patologie muscolo-tendinee e articolari, dolore cronico, cefalee ed emicranie, disturbi emotivi come ansia, stress, insonnia e depressione, nonché affezioni organiche, digestive, allergiche e ginecologiche, con piani terapeutici personalizzati adatti a ogni fascia d’età, dai bambini agli adulti.',
    bioParagraphs: [
      'Il Dott. Enrico Lovati è Medico Chirurgo con oltre quarant’anni di esperienza nella tutela della salute della persona. Ha conseguito la Laurea in Medicina e Chirurgia presso l’Università degli Studi di Milano il 12 marzo 1982.',
      'Dal 1982 al 2020 ha esercitato la professione odontoiatrica presso il proprio studio medico e, dal 1987 al 2024, ha svolto con dedizione il ruolo di Medico di Medicina Generale convenzionato con il Servizio Sanitario Nazionale (SSN), accompagnando generazioni di pazienti con una visione clinica attenta alla persona nella sua globalità.',
      'Dal 2022 ad oggi ha affiancato la specialità di Agopuntura, dopo aver conseguito il diploma presso la storica e rinomata scuola SOWEN di Milano.',
      'Lo scopo dell’agopuntura è ristabilire lo stato di salute e di benessere del paziente mediante l’inserimento di sottili aghi in specifici punti del corpo. Per la medicina tradizionale cinese, lo stato di malattia viene causato da una cattiva o alterata circolazione dell’energia e del sangue, con conseguente accumulo o carenza tra i vari distretti corporei.',
      'Inoculando sottili aghi lungo l’asse dei meridiani, l’agopuntura ripristina l’equilibrio energetico dell’individuo, stimolando e potenziando le difese naturali dell’organismo per difenderlo dalle malattie e garantire un recupero funzionale duraturo.',
      'L’agopuntura trova efficace applicazione in patologie muscolo-tendinee (mal di schiena, dolori articolari, contratture), dolore cronico, cefalee ed emicranie, disturbi psichici ed emotivi (stress, ansia, depressione, insonnia, dipendenze) e patologie organiche come disturbi digestivi, allergie, sindrome premestruale, sintomi della menopausa e percorsi di fertilità. Presso Studio Medico 4M si sviluppano programmi adatti a ogni fascia d’età, dai bambini agli adulti.'
    ],
    services: [
      'Visita medica preliminare e inquadramento energetico in medicina tradizionale cinese',
      'Sedute di agopuntura medica per il riequilibrio energetico e funzionale',
      'Trattamento del dolore acuto e cronico, lesioni e tensioni muscolo-tendinee',
      'Cura di lombalgie, cervicalgie, dorsalgie e problematiche articolari',
      'Trattamento di cefalee muscolo-tensive, emicranie e nevralgie',
      'Supporto per disturbi emotivi: ansia, stress, insonnia, depressione e dipendenze',
      'Trattamento di disturbi funzionali ed organici: problemi digestivi e allergie',
      'Supporto per sindrome premestruale, sintomi della menopausa e percorsi di fertilità',
      'Piani di trattamento personalizzati per bambini, giovani, adulti e anziani'
    ],
    curriculumVitae: {
      experienceYears: 'Oltre 40 anni di esperienza medica',
      experiences: [
        'Medico Chirurgo ed esperto in Agopuntura presso Studio Medico 4M (Bollate)',
        'Medico di Medicina Generale (MMG) convenzionato con il SSN (1987–2024)',
        'Attività professionale odontoiatrica presso proprio studio medico (1982–2020)',
        'Diploma quadriennale in Agopuntura presso la Scuola SOWEN di Milano (2022)'
      ],
      academicMilestones: [
        'Diploma in Agopuntura – Scuola SOWEN di Milano (2022)',
        'Laurea in Medicina e Chirurgia – Università degli Studi di Milano (12/03/1982)'
      ],
      subSpecializations: [
        'Agopuntura medica tradizionale cinese',
        'Riequilibrio energetico lungo i meridiani',
        'Terapia antalgica del dolore cronico e muscolo-scheletrico',
        'Trattamento di cefalee ed emicranie',
        'Gestione di ansia, insonnia e disturbi correlati allo stress',
        'Medicina generale e presa in carico globale della persona'
      ],
      languages: [
        'Italiano'
      ]
    },
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
    role: 'Osteopata D.O. m.ROI',
    category: 'osteopatia',
    categoryLabel: 'Osteopatia',
    phone: '334 3937737',
    email: 'Osteopata.mirkosacrato@gmail.com',
    mioDottoreUrl: 'https://www.miodottore.it/profilo/mirko-sacrato',
    photoUrl: '/images/mirkos.webp',
    shortDescription: 'Osteopata D.O. m.ROI (Tessera n° 5711) con formazione SOMA Milano. Trattamento manuale muscolo-scheletrico, viscerale, cranio-sacrale e stomatognatico.',
    fullBio: 'Mirko Sacrato è Osteopata D.O. m.ROI, membro del Registro degli Osteopati d’Italia (Tessera n° 5711), formatosi presso SOMA Istituto Osteopatia Milano con competenze specialistiche nella valutazione e nel trattamento manuale dei disturbi del sistema muscolo-scheletrico, viscerale, cranio-sacrale e stomatognatico. Il suo approccio si fonda sui principi dell’osteopatia classica e sulle più aggiornate evidenze scientifiche, con l’obiettivo di favorire i processi di autoregolazione e recupero funzionale del corpo, ricercando la causa del sintomo e considerando il corpo come un’unica unità. Attraverso un’analisi clinica approfondita e l’impiego di tecniche manuali specifiche, elabora piani di trattamento individualizzati per adulti e bambini. Nel corso del percorso quinquennale ha svolto tirocini in diversi ospedali milanesi e corsi di leukotaping e taping anaelastico sportivo, realizzando la tesi clinica "Efficacia del trattamento manipolativo osteopatico in pazienti con fibromialgia, studio randomizzato cross-over" presso gli ambulatori SOMA in collaborazione con ALOMAR.',
    bioParagraphs: [
      'Mirko Sacrato è Osteopata D.O. m.ROI, membro del Registro degli Osteopati d’Italia (Tessera n° 5711), con formazione conseguita presso SOMA Istituto Osteopatia Milano.',
      'Possiede competenze specialistiche nella valutazione e nel trattamento manuale dei disturbi del sistema muscolo-scheletrico, viscerale, cranio-sacrale e stomatognatico.',
      'Il suo approccio si fonda sui principi dell’osteopatia classica e sulle più aggiornate evidenze scientifiche, con l’obiettivo di favorire i processi di autoregolazione e recupero funzionale del corpo, ricercando la causa primaria del sintomo e considerando l’organismo nella sua totalità.',
      'Attraverso un’analisi clinica approfondita e tecniche manuali specifiche, elabora percorsi di trattamento individualizzati calibrati sulle esigenze di adulti e bambini.',
      'Durante i 5 anni di studio ha frequentato corsi avanzati di leukotaping, taping anaelastico sportivo e tirocini in diversi ospedali di Milano. Ha svolto la tesi di ricerca dal titolo "Efficacia del trattamento manipolativo osteopatico in pazienti con fibromialgia, studio randomizzato cross-over" presso gli ambulatori SOMA in collaborazione con l’Associazione Lombarda dei Malati Reumatici (ALOMAR).'
    ],
    services: [
      'Valutazione e trattamento di disfunzioni articolari e muscolari',
      'Trattamento di lombalgie, cervicalgie, dorsalgie e colpi di frusta',
      'Correzione di problematiche posturali e sindromi da overuse',
      'Disturbi funzionali viscerali e cefalee muscolo-tensive',
      'Problematiche del sistema stomatognatico (disturbi ATM, bruxismo, tensioni oro-facciali)',
      'Supporto osteopatico in gravidanza e nel post-partum',
      'Prevenzione e ottimizzazione della performance nello sportivo (leukotaping e taping anaelastico sportivo)'
    ],
    curriculumVitae: {
      experiences: [
        'Attività clinica privata come Osteopata D.O. per adulti e bambini presso Studio Medico 4M (Bollate)',
        'Tirocini clinici formativi presso diversi ospedali di Milano durante il percorso quinquennale SOMA',
        'Tesi sperimentale e studio clinico randomizzato cross-over: "Efficacia del trattamento manipolativo osteopatico in pazienti con fibromialgia" con ALOMAR'
      ],
      subSpecializations: [
        'Osteopatia muscolo-scheletrica, viscerale e cranio-sacrale',
        'Sistema stomatognatico (ATM, bruxismo e tensioni oro-facciali)',
        'Supporto osteopatico in gravidanza e post-partum',
        'Osteopatia sportiva, leukotaping e taping anaelastico'
      ],
      academicMilestones: [
        'Diploma in Osteopatia D.O. – SOMA Istituto Osteopatia Milano (corso di 5 anni)',
        'Iscrizione al Registro degli Osteopati d’Italia (m.ROI Tessera n° 5711)',
        'Corso di specializzazione in Leukotaping e Taping anaelastico sportivo'
      ]
    },
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
    role: 'Fisioterapista e Operatore in Discipline Bio-Naturali',
    category: 'riabilitazione',
    categoryLabel: 'Fisioterapia',
    phone: '329 8193901',
    mioDottoreUrl: 'https://www.miodottore.it/profilo/davide-maria-condoleo',
    photoUrl: '/images/davidemaria.webp',
    shortDescription: 'Fisioterapista con diploma in Osteopatia e operatore in discipline bio-naturali specializzato in tecniche osteopatiche olistiche (Neuro Osteopatia®), traumatologia sportiva e riabilitazione.',
    fullBio: 'Fisioterapista con diploma in Osteopatia e operatore in discipline bio-naturali specializzato in tecniche osteopatiche olistiche, formato in Neuro Osteopatia® presso l’accademia Aifromm di Bergamo. Promuove un’idea di salute legata alla cura e al benessere globale della persona, secondo una visione di medicina integrata, collaborando con vari specialisti tra cui ortopedici, gnatologi e psicologi per una gestione del paziente a 360°. È specializzato nella gestione delle problematiche muscolo-scheletriche (cervicali, lombalgie, colpi di frusta), neurologiche, nei trattamenti di riabilitazione post-chirurgica e nella traumatologia sportiva (con esperienza nel calcio femminile di Serie B e C). L’obiettivo è quello di riabilitare il paziente e di educarlo per favorire una miglior qualità della vita.',
    bioParagraphs: [
      'Fisioterapista con diploma in Osteopatia e operatore in discipline bio-naturali specializzato in tecniche osteopatiche olistiche, formato in Neuro Osteopatia® presso l’accademia Aifromm di Bergamo.',
      'Promuove un’idea di salute legata alla cura e al benessere globale della persona, secondo una visione di medicina integrata. Collabora con vari specialisti, tra cui gnatologi, ortopedici e psicologi, per una gestione dei pazienti a 360°.',
      'Specializzato nella gestione delle problematiche muscolo-scheletriche, neurologiche e della traumatologia sportiva (con esperienza nel calcio femminile di Serie B e C), trattamenti di riabilitazione post-chirurgica e gestione di cervicalgie, lombalgie e colpi di frusta.',
      'L’obiettivo è quello di riabilitare il paziente e di educarlo per favorire una miglior qualità della vita, collaborando con altri professionisti in una visione del benessere a 360°.'
    ],
    services: [
      'Tecniche osteopatiche olistiche e Neuro Osteopatia®',
      'Trattamenti di riabilitazione post-chirurgica e fisiokinesiterapia',
      'Gestione di patologie muscolo-scheletriche (cervicali, lombalgie, colpi di frusta)',
      'Traumatologia sportiva (esperienza nel calcio femminile di Serie B e C)',
      'Educazione del paziente ed esercizi posturali per la qualità della vita',
      'Collaborazione multidisciplinare integrata (ortopedici, gnatologi, psicologi)'
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
    category: 'plantari',
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
    role: 'Naturopata e Riflessologa Plantare',
    category: 'naturopatia-riflessologia',
    categoryLabel: 'Naturopatia & Riflessologia',
    phone: '338 5922800',
    email: 'info@elisacorsinaturopata.it',
    websiteUrl: 'https://www.elisacorsinaturopata.it',
    photoUrl: '/images/elisacorsi.webp',
    shortDescription: 'Naturopata e riflessologa plantare diplomata SIMO Milano (percorso di 5 anni). Trattamenti secondo la medicina tradizionale cinese: colloquio naturopatico, fiori di Bach, riflessologia plantare e test intolleranze.',
    fullBio: 'Mi chiamo Elisa Corsi, sono una naturopata e riflessologa plantare, diplomata presso la scuola SIMO “Scuola italiana di medicina olistica” dopo 5 anni di formazione. Mi occupo del benessere psicofisico della persona di tutte le fasce d’età, seguendo la medicina tradizionale cinese. I trattamenti da me offerti sono: colloquio naturopatico, in cui consiglio integratori naturali e fiori di Bach; trattamento di riflessologia plantare, ovvero la digitopressione dei piedi per ristabilire l’equilibrio all’interno dell’organismo. Dopo una laurea in comunicazione ho scelto di dedicarmi ad aiutare le persone a ritrovare equilibrio e benessere, specializzandomi in Nutrizione Vitale e diventando riflessologa certificata dal 2020. Considero l’individuo nelle sue 3 dimensioni — fisico, psichico e animico — con una visione olistica ed empatica per accompagnare la persona verso un percorso di armonia e consapevolezza.',
    bioParagraphs: [
      'Mi chiamo Elisa Corsi, sono una naturopata e riflessologa plantare, diplomata presso la scuola SIMO “Scuola italiana di medicina olistica” dopo 5 anni di formazione.',
      'Mi occupo del benessere psicofisico della persona di tutte le fasce d’età, seguendo la medicina tradizionale cinese.',
      'I trattamenti da me offerti sono: colloquio naturopatico, in cui consiglio integratori naturali e fiori di Bach; trattamento di riflessologia plantare, ovvero la digitopressione dei piedi per ristabilire l’equilibrio all’interno dell’organismo; consulenza naturopatica con test kinesiologico delle intolleranze alimentari e nutrizione consapevole.',
      'Dopo una laurea in comunicazione ho scelto di dedicarmi a ciò che sentivo davvero mio: aiutare le persone a ritrovare equilibrio e benessere. Ho intrapreso un percorso di 5 anni alla scuola SIMO di Milano, specializzandomi in Nutrizione Vitale. Dal 2020 sono riflessologa certificata e oggi collaboro con centri olistici e benessere, accompagnando le persone nel loro percorso di crescita personale.',
      'La naturopata è una terapeuta che si occupa del benessere psico-fisico della persona, ponendo al centro l’individuo nelle sue 3 dimensioni: fisico, psichico e animico, con una visione olistica ed empatica volta a individuare le cause del disagio e a favorire il recupero della propria armonia naturale.'
    ],
    services: [
      'Colloquio naturopatico, consigli di integratori naturali e Fiori di Bach',
      'Trattamento di riflessologia plantare (digitopressione dei punti riflessi del piede)',
      'Consulenza naturopatica con test kinesiologico intolleranze alimentari',
      'Percorsi di nutrizione vitale e consapevolezza alimentare',
      'Riequilibrio energetico e psicofisico secondo la Medicina Tradizionale Cinese',
      'Benessere e supporto naturale olistico per tutte le fasce d’età'
    ],
    curriculumVitae: {
      experiences: [
        'Attività di naturopata e riflessologa plantare presso Studio Medico 4M (Bollate)',
        'Collaborazione con centri olistici e benessere (tra cui Arese e Olos Spazio Olistico di Origgio)',
        'Riflessologa certificata dal 2020'
      ],
      subSpecializations: [
        'Riflessologia plantare zonale (digitopressione del piede)',
        'Fiori di Bach e rimedi floreali emozionali',
        'Test kinesiologico intolleranze alimentari',
        'Nutrizione Vitale e alimentazione consapevole',
        'Medicina Tradizionale Cinese'
      ],
      academicMilestones: [
        'Diploma in Naturopatia – SIMO Scuola Italiana di Medicina Olistica Milano (percorso di 5 anni)',
        'Specializzazione in Nutrizione Vitale (SIMO Milano)',
        'Certificazione in Riflessologia Plantare (2020)',
        'Laurea in Comunicazione'
      ]
    },
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
    role: 'Psicologa e Psicoterapeuta a orientamento psicodinamico',
    category: 'psicologia',
    categoryLabel: 'Psicologia & Psicoterapia',
    phone: '329 1292230',
    photoUrl: '/images/barbarapalmieri.webp',
    shortDescription: 'Psicologa e psicoterapeuta a orientamento psicodinamico. Percorsi di cura individuali per adulti, adolescenti e bambini, sostegno per minori e famiglie e trattamento dei traumi con approccio EMDR.',
    fullBio: 'La Dr.ssa Barbara Palmieri è psicologa e psicoterapeuta a orientamento psicodinamico. Offre percorsi di cura individuali per adulti, adolescenti e bambini che affrontano periodi di vita critici e dolorosi. Gestisce da vent’anni interventi di sostegno per minori e famiglie nei servizi pubblici. Utilizza l’approccio EMDR per il trattamento dei traumi.',
    bioParagraphs: [
      'La Dr.ssa Barbara Palmieri è psicologa e psicoterapeuta a orientamento psicodinamico.',
      'Offre percorsi di cura individuali per adulti, adolescenti e bambini che affrontano periodi di vita critici e dolorosi.',
      'Gestisce da vent’anni interventi di sostegno per minori e famiglie nei servizi pubblici.',
      'Utilizza l’approccio EMDR per il trattamento dei traumi.'
    ],
    services: [
      'Percorsi di cura individuali per adulti, adolescenti e bambini che affrontano periodi di vita critici e dolorosi',
      'Interventi di sostegno per minori e famiglie',
      'Trattamento dei traumi con approccio EMDR'
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
    role: 'Psicologa e Psicoterapeuta con formazione sistemico-relazionale',
    category: 'psicologia',
    categoryLabel: 'Psicologia & Psicoterapia',
    phone: '371 4466123',
    photoUrl: '/images/paolascaturchio.webp',
    shortDescription: 'Psicologa psicoterapeuta con formazione sistemico-relazionale. Specializzata nella terapia con coppie in crisi e famiglie, percorsi con adolescenti, giovani e adulti. Terapeuta EMDR.',
    fullBio: 'La Dr.ssa Paola Scaturchio è psicologa psicoterapeuta con formazione sistemico-relazionale. È specializzata nella terapia con le coppie in crisi e le famiglie che attraversano periodi di sofferenza. Si occupa anche di percorsi di consultazione e psicoterapia con adolescenti, giovani e adulti. Ha un’esperienza ventennale di lavoro nei servizi pubblici per l’aiuto ai minori e alle famiglie in difficoltà. È terapeuta EMDR.',
    bioParagraphs: [
      'La Dr.ssa Paola Scaturchio è psicologa psicoterapeuta con formazione sistemico-relazionale.',
      'Specializzata nella terapia con le coppie in crisi e le famiglie che attraversano periodi di sofferenza.',
      'Si occupa anche di percorsi di consultazione e psicoterapia con adolescenti, giovani e adulti.',
      'Ha un’esperienza ventennale di lavoro nei servizi pubblici per l’aiuto ai minori e alle famiglie in difficoltà.',
      'Terapeuta EMDR.'
    ],
    services: [
      'Terapia con le coppie in crisi e le famiglie che attraversano periodi di sofferenza',
      'Percorsi di consultazione e psicoterapia con adolescenti, giovani e adulti',
      'Interventi e sostegno per minori e famiglie in difficoltà',
      'Trattamento con metodo EMDR (Terapeuta EMDR)'
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
    role: 'Psicologa dell’Età Evolutiva e Psicoterapeuta Sistemico-Relazionale',
    category: 'psicologia',
    categoryLabel: 'Psicologia & Psicoterapia',
    email: 'maristellasantaguida@yahoo.it',
    photoUrl: '/images/mariastellasantaguida.webp',
    shortDescription: 'Psicologa dell’età evolutiva e psicoterapeuta sistemico-relazionale. Percorsi di terapia individuale, di coppia e familiare per bambini, adulti e sostegno genitoriale.',
    fullBio: 'La Dr.ssa Maristella Santaguida è psicologa dell’età evolutiva e psicoterapeuta sistemico-relazionale. Si occupa di bambini, adulti, coppie e famiglie, offrendo uno spazio accogliente e senza giudizio per comprendere le proprie emozioni, affrontare difficoltà che possono generare ansia, frustrazione o tristezza e riscoprire le risorse necessarie a ritrovare il proprio equilibrio. La sua esperienza, maturata anche nei servizi pubblici che si occupano di minori e famiglie interessati da provvedimenti giudiziali, le ha insegnato l’importanza di guardare ogni persona nella complessità della sua storia e dei legami attraverso un ascolto empatico e attento. Intende la terapia come un percorso condiviso nel rispetto dei tempi e della storia di ciascuno, intervenendo su difficoltà relazionali ed emotive, sostegno genitoriale, disturbi d’ansia, traumi, dipendenza affettiva e separazioni conflittuali.',
    bioParagraphs: [
      'La Dr.ssa Maristella Santaguida è psicologa dell’età evolutiva e psicoterapeuta sistemico-relazionale. Si occupa di bambini, adulti, coppie e famiglie.',
      '«Credo che ognuno di noi, nel corso della vita, possa attraversare momenti in cui tutto sembra più difficile: un cambiamento, una perdita, una separazione, una relazione in crisi o emozioni che faticano a trovare spazio e significato.»',
      'La sua esperienza, maturata anche nei servizi pubblici che si occupano di minori e famiglie interessati da provvedimenti giudiziali, le ha insegnato quanto sia importante guardare ogni persona nella complessità della sua storia e dei legami che la accompagnano attraverso un ascolto attento ed empatico.',
      'Offre uno spazio accogliente e senza giudizio, in cui poter comprendere le proprie emozioni, affrontare difficoltà che possono generare ansia, frustrazione, tristezza, per riscoprire le risorse necessarie a ritrovare il proprio equilibrio.',
      'Intende la terapia come a un percorso da costruire insieme, nel rispetto dei tempi e della storia di ciascuno: un luogo in cui fermarsi, dare un nome a ciò che si prova, comprendere le proprie relazioni e scoprire nuove possibilità.',
      'Si occupa di difficoltà relazionali, emotive ed evolutive, sostegno genitoriale, disturbi d’ansia, traumi, dipendenza affettiva, separazioni conflittuali e sintomi psicosomatici attraverso percorsi di terapia individuale, di coppia e familiare.'
    ],
    services: [
      'Terapia individuale per bambini, adolescenti e adulti',
      'Terapia di coppia e supporto nelle relazioni in crisi',
      'Psicoterapia familiare e percorsi di sostegno genitoriale',
      'Interventi per disturbi d’ansia, traumi e sintomi psicosomatici',
      'Supporto per dipendenza affettiva e separazioni conflittuali',
      'Trattamento delle difficoltà relazionali, emotive ed evolutive'
    ],
    curriculumVitae: {
      experiences: [
        'Attività clinica e psicoterapeutica per bambini, adulti, coppie e famiglie presso Studio Medico 4M (Bollate)',
        'Esperienza nei servizi pubblici a supporto di minori e famiglie interessati da provvedimenti giudiziali'
      ],
      subSpecializations: [
        'Psicoterapia sistemico-relazionale',
        'Psicologia dell’età evolutiva (bambini e adolescenti)',
        'Terapia di coppia e mediazione nelle separazioni conflittuali',
        'Sostegno alla genitorialità e dinamiche familiari',
        'Disturbi d’ansia, traumi e dipendenza affettiva'
      ]
    },
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
    role: 'Psicologa Clinica, Psicodiagnosta e Psicologa Forense',
    category: 'psicologia',
    categoryLabel: 'Psicologia Clinica',
    phone: '351 3961939',
    email: 'psy.scutieri@gmail.com',
    mioDottoreUrl: 'https://www.miodottore.it/z/j9Logc',
    websiteUrl: 'https://psicologabeatricescutieri.it',
    photoUrl: '/images/beatricescutieri.webp',
    shortDescription: 'Psicologa iscritta all’Albo della Regione Lombardia, in formazione psicoterapeutica a orientamento psicoanalitico lacaniano. Colloqui individuali, di coppia e familiari, valutazioni psicodiagnostiche (ADHD, DSA) e consulenza forense (CTP).',
    fullBio: '«C’è un privilegio raro nell’ascoltare, per la prima volta, una storia che non ha mai osato dirsi a voce alta. Ogni sintomo ha un senso: comprenderlo permette di trasformare ciò che oggi limita in qualcosa che può evolvere.» La Dr.ssa Beatrice Scutieri è Psicologa iscritta all’Albo della Regione Lombardia, attualmente in perfezionamento accademico in Psicoterapia a orientamento psicoanalitico lacaniano presso l’Istituto Freudiano per la clinica, la terapia e la scienza. Riceve in presenza presso lo Studio Medico 4M di Bollate e online in tutta Italia, rivolgendosi a bambini, adolescenti, giovani adulti, adulti e coppie, oltre a offrire supporto ai genitori per accompagnare i più giovani nei contesti di vita, scolastici e familiari. Nel suo lavoro coniuga la conoscenza clinica e gli strumenti di valutazione psicodiagnostica con l’attenzione alla singolarità di ogni persona: la diagnosi è intesa non come un’etichetta definitoria, ma come uno strumento utile a comprendere le difficoltà e orientare interventi mirati. Guidata dall’orientamento psicoanalitico lacaniano, valorizza lo spazio di parola e di ascolto — prestando attenzione anche ai non detti e alle dinamiche che si ripetono — per accompagnare la persona a dare significato alla propria esperienza e trovare un rapporto diverso con ciò che la fa soffrire. Ha maturato esperienze in contesti clinici, educativi e scolastici, svolgendo tirocini presso Jonas Onlus Milano (di Massimo Recalcati), ADES – Associazione Diabete e Solidarietà e presso il centro Parole in Movimento – Diagnosi, Terapia e Cura, specializzato nella valutazione diagnostica delle condizioni del neurosviluppo (ADHD, DSA, disturbi dello spettro autistico e plusdotazione). Come psicologa scolastica e docente di sostegno nella scuola secondaria di primo grado, ha progettato interventi di mentoring e percorsi educativi individualizzati per il disagio adolescenziale e l’inclusione. Nell’attività privata si occupa inoltre di screening neuropsicologico, potenziamento cognitivo e Psicologia Giuridica e Forense in qualità di Consulente Tecnico di Parte (CTP) con formazione specialistica anche come CTU.',
    bioParagraphs: [
      '«C’è un privilegio raro nell’ascoltare, per la prima volta, una storia che non ha mai osato dirsi a voce alta. Ogni sintomo ha un senso: comprenderlo permette di trasformare ciò che oggi limita in qualcosa che può evolvere.»',
      'La Dr.ssa Beatrice Scutieri è Psicologa iscritta all’Albo della Regione Lombardia, attualmente in perfezionamento accademico in Psicoterapia a orientamento psicoanalitico lacaniano presso l’Istituto Freudiano per la clinica, la terapia e la scienza. Riceve in presenza presso lo Studio Medico 4M di Bollate e online in tutta Italia, rivolgendosi a bambini, adolescenti, giovani adulti, adulti e coppie, e affiancando i genitori nel sostenere in modo consapevole i figli nei contesti familiari e scolastici.',
      'Nel suo approccio clinico tiene insieme gli strumenti di valutazione psicodiagnostica e l’attenzione alla singolarità di ogni persona: la diagnosi non coincide mai con la persona che la riceve, ma rappresenta una bussola utile a orientare interventi mirati. L’orientamento psicoanalitico lacaniano guida l’ascolto di ciò che si manifesta attraverso la parola e di ciò che resta implicito o si ripete, offrendo uno spazio autentico in cui formulare le proprie domande, andare alla radice del disagio e trasformare il sintomo o l’incertezza in un’occasione di evoluzione personale.',
      'Ha maturato una solida esperienza nei contesti clinici, educativi e dell’età evolutiva attraverso tirocini presso Jonas Onlus Milano di Massimo Recalcati, ADES – Associazione Diabete e Solidarietà e il centro Parole in Movimento – Diagnosi, Terapia e Cura, realtà specializzata nella valutazione diagnostica di ADHD, DSA, disturbi dello spettro autistico e plusdotazione. A questo affianca l’esperienza come psicologa scolastica per il disagio adolescenziale (mentoring e percorsi individualizzati) e come docente di sostegno ed educatrice.',
      'Nell’attività clinica privata svolge colloqui psicologici, analisi della domanda, valutazioni psicodiagnostiche con screening neuropsicologico e percorsi di potenziamento per bambini e adulti, lavorando in rete con gli altri professionisti della salute. Ha inoltre conseguito un Master di II livello in Psicodiagnostica Clinica e Forense con formazione specialistica in Consulenza Tecnica d’Ufficio (CTU) e Consulenza Tecnica di Parte (CTP). Le sedute seguono il tariffario dell’Ordine degli Psicologi della Lombardia, con particolare attenzione alla sostenibilità e all’accessibilità del percorso (convenzioni assicurative: UniSalute, Allianz Global Assistance).'
    ],
    services: [
      'Colloquio psicologico individuale (bambini, adolescenti, giovani adulti e adulti) in studio e online',
      'Colloquio psicologico di coppia, consulenza familiare e supporto alla genitorialità',
      'Valutazione psicodiagnostica, somministrazione test psicologici e screening neuropsicologico',
      'Inquadramento diagnostico e potenziamento per DSA, ADHD, spettro autistico, plusdotazione e orientamento scolastico',
      'Trattamento di ansia, angoscia, attacchi di panico, depressione, fobie e vissuti traumatici',
      'Supporto per difficoltà relazionali, crisi di coppia e disturbi della sfera sessuale',
      'Percorsi di supporto per Disturbi del Comportamento Alimentare (DCA)',
      'Consulenza giuridica e psicologia forense – Consulenza Tecnica di Parte (CTP)'
    ],
    curriculumVitae: {
      experiences: [
        'Attività clinica privata di consulenza psicologica, psicodiagnostica e potenziamento presso Studio Medico 4M (Bollate) e online',
        'Tirocinio clinico presso Parole in Movimento – Diagnosi, Terapia e Cura (valutazione diagnostica di ADHD, DSA, disturbi dello spettro autistico e plusdotazione)',
        'Tirocinio clinico presso Jonas Onlus Milano (di Massimo Recalcati) e ADES – Associazione Diabete e Solidarietà',
        'Psicologa scolastica nell’ambito del disagio adolescenziale (mentoring e percorsi individualizzati in rete con famiglie e scuola)',
        'Docente di sostegno nella scuola secondaria di primo grado ed esperienza come educatrice scolastica, domiciliare e per l’infanzia',
        'Attività di Consulenza Tecnica di Parte (CTP) e formazione specialistica CTU in ambito di Psicologia Giuridica e Forense'
      ],
      subSpecializations: [
        'Psicologia clinica a orientamento psicoanalitico lacaniano',
        'Psicodiagnostica clinica, testistica e screening neuropsicologico',
        'Condizioni del neurosviluppo (ADHD, DSA, Autismo, Plusdotazione)',
        'Psicologia Giuridica e Forense (CTU / CTP)',
        'Età evolutiva, disagio adolescenziale e supporto alla genitorialità',
        'Terapia individuale, di coppia e familiare'
      ],
      academicMilestones: [
        'Iscrizione all’Albo degli Psicologi della Regione Lombardia',
        'Specializzanda in Psicoterapia a orientamento psicoanalitico lacaniano – Istituto Freudiano per la clinica, la terapia e la scienza',
        'Master di II livello in Psicodiagnostica Clinica e Forense (formazione specialistica CTU e CTP)',
        'Laurea Specialistica in Psicologia per il benessere: empowerment, riabilitazione e tecnologia positiva',
        'Laurea Triennale in Scienze e Tecniche di Psicologia Cognitiva'
      ],
      languages: [
        'Italiano'
      ]
    },
    consultationDays: 'Riceve su appuntamento (in studio e online)',
    isComplete: true,
    isPublished: true
  },

  // 12. Dr.ssa Giulia Gentile
  {
    id: 'prof-12-psicologia-gentile',
    slug: 'giulia-gentile',
    gender: 'F',
    title: 'Dr.ssa',
    firstName: 'Giulia',
    lastName: 'Gentile',
    role: 'Psicologa Clinica ad Orientamento Sistemico-Relazionale',
    category: 'psicologia',
    categoryLabel: 'Psicologia Clinica',
    phone: '375 8761376',
    mioDottoreUrl: 'https://www.miodottore.it/profilo/giulia-gentile',
    photoUrl: '/images/giuliagentile.webp',
    shortDescription: 'Psicologa Clinica iscritta all’Ordine degli Psicologi della Lombardia (N° 28213). Percorsi psicologici ad orientamento sistemico-relazionale per adolescenti, giovani adulti, adulti, coppie e famiglie.',
    fullBio: 'La Dr.ssa Giulia Gentile è Psicologa Clinica, iscritta all’Ordine degli Psicologi della Lombardia (N° 28213). Si occupa di sostegno e percorsi psicologici ad orientamento sistemico-relazionale presso lo Studio Medico 4M a Bollate. Lavora con adolescenti, giovani adulti, adulti, coppie e famiglie, aiutando le persone a comprendere e superare momenti di difficoltà, blocchi evolutivi o conflitti relazionali. Il suo obiettivo è offrire uno spazio d’ascolto sicuro e personalizzato per valorizzare le risorse di ciascuno e ritrovare un nuovo equilibrio.',
    bioParagraphs: [
      'La Dr.ssa Giulia Gentile è Psicologa Clinica, iscritta all’Ordine degli Psicologi della Lombardia (N° 28213).',
      'Si occupa di sostegno e percorsi psicologici ad orientamento sistemico-relazionale, lavorando con adolescenti, giovani adulti, adulti, coppie e famiglie.',
      'Accompagna le persone nell’affrontare e superare momenti di difficoltà, blocchi evolutivi o conflitti relazionali.',
      'Il suo obiettivo è offrire uno spazio d’ascolto sicuro e personalizzato per valorizzare le risorse di ciascuno e ritrovare un nuovo equilibrio.'
    ],
    services: [
      'Colloqui di supporto e percorsi psicologici individuali (adolescenti, giovani adulti, adulti)',
      'Consulenza e percorsi di sostegno psicologico di coppia',
      'Sostegno psicologico familiare ad orientamento sistemico-relazionale',
      'Superamento di blocchi evolutivi e momenti di transizione o difficoltà',
      'Gestione dei conflitti relazionali e valorizzazione delle risorse personali'
    ],
    curriculumVitae: {
      subSpecializations: [
        'Orientamento sistemico-relazionale',
        'Sostegno psicologico per adolescenti e giovani adulti',
        'Consulenza psicologica per adulti, coppie e famiglie',
        'Gestione delle difficoltà relazionali ed evolutive'
      ],
      academicMilestones: [
        'Iscrizione all’Ordine degli Psicologi della Lombardia (N° 28213)',
        'Laurea in Psicologia Clinica'
      ]
    },
    consultationDays: 'Riceve su appuntamento',
    isComplete: true,
    isPublished: true
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'Tutti i professionisti' },
  { id: 'ortopedia', label: 'Ortopedia' },
  { id: 'agopuntura', label: 'Agopuntura' },
  { id: 'osteopatia', label: 'Osteopatia' },
  { id: 'riabilitazione', label: 'Fisioterapia' },
  { id: 'naturopatia-riflessologia', label: 'Naturopatia & Riflessologia' },
  { id: 'nutrizione', label: 'Nutrizione' },
  { id: 'psicologia', label: 'Psicologia & Psicoterapia' },
  { id: 'plantari', label: 'Plantari su Misura' }
] as const;
