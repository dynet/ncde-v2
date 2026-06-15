/* Algemene voorwaarden - NCDE NL juridisch template */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import { Home as HomeIcon, Mail, Scale } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene voorwaarden — NCDE",
  description: "Algemene voorwaarden voor het gebruik van de website en diensten van NCDE.",
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

type Section = { id: string; title: string; body: React.ReactNode };

const sections: Section[] = [
  {
    id: "definities",
    title: "Definities",
    body: (
      <ul className="space-y-2 text-gray-700">
        <li><strong>NCDE:</strong> Nationaal Collectief Duurzame Energie, gevestigd te Amstelveen.</li>
        <li><strong>Bewoner / gebruiker:</strong> iedere natuurlijke persoon die de website van NCDE bezoekt of gebruikmaakt van diensten van NCDE.</li>
        <li><strong>Partner:</strong> een door NCDE geselecteerde organisatie die diensten of producten levert in het kader van verduurzaming.</li>
        <li><strong>Diensten:</strong> alle online en offline activiteiten van NCDE, waaronder advies, woningcheck, doorverwijzing naar partners en informatieverstrekking.</li>
        <li><strong>Website:</strong> de website van NCDE, bereikbaar via www.ncde.nl.</li>
      </ul>
    ),
  },
  {
    id: "toepasselijkheid",
    title: "Toepasselijkheid",
    body: (
      <>
        <p>
          Deze algemene voorwaarden zijn van toepassing op alle bezoeken aan de website van NCDE, op alle diensten van NCDE en op alle rechtsverhoudingen tussen NCDE en de gebruiker, tenzij schriftelijk anders is overeengekomen.
        </p>
        <p className="mt-3">
          Door gebruik te maken van de website of diensten van NCDE accepteert de gebruiker deze algemene voorwaarden.
        </p>
      </>
    ),
  },
  {
    id: "diensten",
    title: "Diensten van NCDE",
    body: (
      <>
        <p>
          NCDE biedt onafhankelijke informatie, advies, woningchecks en doorverwijzing naar partners op het gebied van verduurzaming, energiebesparing en duurzame oplossingen voor bewoners.
        </p>
        <p className="mt-3">
          NCDE spant zich in om de informatie en diensten zo zorgvuldig, actueel en correct mogelijk aan te bieden, maar geeft hierover geen garantie. NCDE kan diensten op ieder moment wijzigen, beperken of beëindigen.
        </p>
      </>
    ),
  },
  {
    id: "advies",
    title: "Advies en rekentools",
    body: (
      <>
        <p>
          Adviezen, berekeningen, rekentools, besparingsindicaties en scenario&apos;s van NCDE zijn algemeen van aard en uitsluitend indicatief. Aan de uitkomsten kunnen geen rechten worden ontleend.
        </p>
        <p className="mt-3">
          De gebruiker is zelf verantwoordelijk voor beslissingen die op basis van deze informatie worden genomen. Voor bindend advies dient de gebruiker zich te wenden tot een gekwalificeerde adviseur die rekening houdt met de persoonlijke situatie.
        </p>
      </>
    ),
  },
  {
    id: "partners",
    title: "Samenwerking met partners",
    body: (
      <>
        <p>
          NCDE werkt samen met door haar geselecteerde partners. NCDE is niet de uitvoerende partij van werkzaamheden of leveringen die door partners worden verzorgd.
        </p>
        <p className="mt-3">
          Overeenkomsten tot levering van producten of diensten komen tot stand tussen de gebruiker en de betreffende partner. NCDE is geen partij bij die overeenkomsten en is niet aansprakelijk voor de uitvoering, kwaliteit of nakoming daarvan.
        </p>
      </>
    ),
  },
  {
    id: "aansprakelijkheid",
    title: "Aansprakelijkheid",
    body: (
      <>
        <p>
          NCDE is niet aansprakelijk voor directe of indirecte schade die voortvloeit uit het gebruik van de website, de daarop geplaatste informatie, rekentools, downloads, formulieren, doorverwijzingen of werkzaamheden van partners.
        </p>
        <p className="mt-3">
          Onder schade wordt onder meer verstaan: financiële schade, gevolgschade, gemiste besparingen, verkeerde investeringsbeslissingen, technische problemen, verlies van gegevens of schade door tijdelijke onbeschikbaarheid van de website.
        </p>
        <p className="mt-3">
          De totale aansprakelijkheid van NCDE is in alle gevallen beperkt tot maximaal het bedrag dat in het concrete geval door de verzekeraar van NCDE wordt uitgekeerd, dan wel — indien geen uitkering plaatsvindt — tot een redelijk bedrag in lijn met de aard en omvang van de geleverde dienst.
        </p>
      </>
    ),
  },
  {
    id: "intellectueel-eigendom",
    title: "Intellectueel eigendom",
    body: (
      <p>
        Alle teksten, afbeeldingen, logo&apos;s, ontwerpen, rekentools, documenten en overige inhoud op de website zijn eigendom van NCDE of worden gebruikt met toestemming van de rechthebbende. Het is niet toegestaan om inhoud te kopiëren, verspreiden, wijzigen of openbaar te maken zonder voorafgaande schriftelijke toestemming van NCDE.
      </p>
    ),
  },
  {
    id: "gebruik-website",
    title: "Gebruik van de website",
    body: (
      <>
        <p>
          De gebruiker zal de website uitsluitend gebruiken in overeenstemming met deze algemene voorwaarden, de wet en het doel waarvoor de website is bedoeld. Het is niet toegestaan om:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-gray-700">
          <li>de werking of beveiliging van de website te verstoren of te omzeilen;</li>
          <li>onjuiste, misleidende of onrechtmatige informatie te verstrekken;</li>
          <li>geautomatiseerde systemen te gebruiken om gegevens op te halen, behalve waar wettelijk toegestaan;</li>
          <li>de website te gebruiken voor commerciële doeleinden zonder toestemming van NCDE.</li>
        </ul>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy en persoonsgegevens",
    body: (
      <p>
        NCDE verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR). Lees voor meer informatie de <Link href="/privacy" className="text-brand-700 hover:underline">privacyverklaring</Link> en het <Link href="/cookiebeleid" className="text-brand-700 hover:underline">cookiebeleid</Link>.
      </p>
    ),
  },
  {
    id: "wijzigingen",
    title: "Wijzigingen",
    body: (
      <p>
        NCDE kan deze algemene voorwaarden op ieder moment wijzigen. De meest actuele versie wordt altijd op deze pagina gepubliceerd. Door de website te blijven gebruiken na een wijziging accepteert de gebruiker de aangepaste voorwaarden.
      </p>
    ),
  },
  {
    id: "toepasselijk-recht",
    title: "Toepasselijk recht en geschillen",
    body: (
      <>
        <p>
          Op deze algemene voorwaarden en op alle rechtsverhoudingen tussen NCDE en de gebruiker is Nederlands recht van toepassing.
        </p>
        <p className="mt-3">
          Eventuele geschillen worden bij uitsluiting voorgelegd aan de bevoegde rechter in het arrondissement waarbinnen NCDE is gevestigd, tenzij dwingend recht een andere rechter aanwijst.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>Heeft u vragen over deze algemene voorwaarden? Neem dan contact op met NCDE.</p>
        <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/60 p-5 text-sm">
          <p className="font-bold text-brand-900">NCDE — Nationaal Collectief Duurzame Energie</p>
          <p className="mt-2 text-gray-700">
            Keurmeesterstraat 53<br />
            1187 ZX Amstelveen<br />
            E-mail: <a href="mailto:info@ncde.nl" className="text-brand-700 hover:underline">info@ncde.nl</a><br />
            Website: www.ncde.nl
          </p>
        </div>
      </>
    ),
  },
];

export default function AlgemeneVoorwaarden() {
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
          <MobileMenu active="/algemene-voorwaarden" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="cx relative z-10 py-16 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
            <Scale size={14} /> Algemene voorwaarden
          </span>
          <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
            Voorwaarden voor gebruik van <span className="text-amber-400">NCDE-diensten</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            Deze algemene voorwaarden gelden voor alle bezoekers en gebruikers van de website en diensten van NCDE. Lees ze aandachtig door voordat u gebruikmaakt van onze website of diensten.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-semibold">Laatst bijgewerkt · 25 mei 2026</span>
            <a href="mailto:info@ncde.nl" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-semibold hover:bg-white/20 transition-colors">
              <Mail size={14} /> info@ncde.nl
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="cx grid gap-8 lg:grid-cols-[280px_1fr] items-start">
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[var(--shadow-card)]">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-gray-500">Inhoudsopgave</p>
              <ol className="mt-4 space-y-1.5">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="group flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[10px] font-bold text-brand-700 group-hover:bg-brand-600 group-hover:text-white">
                        {i + 1}
                      </span>
                      <span className="font-semibold">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-card)] md:p-10">
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm text-gray-600">
                Op deze pagina vindt u de algemene voorwaarden van NCDE. Door gebruik te maken van de website of diensten van NCDE accepteert u deze voorwaarden. NCDE adviseert u deze voorwaarden regelmatig te raadplegen, omdat zij kunnen wijzigen.
              </p>
              <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-xs font-semibold text-amber-900">
                Laatste update: 25 mei 2026 · NCDE behoudt zich het recht voor deze voorwaarden op ieder moment te wijzigen. De meest actuele versie staat altijd op deze pagina.
              </div>
            </div>

            <div className="mt-8 space-y-10">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="flex items-baseline gap-3 font-display text-xl font-black text-brand-900 md:text-2xl">
                    <span className="text-brand-500">{String(i + 1).padStart(2, "0")}.</span>
                    {s.title}
                  </h2>
                  <div className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 md:p-7">
              <h3 className="font-display text-lg font-black uppercase text-brand-900">Vragen over deze voorwaarden?</h3>
              <p className="mt-2 text-sm text-gray-700">
                Ons team helpt u graag verder. Neem direct contact op.
              </p>
              <a href="mailto:info@ncde.nl" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-3 text-sm font-bold text-white hover:bg-brand-900 transition-colors">
                <Mail size={16} /> info@ncde.nl
              </a>
            </div>
          </article>
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
