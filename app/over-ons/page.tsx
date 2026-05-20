/* Over ons pagina - vanuit public/over-ons.html (Kilo Code)
   Aangepast aan homepage-stack (League Spartan + brand-* + bestaande tokens) */

import Link from "next/link";
import {
  ArrowRight,
  Home as HomeIcon,
  Menu,
  Users,
  Calculator,
  Scale,
  Search,
  Shield,
  Lightbulb,
  Leaf,
  Compass,
  Heart,
} from "lucide-react";

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

const timeline = [
  { year: "2024", title: "Het idee", text: "Het idee voor NCDE ontstaat vanuit de behoefte aan duidelijke, onafhankelijke en praktische informatie over het verduurzamen van woningen." },
  { year: "2025", title: "Oprichting NCDE", text: "De stichting Nationaal Collectief Duurzame Energie wordt opgericht met als doel verduurzaming toegankelijk, transparant en datagedreven te maken." },
  { year: "2026", title: "Website-lancering", text: "De website van NCDE wordt gelanceerd met informatie over woningverduurzaming, subsidies, advies op maat en betrouwbare uitvoerders." },
];

const waarden = [
  { Icon: Scale, t: "Onafhankelijk", d: "Advies zonder commerciële belangen" },
  { Icon: Search, t: "Transparant", d: "Duidelijke informatie en eerlijke uitleg" },
  { Icon: Shield, t: "Betrouwbaar", d: "U kunt op ons rekenen" },
  { Icon: Users, t: "Toegankelijk", d: "Voor iedereen begrijpelijk en beschikbaar" },
  { Icon: Lightbulb, t: "Innovatief", d: "Slimme data en duurzame oplossingen" },
  { Icon: Leaf, t: "Duurzaam", d: "Bijdragen aan een betere toekomst" },
];

const steps = [
  { n: 1, t: "Inzicht in mogelijkheden", d: "Wij maken op basis van uw woningdata duidelijk welke verduurzamingsopties passen bij uw situatie." },
  { n: 2, t: "Subsidies & financiering", d: "U krijgt een helder overzicht van regelingen, subsidies en betaalmogelijkheden." },
  { n: 3, t: "Persoonlijk advies", d: "Wij vertalen data naar een concreet advies met prioriteiten en terugverdientijden." },
  { n: 4, t: "Betrouwbare uitvoering", d: "Wij koppelen bewoners aan geselecteerde partners voor vakkundige uitvoering." },
];

const dataCards = [
  { t: "Woningdata", d: "Informatie over woningtype, bouwjaar en energielabel helpt om de eerste inschatting concreter te maken." },
  { t: "Kosten en besparing", d: "De rekentools geven inzicht in investering, subsidie, jaarlijkse besparing en mogelijke maandlasten." },
  { t: "Betere begeleiding", d: "Bewoners krijgen praktische vervolgstappen richting persoonlijk advies, offerte en professionele uitvoering." },
];

const bestuur = [
  { naam: "Jeroen van der Meer", rol: "Voorzitter", omschr: "Expert in energietransitie en organisatieontwikkeling." },
  { naam: "Sophie de Groot", rol: "Secretaris", omschr: "Specialist in duurzaamheid en beleid." },
  { naam: "Mark van der Heijden", rol: "Penningmeester", omschr: "Financieel strateeg en risicomanagement." },
  { naam: "Lisa Bakker", rol: "Bestuurslid", omschr: "Data & Innovatie — gedreven voorvechter van digitale oplossingen." },
];

export default function OverOns() {
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
            <Link href="/over-ons" className="relative text-sm font-semibold text-brand-600">
              Over ons
              <span className="absolute -bottom-[29px] left-0 right-0 h-[3px] rounded-full bg-brand-600"></span>
            </Link>
            <Link href="/subsidies-financiering" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Subsidies & Financiering</Link>
            <Link href="/partners" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Partners</Link>
            <Link href="/nieuws" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Nieuws</Link>
            <Link href="/" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Contact</Link>
          </nav>
          <Link href="/#woningcheck" className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
            <HomeIcon size={17} />
            Start woningcheck
          </Link>
          <button className="lg:hidden rounded-md p-2 text-brand-700" aria-label="Menu">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate min-h-[480px] flex items-center overflow-hidden bg-brand-50">
        <div className="cx relative z-10 py-16 md:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand-600 mb-5">Over NCDE</p>
              <h1 className="font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl lg:text-[2.75rem]">
                Over ons
              </h1>
              <p className="mt-5 text-base leading-relaxed text-gray-800 md:text-lg max-w-2xl">
                NCDE is hét onafhankelijke kennis- en adviescentrum voor huiseigenaren en bewoners die hun woning willen verduurzamen. Wij maken verduurzamen eenvoudig, duidelijk en toegankelijk.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#woningcheck" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-4 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
                  Start woningcheck <ArrowRight size={16} />
                </Link>
                <a href="#hoe-werken" className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-600 bg-white/80 px-6 py-4 text-sm font-bold text-brand-600 hover:bg-brand-50 transition-all">
                  Bekijk hoe wij werken
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3">
              {[
                { img: "/over-ons/onafhankelijk.png", t: "Onafhankelijk", d: "Advies dat u kunt vertrouwen" },
                { img: "/over-ons/data-inzicht.png", t: "Data & Inzicht", d: "Slimme analyses voor de beste keuze" },
                { img: "/over-ons/betrouwbare-partners.png", t: "Betrouwbare uitvoerders", d: "Geselecteerd op kwaliteit" },
              ].map((c) => (
                <div key={c.t} className="rounded-xl bg-white border border-brand-100 overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.t} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-display text-sm font-bold text-gray-900">{c.t}</p>
                    <p className="mt-1 text-xs text-gray-700 leading-snug">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIJDLIJN + MISSIE/VISIE + WAARDEN ===== */}
      <section className="py-16 md:py-20">
        <div className="cx grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Links: tijdlijn */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Onze ontstaansgeschiedenis</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-brand-800 md:text-4xl">Van idee tot impact</h2>
            <ol className="relative mt-10 border-l-[3px] border-brand-600 pl-8 space-y-8">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[44px] top-1 grid h-[18px] w-[18px] place-items-center rounded-full bg-white border-[5px] border-brand-600"></span>
                  <span className="inline-block rounded-lg bg-brand-600 px-3 py-1 text-xs font-extrabold text-white">{t.year}</span>
                  <p className="mt-2 font-bold text-gray-900">{t.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-700">{t.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200">
              <img src="/over-ons/stap-voor-stap.png" alt="Stap voor stap naar succes" className="w-full h-auto" />
            </div>
          </div>

          {/* Rechts: missie/visie + stichting */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Onze missie &amp; visie</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <article className="rounded-2xl overflow-hidden bg-blue-50 hover:-translate-y-1 transition-all">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src="/over-ons/onze-missie.png" alt="Onze missie" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Onze missie</p>
                  <h3 className="mt-1 font-display text-base font-bold text-gray-900">Slimme en duurzame keuzes voor iedereen</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    NCDE helpt huiseigenaren en bewoners bij het maken van slimme en duurzame keuzes door onafhankelijk, datagedreven en praktisch advies.
                  </p>
                </div>
              </article>
              <article className="rounded-2xl overflow-hidden bg-yellow-50 hover:-translate-y-1 transition-all">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src="/over-ons/onze-visie.png" alt="Onze visie" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Onze visie</p>
                  <h3 className="mt-1 font-display text-base font-bold text-gray-900">Iedere woning duurzaam en betaalbaar</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    Wij streven naar een toekomst waarin iedere woning in Nederland op een toegankelijke, betaalbare en efficiënte manier wordt verduurzaamd.
                  </p>
                </div>
              </article>
            </div>

            <article className="mt-4 rounded-2xl overflow-hidden bg-brand-50">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0">
                <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
                  <img src="/over-ons/stichting.png" alt="Stichting zonder winstoogmerk" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Wat voor soort stichting is NCDE?</p>
                  <h3 className="mt-1 font-display text-base font-bold text-gray-900">Stichting zonder winstoogmerk</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    NCDE is een onafhankelijke stichting die zich inzet voor het algemeen belang. Wij investeren onze middelen in betrouwbare data, onafhankelijk advies en het versnellen van de energietransitie.
                  </p>
                </div>
              </div>
            </article>

            {/* Kernwaarden */}
            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Onze kernwaarden</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-brand-800 md:text-3xl">Wat ons drijft</h2>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {waarden.map(({ Icon, t, d }) => (
                  <div key={t} className="rounded-xl bg-white p-4 border border-gray-200 hover:border-brand-200 hover:-translate-y-1 transition-all">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Icon size={18} />
                    </div>
                    <p className="mt-3 font-display text-sm font-bold text-gray-900">{t}</p>
                    <p className="mt-1 text-xs leading-snug text-gray-700">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOE WIJ WERKEN ===== */}
      <section id="hoe-werken" className="bg-brand-50 py-16 md:py-20">
        <div className="cx text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Hoe wij werken</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-brand-800 md:text-4xl">Van inzicht naar uitvoering</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-700 max-w-2xl mx-auto">
            NCDE begeleidt bewoners stap voor stap: van eerste inzicht tot koppeling met een betrouwbare uitvoerder.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {steps.map((s) => (
              <article key={s.n} className="rounded-2xl bg-white p-6 border border-gray-200 hover:border-brand-200 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-white font-bold">{s.n}</div>
                <h3 className="mt-4 font-display text-base font-bold text-gray-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DATA & INNOVATIE ===== */}
      <section className="py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Data &amp; innovatie</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-brand-800 md:text-4xl">Slimme analyses voor betere keuzes</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-700 max-w-2xl">
            NCDE maakt gebruik van openbare data en slimme analyses om bewoners snel inzicht te geven in de mogelijkheden voor hun woning.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {dataCards.map((d) => (
              <article key={d.t} className="rounded-2xl bg-white p-6 border border-gray-200 hover:border-brand-200 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all">
                <h3 className="font-display text-base font-bold text-gray-900">{d.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{d.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ORGANOGRAM / BESTUUR ===== */}
      <section className="bg-brand-50 py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Onze organisatie</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-brand-800 md:text-4xl">Organogram</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-700 max-w-2xl">
            Een heldere organisatiestructuur met focus op bestuur, advies, data, operations en kwaliteitsborging.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              {/* Eenvoudige chart */}
              <div className="rounded-2xl bg-white p-8 border border-gray-200">
                <div className="flex flex-col items-center gap-3">
                  <span className="rounded-lg bg-brand-800 px-5 py-2 text-sm font-bold text-white">Raad van Toezicht</span>
                  <span className="h-6 w-[2px] bg-brand-200"></span>
                  <span className="rounded-lg bg-brand-600 px-5 py-2 text-sm font-bold text-white">Bestuur</span>
                  <span className="h-6 w-[2px] bg-brand-200"></span>
                  <div className="w-full">
                    <div className="h-[2px] w-full bg-brand-200"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                      {[
                        { b: "Directeur", s: "Strategie & Partnerships" },
                        { b: "Team Data & Advies", s: "Analyse & Ontwikkeling" },
                        { b: "Team Operations", s: "Platform & Klant" },
                        { b: "Team Kwaliteit", s: "Uitvoerders & Controle" },
                      ].map((br) => (
                        <div key={br.b} className="rounded-lg bg-brand-50 p-3 text-center border border-brand-100">
                          <p className="font-bold text-xs text-gray-900">{br.b}</p>
                          <p className="text-[10px] text-gray-600 mt-1">{br.s}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-4">Bestuursleden</p>
              <div className="space-y-3">
                {bestuur.map((m) => (
                  <article key={m.naam} className="rounded-xl bg-white p-5 border border-gray-200">
                    <p className="font-display text-base font-bold text-gray-900">{m.naam}</p>
                    <span className="inline-block rounded-md bg-brand-50 px-2 py-0.5 text-xs font-bold text-brand-700 mt-1">{m.rol}</span>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{m.omschr}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AANPAK STRIP ===== */}
      <section className="cx py-12">
        <div className="rounded-2xl bg-white border border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {[
            { Icon: Compass, b: "Onafhankelijk advies", s: "Altijd objectief en in uw belang" },
            { Icon: Calculator, b: "Data-gedreven", s: "De beste keuzes op basis van feiten" },
            { Icon: Heart, b: "Praktisch en toegankelijk", s: "Van inzicht naar uitvoering" },
            { Icon: Users, b: "Samen sterker", s: "Met partners en gemeenten" },
          ].map(({ Icon, b, s }) => (
            <div key={b} className="flex items-start gap-3 p-5">
              <Icon size={24} className="text-brand-600 shrink-0 mt-1" />
              <div>
                <p className="font-display text-sm font-bold text-gray-900">{b}</p>
                <p className="text-xs text-gray-700">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cx pb-16 md:pb-20">
        <div className="rounded-2xl bg-brand-700 p-8 md:p-10 text-white shadow-[var(--shadow-card)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-extrabold uppercase md:text-3xl">Klaar om te verduurzamen?</h2>
              <p className="mt-2 text-base text-brand-100">Ontdek wat uw woning kan besparen. Start vandaag nog.</p>
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
                    { t: "Over ons", href: "/over-ons" },
                    { t: "Subsidies & Financiering", href: "/subsidies-financiering" },
                    { t: "Partners", href: "/" },
                    { t: "Nieuws", href: "/" },
                    { t: "Contact", href: "/" },
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
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Disclaimer</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
