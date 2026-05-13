/* 1-op-1 overgenomen uit Claude Artifex mockup
   Bron: Nirmal Madarie, mail "code homepagina NCDE" — 2026-05-05 09:06
   CSS staat in app/globals.css */

export default function Home() {
  return (
    <>
      <header>
        <div className="nav">
          <div className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Homepagina/Logo final.png" alt="NCDE logo" />
          </div>
          <nav>
            <a className="active" href="#">Home</a>
            <a href="#over">Over ons</a>
            <a href="#subsidies-financiering">Subsidies & Financiering</a>
            <a href="#partners">Partners</a>
            <a href="#nieuws">Nieuws</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary" href="#contact">Start woningcheck</a>
        </div>
      </header>

      <main>
        <section className="hero hero-reference">
          <div className="hero-text">
            <h5>Samen naar een duurzame toekomst</h5>
            <h1>Samen werken aan duurzame energie voor iedereen</h1>
            <p>Wij versterken collectieven en gemeenten bij het versnellen van de lokale energietransitie.</p>
            <p>Met onafhankelijk advies, praktische oplossingen en betrouwbare partners.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#doen">👥 Wat we doen</a>
              <a className="btn btn-outline" href="#oplossingen">→ Bekijk alle oplossingen</a>
            </div>
          </div>
          <div className="hero-photo" aria-label="Nederlandse woning met zonnepanelen en warmtepomp"></div>
          <div className="hero-info-card">
            {/* eslint-disable @next/next/no-img-element */}
            <div className="mini"><div className="mini-thumb"><img src="/Homepagina/duidelijk inzicht.png" alt="" /></div><div><strong>Duidelijk inzicht</strong><span>Kosten, besparing en terugverdientijd</span></div></div>
            <div className="mini"><div className="mini-thumb"><img src="/Homepagina/subsidie.png" alt="" /></div><div><strong>Subsidies</strong><span>Bekijk waar u recht op heeft</span></div></div>
            <div className="mini"><div className="mini-thumb"><img src="/Homepagina/betrouwbare partners.png" alt="" /></div><div><strong>Betrouwbare uitvoerders</strong><span>Geselecteerd op kwaliteit</span></div></div>
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </section>

        <section id="doen">
          <h2 className="section-title">Waarom nu verduurzamen?</h2>
          <div className="grid-6 benefits">
            {/* eslint-disable @next/next/no-img-element */}
            <div className="card pastel-green"><div className="icon"><img src="/Homepagina/besparing op energiekosten.png" alt="" /></div><h3>Besparing op energiekosten</h3><p>Verlaag direct uw maandlasten door minder energieverbruik en efficiëntere installaties.</p><strong>Minder verbruik = direct voordeel.</strong></div>
            <div className="card pastel-yellow"><div className="icon"><img src="/Homepagina/Meer woningwaarde.png" alt="" /></div><h3>Meer woningwaarde (energielabel)</h3><p>Een beter energielabel verhoogt de waarde van uw woning.</p><strong>Investeren in duurzaamheid = investeren in uw woning.</strong></div>
            <div className="card pastel-blue"><div className="icon"><img src="/Homepagina/meer comfort in huis.png" alt="" /></div><h3>Meer comfort in huis</h3><p>Een goed geïsoleerde woning met slimme installaties zorgt voor een stabiel binnenklimaat.</p><strong>Warmer in de winter, koeler in de zomer.</strong></div>
            <div className="card pastel-cream"><div className="icon"><img src="/Homepagina/saldering stopt.png" alt="" /></div><h3>Einde salderingsregeling (2027)</h3><p>Vanaf 2027 wordt terugleveren van stroom minder voordelig.</p><strong>Slim omgaan met eigen energie wordt essentieel.</strong></div>
            <div className="card pastel-purple"><div className="icon"><img src="/Homepagina/netgongestie.png" alt="" /></div><h3>Netcongestie & leveringszekerheid</h3><p>Het elektriciteitsnet raakt steeds voller, waardoor teruglevering en aansluiting beperkter worden.</p><strong>Zelfvoorzienend worden geeft zekerheid.</strong></div>
            <div className="card pastel-green"><div className="icon"><img src="/Homepagina/klimaat.png" alt="" /></div><h3>Klimaat & toekomstbestendigheid</h3><p>Door te verduurzamen draagt u bij aan een beter klimaat.</p><strong>Voor uzelf én volgende generaties.</strong></div>
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </section>

        <section id="oplossingen" className="solutions">
          <h2 className="section-title">Ontdek wat bij uw woning past</h2>
          <div className="grid-6">
            {/* eslint-disable @next/next/no-img-element */}
            <div className="card pastel-blue"><div className="icon"><img src="/Homepagina/isolatie.png" alt="" /></div><h3>Isolatie</h3><p>Bespaar energie en verhoog comfort.</p><div className="readmore">Lees meer →</div></div>
            <div className="card pastel-yellow"><div className="icon"><img src="/Homepagina/zonnepanelen.png" alt="" /></div><h3>Zonnepanelen</h3><p>Wek uw eigen stroom op en bespaar.</p><div className="readmore">Lees meer →</div></div>
            <div className="card pastel-pink"><div className="icon"><img src="/Homepagina/warmtepomp.png" alt="" /></div><h3>Warmtepomp</h3><p>Duurzaam verwarmen, minder gas gebruiken.</p><div className="readmore">Lees meer →</div></div>
            <div className="card pastel-purple"><div className="icon"><img src="/Homepagina/thuisbatterij.png" alt="" /></div><h3>Thuisbatterij</h3><p>Sla stroom op en gebruik slim.</p><div className="readmore">Lees meer →</div></div>
            <div className="card pastel-green"><div className="icon"><img src="/Homepagina/ventilatie.png" alt="" /></div><h3>Ventilatie</h3><p>Gezond binnenklimaat, minder energieverlies.</p><div className="readmore">Lees meer →</div></div>
            <div className="card pastel-green"><div className="icon"><img src="/Homepagina/laadpaal.png" alt="" /></div><h3>Laadpaal</h3><p>Duurzaam laden, klaar voor de toekomst.</p><div className="readmore">Lees meer →</div></div>
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </section>

        <section>
          <div className="label-block">
            <div>
              <h5 style={{ color: "var(--green)", textTransform: "uppercase" }}>Verbeter uw energielabel</h5>
              <h2>Meer waarde, minder kosten, beter voor het milieu</h2>
              <p>Met de juiste maatregelen verhoogt u uw energielabel, bespaart u op kosten en draagt u bij aan een duurzame toekomst.</p>
              <a className="btn btn-primary" href="#contact">Ontdek uw mogelijkheden →</a>
            </div>
            <div className="energy-scale">
              <div className="a">A++++</div><div className="a">A+++</div><div className="b">A++</div><div className="b">A+</div><div className="c">B</div><div className="d">C</div><div className="e">D</div><div className="f">E</div><div className="f">F</div><div className="g">G</div>
            </div>
            <div className="checks">
              <p>Lagere energiekosten</p>
              <p>Meer wooncomfort</p>
              <p>Hogere woningwaarde</p>
              <p>Beter voor het milieu</p>
            </div>
          </div>
        </section>

        <section>
          <div className="bottom-cta">
            <div className="dark-card">
              <h2>Onafhankelijk advies waar u op kunt vertrouwen</h2>
              <p>✓ Vrijblijvend en persoonlijk advies<br />✓ Inzicht in kosten, besparing en subsidies<br />✓ Geselecteerde betrouwbare uitvoerders<br />✓ Van plan tot en met realisatie</p>
            </div>
            <div className="info-card"><h3>Noodpakket</h3><p>Bereid u voor op een stroomuitval en blijf zelfvoorzienend.</p><strong style={{ color: "var(--green)" }}>Meer informatie →</strong></div>
            <div className="info-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="info-card-thumb"><img src="/Homepagina/saldering verandert.png" alt="" /></div>
              <h3>Actueel: salderingsregeling</h3>
              <p>Vanaf 1 januari 2027 wordt de salderingsregeling afgeschaft. Lees wat dit voor u betekent en welke alternatieven er zijn.</p>
              <strong style={{ color: "var(--green)" }}>Meer informatie →</strong>
            </div>
          </div>
        </section>

        <section>
          <div className="stats">
            <div className="stat"><strong>100%</strong><span>Onafhankelijk advies</span></div>
            <div className="stat"><strong>10.000+</strong><span>Huiseigenaren geholpen</span></div>
            <div className="stat"><strong>Landelijk</strong><span>Advies en ondersteuning door heel Nederland</span></div>
            <div className="stat"><strong>4,8/5</strong><span>Klantwaardering</span></div>
          </div>
        </section>

        <section id="subsidies-financiering" className="subsidies-financiering">
          <div className="sf-wrap">
            <div className="sf-hero">
              <p className="sf-label">Subsidies & financiering</p>
              <h1>Verduurzaam uw woning met financiële ondersteuning</h1>
              <p>Voor veel huishoudens zijn subsidies en financieringsmogelijkheden belangrijk om verduurzaming haalbaar en betaalbaar te maken. NCDE helpt bewoners inzicht te krijgen in beschikbare regelingen, mogelijke besparingen en passende financiering.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Vraag een subsidiecheck aan</a>
                <a className="btn btn-outline" href="#financiering">Bekijk financiering</a>
              </div>
            </div>

            <div className="sf-grid">
              <div className="sf-card pastel-green">
                <div className="icon">🏡</div>
                <h3>ISDE-subsidie</h3>
                <p>Voor isolatie, warmtepompen en zonneboilers. Deze landelijke subsidie kan de investering aanzienlijk verlagen.</p>
                <strong>Voor eigenaar-bewoners</strong>
              </div>
              <div className="sf-card pastel-yellow">
                <div className="icon">☀️</div>
                <h3>Zonnepanelen</h3>
                <p>Voor zonnepanelen geldt 0% btw. Dit verlaagt de aanschafkosten en maakt opwekking van eigen stroom aantrekkelijk.</p>
                <strong>0% btw-regeling</strong>
              </div>
              <div className="sf-card pastel-blue">
                <div className="icon">🏢</div>
                <h3>Gemeentelijke regelingen</h3>
                <p>Veel gemeenten bieden extra ondersteuning, zoals isolatiesubsidies, energieadvies of wijkgerichte acties.</p>
                <strong>Afhankelijk van gemeente</strong>
              </div>
              <div className="sf-card pastel-purple">
                <div className="icon">🏬</div>
                <h3>VvE-subsidies</h3>
                <p>Voor appartementen en VvE&apos;s bestaan aparte regelingen voor advies, onderzoek, isolatie en duurzame installaties.</p>
                <strong>SVVE-regeling</strong>
              </div>
            </div>

            <div id="financiering" className="sf-two-col">
              <div className="sf-info-block">
                <p className="sf-label">Financiering</p>
                <h2>Verduurzamen zonder alles vooraf te betalen</h2>
                <p>Niet iedereen heeft direct spaargeld beschikbaar om de woning te verduurzamen. Daarom zijn er financieringsmogelijkheden waarmee bewoners de investering kunnen spreiden.</p>
                <ul className="sf-list">
                  <li><strong>Energiebespaarlening:</strong> financiering via het Nationaal Warmtefonds voor energiebesparende maatregelen.</li>
                  <li><strong>Hypotheek verhogen:</strong> extra financiering voor verduurzaming via de hypotheekadviseur of bank.</li>
                  <li><strong>VvE-financiering:</strong> gezamenlijke financiering voor appartementencomplexen via de VvE.</li>
                  <li><strong>Gemeentelijke leningen:</strong> sommige gemeenten bieden aanvullende duurzaamheidsleningen.</li>
                </ul>
              </div>

              <div className="sf-highlight">
                <h3>Slim combineren</h3>
                <p>De beste aanpak is vaak een combinatie van subsidie en financiering.</p>
                <div className="sf-flow">
                  <span>Subsidie</span>
                  <span>+</span>
                  <span>Lening</span>
                  <span>=</span>
                  <span>Betaalbare verduurzaming</span>
                </div>
                <p>Zo wordt de investering lager, terwijl de woning direct energiezuiniger en comfortabeler wordt.</p>
              </div>
            </div>

            <div className="sf-process">
              <h2>Hoe NCDE bewoners helpt</h2>
              <div className="sf-steps">
                <div><span>1</span><h3>Woning bekijken</h3><p>We brengen de woning en mogelijke maatregelen in kaart.</p></div>
                <div><span>2</span><h3>Regelingen checken</h3><p>We bekijken welke subsidies en financiering mogelijk passen.</p></div>
                <div><span>3</span><h3>Besparing berekenen</h3><p>We geven inzicht in kosten, voordeel en terugverdientijd.</p></div>
                <div><span>4</span><h3>Keuze maken</h3><p>De bewoner kiest zelf wat passend en haalbaar is.</p></div>
              </div>
            </div>

            <div className="sf-cta">
              <h2>Wilt u weten welke subsidie of financiering bij uw woning past?</h2>
              <p>Vraag een vrijblijvende check aan en ontvang een helder overzicht van uw mogelijkheden.</p>
              <a className="btn btn-primary" href="#contact">Start gratis subsidie- en financieringscheck</a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        Samen maken we Nederland duurzaam.
      </footer>
    </>
  );
}
