/* Subpagina ISDE Isolatie - inhoud klantmockup dd 22-5-2026, vormgeving = site design-systeem */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  ArrowRight,
  Home as HomeIcon,
  ShieldCheck,
  Wrench,
  CalendarCheck,
  FileText,
  Receipt,
  Camera,
  Tag,
  Layers,
  Wind,
  TriangleAlert,
  Check,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISDE-subsidie isolatie — NCDE",
  description: "Subsidie voor dak-, vloer-, gevel-, spouwmuur- en glasisolatie. NCDE legt voorwaarden en bedragen per maatregel uit.",
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

const doelgroep = [
  { Icon: HomeIcon, t: "Bestaande woning", d: "De subsidie geldt voor het verbeteren van een bestaande woning. Nieuwbouw komt niet in aanmerking." },
  { Icon: Wrench, t: "Uitvoering door bedrijf", d: "De isolatie moet worden aangebracht door een erkend bouw- of installatiebedrijf." },
  { Icon: CalendarCheck, t: "Subsidie na uitvoering", d: "U vraagt de subsidie aan nadat de maatregel volledig is uitgevoerd en betaald." },
];

const algemeen = [
  { n: "1", t: "Eigenaar én bewoner", d: "U bent eigenaar van de woning en woont zelf in de woning waarvoor u subsidie aanvraagt." },
  { n: "2", t: "Minimale eisen per maatregel", d: "Elke isolatiemaatregel moet voldoen aan minimale m²-eisen en minimale Rd-, Rbf- of isolatiewaarden." },
  { n: "3", t: "Bewijsstukken bewaren", d: "Bewaar factuur, betaalbewijs, meldcode, foto's van de werkzaamheden en productspecificaties." },
];

const tabel = [
  { m: "Spouwmuurisolatie", e: "Min. 10 m² · Rd ≥ 1,1", v: "Voor isolatie van de bestaande spouwmuur. Subsidie tot maximaal 170 m²." },
  { m: "Gevelisolatie", e: "Min. 10 m² · Rd ≥ 3,5", v: "Voor isolatie van de bestaande gevel. Binnenmuren en scheidingswanden tellen niet mee." },
  { m: "Vloerisolatie", e: "Min. 20 m² · Rd ≥ 3,5", v: "Isolatie aan de onderzijde of bovenzijde van een bestaande vloer." },
  { m: "Bodemisolatie", e: "Min. 20 m² · Rd/Rbf ≥ 3,5", v: "Isolatie op de bodem van de kruipruimte. Vanaf 2026 mag ook Rbf worden gebruikt." },
  { m: "Dakisolatie", e: "Min. 20 m² · Rd ≥ 3,5", v: "Voor isolatie van het bestaande dak. Subsidie tot maximaal 200 m²." },
  { m: "Zolder- / vlieringvloerisolatie", e: "Min. 20 m² · Rd ≥ 3,5", v: "Alleen mogelijk wanneer de zolder of vliering onverwarmd is." },
  { m: "Glasisolatie", e: "Min. 3 m²", v: "Voor HR++ glas, triple glas, vacuümglas, isolerende deuren en panelen. Eisen verschillen per glassoort." },
  { m: "Ventilatie ✦ Nieuw 2026", e: "Vast bedrag: € 400", v: "Alleen mogelijk in combinatie met één of meer isolatiemaatregelen in dezelfde aanvraag." },
];

const ventilatie = [
  { Icon: Wind, t: "Waarom ventilatie?", d: "Een beter geïsoleerde woning houdt warmte beter vast, maar goede ventilatie blijft noodzakelijk voor een gezond binnenklimaat en het voorkomen van vocht." },
  { Icon: Layers, t: "Combineren met isolatie", d: "De ventilatiesubsidie is gekoppeld aan isolatie. Losse ventilatie zonder isolatiemaatregel in dezelfde aanvraag komt niet in aanmerking." },
  { Icon: Tag, t: "Eenmalig bedrag van € 400", d: "De subsidie voor ventilatie bedraagt € 400 en kan onder de geldende voorwaarden één keer worden aangevraagd." },
];

const docs = [
  { Icon: Receipt, t: "Factuur", d: "Met bedrijfsnaam, datum, adres, maatregel, aantal m², materiaal, isolatiewaarde en meldcode." },
  { Icon: Tag, t: "Meldcode", d: "De meldcode toont welk gecertificeerd product of systeem is toegepast en is verplicht bij de aanvraag." },
  { Icon: Camera, t: "Foto's van de uitvoering", d: "Maak foto's voor, tijdens en na de werkzaamheden als bewijs van de geïsoleerde oppervlakken." },
  { Icon: FileText, t: "Betaalbewijs", d: "Bewaar het bewijs van betaling van de factuur voor uw subsidiedossier." },
  { Icon: Layers, t: "Productspecificaties", d: "Technische gegevens van het isolatiemateriaal, inclusief de isolatiewaarde (Rd of Rbf)." },
  { Icon: CalendarCheck, t: "Uitvoeringsdatum", d: "De datum van uitvoering moet op de factuur staan en vallen binnen de geldige subsidieperiode." },
];

export default function IsdeIsolatiePage() {
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
          <MobileMenu active="/isde-isolatie" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: "#015C39" }}>
        <div className="cx relative z-10 py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} /> Subsidie · ISDE Isolatie
              </span>
              <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
                ISDE<br /><span className="text-amber-400">Isolatie</span> voor woningeigenaren
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Subsidie voor dak-, vloer-, bodem-, gevel-, spouwmuur- en glasisolatie. Vanaf 2026 ook voor energiezuinige ventilatie in combinatie met een isolatiemaatregel.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li>✓ Voor bestaande koopwoningen</li>
                <li>✓ Uitvoering door een bedrijf verplicht</li>
                <li>✓ Meldcode, factuur en bewijsstukken nodig</li>
              </ul>
              <a href="#algemeen" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
                Lees voorwaarden
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
              <img src="/subpaginas/isde-isolatie.png" alt="ISDE Isolatie" className="block h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAT IS ===== */}
      <section className="bg-brand-50 py-14 md:py-16">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Wat is de ISDE?</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-black uppercase leading-[1.15] text-brand-800 md:text-3xl">
            Landelijke subsidie voor isolatie
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base text-gray-700">
            <p>
              De ISDE (Investeringssubsidie duurzame energie en energiebesparing) is de landelijke subsidie voor woningeigenaren die hun woning verduurzamen. Met isolatie verlaagt u het energieverbruik, verbetert u het wooncomfort en kunt u een deel van de investering terugkrijgen.
            </p>
            <p>
              De subsidie geldt alleen wanneer de maatregel voldoet aan de minimale oppervlakte-eisen en isolatiewaarden. De aanvraag loopt via RVO.nl.
            </p>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-sm font-bold text-amber-900">
            <Check size={14} /> Subsidie via RVO · aanvragen na uitvoering
          </div>
        </div>
      </section>

      {/* ===== DOELGROEP ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Doelgroep</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Voor wie is deze subsidie?
          </h2>
          <p className="mt-4 max-w-3xl text-base text-gray-700">
            De ISDE-isolatiesubsidie is bedoeld voor particuliere woningeigenaren die eigenaar én bewoner zijn van een bestaande woning. De regeling is niet bedoeld voor nieuwbouw of voor werkzaamheden die u volledig zelf uitvoert.
          </p>
          <p className="mt-3 max-w-3xl text-base text-gray-700">
            NCDE helpt u om vooraf duidelijk te krijgen welke maatregelen mogelijk zijn, welke voorwaarden gelden en welke documenten nodig zijn voor een complete aanvraag.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {doelgroep.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-black text-brand-800">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ALGEMEEN ===== */}
      <section id="algemeen" className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Algemene eisen</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Algemene voorwaarden ISDE Isolatie
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {algemeen.map((v) => (
              <div key={v.n} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-black text-white">
                  {v.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-black text-brand-800">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{v.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
            <TriangleAlert size={18} className="mt-0.5 shrink-0 text-amber-600" />
            <p className="text-sm text-amber-900">
              <strong>Let op — factuurvereisten:</strong> laat op de factuur altijd het aantal geïsoleerde m², de isolatiewaarde, het type materiaal, de meldcode en de uitvoeringsdatum opnemen. Dit voorkomt problemen bij de subsidieaanvraag.
            </p>
          </div>
        </div>
      </section>

      {/* ===== EISEN PER MAATREGEL ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Eisen per maatregel</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Voorwaarden per isolatiemaatregel
          </h2>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Maatregel</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Minimale eis</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Belangrijke voorwaarden</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tabel.map((r) => (
                  <tr key={r.m} className="hover:bg-brand-50/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-brand-800">{r.m}</td>
                    <td className="px-5 py-4 text-gray-700 whitespace-nowrap">{r.e}</td>
                    <td className="px-5 py-4 text-gray-700">{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-gray-600">
            De officiële voorwaarden en subsidiebedragen worden vastgesteld door RVO. Controleer altijd de actuele eisen via <a href="https://www.rvo.nl" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">rvo.nl</a> voordat u een aanvraag indient.
          </p>
        </div>
      </section>

      {/* ===== VENTILATIE 2026 ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-900">
            ✦ Nieuw vanaf 2026
          </span>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Subsidie voor ventilatie
          </h2>
          <p className="mt-4 max-w-3xl text-base text-gray-700">
            Vanaf 2026 kunt u bij isolatie ook subsidie krijgen voor energiezuinige ventilatie. Het gaat om een vast bedrag van € 400. Dit is alleen mogelijk wanneer ventilatie wordt gecombineerd met een isolatiemaatregel.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {ventilatie.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-black text-brand-800">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTATIE ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Documentatie</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Welke documenten heeft u nodig?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            Zorg dat u de juiste documenten klaar heeft voordat u uw aanvraag indient bij RVO. Onvolledige aanvragen worden afgewezen.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {docs.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-black text-brand-800">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVIES CTA ===== */}
      <section id="advies" className="bg-white py-12 md:py-16">
        <div className="cx">
          <div className="rounded-3xl px-6 py-12 text-white md:px-12 md:py-16 shadow-2xl" style={{ background: "#015C39" }}>
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Vrijblijvend advies</p>
                <h2 className="mt-3 font-display text-3xl font-black uppercase leading-[1.1] md:text-4xl">
                  Wilt u weten hoeveel subsidie u kunt krijgen?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                  NCDE helpt u met inzicht in kosten, besparing, terugverdientijd en de voorwaarden voor ISDE-isolatiesubsidie.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-colors">
                  Vraag vrijblijvend advies aan
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="space-y-3">
                {[
                  "Controle op voorwaarden en documenten",
                  "Inzicht in subsidiebedrag en besparing",
                  "Hulp bij het aanvraagproces via RVO",
                  "100% vrijblijvend en onafhankelijk",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-brand-900">
                      <Check size={14} />
                    </span>
                    <span className="font-bold text-white">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DISCLAIMER STROOK ===== */}
      <section className="bg-gray-50 py-8">
        <div className="cx">
          <p className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-xs text-gray-600">
            Informatie gebaseerd op actuele ISDE-richtlijnen van RVO en publieke subsidie-informatie. Controleer altijd de meest recente eisen via rvo.nl. NCDE is niet verantwoordelijk voor wijzigingen in wet- of regelgeving na publicatie van deze pagina.
          </p>
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
              <Link href="/cvd-melding" className="hover:text-white">CVD-melding</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
