/* Cookiebeleid - opgebouwd volgens klantmockup dd 22-5-2026 */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  Home as HomeIcon,
  Mail,
  Cookie,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Settings,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookiebeleid — NCDE",
  description: "Welke cookies NCDE gebruikt, waarom en hoe u uw cookievoorkeuren beheert.",
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

type CookieType = {
  name: string;
  desc: string;
  consent: "Niet nodig" | "Afhankelijk" | "Vereist";
};

const cookieTypes: CookieType[] = [
  {
    name: "Functionele cookies",
    desc: "Noodzakelijk voor de technische werking van de website. Onthouden cookievoorkeuren en formulierinstellingen.",
    consent: "Niet nodig",
  },
  {
    name: "Analytische cookies",
    desc: "Helpen NCDE inzicht te krijgen in het gebruik van de website en mogelijke verbeterpunten.",
    consent: "Afhankelijk",
  },
  {
    name: "Marketingcookies",
    desc: "Tonen bezoekers relevante advertenties, campagnes of informatie over duurzame oplossingen.",
    consent: "Vereist",
  },
  {
    name: "Social media cookies",
    desc: "Worden geplaatst wanneer sociale media, video's of externe platforms op de website worden weergegeven.",
    consent: "Vereist",
  },
];

const consentBadge = (c: CookieType["consent"]) => {
  if (c === "Niet nodig") return <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-bold text-green-700 border border-green-200"><CheckCircle2 size={12} /> Niet nodig</span>;
  if (c === "Afhankelijk") return <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700 border border-amber-200">~ Afhankelijk</span>;
  return <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-700 border border-red-200"><AlertCircle size={12} /> Vereist</span>;
};

const sections: Section[] = [
  {
    id: "wat-zijn-cookies",
    title: "Wat zijn cookies?",
    body: (
      <>
        <p>
          Cookies zijn kleine tekstbestanden die bij het bezoeken van een website op uw computer, tablet of smartphone worden geplaatst. In deze bestanden wordt informatie opgeslagen die bij een volgend bezoek opnieuw kan worden herkend.
        </p>
        <p className="mt-3">
          Naast cookies kunnen ook vergelijkbare technieken worden gebruikt, zoals pixels, tags, scripts, local storage en trackingtechnologieën.
        </p>
      </>
    ),
  },
  {
    id: "waarom-cookies",
    title: "Waarom gebruikt NCDE cookies?",
    body: (
      <>
        <p>NCDE gebruikt cookies voor de volgende doelen:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-gray-700">
          <li>het goed laten functioneren van de website</li>
          <li>het onthouden van voorkeuren, zoals cookie-instellingen</li>
          <li>het meten en analyseren van websitegebruik</li>
          <li>het verbeteren van de inhoud, werking en gebruiksvriendelijkheid van de website</li>
          <li>het tonen van relevante informatie over onze diensten</li>
          <li>het ondersteunen van marketingcampagnes, indien u daarvoor toestemming geeft</li>
        </ul>
      </>
    ),
  },
  {
    id: "soorten-cookies",
    title: "Welke soorten cookies gebruikt NCDE?",
    body: (
      <>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {cookieTypes.map((c) => (
            <div key={c.name} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="font-display text-sm font-bold text-brand-900">{c.name}</p>
                {consentBadge(c.consent)}
              </div>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-50 text-xs uppercase tracking-wider text-brand-900">
              <tr>
                <th className="px-4 py-3 font-bold">Soort cookie</th>
                <th className="px-4 py-3 font-bold">Doel</th>
                <th className="px-4 py-3 font-bold">Toestemming</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-3 font-semibold">Functioneel</td><td className="px-4 py-3 text-gray-600">Technische werking, cookievoorkeuren, formulieren</td><td className="px-4 py-3 text-green-700 font-semibold">Niet nodig</td></tr>
              <tr><td className="px-4 py-3 font-semibold">Analytisch</td><td className="px-4 py-3 text-gray-600">Websitestatistieken, gebruiksanalyse, verbeterpunten</td><td className="px-4 py-3 text-amber-700 font-semibold">Afhankelijk</td></tr>
              <tr><td className="px-4 py-3 font-semibold">Marketing</td><td className="px-4 py-3 text-gray-600">Gerichte advertenties en campagne-informatie</td><td className="px-4 py-3 text-red-700 font-semibold">Vereist</td></tr>
              <tr><td className="px-4 py-3 font-semibold">Social media</td><td className="px-4 py-3 text-gray-600">Embedded content van externe platforms</td><td className="px-4 py-3 text-red-700 font-semibold">Vereist</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "functionele-cookies",
    title: "Functionele cookies",
    body: (
      <p>
        Functionele cookies zijn noodzakelijk voor het gebruik van de website. Zonder deze cookies kunnen bepaalde onderdelen van de website niet goed functioneren. Voor deze cookies is geen toestemming vereist.
      </p>
    ),
  },
  {
    id: "analytische-cookies",
    title: "Analytische cookies",
    body: (
      <p>
        NCDE kan analytische cookies gebruiken om statistieken bij te houden over het gebruik van de website. Deze gegevens helpen ons om de website te verbeteren. Waar mogelijk worden analytische cookies privacyvriendelijk ingesteld, bijvoorbeeld door IP-adressen te anonimiseren en gegevens niet met derden te delen voor commerciële doeleinden.
      </p>
    ),
  },
  {
    id: "marketing-tracking",
    title: "Marketing- en trackingcookies",
    body: (
      <>
        <p>
          Marketingcookies worden alleen geplaatst wanneer u daarvoor toestemming geeft. Deze cookies kunnen worden gebruikt om advertenties of informatie beter af te stemmen op uw interesses.
        </p>
        <p className="mt-3">
          U kunt uw toestemming op ieder moment intrekken of wijzigen via de cookie-instellingen op onze website.
        </p>
      </>
    ),
  },
  {
    id: "cookies-derden",
    title: "Cookies van derde partijen",
    body: (
      <>
        <p>
          Op de website van NCDE kunnen cookies van derde partijen worden geplaatst, bijvoorbeeld door analysetools, advertentieplatforms, kaartdiensten, video&apos;s of social media-integraties. NCDE heeft niet altijd volledige controle over cookies die door derden worden geplaatst.
        </p>
        <p className="mt-3">
          Raadpleeg daarom ook de privacy- en cookieverklaringen van deze derde partijen.
        </p>
      </>
    ),
  },
  {
    id: "instellingen-wijzigen",
    title: "Cookie-instellingen wijzigen",
    body: (
      <>
        <p>
          Bij uw eerste bezoek aan de website kunt u via de cookiebanner aangeven welke cookies u accepteert. U kunt uw voorkeuren later altijd wijzigen.
        </p>
        <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-3 text-sm font-bold text-white hover:bg-brand-900 transition-colors">
          <Settings size={16} /> Cookie-instellingen wijzigen
        </button>
      </>
    ),
  },
  {
    id: "verwijderen-blokkeren",
    title: "Cookies verwijderen of blokkeren",
    body: (
      <p>
        U kunt cookies ook verwijderen of blokkeren via de instellingen van uw internetbrowser. Houd er rekening mee dat sommige onderdelen van de website mogelijk minder goed werken wanneer u cookies blokkeert.
      </p>
    ),
  },
  {
    id: "bewaartermijnen",
    title: "Bewaartermijnen van cookies",
    body: (
      <p>
        Cookies worden niet langer bewaard dan noodzakelijk. De bewaartermijn verschilt per cookie. Sommige cookies worden verwijderd zodra u de browser sluit (sessiecookies), terwijl andere cookies voor een langere periode worden bewaard om voorkeuren of statistieken te onthouden (persistente cookies).
      </p>
    ),
  },
  {
    id: "persoonsgegevens",
    title: "Persoonsgegevens en cookies",
    body: (
      <>
        <p>
          Wanneer met cookies persoonsgegevens worden verwerkt, gebeurt dit conform de Algemene Verordening Gegevensbescherming (AVG/GDPR). Meer informatie hierover vindt u in onze privacyverklaring.
        </p>
        <Link href="/privacy" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:text-brand-900">
          Bekijk de privacyverklaring van NCDE <ChevronRight size={14} />
        </Link>
      </>
    ),
  },
  {
    id: "wijzigingen",
    title: "Wijzigingen in dit cookiebeleid",
    body: (
      <p>
        NCDE kan dit cookiebeleid wijzigen wanneer onze website, dienstverlening of wetgeving verandert. De meest actuele versie staat altijd op deze pagina.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>Heeft u vragen over dit cookiebeleid of over de verwerking van persoonsgegevens door NCDE? Neem dan contact met ons op.</p>
        <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/60 p-5 text-sm">
          <p className="font-bold text-brand-900">NCDE — Nationaal Collectief Duurzame Energie</p>
          <p className="mt-2 text-gray-700">
            E-mail: <a href="mailto:privacy@ncde.nl" className="text-brand-700 hover:underline">privacy@ncde.nl</a><br />
            Website: www.ncde.nl
          </p>
        </div>
      </>
    ),
  },
];

export default function Cookiebeleid() {
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
          <MobileMenu active="/cookiebeleid" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="cx relative z-10 py-16 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
            <Cookie size={14} /> Cookiebeleid
          </span>
          <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
            Cookies, tracking en <span className="text-amber-400">uw privacy</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            NCDE gebruikt cookies om de website goed te laten werken, gebruik te analyseren en u relevante informatie te tonen. Hier leest u welke cookies wij gebruiken en hoe u uw voorkeuren beheert.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-semibold">Laatst bijgewerkt · 22 mei 2026</span>
            <a href="mailto:privacy@ncde.nl" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-semibold hover:bg-white/20 transition-colors">
              <Mail size={14} /> privacy@ncde.nl
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
                NCDE maakt gebruik van cookies en vergelijkbare technieken om de website goed te laten functioneren, het gebruik van de website te analyseren, onze dienstverlening te verbeteren en bezoekers relevante informatie te tonen over verduurzaming, energiebesparing en duurzame oplossingen.
              </p>
              <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-xs font-semibold text-amber-900">
                Laatste update: 22 mei 2026 · NCDE kan dit cookiebeleid wijzigen wanneer de website, dienstverlening of wetgeving verandert. De meest actuele versie staat altijd op deze pagina.
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
              <h3 className="font-display text-lg font-black uppercase text-brand-900">Vragen over cookies of privacy?</h3>
              <p className="mt-2 text-sm text-gray-700">
                Ons team helpt u graag verder. Neem direct contact op.
              </p>
              <a href="mailto:privacy@ncde.nl" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-3 text-sm font-bold text-white hover:bg-brand-900 transition-colors">
                <Mail size={16} /> privacy@ncde.nl
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
              <Link href="/algemene-voorwaarden" className="hover:text-white">Algemene voorwaarden</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
