/* Subpagina SVVE - inhoud klantmockup dd 22-5-2026, vormgeving = site design-systeem */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  ArrowRight,
  Home as HomeIcon,
  Building,
  Vote,
  FileCheck,
  Percent,
  Clock,
  TrendingUp,
  Sparkles,
  TriangleAlert,
  Check,
  ClipboardList,
  FileText,
  Receipt,
  Layers,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVVE subsidie voor VvE's — NCDE",
  description: "Subsidie voor verduurzaming van appartementencomplexen. Looptijd tot 2030, geen plafond per VvE meer vanaf 2026.",
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
  { Icon: Building, t: "Gebouwgebonden aanvraag", d: "De aanvraag gaat over het appartementencomplex of de gebouwen van de VvE, niet over individuele woningen." },
  { Icon: Vote, t: "Besluitvorming VvE", d: "De VvE moet intern besluiten nemen over onderzoek, offertes, uitvoering en financiering conform de statuten." },
  { Icon: Percent, t: "Tot 75% advieskosten vergoed", d: "Voor adviezen en onderzoeken kan 75% van de factuurbedragen worden vergoed, binnen maximale bedragen per gebouwgrootte." },
];

const voorwaarden = [
  { n: "1", t: "Besluitvorming binnen VvE", d: "De VvE moet volgens haar eigen regels besluiten nemen over advies, onderzoek, offertes, uitvoering en financiering." },
  { n: "2", t: "Offertes en rapporten", d: "Voor de aanvraag zijn duidelijke offertes, rapporten, technische gegevens, facturen en betaalbewijzen vereist." },
  { n: "3", t: "Maatregelen: vóór uitvoering", d: "Voor verduurzamingsmaatregelen vraagt de VvE de subsidie aan vóórdat de werkzaamheden worden gestart." },
  { n: "4", t: "Advies: achteraf aanvragen", d: "Subsidie voor verduurzamingsadvies en onderzoek wordt achteraf aangevraagd met factuur, betaalbewijs en rapport." },
  { n: "5", t: "Looptijd tot 2030", d: "De SVVE is open voor aanvragen tot en met 2030, waardoor VvE's meer tijd hebben om verduurzaming voor te bereiden.", nieuw: true },
  { n: "6", t: "Geen plafond per VvE", d: "Vanaf 2026 verdwijnt het maximumbedrag per VvE voor verduurzamingsmaatregelen. Eerder gold een maximum van € 2,5 mln.", nieuw: true },
];

const tabel = [
  { o: "Verduurzamingsadvies", w: "Energieadvies, maatwerkadvies, haalbaarheidsonderzoek of procesondersteuning.", b: "75% vergoeding van factuurbedragen, met maximale bedragen per gebouwgrootte." },
  { o: "DMJOP", w: "Duurzaam Meerjarenonderhoudsplan voor de VvE.", b: "Helpt de VvE verduurzaming te koppelen aan gepland onderhoud. Aanvraag achteraf met rapport." },
  { o: "Isolatiemaatregelen", w: "Dak-, vloer-, gevel-, spouwmuur- en glasisolatie voor het complex.", b: "Maatregelen moeten voldoen aan technische eisen en minimale oppervlakten. Vóór uitvoering aanvragen." },
  { o: "Warmtepompen", w: "Duurzame warmteopties: warmtepompen of aansluiting op een warmtenet.", b: "Geschikt wanneer het gebouw technisch klaar is voor duurzame warmte. Vóór uitvoering aanvragen." },
  { o: "Zeer Energiezuinig Pakket", w: "Een totaalpakket waarmee het gebouw zeer energiezuinig wordt gemaakt.", b: "Gecombineerd met bouwbegeleiding en integrale aanpak. Vóór uitvoering aanvragen." },
  { o: "Oplaadpuntenadvies", w: "Advies over laadpunten voor elektrische auto's bij het complex.", b: "Helpt de VvE om veilig en toekomstgericht laadvoorzieningen te plannen. Aanvraag achteraf." },
  { o: "Basislaadinfrastructuur", w: "Voorbereiding van technische infrastructuur voor laadpunten.", b: "Vóór uitvoering aanvragen (geldt ook voor laadinfrastructuur)." },
];

const wijzigingen = [
  { Icon: Clock, t: "Looptijd verlengd tot 2030", d: "De SVVE-regeling loopt door tot en met 2030, waardoor VvE's meer tijd hebben om verduurzaming zorgvuldig voor te bereiden en te financieren." },
  { Icon: TrendingUp, t: "Geen maximum per VvE meer", d: "Het maximumbedrag van € 2,5 miljoen per VvE verdwijnt. Grotere VvE's kunnen hierdoor meer subsidie aanvragen voor omvangrijke verduurzamingsprojecten." },
  { Icon: Sparkles, t: "Meer ruimte voor advies", d: "Er is subsidie voor verduurzamingsonderzoek, energieadvies en vanaf 2026 ook procesondersteuning en advies voor zonnestroominstallaties." },
];

const docs = [
  { Icon: Vote, t: "VvE-besluit", d: "Notulen of besluitvorming waaruit blijkt dat de VvE akkoord is met advies, aanvraag, uitvoering of financiering." },
  { Icon: FileCheck, t: "Offertes", d: "Duidelijke offertes van adviseurs, installateurs of uitvoerende bedrijven voor de geplande maatregelen." },
  { Icon: ClipboardList, t: "Rapporten", d: "Energieadvies, DMJOP, technische rapporten, bouwkundige onderbouwing of oplaadpuntenadvies." },
  { Icon: Receipt, t: "Facturen en betaalbewijzen", d: "Nodig bij subsidie voor afgerond advies, onderzoek of andere onderdelen waarbij achteraf wordt aangevraagd." },
  { Icon: Layers, t: "Technische gegevens", d: "Productinformatie, oppervlaktes, isolatiewaarden, installatiespecificaties en projectgegevens van de maatregelen." },
  { Icon: FileText, t: "Gebouwgegevens", d: "Gegevens over het appartementencomplex: aantal woningen, eigendomssituatie, bouwjaar en gebruik." },
];

export default function SvvePage() {
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
          <MobileMenu active="/svve" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: "#015C39" }}>
        <div className="cx relative z-10 py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <Building size={14} /> Subsidie · SVVE voor VvE&apos;s
              </span>
              <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
                SVVE subsidie voor<br /><span className="text-amber-400">VvE&apos;s en woonverenigingen</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Subsidie voor verduurzaming van appartementencomplexen: isolatie, warmtepompen, energieadvies, DMJOP en oplaadpunten. Looptijd verlengd tot en met 2030.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li>✓ Voor VvE&apos;s, woonverenigingen en wooncoöperaties</li>
                <li>✓ Advies, maatregelen én laadinfrastructuur</li>
                <li>✓ Open tot en met 2030, geen maximum per VvE</li>
              </ul>
              <a href="#voorwaarden" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
                Lees voorwaarden
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mx-auto overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
              <img src="/subpaginas/svve.png" alt="SVVE voor VvE's" className="block max-h-[460px] w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAT IS ===== */}
      <section className="bg-brand-50 py-14 md:py-16">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Wat is SVVE?</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-black uppercase leading-[1.15] text-brand-800 md:text-3xl">
            Subsidieregeling Verduurzaming voor VvE&apos;s
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base text-gray-700">
            <p>
              SVVE staat voor Subsidieregeling Verduurzaming voor Verenigingen van Eigenaars. De regeling helpt VvE&apos;s om hun appartementencomplex stap voor stap te verduurzamen.
            </p>
            <p>
              De regeling bestaat uit drie onderdelen: verduurzamingsadvies en -onderzoek, verduurzamingsmaatregelen en oplaadpunten(advies). DMJOP staat voor Duurzaam Meerjarenonderhoudsplan voor de VvE en helpt de VvE verduurzaming te koppelen aan gepland onderhoud.
            </p>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-sm font-bold text-amber-900">
            <Sparkles size={14} /> Nieuw 2026: geen plafond per VvE · looptijd t/m 2030
          </div>
        </div>
      </section>

      {/* ===== DOELGROEP ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Doelgroep</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Voor wie is de SVVE bedoeld?
          </h2>
          <p className="mt-4 max-w-3xl text-base text-gray-700">
            De SVVE is bedoeld voor Verenigingen van Eigenaars, woonverenigingen en wooncoöperaties die een gebouw of groep gebouwen willen verduurzamen. De aanvraag is gebouwgebonden en wordt namens de VvE ingediend.
          </p>
          <p className="mt-3 max-w-3xl text-base text-gray-700">
            De regeling bestaat uit drie hoofdonderdelen: verduurzamingsonderzoek en -advies, verduurzamingsmaatregelen, en oplaadpuntenadvies of basisinfrastructuur.
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

      {/* ===== VOORWAARDEN ===== */}
      <section id="voorwaarden" className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Eisen & voorwaarden</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Belangrijkste voorwaarden SVVE
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {voorwaarden.map((v) => (
              <div key={v.n} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-black text-white">
                    {v.n}
                  </span>
                  {v.nieuw && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900">
                      ✦ Nieuw 2026
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-black text-brand-800">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{v.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-[var(--shadow-card)]">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                Vóór uitvoering
              </span>
              <h3 className="mt-3 font-display text-lg font-black text-brand-800">Verduurzamingsmaatregelen</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Isolatie, warmtepompen, ZEP, basislaadinfrastructuur. Aanvraag indienen voordat de werkzaamheden starten.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-[var(--shadow-card)]">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                Na uitvoering / afronding
              </span>
              <h3 className="mt-3 font-display text-lg font-black text-brand-800">Advies & onderzoek</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Energieadvies, DMJOP, haalbaarheidsonderzoek, oplaadpuntenadvies. Aanvragen met factuur en rapport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUBSIDIEOVERZICHT TABEL ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Subsidieoverzicht</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Waarvoor kan een VvE subsidie aanvragen?
          </h2>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Onderdeel</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Waarvoor?</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Belangrijk om te weten</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tabel.map((r) => (
                  <tr key={r.o} className="hover:bg-brand-50/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-brand-800">{r.o}</td>
                    <td className="px-5 py-4 text-gray-700">{r.w}</td>
                    <td className="px-5 py-4 text-gray-700">{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== WIJZIGINGEN 2026 ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-900">
            ✦ Wijzigingen vanaf 2026
          </span>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Wat verandert er vanaf 2026?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {wijzigingen.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-black text-brand-800">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
            <TriangleAlert size={18} className="mt-0.5 shrink-0 text-red-600" />
            <p className="text-sm text-red-900">
              <strong>Let op: aanvraagmoment verschilt per onderdeel.</strong> Controleer altijd vóór de aanvraag welke voorwaarden gelden voor het gekozen onderdeel. Advies, maatregelen en laadinfrastructuur hebben elk hun eigen aanvraagmoment en benodigde bewijsstukken. Verkeerd aanvragen kan leiden tot afwijzing.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTATIE ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Documentatie</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Welke documenten heeft de VvE nodig?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            Een complete aanvraag vereist de juiste documenten per onderdeel. Zorg dat de VvE deze tijdig verzamelt en goed bewaart.
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
                  Wil uw VvE verduurzamen met subsidie?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                  NCDE helpt VvE&apos;s met inzicht in voorwaarden, documenten, besluitvorming, subsidie, kosten, besparing en uitvoering.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-colors">
                  Vraag VvE-advies aan
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="space-y-3">
                {[
                  "Controle op SVVE-voorwaarden per onderdeel",
                  "Hulp bij offertes, rapporten en besluitvorming",
                  "Duidelijk inzicht in subsidie en kosten voor de VvE",
                  "100% vrijblijvend en onafhankelijk advies",
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
            Informatie gebaseerd op actuele SVVE-informatie van RVO. Controleer altijd de meest recente eisen via rvo.nl. NCDE is niet verantwoordelijk voor wijzigingen in wet- of regelgeving na publicatie van deze pagina.
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
