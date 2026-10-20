# STUDIO MEDICO 4M — DATI E INFORMAZIONI DA CONFERMARE
## Registro di verifica pre-pubblicazione (CONTENT_TO_CONFIRM.md)

Il presente documento censisce puntualmente tutte le informazioni mancanti o in attesa di approvazione formale da parte della committenza prima della messa online definitiva sul dominio di produzione.

In conformità al PRD e ai principi etici per i contenuti sanitari, **nessuna informazione medica, anagrafica o di contatto è stata inventata**. Il codice del sito è già completamente strutturato per recepire questi dati attraverso i file di configurazione (`src/data/studio.ts` e `src/data/professionisti.ts`).

---

### 1. Dati Istituzionali e di Contatto dello Studio

| Voce | Stato attuale nel codice | Informazione necessaria per la pubblicazione | Dove aggiornare |
| :--- | :--- | :--- | :--- |
| **Nome di Dominio definitivo** | `https://studiomedico4m.it` (variabile) | Conferma dell'URL finale (es. `studiomedico4m.it`) con configurazione DNS | `src/data/studio.ts` (`canonicalBaseUrl`), `public/robots.txt`, `public/sitemap.xml` |
| **Logo definitivo in alta risoluzione** | Componente vettoriale SVG ispirato al volantino | File immagine vettoriale SVG o PNG trasparente fornito dallo studio | `public/logo.png` o `src/components/Logo.tsx` |
| **Numero di telefono pubblico** | `undefined` (disattivato) | Numero di telefono fisso o cellulare pubblico dello studio per contatti generali (se previsto) | `src/data/studio.ts` (`publicPhone`, `publicPhoneConfirmed: true`) |
| **Recapito referente (Doris)** | **NON pubblicato** | Il numero **3386552277** è annotato come recapito interno di Doris. **Confermare se deve o non deve essere reso pubblico sul sito**. | `src/data/studio.ts` |
| **Email pubblica dello studio** | `undefined` (disattivata) | Indirizzo email generale (es. `info@studiomedico4m.it` o `segreteria@...`) | `src/data/studio.ts` (`publicEmail`, `publicEmailConfirmed: true`) |
| **WhatsApp pubblico** | `undefined` (disattivato) | Eventuale numero WhatsApp Business dedicato alle richieste dello studio | `src/data/studio.ts` |
| **Orari di apertura generali** | "Si riceve su appuntamento" | Eventuali orari di presidio della sede (giorni feriali, sabato) | `src/data/studio.ts` (`publicHours`, `publicHoursConfirmed: true`) |
| **Fotografie autentiche della sede** | Grafiche vettoriali & SVG placeholder | Fotografie reali degli interni di Via Madonnina 17 (ingresso, sale visite, sala riabilitazione) | `public/images/studio/` |

---

### 2. Dati Anagrafici e Professionali dei 12 Professionisti

Per ciascuno dei 12 professionisti, è necessario raccogliere la seguente scheda informativa compilata e validata direttamente dall'interessato:

1. **Nome e Cognome completo**.
2. **Titolo professionale** (es. Dott., Dott.ssa, Tecnico, Operatore).
3. **Qualifica / Specializzazione esatta** (es. Medico Chirurgo Specialista in Ortopedia, Biologa Nutrizionista, Osteopata D.O., Fisioterapista).
4. **Ordine / Albo professionale di appartenenza** e relativo numero di iscrizione (dove applicabile per legge).
5. **Breve biografia professionale (4–6 righe)** approvata dal professionista.
6. **Elenco specifico delle prestazioni erogate** presso lo Studio Medico 4M.
7. **Giorni e orari di disponibilità** (es. Lunedì e Mercoledì pomeriggio).
8. **Recapiti autorizzati alla pubblicazione**:
   - Numero di telefono diretto (per click-to-call da smartphone).
   - Indirizzo email dedicato alle richieste dei pazienti.
   - Numero WhatsApp (se autorizzato per messaggi).
   - Eventuale profilo LinkedIn o sito web personale professionale.
9. **Fotografia professionale in primo piano** (risoluzione consigliata: 800x800px su fondo chiaro/neutro).

> **Stato nel codice:** Tutte le 12 schede sono attualmente contrassegnate con `isComplete: false` e `isPublished: false`. Questo attiva automaticamente la dicitura *"Profilo in fase di convalida editoriale"*, esclude le schede dalla `sitemap.xml` e imposta il meta tag `noindex` per proteggere la reputazione dello studio e la conformità SEO. Appena convalidati i dati, basterà impostare `isComplete: true` e `isPublished: true` in `src/data/professionisti.ts`.

---

### 3. Modulo di Contatto e Servizio Email

| Voce | Stato attuale | Azione richiesta |
| :--- | :--- | :--- |
| **Casella email di destinazione** | Non attiva | Indicare l'indirizzo email a cui devono pervenire le richieste inviate dal form |
| **Provider di recapito (Webhook / API)** | Predisposto per webhook | Scegliere e configurare un servizio esterno senza archiviazione applicativa (es. *Resend*, *Formspree*, *FormKeep*, o serverless endpoint) e inserire l'URL in `src/data/studio.ts` (`contactWebhookUrl`) |
| **Test funzionale di ricezione** | Mostra avviso di predisposizione | Eseguire un invio di prova una volta agganciata la chiave o l'endpoint del servizio scelto |

---

### 4. Aspetti Legali e di Protezione dei Dati (GDPR)

1. **Titolare del Trattamento**: Confermare se il Titolare coincide con la persona fisica/giuridica referente dello studio (Ragione sociale o Referente, P.IVA/C.F.).
2. **Testo definitivo Privacy Policy**: Far visionare al consulente di fiducia della struttura l'informativa predisposta in `/privacy-policy`.
3. **Cookie Policy**: Attualmente il sito usa solo cookie tecnici essenziali (nessun cookie di profilazione, marketing o analytics invasivo). Se in futuro verranno installati strumenti di terze parti (es. Google Analytics 4 con cookie o pixel Meta), andrà implementato un Cookie Consent Banner conforme a IAB TCF / Garante Privacy.
