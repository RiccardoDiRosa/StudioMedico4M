import { Professional } from '../types';

/**
 * Registro dei 12 liberi professionisti sanitari e del benessere operanti presso lo Studio Professionale 4M a Bollate (MI).
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
    role: 'Medico Chirurgo Specialista in Ortopedia e Traumatologia – Alta Specialità Chirurgia della Spalla, traumatologia sportiva e della strada di tutti i distretti, patologia ortopedica articolare',
    category: 'ortopedia',
    categoryLabel: 'Ortopedia',
    phone: '335 6239371',
    shortDescription: 'Dirigente Medico ASST Grande Ospedale Metropolitano Niguarda di Milano con Alta Specialità in Chirurgia della Spalla, traumatologia sportiva e della strada di tutti i distretti, patologia ortopedica articolare.',
    fullBio: 'Il Dott. Michele Roberto Miranda è Medico Chirurgo Specialista in Ortopedia e Traumatologia – Alta Specialità Chirurgia della Spalla, traumatologia sportiva e della strada di tutti i distretti, patologia ortopedica articolare. Svolge attività clinica presso l’ASST Grande Ospedale Metropolitano Niguarda di Milano come Dirigente Medico di I° livello – Alta Specialità Chirurgia della Spalla. Grazie all’esperienza sviluppata in 29 anni di Specializzazione gestisce la traumatologia sportiva e della strada di tutti i distretti corporei in fase acuta e cronica, in pazienti dall’età pediatrica al grande anziano. Si confronta giornalmente con la patologia ortopedica di tutte le articolazioni con predilezione per ginocchio, spalla e mano; tratta incruentemente la patologia vertebrale e le affezioni funzionali del piede. Ha sviluppato un profilo particolarmente dedicato alla patologia dell’arto superiore, ricoprendo attualmente il ruolo di Responsabile dell’Ambulatorio Istituzionale di Chirurgia della Spalla con un contratto ospedaliero di Alta Specialità per la Patologia della Spalla. La sua attività chirurgica, svolta in urgenza ed in elezione, comprende sia l’approccio a cielo aperto che quello artroscopico e mininvasivo, sia le tecniche ricostruttive che quelle protesiche, con esperienza consolidata nella protesizzazione della spalla per primi impianti e revisioni. Ha maturato esperienze in contesti clinici differenti, tra cui l’Istituto Ortopedico G. Pini (1990-1997), l’Istituto Clinico Humanitas (1997–1999), l’Institut de la main e de l’epaule Jouvenet di Parigi ed ha collaborato con la Commissione Medica FISI come Medico delle Nazionali di Sci Alpino (1994–2004). Accanto all’attività ospedaliera, ha svolto incarichi di docenza come Professore Universitario a contratto presso UNIMI (Corso di Laurea in Scienze Infermieristiche) ed è stato membro attivo dell’Ospedale Olimpico Niguarda durante i XXV Giochi Olimpici Invernali Milano-Cortina 2026. Partecipa costantemente a congressi/corsi/cadaver-lab nazionali ed internazionali con ruolo di discente, relatore, moderatore, istruttore. Nel suo approccio clinico integra l’esperienza maturata in ambito ospedaliero con un percorso di presa in carico chiaro e personalizzato, orientato al recupero della funzione e al ritorno alle attività quotidiane e sportive in sicurezza, attraverso una pianificazione attenta del trattamento e un follow-up dedicato.',
    bioParagraphs: [
      'Il Dott. Michele Roberto Miranda è Medico Chirurgo Specialista in Ortopedia e Traumatologia – Alta Specialità Chirurgia della Spalla, traumatologia sportiva e della strada di tutti i distretti, patologia ortopedica articolare. Svolge attività clinica presso l’ASST Grande Ospedale Metropolitano Niguarda di Milano come Dirigente Medico di I° livello – Alta Specialità Chirurgia della Spalla.',
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
        'Laurea in Medicina e Chirurgia',
        'Specializzazione in Ortopedia e Traumatologia (29 anni di specializzazione)',
        'Professore Universitario a contratto presso UNIMI (Corso di Laurea in Scienze Infermieristiche)'
      ],
      publicationsAndConferences: [
        'Partecipa costantemente a congressi, corsi e cadaver-lab nazionali ed internazionali con ruolo di discente, relatore, moderatore e istruttore'
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
    shortDescription: 'Medico Chirurgo laureato presso l’Università degli Studi di Milano nel 1982, già medico di medicina generale SSN fino al 2024. Diplomato in Agopuntura presso la scuola SOWEN di Milano.',
    fullBio: 'Il Dott. Enrico Lovati è Medico Chirurgo laureato in Medicina e Chirurgia presso l’Università degli Studi di Milano il 12 marzo 1982. Dal 1982 al 2020 ha esercitato la specialità di odontoiatria presso il proprio studio e, dal 1987 al 2024, ha svolto la professione di Medico di Medicina Generale convenzionato con il Servizio Sanitario Nazionale (SSN). Dal 2022 ad oggi ha affiancato la specialità di Agopuntura, avendo conseguito il diploma presso la scuola SOWEN di Milano. Presso lo Studio Professionale 4M a Bollate applica le pratiche antiche e olistiche dell’agopuntura cinese: lo scopo dell’agopuntura è ristabilire lo stato di salute e di benessere del paziente mediante l’inserimento di sottili aghi in specifici punti del corpo lungo l’asse dei meridiani. Per la medicina cinese lo stato di malattia è causato da una cattiva circolazione dell’energia e del sangue, con conseguente accumulo o carenza energetica tra le parti del corpo; l’agopuntura ripristina l’equilibrio energetico dell’individuo e stimola o potenzia le difese dell’organismo, migliorando la sintomatologia avvertita dal paziente. Trova applicazione in numerose condizioni acute e croniche — dai bambini agli adulti — tra cui patologie muscolo-tendinee, lesioni, mal di schiena, dolore cronico, emicrania, patologie psichiche come ansia, stress, depressione, insonnia e dipendenze, oltre a patologie organiche quali problemi digestivi, allergie, sindrome premestruale, sintomi della menopausa e infertilità.',
    bioParagraphs: [
      'Il Dott. Enrico Lovati ha conseguito la Laurea in Medicina e Chirurgia presso l’Università degli Studi di Milano il 12 marzo 1982. Dal 1982 al 2020 ha esercitato la specialità di odontoiatria presso il proprio studio e, dal 1987 al 2024, ha svolto anche la professione di Medico di Medicina Generale convenzionato con il Servizio Sanitario Nazionale (SSN).',
      'Dal 2022 ad oggi ha affiancato alla propria attività clinica la specialità di Agopuntura, avendo conseguito il diploma presso la scuola SOWEN di Milano.',
      'Lo scopo dell’agopuntura è ristabilire lo stato di salute e di benessere del paziente mediante l’inserimento di alcuni sottili aghi in specifici punti del corpo. Per la medicina cinese, infatti, lo stato di malattia viene causato da una cattiva circolazione dell’energia e del sangue, con conseguente accumulo o carenza di energia tra le diverse parti del corpo e uno squilibrio energetico complessivo.',
      'Inoculando sottili aghi nei punti lungo l’asse dei meridiani, l’agopuntura è in grado di ripristinare l’equilibrio energetico dell’individuo, stimolando e potenziando le difese dell’organismo per prepararlo e difenderlo dall’aggressione delle malattie, migliorando così la sintomatologia avvertita dal paziente e garantendo lo stato di benessere.',
      'Utilizzata negli ultimi cinquemila anni attraverso le pratiche antiche e olistiche della medicina cinese, l’agopuntura trova applicazione dal trattamento dei malesseri più comuni fino alle patologie acute o croniche: patologie muscolo-tendinee, lesioni, mal di schiena, dolore cronico ed emicrania, patologie psichiche come ansia, stress, depressione, insonnia e dipendenze, nonché patologie organiche quali problemi digestivi, allergie, sindrome premestruale, sintomi della menopausa e infertilità, con programmi di cura adatti a tutte le età, dai bambini agli adulti.'
    ],
    services: [
      'Sedute di agopuntura per il ripristino dell’equilibrio energetico lungo i meridiani',
      'Trattamento di patologie muscolo-tendinee, lesioni, mal di schiena e dolore cronico',
      'Trattamento dell’emicrania e delle sintomatologie dolorose acute e croniche',
      'Supporto per patologie psichiche ed emotive: ansia, stress, depressione, insonnia e dipendenze',
      'Trattamento di patologie organiche: problemi digestivi e allergie',
      'Trattamento per sindrome premestruale, sintomi della menopausa e infertilità',
      'Programmi di cura personalizzati adatti a tutte le età, dai bambini agli adulti'
    ],
    curriculumVitae: {
      experienceYears: 'Oltre 40 anni di esperienza medica (dal 1982)',
      experiences: [
        'Attività di Agopuntura medica dal 2022 ad oggi presso Studio Professionale 4M (Bollate)',
        'Medico di Medicina Generale convenzionato con il SSN (1987–2024)',
        'Esercizio della specialità di Odontoiatria presso il proprio studio (1982–2020)'
      ],
      academicMilestones: [
        'Diploma in Agopuntura – Scuola SOWEN di Milano (dal 2022)',
        'Laurea in Medicina e Chirurgia – Università degli Studi di Milano (12/03/1982)'
      ],
      subSpecializations: [
        'Agopuntura secondo la medicina cinese e riequilibrio dei meridiani',
        'Trattamento di patologie muscolo-tendinee, mal di schiena, lesioni e dolore cronico',
        'Trattamento di emicrania, insonnia, ansia, stress, depressione e dipendenze',
        'Trattamento di problemi digestivi, allergie, sindrome premestruale, menopausa e infertilità'
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
    role: 'Laureato in Scienze Biologiche con specializzazione in Nutrizione',
    category: 'nutrizione',
    categoryLabel: 'Nutrizione',
    phone: '351 9417635',
    photoUrl: '/images/parmigiani.webp',
    photoPosition: '50% 68%',
    shortDescription: 'Laureato in Scienze Biologiche con specializzazione in Nutrizione. Lavora da marzo 2026 presso il reparto di disturbi alimentari all’Ospedale Niguarda ed è coinvolto nella gestione degli atleti della F.C. Inter.',
    fullBio: 'Il Dott. Roberto Parmigiani è laureato in Scienze Biologiche con specializzazione in Nutrizione. Dopo aver maturato svariate esperienze professionali nel proprio ambito, è approdato presso il reparto di disturbi alimentari all’Ospedale Niguarda di Milano, dove lavora da marzo del 2026. Parallelamente, nell’ambito delle sue varie attività professionali, è coinvolto anche nella gestione degli atleti della F.C. Inter. Presso lo Studio Professionale 4M a Bollate mette a disposizione il proprio percorso formativo e l’esperienza maturata sia in ambito ospedaliero nei disturbi alimentari sia nel contesto sportivo con atleti professionisti.',
    bioParagraphs: [
      'Il Dott. Roberto Parmigiani ha conseguito la laurea in Scienze Biologiche con specializzazione in Nutrizione, sviluppando nel tempo un percorso professionale dedicato all’ambito nutrizionale.',
      'Dopo svariate esperienze sul campo, è approdato presso il reparto di disturbi alimentari all’Ospedale Niguarda di Milano, struttura in cui lavora da marzo del 2026 occupandosi delle problematiche legate ai disturbi dell’alimentazione.',
      'Nelle varie attività che svolge è inoltre coinvolto anche nella gestione degli atleti della F.C. Inter, affiancando così all’impegno ospedaliero l’esperienza diretta con gli atleti in ambito sportivo.',
      'Presso lo Studio Professionale 4M di Bollate riceve su appuntamento mettendo a disposizione le competenze maturate nel campo della nutrizione, dei disturbi alimentari e della gestione nutrizionale degli atleti.'
    ],
    services: [
      'Consulenza e percorsi dedicati alla nutrizione',
      'Supporto nutrizionale nell’ambito dei disturbi alimentari',
      'Gestione e supporto nutrizionale per atleti e sportivi'
    ],
    curriculumVitae: {
      experiences: [
        'Attività presso il reparto di disturbi alimentari all’Ospedale Niguarda di Milano (da marzo 2026)',
        'Coinvolto nella gestione degli atleti della F.C. Inter',
        'Svariate esperienze professionali maturate nell’ambito della nutrizione',
        'Attività professionale presso Studio Professionale 4M (Bollate)'
      ],
      subSpecializations: [
        'Specializzazione in Nutrizione',
        'Disturbi alimentari',
        'Gestione nutrizionale degli atleti'
      ],
      academicMilestones: [
        'Laurea in Scienze Biologiche con specializzazione in Nutrizione'
      ]
    },
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
        'Attività clinica privata come Osteopata D.O. per adulti e bambini presso Studio 4M (Bollate)',
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
    fullBio: 'Il Dott. Davide Maria Condoleo è Fisioterapista con diploma in Osteopatia e operatore in discipline bio-naturali specializzato in tecniche osteopatiche olistiche, formato in Neuro Osteopatia® presso l’accademia Aifromm di Bergamo. Promuove un’idea di salute legata alla cura e al benessere globale della persona, secondo una visione di medicina integrata, collaborando con vari specialisti tra cui ortopedici, gnatologi e psicologi per una gestione dei pazienti a 360°. Ha lavorato presso vari ambulatori e centri medici di Milano e dell’Hinterland ed è specializzato nella gestione delle problematiche muscolo-scheletriche (cervicali, lombalgie, colpi di frusta, tendiniti, contratture, torcicollo e artrosi), neurologiche, nei trattamenti di riabilitazione post-chirurgica e nella traumatologia sportiva, ambito in cui ha maturato esperienza anche nel calcio femminile di Serie B e C. L’obiettivo del suo lavoro è riabilitare il paziente ed educarlo attraverso fisioterapia, fisiokinesiterapia e ginnastica posturale per favorire una miglior qualità della vita.',
    bioParagraphs: [
      'Il Dott. Davide Maria Condoleo è Fisioterapista con diploma in Osteopatia e operatore in discipline bio-naturali specializzato in tecniche osteopatiche olistiche, formato in Neuro Osteopatia® presso l’accademia Aifromm di Bergamo.',
      'Promuove un’idea di salute legata alla cura e al benessere globale della persona, secondo una visione di medicina integrata. Collabora attivamente con vari specialisti, tra cui gnatologi, ortopedici e psicologi, per garantire una presa in carico e una gestione dei pazienti a 360°.',
      'Ha lavorato presso vari ambulatori e centri medici di Milano e dell’Hinterland, acquisendo specifiche competenze nella gestione delle problematiche muscolo-scheletriche (lombalgie, cervicali, colpi di frusta, tendiniti, contratture, torcicollo e artrosi), nelle problematiche neurologiche, nei trattamenti di riabilitazione post-chirurgica e nella traumatologia sportiva, con esperienza maturata nel calcio femminile di Serie B e C.',
      'Attraverso percorsi di fisioterapia, fisiokinesiterapia, esercizi e ginnastica posturale, il suo obiettivo è quello di riabilitare il paziente e di educarlo per favorire una miglior qualità della vita, lavorando in sinergia con gli altri professionisti in una visione del benessere a 360°.'
    ],
    services: [
      'Fisioterapia, fisiokinesiterapia e riabilitazione post-chirurgica',
      'Tecniche osteopatiche olistiche e Neuro Osteopatia®',
      'Gestione di patologie muscolo-scheletriche (cervicali, lombalgie, colpi di frusta, tendinite, contrattura, torcicollo, artrosi)',
      'Riabilitazione per problematiche neurologiche e traumatologia sportiva',
      'Ginnastica posturale, esercizi posturali ed educazione del paziente',
      'Gestione integrata a 360° in collaborazione con ortopedici, gnatologi e psicologi'
    ],
    curriculumVitae: {
      experiences: [
        'Fisioterapista e Operatore in Discipline Bio-Naturali presso Studio Professionale 4M (Bollate)',
        'Attività clinica presso vari ambulatori e centri medici di Milano e dell’Hinterland',
        'Esperienza in traumatologia sportiva nel calcio femminile di Serie B e C',
        'Collaborazione multidisciplinare con ortopedici, gnatologi e psicologi per la gestione del paziente a 360°'
      ],
      subSpecializations: [
        'Fisioterapia, fisiokinesiterapia e riabilitazione post-chirurgica',
        'Tecniche osteopatiche olistiche e Neuro Osteopatia®',
        'Ortopedia e traumatologia del sistema motorio e sportiva',
        'Problematiche muscolo-scheletriche e neurologiche',
        'Esercizi posturali e ginnastica posturale'
      ],
      academicMilestones: [
        'Fisioterapista',
        'Diploma in Osteopatia',
        'Formazione in Neuro Osteopatia® – Accademia Aifromm di Bergamo',
        'Operatore in Discipline Bio-Naturali specializzato in tecniche osteopatiche olistiche'
      ]
    },
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
    role: 'Tecnico Ortopedico – Esame Baropodometrico, Studio del Passo e Plantari su Misura',
    category: 'plantari',
    categoryLabel: 'Plantari su Misura',
    phone: '345 5825127',
    email: 'orthoticsmilano@gmail.com',
    websiteUrl: 'https://www.orthoticsmilano.com',
    photoUrl: '/images/stefanorizzi.webp',
    shortDescription: 'Tecnico Ortopedico abilitato dal Ministero della Salute. Specializzato in esame baropodometrico statico, dinamico e stabilometrico e realizzazione di plantari ortopedici su misura.',
    fullBio: 'Il Dott. Stefano Rizzi è Tecnico Ortopedico abilitato dal Ministero della Salute, laureato in Tecniche Ortopediche presso la Facoltà di Medicina e Chirurgia. Presso lo Studio Professionale 4M a Bollate si occupa dello studio del piede, della valutazione della postura del corpo e della progettazione e realizzazione di plantari ortopedici su misura, previa prescrizione medica. Attraverso una corretta valutazione con pedana baropodometrica statica, dinamica e stabilometrica, rileva le impronte baropodometriche per identificare la migliore ortesi adatta alla fisionomia del piede, quantificare gli effetti del progetto riabilitativo e adottare le misure utili a prevenire, compensare e correggere atteggiamenti posturali, biomeccanici e patologici, combattere i dolori ai piedi e migliorare le prestazioni sportive. Realizza plantari su misura indicati per piede piatto, piede cavo, alluce valgo, metatarsalgia, neuroma di Morton, fascite plantare, tallodinia e instabilità.',
    bioParagraphs: [
      'Il Dott. Stefano Rizzi è un Tecnico Ortopedico abilitato dal Ministero della Salute, operatore sanitario specializzato nella realizzazione di dispositivi in grado di compensare o ridurre i problemi ortopedici. Ha completato il corso di laurea triennale in Tecniche Ortopediche presso la Facoltà di Medicina e Chirurgia (D.I. n. 136 del 2001), titolo abilitante alla professione sanitaria che, ai sensi del D.M. 14/09/1994, prevede su prescrizione medica e successivo collaudo la costruzione, l’adattamento, l’applicazione e la fornitura di ortesi e ausili correttivi e di sostegno dell’apparato locomotore mediante rilevamento diretto sul paziente di misure e modelli.',
      'Il plantare ortopedico su misura viene progettato e realizzato, previa prescrizione medica, per prevenire, compensare e correggere atteggiamenti posturali, biomeccanici e patologici. Rappresenta la soluzione migliore per combattere i dolori ai piedi, prevenire problemi posturali e migliorare le proprie prestazioni sportive.',
      'Per identificare la migliore ortesi adatta al piede di ciascun paziente viene eseguita una corretta valutazione con pedana baropodometrica statica, dinamica e stabilometrica, uno degli strumenti più importanti per lo studio del piede e della postura del corpo. L’esame si sviluppa in due fasi consequenziali: nella fase statica il paziente rimane qualche secondo sulla pedana con tutti e due i piedi poggiati e paralleli; nella fase dinamica il paziente passeggia sulla pedana avanzando alternativamente prima con un piede e poi con l’altro.',
      'Grazie alla pedana baropodometrica è possibile quantificare gli effetti di un progetto riabilitativo nella sua interezza e adottare le relative misure utili a migliorare la postura: la rilevazione delle impronte baropodometriche consente infatti una realizzazione più precisa dei plantari prescritti dal medico, evitando l’acquisto di un supporto non adatto alla fisionomia del piede e risolvendo in modo mirato problematiche quali piede piatto, piede cavo, alluce valgo, metatarsalgia, neuroma di Morton, fascite plantare, tallodinia e instabilità.'
    ],
    services: [
      'Esame baropodometrico statico, dinamico e stabilometrico per lo studio del piede e della postura',
      'Progettazione, realizzazione e adattamento di plantari ortopedici su misura (previa prescrizione medica)',
      'Plantari su misura per piede piatto e piede cavo',
      'Plantari su misura per alluce valgo, metatarsalgia e neuroma di Morton',
      'Plantari su misura per fascite plantare, tallodinia e instabilità',
      'Soluzioni ortesiche per combattere i dolori ai piedi, prevenire problemi posturali e migliorare le prestazioni sportive'
    ],
    curriculumVitae: {
      experienceYears: 'Tecnico Ortopedico Abilitato',
      experiences: [
        'Tecnico Ortopedico presso Studio Professionale 4M (Bollate)',
        'Attività professionale presso Orthotics Milano (www.orthoticsmilano.com)',
        'Esame baropodometrico statico, dinamico e stabilometrico',
        'Progettazione, realizzazione e collaudo di plantari ortopedici su misura su prescrizione medica'
      ],
      academicMilestones: [
        'Laurea triennale in Tecniche Ortopediche – Facoltà di Medicina e Chirurgia (D.I. n. 136/2001, D.M. 14/09/1994)',
        'Abilitazione all’esercizio della professione sanitaria di Tecnico Ortopedico – Ministero della Salute'
      ],
      subSpecializations: [
        'Esame baropodometrico statico, dinamico e stabilometrico',
        'Studio del piede e valutazione della postura del corpo',
        'Plantari ortopedici su misura per atteggiamenti posturali, biomeccanici e patologici',
        'Indicazioni per piede piatto, piede cavo, alluce valgo, metatarsalgia, neuroma di Morton, fascite plantare, tallodinia e instabilità'
      ]
    },
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
    fullBio: 'Mi chiamo Elisa Corsi, sono una naturopata e riflessologa plantare, diplomata presso la scuola SIMO “Scuola italiana di medicina olistica” dopo 5 anni di formazione. Mi occupo del benessere psicofisico della persona di tutte le fasce d’età, seguendo la medicina tradizionale cinese. I trattamenti da me offerti sono: colloquio naturopatico, in cui consiglio integratori naturali e fiori di Bach; trattamento di riflessologia plantare, ovvero la digitopressione dei piedi per ristabilire l’equilibrio all’interno dell’organismo. Dopo una laurea in comunicazione ho scelto di dedicarmi a ciò che sentivo davvero mio: aiutare le persone a ritrovare equilibrio e benessere, intraprendendo il percorso di 5 anni alla scuola SIMO di Milano con specializzazione in Nutrizione Vitale e diventando riflessologa certificata dal 2020. Pongo al centro dell’indagine l’individuo nelle sue 3 dimensioni — fisico, psichico e animico — con una visione olistica volta ad agire sulle cause del sintomo attraverso l’ascolto empatico e rimedi naturali.',
    bioParagraphs: [
      'Mi chiamo Elisa Corsi, sono una naturopata e riflessologa plantare, diplomata presso la scuola SIMO “Scuola italiana di medicina olistica” dopo 5 anni di formazione. Mi occupo del benessere psicofisico della persona di tutte le fasce d’età, seguendo la medicina tradizionale cinese. I trattamenti da me offerti sono: colloquio naturopatico, in cui consiglio integratori naturali e fiori di Bach; trattamento di riflessologia plantare, ovvero la digitopressione dei piedi per ristabilire l’equilibrio all’interno dell’organismo.',
      'Dopo una laurea in comunicazione ho scelto di dedicarmi a ciò che sentivo davvero mio: aiutare le persone a ritrovare equilibrio e benessere. Ho intrapreso un percorso di 5 anni alla scuola SIMO di Milano, specializzandomi in Nutrizione Vitale. Dal 2020 sono riflessologa certificata e oggi collaboro con centri olistici e benessere, accompagnando le persone nel loro percorso di guarigione e crescita personale.',
      'All’interno delle consulenze propongo il supporto naturale ed emozionale dei Fiori di Bach per ritrovare armonia interiore, la stimolazione dei punti riflessi del piede tramite la riflessologia plantare per riequilibrare corpo e mente, e il test kinesiologico delle intolleranze alimentari per scoprire le intolleranze nascoste e ritrovare benessere attraverso una nutrizione consapevole.',
      'La naturopata è una terapeuta che si occupa del benessere psico-fisico della persona e pone al centro della sua indagine l’individuo nelle sue 3 dimensioni: fisico, psichico e animico, con una visione olistica. Mentre la medicina tradizionale agisce per curare il sintomo che porta alla malattia, il naturopata agisce sulle cause del sintomo per affrontare il problema alla radice, accompagnando la persona in un percorso di guarigione prima di tutto interiore utilizzando tecniche e terapie naturali, ascolto, umiltà, empatia e sensibilità.',
      'Credo fermamente che la naturopatia non sia solo una semplice disciplina ma uno stile di vita che accompagna e sostiene la persona, passo dopo passo, durante tutto il suo percorso di vita, affrontando le difficoltà con maggiore consapevolezza verso sé stessi e ciò che ci circonda grazie alla natura e ai suoi rimedi.'
    ],
    services: [
      'Colloquio naturopatico con consiglio di integratori naturali e Fiori di Bach',
      'Consulenza naturopatica con riflessologia plantare (digitopressione dei punti riflessi del piede)',
      'Consulenza naturopatica con test kinesiologico delle intolleranze alimentari',
      'Percorsi di Nutrizione Vitale e nutrizione consapevole',
      'Riequilibrio del benessere psicofisico per tutte le fasce d’età secondo la Medicina Tradizionale Cinese'
    ],
    curriculumVitae: {
      experiences: [
        'Attività di naturopata e riflessologa plantare presso Studio Professionale 4M (Bollate)',
        'Collaborazione con centri olistici e benessere (Arese e “Olos spazio Olistico” di Origgio)',
        'Riflessologa certificata dal 2020'
      ],
      subSpecializations: [
        'Riflessologia plantare (digitopressione dei piedi)',
        'Consulenza naturopatica con Fiori di Bach e integratori naturali',
        'Test kinesiologico intolleranze alimentari',
        'Nutrizione Vitale e nutrizione consapevole',
        'Benessere psicofisico secondo la Medicina Tradizionale Cinese'
      ],
      academicMilestones: [
        'Diploma presso la scuola SIMO “Scuola italiana di medicina olistica” di Milano (percorso di 5 anni)',
        'Specializzazione in Nutrizione Vitale – Scuola SIMO di Milano',
        'Certificazione in Riflessologia Plantare (dal 2020)',
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
    shortDescription: 'Psicologa e psicoterapeuta a orientamento psicodinamico. Percorsi di cura individuali per adulti, adolescenti e bambini, esperienza ventennale a sostegno di minori e famiglie e approccio EMDR per i traumi.',
    fullBio: 'La Dr.ssa Barbara Palmieri è Psicologa e Psicoterapeuta a orientamento psicodinamico. Presso lo Studio Professionale 4M a Bollate offre percorsi di cura individuali rivolti ad adulti, adolescenti e bambini che si trovano ad affrontare periodi di vita critici e dolorosi, proponendo uno spazio clinico di ascolto e di elaborazione secondo la prospettiva psicodinamica. Nel corso della sua attività professionale ha maturato una solida esperienza nei servizi pubblici, dove gestisce da vent’anni interventi di sostegno dedicati ai minori e alle famiglie. All’interno della pratica clinica e psicoterapeutica utilizza inoltre l’approccio EMDR per il trattamento dei traumi.',
    bioParagraphs: [
      'La Dr.ssa Barbara Palmieri è Psicologa e Psicoterapeuta a orientamento psicodinamico e svolge la propria attività clinica su appuntamento presso lo Studio Professionale 4M di Bollate.',
      'Offre percorsi di cura individuali pensati per adulti, adolescenti e bambini che affrontano periodi di vita critici e dolorosi, accompagnando ciascuna persona in un percorso psicoterapeutico calibrato sulle specifiche esigenze della fase di vita attraversata.',
      'Accanto all’attività clinica individuale, gestisce da vent’anni interventi di sostegno per minori e famiglie all’interno dei servizi pubblici, un’esperienza ventennale che arricchisce il lavoro di presa in carico delle fragilità evolutive, personali e familiari.',
      'Nella propria pratica clinica utilizza inoltre l’approccio EMDR per il trattamento e l’elaborazione dei traumi.'
    ],
    services: [
      'Percorsi di cura e psicoterapia individuali per adulti che affrontano periodi di vita critici e dolorosi',
      'Percorsi di cura individuali dedicati ad adolescenti e bambini',
      'Interventi di sostegno psicologico per minori e famiglie',
      'Trattamento psicoterapeutico dei traumi con approccio EMDR'
    ],
    curriculumVitae: {
      experienceYears: '20 anni di esperienza nei servizi pubblici',
      experiences: [
        'Attività clinica di Psicologa e Psicoterapeuta per adulti, adolescenti e bambini presso Studio Professionale 4M (Bollate)',
        'Gestione da vent’anni di interventi di sostegno per minori e famiglie nei servizi pubblici'
      ],
      subSpecializations: [
        'Psicoterapia a orientamento psicodinamico',
        'Percorsi di cura individuali per adulti, adolescenti e bambini',
        'Sostegno per minori e famiglie',
        'Approccio EMDR per il trattamento dei traumi'
      ],
      academicMilestones: [
        'Psicologa e Psicoterapeuta a orientamento psicodinamico',
        'Formazione nell’approccio EMDR per il trattamento dei traumi'
      ]
    },
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
    fullBio: 'La Dr.ssa Paola Scaturchio è Psicologa e Psicoterapeuta con formazione sistemico-relazionale. È specializzata nella terapia con le coppie in crisi e con le famiglie che attraversano periodi di sofferenza, accompagnandole nella comprensione delle dinamiche relazionali. Si occupa inoltre di percorsi individuali di consultazione e psicoterapia rivolti ad adolescenti, giovani e adulti. Ha maturato un’esperienza ventennale di lavoro nei servizi pubblici dedicati all’aiuto ai minori e alle famiglie in difficoltà ed è Terapeuta EMDR.',
    bioParagraphs: [
      'La Dr.ssa Paola Scaturchio è Psicologa e Psicoterapeuta con formazione sistemico-relazionale e riceve su appuntamento presso lo Studio Professionale 4M di Bollate.',
      'È specializzata nella terapia con le coppie in crisi e con le famiglie che attraversano periodi di sofferenza, offrendo uno spazio terapeutico dedicato alla lettura e alla cura dei legami e delle relazioni familiari.',
      'Accanto al lavoro con coppie e nuclei familiari, si occupa anche di percorsi di consultazione e di psicoterapia rivolti ad adolescenti, giovani e adulti.',
      'Vanta un’esperienza ventennale di lavoro maturata nei servizi pubblici per l’aiuto ai minori e alle famiglie in difficoltà ed è inoltre Terapeuta EMDR.'
    ],
    services: [
      'Terapia con le coppie in crisi',
      'Terapia familiare per le famiglie che attraversano periodi di sofferenza',
      'Percorsi di consultazione e psicoterapia con adolescenti, giovani e adulti',
      'Sostegno e aiuto psicologico per minori e famiglie in difficoltà',
      'Psicoterapia con metodo EMDR (Terapeuta EMDR)'
    ],
    curriculumVitae: {
      experienceYears: '20 anni di esperienza nei servizi pubblici',
      experiences: [
        'Attività clinica e psicoterapeutica per coppie, famiglie, adolescenti, giovani e adulti presso Studio Professionale 4M (Bollate)',
        'Esperienza ventennale di lavoro nei servizi pubblici per l’aiuto ai minori e alle famiglie in difficoltà'
      ],
      subSpecializations: [
        'Psicoterapia con formazione sistemico-relazionale',
        'Terapia con le coppie in crisi e le famiglie in periodi di sofferenza',
        'Consultazione e psicoterapia con adolescenti, giovani e adulti',
        'Terapeuta EMDR'
      ],
      academicMilestones: [
        'Psicologa e Psicoterapeuta con formazione sistemico-relazionale',
        'Qualifica di Terapeuta EMDR'
      ]
    },
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
    fullBio: 'La Dr.ssa Maristella Santaguida è psicologa dell’età evolutiva e psicoterapeuta sistemico-relazionale. Si occupa di bambini, adulti, coppie e famiglie, offrendo uno spazio accogliente e senza giudizio per comprendere le proprie emozioni, affrontare difficoltà che possono generare ansia, frustrazione o tristezza e riscoprire le risorse necessarie a ritrovare il proprio equilibrio. La sua esperienza, maturata anche nei servizi pubblici che si occupano di minori e famiglie interessati da provvedimenti giudiziali, le ha insegnato l’importanza di guardare ogni persona nella complessità della sua storia e dei legami attraverso un ascolto empatico e attento. Intende la terapia come un percorso condiviso nel rispetto dei tempi e della storia di ciascuno, intervenendo su difficoltà relazionali, emotive ed evolutive, sostegno genitoriale, disturbi d’ansia, traumi, dipendenza affettiva, separazioni conflittuali e sintomi psicosomatici attraverso percorsi di terapia individuale, di coppia e familiare.',
    bioParagraphs: [
      'La Dr.ssa Maristella Santaguida è psicologa dell’età evolutiva e psicoterapeuta sistemico-relazionale. Si occupa di bambini, adulti, coppie e famiglie.',
      '«Credo che ognuno di noi, nel corso della vita, possa attraversare momenti in cui tutto sembra più difficile: un cambiamento, una perdita, una separazione, una relazione in crisi o emozioni che faticano a trovare spazio e significato.»',
      'La sua esperienza, maturata anche nei servizi pubblici che si occupano di minori e famiglie interessati da provvedimenti giudiziali, le ha insegnato quanto sia importante guardare ogni persona nella complessità della sua storia e dei legami che la accompagnano attraverso un ascolto attento ed empatico.',
      'Offre uno spazio accogliente e senza giudizio, in cui poter comprendere le proprie emozioni, affrontare difficoltà che possono generare ansia, frustrazione, tristezza, per riscoprire le risorse necessarie a ritrovare il proprio equilibrio.',
      'Intende la terapia come un percorso da costruire insieme, nel rispetto dei tempi e della storia di ciascuno: un luogo in cui fermarsi, dare un nome a ciò che si prova, comprendere le proprie relazioni e scoprire nuove possibilità.',
      'Si occupa di difficoltà relazionali, emotive ed evolutive, sostegno genitoriale, disturbi d’ansia, traumi, dipendenza affettiva, separazioni conflittuali e sintomi psicosomatici attraverso percorsi di terapia individuale, di coppia e familiare.'
    ],
    services: [
      'Percorsi di terapia individuale per bambini e adulti',
      'Terapia di coppia e supporto nelle relazioni in crisi',
      'Terapia familiare e percorsi di sostegno genitoriale',
      'Interventi per disturbi d’ansia, traumi e sintomi psicosomatici',
      'Supporto per dipendenza affettiva e separazioni conflittuali',
      'Trattamento delle difficoltà relazionali, emotive ed evolutive'
    ],
    curriculumVitae: {
      experiences: [
        'Attività clinica e psicoterapeutica per bambini, adulti, coppie e famiglie presso Studio Professionale 4M (Bollate)',
        'Esperienza nei servizi pubblici che si occupano di minori e famiglie interessati da provvedimenti giudiziali'
      ],
      subSpecializations: [
        'Psicoterapia sistemico-relazionale',
        'Psicologia dell’età evolutiva',
        'Terapia individuale, di coppia e familiare',
        'Sostegno genitoriale e separazioni conflittuali',
        'Difficoltà relazionali, emotive ed evolutive, disturbi d’ansia, traumi, dipendenza affettiva e sintomi psicosomatici'
      ],
      academicMilestones: [
        'Psicologa dell’Età Evolutiva',
        'Psicoterapeuta Sistemico-Relazionale'
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
    fullBio: '«C’è un privilegio raro nell’ascoltare, per la prima volta, una storia che non ha mai osato dirsi a voce alta. Ogni sintomo ha un senso: comprenderlo permette di trasformare ciò che oggi limita in qualcosa che può evolvere.» La Dr.ssa Beatrice Scutieri è Psicologa iscritta all’Albo della Regione Lombardia, attualmente in perfezionamento accademico in Psicoterapia a orientamento psicoanalitico lacaniano presso l’Istituto Freudiano per la clinica, la terapia e la scienza. Riceve in presenza presso lo Studio Professionale 4M di Bollate e online in tutta Italia, rivolgendosi a bambini, adolescenti, giovani adulti, adulti e coppie, oltre a offrire supporto ai genitori per accompagnare i più giovani nei contesti di vita, scolastici e familiari. Nel suo lavoro coniuga la conoscenza clinica e gli strumenti di valutazione psicodiagnostica con l’attenzione alla singolarità di ogni persona: la diagnosi è intesa non come un’etichetta definitoria, ma come uno strumento utile a comprendere le difficoltà e orientare interventi mirati. Guidata dall’orientamento psicoanalitico lacaniano, valorizza lo spazio di parola e di ascolto — prestando attenzione anche ai non detti e alle dinamiche che si ripetono — per accompagnare la persona a dare significato alla propria esperienza e trovare un rapporto diverso con ciò che la fa soffrire. Ha maturato esperienze in contesti clinici, educativi e scolastici, svolgendo tirocini presso Jonas Onlus Milano (di Massimo Recalcati), ADES – Associazione Diabete e Solidarietà e presso il centro Parole in Movimento – Diagnosi, Terapia e Cura, specializzato nella valutazione diagnostica delle condizioni del neurosviluppo (ADHD, DSA, disturbi dello spettro autistico e plusdotazione). Come psicologa scolastica e docente di sostegno nella scuola secondaria di primo grado, ha progettato interventi di mentoring e percorsi educativi individualizzati per il disagio adolescenziale e l’inclusione. Nell’attività privata si occupa inoltre di screening neuropsicologico, percorsi di potenziamento rivolti a bambini e adulti e Psicologia Giuridica e Forense in qualità di Consulente Tecnico di Parte (CTP) con formazione specialistica anche come CTU.',
    bioParagraphs: [
      '«C’è un privilegio raro nell’ascoltare, per la prima volta, una storia che non ha mai osato dirsi a voce alta. Ogni sintomo ha un senso: comprenderlo permette di trasformare ciò che oggi limita in qualcosa che può evolvere.»',
      'La Dr.ssa Beatrice Scutieri è Psicologa iscritta all’Albo della Regione Lombardia, attualmente in perfezionamento accademico in Psicoterapia a orientamento psicoanalitico lacaniano presso l’Istituto Freudiano per la clinica, la terapia e la scienza. Riceve in presenza presso lo Studio Professionale 4M di Bollate e online in tutta Italia, rivolgendosi a bambini, adolescenti, giovani adulti, adulti e coppie, e affiancando i genitori nel sostenere in modo consapevole i figli nei contesti familiari e scolastici.',
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
        'Attività clinica privata di consulenza psicologica, psicodiagnostica e potenziamento presso Studio Professionale 4M (Bollate) e online',
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
    fullBio: 'La Dr.ssa Giulia Gentile è Psicologa Clinica, iscritta all’Ordine degli Psicologi della Lombardia (N° 28213). Presso lo Studio Professionale 4M a Bollate si occupa di sostegno e percorsi psicologici ad orientamento sistemico-relazionale, rivolgendosi ad adolescenti, giovani adulti, adulti, coppie e famiglie. Attraverso il lavoro clinico aiuta le persone a comprendere e superare momenti di difficoltà, blocchi evolutivi o conflitti relazionali che possono presentarsi nelle diverse fasi della vita. Il suo obiettivo è offrire uno spazio d’ascolto sicuro e personalizzato per valorizzare le risorse di ciascuno e ritrovare un nuovo equilibrio.',
    bioParagraphs: [
      'La Dr.ssa Giulia Gentile è Psicologa Clinica, iscritta all’Ordine degli Psicologi della Lombardia (N° 28213), e riceve su appuntamento presso lo Studio Professionale 4M di Bollate.',
      'Si occupa di sostegno e di percorsi psicologici ad orientamento sistemico-relazionale, lavorando con adolescenti, giovani adulti, adulti, coppie e famiglie.',
      'Nel percorso psicologico accompagna le persone ad affrontare, comprendere e superare momenti di difficoltà, blocchi evolutivi o conflitti relazionali, tenendo conto delle relazioni e del contesto di vita di ciascuno.',
      'Il suo obiettivo è offrire uno spazio d’ascolto sicuro, accogliente e personalizzato, pensato per valorizzare le risorse personali e relazionali di ciascuno e favorire il raggiungimento di un nuovo equilibrio.'
    ],
    services: [
      'Sostegno e percorsi psicologici individuali per adolescenti, giovani adulti e adulti',
      'Percorsi di sostegno psicologico rivolti alle coppie',
      'Sostegno e percorsi psicologici per le famiglie ad orientamento sistemico-relazionale',
      'Supporto per comprendere e superare momenti di difficoltà e blocchi evolutivi',
      'Elaborazione e superamento dei conflitti relazionali e valorizzazione delle risorse personali'
    ],
    curriculumVitae: {
      experiences: [
        'Attività di sostegno e percorsi psicologici per adolescenti, giovani adulti, adulti, coppie e famiglie presso Studio Professionale 4M (Bollate)'
      ],
      subSpecializations: [
        'Sostegno e percorsi psicologici ad orientamento sistemico-relazionale',
        'Percorsi per adolescenti, giovani adulti e adulti',
        'Sostegno psicologico per coppie e famiglie',
        'Superamento di momenti di difficoltà, blocchi evolutivi e conflitti relazionali'
      ],
      academicMilestones: [
        'Psicologa Clinica',
        'Iscrizione all’Ordine degli Psicologi della Lombardia (N° 28213)'
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
