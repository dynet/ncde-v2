"use client";

/* Contactformulier - klantcode dd 11-6-2026: geen hero, validatie op *-velden, bedankt-kaart na verzenden */

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Clock, MapPin, Map as MapIcon, Check, Home as HomeIcon, RotateCcw } from "lucide-react";

const EMPTY: Values = {
  naam: "",
  telefoon: "",
  email: "",
  postcode: "",
  woningtype: "",
  onderwerp: "",
  bericht: "",
};

type Values = {
  naam: string;
  telefoon: string;
  email: string;
  postcode: string;
  woningtype: string;
  onderwerp: string;
  bericht: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// NL postcode: 4 cijfers (eerste niet 0) + spatie + 2 letters
const POSTCODE_RE = /^[1-9][0-9]{3}\s[A-Z]{2}$/;

// Telefoon-invoer: alleen cijfers, spaties, + en -. Filtert verboden tekens al tijdens typen.
const filterTelefoon = (s: string) => s.replace(/[^0-9+\-\s]/g, "");
const telefoonDigits = (s: string) => s.replace(/\D/g, "");

// Postcode-invoer: forceer formaat 1234 AB tijdens typen.
function formatPostcode(s: string) {
  const cleaned = s.toUpperCase().replace(/[^0-9A-Z]/g, "").slice(0, 6);
  const cijfers = cleaned.slice(0, 4).replace(/\D/g, "");
  const letters = cleaned.slice(4).replace(/[^A-Z]/g, "");
  return letters ? `${cijfers} ${letters}` : cijfers;
}

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.naam.trim()) e.naam = "Vul uw naam in.";
  if (!v.telefoon.trim()) e.telefoon = "Vul uw telefoonnummer in.";
  else if (telefoonDigits(v.telefoon).length < 10) e.telefoon = "Vul een geldig telefoonnummer in (minimaal 10 cijfers).";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Vul een geldig e-mailadres in.";
  if (!v.postcode.trim()) e.postcode = "Vul uw postcode in.";
  else if (!POSTCODE_RE.test(v.postcode.trim())) e.postcode = "Vul een geldige postcode in (bijv. 1234 AB).";
  if (!v.onderwerp) e.onderwerp = "Kies een onderwerp.";
  if (!v.bericht.trim()) e.bericht = "Vul uw vraag in.";
  return e;
}

const inputClass = (invalid: boolean) =>
  `w-full rounded-xl border px-3.5 py-3 text-sm focus:outline-none focus:ring-2 ${
    invalid
      ? "border-red-600 focus:border-red-600 focus:ring-red-600/15"
      : "border-gray-200 focus:border-brand-600 focus:ring-brand-600/15"
  }`;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1.5 text-xs font-bold text-red-600">{msg}</p>;
}

export default function ContactAdviesForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [verzonden, setVerzonden] = useState(false);

  const opnieuw = () => {
    setValues(EMPTY);
    setErrors({});
    setVerzonden(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Beperkt per veld wat de gebruiker kan typen (telefoon: cijfers; postcode: 1234 AB).
  const transforms: Partial<Record<keyof Values, (s: string) => string>> = {
    telefoon: filterTelefoon,
    postcode: formatPostcode,
  };

  const set = (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const t = transforms[key];
    const next = t ? t(e.target.value) : e.target.value;
    setValues((v) => ({ ...v, [key]: next }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const er = validate(values);
    setErrors(er);
    if (Object.keys(er).length > 0) return;
    setVerzonden(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (verzonden) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white px-7 py-14 text-center shadow-[var(--shadow-card)] md:px-14 md:py-16">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-brand-600 text-white shadow-[0_12px_30px_rgba(0,122,61,.28)]">
          <Check size={56} strokeWidth={3} />
        </div>
        <h2 className="mt-8 font-display text-3xl font-black uppercase text-brand-800 md:text-4xl">Bedankt voor uw aanvraag!</h2>
        <p className="mt-4 text-lg text-gray-700">Wij hebben uw contactgegevens succesvol ontvangen.</p>
        <p className="mt-2 text-lg text-gray-700">Een adviseur van NCDE neemt zo spoedig mogelijk contact met u op.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_26px_rgba(0,122,61,.25)] hover:bg-brand-700 transition-all"
          >
            <HomeIcon size={17} />
            Terug naar home
          </Link>
          <button
            type="button"
            onClick={opnieuw}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-bold text-brand-800 hover:bg-gray-50 transition-all"
          >
            <RotateCcw size={17} />
            Nog een aanvraag doen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr] items-start">
      {/* LEFT: form */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-5 md:px-7 md:py-6">
          <h1 className="font-display text-2xl font-bold text-brand-900 md:text-3xl">Vraag vrijblijvend advies aan</h1>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Vul uw gegevens correct in en stel uw vraag. Een adviseur van NCDE neemt zo spoedig mogelijk contact met u op.
          </p>
        </div>
        <div className="p-6 md:p-7">
          <form noValidate onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="naam" className="mb-1.5 block text-xs font-bold text-gray-700">Naam *</label>
              <input id="naam" type="text" value={values.naam} onChange={set("naam")} placeholder="Uw naam" className={inputClass(!!errors.naam)} />
              <FieldError msg={errors.naam} />
            </div>
            <div>
              <label htmlFor="telefoon" className="mb-1.5 block text-xs font-bold text-gray-700">Telefoonnummer *</label>
              <input id="telefoon" type="tel" inputMode="tel" value={values.telefoon} onChange={set("telefoon")} placeholder="06 12345678" className={inputClass(!!errors.telefoon)} />
              <FieldError msg={errors.telefoon} />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="email" className="mb-1.5 block text-xs font-bold text-gray-700">E-mailadres *</label>
              <input id="email" type="email" value={values.email} onChange={set("email")} placeholder="naam@email.nl" className={inputClass(!!errors.email)} />
              <FieldError msg={errors.email} />
            </div>
            <div>
              <label htmlFor="postcode" className="mb-1.5 block text-xs font-bold text-gray-700">Postcode *</label>
              <input id="postcode" type="text" inputMode="numeric" maxLength={7} value={values.postcode} onChange={set("postcode")} placeholder="1234 AB" className={inputClass(!!errors.postcode)} />
              <FieldError msg={errors.postcode} />
            </div>
            <div>
              <label htmlFor="woningtype" className="mb-1.5 block text-xs font-bold text-gray-700">Woningtype</label>
              <select id="woningtype" value={values.woningtype} onChange={set("woningtype")} className={`${inputClass(false)} bg-white`}>
                <option value="">Maak een keuze</option>
                <option>Rijtjeswoning</option>
                <option>Hoekwoning</option>
                <option>2 onder 1 kap</option>
                <option>Vrijstaande woning</option>
                <option>Appartement</option>
                <option>Anders</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="onderwerp" className="mb-1.5 block text-xs font-bold text-gray-700">Waar wilt u advies over? *</label>
              <select id="onderwerp" value={values.onderwerp} onChange={set("onderwerp")} className={`${inputClass(!!errors.onderwerp)} bg-white`}>
                <option value="">Maak een keuze</option>
                <option>Isolatie</option>
                <option>Warmtepomp</option>
                <option>Zonnepanelen</option>
                <option>Thuisbatterij</option>
                <option>Ventilatie</option>
                <option>Laadpaal</option>
                <option>Subsidie</option>
                <option>Algemeen advies</option>
                <option>Anders</option>
              </select>
              <FieldError msg={errors.onderwerp} />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="bericht" className="mb-1.5 block text-xs font-bold text-gray-700">Uw vraag *</label>
              <textarea id="bericht" rows={5} value={values.bericht} onChange={set("bericht")} placeholder="Beschrijf kort uw vraag of situatie..." className={inputClass(!!errors.bericht)} />
              <FieldError msg={errors.bericht} />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full rounded-xl bg-gradient-to-br from-brand-600 to-brand-900 px-5 py-4 text-base font-bold text-white shadow-[0_10px_26px_rgba(0,122,61,.25)] hover:from-brand-700 hover:to-brand-900 transition-all">
                Verzenden
              </button>
              <p className="mt-3 text-center text-xs text-gray-500">
                Door dit formulier te verzenden gaat u ermee akkoord dat NCDE uw gegevens gebruikt om contact met u op te nemen over uw vraag.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT: contact info + locatie */}
      <aside className="space-y-6">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-5">
            <h2 className="font-display text-xl font-bold text-brand-900">Contactgegevens</h2>
            <p className="mt-1 text-sm font-semibold text-gray-500">Neem direct contact op met NCDE.</p>
          </div>
          <div className="space-y-3 p-6">
            {[
              { Icon: Mail, t: "E-mail", value: <a href="mailto:Info@ncde.nl" className="text-gray-600 hover:text-brand-600">Info@ncde.nl</a> },
              { Icon: Phone, t: "Telefoon", value: <a href="tel:0852224003" className="text-gray-600 hover:text-brand-600">085 222 4003</a> },
              { Icon: Clock, t: "Bereikbaar", value: <span className="text-gray-600">Maandag t/m vrijdag<br />09:00 - 17:00 uur</span> },
              { Icon: MapPin, t: "Adres", value: <span className="text-gray-600">Keurmeesterstraat 53<br />1187 ZX Amstelveen</span> },
              { Icon: MapIcon, t: "Werkgebied", value: <span className="text-gray-600">Bewoners en huiseigenaren in Nederland</span> },
            ].map(({ Icon, t, value }) => (
              <div key={t} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-700">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-brand-900">{t}</p>
                  <div className="mt-0.5 text-sm">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-5">
            <h2 className="font-display text-xl font-bold text-brand-900">Locatie</h2>
            <p className="mt-1 text-sm font-semibold text-gray-500">NCDE werkt landelijk en digitaal.</p>
          </div>
          <div className="p-6">
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <iframe
                title="Locatie NCDE — Keurmeesterstraat 53, Amstelveen"
                src="https://www.google.com/maps?q=Keurmeesterstraat+53,+1187+ZX+Amstelveen&output=embed"
                width="100%"
                height="256"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
            <p className="mt-3 text-xs text-gray-600">
              Keurmeesterstraat 53 · 1187 ZX Amstelveen
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
