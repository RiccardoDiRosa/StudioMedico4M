# STUDIO MEDICO 4M — CHECKLIST OPERATIVA DI LANCIO E SEO LOCALE
## Procedura tecnica e operativa pre e post-pubblicazione (SEO_LAUNCH_CHECKLIST.md)

Questo documento guida il rilascio in produzione del sito web di **Studio Medico 4M** a Bollate (MI), garantendo che tutti i fattori tecnici, legali e di posizionamento locale su Google siano completati con successo.

---

### FASE 1: Verifiche Tecniche e Contenutistiche Pre-Lancio

- [ ] **1.1 Dominio e Certificato SSL**
  - Acquisto/assegnazione del dominio definitivo (es. `studiomedico4m.it`).
  - Attivazione del certificato SSL (HTTPS) con redirect forzato da HTTP a HTTPS e gestione coerente del redirect `www` verso `non-www` (o viceversa).
  - Aggiornamento della costante `canonicalBaseUrl` in `src/data/studio.ts`.

- [ ] **1.2 Completamento Schede dei 12 Professionisti**
  - Raccolta dei dati reali (nome, titoli, bio, foto autentiche, recapiti autorizzati).
  - Aggiornamento di `src/data/professionisti.ts`: impostare `isComplete: true` e `isPublished: true` per ciascun professionista convalidato.
  - Rigenerazione/aggiornamento di `public/sitemap.xml` con le schede dei professionisti pubblicabili.

- [ ] **1.3 Logo e Fotografie Ufficiali**
  - Inserimento del logo definitivo ad alta risoluzione (formato SVG o WebP trasparente).
  - Sostituzione dei placeholder con le fotografie autorizzate dei professionisti e degli spazi della sede di Via Madonnina 17.

- [ ] **1.4 Configurazione del Modulo di Contatto**
  - Configurazione dell'endpoint webhook (es. Resend o Formspree) in `src/data/studio.ts`.
  - Verifica dell'indirizzo email ricevente.
  - Esecuzione di un test reale di invio messaggio per verificare l'avvenuta ricezione e l'antispam.

- [ ] **1.5 Verifica Legal & Privacy**
  - Approvazione formale dell'informativa privacy e cookie da parte del consulente/DPO.
  - Verifica della corretta indicazione di P.IVA / Codice Fiscale nel footer se richiesto dalla normativa italiana per i professionisti.

---

### FASE 2: Google Business Profile & Local SEO Operativa (Bollate)

Google Business Profile (GBP) è l'elemento cardine della visibilità locale su Google Maps e nel Local Pack per query quali *"studio medico Bollate"*, *"fisioterapia Bollate"*, *"osteopata Bollate"*, *"ortopedico Bollate"*.

- [ ] **2.1 Verifica o Creazione Scheda GBP dello Studio**
  - Nome esatto della scheda: `Studio Medico 4M`.
  - Indirizzo esatto (NAP consistency): `Via Madonnina, 17, 20021 Bollate MI`.
  - Categoria principale consigliata: `Poliambulatorio` / `Centro medico` / `Studio medico`.
  - Categorie secondarie pertinenti: `Centro fisioterapico`, `Nutrizionista`, `Psicologo`, `Osteopata` (coerenti con i servizi offerti).

- [ ] **2.2 Collegamento al Sito Web**
  - Inserire come sito web ufficiale l'URL canonico HTTPS del dominio definitivo.

- [ ] **2.3 Fotografie Autentiche della Sede**
  - Caricare su GBP foto ad alta risoluzione dell'ingresso, dell'insegna esterna, della reception e degli studi per favorire la riconoscibilità fisica e il trust algoritmico di Google.

- [ ] **2.4 Orari e Recapiti su GBP**
  - Inserire gli orari ufficiali o la dicitura "Aperto su appuntamento" in perfetta concordanza con il sito web.

- [ ] **2.5 Gestione Schede Singoli Professionisti**
  - Se i singoli liberi professionisti creano una propria scheda Google (es. *"Dott. Mario Rossi - Fisioterapista"*), devono indicare come indirizzo Via Madonnina 17, mantenendo categoria e recapito dedicati, per evitare conflitti o duplicazioni con la scheda principale dello Studio Medico 4M.

- [ ] **2.6 Strategia Recensioni Autentiche**
  - Invitare gradualmente i pazienti/clienti soddisfatti a lasciare recensioni sincere e spontanee su Google Maps. Non incentivare né acquistare mai recensioni fittizie (violazione delle norme Google e del codice deontologico sanitario).

---

### FASE 3: Configurazione Google Search Console & Indicizzazione

- [ ] **3.1 Creazione Proprietà in Google Search Console**
  - Creare la proprietà a livello di Dominio (`DNS verification`) o Prefisso URL (`HTTPS`).
  - Verificare la proprietà tramite record DNS TXT o file HTML di verifica.

- [ ] **3.2 Invio della Sitemap XML**
  - Accedere alla sezione *Sitemap* di Google Search Console.
  - Inviare l'URL: `https://studiomedico4m.it/sitemap.xml`.
  - Verificare che lo stato risulti *"Operazione completata"*.

- [ ] **3.3 Controllo URL e Test Risultati Multimediali**
  - Testare l'URL della Home con lo strumento *Controllo URL*.
  - Verificare con il *Rich Results Test* di Google la corretta interpretazione dei dati strutturati Schema.org (`MedicalBusiness`, `LocalBusiness`, `Person`).

---

### FASE 4: Monitoraggio e Manutenzione Post-Lancio

- [ ] **4.1 Monitoraggio primi 30–60 giorni**
  - Verificare in Search Console la comparsa delle prime impressioni per le query geografiche (`Bollate`, `studio medico 4M`).
  - Monitorare il CTR (Click-Through Rate) dei titoli SEO e delle meta description.
  - Controllare lo stato dell'indicizzazione delle pagine per verificare l'assenza di errori 404 o 500.

- [ ] **4.2 Aggiornamento periodico**
  - In caso di inserimento di nuovi professionisti o variazioni di orari/recapiti, aggiornare tempestivamente i file locali `src/data/professionisti.ts` e rieseguire la build.
