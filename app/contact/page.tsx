/* Contact pagina - volledig opgebouwd volgens klantmockup dd 22-5-2026 */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  ArrowRight,
  Home as HomeIcon,
  Mail,
  Phone,
  Clock,
  MapPin,
  Map as MapIcon,
  Handshake,
  Wallet,
} from "lucide-react";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
);
const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 5.58 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 006.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 001.53-.78 2.49 2.49 0 00.61-1 10.58 10.58 0 00.52-3.4c.04-.56.04-3.94.04-4.64zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/></svg>
);
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

/* eslint-disable @next/next/no-img-element */

export default function Contact() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/95 shadow-[var(--shadow-soft)] backdrop-blur-md">
        <div className="cx flex h-24 items-center justify-between">
          <Link href="/" aria-label="NCDE home" className="block h-16 w-[200px] overflow-hidden shrink-0">
            <img src="/this one.svg" alt="NCDE" className="h-[5.6rem] w-auto max-w-none object-cover object-top" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Home</Link>
            <Link href="/over-ons" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Over ons</Link>
            <Link href="/subsidies-financiering" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Subsidies & Financiering</Link>
            <Link href="/partners" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Partners</Link>
            <Link href="/nieuws" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Nieuws</Link>
            <Link href="/contact" className="relative text-sm font-semibold text-brand-600">
              Contact
              <span className="absolute -bottom-[29px] left-0 right-0 h-[3px] rounded-full bg-brand-600"></span>
            </Link>
          </nav>
          <Link href="/#woningcheck" className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
            <HomeIcon size={17} />
            Start woningcheck
          </Link>
          <MobileMenu active="/contact" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="cx relative z-10 py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <Mail size={14} /> Contact met NCDE
              </span>
              <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
                Heeft u vragen over <span className="text-amber-400">verduurzaming</span> van uw woning?
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                NCDE helpt bewoners met praktisch en onafhankelijk advies over zonnepanelen, thuisbatterijen, isolatie, energieverbruik en financieringsmogelijkheden.
              </p>
            </div>

            <div className="hidden rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm lg:block">
              <h2 className="font-display text-xl font-bold">Wij helpen u met</h2>
              <p className="mt-2 text-sm text-white/75">
                Een duidelijke eerste stap naar een lagere energierekening en een duurzamere woning.
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { Icon: HomeIcon, t: "Woningadvies", d: "Passend bij uw woning en gezinssituatie" },
                  { Icon: Handshake, t: "Betrouwbare partners en installateurs", d: "Gecertificeerde vakspecialisten in uw regio" },
                  { Icon: Wallet, t: "Kosten & financiering", d: "Helder overzicht van opties en maandlasten" },
                ].map(({ Icon, t, d }) => (
                  <div key={t} className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-tight">{t}</p>
                      <p className="mt-1 text-xs text-white/70">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN ===== */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="cx grid gap-6 lg:grid-cols-[1.15fr_.85fr] items-start">
          {/* LEFT: form + CTA */}
          <div className="space-y-6">
            {/* CONTACT FORM CARD */}
            <div id="formulier" className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-5 md:px-7 md:py-6">
                <h2 className="font-display text-xl font-bold text-brand-900 md:text-2xl">Stuur ons een bericht</h2>
                <p className="mt-1 text-sm font-semibold text-gray-500">
                  Vul uw gegevens in. Wij nemen contact met u op voor een vrijblijvend adviesgesprek.
                </p>
              </div>
              <div className="p-6 md:p-7">
                <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-gray-700">Voornaam</label>
                    <input type="text" required placeholder="Uw voornaam" className="w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-gray-700">Achternaam</label>
                    <input type="text" required placeholder="Uw achternaam" className="w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-gray-700">E-mailadres</label>
                    <input type="email" required placeholder="naam@email.nl" className="w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-gray-700">Telefoonnummer</label>
                    <input type="tel" placeholder="06 12345678" className="w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-gray-700">Postcode</label>
                    <input type="text" placeholder="1234 AB" className="w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-gray-700">Onderwerp</label>
                    <select required defaultValue="" className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-3 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15">
                      <option value="" disabled>Kies een onderwerp</option>
                      <option>Zonnepanelen</option>
                      <option>Thuisbatterij</option>
                      <option>Isolatie</option>
                      <option>Energierekening verlagen</option>
                      <option>Financiering of subsidie</option>
                      <option>Algemeen advies</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1.5 block text-xs font-bold text-gray-700">Waarmee kunnen wij u helpen?</label>
                    <textarea rows={5} placeholder="Beschrijf kort uw vraag of situatie..." className="w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15" />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full rounded-xl bg-gradient-to-br from-brand-600 to-brand-900 px-5 py-4 text-base font-bold text-white shadow-[0_10px_26px_rgba(0,122,61,.25)] hover:from-brand-700 hover:to-brand-900 transition-all">
                      Bericht verzenden
                    </button>
                    <p className="mt-3 text-xs text-gray-500">
                      Door dit formulier te verzenden vraagt u om contact. Dit is vrijblijvend.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* CTA */}
            <div id="advies" className="rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 md:p-7 shadow-[var(--shadow-card)]">
              <h2 className="font-display text-xl font-black uppercase text-brand-800 md:text-2xl">
                Gratis eerste advies voor bewoners
              </h2>
              <p className="mt-2 text-sm text-gray-700 md:text-base">
                Wilt u weten welke maatregel het meeste effect heeft op uw energierekening? Vraag een gratis eerste adviesgesprek aan.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#formulier" className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-3 text-sm font-bold text-white hover:bg-brand-900 transition-colors">
                  Advies aanvragen
                  <ArrowRight size={16} />
                </a>
                <a href="mailto:info@ncde.nl" className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-bold text-brand-800 hover:bg-brand-50 transition-colors">
                  <Mail size={16} />
                  Mail NCDE
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: contact info + locatie */}
          <aside className="space-y-6">
            <div id="contactgegevens" className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-5">
                <h2 className="font-display text-xl font-bold text-brand-900">Contactgegevens</h2>
                <p className="mt-1 text-sm font-semibold text-gray-500">Neem direct contact op met NCDE.</p>
              </div>
              <div className="space-y-3 p-6">
                {[
                  { Icon: Mail, t: "E-mail", value: <a href="mailto:info@ncde.nl" className="text-gray-600 hover:text-brand-600">info@ncde.nl</a> },
                  { Icon: Phone, t: "Telefoon", value: <a href="tel:0852224003" className="text-gray-600 hover:text-brand-600">085 222 4003</a> },
                  { Icon: Clock, t: "Bereikbaar", value: <span className="text-gray-600">Maandag t/m vrijdag<br />09:00 — 17:00 uur</span> },
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
                <div className="grid h-64 place-items-center rounded-2xl border border-gray-200 bg-gradient-to-br from-brand-100 to-gray-50 p-6 text-center">
                  <div>
                    <p className="font-display text-lg font-black text-brand-900">NCDE</p>
                    <p className="mt-2 text-xs text-gray-600">
                      Keurmeesterstraat 53 · 1187 ZX Amstelveen<br />
                      Online advies · woningverduurzaming · bewonersbegeleiding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-brand-800 border-t border-brand-700 mt-8">
        <div className="cx py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <img src="/logo/Group 39895.svg" alt="NCDE" className="h-20 w-auto object-contain" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100">Samen maken we Nederland duurzaam.</p>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-brand-200 hover:bg-white hover:text-brand-700 transition-all"><LinkedinIcon /></a>
                <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-brand-200 hover:bg-white hover:text-brand-700 transition-all"><YoutubeIcon /></a>
                <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-brand-200 hover:bg-white hover:text-brand-700 transition-all"><InstagramIcon /></a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5">
              <div>
                <h4 className="font-display text-sm font-bold text-white">Pagina&apos;s</h4>
                <ul className="mt-3 space-y-2">
                  {[
                    { t: "Home", href: "/" },
                    { t: "Over ons", href: "/over-ons" },
                    { t: "Subsidies & Financiering", href: "/subsidies-financiering" },
                    { t: "Partners", href: "/partners" },
                    { t: "Nieuws", href: "/nieuws" },
                    { t: "Contact", href: "/contact" },
                  ].map((p) => (
                    <li key={p.t}><Link href={p.href} className="text-sm text-brand-200 hover:text-white">{p.t}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white">Contact</h4>
                <ul className="mt-3 space-y-2">
                  <li><a href="mailto:info@ncde.nl" className="text-sm text-brand-200 hover:text-white">info@ncde.nl</a></li>
                  <li><Link href="/contact" className="text-sm text-brand-200 hover:text-white">Contactformulier</Link></li>
                  <li><a href="#" className="text-sm text-brand-200 hover:text-white">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h4 className="font-display text-sm font-bold text-white">Blijf op de hoogte</h4>
              <p className="mt-2 text-sm text-brand-200">Ontvang tips en actueel nieuws over verduurzamen.</p>
              <form className="mt-4">
                <div className="flex gap-2">
                  <input type="email" required placeholder="E-mailadres" className="flex-1 rounded-md border border-brand-600 bg-brand-700 px-3 py-2 text-sm text-white placeholder-brand-300 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400" />
                  <button type="submit" className="rounded-md bg-brand-600 px-4 py-2 text-sm font-bold text-white hover:bg-brand-700">Aanmelden</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-700">
          <div className="cx flex flex-col gap-2 py-4 text-xs text-brand-300 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Nationaal Collectief Duurzame Energie. Alle rechten voorbehouden.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
              <Link href="/algemene-voorwaarden" className="hover:text-white">Algemene voorwaarden</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
