/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Home as HomeIcon, Menu } from "lucide-react";
import Link from "next/link";
import { 
  KnightShieldIcon, 
  EyeIcon, 
  GlobeIcon,
  BalanceScaleIcon,
  Leaf01Icon,
  IdeaIcon,
  AddTeamIcon
} from "hugeicons-react";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
);

const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 5.58 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 006.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 001.53-.78 2.49 2.49 0 00.61-1 10.58 10.58 0 00.52-3.4c.04-.56.04-3.94.04-4.64zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/></svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

export default function OverOns() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/95 shadow-[var(--shadow-soft)] backdrop-blur-md">
        <div className="cx flex h-24 items-center justify-between">
          <Link href="/" aria-label="NCDE — Nationaal Collectief Duurzame Energie home" className="block h-16 w-[200px] overflow-hidden shrink-0">
            <img src="/this one.svg" alt="NCDE" className="h-[5.6rem] w-auto max-w-none object-cover object-top" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Home</Link>
            <a href="/over-ons" className="relative text-sm font-semibold text-brand-600">
              Over ons
              <span className="absolute -bottom-[29px] left-0 right-0 h-[3px] rounded-full bg-brand-600"></span>
            </a>
            <a href="#" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Subsidies & Financiering</a>
            <a href="#" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Partners</a>
            <a href="#" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Nieuws</a>
            <a href="#" className="text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors">Contact</a>
          </nav>
          <Link href="/" className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
            <HomeIcon size={17} /> Start woningcheck
          </Link>
          <button className="lg:hidden rounded-md p-2 text-brand-700" aria-label="Menu">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative isolate min-h-[580px] flex items-center overflow-hidden">
        <img src="/hero-home.jpg" alt="" aria-hidden className="absolute inset-0 z-0 h-full w-full object-cover object-center" />
        <div aria-hidden className="absolute inset-0 z-10" style={{ background: "linear-gradient(100deg, rgba(241,250,245,1) 0%, rgba(241,250,245,.97) 30%, rgba(241,250,245,.82) 50%, rgba(241,250,245,.3) 68%, transparent 82%)" }}></div>
        <div className="cx relative z-20 py-20 w-full">
          <div className="max-w-[720px]">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand-600 mb-5">Over NCDE</p>
            <h1 className="font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl lg:text-[2.75rem]">
              Over ons
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-800 md:text-lg max-w-md">
              NCDE is het onafhankelijke kennis- en adviescentrum voor huiseigenaren en bewoners die hun woning willen verduurzamen. Wij maken verduurzamen eenvoudig, duidelijk en toegankelijk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-4 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all">
                Start woningcheck <ArrowRight size={18} />
              </Link>
              <a href="#hoe-werken" className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-600 bg-white/80 px-6 py-4 text-sm font-bold text-brand-600 hover:bg-brand-50 transition-all">
                Bekijk hoe wij werken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT: TIJDLIJN + MISSIE/VISIE + WAARDEN ===== */}
      <section className="bg-brand-50 py-20">
        <div className="cx grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Links: tijdlijn */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Onze ontstaansgeschiedenis</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-800">Van idee tot impact</h2>
            <div className="mt-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-600"></div>
              <div className="space-y-8">
                <div className="relative pl-10">
                  <span className="absolute -left-[37px] top-1 w-[18px] h-[18px] bg-white border-[5px] border-brand-600 rounded-full"></span>
                  <span className="inline-block bg-brand-600 text-white rounded-md px-3 py-1 text-xs font-extrabold mb-2">2024</span>
                  <b className="block text-base font-bold text-gray-900 mb-1">Het idee</b>
                  <p className="text-sm text-gray-700">Het idee voor NCDE ontstaat vanuit de behoefte aan duidelijke, onafhankelijke en praktische informatie over het verduurzamen van woningen.</p>
                </div>
                <div className="relative pl-10">
                  <span className="absolute -left-[37px] top-1 w-[18px] h-[18px] bg-white border-[5px] border-brand-600 rounded-full"></span>
                  <span className="inline-block bg-brand-600 text-white rounded-md px-3 py-1 text-xs font-extrabold mb-2">2025</span>
                  <b className="block text-base font-bold text-gray-900 mb-1">Oprichting NCDE</b>
                  <p className="text-sm text-gray-700">De stichting Nationaal Collectief Duurzame Energie wordt opgericht met als doel verduurzaming toegankelijk, transparant en datagedreven te maken.</p>
                </div>
                <div className="relative pl-10">
                  <span className="absolute -left-[37px] top-1 w-[18px] h-[18px] bg-white border-[5px] border-brand-600 rounded-full"></span>
                  <span className="inline-block bg-brand-600 text-white rounded-md px-3 py-1 text-xs font-extrabold mb-2">2026</span>
                  <b className="block text-base font-bold text-gray-900 mb-1">Website-lancering</b>
                  <p className="text-sm text-gray-700">De website van NCDE wordt gelanceerd met informatie over woningverduurzaming, subsidies, advies op maat en betrouwbare uitvoerders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechts: missie/visie + stichting */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Onze missie & visie</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 border border-sky-100 p-6 transition-all hover:-translate-y-1">
                <BalanceScaleIcon size={40} className="text-brand-600 mb-3" />
                <p className="text-xs font-bold uppercase text-brand-600 mb-1">Onze missie</p>
                <h3 className="font-display text-lg font-extrabold text-brand-800 mb-2">Slimme en duurzame keuzes voor iedereen</h3>
                <p className="text-sm text-gray-700">NCDE helpt huiseigenaren en bewoners bij het maken van slimme en duurzame keuzes door onafhankelijk, datagedreven en praktisch advies.</p>
              </div>
              <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6 transition-all hover:-translate-y-1">
                <GlobeIcon size={40} className="text-amber-700 mb-3" />
                <p className="text-xs font-bold uppercase text-amber-700 mb-1">Onze visie</p>
                <h3 className="font-display text-lg font-extrabold text-brand-800 mb-2">Iedere woning duurzaam en betaalbaar</h3>
                <p className="text-sm text-gray-700">Wij streven naar een toekomst waarin iedere woning in Nederland op een toegankelijke, betaalbare en efficiënte manier wordt verduurzaamd.</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1">
              <KnightShieldIcon size={40} className="text-brand-600 mb-3" />
              <p className="text-xs font-bold uppercase text-brand-600 mb-1">Wat voor soort stichting is NCDE?</p>
              <h3 className="font-display text-lg font-extrabold text-brand-800 mb-2">Stichting zonder winstoogmerk</h3>
              <p className="text-sm text-gray-700">NCDE is een onafhankelijke stichting die zich inzet voor het algemeen belang. Wij investeren onze middelen in betrouwbare data, onafhankelijk advies en het versnellen van de energietransitie.</p>
            </div>
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Onze kernwaarden</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-800">Wat ons drijft</h2>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
{[
                   { icon: BalanceScaleIcon, title: "Onafhankelijk", text: "Advies zonder commerciële belangen" },
                   { icon: EyeIcon, title: "Transparant", text: "Duidelijke informatie en eerlijke uitleg" },
                   { icon: KnightShieldIcon, title: "Betrouwbaar", text: "U kunt op ons rekenen" },
                   { icon: AddTeamIcon, title: "Toegankelijk", text: "Voor iedereen begrijpelijk en beschikbaar" },
                   { icon: IdeaIcon, title: "Innovatief", text: "Slimme data en duurzame oplossingen" },
                   { icon: Leaf01Icon, title: "Duurzaam", text: "Bijdragen aan een betere toekomst" },
                 ].map((v) => (
                   <div key={v.title} className="rounded-xl p-4 text-center bg-purple-50 transition-all hover:-translate-y-1">
                     <v.icon size={32} className="text-brand-600 mb-2" />
                     <b className="block text-sm font-extrabold text-gray-900 mb-1">{v.title}</b>
                    <p className="text-xs text-gray-700">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOE WIJ WERKEN ===== */}
      <section id="hoe-werken" className="py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600 text-center mb-3">Hoe wij werken</p>
          <h2 className="font-display text-3xl font-extrabold text-brand-800 text-center mb-4">Van inzicht naar uitvoering</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">NCDE begeleidt bewoners stap voor stap: van eerste inzicht tot koppeling met een betrouwbare uitvoerder.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Inzicht in mogelijkheden", text: "Wij maken op basis van uw woningdata duidelijk welke verduurzamingsopties passen bij uw situatie." },
              { num: "2", title: "Subsidies & financiering", text: "U krijgt een helder overzicht van regelingen, subsidies en betaalmogelijkheden." },
              { num: "3", title: "Persoonlijk advies", text: "Wij vertalen data naar een concreet advies met prioriteiten en terugverdientijden." },
              { num: "4", title: "Betrouwbare uitvoering", text: "Wij koppelen bewoners aan geselecteerde partners voor vakkundige uitvoering." },
            ].map((s) => (
              <div key={s.num} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white font-extrabold text-xl mb-5">{s.num}</div>
                <h3 className="font-display text-lg font-extrabold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ORGANOGRAM ===== */}
      <section className="bg-brand-50 py-20">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600 mb-3">Onze organisatie</p>
          <h2 className="font-display text-3xl font-extrabold text-brand-800 mb-4">Organogram</h2>
          <p className="text-gray-600 max-w-2xl mb-12">Een heldere organisatiestructuur met focus op bestuur, advies, data, operations en kwaliteitsborging.</p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="text-center">
                <div className="inline-block bg-brand-800 text-white rounded-md px-6 py-3 font-extrabold mb-3">Raad van Toezicht</div>
                <div className="h-6 w-[2px] bg-gray-400 mx-auto mb-2"></div>
                <div className="inline-block bg-brand-600 text-white rounded-md px-6 py-3 font-extrabold mb-3">Bestuur</div>
                <div className="h-6 w-[2px] bg-gray-400 mx-auto mb-2"></div>
                <div className="h-6 max-w-md bg-gray-400 mx-auto mb-3"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {["Directeur", "Team Data & Advies", "Team Operations", "Team Kwaliteit"].map((t) => (
                    <div key={t} className="rounded-md border border-gray-200 bg-white p-3 text-xs">
                      <b className="block text-gray-900 mb-1">{t}</b>
                      <small className="text-gray-500">
                        {t === "Directeur" ? "Strategie & Partnerships" : t === "Team Data & Advies" ? "Analyse & Ontwikkeling" : t === "Team Operations" ? "Platform & Klant" : "Uitvoerders & Controle"}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-600 mb-4">Bestuursleden</p>
              <div className="space-y-5">
                {[
                  { name: "Jeroen van der Meer", role: "Voorzitter", bio: "Expert in energietransitie en organisatieontwikkeling." },
                  { name: "Sophie de Groot", role: "Secretaris", bio: "Specialist in duurzaamheid en beleid." },
                  { name: "Mark van der Heijden", role: "Penningmeester", bio: "Financieel strateeg en risicomanagement." },
                  { name: "Lisa Bakker", role: "Bestuurslid", bio: "Data & Innovatie — gedreven voorvechter van digitale oplossingen." },
                ].map((m) => (
                  <div key={m.name} className="border-b border-gray-200 pb-5 last:border-0 last:pb-0">
                    <b className="block text-base font-extrabold text-gray-900">{m.name}</b>
                    <span className="text-xs font-bold text-brand-600 block mb-1">{m.role}</span>
                    <p className="text-sm text-gray-600">{m.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-white py-12 md:py-16">
        <div className="cx">
          <div className="rounded-2xl bg-gradient-to-r from-brand-800 to-green-900 p-8 md:p-12 shadow-[var(--shadow-elevated)] flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h2 className="font-display text-3xl font-extrabold">Klaar om te verduurzamen?</h2>
              <p className="mt-2 text-white/75">Ontdek wat uw woning kan besparen. Start vandaag nog.</p>
            </div>
            <Link href="/" className="shrink-0 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-bold text-brand-600 hover:bg-brand-50 transition-all">
              Start woningcheck <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-brand-800">
        <div className="cx py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <img src="/logo/Group 39895.svg" alt="NCDE" className="h-20 w-auto object-contain" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100">Samen maken we Nederland duurzaam.</p>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-brand-200 hover:bg-white hover:text-brand-700 transition-all">
                  <LinkedinIcon />
                </a>
                <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-brand-200 hover:bg-white hover:text-brand-700 transition-all">
                  <YoutubeIcon />
                </a>
                <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-brand-200 hover:bg-white hover:text-brand-700 transition-all">
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5">
              <div>
                <h4 className="font-display text-sm font-bold text-white">Pagina&apos;s</h4>
                <ul className="mt-3 space-y-2">
{["Home", "Over ons", "Subsidies & Financiering", "Partners", "Nieuws", "Contact"].map((t) => (
                     <li key={t}><Link href={t === "Home" ? "/" : t === "Over ons" ? "/over-ons" : "#"} className="text-sm text-brand-200 hover:text-white">{t}</Link></li>
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
