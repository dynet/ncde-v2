/* CVD-melding (Coordinated Vulnerability Disclosure) - klantmockup dd 22-5-2026 */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  Home as HomeIcon,
  Mail,
  ShieldAlert,
  ChevronRight,
  Check,
  X,
  Clock,
  CheckCircle2,
  MessageCircle,
  Lock,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CVD-melding — NCDE",
  description: "Heeft u een kwetsbaarheid in onze systemen ontdekt? Meld dit veilig en vertrouwelijk via ons Coordinated Vulnerability Disclosure beleid.",
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

const tocItems = [
  "Kwetsbaarheid melden",
  "Wat vragen wij van u?",
  "Wat mag u niet doen?",
  "Onze reactie",
  "Geen juridische stappen",
  "Vertrouwelijkheid",
  "Publicatie & erkenning",
  "Beloning",
  "Privacy",
  "Contact",
];

const sections: Section[] = [
  {
    id: "kwetsbaarheid-melden",
    title: "Kwetsbaarheid melden",
    body: (
      <>
        <p>
          Heeft u een kwetsbaarheid gevonden in een digitaal systeem, website, applicatie of online dienst van NCDE? Meld dit dan zo snel mogelijk via <a href="mailto:security@ncde.nl" className="text-brand-700 hover:underline">security@ncde.nl</a>.
        </p>
        <p className="mt-3">
          Geef voldoende informatie zodat wij het probleem kunnen reproduceren en onderzoeken. Wij hebben doorgaans de volgende gegevens nodig:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-gray-700">
          <li>de URL of het IP-adres van het getroffen systeem</li>
          <li>een duidelijke omschrijving van de kwetsbaarheid</li>
          <li>de stappen waarmee het probleem kan worden gereproduceerd</li>
          <li>eventuele screenshots of technische details</li>
          <li>uw contactgegevens, tenzij u anoniem of onder pseudoniem wilt melden</li>
        </ul>
      </>
    ),
  },
  {
    id: "wat-vragen-wij",
    title: "Wat vragen wij van u — en wat mag niet?",
    body: (
      <>
        <p>
          Wij vragen u om integer, zorgvuldig en verantwoordelijk te handelen. Onderstaand overzicht laat zien wat wij verwachten en wat buiten dit CVD-beleid valt.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
            <h3 className="flex items-center gap-2 font-display text-sm font-black uppercase text-green-900">
              <Check size={16} className="rounded-full bg-green-600 p-0.5 text-white" /> Wat vragen wij van u
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-green-900">
              {[
                "Niet meer gegevens bekijken dan strikt noodzakelijk",
                "Geen persoonsgegevens wijzigen, verwijderen of openbaar maken",
                "Geen schade aan systemen of dienstverlening veroorzaken",
                "Kwetsbaarheid niet delen voordat NCDE deze heeft opgelost",
                "Vertrouwelijke informatie direct verwijderen na oplossing",
                "Geen social engineering, phishing of fysieke aanvallen gebruiken",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Check size={14} className="mt-0.5 shrink-0 text-green-700" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
            <h3 className="flex items-center gap-2 font-display text-sm font-black uppercase text-red-900">
              <X size={16} className="rounded-full bg-red-600 p-0.5 text-white" /> Wat mag u niet doen
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-red-900">
              {[
                "Malware plaatsen op systemen van NCDE",
                "Een kwetsbaarheid misbruiken voor eigen voordeel",
                "Dienstverlening bewust verstoren of DDoS uitvoeren",
                "Brute-force-aanvallen uitvoeren",
                "Gegevens wijzigen of verwijderen",
                "Kwetsbaarheden openbaar maken zonder toestemming van NCDE",
                "Klanten of medewerkers benaderen zonder toestemming",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <X size={14} className="mt-0.5 shrink-0 text-red-700" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "onze-reactie",
    title: "Onze reactie",
    body: (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[
          { Icon: CheckCircle2, t: "Ontvangstbevestiging", d: "NCDE bevestigt de ontvangst van uw melding zo snel mogelijk na binnenkomst." },
          { Icon: Clock, t: "Eerste beoordeling binnen één week", d: "Wij reageren inhoudelijk met een eerste beoordeling en, waar mogelijk, een indicatie van de vervolgstappen." },
          { Icon: MessageCircle, t: "Doorlopend contact", d: "Tijdens het onderzoek kunnen wij contact met u opnemen voor aanvullende informatie. Wij houden u, waar passend, op de hoogte van de voortgang." },
          { Icon: Lock, t: "Oplossing en afsluiting", d: "Na oplossing van de kwetsbaarheid informeren wij u. Publicatie, indien gewenst, vindt bij voorkeur in overleg plaats." },
        ].map(({ Icon, t, d }) => (
          <div key={t} className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 border border-brand-100">
                <Icon size={18} />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-brand-900">{t}</p>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">{d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "geen-juridische-stappen",
    title: "Geen juridische stappen bij zorgvuldig handelen",
    body: (
      <>
        <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4">
          <p className="text-sm font-bold text-green-900">
            Melders die handelen conform dit beleid en te goeder trouw melden, worden door NCDE niet juridisch vervolgd.
          </p>
        </div>
        <p className="mt-4">
          Dit geldt niet wanneer u de kwetsbaarheid misbruikt, schade veroorzaakt, gegevens openbaar maakt, onnodig gegevens inziet of handelingen verricht die buiten dit beleid vallen.
        </p>
      </>
    ),
  },
  {
    id: "vertrouwelijkheid",
    title: "Vertrouwelijkheid",
    body: (
      <>
        <p>
          NCDE behandelt uw melding vertrouwelijk. Uw persoonsgegevens worden niet zonder uw toestemming gedeeld met derden, tenzij dit noodzakelijk is op grond van een wettelijke verplichting of voor het oplossen van de kwetsbaarheid.
        </p>
        <p className="mt-3">U mag ook melden onder een pseudoniem.</p>
      </>
    ),
  },
  {
    id: "publicatie",
    title: "Publicatie en erkenning",
    body: (
      <>
        <p>
          Wij vragen u om kwetsbaarheden pas openbaar te maken nadat NCDE het probleem heeft onderzocht en opgelost. Eventuele publicatie gebeurt bij voorkeur in overleg met NCDE.
        </p>
        <p className="mt-3">
          Indien u dat wenst, kan NCDE uw naam of pseudoniem vermelden als ontdekker van de kwetsbaarheid, tenzij wettelijke of veiligheidsbelangen zich daartegen verzetten.
        </p>
      </>
    ),
  },
  {
    id: "beloning",
    title: "Beloning",
    body: (
      <p>
        NCDE biedt geen standaard financiële beloning voor CVD-meldingen, tenzij vooraf schriftelijk anders is overeengekomen. Wel waarderen wij verantwoordelijke meldingen en zorgvuldige samenwerking oprecht.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <>
        <p>
          Persoonsgegevens die u verstrekt bij een CVD-melding worden uitsluitend gebruikt voor het behandelen van de melding en de beveiliging van onze systemen.
        </p>
        <Link href="/privacy" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:text-brand-900">
          Bekijk de privacyverklaring van NCDE <ChevronRight size={14} />
        </Link>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>
          Voor CVD-meldingen gebruikt u uitsluitend het onderstaande e-mailadres. Gebruik geen andere kanalen voor het melden van kwetsbaarheden.
        </p>
        <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/60 p-5 text-sm">
          <p className="font-bold text-brand-900">NCDE Security</p>
          <p className="mt-2 text-gray-700">
            E-mail: <a href="mailto:security@ncde.nl" className="text-brand-700 hover:underline">security@ncde.nl</a><br />
            Website: www.ncde.nl
          </p>
        </div>
      </>
    ),
  },
];

export default function CvdMelding() {
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
          <MobileMenu active="/cvd-melding" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="cx relative z-10 py-16 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert size={14} /> CVD-melding
          </span>
          <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
            Kwetsbaarheid <span className="text-amber-400">verantwoord melden</span>
          </h1>
          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-amber-400/90">
            Coordinated Vulnerability Disclosure · Responsible Disclosure
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            NCDE stelt de veiligheid van haar systemen en de bescherming van persoonsgegevens voorop. Heeft u een kwetsbaarheid ontdekt? Wij werken graag met u samen om dit vertrouwelijk en zorgvuldig op te lossen.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="mailto:security@ncde.nl" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-brand-900 hover:bg-amber-300 transition-colors">
              <Mail size={16} /> Melding sturen — security@ncde.nl
            </a>
            <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80">Laatst bijgewerkt · 22 mei 2026</span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="cx grid gap-8 lg:grid-cols-[280px_1fr] items-start">
          <aside className="lg:sticky lg:top-28 space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[var(--shadow-card)]">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-gray-500">Inhoudsopgave</p>
              <ol className="mt-4 space-y-1.5">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="group flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[10px] font-bold text-brand-700 group-hover:bg-brand-600 group-hover:text-white">
                        {i + 1}
                      </span>
                      <span className="font-semibold">{tocItems[i] ?? s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-red-700">Security meldingen</p>
              <a href="mailto:security@ncde.nl" className="mt-2 block text-sm font-bold text-red-900 hover:underline">security@ncde.nl</a>
            </div>
          </aside>

          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-card)] md:p-10">
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm text-gray-600">
                NCDE vindt de veiligheid van haar systemen, website en persoonsgegevens zeer belangrijk. Ondanks onze zorgvuldige beveiliging kan het voorkomen dat er een kwetsbaarheid wordt ontdekt. Wij werken graag samen met melders om kwetsbaarheden zorgvuldig, vertrouwelijk en zo snel mogelijk op te lossen.
              </p>
              <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-xs font-semibold text-amber-900">
                Laatste update: 22 mei 2026 · NCDE behoudt zich het recht voor dit CVD-beleid op ieder moment te wijzigen. De meest actuele versie staat altijd op deze pagina.
              </div>

              <div className="mt-6 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-5">
                <h3 className="font-display text-base font-black uppercase text-brand-900">Kwetsbaarheid gevonden?</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Stuur uw melding direct naar ons security-team. Wij bevestigen ontvangst zo snel mogelijk en reageren inhoudelijk binnen één week.
                </p>
                <a href="mailto:security@ncde.nl" className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-900 transition-colors">
                  <Mail size={16} /> security@ncde.nl
                </a>
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
              <h3 className="font-display text-lg font-black uppercase text-brand-900">Kwetsbaarheid ontdekt?</h3>
              <p className="mt-2 text-sm text-gray-700">
                Stuur uw melding direct naar ons security-team. Wij reageren snel en vertrouwelijk.
              </p>
              <a href="mailto:security@ncde.nl" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-3 text-sm font-bold text-white hover:bg-brand-900 transition-colors">
                <Mail size={16} /> security@ncde.nl
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
              <Link href="/cvd-melding" className="hover:text-white">CVD-melding</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
