/* Subpagina Zonnepanelen - inhoud klantmockup dd 22-5-2026, vormgeving = site design-systeem */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  ArrowRight,
  Home as HomeIcon,
  Sun,
  Coins,
  Leaf,
  ChevronRight,
  Lightbulb,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zonnepanelen — NCDE",
  description: "Wek uw eigen stroom op met zonnepanelen. NCDE berekent de opbrengst voor uw dak, verbruik en situatie.",
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

const systemen = [
  { tag: "Standaard systeem", t: "Monokristallijne panelen", d: "Hoog rendement en lange levensduur. De meest gekozen keuze voor woningen met een goed georiënteerd dak." },
  { tag: "Voordelig", t: "Polykristallijne panelen", d: "Iets lager rendement dan mono, maar ook iets goedkoper. Geschikt wanneer dakoppervlak ruim voldoende is." },
  { tag: "Optimalisatie", t: "Panelen met optimizers", d: "Per paneel wordt het maximale rendement gehaald. Ideaal bij gedeeltelijke schaduw of een complex dak." },
  { tag: "Maximale opbrengst", t: "Micro-omvormers", d: "Elk paneel heeft een eigen omvormer. Maximale onafhankelijkheid per paneel en eenvoudige uitbreiding." },
  { tag: "Ook 's avonds", t: "Zonnepanelen + batterij", d: "Sla overdag opgewekte stroom op voor gebruik in de avond. Meer eigen gebruik, minder teruglevering." },
  { tag: "Volledig groen rijden", t: "Zonnepanelen + laadpaal", d: "Laad uw elektrische auto op met eigen zonnestroom. De meest duurzame en voordelige manier van laden." },
];

const tabel = [
  { o: "Dak op het zuiden", w: "Maximale zonuren en hoogste jaaropbrengst", v: "Hellingshoek van 30–40 graden is ideaal" },
  { o: "Oost- of westdak", w: "Goede opbrengst, meer gespreide productie over de dag", v: "Iets minder opbrengst dan zuiden, maar prima rendabel" },
  { o: "Hoog stroomverbruik", w: "Grotere besparing bij meer eigen gebruik van opgewekte stroom", v: "Systeem afstemmen op werkelijk verbruiksprofiel" },
  { o: "Elektrische auto", w: "Combinatie met laadpaal maakt rijden vrijwel gratis", v: "Slimme laadpaal nodig voor optimale afstemming" },
  { o: "Warmtepomp in huis", w: "Zonnestroom dekt een groot deel van het extra stroomverbruik", v: "Systeem dimensioneren op gecombineerd verbruik" },
];

const aandachtspunten = [
  { t: "Dakgeschiktheid", d: "Dakrichting, hellingshoek, schaduw, dakbedekking en draagvermogen bepalen het systeem." },
  { t: "Omvormer en aansluiting", d: "De omvormer zet gelijkstroom om naar wisselstroom. Keuze heeft invloed op rendement en uitbreidbaarheid." },
  { t: "Opbrengst en monitoring", d: "Goede monitoring geeft inzicht in dagelijkse opbrengst, verbruik en teruglevering." },
  { t: "Garantie en installateur", d: "Kies een gecertificeerde installateur en check garantie op panelen, omvormer en installatie apart." },
];

const stappen = [
  { n: "01", t: "Dakanalyse", d: "We beoordelen dakrichting, hellingshoek, schaduw, oppervlak en geschikte plaatsing van de panelen." },
  { n: "02", t: "Opbrengst en besparing", d: "U krijgt inzicht in verwachte jaaropbrengst, eigen gebruik, teruglevering en terugverdientijd." },
  { n: "03", t: "Passend systeem", d: "NCDE adviseert over panelen, omvormer, eventuele batterij of laadpaal en een betrouwbare installateur." },
];

const adviesBullets = [
  { t: "Analyse van uw dak en verbruik", d: "Dakrichting, oppervlak en energieprofiel als vertrekpunt" },
  { t: "Inzicht in opbrengst en terugverdientijd", d: "Concrete berekening op basis van uw eigen situatie" },
  { t: "Advies over combinaties", d: "Batterij, laadpaal of warmtepomp erbij? Wij rekenen het door" },
];

export default function ZonnepanelenPage() {
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
          <MobileMenu active="/zonnepanelen" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: "#015C39" }}>
        <div className="cx relative z-10 py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <Sun size={14} /> Zonne-energie
              </span>
              <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
                Zonnepanelen voor<br /><span className="text-amber-400">je woning</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Wek uw eigen stroom op met zonnepanelen en verlaag uw energierekening. NCDE helpt u met de juiste keuze, afgestemd op uw dak, verbruik en situatie.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#systemen" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
                  Bekijk mogelijkheden
                  <ArrowRight size={16} />
                </a>
                <a href="#advies" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20 transition-colors">
                  Vraag advies aan
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
              <img src="/subpaginas/zonnepanelen.jpg" alt="Zonnepanelen op een woning" className="block h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAAROM ZONNEPANELEN ===== */}
      <section className="bg-brand-50 py-14 md:py-16">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Waarom zonnepanelen?</p>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { Icon: Coins, t: "Lagere energierekening", d: "Gebruik uw eigen opgewekte stroom en betaal minder aan uw leverancier" },
              { Icon: Sun, t: "Meer eigen gebruik", d: "Combineer met een thuisbatterij of laadpaal voor maximaal rendement" },
              { Icon: Leaf, t: "Duurzaam en toekomstbestendig", d: "Verminder uw CO₂-uitstoot en bereid u voor op de energietransitie" },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-white p-5 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-display text-base font-bold text-brand-900">{t}</p>
                  <p className="mt-1 text-sm text-gray-700">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-100 bg-white p-5 text-center shadow-[var(--shadow-card)]">
              <p className="font-display text-3xl font-black text-brand-800">25jr</p>
              <p className="mt-1 text-sm text-gray-700">garantie op panelen</p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-5 text-center shadow-[var(--shadow-card)]">
              <p className="font-display text-3xl font-black text-brand-800">7–9jr</p>
              <p className="mt-1 text-sm text-gray-700">gemiddelde terugverdientijd</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SYSTEMEN ===== */}
      <section id="systemen" className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Zonnepaneelsystemen</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Alle mogelijkheden voor uw dak
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            De juiste keuze hangt af van daktype, dakrichting, beschikbaar oppervlak, verbruik en of u wilt combineren met opslag of laden.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {systemen.map((m) => (
              <div key={m.t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-brand-200 transition-all">
                <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                  {m.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-black text-brand-800">{m.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEUZEHULP TABEL ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Keuzehulp</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Wanneer zijn zonnepanelen interessant?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            NCDE berekent uw persoonlijke opbrengst op basis van dakligging, verbruik en lokale zonuren.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Situatie</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Waarom interessant?</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Waar op letten?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tabel.map((r) => (
                  <tr key={r.o} className="hover:bg-brand-50/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-brand-800">{r.o}</td>
                    <td className="px-5 py-4 text-gray-700">{r.w}</td>
                    <td className="px-5 py-4 text-gray-700">{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
            <Lightbulb size={18} className="mt-0.5 shrink-0 text-amber-600" />
            <p className="text-sm text-amber-900">
              <strong>Tip:</strong> combineer zonnepanelen met een thuisbatterij of slimme laadpaal om meer eigen stroom te benutten en minder terug te leveren aan het net.
            </p>
          </div>
        </div>
      </section>

      {/* ===== AANDACHTSPUNTEN ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Technische aandachtspunten</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Waar moet u op letten bij zonnepanelen?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            Een goed systeem begint met de juiste analyse van uw dak, verbruik en installatie.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {aandachtspunten.map((p) => (
              <div key={p.t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-black text-brand-800">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ONZE AANPAK ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Onze aanpak</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            NCDE helpt met duidelijk inzicht
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            Wij brengen uw daksituatie en energieprofiel in kaart zodat u een systeem kiest dat echt rendeert.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {stappen.map((s) => (
              <div key={s.n} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-black text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-black text-brand-800">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.d}</p>
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
                Wilt u weten wat zonnepanelen voor u opleveren?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                NCDE berekent uw persoonlijke opbrengst, besparing en terugverdientijd op basis van uw dak en verbruik.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-colors">
                Vraag vrijblijvend advies aan
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-3">
              {adviesBullets.map((a) => (
                <div key={a.t} className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <ChevronRight size={18} className="mt-0.5 shrink-0 text-amber-400" />
                  <div>
                    <p className="font-bold text-white">{a.t}</p>
                    <p className="mt-1 text-sm text-white/75">{a.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
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
