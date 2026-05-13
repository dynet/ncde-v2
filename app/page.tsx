type Benefit = {
  icon: string;
  title: string;
  body: string;
  highlight: string;
  bg: string;
};

type Solution = {
  icon: string;
  title: string;
  body: string;
  bg: string;
};

type Subsidy = {
  icon: string;
  title: string;
  body: string;
  tag: string;
  bg: string;
};

type Step = {
  n: string;
  title: string;
  body: string;
};

const benefits: Benefit[] = [
  {
    icon: "🐷",
    title: "Besparing op energiekosten",
    body: "Verlaag direct uw maandlasten door minder energieverbruik en efficiëntere installaties.",
    highlight: "Minder verbruik = direct voordeel.",
    bg: "bg-pastel-green",
  },
  {
    icon: "🏠",
    title: "Meer woningwaarde (energielabel)",
    body: "Een beter energielabel verhoogt de waarde van uw woning.",
    highlight: "Investeren in duurzaamheid = investeren in uw woning.",
    bg: "bg-pastel-yellow",
  },
  {
    icon: "🛋️",
    title: "Meer comfort in huis",
    body: "Een goed geïsoleerde woning met slimme installaties zorgt voor een stabiel binnenklimaat.",
    highlight: "Warmer in de winter, koeler in de zomer.",
    bg: "bg-pastel-blue",
  },
  {
    icon: "☀️",
    title: "Einde salderingsregeling (2027)",
    body: "Vanaf 2027 wordt terugleveren van stroom minder voordelig.",
    highlight: "Slim omgaan met eigen energie wordt essentieel.",
    bg: "bg-pastel-cream",
  },
  {
    icon: "⚡",
    title: "Netcongestie & leveringszekerheid",
    body: "Het elektriciteitsnet raakt steeds voller, waardoor teruglevering en aansluiting beperkter worden.",
    highlight: "Zelfvoorzienend worden geeft zekerheid.",
    bg: "bg-pastel-purple",
  },
  {
    icon: "🌍",
    title: "Klimaat & toekomstbestendigheid",
    body: "Door te verduurzamen draagt u bij aan een beter klimaat.",
    highlight: "Voor uzelf én volgende generaties.",
    bg: "bg-pastel-green",
  },
];

const solutions: Solution[] = [
  { icon: "🏡", title: "Isolatie", body: "Bespaar energie en verhoog comfort.", bg: "bg-pastel-blue" },
  { icon: "☀️", title: "Zonnepanelen", body: "Wek uw eigen stroom op en bespaar.", bg: "bg-pastel-yellow" },
  { icon: "🌡️", title: "Warmtepomp", body: "Duurzaam verwarmen, minder gas gebruiken.", bg: "bg-pastel-pink" },
  { icon: "🔋", title: "Thuisbatterij", body: "Sla stroom op en gebruik slim.", bg: "bg-pastel-purple" },
  { icon: "🌬️", title: "Ventilatie", body: "Gezond binnenklimaat, minder energieverlies.", bg: "bg-pastel-green" },
  { icon: "🔌", title: "Laadpaal", body: "Duurzaam laden, klaar voor de toekomst.", bg: "bg-pastel-green" },
];

const energyLabels: { label: string; width: string; color: string }[] = [
  { label: "A++++", width: "100%", color: "#00843d" },
  { label: "A+++", width: "100%", color: "#00843d" },
  { label: "A++", width: "88%", color: "#4caf50" },
  { label: "A+", width: "88%", color: "#4caf50" },
  { label: "B", width: "76%", color: "#b3c833" },
  { label: "C", width: "64%", color: "#ffc107" },
  { label: "D", width: "52%", color: "#ff9800" },
  { label: "E", width: "42%", color: "#f44336" },
  { label: "F", width: "42%", color: "#f44336" },
  { label: "G", width: "32%", color: "#d50000" },
];

const subsidies: Subsidy[] = [
  {
    icon: "🏡",
    title: "ISDE-subsidie",
    body: "Voor isolatie, warmtepompen en zonneboilers. Deze landelijke subsidie kan de investering aanzienlijk verlagen.",
    tag: "Voor eigenaar-bewoners",
    bg: "bg-pastel-green",
  },
  {
    icon: "☀️",
    title: "Zonnepanelen",
    body: "Voor zonnepanelen geldt 0% btw. Dit verlaagt de aanschafkosten en maakt opwekking van eigen stroom aantrekkelijk.",
    tag: "0% btw-regeling",
    bg: "bg-pastel-yellow",
  },
  {
    icon: "🏢",
    title: "Gemeentelijke regelingen",
    body: "Veel gemeenten bieden extra ondersteuning, zoals isolatiesubsidies, energieadvies of wijkgerichte acties.",
    tag: "Afhankelijk van gemeente",
    bg: "bg-pastel-blue",
  },
  {
    icon: "🏬",
    title: "VvE-subsidies",
    body: "Voor appartementen en VvE's bestaan aparte regelingen voor advies, onderzoek, isolatie en duurzame installaties.",
    tag: "SVVE-regeling",
    bg: "bg-pastel-purple",
  },
];

const steps: Step[] = [
  { n: "1", title: "Woning bekijken", body: "We brengen de woning en mogelijke maatregelen in kaart." },
  { n: "2", title: "Regelingen checken", body: "We bekijken welke subsidies en financiering mogelijk passen." },
  { n: "3", title: "Besparing berekenen", body: "We geven inzicht in kosten, voordeel en terugverdientijd." },
  { n: "4", title: "Keuze maken", body: "De bewoner kiest zelf wat passend en haalbaar is." },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-6 py-[18px]">
          <div className="flex items-center gap-3">
            <div className="grid h-[58px] w-[140px] place-items-center rounded bg-ncde-sage text-sm font-bold text-ncde-primary">
              NCDE
            </div>
          </div>
          <nav className="hidden gap-3 md:flex">
            <a className="mx-3 text-[15px] font-semibold text-ncde-primary" href="#">Home</a>
            <a className="mx-3 text-[15px] font-semibold text-[#1f2933]" href="#over">Over ons</a>
            <a className="mx-3 text-[15px] font-semibold text-[#1f2933]" href="#doen">Wat we doen</a>
            <a className="mx-3 text-[15px] font-semibold text-[#1f2933]" href="#kennis">Kennis &amp; inspiratie</a>
            <a className="mx-3 text-[15px] font-semibold text-[#1f2933]" href="#nieuws">Nieuws</a>
            <a className="mx-3 text-[15px] font-semibold text-[#1f2933]" href="#contact">Contact</a>
          </nav>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-ncde-primary px-5 py-[13px] font-bold text-white"
            href="#contact"
          >
            ✉ Neem contact op
          </a>
        </div>
      </header>

      <main>
        <section className="relative mx-auto min-h-[520px] max-w-none overflow-hidden bg-gradient-to-r from-ncde-sage via-white to-pastel-green px-6 py-[58px]">
          <div className="mx-auto grid max-w-[1180px] items-center gap-[34px] md:grid-cols-2">
            <div>
              <h5 className="mb-3 text-[15px] font-semibold uppercase tracking-[0.8px] text-ncde-primary">
                Samen naar een duurzame toekomst
              </h5>
              <h1 className="mb-5 text-[clamp(38px,5vw,60px)] leading-[1.05] text-ncde-primary-dark">
                Samen werken aan duurzame energie voor iedereen
              </h1>
              <p className="max-w-[520px] text-lg text-ncde-muted">
                Wij versterken collectieven en gemeenten bij het versnellen van de lokale energietransitie.
              </p>
              <p className="max-w-[520px] text-lg text-ncde-muted">
                Met onafhankelijk advies, praktische oplossingen en betrouwbare partners.
              </p>
              <div className="mt-[26px] flex flex-wrap gap-[14px]">
                <a className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-ncde-primary px-5 py-[13px] font-bold text-white" href="#doen">
                  👥 Wat we doen
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border-2 border-ncde-primary bg-white px-5 py-[11px] font-bold text-ncde-primary"
                  href="#oplossingen"
                >
                  → Bekijk alle oplossingen
                </a>
              </div>
            </div>
            <div
              className="min-h-[440px] rounded-[28px] bg-gradient-to-br from-ncde-accent/40 to-ncde-sage shadow-[var(--shadow-card)]"
              aria-label="Nederlandse woning met zonnepanelen en warmtepomp (placeholder)"
            />
          </div>

          <div className="mx-auto mt-8 grid max-w-[1180px] grid-cols-1 gap-[14px] rounded-[18px] bg-white/95 p-[18px] shadow-[var(--shadow-card)] md:grid-cols-3">
            <div className="flex items-start gap-3 border-b border-[#e5e7eb] pb-3 md:border-b-0 md:border-r md:pb-0 md:pr-3">
              <div className="text-3xl">🧮</div>
              <div>
                <strong className="block text-ncde-primary">Duidelijk inzicht</strong>
                <span className="text-[13px] text-ncde-muted">Kosten, besparing en terugverdientijd</span>
              </div>
            </div>
            <div className="flex items-start gap-3 border-b border-[#e5e7eb] pb-3 md:border-b-0 md:border-r md:pb-0 md:pr-3">
              <div className="text-3xl">🐷</div>
              <div>
                <strong className="block text-ncde-primary">Subsidies</strong>
                <span className="text-[13px] text-ncde-muted">Bekijk waar u recht op heeft</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-3xl">🔧</div>
              <div>
                <strong className="block text-ncde-primary">Betrouwbare uitvoerders</strong>
                <span className="text-[13px] text-ncde-muted">Geselecteerd op kwaliteit</span>
              </div>
            </div>
          </div>
        </section>

        <section id="doen" className="mx-auto max-w-[1180px] px-6 py-[34px]">
          <h2 className="mb-[22px] text-center text-2xl font-semibold uppercase tracking-[0.6px] text-ncde-primary">
            Waarom nu verduurzamen?
          </h2>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className={`min-h-[230px] rounded-[18px] border border-black/[0.04] p-[22px_18px] text-center shadow-[var(--shadow-soft)] ${b.bg}`}
              >
                <div className="mx-auto mb-3 grid h-[72px] w-[72px] place-items-center rounded-full bg-ncde-primary/10 text-[38px]">
                  {b.icon}
                </div>
                <h3 className="mb-[10px] text-[17px] leading-tight text-[#1f2933]">{b.title}</h3>
                <p className="m-0 text-sm text-ncde-muted">{b.body}</p>
                <strong className="mt-3 block text-sm text-ncde-primary">{b.highlight}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="oplossingen" className="mx-auto max-w-[1180px] px-6 py-[34px]">
          <h2 className="mb-[22px] text-center text-2xl font-semibold uppercase tracking-[0.6px] text-ncde-primary">
            Ontdek wat bij uw woning past
          </h2>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {solutions.map((s) => (
              <div
                key={s.title}
                className={`min-h-[230px] rounded-[18px] border border-black/[0.04] p-[22px_18px] text-left shadow-[var(--shadow-soft)] ${s.bg}`}
              >
                <div className="mb-3 grid h-[72px] w-[72px] place-items-center rounded-full bg-ncde-primary/10 text-[38px]">
                  {s.icon}
                </div>
                <h3 className="mb-[10px] text-[17px] leading-tight text-[#1f2933]">{s.title}</h3>
                <p className="m-0 text-sm text-ncde-muted">{s.body}</p>
                <div className="mt-[14px] text-sm font-extrabold text-ncde-primary">Lees meer →</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 py-[34px]">
          <div className="grid items-center gap-7 rounded-3xl bg-white p-[34px] shadow-[var(--shadow-card)] md:grid-cols-3">
            <div>
              <h5 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ncde-primary">
                Verbeter uw energielabel
              </h5>
              <h2 className="mb-3 text-[32px] leading-[1.1] text-ncde-primary">
                Meer waarde, minder kosten, beter voor het milieu
              </h2>
              <p className="mb-4 text-ncde-muted">
                Met de juiste maatregelen verhoogt u uw energielabel, bespaart u op kosten en draagt u bij aan een duurzame toekomst.
              </p>
              <a className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-ncde-primary px-5 py-[13px] font-bold text-white" href="#contact">
                Ontdek uw mogelijkheden →
              </a>
            </div>
            <div className="space-y-1">
              {energyLabels.map((lbl, i) => (
                <div
                  key={`${lbl.label}-${i}`}
                  className="h-[26px] rounded-r-[14px] pl-3 font-bold text-white"
                  style={{ width: lbl.width, background: lbl.color }}
                >
                  {lbl.label}
                </div>
              ))}
            </div>
            <div className="space-y-2 text-[#1f2933]">
              <p className="m-0"><span className="mr-[10px] font-bold text-ncde-primary">✓</span>Lagere energiekosten</p>
              <p className="m-0"><span className="mr-[10px] font-bold text-ncde-primary">✓</span>Meer wooncomfort</p>
              <p className="m-0"><span className="mr-[10px] font-bold text-ncde-primary">✓</span>Hogere woningwaarde</p>
              <p className="m-0"><span className="mr-[10px] font-bold text-ncde-primary">✓</span>Beter voor het milieu</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 py-[34px]">
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[1.2fr_1fr_1fr]">
            <div className="rounded-[20px] bg-gradient-to-br from-ncde-primary-dark to-ncde-primary p-[26px] text-white">
              <h2 className="mb-3 text-[28px] leading-tight">Onafhankelijk advies waar u op kunt vertrouwen</h2>
              <p className="m-0">
                ✓ Vrijblijvend en persoonlijk advies<br />
                ✓ Inzicht in kosten, besparing en subsidies<br />
                ✓ Geselecteerde betrouwbare uitvoerders<br />
                ✓ Van plan tot en met realisatie
              </p>
            </div>
            <div className="rounded-[20px] bg-white p-[26px] shadow-[var(--shadow-soft)]">
              <h3 className="mb-2 text-[17px] text-[#1f2933]">Noodpakket</h3>
              <p className="text-sm text-ncde-muted">Bereid u voor op een stroomuitval en blijf zelfvoorzienend.</p>
              <strong className="mt-3 block text-sm text-ncde-primary">Meer informatie →</strong>
            </div>
            <div className="rounded-[20px] bg-white p-[26px] shadow-[var(--shadow-soft)]">
              <h3 className="mb-2 text-[17px] text-[#1f2933]">Actueel: salderingsregeling</h3>
              <p className="text-sm text-ncde-muted">Vanaf 2027 wordt de salderingsregeling afgeschaft. Lees wat dit betekent.</p>
              <strong className="mt-3 block text-sm text-ncde-primary">Meer informatie →</strong>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 py-[34px]">
          <div className="grid grid-cols-1 gap-5 rounded-3xl bg-white p-6 shadow-[var(--shadow-card)] sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <strong className="block text-[26px] text-ncde-primary">100%</strong>
              <span className="text-sm text-ncde-muted">Onafhankelijk advies</span>
            </div>
            <div>
              <strong className="block text-[26px] text-ncde-primary">10.000+</strong>
              <span className="text-sm text-ncde-muted">Huiseigenaren geholpen</span>
            </div>
            <div>
              <strong className="block text-[26px] text-ncde-primary">Landelijk</strong>
              <span className="text-sm text-ncde-muted">Advies en ondersteuning door heel Nederland</span>
            </div>
            <div>
              <strong className="block text-[26px] text-ncde-primary">4,8/5</strong>
              <span className="text-sm text-ncde-muted">Klantwaardering</span>
            </div>
          </div>
        </section>

        <section id="subsidies-financiering" className="bg-[#f4f8f6] px-6 py-[70px]">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-[34px] rounded-[28px] bg-gradient-to-br from-white to-pastel-green p-[42px] shadow-[var(--shadow-card)]">
              <p className="mb-[10px] font-extrabold uppercase tracking-[0.8px] text-ncde-primary">
                Subsidies &amp; financiering
              </p>
              <h1 className="mb-4 max-w-[820px] text-[clamp(34px,5vw,54px)] leading-[1.05] text-ncde-primary-dark">
                Verduurzaam uw woning met financiële ondersteuning
              </h1>
              <p className="max-w-[780px] text-lg text-ncde-muted">
                Voor veel huishoudens zijn subsidies en financieringsmogelijkheden belangrijk om verduurzaming haalbaar en betaalbaar te maken. NCDE helpt bewoners inzicht te krijgen in beschikbare regelingen, mogelijke besparingen en passende financiering.
              </p>
              <div className="mt-[22px] flex flex-wrap gap-[14px]">
                <a className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-ncde-primary px-5 py-[13px] font-bold text-white" href="#contact">
                  Vraag een subsidiecheck aan
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border-2 border-ncde-primary bg-white px-5 py-[11px] font-bold text-ncde-primary"
                  href="#financiering"
                >
                  Bekijk financiering
                </a>
              </div>
            </div>

            <div className="mb-[34px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
              {subsidies.map((s) => (
                <div
                  key={s.title}
                  className={`min-h-[260px] rounded-[22px] p-6 shadow-[var(--shadow-soft)] ${s.bg}`}
                >
                  <div className="mb-3 grid h-[72px] w-[72px] place-items-center rounded-full bg-ncde-primary/10 text-[38px]">
                    {s.icon}
                  </div>
                  <h3 className="mb-[10px] text-[#1f2933]">{s.title}</h3>
                  <p className="text-[15px] text-ncde-muted">{s.body}</p>
                  <strong className="mt-[14px] block text-ncde-primary">{s.tag}</strong>
                </div>
              ))}
            </div>

            <div id="financiering" className="mb-[34px] grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
                <p className="mb-[10px] font-extrabold uppercase tracking-[0.8px] text-ncde-primary">
                  Financiering
                </p>
                <h2 className="mb-4 text-[30px] leading-[1.15] text-ncde-primary">
                  Verduurzamen zonder alles vooraf te betalen
                </h2>
                <p className="mb-4 text-ncde-muted">
                  Niet iedereen heeft direct spaargeld beschikbaar om de woning te verduurzamen. Daarom zijn er financieringsmogelijkheden waarmee bewoners de investering kunnen spreiden.
                </p>
                <ul className="list-disc space-y-3 pl-5 text-ncde-muted">
                  <li><strong className="text-[#1f2933]">Energiebespaarlening:</strong> financiering via het Nationaal Warmtefonds voor energiebesparende maatregelen.</li>
                  <li><strong className="text-[#1f2933]">Hypotheek verhogen:</strong> extra financiering voor verduurzaming via de hypotheekadviseur of bank.</li>
                  <li><strong className="text-[#1f2933]">VvE-financiering:</strong> gezamenlijke financiering voor appartementencomplexen via de VvE.</li>
                  <li><strong className="text-[#1f2933]">Gemeentelijke leningen:</strong> sommige gemeenten bieden aanvullende duurzaamheidsleningen.</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-ncde-primary-dark to-ncde-primary p-8 text-white shadow-[var(--shadow-card)]">
                <h3 className="mt-0 text-[28px]">Slim combineren</h3>
                <p>De beste aanpak is vaak een combinatie van subsidie en financiering.</p>
                <div className="my-[22px] grid gap-[10px]">
                  <span className="rounded-2xl border border-white/25 bg-white/15 px-[14px] py-3 text-center font-extrabold">Subsidie</span>
                  <span className="rounded-2xl border border-white/25 bg-white/15 px-[14px] py-3 text-center font-extrabold">+</span>
                  <span className="rounded-2xl border border-white/25 bg-white/15 px-[14px] py-3 text-center font-extrabold">Lening</span>
                  <span className="rounded-2xl border border-white/25 bg-white/15 px-[14px] py-3 text-center font-extrabold">=</span>
                  <span className="rounded-2xl border border-white/25 bg-white/15 px-[14px] py-3 text-center font-extrabold">Betaalbare verduurzaming</span>
                </div>
                <p>Zo wordt de investering lager, terwijl de woning direct energiezuiniger en comfortabeler wordt.</p>
              </div>
            </div>

            <div className="mb-[34px] rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
              <h2 className="mb-6 mt-0 text-[30px] leading-[1.15] text-ncde-primary">Hoe NCDE bewoners helpt</h2>
              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                  <div key={step.n} className="rounded-[18px] bg-[#f4f8f6] p-5">
                    <span className="mb-3 grid h-[38px] w-[38px] place-items-center rounded-full bg-ncde-primary text-base font-black text-white">
                      {step.n}
                    </span>
                    <h3 className="mb-2 mt-0">{step.title}</h3>
                    <p className="m-0 text-ncde-muted">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-pastel-yellow p-8 text-center shadow-[var(--shadow-card)]">
              <h2 className="mb-3 mt-0 text-[30px] leading-[1.15] text-ncde-primary">
                Wilt u weten welke subsidie of financiering bij uw woning past?
              </h2>
              <p className="mb-5 text-ncde-muted">
                Vraag een vrijblijvende check aan en ontvang een helder overzicht van uw mogelijkheden.
              </p>
              <a className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-ncde-primary px-5 py-[13px] font-bold text-white" href="#contact">
                Start gratis subsidie- en financieringscheck
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="px-6 py-[34px] text-center font-extrabold text-ncde-primary">
        Samen maken we Nederland duurzaam.
      </footer>
    </>
  );
}
