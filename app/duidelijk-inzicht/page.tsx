/* Subpagina Duidelijk Inzicht - inhoud klantmockup dd 22-5-2026, vormgeving = site design-systeem */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  ArrowRight,
  Home as HomeIcon,
  Sparkles,
  Euro,
  PiggyBank,
  BarChart3,
  Clock,
  Zap,
  Layers,
  ShieldCheck,
  Check,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duidelijk inzicht — NCDE",
  description: "Krijg direct inzicht in kosten, besparing en terugverdientijd van verduurzaming voor uw woning.",
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

const features = [
  { Icon: Sparkles, t: "Duidelijk inzicht", d: "Direct overzicht van investeringen, besparingen en terugverdientijd." },
  { Icon: HomeIcon, t: "Persoonlijk en betrouwbaar", d: "Op basis van uw woning, situatie, energieverbruik en subsidiemogelijkheden." },
  { Icon: ShieldCheck, t: "Onafhankelijk advies", d: "Gericht op de beste oplossing voor uw woning, zonder onduidelijke aannames." },
];

const inzichten = [
  { Icon: Euro, t: "Investering", d: "Wat kost de oplossing inclusief installatie, subsidies en BTW." },
  { Icon: PiggyBank, t: "Maandelijkse besparing", d: "Wat bespaart u per maand op uw energiekosten, duidelijk in euro's." },
  { Icon: BarChart3, t: "Jaarlijkse besparing", d: "Wat is uw totale besparing per jaar in vergelijking met uw huidige situatie." },
  { Icon: Clock, t: "Terugverdientijd", d: "Binnen hoeveel jaar uw investering zichzelf terugverdient." },
  { Icon: Zap, t: "Energielabel & verbruik", d: "Wat het effect is op uw energieverbruik en duurzame prestaties." },
  { Icon: Layers, t: "Scenario's vergelijken", d: "Vergelijk meerdere oplossingen en kies wat het beste bij u past." },
];

export default function DuidelijkInzichtPage() {
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
          <MobileMenu active="/duidelijk-inzicht" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: "#015C39" }}>
        <div className="cx relative z-10 py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} /> Meer Inzicht
              </span>
              <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
                Duidelijk inzicht,<br /><span className="text-amber-400">betere keuzes.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Krijg inzicht in kosten en terugverdientijd, afgestemd op uw persoonlijke situatie en woning.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li>✓ Persoonlijk advies op maat</li>
                <li>✓ Duidelijk inzicht in kosten en besparing</li>
                <li>✓ Onafhankelijk en transparant</li>
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/#woningcheck" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
                  Start woningcheck
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
              <img src="/subpaginas/duidelijk-inzicht.png" alt="Duidelijk inzicht in besparing en terugverdientijd" className="block h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAT IS ===== */}
      <section className="bg-brand-50 py-14 md:py-16">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Wat is Meer Inzicht?</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Realistische scenario&apos;s op basis van uw woning
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base text-gray-700">
            <p>
              Onze rekentools geven u een helder en compleet overzicht van de mogelijkheden om uw woning te verduurzamen. U ziet direct wat een maatregel oplevert in kosten, energieverbruik, besparing en terugverdientijd.
            </p>
            <p>
              Door uw woningkenmerken en wensen in te voeren, berekenen wij realistische scenario&apos;s die aansluiten op uw persoonlijke situatie.
            </p>
            <p>
              Zo kiest u met vertrouwen de oplossing die het beste past bij uw woning, budget en duurzaamheidsdoelen.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {features.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-[var(--shadow-card)]">
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

      {/* ===== INZICHTEN ===== */}
      <section id="inzichten" className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Rekentools</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Wat krijgt u inzichtelijk met onze rekentools?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {inzichten.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-brand-200 transition-all">
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

      {/* ===== MAANDELIJKSE BESPARING ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="cx grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Maandelijkse impact</p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
              Ziet u direct wat u per maand bespaart
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Onze rekentools berekenen niet alleen de totale en jaarlijkse besparing, maar maken vooral helder wat het u maandelijks oplevert. Zo weet u precies wat de impact is op uw maandlasten.
            </p>
            <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 px-5 py-4">
              <p className="text-sm font-semibold text-brand-900">
                <strong>Voorbeeld:</strong> u bespaart <span className="text-brand-700">€ 104 per maand</span> met een investering van € 8.750.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
            <div className="border-b border-gray-200 bg-brand-50 px-6 py-4">
              <p className="font-display text-lg font-black text-brand-900">Voorbeeld resultaat</p>
            </div>
            <dl className="divide-y divide-gray-100">
              {[
                { k: "Totale investering", v: "€ 8.750" },
                { k: "Jaarlijkse besparing", v: "€ 1.250" },
                { k: "Maandelijkse besparing", v: "€ 104" },
                { k: "Terugverdientijd", v: "7,0 jaar" },
              ].map((r) => (
                <div key={r.k} className="flex items-center justify-between px-6 py-4 text-sm">
                  <dt className="font-semibold text-gray-700">{r.k}</dt>
                  <dd className="font-display text-lg font-black text-brand-800">{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ===== ADVIES CTA ===== */}
      <section id="advies" className="bg-white py-12 md:py-16">
        <div className="cx">
          <div className="rounded-3xl px-6 py-12 text-white md:px-12 md:py-16 shadow-2xl" style={{ background: "#015C39" }}>
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Klaar voor meer inzicht?</p>
                <h2 className="mt-3 font-display text-3xl font-black uppercase leading-[1.1] md:text-4xl">
                  Start vandaag nog
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                  Ontdek wat verduurzaming ú oplevert. Snel, eenvoudig en vrijblijvend.
                </p>
                <Link href="/#woningcheck" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-colors">
                  Start woningcheck
                  <ArrowRight size={16} />
                </Link>
                <p className="mt-4 flex items-center gap-2 text-xs text-white/70">
                  <ShieldCheck size={14} className="text-amber-400" />
                  Uw gegevens zijn veilig en worden vertrouwelijk behandeld.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "100% vrijblijvend",
                  "Geen verplichtingen",
                  "Binnen enkele minuten resultaat",
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
