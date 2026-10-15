# Studio Medico 4M — Bollate (MI)
## Sito Web Vetrina Professionale con Architettura SEO Locale Avanzata

Sito web istituzionale e vetrina per **Studio Medico 4M**, situato in Via Madonnina 17 a Bollate (Milano). Lo studio ospita 12 liberi professionisti indipendenti operanti in ambiti sanitari e del benessere psicofisico.

---

### Indice dei Contenuti
1. [Caratteristiche del Progetto](#caratteristiche-del-progetto)
2. [Stack Tecnologico](#stack-tecnologico)
3. [Guida all'Avvio in Locale](#guida-allavvio-in-locale)
4. [Gestione dei Contenuti](#gestione-dei-contenuti)
   - [Dati Istituzionali dello Studio](#dati-istituzionali-dello-studio)
   - [I 12 Professionisti e relative Schede](#i-12-professionisti-e-relative-schede)
   - [Sostituzione del Logo](#sostituzione-del-logo)
   - [Inserimento delle Fotografie](#inserimento-delle-fotografie)
5. [Configurazione del Modulo Contatti](#configurazione-del-modulo-contatti)
6. [Configurazione del Dominio e SEO](#configurazione-del-dominio-e-seo)
7. [Pubblicazione su Hosting Statico](#pubblicazione-su-hosting-statico)
8. [Verifica dell'Indicizzazione](#verifica-dellindicizzazione)
9. [Documenti di Supporto](#documenti-di-supporto)

---

### 1. Caratteristiche del Progetto

- **Design Ispirato al Volantino Ufficiale:** Palette sobria (blu notte, azzurro medio, azzurro polvere, bianco neutro), onde grafiche morbide, elementi circolari ed emblema olistico mente-corpo.
- **Top Bar Contract & Anti-Slop:** Navigazione pulita a 3 zone, assenza di pill enclosures superflue, gerarchia tipografica raffinata (serif per titoli istituzionali, sans per leggibilità del testo).
- **Trasparenza Etico-Sanitaria:** Comunicazione esplicita che i 12 professionisti esercitano come liberi professionisti indipendenti senza segreteria centralizzata. Nessun consiglio clinico inventato o promesse terapeutiche ingannevoli.
- **Privacy First (GDPR):** Modulo con avvertenza esplicita contro l'invio di dati sanitari; nessun cookie di profilazione o tracciamento pubblicitario.
- **SEO Locale Avanzata:** Titoli univoci, meta description persuasive, breadcrumbs accessibili, dati strutturati Schema.org (`MedicalBusiness`, `LocalBusiness`, `Person`, `AboutPage`, `ContactPage`), sitemap XML e robots.txt configurati.

---

### 2. Stack Tecnologico

- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 con variabili CSS personalizzate e tipografia ottimizzata
- **Icone:** Lucide React
- **Nessun Database o Backend Complesso:** Il sito è completamente autonomo, leggero e pronto per essere distribuito su qualsiasi CDN o hosting statico.

---

### 3. Guida all'Avvio in Locale

Assicurati di avere installato Node.js (versione 18 o superiore).

```bash
# 1. Clona il repository o posizionati nella cartella di progetto
cd studio-medico-4m

# 2. Installa le dipendenze
npm install

# 3. Avvia il server di sviluppo locale
npm run dev

# Il sito sarà accessibile all'indirizzo http://localhost:3000
```

Per verificare la compilazione TypeScript e la build di produzione:
```bash
# Controllo tipi
npm run lint

# Build di produzione
npm run build
```

---

### 4. Gestione dei Contenuti

Tutti i contenuti sono separati dalla logica grafica e risiedono in file TypeScript tipizzati nella cartella `src/data/`.

#### Dati Istituzionali dello Studio
Apri il file `src/data/studio.ts`:
```typescript
export const STUDIO_CONFIG = {
  name: 'Studio Medico 4M',
  payoff: 'Dove mente e corpo ritrovano equilibrio',
  address: 'Via Madonnina 17, 20021 Bollate (MI)',
  // Imposta su true quando i numeri/email ufficiali sono confermati:
  publicPhoneConfirmed: false,
  publicPhone: '+39 02 ...',
  publicEmailConfirmed: false,
  publicEmail: 'info@studiomedico4m.it',
  canonicalBaseUrl: 'https://studiomedico4m.it',
  // Endpoint per il modulo contatti:
  contactWebhookUrl: ''
};
```

#### I 12 Professionisti e relative Schede
Apri il file `src/data/professionisti.ts`:
Ogni professionista dispone di un oggetto dedicato:
- `title`: es. `"Dott."` o `"Dott.ssa"`
- `firstName`: Nome reale
- `lastName`: Cognome reale
- `role`: Titolo/Specializzazione esatta
- `shortDescription`: Presentazione breve (card)
- `fullBio`: Biografia completa (scheda di dettaglio)
- `services`: Elenco delle prestazioni svolte
- `consultationDays`: Orari o modalità (es. `"Lunedì e Mercoledì su appuntamento"`)
- `phone`: Numero telefonico per click-to-call da smartphone
- `email`: Email dedicata
- `isComplete`: Impostare a `true` quando tutti i dati sono stati confermati dall'interessato.
- `isPublished`: Impostare a `true` per includere la scheda nella `sitemap.xml` e consentirne l'indicizzazione su Google.

#### Sostituzione del Logo
Il logo attuale è implementato come componente vettoriale in `src/components/Logo.tsx`. Per utilizzare un'immagine bitmap ufficiale fornita dallo studio:
1. Posiziona il file in `public/images/logo.png` (o `.svg`).
2. Modifica il componente `Logo.tsx` per puntare al percorso dell'asset o sostituire l'SVG.

#### Inserimento delle Fotografie
1. Fotografie dei professionisti: posizionale in `public/images/professionisti/[slug].webp`.
2. Fotografie degli ambienti della sede: posizionale in `public/images/studio/`.

---

### 5. Configurazione del Modulo Contatti

Il form presente nella pagina `/contatti` è già validato lato client e include una protezione antispam honeypot. Per abilitare la ricezione effettiva dei messaggi:
1. Registra un account su un servizio email serverless/webhook compatibile con siti statici, ad esempio [Resend](https://resend.com) o [Formspree](https://formspree.io).
2. Inserisci l'URL dell'endpoint in `src/data/studio.ts`:
   ```typescript
   contactWebhookUrl: 'https://formspree.io/f/tuo-form-id'
   ```
3. Il modulo invierà automaticamente payload JSON con `fullName`, `contact`, `recipient`, `message` e `timestamp`.

---

### 6. Configurazione del Dominio e SEO

1. Quando il dominio definitivo sarà attivo (es. `https://studiomedico4m.it`), aggiorna la voce `canonicalBaseUrl` in `src/data/studio.ts`.
2. Verifica che `public/robots.txt` punti all'URL corretto della sitemap:
   ```text
   User-agent: *
   Allow: /
   Sitemap: https://studiomedico4m.it/sitemap.xml
   ```
3. Verifica e rigenera `public/sitemap.xml` includendo tutti i profili con `isPublished: true`.

---

### 7. Pubblicazione su Hosting Statico

Il sito genera file HTML, CSS e JavaScript statici puri nella cartella `dist/`:
```bash
npm run build
```
Può essere distribuito su qualsiasi piattaforma di hosting statico:
- **Cloudflare Pages / Netlify / Vercel:** Collega il repository Git; comando di build `npm run build`, directory di output `dist`.
- **Server Linux con Nginx / Apache:** Copia il contenuto della cartella `dist/` nella root web (es. `/var/www/html/`).

Configurazione Nginx per il routing SPA:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

### 8. Verifica dell'Indicizzazione

Segui i passaggi dettagliati in `SEO_LAUNCH_CHECKLIST.md`:
1. Crea la proprietà in **Google Search Console**.
2. Invia la sitemap: `https://studiomedico4m.it/sitemap.xml`.
3. Crea e ottimizza la scheda **Google Business Profile** per `Studio Medico 4M` all'indirizzo `Via Madonnina 17, 20021 Bollate MI`.
4. Monitora le impressioni e i clic per le query geografiche (`Bollate`, `Studio Medico Bollate`).

---

### 9. Documenti di Supporto

- `CONTENT_TO_CONFIRM.md`: Censimento di tutte le informazioni pendenti da convalidare prima del lancio.
- `SEO_LAUNCH_CHECKLIST.md`: Checklist operativa passo-passo per il rilascio, Google Business Profile e Search Console.
