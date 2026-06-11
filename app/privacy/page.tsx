/* Privacyverklaring - opgebouwd volgens klantmockup dd 22-5-2026 */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import { Home as HomeIcon, Mail, Shield, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring — NCDE",
  description: "Hoe NCDE uw persoonsgegevens verwerkt conform de AVG/GDPR. Lees onze privacyverklaring.",
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

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    id: "wie-zijn-wij",
    title: "Wie zijn wij?",
    body: (
      <p>
        NCDE — Nationaal Collectief Duurzame Energie — richt zich op advies, begeleiding en dienstverlening op het gebied van verduurzaming, energiebesparing en duurzame oplossingen voor bewoners, particuliere woningeigenaren en zakelijke relaties.
      </p>
    ),
  },
  {
    id: "verwerkingsverantwoordelijke",
    title: "Verwerkingsverantwoordelijke",
    body: (
      <>
        <p>
          NCDE is verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.
        </p>
        <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/60 p-5 text-sm">
          <p className="font-bold text-brand-900">NCDE — Nationaal Collectief Duurzame Energie</p>
          <p className="mt-2 text-gray-700">
            Keurmeesterstraat 53<br />
            1187 ZX Amstelveen, Nederland<br />
            E-mail: <a href="mailto:privacy@ncde.nl" className="text-brand-700 hover:underline">privacy@ncde.nl</a><br />
            Website: www.ncde.nl<br />
            KvK-nummer: [invullen]
          </p>
        </div>
      </>
    ),
  },
  {
    id: "welke-gegevens",
    title: "Welke persoonsgegevens verwerken wij?",
    body: (
      <>
        <p>NCDE kan de volgende persoonsgegevens verwerken:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-gray-700">
          <li>voor- en achternaam</li>
          <li>adres en woonplaats</li>
          <li>telefoonnummer</li>
          <li>e-mailadres</li>
          <li>gegevens die u invult via contactformulieren</li>
          <li>informatie over uw woning of energieverbruik, voor zover u die zelf verstrekt</li>
          <li>IP-adres</li>
          <li>browser- en apparaatgegevens</li>
          <li>gegevens over uw gebruik van onze website</li>
          <li>communicatiegegevens, zoals e-mails, telefoongesprekken of berichten via formulieren</li>
        </ul>
      </>
    ),
  },
  {
    id: "doeleinden",
    title: "Doeleinden van de verwerking",
    body: (
      <>
        <p>NCDE verwerkt persoonsgegevens voor de volgende doeleinden:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-gray-700">
          <li>het beantwoorden van vragen en contactverzoeken</li>
          <li>het uitvoeren van adviesgesprekken en dienstverlening</li>
          <li>het opstellen van offertes en overeenkomsten</li>
          <li>het leveren van informatie over verduurzaming en energiebesparing</li>
          <li>het verbeteren van onze website en dienstverlening</li>
          <li>het versturen van nieuwsbrieven of informatie, indien daarvoor toestemming is gegeven</li>
          <li>administratieve verwerking en facturatie</li>
          <li>het voldoen aan wettelijke verplichtingen</li>
          <li>het beschermen van onze rechten en belangen</li>
        </ul>
      </>
    ),
  },
  {
    id: "grondslagen",
    title: "Grondslagen volgens de AVG",
    body: (
      <>
        <p>
          Wij verwerken persoonsgegevens alleen wanneer daarvoor een wettelijke grondslag bestaat. Afhankelijk van de situatie verwerken wij gegevens op basis van:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-gray-700">
          <li><strong>Toestemming</strong> — bijvoorbeeld voor nieuwsbrieven of bepaalde cookies</li>
          <li><strong>Uitvoering van een overeenkomst</strong> — bijvoorbeeld bij advies of dienstverlening</li>
          <li><strong>Wettelijke verplichting</strong> — bijvoorbeeld fiscale administratie</li>
          <li><strong>Gerechtvaardigd belang</strong> — bijvoorbeeld verbetering van onze dienstverlening of beveiliging van onze website</li>
        </ul>
      </>
    ),
  },
  {
    id: "contactformulieren",
    title: "Contactformulieren en communicatie",
    body: (
      <p>
        Wanneer u contact met ons opneemt via e-mail, telefoon, websiteformulier of social media, verwerken wij de gegevens die nodig zijn om uw vraag te beantwoorden of uw verzoek af te handelen. Deze gegevens worden niet langer bewaard dan noodzakelijk.
      </p>
    ),
  },
  {
    id: "nieuwsbrieven",
    title: "Nieuwsbrieven en marketing",
    body: (
      <p>
        NCDE kan u informeren over relevante ontwikkelingen, diensten of duurzame oplossingen. Dit doen wij alleen wanneer daarvoor een geldige grondslag bestaat, bijvoorbeeld toestemming of een gerechtvaardigd belang. U kunt zich altijd afmelden via de afmeldlink in de e-mail of door contact op te nemen via <a href="mailto:privacy@ncde.nl" className="text-brand-700 hover:underline">privacy@ncde.nl</a>.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies en websitegebruik",
    body: (
      <>
        <p>
          Onze website kan gebruikmaken van functionele, analytische en eventueel marketingcookies. Functionele cookies zijn nodig voor een goede werking van de website. Voor analytische of marketingcookies vragen wij toestemming wanneer dat wettelijk verplicht is.
        </p>
        <p className="mt-3">
          U kunt cookies zelf verwijderen of blokkeren via de instellingen van uw browser.
        </p>
      </>
    ),
  },
  {
    id: "delen-met-derden",
    title: "Delen van gegevens met derden",
    body: (
      <>
        <p>
          NCDE deelt persoonsgegevens alleen met derden wanneer dit noodzakelijk is voor onze dienstverlening, wettelijke verplichtingen of bedrijfsvoering. Denk aan hostingpartijen, administratieve dienstverleners, IT-leveranciers, boekhoudsystemen of samenwerkingspartners.
        </p>
        <p className="mt-3">
          Wanneer derden persoonsgegevens namens NCDE verwerken, sluiten wij een verwerkersovereenkomst. Derden mogen persoonsgegevens niet voor eigen doeleinden gebruiken, tenzij zij daarvoor zelf een wettelijke grondslag hebben.
        </p>
      </>
    ),
  },
  {
    id: "internationale-doorgifte",
    title: "Internationale doorgifte",
    body: (
      <p>
        NCDE streeft ernaar persoonsgegevens zoveel mogelijk binnen de Europese Economische Ruimte (EER) te verwerken. Indien gegevens buiten de EER worden verwerkt, zorgen wij voor passende waarborgen conform de AVG.
      </p>
    ),
  },
  {
    id: "beveiliging",
    title: "Beveiliging van persoonsgegevens",
    body: (
      <p>
        NCDE neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik, onbevoegde toegang, openbaarmaking en wijziging. Alleen bevoegde personen hebben toegang tot persoonsgegevens voor zover dat noodzakelijk is voor hun werkzaamheden.
      </p>
    ),
  },
  {
    id: "bewaartermijnen",
    title: "Bewaartermijnen",
    body: (
      <p>
        NCDE bewaart persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor de gegevens zijn verzameld, tenzij een wettelijke bewaartermijn geldt. Administratieve gegevens worden bewaard zolang dit fiscaal of wettelijk verplicht is.
      </p>
    ),
  },
  {
    id: "uw-rechten",
    title: "Uw rechten",
    body: (
      <>
        <p>Op grond van de AVG heeft u de volgende rechten:</p>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "Recht op inzage",
            "Recht op rectificatie",
            "Recht op verwijdering",
            "Recht op beperking",
            "Recht op dataportabiliteit",
            "Recht van bezwaar",
            "Toestemming intrekken",
          ].map((r) => (
            <div key={r} className="flex items-center gap-2 rounded-lg border border-brand-100 bg-brand-50/60 px-3 py-2.5 text-sm font-semibold text-brand-900">
              <ChevronRight size={14} className="text-brand-600" />
              {r}
            </div>
          ))}
        </div>
        <p className="mt-4">
          U kunt een verzoek indienen via <a href="mailto:privacy@ncde.nl" className="text-brand-700 hover:underline">privacy@ncde.nl</a>. Wij kunnen vragen om aanvullende informatie om uw identiteit vast te stellen.
        </p>
      </>
    ),
  },
  {
    id: "klachten",
    title: "Klachten",
    body: (
      <>
        <p>
          Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem dan eerst contact op met NCDE via <a href="mailto:privacy@ncde.nl" className="text-brand-700 hover:underline">privacy@ncde.nl</a>. U heeft daarnaast het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.
        </p>
        <p className="mt-3">
          Website Autoriteit Persoonsgegevens: <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">autoriteitpersoonsgegevens.nl</a>
        </p>
      </>
    ),
  },
  {
    id: "links-naar-derden",
    title: "Links naar andere websites",
    body: (
      <p>
        Onze website kan links bevatten naar websites van derden. NCDE is niet verantwoordelijk voor de manier waarop deze derden omgaan met persoonsgegevens. Raadpleeg daarom altijd de privacyverklaring van de betreffende website.
      </p>
    ),
  },
  {
    id: "wijzigingen",
    title: "Wijzigingen",
    body: (
      <p>
        NCDE kan deze privacyverklaring wijzigen. De meest actuele versie wordt altijd op deze pagina gepubliceerd. Wij adviseren u deze privacyverklaring regelmatig te raadplegen.
      </p>
    ),
  },
];

export default function Privacy() {
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
          <MobileMenu active="/privacy" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="cx relative z-10 py-16 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
            <Shield size={14} /> Privacyverklaring
          </span>
          <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
            Bescherming van uw <span className="text-amber-400">persoonsgegevens</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            NCDE verwerkt uw gegevens zorgvuldig, transparant en conform de Algemene Verordening Gegevensbescherming (AVG/GDPR). Hier leest u hoe wij dat doen en welke rechten u heeft.
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
          {/* TOC */}
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

          {/* BODY */}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-card)] md:p-10">
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm text-gray-600">
                NCDE vindt de bescherming van persoonsgegevens belangrijk. Wij verwerken persoonsgegevens zorgvuldig, transparant en in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR). In deze privacyverklaring leggen wij uit welke persoonsgegevens wij verwerken, waarom wij dat doen, hoe lang wij gegevens bewaren en welke rechten u heeft.
              </p>
              <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-xs font-semibold text-amber-900">
                Laatste update: 22 mei 2026 · NCDE adviseert u deze verklaring regelmatig te raadplegen. Wijzigingen worden op deze pagina gepubliceerd.
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
              <h3 className="font-display text-lg font-black uppercase text-brand-900">Vragen over uw privacy?</h3>
              <p className="mt-2 text-sm text-gray-700">
                Ons privacyteam helpt u graag verder. Neem direct contact op.
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
              <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
              <Link href="/algemene-voorwaarden" className="hover:text-white">Algemene voorwaarden</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
