/* Subpagina Laadpaal - inhoud klantmockup dd 22-5-2026, vormgeving = site design-systeem */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  ArrowRight,
  Home as HomeIcon,
  Plug,
  Sun,
  Activity,
  ChevronRight,
  Lightbulb,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laadpaal thuis — NCDE",
  description: "Laad uw elektrische auto veilig, slim en voordelig thuis op. NCDE adviseert welke laadoplossing past bij uw woning en auto.",
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

const oplossingen = [
  { tag: "Thuisgebruik", t: "Wandlader", d: "Compacte laadoplossing aan de gevel of in de garage. Ideaal voor thuisgebruik, eenvoudig te monteren en altijd beschikbaar." },
  { tag: "Oprit of parkeerplaats", t: "Vrijstaande laadpaal", d: "Een nette en robuuste oplossing op de oprit of parkeerplaats bij de woning, ook geschikt voor meerdere auto's." },
  { tag: "Automatisch gepland", t: "Slim laden", d: "Laad automatisch op gunstige momenten en houd uw verbruik en kosten bij via een handige app op uw telefoon." },
  { tag: "Eigen opwek", t: "Laden met zonnestroom", d: "Gebruik zoveel mogelijk eigen opgewekte stroom van uw zonnepanelen en minimaliseer teruglevering aan het net." },
  { tag: "Laagste stroomprijs", t: "Dynamisch laden", d: "Laad wanneer stroomtarieven het laagst zijn. Maximaal voordeel met een dynamisch energiecontract." },
  { tag: "Vermogensverdeling", t: "Load balancing", d: "Voorkomt overbelasting van de meterkast door slim het beschikbare vermogen te verdelen over apparaten en laadpaal." },
];

const aandachtspunten = [
  { t: "Laadsnelheid", d: "Afhankelijk van uw auto, laadpaal, aansluiting en beschikbare stroomcapaciteit." },
  { t: "Meterkastcontrole", d: "Voor veilige installatie wordt gecontroleerd of uitbreiding van de meterkast nodig is." },
  { t: "Veilige installatie", d: "Een laadpaal moet professioneel worden geplaatst volgens de geldende NEN-normen." },
];

const tabel = [
  { o: "Eigen oprit", w: "Wandlader of vrijstaande laadpaal", v: "Altijd beschikbaar, laden wanneer het u uitkomt" },
  { o: "Zonnepanelen", w: "Slim laden met zonnestroom", v: "Meer eigen stroom gebruiken en minder terugleveren" },
  { o: "Dynamisch energiecontract", w: "Dynamisch laden", v: "Laden op momenten met de laagste stroomprijzen" },
  { o: "Beperkte aansluiting", w: "Load balancing", v: "Voorkomt overbelasting van de meterkast" },
  { o: "Zakelijk gebruik", w: "Laadpaal met registratie", v: "Inzicht in laadkosten en eenvoudige verrekening" },
];

const stappen = [
  { n: "01", t: "Woninganalyse", d: "We bekijken oprit, meterkast, aansluiting, kabelroute en de beste plaatsing van uw laadpaal." },
  { n: "02", t: "Kosten en besparing", d: "U krijgt inzicht in investering, verwachte laadkosten en mogelijke maandelijkse besparing." },
  { n: "03", t: "Betrouwbare installatie", d: "NCDE helpt u met praktische oplossingen en werkt samen met gecertificeerde installateurs." },
];

const adviesBullets = [
  { t: "Controle van meterkast en aansluiting", d: "We beoordelen of uw installatie klaar is voor een laadpaal" },
  { t: "Advies over slim laden en zonnepanelen", d: "Optimale combinatie voor uw situatie en rijgedrag" },
  { t: "Inzicht in kosten, verbruik en besparing", d: "Concrete berekeningen op basis van uw eigen gegevens" },
];

export default function LaadpaalPage() {
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
          <MobileMenu active="/laadpaal" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: "#015C39" }}>
        <div className="cx relative z-10 py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <Plug size={14} /> Thuis laden
              </span>
              <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
                Laadpalen voor<br /><span className="text-amber-400">je woning</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Laad uw elektrische auto veilig, slim en voordelig thuis op. NCDE helpt u met de juiste laadoplossing — afgestemd op uw woning, auto, meterkast en energieverbruik.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#oplossingen" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
                  Bekijk mogelijkheden
                  <ArrowRight size={16} />
                </a>
                <a href="#advies" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20 transition-colors">
                  Vraag advies aan
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
              <img src="/subpaginas/laadpaal-new.jpg" alt="Laadpaal voor elektrische auto" className="block h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAAROM ===== */}
      <section className="bg-brand-50 py-14 md:py-16">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Waarom een laadpaal thuis?</p>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { Icon: Plug, t: "Veilig en betrouwbaar laden", d: "Professioneel geïnstalleerd aan huis, altijd beschikbaar" },
              { Icon: Sun, t: "Slim laden met eigen zonnestroom", d: "Koppel uw laadpaal aan zonnepanelen voor maximale besparing" },
              { Icon: Activity, t: "Inzicht in kosten & verbruik", d: "Realtime overzicht via app van laadsnelheid en uitgaven" },
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
              <p className="font-display text-3xl font-black text-brand-800">3×</p>
              <p className="mt-1 text-sm text-gray-700">sneller laden dan stopcontact</p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-5 text-center shadow-[var(--shadow-card)]">
              <p className="font-display text-3xl font-black text-brand-800">40%</p>
              <p className="mt-1 text-sm text-gray-700">besparing met zonnestroom</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OPLOSSINGEN ===== */}
      <section id="oplossingen" className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Laadoplossingen</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Alle mogelijkheden voor thuis laden
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            De juiste laadoplossing hangt af van uw auto, woning, meterkast, zonnepanelen, rijgedrag en gewenste laadsnelheid.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {oplossingen.map((m) => (
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

      {/* ===== AANDACHTSPUNTEN ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Technische aandachtspunten</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Waar moet u op letten bij een laadpaal?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            Een laadpaal moet technisch passen bij uw woning en veilig worden aangesloten. Meterkast, groepenkast en beschikbare capaciteit zijn daarbij doorslaggevend.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {aandachtspunten.map((p) => (
              <div key={p.t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-black text-brand-800">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
            <Lightbulb size={18} className="mt-0.5 shrink-0 text-amber-600" />
            <p className="text-sm text-amber-900">
              <strong>Tip:</strong> combineer uw laadpaal met zonnepanelen of een dynamisch energiecontract om slimmer en voordeliger te laden.
            </p>
          </div>
        </div>
      </section>

      {/* ===== KEUZEHULP TABEL ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Keuzehulp</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Welke laadoplossing past bij uw situatie?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            NCDE helpt u kiezen en berekent wat thuis laden voor uw maandelijkse energiekosten betekent.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Situatie</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Passende oplossing</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Belangrijk voordeel</th>
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
            Wij brengen uw situatie helder in kaart zodat u een laadoplossing kiest die écht past bij uw woning, auto en energieprofiel.
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
                Wilt u veilig en slim thuis laden?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                NCDE helpt u stap voor stap naar een passende laadoplossing — met onafhankelijk advies, inzicht in kosten en betrouwbare installatie.
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
