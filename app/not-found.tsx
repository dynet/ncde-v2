/* Custom 404 page */

import Link from "next/link";
import MobileMenu from "../components/MobileMenu";
import { Home as HomeIcon, ArrowRight, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina niet gevonden — NCDE",
  description: "De pagina die u zoekt bestaat niet of is verplaatst. Bekijk onze populaire paginas of ga terug naar de homepage.",
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

export default function NotFound() {
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
          <MobileMenu active="/" />
        </div>
      </header>

      {/* ===== 404 HERO ===== */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: "#015C39" }}>
        <div className="cx relative z-10 py-20 md:py-28 text-center">
          <p className="font-display text-7xl md:text-9xl font-black text-amber-400">404</p>
          <h1 className="mt-6 font-display text-3xl md:text-5xl font-black uppercase leading-[1.05]">
            Pagina niet gevonden
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            De pagina die u zoekt bestaat niet of is verplaatst. Geen probleem — hieronder vindt u de meest bezochte paginas, of ga direct terug naar de homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-all">
              <HomeIcon size={16} /> Terug naar home
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-colors">
              Contact opnemen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== POPULAIRE PAGINA'S ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Populair</p>
          <h2 className="mt-3 font-display text-2xl font-black uppercase leading-[1.1] text-brand-800 md:text-3xl">
            Misschien zoekt u dit?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Over ons", d: "Wie we zijn en waar we voor staan", href: "/over-ons" },
              { t: "Subsidies & Financiering", d: "Regelingen, ISDE, gemeente en SVVE", href: "/subsidies-financiering" },
              { t: "Partners", d: "Onze gecertificeerde uitvoerders", href: "/partners" },
              { t: "Isolatie", d: "Welke isolatie levert het meeste op?", href: "/isolatie" },
              { t: "Warmtepomp", d: "Hybride of volledig elektrisch", href: "/warmtepomp" },
              { t: "Zonnepanelen", d: "Wek uw eigen stroom op", href: "/zonnepanelen" },
              { t: "Thuisbatterij", d: "Sla zonnestroom op", href: "/thuisbatterij" },
              { t: "Laadpaal", d: "Slim en voordelig thuis laden", href: "/laadpaal" },
              { t: "Contact", d: "Vraag vrijblijvend advies aan", href: "/contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group flex items-start justify-between rounded-2xl border border-gray-200 bg-white p-5 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card)] transition-all">
                <div>
                  <p className="font-display text-base font-bold text-brand-800">{l.t}</p>
                  <p className="mt-1 text-sm text-gray-700">{l.d}</p>
                </div>
                <ArrowRight size={18} className="mt-1 shrink-0 text-brand-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
              <Search size={20} />
            </div>
            <p className="mt-4 font-display text-lg font-bold text-brand-900">Nog steeds niet gevonden?</p>
            <p className="mt-2 text-sm text-gray-700">
              Mail ons en wij helpen u verder met de juiste informatie.
            </p>
            <a href="mailto:info@ncde.nl" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-900 transition-colors">
              info@ncde.nl
            </a>
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
                  <li><span className="text-sm text-brand-200">Keurmeesterstraat 53<br />1187 ZX Amstelveen</span></li>
                  <li><a href="tel:0852224003" className="text-sm text-brand-200 hover:text-white">085 222 4003</a></li>
                  <li><a href="mailto:info@ncde.nl" className="text-sm text-brand-200 hover:text-white">info@ncde.nl</a></li>
                  <li><Link href="/contact" className="text-sm text-brand-200 hover:text-white">Contactformulier</Link></li>
                  <li><Link href="/cvd-melding" className="text-sm text-brand-200 hover:text-white">CVD-melding</Link></li>
                </ul>
              </div>
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
              <Link href="/algemene-voorwaarden" className="hover:text-white">Algemene voorwaarden</Link>
              <Link href="/cvd-melding" className="hover:text-white">CVD-melding</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
