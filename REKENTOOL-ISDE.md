# Rekentool ISDE — Analyse

Bestand: [`public/Homepagina/Rekentool_ISDE_voor_woningeigenaren_2026.xlsx`](public/Homepagina/Rekentool_ISDE_voor_woningeigenaren_2026.xlsx)

Bron: `Nirmal Madarie / NCDE / Homepagina` (Microsoft OneDrive metadata).
Doel volgens NCDE: huiseigenaren laten berekenen op hoeveel **ISDE-subsidie** (Investeringssubsidie Duurzame Energie en Energiebesparing) ze recht hebben bij verschillende verduurzamingsmaatregelen, geldend voor 2025-2026.

---

## Structuur van het Excel-bestand

Drie werkbladen:

| Sheet | Naam | Rol |
|---|---|---|
| 1 | **Keuzeblad maatregelen** | Invoerformulier — huiseigenaar vult hier de vragen in |
| 2 | **Afdrukoverzicht subsidiebedrag** | Print-output met totaalberekening |
| 3 | **Hulpblad** (hidden) | Lookup-tabellen met kentallen, energieklasses, datumranges, verdubbelingsregels |

Het bestand is **workbook-protected** (SHA-512 hash), dus structuur is vergrendeld. De gebruiker kan alleen de bedoelde keuzes maken.

---

## 7 Vragen die de tool stelt

1. **Heeft u al eerder ISDE-subsidie ontvangen?** (Ja/Nee)
2. **Wilt u isolatiemaatregelen laten uitvoeren?**
   - Dakisolatie / Gevelisolatie / Spouwmuurisolatie / Vloerisolatie / Bodemisolatie (Rd ≥ 3,5 m²K/W)
   - HR++ glas (U ≤ 1,2 W/m²K) en/of Triple glas (U ≤ 0,7 W/m²K)
   - Kozijnpanelen + isolerende deuren (alleen in combinatie met HR++ of Triple glas)
   - Per maatregel: aantal m² (binnen min/max-range) + datum uitvoering
3. **Wilt u een warmtepomp installeren?**
   - Type: Lucht-water / Grond-water / Water-water / Zonneboilercombi
   - Vermogen: < 1 kW / 1–10 kW / 10–70 kW / 71–400 kW / > 400 kW
   - Energieklasse: A t/m G / A+ / A++ / A+++ of hoger
   - Datum installatie
4. **Wilt u een zonneboiler installeren?**
   - Type: Zonneboiler / Zonneboilercombi
   - Oppervlak: ≤ 5 m² / 5–10 m² / > 10 m²
   - Datum installatie
5. **Wilt u een bestaande koopwoning laten aansluiten op een warmtenet?**
6. **Wilt u een elektrische kookvoorziening aanschaffen?**
   - Let op: alleen subsidiabel **in combinatie met** een aansluiting op een warmtenet (vraag 5).

> Vraag 2 (zonneboiler-combi) en vraag 4 lijken in de Excel apart genummerd; voor de webversie kunnen die samen in één stap.

---

## Output: Afdrukoverzicht subsidiebedrag

Sheet 2 produceert een afdrukbaar overzicht:
- Subsidiebedrag per categorie (isolatie, warmtepomp, zonneboiler, warmtenet, elektrische kook)
- **Totaal subsidie**
- Verdubbeling-tarief: als meer dan 1 isolatiemaatregel wordt geselecteerd → tarief verdubbelt (Excel formule controleert `Totaal aantal geselecteerde categorieën > 1`)
- Vermelding: *"Indicatief, werkelijke bijdrage volgens apparatenlijst"*

---

## Wat moet er met deze tool gebeuren?

Drie opties — keuze aan jou:

### A. Tool als download aanbieden (snelst)
- Plaats het xlsx-bestand achter een download-knop op `/subsidies-financiering/isde` of `/woningcheck`.
- Voordeel: 0 werk, gebruiker krijgt het complete instrument.
- Nadeel: Excel openen is voor veel bezoekers een drempel; geen tracking; ziet er niet professioneel uit.

### B. Tool 1-op-1 namaken als web-tool (zwaarste)
- Bouw een React-formulier dat dezelfde 7 vragen stelt en dezelfde subsidie-uitkomst berekent.
- Vereist: alle kentallen, datumranges en verdubbelingsregels uit het Hulpblad reverse-engineeren.
- Voordeel: gestroomlijnde UX, geïntegreerd in `/woningcheck`-flow, capture e-mailadres.
- Nadeel: veel werk (~1-2 weken), moet bijgehouden worden als NCDE/RVO de tarieven wijzigt.

### C. Hybride (aanbevolen)
- Bouw een **vereenvoudigde indicatie-tool** op de website: gebruiker tikt 3-5 maatregelen aan, krijgt een **indicatie-range** (bv. "€2.000 – €5.000 ISDE-subsidie mogelijk").
- Voor de **exacte berekening** download de gebruiker het Excel-bestand of vraagt een persoonlijke check aan via `/woningcheck`.
- Voordeel: lage drempel + capture-mogelijkheid, geen volledige tarievenstructuur in de codebase.
- Nadeel: minder accuraat dan optie B.

---

## Waar terugkomt op de website?

Het bestand zou logisch op deze plekken kunnen verschijnen (uit [ARCHITECTUUR.md](./ARCHITECTUUR.md)):

| Pagina | Hoe |
|---|---|
| `/subsidies-financiering/isde` | Primair: directe download + uitleg van ISDE-regeling |
| `/subsidies-financiering` (hoofd) | Secundair: link "Bereken uw subsidie" → naar `/isde` |
| `/woningcheck` | Integratie: na de woningcheck-flow de bijbehorende ISDE-bedragen meeleveren |
| `/oplossingen/warmtepomp` + `/zonnepanelen` + isolatie-pagina's | Per oplossing: link "Wat krijgt u terug aan ISDE?" naar de rekentool |

---

## Risico's / Let op

- ⚠️ **ISDE-tarieven wijzigen jaarlijks** (regeling 2026 verschilt van 2025; titel zegt expliciet "voor woningeigenaren 2026"). Als we de tool 1-op-1 namaken (optie B/C), moet er een eigenaar zijn die jaarlijks de kentallen bijwerkt.
- ⚠️ Het Excel-bestand is **eigendom van of opgesteld door Nirmal Madarie / NCDE**. Voor publicatie checken of we hier publicatierechten op hebben.
- ⚠️ Disclaimer is vereist: tool geeft **indicatie**, niet rechtsgeldige berekening (RVO is de officiële bron).

---

## Aanbeveling

**Optie C (hybride):** Webformulier met 5 hoofdvragen → indicatie-bedrag. Excel-bestand als gratis download voor wie de exacte berekening wil. Verwijst naar `/woningcheck` voor persoonlijk advies. Dit past bij NCDE's onafhankelijke rol — wij geven inzicht, RVO doet de officiële beoordeling.

Voor de uitwerking heb ik nodig:
1. Bevestiging dat we het Excel-bestand mogen aanbieden (publicatierechten)
2. Welke 3-5 maatregelen jullie het belangrijkst vinden voor de quick-indicatie
3. Of de tool op `/subsidies-financiering/isde` of als onderdeel van `/woningcheck` moet komen
