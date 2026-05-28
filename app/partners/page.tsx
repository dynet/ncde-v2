/* Partners pagina - vanuit Claude code Partners dd 19-5-2026.docx */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  ArrowRight,
  Home as HomeIcon,
  Handshake,
  Award,
  Leaf,
  Euro,
  Shield,
  Users,
  ClipboardCheck,
  ListChecks,
  CheckCircle,
  BarChart3,
  Sun,
  Thermometer,
  HousePlug,
  Battery,
  Building2,
  Plug,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners — NCDE",
  description: "Onze gecertificeerde partners voor verduurzaming: Dynet BV (elektrotechnische installaties) en Alterion BV (thuisbatterijen).",
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

const benefits = [
  { Icon: Handshake, t: "Kracht door samenwerking", d: "We geloven in de kracht van een sterk netwerk van specialisten." },
  { Icon: Award, t: "Kwaliteit & betrouwbaarheid", d: "Onze partners voldoen aan strenge eisen en zijn onafhankelijk getoetst." },
  { Icon: Leaf, t: "Samen impact maken", d: "Voor een duurzame toekomst en een beter klimaat voor iedereen." },
  { Icon: Euro, t: "Betaalbaar voor iedereen", d: "Subsidies en financiering worden actief meegenomen in het advies." },
];

const keurmerkChecks = [
  "Betrouwbare partners",
  "Duurzame oplossingen",
  "Heldere afspraken",
  "Veilige uitvoering",
  "Transparant advies",
  "Nazorg en evaluatie",
];

const steps = [
  { n: 1, Icon: Users, t: "Aanmelden", d: "Een organisatie meldt zich aan als mogelijke NCDE-partner." },
  { n: 2, Icon: ClipboardCheck, t: "Toetsing", d: "NCDE controleert kwaliteit, veiligheid en betrouwbaarheid." },
  { n: 3, Icon: Handshake, t: "Samenwerking", d: "Afspraken over bewonersaanpak en uitvoering worden vastgelegd." },
  { n: 4, Icon: CheckCircle, t: "Keurmerk", d: "Goedgekeurde partners krijgen een herkenbare kwaliteitsstatus." },
  { n: 5, Icon: BarChart3, t: "Evaluatie", d: "De samenwerking wordt periodiek beoordeeld en verbeterd." },
];

const ncdePartners = [
  {
    name: "Dynet BV",
    desc: "Gespecialiseerd in elektrotechnische installaties.",
    logo: "/partners/dynet-logo.png",
  },
  {
    name: "Alterion BV",
    desc: "Gespecialiseerd in de installatie van thuisbatterijen.",
    logo: null,
  },
];

export default function Partners() {
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
            <Link href="/partners" className="relative text-sm font-semibold text-brand-600">
              Partners
              <span className="absolute -bottom-[29px] left-0 right-0 h-[3px] rounded-full bg-brand-600"></span>
            </Link>
            <Link href="/nieuws" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Nieuws</Link>
            <Link href="/contact" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Contact</Link>
          </nav>
          <Link href="/#woningcheck" className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
            <HomeIcon size={17} />
            Start woningcheck
          </Link>
          <MobileMenu active="/partners" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate min-h-[480px] flex items-center overflow-hidden bg-gradient-to-br from-brand-700 to-brand-800">
        <div className="cx relative z-10 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Handshake size={14} /> Partnerprogramma NCDE
              </span>
              <h1 className="mt-5 font-display text-3xl font-black uppercase leading-[1.1] md:text-4xl lg:text-[2.75rem]">
                Samen maken we<br />
                Nederland duurzamer
              </h1>
              <p className="mt-5 text-base leading-relaxed text-brand-100 md:text-lg max-w-2xl">
                NCDE werkt samen met betrouwbare partners uit verschillende sectoren. Samen bundelen we kennis, technologie en ervaring om huiseigenaren te ontzorgen en de energietransitie te versnellen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-bold text-brand-700 hover:bg-brand-50 transition-all">
                  Word partner van NCDE <ArrowRight size={16} />
                </a>
                <a href="#keurmerk" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-white/10 backdrop-blur px-6 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all">
                  Bekijk keurmerk <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden bg-white shadow-[var(--shadow-card)]">
                <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-pulse z-10 pointer-events-none"></div>
                <img src="/partners/ncde-keurmerk.png" alt="NCDE Keurmerk" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-16 md:py-20">
        <div className="cx">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ Icon, t, d }) => (
              <article key={t} className="group rounded-2xl bg-white p-6 border border-gray-200 hover:border-brand-200 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all flex flex-col">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-base font-bold text-gray-900">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEURMERK ===== */}
      <section id="keurmerk" className="bg-brand-50 py-16 md:py-20">
        <div className="cx">
          <div className="text-center mb-12">
            <p className="inline-flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-brand-700">
              <span className="inline-block w-5 h-[3px] bg-brand-600 rounded"></span>
              NCDE Kwaliteit
              <span className="inline-block w-5 h-[3px] bg-brand-600 rounded"></span>
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-brand-800 md:text-4xl">Het NCDE-keurmerk</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Links: visual */}
            <div className="flex flex-col items-center gap-8">
              <div className="relative w-72 h-72 rounded-full overflow-hidden bg-white shadow-[var(--shadow-card)]">
                <div className="absolute inset-0 rounded-full border-2 border-brand-200 animate-pulse z-10 pointer-events-none"></div>
                <img src="/partners/ncde-keurmerk.png" alt="NCDE Keurmerk" className="h-full w-full object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                <div className="rounded-xl bg-white p-3 text-center shadow-[var(--shadow-soft)]">
                  <Shield size={20} className="mx-auto text-brand-600" />
                  <p className="mt-1 text-[10px] font-bold uppercase text-gray-700">Keurmerk</p>
                </div>
                <div className="rounded-xl bg-white p-3 text-center shadow-[var(--shadow-soft)]">
                  <p className="font-display text-lg font-extrabold text-brand-700">6+</p>
                  <p className="text-[10px] font-bold uppercase text-gray-700">Categorieën</p>
                </div>
                <div className="rounded-xl bg-white p-3 text-center shadow-[var(--shadow-soft)]">
                  <p className="font-display text-lg font-extrabold text-brand-700">100%</p>
                  <p className="text-[10px] font-bold uppercase text-gray-700">Getoetst</p>
                </div>
              </div>
            </div>

            {/* Rechts: details */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">
                <Award size={14} /> NCDE-keurmerk
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold uppercase text-brand-800 md:text-3xl">
                Kwaliteit zichtbaar maken
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                Het NCDE-keurmerk geeft bewoners vertrouwen. Partners worden getoetst op kwaliteit, betrouwbaarheid, duurzaamheid, communicatie en veilige uitvoering.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keurmerkChecks.map((c) => (
                  <div key={c} className="flex items-start gap-2 text-sm text-gray-800">
                    <CheckCircle size={18} className="mt-0.5 text-brand-600 shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STEPS ===== */}
      <section className="py-16 md:py-20">
        <div className="cx text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Samenwerken met NCDE</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-brand-800 md:text-4xl">
            Van aanmelding tot evaluatie
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s) => (
              <article key={s.n} className="rounded-2xl bg-white p-5 border border-gray-200 hover:border-brand-200 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-white font-bold text-sm">{s.n}</span>
                  <s.Icon size={18} className="text-brand-600" />
                </div>
                <h3 className="font-display text-base font-bold text-gray-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NCDE PARTNERS ===== */}
      <section className="bg-brand-50 py-16 md:py-20">
        <div className="cx">
          <div className="partner-marquee overflow-hidden">
            <div className="partner-marquee-track gap-5">
              {[...ncdePartners, ...ncdePartners].map((p, i) => (
                <article key={`${p.name}-${i}`} aria-hidden={i >= ncdePartners.length} className="w-64 shrink-0 rounded-2xl bg-white border border-gray-200 p-5">
                  <div className="flex h-20 items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
                    {p.logo ? (
                      <img src={p.logo} alt={`${p.name} logo`} className="max-h-12 max-w-[70%] object-contain" />
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Logo volgt</span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-black uppercase text-brand-800">{p.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-700">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" className="cx py-16 md:py-20">
        <div className="rounded-2xl bg-brand-700 p-8 md:p-10 text-white shadow-[var(--shadow-card)] relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/5"></div>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-white/15 backdrop-blur shrink-0">
                <Leaf size={28} className="text-brand-200" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-extrabold uppercase md:text-3xl">Word partner van NCDE</h2>
                <p className="mt-2 text-base text-brand-100 max-w-xl">
                  Wilt u samenwerken aan een duurzame toekomst? Sluit u aan bij ons netwerk van gecertificeerde en betrokken partners.
                </p>
              </div>
            </div>
            <a href="mailto:info@ncde.nl?subject=Partnerprogramma" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-bold text-brand-700 hover:bg-brand-50 transition-all whitespace-nowrap">
              Neem contact op <ArrowRight size={16} />
            </a>
          </div>
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
                    { t: "Nieuws", href: "/" },
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
                  <li><a href="#" className="text-sm text-brand-200 hover:text-white">Contactformulier</a></li>
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
