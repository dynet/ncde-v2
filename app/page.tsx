/* Homepage NCDE - 1-op-1 vanaf Codehomepagine Claude dd 7-5-2026.docx */

import {
  Home as HomeIcon,
  BarChart2,
  Banknote,
  ShieldCheck,
  CheckCircle,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import PopText from "./PopText";
import HeroSlider from "../components/HeroSlider";
import MobileMenu from "../components/MobileMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NCDE — Samen werken aan duurzame energie",
  description: "NCDE helpt u stap voor stap naar een energiezuinige woning, met onafhankelijk advies, praktische oplossingen en betrouwbare uitvoerders.",
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

export default function Home() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/95 shadow-[var(--shadow-soft)] backdrop-blur-md">
        <div className="cx flex h-24 items-center justify-between">
          <Link href="/" aria-label="NCDE — Nationaal Collectief Duurzame Energie home" className="block h-16 w-[200px] overflow-hidden shrink-0">
            <img
              src="/this one.svg"
              alt="NCDE — Nationaal Collectief Duurzame Energie"
              className="h-[5.6rem] w-auto max-w-none object-cover object-top"
            />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="relative text-sm font-semibold text-brand-600">
              Home
              <span className="absolute -bottom-[29px] left-0 right-0 h-[3px] rounded-full bg-brand-600"></span>
            </Link>
            <Link href="/over-ons" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Over ons</Link>
            <Link href="/subsidies-financiering" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Subsidies & Financiering</Link>
            <Link href="/partners" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Partners</Link>
            <Link href="/nieuws" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Nieuws</Link>
            <Link href="/contact" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Contact</Link>
          </nav>
          <Link
            href="#woningcheck"
            className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all"
          >
            <HomeIcon size={17} />
            Start woningcheck
          </Link>
          <MobileMenu active="/" />
        </div>
      </header>

      {/* ===== HERO SLIDER ===== */}
      <HeroSlider />

      {/* ===== USP-SECTIE — 3 grote kaarten ===== */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="cx">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Duidelijk inzicht */}
            <div className="group relative overflow-hidden rounded-2xl bg-brand-50 border border-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="h-32 overflow-hidden">
                <img src="/Homepagina/duidelijk inzicht.png" alt="" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600">
                    <BarChart2 size={18} strokeWidth={2} className="text-white" />
                  </div>
                  <h3 className="font-display text-base font-extrabold text-brand-800">Duidelijk inzicht</h3>
                </div>
                <p className="text-xs leading-relaxed text-gray-700">
                  Krijg inzicht in kosten en terugverdientijd, afgestemd op uw persoonlijke situatie en woning.
                </p>
                <Link href="#woningcheck" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700">
                  Start woningcheck <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Subsidies */}
            <div className="group relative overflow-hidden rounded-2xl bg-sand-50 border border-amber-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="h-32 overflow-hidden">
                <img src="/Homepagina/subsidie.png" alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500">
                    <Banknote size={18} strokeWidth={2} className="text-white" />
                  </div>
                  <h3 className="font-display text-base font-extrabold text-gray-900">Subsidies</h3>
                </div>
                <p className="text-xs leading-relaxed text-gray-700">
                  Alle landelijke en gemeentelijke regelingen op één plek, afgestemd op uw situatie.
                </p>
                <Link href="/subsidies-financiering" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-amber-700 hover:text-amber-800">
                  Bekijk regelingen <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Betrouwbare partners */}
            <div className="group relative overflow-hidden rounded-2xl bg-sky-50 border border-sky-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="h-32 overflow-hidden">
                <img src="/Homepagina/betrouwbare partners.png" alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-600">
                    <ShieldCheck size={18} strokeWidth={2} className="text-white" />
                  </div>
                  <h3 className="font-display text-base font-extrabold text-gray-900">Betrouwbare partners</h3>
                </div>
                <p className="text-xs leading-relaxed text-gray-700">
                  Wij werken uitsluitend met gecertificeerde uitvoerders, zorgvuldig geselecteerd op kwaliteit, service en prijs.
                </p>
                <Link href="/partners" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-sky-700 hover:text-sky-800">
                  Onze uitvoerders <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAAROM VERDUURZAMEN ===== */}
      <section className="cx py-16">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Waarom nu verduurzamen?</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-800 md:text-4xl">Zes goede redenen</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            { img: "/Homepagina/besparing op energiekosten.png", title: "Besparing op energiekosten", body: "Verlaag direct uw maandlasten door minder verbruik.", strong: "Minder verbruik is direct voordeel" },
            { img: "/Homepagina/Meer woningwaarde.png", title: "Meer woningwaarde", body: "Een beter energielabel verhoogt de waarde van uw woning.", strong: "Investeren in duurzaamheid loont" },
            { img: "/homepagina 2/Meer comfort in huis.png", title: "Meer comfort in huis", body: "Stabiele temperaturen en betere luchtkwaliteit het jaar rond.", strong: "Warmer in winter, koeler in zomer" },
            { img: "/homepagina 2/Einde saldering .png", title: "Saldering verandert", body: "Vanaf 2027 wordt terugleveren minder voordelig. Handelen loont nu.", strong: "Eigen verbruik wordt essentieel" },
            { img: "/Homepagina/netgongestie.png", title: "Netcongestie", body: "Het net raakt vol. Zelfvoorzienend worden geeft zekerheid.", strong: "Minder afhankelijk van het net" },
            { img: "/Homepagina/klimaat.png", title: "Klimaat & toekomst", body: "Draag bij aan een beter klimaat voor volgende generaties.", strong: "Voor uzelf én de toekomst" },
          ].map((c) => (
            <article key={c.title} className="flex flex-col overflow-hidden rounded-[var(--radius-xl2)] bg-white border border-gray-200 hover:border-brand-200 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="flex flex-col flex-1 p-4">
                <h3 className="font-display text-xl font-extrabold text-brand-800">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600">{c.body}</p>
                <p className="mt-auto pt-3 text-xs font-bold text-brand-700">{c.strong}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== OPLOSSINGEN ===== */}
      <section id="oplossingen" className="bg-brand-50 py-14">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Zes goede redenen om te verduurzamen</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-800 md:text-4xl">Ontdek wat bij uw woning past</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { img: "/Homepagina/isolatie.png", title: "Isolatie", sub: "Energie besparen & comfort", href: "/isolatie" },
              { img: "/Homepagina/warmtepomp.png", title: "Warmtepomp", sub: "Duurzaam verwarmen", href: "/warmtepomp" },
              { img: "/Homepagina/zonnepanelen.png", title: "Zonnepanelen", sub: "Wek uw eigen stroom op", href: "/zonnepanelen" },
              { img: "/Homepagina/thuisbatterij.png", title: "Thuisbatterij", sub: "Sla energie op & gebruik slim", href: "/thuisbatterij" },
              { img: "/Homepagina/ventilatie.png", title: "Ventilatie", sub: "Gezond binnenklimaat", href: "/ventilatie" },
              { img: "/Homepagina/laadpaal.png", title: "Laadpaal", sub: "Klaar voor elektrisch rijden", href: "/laadpaal" },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="group flex flex-col overflow-hidden rounded-[var(--radius-xl2)] bg-white border border-transparent hover:border-brand-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-display text-xl font-extrabold text-brand-800">{s.title}</h3>
                  <p className="mt-0.5 text-xs text-gray-500">{s.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENERGIELABEL ===== */}
      <section className="py-20 md:py-24">
        <div className="cx grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Energielabel</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-800 md:text-4xl">Wat is uw energielabel waard?</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Van label G naar A kan duizenden euro&apos;s per jaar schelen en verhoogt de waarde van uw woning.
            </p>
            <ul className="mt-6 space-y-3">
              {["Lagere energierekening", "Hogere woningwaarde bij verkoop", "Meer comfort en minder tocht", "Betere positie voor verhuur"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={20} className="text-brand-600 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-4 text-sm font-bold text-white hover:bg-brand-700 transition-all">
              Bekijk uw energielabel <ArrowRight size={18} />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Indicatieve energiekosten per jaar</p>
              <div className="space-y-2">
                {[
                  { label: "A+++", bg: "#008453", width: "95%", cost: "<€500/jr", textWhite: true },
                  { label: "A", bg: "#51ae45", width: "78%", cost: "€900/jr", textWhite: true },
                  { label: "B", bg: "#b5cf31", width: "62%", cost: "€1.300/jr", textWhite: true },
                  { label: "C", bg: "#f4c600", width: "50%", cost: "€1.800/jr", textWhite: false },
                  { label: "D", bg: "#ec8217", width: "40%", cost: "€2.400/jr", textWhite: true },
                  { label: "F", bg: "#e43b1b", width: "28%", cost: "€3.200/jr", textWhite: true },
                  { label: "G", bg: "#c0202e", width: "16%", cost: ">€4.000/jr", textWhite: true },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <span
                      className="rounded-md text-center text-sm font-extrabold py-1.5 shrink-0"
                      style={{
                        background: r.bg,
                        color: r.textWhite ? "white" : "#333",
                        width: "72px",
                      }}
                    >
                      {r.label}
                    </span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2.5">
                      <div className="h-2.5 rounded-full" style={{ width: r.width, background: r.bg }}></div>
                    </div>
                    <span className="text-xs text-gray-500 w-16 text-right shrink-0">{r.cost}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-400">* Indicatieve jaarkosten voor een gemiddelde tussenwoning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ADVIES BLOK ===== */}
      <section className="cx py-12 md:py-16">
        <div className="relative overflow-hidden rounded-2xl bg-brand-700">
          <svg aria-hidden viewBox="0 0 200 200" className="pointer-events-none absolute -left-8 top-0 h-48 w-48 opacity-15">
            <g stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round">
              <path d="M100 30 Q120 60 100 100 Q80 60 100 30 Z" />
              <line x1="100" y1="30" x2="100" y2="100" />
              <path d="M70 60 Q90 90 70 130 Q50 90 70 60 Z" />
              <line x1="70" y1="60" x2="70" y2="130" />
              <path d="M130 70 Q150 100 130 140 Q110 100 130 70 Z" />
              <line x1="130" y1="70" x2="130" y2="140" />
            </g>
          </svg>
          <div className="relative grid grid-cols-1 gap-6 p-6 md:p-8 lg:grid-cols-10">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl font-extrabold text-white leading-tight md:text-3xl">
                Onafhankelijk advies waar u op kunt vertrouwen
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Vrijblijvend en persoonlijk advies",
                  "Inzicht in kosten, besparing en subsidies",
                  "Geselecteerde, betrouwbare uitvoerders",
                  "Van plan tot en met realisatie",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/95 text-sm">
                    <Check size={19} strokeWidth={3} className="mt-0.5 shrink-0 text-brand-200" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/noodpakket" className="group flex flex-col rounded-xl bg-white p-5 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all lg:col-span-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-gray-900">Noodpakket</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">Bereid u voor op een stroomuitval en blijf zelfvoorzienend.</p>
                </div>
                <img src="/homepagina 2/Noodpakket.png" alt="" className="h-20 w-24 sm:h-28 sm:w-32 shrink-0 rounded-lg object-cover" />
              </div>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-brand-600">
                Meer informatie <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link href="/salderingsregeling" className="group flex flex-col rounded-xl bg-white p-5 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all lg:col-span-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-700 mb-2">Vervalt 2027</span>
                  <h3 className="font-display text-lg font-bold text-gray-900">Salderingsregeling</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">Vanaf 2027 wordt terugleveren minder voordelig. Lees wat dit betekent.</p>
                </div>
                <img src="/homepagina 2/Einde saldering .png" alt="" className="h-20 w-24 sm:h-28 sm:w-32 shrink-0 rounded-lg object-cover" />
              </div>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-brand-600">
                Meer informatie <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WONINGCHECK ===== */}
      <section id="woningcheck" className="cx py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl bg-brand-700 p-8 text-white shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-elevated)] md:p-10">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-200">Gratis & vrijblijvend</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase md:text-4xl min-h-[2.5em] md:min-h-[2.4em] text-white" aria-label="Start uw woningcheck">
              <PopText text="Start uw woningcheck" />
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100">
              In vijf minuten inzicht in welke maatregelen bij uw woning passen, hoeveel u bespaart en welke subsidies beschikbaar zijn.
            </p>
            <ul className="mt-5 space-y-2">
              {["Persoonlijk rapport op maat", "Overzicht van beschikbare subsidies", "Terugverdientijd per maatregel"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle size={18} className="text-brand-200" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
            <h3 className="font-display text-xl font-bold text-gray-900">Vul uw adres in</h3>
            <p className="mt-1 text-sm text-gray-600">We geven direct een eerste indicatie op basis van uw woning.</p>
            <form className="mt-5 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">Postcode</label>
                  <input type="text" placeholder="1234 AB" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">Huisnummer</label>
                  <input type="text" placeholder="12A" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-700">E-mailadres</label>
                <input type="email" placeholder="uw@email.nl" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-brand-600 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-colors">
                Start mijn gratis woningcheck →
              </button>
              <p className="text-center text-xs text-gray-500">Vrijblijvend · Geen verplichtingen · 100% onafhankelijk</p>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-brand-800 border-t border-brand-700 mt-8">
        <div className="cx py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <img src="/logo/Group 39895.svg" alt="NCDE — Nationaal Collectief Duurzame Energie" className="h-20 w-auto object-contain" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100">Samen maken we Nederland duurzaam.</p>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-brand-200 hover:bg-white hover:text-brand-700 transition-all">
                  <LinkedinIcon />
                </a>
                <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-brand-200 hover:bg-white hover:text-brand-700 transition-all">
                  <YoutubeIcon />
                </a>
                <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-brand-200 hover:bg-white hover:text-brand-700 transition-all">
                  <InstagramIcon />
                </a>
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
                  <li><span className="text-sm text-brand-200">Keurmeesterstraat 53<br />1187 ZX Amstelveen</span></li>
                  <li><a href="tel:0852224002" className="text-sm text-brand-200 hover:text-white">085-2224002</a></li>
                  <li><a href="mailto:info@dynet.nl" className="text-sm text-brand-200 hover:text-white">info@dynet.nl</a></li>
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
              <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
              <Link href="/algemene-voorwaarden" className="hover:text-white">Algemene voorwaarden</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
