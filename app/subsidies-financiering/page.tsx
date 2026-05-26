/* Subsidies & Financiering pagina - 1-op-1 vanaf Claude Code Subsidies & Finaciering.docx */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import LeningenAccordion from "../../components/LeningenAccordion";
import {
  ArrowRight,
  Home as HomeIcon,
  Check,
  CheckCircle,
  Clock,
  Wallet,
  Shield,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subsidies & Financiering — NCDE",
  description: "Overzicht van landelijke en gemeentelijke subsidies voor verduurzaming: ISDE, SEEH, gemeentelijke regelingen en financieringsopties.",
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

type Subsidy = {
  doelgroep: string;
  title: string;
  text: string;
  voorwaarden: string[];
  img: string;
  alt: string;
  href: string;
};

const subsidies: Subsidy[] = [
  {
    doelgroep: "Woningeigenaren",
    title: "ISDE isolatie",
    text: "Voor dak-, vloer-, bodem-, gevel-, spouwmuur- en glasisolatie. Nieuw vanaf 2026: ook subsidie voor ventilatie (€ 400), mits gecombineerd met isolatie. Voldoe aan minimale m² en Rd-waarden.",
    voorwaarden: ["Bestaande woning", "Uitvoering door bedrijf", "Meldcode en factuur nodig"],
    img: "/subsidies-financiering/isde-isolatie.png",
    alt: "Isolatiewerkzaamheden aan woning",
    href: "/isde-isolatie",
  },
  {
    doelgroep: "Woningeigenaren",
    title: "ISDE warmtepomp",
    text: "Subsidie voor een nieuwe (hybride) warmtepomp voor ruimteverwarming of tapwaterverwarming in een bestaande woning. Let op: split lucht-waterwarmtepompen met GWP > 750 en vulgewicht < 3 kg komen vanaf 2026 niet meer in aanmerking.",
    voorwaarden: ["Eerst installeren", "Binnen 24 maanden aanvragen", "Meldcode verplicht"],
    img: "/subsidies-financiering/isde-warmtepomp.png",
    alt: "Installatie van duurzame techniek",
    href: "/isde-warmtepomp",
  },
  {
    doelgroep: "Woningeigenaren",
    title: "ISDE zonneboiler",
    text: "Voor duurzame warmwateropwekking met een zonneboiler (collectoren + boilervat + circulatiepomp). Woning moet bouwjaar vóór 1 januari 2019 hebben. Minimale subsidie: € 300.",
    voorwaarden: ["Nieuwe installatie", "Bestaande woning", "Bewijs van aanschaf bewaren"],
    img: "/subsidies-financiering/isde-zonneboiler.png",
    alt: "Zonneboiler op dak",
    href: "/isde-zonneboiler",
  },
  {
    doelgroep: "VvE's",
    title: "SVVE",
    text: "Voor isolatie, warmtepompen, energieadvies, DMJOP en oplaadpunten bij appartementencomplexen. Looptijd verlengd tot 2030. Vanaf 2026: geen subsidieplafond meer (eerder max. € 2,5 mln per VvE). Tot 75% van advieskosten vergoed.",
    voorwaarden: ["Besluitvorming VvE", "Gebouwgebonden aanvraag", "Offertes en rapporten nodig"],
    img: "/subsidies-financiering/svve.png",
    alt: "Appartementengebouw voor VvE verduurzaming",
    href: "/svve",
  },
  {
    doelgroep: "Bewoners lokaal",
    title: "Gemeentelijke subsidie",
    text: "Gemeenten bieden soms extra subsidie voor isolatie, ventilatie, energieadvies of collectieve wijkacties.",
    voorwaarden: ["Verschilt per gemeente", "Vaak inkomen- of labelafhankelijk", "Budget kan opraken"],
    img: "/subsidies-financiering/gemeentelijk.png",
    alt: "Gemeente en duurzame wijk",
    href: "/gemeentelijke-subsidies",
  },
  {
    doelgroep: "Aansluiting warmtenet",
    title: "Warmtenet & elektrisch koken",
    text: "ISDE geldt ook voor aansluiting op een warmtenet en een elektrische kookvoorziening bij overstap van gas. Aardgasmeter hoeft vanaf 2026 pas later te worden verwijderd: bevestiging netbeheerder volstaat bij aanvraag.",
    voorwaarden: ["Specifieke situatie", "Controleer voorwaarden", "Documenten verplicht"],
    img: "/subsidies-financiering/warmtenet-koken.png",
    alt: "Warmtenet en elektrisch koken",
    href: "/warmtenet-elektrisch-koken",
  },
];

type Lening = {
  doelgroep: string;
  title: string;
  amount: string;
  text: string;
  voorwaarden: string[];
};

const leningen: Lening[] = [
  {
    doelgroep: "Eigenaar-bewoners",
    title: "Energiebespaarlening Warmtefonds",
    amount: "€ 1.000 – € 29.000",
    text: "Voor particuliere woningeigenaren. Geschikt voor isolatie, glas, warmtepomp, zonneboiler, ventilatie en andere erkende maatregelen.",
    voorwaarden: ["Eigenaar én bewoner", "Niet voor nieuwbouw", "Aflopend krediet"],
  },
  {
    doelgroep: "Lagere en middeninkomens",
    title: "0% rente Warmtefonds",
    amount: "Inkomen < € 60.000",
    text: "Eigenaar-bewoners met een gezamenlijk verzamelinkomen onder € 60.000 kunnen verduurzaming financieren tegen 0% rente.",
    voorwaarden: ["Inkomen onder grens", "Aanvraag via Warmtefonds", "Alleen erkende maatregelen"],
  },
  {
    doelgroep: "Huishoudens met lage draagkracht",
    title: "Combinatielening Warmtefonds",
    amount: "Bij beperkte leenruimte",
    text: "Voor bewoners zonder leenruimte: tot € 10.000 aflossingsvrij lenen, 5 jaar lang geen rente én geen aflossing. Altijd 0% rente. Warmtefonds beoordeelt automatisch bij aanvraag.",
    voorwaarden: ["Draagkrachttoets", "Alleen via Warmtefonds", "Aflossing uitstellen mogelijk"],
  },
  {
    doelgroep: "VvE's",
    title: "VvE Energiebespaarlening",
    amount: "Voor appartementen",
    text: "Voor gezamenlijke verduurzaming van appartementencomplexen, bijvoorbeeld dakisolatie, gevelisolatie, glas of warmtepompen.",
    voorwaarden: ["Besluit van de VvE nodig", "Kan gecombineerd met SVVE"],
  },
  {
    doelgroep: "Eigenaar-bewoners",
    title: "SVn Duurzaamheidslening",
    amount: "Via gemeente",
    text: "Een gemeentelijke lening via SVn voor duurzame maatregelen. Minimaal € 2.500 – maximaal € 25.000. Rente: 1,7% (april 2026). Niet elke gemeente biedt deze lening aan; check svn.nl.",
    voorwaarden: ["Gemeente moet deelnemen", "Krediettoets + BKR"],
  },
  {
    doelgroep: "Kopers en huiseigenaren",
    title: "Extra hypotheek voor verduurzaming",
    amount: "Tot 106% woningwaarde",
    text: "Bij aankoop of verhogen van hypotheek kan extra leenruimte beschikbaar zijn voor energiebesparende maatregelen.",
    voorwaarden: ["Alleen voor EBV-maatregelen", "Hypotheekadvies nodig"],
  },
  {
    doelgroep: "Kopers met NHG",
    title: "NHG met verduurzaming",
    amount: "2026: tot € 498.200",
    text: "Met NHG kan in 2026 extra ruimte gelden als het bedrag boven de reguliere grens volledig wordt besteed aan energiebesparende maatregelen.",
    voorwaarden: ["Reguliere grens: € 470.000", "Extra volledig aan EBV besteden"],
  },
  {
    doelgroep: "Kopers en oversluiters",
    title: "Energiebespaarbudget",
    amount: "Maximaal 6% extra",
    text: "Budget binnen de hypotheek voor energiebesparende maatregelen wanneer nog niet precies vaststaat welke maatregelen worden uitgevoerd.",
    voorwaarden: ["Tot 6% boven woningwaarde", "Binnen termijn besteden"],
  },
  {
    doelgroep: "Huiseigenaren met overwaarde",
    title: "SVn Verzilverlening",
    amount: "Op basis van overwaarde",
    text: "Hypothecaire lening op basis van overwaarde; rente wordt jaarlijks bijgeschreven (geen maandlasten). Beschikbaar vanaf ca. 58 jaar. Aflossing bij verkoop of overlijden. Minimaal € 2.500.",
    voorwaarden: ["Overwaarde nodig", "Gemeente moet deelnemen"],
  },
];

const faqs = [
  {
    q: "Wanneer vraag ik ISDE aan?",
    a: "Vraag aan binnen 24 maanden nadat de maatregel is uitgevoerd en betaald. Bewaar facturen, betaalbewijzen, meldcodes én foto's van de werkzaamheden. Aanvragen via DigiD op RVO.nl.",
  },
  {
    q: "Kan ik subsidie en lening combineren?",
    a: "Ja, vaak kan subsidie gecombineerd worden met een Energiebespaarlening. NCDE rekent voor wat dit betekent voor uw maandlasten.",
  },
  {
    q: "Krijg ik subsidie voor één maatregel?",
    a: "Dat kan, maar bij meerdere maatregelen of combinaties kan het subsidievoordeel hoger zijn. De voorwaarden verschillen per maatregel.",
  },
  {
    q: "Helpt NCDE met de aanvraag?",
    a: "Ja, NCDE helpt met controle van voorwaarden, documenten, offertebeoordeling en het aanvraagproces.",
  },
];

export default function SubsidiesFinanciering() {
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
            <Link href="/subsidies-financiering" className="relative text-sm font-semibold text-brand-600">
              Subsidies & Financiering
              <span className="absolute -bottom-[29px] left-0 right-0 h-[3px] rounded-full bg-brand-600"></span>
            </Link>
            <Link href="/partners" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Partners</Link>
            <Link href="/nieuws" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Nieuws</Link>
            <Link href="/contact" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Contact</Link>
          </nav>
          <Link href="/#woningcheck" className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
            <HomeIcon size={17} />
            Start woningcheck
          </Link>
          <MobileMenu active="/subsidies-financiering" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate min-h-[480px] flex items-center overflow-hidden bg-brand-50">
        <img
          src="/subsidies-financiering/woningeigenaar.png"
          alt=""
          aria-hidden
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(100deg, rgba(241,250,245,1) 0%, rgba(241,250,245,.97) 30%, rgba(241,250,245,.82) 50%, rgba(241,250,245,.3) 68%, transparent 82%)",
          }}
        ></div>
        <div className="cx relative z-20 py-20 w-full">
          <div className="max-w-[820px]">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand-600 mb-5">
              Subsidies, leningen en duidelijke keuzes
            </p>
            <h1 className="font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl lg:text-[2.75rem]">
              Verduurzaming <em className="not-italic text-brand-600">betaalbaar</em> maken
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-800 md:text-lg max-w-2xl">
              NCDE geeft overzicht van subsidies, voorwaarden en leningen voor isolatie, warmtepomp, ventilatie, glas, zonneboiler en VvE-verduurzaming.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#woningcheck" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-4 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
                Start woningcheck <ArrowRight size={16} />
              </Link>
              <a href="#subsidies" className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-600 bg-white/80 px-6 py-4 text-sm font-bold text-brand-600 hover:bg-brand-50 transition-all">
                Bekijk alle regelingen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUBSIDIES ===== */}
      <section id="subsidies" className="py-16 md:py-20">
        <div className="cx">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Alle mogelijkheden</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-brand-800 md:text-4xl">Subsidies voor verduurzaming</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700 max-w-2xl">
                Een overzicht van landelijke en lokale regelingen. NCDE controleert altijd de actuele voorwaarden voordat u start.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subsidies.map((s) => (
              <article key={s.title} className="flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-brand-200 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{s.doelgroep}</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{s.text}</p>
                  <ul className="mt-4 space-y-2">
                    {s.voorwaarden.map((v) => (
                      <li key={v} className="flex items-start gap-2 text-sm text-gray-800">
                        <Check size={16} className="mt-0.5 text-brand-600 shrink-0" strokeWidth={3} />
                        {v}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700">
                    Lees voorwaarden <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LENINGEN ===== */}
      <section className="bg-brand-50 py-16 md:py-20">
        <div className="cx">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Leningen & financiering</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-brand-800 md:text-4xl">
                Alle routes om verduurzaming betaalbaar te maken
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700 max-w-2xl">
                NCDE vergelijkt subsidies, leningen, hypotheekruimte en gemeentelijke regelingen zodat bewoners niet onnodig te veel betalen.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { Icon: Clock, t: "Eerst checken", d: "Controleer altijd voorwaarden vóór opdracht, aankoop of ondertekening van offertes." },
                { Icon: Wallet, t: "Maandlasten", d: "Subsidie verlaagt de investering, maar leningen vragen om een draagkrachtcheck." },
                { Icon: Shield, t: "Zekerheid", d: "NHG en Warmtefonds kunnen extra zekerheid bieden bij passende voorwaarden." },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="rounded-xl bg-white p-4 border border-brand-100">
                  <Icon size={20} className="text-brand-600" />
                  <h4 className="mt-2 font-display text-sm font-bold text-gray-900">{t}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-700">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <LeningenAccordion items={leningen} />
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 md:py-20">
        <div className="cx">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Veelgestelde vragen</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-brand-800 md:text-4xl">
                Belangrijke voorwaarden in gewone taal
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                Subsidies veranderen regelmatig. NCDE controleert actuele voorwaarden via RVO.nl, Warmtefonds.nl en NHG.nl vóór elke aanvraag.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl bg-white p-6 border border-gray-200">
                  <HelpCircle size={22} className="text-brand-600 mb-3" />
                  <h3 className="font-display text-base font-bold text-gray-900">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA banner ===== */}
      <section className="cx pb-16 md:pb-20">
        <div className="rounded-2xl bg-brand-700 p-8 md:p-10 text-white shadow-[var(--shadow-card)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <Sparkles size={36} className="text-brand-200 shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-2xl font-extrabold uppercase md:text-3xl">
                  Klaar om uw mogelijkheden te ontdekken?
                </h2>
                <p className="mt-2 text-base text-brand-100">Start vandaag met een onafhankelijke woningcheck.</p>
              </div>
            </div>
            <Link href="/#woningcheck" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-bold text-brand-700 hover:bg-brand-50 transition-all whitespace-nowrap">
              Start woningcheck <ArrowRight size={16} />
            </Link>
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
                    { t: "Over ons", href: "/" },
                    { t: "Subsidies & Financiering", href: "/subsidies-financiering" },
                    { t: "Partners", href: "/" },
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
