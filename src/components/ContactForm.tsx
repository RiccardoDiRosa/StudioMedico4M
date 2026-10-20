import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/studio';
import { PROFESSIONISTI } from '../data/professionisti';
import { Send, AlertCircle, CheckCircle, ShieldAlert, Lock } from 'lucide-react';

interface ContactFormProps {
  preselectedProfessionalId?: string;
  onNavigatePrivacy: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  preselectedProfessionalId,
  onNavigatePrivacy 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '', // phone or email
    professionalId: preselectedProfessionalId || 'general',
    message: '',
    privacyConsent: false,
    websiteUrlHoneypot: '' // spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'config_notice' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Inserisci nome e cognome.';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Inserisci un recapito (email o numero di telefono).';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[\d\s+()-]{7,20}$/;
      if (!emailRegex.test(formData.contact) && !phoneRegex.test(formData.contact)) {
        newErrors.contact = 'Inserisci un indirizzo email valido o un recapito telefonico numerico.';
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Inserisci un messaggio di almeno 10 caratteri.';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'È necessario prendere visione dell\'informativa sulla privacy per procedere.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot spam bot
    if (formData.websiteUrlHoneypot) {
      setStatus('success');
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Check if real external webhook is configured
    if (!STUDIO_CONFIG.contactWebhookUrl) {
      // Per PRD: se il servizio di recapito non è configurato, documentiamo lo stato.
      setTimeout(() => {
        setStatus('config_notice');
      }, 500);
      return;
    }

    try {
      const response = await fetch(STUDIO_CONFIG.contactWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          contact: formData.contact,
          recipient: formData.professionalId,
          message: formData.message,
          source: 'Studio Medico 4M Web Form',
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          contact: '',
          professionalId: 'general',
          message: '',
          privacyConsent: false,
          websiteUrlHoneypot: ''
        });
      } else {
        setStatus('error');
        setErrorMessage('Il server di recapito ha restituito un errore temporaneo. Riprova più tardi o recati presso la sede.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Impossibile stabilire una connessione con il servizio di invio. Verifica la tua connessione internet.');
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#b3e5fc]/80 shadow-sm relative overflow-hidden">
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#01579b] via-[#039be5] to-[#b3e5fc]" />

      {/* Explicit Medical Data Warning per PRD Section 5.3 & 10.3 */}
      <div className="mb-8 p-4 rounded-2xl bg-[#b3e5fc]/25 border border-[#b3e5fc] flex items-start gap-3 text-xs text-[#01579b]">
        <ShieldAlert className="w-5 h-5 text-[#0277bd] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-[#01579b]">
            Avvertenza importante sulla riservatezza dei dati sanitari:
          </p>
          <p className="text-slate-600 leading-relaxed">
            Questo modulo è destinato esclusivamente a richieste di <strong>informazioni generali sulla sede e sui servizi</strong>. Per la tua tutela e in conformità alle norme sulla protezione dei dati, <strong>non inserire sintomi, diagnosi, referti o informazioni sanitarie</strong>. I dettagli clinici devono essere discussi esclusivamente di persona con il singolo professionista.
          </p>
        </div>
      </div>

      {status === 'success' ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="text-lg font-bold text-emerald-950">Richiesta inviata con successo</h3>
          <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
            Grazie per averci contattato. La tua richiesta informativa è stata presa in carico e riceverai risposta al recapito indicato.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors"
          >
            Invia un'altra richiesta
          </button>
        </div>
      ) : status === 'config_notice' ? (
        <div className="p-8 rounded-2xl bg-sky-50 border border-[#b3e5fc] text-left space-y-4 animate-in fade-in">
          <div className="flex items-center gap-3 text-[#01579b] font-semibold text-base">
            <AlertCircle className="w-6 h-6 text-[#039be5] shrink-0" />
            <span>Servizio di recapito in fase di configurazione finale</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            In conformità alle specifiche di progetto, il modulo di invio messaggi è predisposto nel codice ma non è ancora collegato a una casella di posta verificata o a un servizio webhook attivo (es. Resend o Formspree).
          </p>
          <div className="p-3.5 bg-white rounded-xl border border-[#b3e5fc] text-xs text-slate-700 space-y-1">
            <p className="font-semibold text-[#01579b]">Per richiedere informazioni immediate:</p>
            <p>Ti invitiamo a rivolgerti direttamente ai singoli professionisti dello studio o a visitare la sede in <strong>Via Madonnina 17 a Bollate</strong>.</p>
          </div>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="px-4 py-2 text-xs font-semibold text-[#01579b] bg-white border border-[#b3e5fc] rounded-lg hover:bg-[#b3e5fc]/20 transition-colors"
          >
            Torna al modulo
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          
          {/* Honeypot hidden input */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="websiteUrlHoneypot">Lascia vuoto questo campo se sei umano</label>
            <input
              type="text"
              id="websiteUrlHoneypot"
              name="websiteUrlHoneypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.websiteUrlHoneypot}
              onChange={(e) => setFormData({ ...formData, websiteUrlHoneypot: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#01579b] mb-2">
                Nome e Cognome <span className="text-[#039be5]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Es. Mario Rossi"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: '' });
                }}
                className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.fullName 
                    ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-200' 
                    : 'border-[#b3e5fc] bg-white hover:border-[#039be5] focus:border-[#039be5] focus:ring-[#039be5]/20'
                }`}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Contact (email or phone) */}
            <div>
              <label htmlFor="contact" className="block text-xs font-semibold text-[#01579b] mb-2">
                Recapito per la risposta (Email o Telefono) <span className="text-[#039be5]">*</span>
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="es. nome@email.it oppure 333 1234567"
                value={formData.contact}
                onChange={(e) => {
                  setFormData({ ...formData, contact: e.target.value });
                  if (errors.contact) setErrors({ ...errors, contact: '' });
                }}
                className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.contact 
                    ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-200' 
                    : 'border-[#b3e5fc] bg-white hover:border-[#039be5] focus:border-[#039be5] focus:ring-[#039be5]/20'
                }`}
                aria-invalid={!!errors.contact}
                aria-describedby={errors.contact ? 'contact-error' : undefined}
              />
              {errors.contact && (
                <p id="contact-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.contact}</span>
                </p>
              )}
            </div>
          </div>

          {/* Recipient / Professional selection */}
          <div>
            <label htmlFor="professionalId" className="block text-xs font-semibold text-[#01579b] mb-2">
              Destinatario della richiesta informativa
            </label>
            <select
              id="professionalId"
              name="professionalId"
              value={formData.professionalId}
              onChange={(e) => setFormData({ ...formData, professionalId: e.target.value })}
              className="w-full px-4 py-3 text-sm rounded-xl border border-[#b3e5fc] bg-white hover:border-[#039be5] focus:border-[#039be5] focus:ring-2 focus:ring-[#039be5]/20 focus:outline-none"
            >
              <option value="general">Studio Medico 4M (Informazioni generali sulla sede)</option>
              {PROFESSIONISTI.map((prof) => (
                <option key={prof.id} value={prof.id}>
                  {prof.title} {prof.firstName} {prof.lastName} — {prof.role}
                </option>
              ))}
            </select>
            <p className="mt-1.5 text-[11px] text-[#0277bd]">
              Ricorda: gli appuntamenti e le visite vengono concordati direttamente con i singoli professionisti.
            </p>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#01579b] mb-2">
              Messaggio informativo <span className="text-[#039be5]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Scrivi qui la tua richiesta di informazioni generali (es. disponibilità dei servizi, come raggiungere lo studio)..."
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: '' });
              }}
              className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                errors.message 
                  ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-200' 
                  : 'border-[#b3e5fc] bg-white hover:border-[#039be5] focus:border-[#039be5] focus:ring-[#039be5]/20'
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={(e) => {
                  setFormData({ ...formData, privacyConsent: e.target.checked });
                  if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: '' });
                }}
                className="mt-1 h-4 w-4 rounded border-[#b3e5fc] text-[#0277bd] focus:ring-[#039be5]"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                Ho letto l'
                <button
                  type="button"
                  onClick={onNavigatePrivacy}
                  className="text-[#0277bd] underline hover:text-[#01579b] mx-1 font-semibold"
                >
                  Informativa sulla Privacy
                </button>
                e acconsento al trattamento dei dati personali forniti al solo scopo di riscontrare la mia richiesta.
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.privacyConsent}</span>
              </p>
            )}
          </div>

          {errorMessage && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#01579b] to-[#0277bd] hover:from-[#0277bd] hover:to-[#039be5] active:scale-[0.99] rounded-xl transition-all shadow-md shadow-[#0277bd]/25 focus-ring disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-[#b3e5fc]" />
              <span>{status === 'submitting' ? 'Invio in corso...' : 'Invia richiesta informativa'}</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-2">
            <Lock className="w-3.5 h-3.5 text-[#039be5] shrink-0" />
            <span>I tuoi dati non saranno ceduti a terzi né utilizzati per scopi promozionali.</span>
          </div>
        </form>
      )}
    </div>
  );
};
