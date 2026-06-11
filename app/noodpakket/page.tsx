/* Subpagina Noodpakket - inhoud klantmockup dd 22-5-2026, vormgeving = site design-systeem */

import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import {
  ArrowRight,
  Home as HomeIcon,
  ShieldCheck,
  Backpack,
  MapPin,
  Droplets,
  Flashlight,
  Radio,
  HeartPulse,
  Shirt,
  FileText,
  Snowflake,
  Battery,
  Activity,
  TriangleAlert,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noodpakket voor thuis — NCDE",
  description: "Wees voorbereid op stroomuitval of noodsituaties. Complete checklist voor een noodpakket voor minimaal 72 uur.",
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

const checklist = [
  {
    Icon: Droplets,
    t: "Water en eten",
    items: [
      "Minimaal 3 liter water per persoon per dag",
      "Houdbaar eten: blikvoer, crackers en noten",
      "Handmatige blikopener",
      "Babyvoeding of dieetvoeding indien nodig",
    ],
  },
  {
    Icon: Flashlight,
    t: "Licht en stroom",
    items: [
      "Zaklamp of hoofdlamp",
      "Extra batterijen",
      "Powerbank volledig opgeladen",
      "Kaarsen en lucifers of aansteker",
    ],
  },
  {
    Icon: Radio,
    t: "Communicatie",
    items: [
      "Radio op batterijen of opwindbare radio",
      "Opladers voor telefoon",
      "Belangrijke nummers op papier",
      "Fluitje om aandacht te trekken",
    ],
  },
  {
    Icon: HeartPulse,
    t: "Zorg en hygiëne",
    items: [
      "EHBO-set",
      "Medicijnen voor minimaal enkele dagen",
      "Toiletpapier en vochtige doekjes",
      "Desinfectiemiddel en vuilniszakken",
    ],
  },
  {
    Icon: Shirt,
    t: "Warmte en bescherming",
    items: [
      "Warme dekens of slaapzakken",
      "Regenkleding",
      "Extra kleding",
      "Thermofolie of isolatiedeken",
    ],
  },
  {
    Icon: FileText,
    t: "Documenten en geld",
    items: [
      "Kopie van identiteitsbewijs",
      "Verzekeringsgegevens",
      "Contant geld in kleine biljetten",
      "Reservesleutels",
    ],
  },
];

const energiezekerheid = [
  { Icon: Snowflake, t: "Isolatie", d: "Goede isolatie helpt warmte langer vast te houden bij tijdelijke uitval van verwarming. Ook zonder stroom of gas blijft uw woning langer op temperatuur." },
  { Icon: Battery, t: "Thuisbatterij", d: "Een thuisbatterij kan bijdragen aan meer grip op eigen energiegebruik, afhankelijk van systeem en aansluiting op uw installatie." },
  { Icon: Activity, t: "Slim energieverbruik", d: "Inzicht in verbruik helpt u bewuster omgaan met elektriciteit, vooral bij hogere energieprijzen of beperkte netbeschikbaarheid." },
];

export default function NoodpakketPage() {
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
          <MobileMenu active="/noodpakket" />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: "#015C39" }}>
        <div className="cx relative z-10 py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} /> Voorbereid wonen
              </span>
              <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl">
                Noodpakket voor<br /><span className="text-amber-400">thuis</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Wees voorbereid op stroomuitval, extreem weer, digitale storingen of andere noodsituaties. Met een goed noodpakket kunt u uzelf en uw gezin tijdelijk veilig en zelfstandig redden.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li>✓ Voor stroomuitval en storingen</li>
                <li>✓ Basisvoorzieningen voor minimaal 72 uur</li>
                <li>✓ Praktisch, overzichtelijk en direct toepasbaar</li>
              </ul>
              <a href="#checklist" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
                Bekijk checklist
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
              <img src="/homepagina 2/Noodpakket.png" alt="Noodpakket voor thuis" className="block h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAAROM ===== */}
      <section className="bg-brand-50 py-14 md:py-16">
        <div className="cx grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Waarom een noodpakket?</p>
            <h2 className="mt-3 font-display text-2xl font-black uppercase leading-[1.15] text-brand-800 md:text-3xl">
              Bij een storing kunnen veel dingen tegelijk uitvallen
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Bij een storing of noodsituatie kunnen elektriciteit, internet, verwarming, winkels, pinautomaten of openbaar vervoer tijdelijk uitvallen. Een noodpakket helpt u om de eerste dagen zelfredzaam te blijven zonder afhankelijk te zijn van hulp van buitenaf.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-[var(--shadow-card)]">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Wat is een noodpakket?</p>
            <p className="mt-3 text-sm text-gray-700">
              Een noodpakket is een verzameling basisproducten die u thuis klaar heeft liggen voor onverwachte situaties. Het doel is rust en zekerheid geven, geen paniek.
            </p>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  <Backpack size={18} />
                </div>
                <div>
                  <p className="font-display text-base font-bold text-brand-900">Wat hoort erin?</p>
                  <p className="mt-1 text-sm text-gray-700">
                    Denk aan drinkwater, houdbaar eten, verlichting, een radio, medicijnen, contant geld en kopieën van belangrijke documenten. Zorg dat u en uw huishouden minimaal 72 uur vooruit kunnen zonder externe hulp.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-display text-base font-bold text-brand-900">Waar bewaart u het?</p>
                  <p className="mt-1 text-sm text-gray-700">
                    Bewaar het noodpakket op een vaste, droge en goed bereikbare plek. Zorg dat alle gezinsleden weten waar het pakket ligt. Controleer minimaal twee keer per jaar de houdbaarheid en laadstatus van batterijen en powerbanks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cx mt-6">
          <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
            <ShieldCheck size={18} className="mt-0.5 shrink-0 text-amber-600" />
            <p className="text-sm text-amber-900">
              <strong>Advies:</strong> zorg dat uw huishouden minimaal 72 uur vooruit kan met water, voedsel, verlichting, communicatie en basiszorg. Gebruik een stevige afsluitbare box met een interne checklist.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CHECKLIST ===== */}
      <section id="checklist" className="bg-white py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Checklist</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Checklist noodpakket
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            Zes categorieën die samen een compleet basispakket vormen voor minimaal 72 uur zelfredzaamheid.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {checklist.map((c) => (
              <div key={c.t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                    <c.Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-black text-brand-800">{c.t}</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-brand-300 bg-brand-50 text-[10px] font-bold text-brand-700">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENERGIEZEKERHEID ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Noodpakket en energiezekerheid</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl">
            Voorbereid én energiezuinig
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-700">
            Bij NCDE kijken wij niet alleen naar verduurzaming, maar ook naar zekerheid en comfort. Een energiezuinige woning is ook een veerkrachtige woning.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {energiezekerheid.map(({ Icon, t, d }) => (
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
              <strong>Let op:</strong> niet elke thuisbatterij werkt automatisch als noodstroomvoorziening. Vraag altijd na of back-upfunctionaliteit aanwezig is bij uw installateur.
            </p>
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
                  Voorbereid én energiezuinig wonen?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                  NCDE helpt u met duidelijk inzicht in verduurzaming, energiebesparing, comfort en slimme oplossingen voor uw woning.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-colors">
                    Vraag vrijblijvend advies aan
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/#oplossingen" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-colors">
                    Bekijk oplossingen
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Praktisch advies voor uw woning",
                  "Inzicht in energiebesparing",
                  "Betrouwbare partners en installateurs",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-brand-900">✓</span>
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
