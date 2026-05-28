/* Subpagina Gemeentelijke subsidies - inhoud klantmockup dd 22-5-2026, vormgeving = site design-systeem */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  ArrowRight,
  Home as HomeIcon,
  Building2,
  MapPin,
  FileText,
  Receipt,
  Camera,
  Wallet,
  Zap,
  KeyRound,
  TriangleAlert,
  Lightbulb,
  Search,
  ClipboardCheck,
  Calculator,
  Check,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gemeentelijke subsidies — NCDE",
  description: "Welke lokale subsidies biedt uw gemeente voor isolatie, ventilatie of energieadvies? NCDE controleert het voor u.",
};

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

const voorwaarden = [
  { n: "1", t: "Uw gemeente bepaalt de regeling", d: "Elke gemeente kan eigen voorwaarden, subsidiebedragen, doelgroepen en aanvraagprocedures hanteren. Er is geen landelijk uniforme gemeentelijke regeling." },
  { n: "2", t: "Inkomen- of labelafhankelijk", d: "Sommige regelingen zijn gericht op bewoners met een lager inkomen, slecht geïsoleerde woningen of een laag energielabel (E, F of G)." },
  { n: "3", t: "Budget kan opraken", d: "Gemeentelijke subsidies hebben vaak een beperkt budget. Wanneer het budget op is, kan de regeling tijdelijk of definitief sluiten." },
];

const maatregelen = [
  { m: "Isolatie", h: "Dak-, vloer-, bodem-, gevel-, spouwmuur- of glasisolatie van de woning.", v: "Vaak gekoppeld aan minimale isolatiewaarden, woningtype of energielabel. Soms ook combinatie met landelijke ISDE vereist." },
  { m: "Ventilatie", h: "Verbetering van ventilatie na isolatiemaatregelen voor een gezond binnenklimaat.", v: "Soms alleen mogelijk in combinatie met isolatie of binnen een gemeentelijke actie of wijkprogramma." },
  { m: "Energieadvies", h: "Adviesrapport of woningopname door een gecertificeerd energieadviseur.", v: "Kan gratis, deels vergoed of gekoppeld zijn aan een vervolgmaatregel. Soms als voucher aangeboden." },
  { m: "Collectieve wijkacties", h: "Gezamenlijke inkoop of aanpak per buurt, straat of wijk voor lagere kosten.", v: "Vaak tijdelijk beschikbaar en afhankelijk van voldoende deelname binnen de wijk of straat." },
  { m: "Energiebesparende producten", h: "Kleine maatregelen zoals tochtstrips, radiatorfolie of ledverlichting.", v: "Soms via waardebonnen, energiebespaarboxen of lokale buurtacties. Vaak voor bewoners met lager inkomen." },
];

const docs = [
  { Icon: MapPin, t: "Adresgegevens", d: "De gemeente controleert of de woning binnen de gemeentegrenzen valt en of u eigenaar of bewoner bent." },
  { Icon: Receipt, t: "Offerte of factuur", d: "Vaak is een offerte vooraf of een factuur achteraf nodig om de kosten van de maatregel aan te tonen." },
  { Icon: Camera, t: "Bewijs van uitvoering", d: "Foto's, betaalbewijs, installatierapport of productinformatie als bewijs dat de maatregel is uitgevoerd." },
  { Icon: Wallet, t: "Inkomensgegevens", d: "Alleen nodig wanneer de regeling afhankelijk is van inkomen of een specifieke doelgroep." },
  { Icon: Zap, t: "Energielabel", d: "Sommige gemeenten richten subsidie op woningen met een lager energielabel (E, F of G)." },
  { Icon: KeyRound, t: "Eigendom of huur", d: "Voorwaarden kunnen verschillen voor woningeigenaren, huurders of VvE's. Controleer welke situatie op u van toepassing is." },
];

const ncdeHulp = [
  { Icon: Search, t: "Regeling controleren", d: "Wij kijken welke lokale subsidies of acties in uw gemeente beschikbaar zijn op basis van uw postcode en woningsituatie." },
  { Icon: ClipboardCheck, t: "Voorwaarden uitleggen", d: "U krijgt duidelijk inzicht in voorwaarden, documenten, deadlines en mogelijke combinaties met landelijke subsidie zoals ISDE." },
  { Icon: Calculator, t: "Besparing berekenen", d: "NCDE laat zien wat de maatregel kost, hoeveel subsidie mogelijk is en wat uw maandelijkse en jaarlijkse besparing kan zijn." },
];

export default function GemeentelijkeSubsidiesPage() {
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
            <Link href="/contact" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Contact</Link>
          </nav>
          <Link href="/#woningcheck" className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
            <HomeIcon size={17} />
            Start woningcheck
          </Link>
          <MobileMenu active="/gemeentelijke-subsidies" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: "#015C39" }}>
        <div className="cx relative z-10 py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <Building2 size={14} /> Subsidie · Gemeentelijk
              </span>
              <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
                Gemeentelijke subsidie voor<br /><span className="text-amber-400">bewoners</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Naast landelijke subsidies bieden veel gemeenten extra ondersteuning voor isolatie, ventilatie, energieadvies en lokale verduurzamingsacties.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li>✓ Verschilt per gemeente</li>
                <li>✓ Vaak afhankelijk van inkomen, woningtype of energielabel</li>
                <li>✓ Budget kan tijdelijk beschikbaar zijn of opraken</li>
              </ul>
              <a href="#voorwaarden" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
                Lees voorwaarden
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
              <img src="/subpaginas/gemeentelijke-subsidies.png" alt="Gemeentelijke subsidie" className="block h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOKALE HULP ===== */}
      <section className="bg-brand-50 py-14 md:py-16">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Lokale hulp bij verduurzaming</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-black uppercase leading-[1.15] text-brand-800 md:text-3xl">
            Lokale regelingen verschillen per gemeente
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base text-gray-700">
            <p>
              Gemeentelijke subsidies zijn bedoeld om bewoners lokaal te helpen met energiebesparing en verduurzaming. De voorwaarden, bedragen en looptijden verschillen per gemeente.
            </p>
            <p>
              NCDE helpt u te controleren welke regelingen in uw gemeente beschikbaar zijn en of u hiervoor in aanmerking komt.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Combineerbaar met landelijke ISDE-subsidie",
              "Vraag tijdig aan: budget kan opraken",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 shadow-[var(--shadow-card)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  <Check size={14} />
                </span>
                <span className="font-semibold text-gray-800">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VOORWAARDEN ===== */}
      <section id="voorwaarden" className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Eisen & voorwaarden</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Belangrijkste voorwaarden
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {voorwaarden.map((v) => (
              <div key={v.n} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-black text-white">
                  {v.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-black text-brand-800">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{v.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
            <TriangleAlert size={18} className="mt-0.5 shrink-0 text-red-600" />
            <p className="text-sm text-red-900">
              <strong>Let op:</strong> gemeentelijke subsidies veranderen regelmatig. Controleer altijd de actuele voorwaarden bij uw eigen gemeente voordat u kosten maakt of een maatregel laat uitvoeren. Sommige gemeenten eisen dat u de aanvraag indient vóórdat de maatregel wordt uitgevoerd.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAATREGELEN TABEL ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Overzicht maatregelen</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Waarvoor kunt u gemeentelijke subsidie krijgen?
          </h2>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Maatregel</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Wat houdt het in?</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Veelvoorkomende voorwaarden</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {maatregelen.map((r) => (
                  <tr key={r.m} className="hover:bg-brand-50/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-brand-800">{r.m}</td>
                    <td className="px-5 py-4 text-gray-700">{r.h}</td>
                    <td className="px-5 py-4 text-gray-700">{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTATIE ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Documentatie</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Wat heeft u meestal nodig voor een aanvraag?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            De benodigde documenten verschillen per gemeente en regeling, maar onderstaande zijn het meest gangbaar.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {docs.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-black text-brand-800">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
            <Lightbulb size={18} className="mt-0.5 shrink-0 text-amber-600" />
            <p className="text-sm text-amber-900">
              <strong>Tip — vraag niet te laat aan:</strong> sommige gemeenten eisen dat u de aanvraag indient vóórdat u de maatregel uitvoert. Wacht dus niet tot na de werkzaamheden. Neem bij twijfel eerst contact op met uw gemeente of met NCDE.
            </p>
          </div>
        </div>
      </section>

      {/* ===== NCDE HULP ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Wat NCDE voor u doet</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Hoe helpt NCDE?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            NCDE combineert kennis van landelijke én lokale regelingen. Zo krijgt u een compleet beeld van wat er voor u mogelijk is.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {ncdeHulp.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-black text-brand-800">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVIES CTA ===== */}
      <section id="advies" className="bg-white py-12 md:py-16">
        <div className="cx">
          <div className="rounded-3xl px-6 py-12 text-white md:px-12 md:py-16 shadow-2xl" style={{ background: "#015C39" }}>
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Vrijblijvend advies</p>
                <h2 className="mt-3 font-display text-3xl font-black uppercase leading-[1.1] md:text-4xl">
                  Wilt u weten welke subsidie uw gemeente biedt?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                  NCDE helpt u vrijblijvend met inzicht in lokale regelingen, subsidies, kosten en mogelijke maandelijkse besparingen.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-colors">
                  Vraag vrijblijvend advies aan
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="space-y-3">
                {[
                  "Lokale subsidiecheck op basis van uw postcode",
                  "Uitleg van voorwaarden en documenten",
                  "Inzicht in kosten, subsidie en maandelijkse besparing",
                  "100% vrijblijvend en onafhankelijk advies",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-brand-900">
                      <Check size={14} />
                    </span>
                    <span className="font-bold text-white">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DISCLAIMER STROOK ===== */}
      <section className="bg-gray-50 py-8">
        <div className="cx">
          <p className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-xs text-gray-600">
            Gemeentelijke subsidies worden bepaald door lokale overheden en kunnen tussentijds wijzigen. NCDE is niet verantwoordelijk voor de beschikbaarheid of actuele hoogte van gemeentelijke regelingen. Controleer altijd de actuele informatie bij uw gemeente.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-brand-800 border-t border-brand-700">
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
                  <li><Link href="/cvd-melding" className="text-sm text-brand-200 hover:text-white">CVD-melding</Link></li>
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
              <Link href="/cookiebeleid" className="hover:text-white">Cookiebeleid</Link>
              <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
              <Link href="/cvd-melding" className="hover:text-white">CVD-melding</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
