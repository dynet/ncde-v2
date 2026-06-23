/* Disclaimer - opgebouwd volgens klantmockup dd 22-5-2026 */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import { Home as HomeIcon, Mail, FileWarning, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — NCDE",
  description: "Voorwaarden voor het gebruik van de website van NCDE en de informatie die u daar vindt.",
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
    id: "algemene-informatie",
    title: "Algemene informatie",
    body: (
      <>
        <p>
          NCDE verstrekt via deze website algemene informatie over verduurzaming, energiebesparing, duurzame installaties, woningverbetering en aanverwante onderwerpen.
        </p>
        <p className="mt-3">
          De informatie op deze website is met zorg samengesteld. Toch kan NCDE niet garanderen dat alle informatie altijd volledig, juist, actueel of geschikt is voor iedere persoonlijke situatie.
        </p>
      </>
    ),
  },
  {
    id: "geen-persoonlijk-advies",
    title: "Geen persoonlijk of juridisch advies",
    body: (
      <>
        <p>
          De informatie op deze website is algemeen van aard en vormt geen bindend persoonlijk, technisch, financieel, fiscaal of juridisch advies.
        </p>
        <p className="mt-3">
          Voor beslissingen over verduurzaming, subsidies, financiering, installaties of energiebesparing adviseren wij om altijd persoonlijk advies in te winnen dat is afgestemd op uw situatie.
        </p>
      </>
    ),
  },
  {
    id: "berekeningen-tools",
    title: "Berekeningen, rekentools en indicaties",
    body: (
      <>
        <p>
          NCDE kan op haar website berekeningen, rekentools, besparingsindicaties of voorbeeldscenario&apos;s aanbieden. De uitkomsten zijn gebaseerd op door u ingevoerde gegevens, algemene aannames en beschikbare marktinformatie.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {[
            "Uitkomsten zijn uitsluitend indicatief",
            "Geen rechten aan resultaten ontleenbaar",
            "Geen aansprakelijkheid voor afwijkingen",
          ].map((t) => (
            <div key={t} className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs font-semibold text-amber-900">
              <ChevronRight size={14} className="mt-0.5 shrink-0 text-amber-600" />
              {t}
            </div>
          ))}
        </div>
        <p className="mt-4">
          Aan uitkomsten, schattingen, terugverdientijden, besparingen of adviezen kunnen geen rechten worden ontleend. NCDE aanvaardt geen aansprakelijkheid voor fouten, onvolledigheden of schade die voortvloeit uit het gebruik van rekentools of indicatieve resultaten.
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
          NCDE is niet aansprakelijk voor directe of indirecte schade die ontstaat door het gebruik van deze website, de daarop geplaatste informatie, rekentools, downloads, formulieren of verwijzingen naar externe bronnen.
        </p>
        <p className="mt-3">
          Onder schade wordt onder meer verstaan: financiële schade, gevolgschade, gemiste besparingen, verkeerde investeringsbeslissingen, technische problemen, verlies van gegevens of schade door tijdelijke onbeschikbaarheid van de website.
        </p>
      </>
    ),
  },
  {
    id: "externe-links",
    title: "Externe links",
    body: (
      <>
        <p>
          Deze website kan links bevatten naar websites of diensten van derden. Deze links zijn uitsluitend bedoeld als aanvullende informatie of service voor bezoekers.
        </p>
        <p className="mt-3">
          NCDE heeft geen controle over de inhoud, werking, beveiliging, beschikbaarheid of juistheid van externe websites. NCDE is daarom niet verantwoordelijk of aansprakelijk voor informatie, producten, diensten of schade die voortvloeit uit het gebruik van externe websites.
        </p>
      </>
    ),
  },
  {
    id: "beschikbaarheid",
    title: "Beschikbaarheid van de website",
    body: (
      <p>
        NCDE streeft ernaar de website goed en veilig beschikbaar te houden. Wij kunnen echter niet garanderen dat de website altijd zonder onderbrekingen, fouten, storingen of beveiligingsproblemen beschikbaar is.
      </p>
    ),
  },
  {
    id: "reacties-formulieren",
    title: "Reacties, formulieren en gebruikersinformatie",
    body: (
      <>
        <p>
          Wanneer bezoekers informatie, berichten of gegevens via formulieren aan NCDE verstrekken, blijven zij zelf verantwoordelijk voor de juistheid en volledigheid van die informatie.
        </p>
        <p className="mt-3">
          NCDE behoudt zich het recht voor om onjuiste, ongepaste, misleidende of onrechtmatige berichten of aanvragen niet in behandeling te nemen.
        </p>
      </>
    ),
  },
  {
    id: "intellectueel-eigendom",
    title: "Intellectueel eigendom",
    body: (
      <>
        <p>
          Alle teksten, afbeeldingen, logo&apos;s, ontwerpen, rekentools, documenten, grafische elementen en overige inhoud op deze website zijn eigendom van NCDE of worden gebruikt met toestemming van de rechthebbende.
        </p>
        <p className="mt-3">
          Het is niet toegestaan om inhoud van deze website te kopiëren, verspreiden, wijzigen, verkopen, publiceren of op andere wijze te gebruiken zonder voorafgaande schriftelijke toestemming van NCDE, tenzij dit wettelijk is toegestaan.
        </p>
      </>
    ),
  },
  {
    id: "wijzigingen",
    title: "Wijzigingen",
    body: (
      <p>
        NCDE mag de inhoud van deze website en deze disclaimer op ieder moment wijzigen zonder voorafgaande aankondiging. De meest actuele versie van de disclaimer staat altijd op deze pagina.
      </p>
    ),
  },
  {
    id: "toepasselijk-recht",
    title: "Toepasselijk recht",
    body: (
      <p>
        Op deze disclaimer en het gebruik van de website van NCDE is Nederlands recht van toepassing. Eventuele geschillen worden voorgelegd aan de bevoegde rechter in Nederland, tenzij dwingend recht anders bepaalt.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>Heeft u vragen over deze disclaimer? Neem dan contact op met NCDE.</p>
        <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/60 p-5 text-sm">
          <p className="font-bold text-brand-900">NCDE — Nationaal Collectief Duurzame Energie</p>
          <p className="mt-2 text-gray-700">
            E-mail: <a href="mailto:Info@ncde.nl" className="text-brand-700 hover:underline">Info@ncde.nl</a><br />
            Website: www.ncde.nl
          </p>
        </div>
      </>
    ),
  },
];

export default function Disclaimer() {
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
          <MobileMenu active="/disclaimer" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="cx relative z-10 py-16 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
            <FileWarning size={14} /> Disclaimer
          </span>
          <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
            Voorwaarden voor gebruik van <span className="text-amber-400">onze website</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            Door gebruik te maken van deze website accepteert u de inhoud van deze disclaimer. Lees deze aandachtig door voordat u verdergaat.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-semibold">Laatst bijgewerkt · 22 mei 2026</span>
            <a href="mailto:Info@ncde.nl" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-semibold hover:bg-white/20 transition-colors">
              <Mail size={14} /> Info@ncde.nl
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
                Op deze pagina leest u de disclaimer van NCDE. Door gebruik te maken van deze website accepteert u de inhoud van deze disclaimer. NCDE verstrekt via deze website algemene informatie over verduurzaming, energiebesparing en duurzame oplossingen — met zorg samengesteld, maar zonder garantie van volledigheid of geschiktheid voor iedere persoonlijke situatie.
              </p>
              <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-xs font-semibold text-amber-900">
                Laatste update: 22 mei 2026 · NCDE behoudt zich het recht voor deze disclaimer op ieder moment te wijzigen. De meest actuele versie staat altijd op deze pagina.
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
              <h3 className="font-display text-lg font-black uppercase text-brand-900">Vragen over deze disclaimer?</h3>
              <p className="mt-2 text-sm text-gray-700">
                Ons team staat voor u klaar. Neem gerust contact op.
              </p>
              <a href="mailto:Info@ncde.nl" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-3 text-sm font-bold text-white hover:bg-brand-900 transition-colors">
                <Mail size={16} /> Info@ncde.nl
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
                  <li><a href="tel:0852224003" className="text-sm text-brand-200 hover:text-white">085 222 4003</a></li>
                  <li><a href="mailto:Info@ncde.nl" className="text-sm text-brand-200 hover:text-white">Info@ncde.nl</a></li>
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
