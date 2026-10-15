import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { STUDIO_CONFIG } from '../data/studio';
import { ShieldCheck, AlertCircle } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const breadcrumbItems = [
    { label: 'Informativa sulla Privacy' }
  ];

  return (
    <>
      <SEOHead
        title="Informativa sulla Privacy | Studio Medico 4M Bollate"
        description="Informativa sul trattamento dei dati personali del sito web di Studio Medico 4M a Bollate (MI), ai sensi del Regolamento UE 2016/679 (GDPR)."
        canonicalPath="/privacy-policy"
      />

      <div className="bg-slate-50 min-h-screen pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xs space-y-8">
            
            <div>
              <div className="flex items-center gap-2 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Tutela dei Dati Personali (GDPR UE 2016/679)</span>
              </div>
              <h1 className="text-3xl font-normal text-slate-900 font-heading">
                Informativa sulla Privacy
              </h1>
              <p className="text-xs text-slate-500 mt-2">
                Ultimo aggiornamento: Ottobre 2026
              </p>
            </div>

            {/* Legal Notice on Verification */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-amber-950">Nota di trasparenza:</p>
                <p className="leading-relaxed">
                  Il presente testo costituisce la predisposizione tecnica dell'informativa conforme al modello statico dello studio. La versione definitiva con l'esatta indicazione del Titolare o DPO sarà formalmente convalidata dal consulente legale prima della pubblicazione finale.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 font-sans">
                  1. Titolare del Trattamento
                </h2>
                <p>
                  Il Titolare del trattamento dei dati di navigazione e delle richieste informative generali inviate tramite il presente sito è <strong>{STUDIO_CONFIG.name}</strong>, con sede in {STUDIO_CONFIG.address}.
                </p>
                <p className="text-xs text-slate-500">
                  Si precisa che ciascun libero professionista ospitato presso lo studio agisce in qualità di Titolare autonomo del trattamento per le prestazioni sanitarie e i dati clinici acquisiti direttamente nell'ambito del proprio rapporto professionale con i pazienti.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 font-sans">
                  2. Tipologie di dati raccolti
                </h2>
                <p>
                  Il sito web è una vetrina informativa statica. Non richiede la registrazione di un account utente e non integra sistemi di pagamento o cartelle cliniche elettroniche online.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
                  <li><strong>Dati di navigazione:</strong> indirizzi IP, parametri tecnici del browser necessari al funzionamento del protocollo HTTP/HTTPS (log tecnici di rete del server).</li>
                  <li><strong>Dati forniti volontariamente tramite modulo contatti:</strong> nome, recapito (email o telefono) e testo della richiesta di informazioni generali.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 font-sans">
                  3. Esclusione tassativa di dati relativi alla salute
                </h2>
                <p>
                  È fatto esplicito divieto agli utenti di trasmettere attraverso i moduli generali del sito dati particolari di cui all'art. 9 del GDPR (dati genetici, biometrici o relativi allo stato di salute, diagnosi, sintomi, referti medici). Eventuali comunicazioni di natura sanitaria devono avvenire esclusivamente di persona o tramite i canali riservati concordati con il singolo professionista.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 font-sans">
                  4. Finalità e base giuridica del trattamento
                </h2>
                <p>
                  I dati conferiti volontariamente sono trattati esclusivamente per:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
                  <li>Rispondere alle richieste di informazioni generali sulla sede, sui servizi o sulla disponibilità dei professionisti (Base giuridica: esecuzione di misure precontrattuali su richiesta dell'interessato - Art. 6, par. 1, lett. b GDPR).</li>
                  <li>Garantire la sicurezza informatica e la protezione contro abusi o spam (Base giuridica: legittimo interesse del titolare - Art. 6, par. 1, lett. f GDPR).</li>
                </ul>
                <p className="text-xs text-slate-500">
                  I dati non vengono in alcun caso utilizzati per profilazione, marketing commerciale o ceduti a terze parti.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 font-sans">
                  5. Periodo di conservazione dei dati
                </h2>
                <p>
                  I dati raccolti tramite modulo contatti non vengono memorizzati in alcun database applicativo e vengono conservati esclusivamente nella casella di posta per il tempo strettamente necessario a gestire il riscontro all'interessato, decorso il quale vengono eliminati.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 font-sans">
                  6. Diritti dell'interessato
                </h2>
                <p>
                  Ai sensi degli artt. 15-22 del GDPR, l'utente ha il diritto di chiedere in qualsiasi momento l'accesso ai propri dati personali, la rettifica, la cancellazione, la limitazione del trattamento o di opporsi al loro utilizzo. Le richieste possono essere rivolte per iscritto presso la sede dello studio in Via Madonnina 17, 20021 Bollate (MI).
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xs">
              <button
                type="button"
                onClick={() => onNavigate('/')}
                className="text-sky-800 font-semibold hover:underline"
              >
                ← Torna alla Home
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/cookie-policy')}
                className="text-slate-600 hover:text-slate-900"
              >
                Consulta la Cookie Policy →
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
