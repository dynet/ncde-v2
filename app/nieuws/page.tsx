/* Nieuws pagina - vanuit Claudecode Nieuws final dd 19-5-2026.docx */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  ArrowRight,
  Home as HomeIcon,
  Calendar,
  Bell,
  FileText,
  Tag,
  Users,
  FolderOpen,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nieuws — NCDE",
  description: "Actuele ontwikkelingen, regelgeving en tips over woningverduurzaming, subsidies en duurzame energie.",
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

const articles = [
  { cat: "Energielabel", date: "19 mei 2026", title: "Woningen met label E, F en G vragen om actie", desc: "Een slecht energielabel betekent vaak hogere energiekosten, minder wooncomfort en mogelijk lagere woningwaarde.", img: "/nieuws/energielabel.png" },
  { cat: "Saldering", date: "18 mei 2026", title: "Salderingsregeling verandert: wat betekent dit voor zonnepanelen?", desc: "Bewoners met zonnepanelen moeten beter kijken naar eigen verbruik, opslag en slimme sturing van energie.", img: "/nieuws/saldering-verandert.png" },
  { cat: "Warmtenet", date: "17 mei 2026", title: "Warmtenet als alternatief voor aardgas in wijken", desc: "Voor sommige buurten kan aansluiting op een warmtenet onderdeel zijn van de route naar aardgasvrij wonen.", img: "/nieuws/warmtenet.png" },
  { cat: "Subsidies", date: "16 mei 2026", title: "Subsidies en leningen maken verduurzaming betaalbaarder", desc: "Gemeenten, fondsen en landelijke regelingen kunnen helpen om isolatie, installaties en energiemaatregelen te financieren.", img: "/subsidies-financiering/gemeentelijk.png" },
  { cat: "Noodpakket", date: "15 mei 2026", title: "Noodpakket thuis: voorbereid zijn op stroomuitval of storing", desc: "Een goed noodpakket helpt huishoudens om beter voorbereid te zijn op tijdelijke uitval van stroom, warmte of communicatie.", img: "/nieuws/noodpakket.png" },
  { cat: "Saldering", date: "14 mei 2026", title: "Thuisbatterij wordt interessanter bij slim energiegebruik", desc: "Opslag van eigen stroom kan bewoners helpen om meer zonne-energie zelf te gebruiken.", img: "/nieuws/thuisbatterij.png" },
];

const categories = ["Alles", "Energielabel", "Saldering", "Warmtenet", "Subsidies", "Noodpakket"];

const heroPills = [
  { img: "/nieuws/hero-actueel.png", t: "Actueel Nieuws", d: "Uit de sector en van NCDE" },
  { img: "/nieuws/inspirerende-verhalen.png", t: "Inspirerende Verhalen", d: "Projecten en ervaringen" },
  { img: "/nieuws/tips.jpg", t: "Praktische Tips", d: "Slimmer en duurzamer thuis" },
];

export default function Nieuws() {
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
            <Link href="/nieuws" className="relative text-sm font-semibold text-brand-600">
              Nieuws
              <span className="absolute -bottom-[29px] left-0 right-0 h-[3px] rounded-full bg-brand-600"></span>
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Contact</Link>
          </nav>
          <Link href="/#woningcheck" className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
            <HomeIcon size={17} />
            Start woningcheck
          </Link>
          <MobileMenu active="/nieuws" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate min-h-[420px] flex items-center overflow-hidden bg-gradient-to-br from-brand-700 to-brand-800">
        <div className="cx relative z-10 py-16 md:py-20 w-full">
          <div className="max-w-[820px] text-white">
            <h1 className="font-display text-3xl font-black uppercase leading-[1.1] md:text-4xl lg:text-[2.75rem]">
              Nieuws
            </h1>
            <p className="mt-3 text-base font-bold text-brand-200">Actueel. Inspirerend. Duurzaam.</p>
            <p className="mt-3 text-base leading-relaxed text-brand-100 md:text-lg max-w-2xl">
              Blijf op de hoogte van het laatste nieuws, ontwikkelingen, projecten en tips over duurzaam wonen en de energietransitie in Nederland.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
              {heroPills.map(({ img, t, d }) => (
                <div key={t} className="rounded-xl bg-white border border-brand-100 overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={img} alt={t} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-3">
                    <p className="font-display text-sm font-bold text-gray-900">{t}</p>
                    <p className="text-xs text-gray-700">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWS SECTION ===== */}
      <section className="py-16 md:py-20">
        <div className="cx">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Laatste berichten</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-brand-800 md:text-4xl">
                Nieuws voor bewoners<br />en pandeigenaren
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700 max-w-2xl">
                Praktische uitleg, deadlines, kansen en aandachtspunten rond verduurzaming.
              </p>
            </div>
          </div>

          {/* Filter pills (visueel, geen JS-filter — placeholder) */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  i === 0
                    ? "bg-brand-600 text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-brand-600 hover:text-brand-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cards list */}
          <div className="flex flex-col gap-4">
            {articles.map((a) => (
              <article key={a.title} className="group rounded-2xl bg-white border border-gray-200 hover:border-brand-200 hover:shadow-[var(--shadow-card)] transition-all p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{a.cat}</span>
                  <p className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Calendar size={12} /> {a.date}
                  </p>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-gray-900 leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{a.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700 group-hover:gap-2 transition-all">
                  Lees artikel <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOSSIERS ===== */}
      <section className="bg-brand-50 py-16 md:py-20">
        <div className="cx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
            {/* Links: foto */}
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200">
              <img src="/nieuws/warmteverlies.png" alt="Warmteverlies woning" className="w-full h-full object-cover" />
            </div>

            {/* Rechts: tekst + 3 pictogrammen */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 border-2 border-brand-200 p-7">
                <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.14em] text-brand-700">
                  <FolderOpen size={14} /> Dossiers
                </p>
                <h2 className="mt-3 font-display text-2xl font-extrabold uppercase text-brand-800 md:text-3xl leading-tight">
                  Belangrijke thema&apos;s<br />op één plek
                </h2>
                <div className="mt-4 mb-5 h-1.5 w-12 rounded bg-brand-600"></div>
                <p className="text-base leading-relaxed text-gray-800">
                  NCDE bundelt nieuws in duidelijke dossiers, zodat bewoners snel begrijpen wat voor hen belangrijk is.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-gray-200 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { Icon: FileText, t: "Deadlines", d: "Belangrijke data." },
                    { Icon: Tag, t: "Regelingen", d: "Subsidies en leningen." },
                    { Icon: Users, t: "Bewoners", d: "Uitleg per situatie." },
                  ].map(({ Icon, t, d }) => (
                    <div key={t} className="flex flex-col items-center text-center bg-white border border-brand-100 rounded-xl p-4">
                      <Icon size={28} className="text-brand-600 mb-2" />
                      <h4 className="font-display text-sm font-bold text-gray-900">{t}</h4>
                      <p className="mt-1 text-xs text-gray-700">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="cx py-16 md:py-20">
        <div className="rounded-2xl bg-brand-700 p-8 md:p-10 text-white shadow-[var(--shadow-card)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-white/15 backdrop-blur shrink-0">
                <Bell size={28} className="text-brand-200" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-extrabold uppercase md:text-3xl">Blijf op de hoogte van duurzaam nieuws</h2>
                <p className="mt-2 text-base text-brand-100">Ontvang updates over regelingen, deadlines en kansen voor verduurzaming.</p>
              </div>
            </div>
            <form className="flex flex-col sm:flex-row gap-2 shrink-0">
              <input type="email" required placeholder="E-mailadres" className="rounded-lg bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white min-w-[220px]" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand-700 hover:bg-brand-50 transition-all whitespace-nowrap">
                Meld mij aan <ArrowRight size={16} />
              </button>
            </form>
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
