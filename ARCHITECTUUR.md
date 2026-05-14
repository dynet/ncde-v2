# Architectuur — NCDE Website

**Single source of truth:** de homepage zoals nu gebouwd in `app/page.tsx`. Alle pagina's hieronder volgen uit de **header-navigatie** en de **footer-links** van die homepage. Niets anders.

**Live:** https://ndce-v2.vercel.app (productie via `main` branch)
**Repo:** https://github.com/dynet/ncde-v2

---

## Sitemap (volledige paginalijst)

Elke entry hieronder = één concrete pagina die gebouwd moet worden. Geordend per herkomst (header → footer kolommen → bottom-bar).

### Uit de header-navigatie (6)

| # | Pagina | Route | Status |
|---|---|---|---|
| 1 | Home | `/` | ✅ Klaar |
| 2 | Over ons | `/over-ons` | ⏳ Te bouwen |
| 3 | Subsidies & Financiering | `/subsidies-financiering` | ⏳ Te bouwen |
| 4 | Partners | `/partners` | ⏳ Te bouwen |
| 5 | Nieuws | `/nieuws` | ⏳ Te bouwen |
| 6 | Contact | `/contact` | ⏳ Te bouwen |

### Uit de header CTA + Woningcheck sectie (1)

| # | Pagina | Route | Status |
|---|---|---|---|
| 7 | Start woningcheck (tool) | `/woningcheck` | ⏳ Te bouwen — formulier staat al op homepage als embed, hier komt de uitgebreide flow + rapport |

### Uit footer kolom "Verduurzamen" (5)

| # | Pagina | Route | Status |
|---|---|---|---|
| 8 | Isolatie | `/oplossingen/isolatie` | ⏳ Te bouwen |
| 9 | Zonnepanelen | `/oplossingen/zonnepanelen` | ⏳ Te bouwen |
| 10 | Warmtepomp | `/oplossingen/warmtepomp` | ⏳ Te bouwen |
| 11 | Thuisbatterij | `/oplossingen/thuisbatterij` | ⏳ Te bouwen |
| 12 | Ventilatie | `/oplossingen/ventilatie` | ⏳ Te bouwen |

> Op de homepage staan 6 oplossingen-cards (incl. Laadpaal) maar in de footer staan er 5. Laadpaal kan toegevoegd worden onder dezelfde route-prefix `/oplossingen/laadpaal` als jullie het consistent willen houden — beslissing aan jullie.

### Uit footer kolom "Subsidies" (4)

| # | Pagina | Route | Status |
|---|---|---|---|
| 13 | ISDE-subsidie | `/subsidies-financiering/isde` | ⏳ Te bouwen |
| 14 | Gemeentelijke subsidies | `/subsidies-financiering/gemeentelijk` | ⏳ Te bouwen |
| 15 | Energiebespaarlening | `/subsidies-financiering/energiebespaarlening` | ⏳ Te bouwen |
| 16 | Alle regelingen | `/subsidies-financiering/alle-regelingen` | ⏳ Te bouwen |

> Sub-pagina's onder de hoofd-pagina **Subsidies & Financiering** (entry 3). Twee opties:
> - **A:** Hoofdpagina = overzicht + tabs/secties met de 4 sub-onderwerpen ingebed (geen aparte URLs nodig).
> - **B:** Hoofdpagina = overzicht met links naar 4 aparte detail-pagina's (zoals hier voorgesteld).

### Uit footer kolom "Pagina's" (4)

Dit zijn duplicaten van header-items, hoeven geen aparte pagina's:

| # | Item | Verwijst naar |
|---|---|---|
| – | Home | `/` (entry 1) |
| – | Over ons | `/over-ons` (entry 2) |
| – | Partners | `/partners` (entry 4) |
| – | Nieuws | `/nieuws` (entry 5) |

### Uit footer kolom "Contact" (3)

| # | Pagina | Route | Status |
|---|---|---|---|
| – | `info@ncde.nl` | `mailto:` link, geen pagina | n.v.t. |
| 17 | Contactformulier | `/contact` (zelfde als entry 6) of `/contact/formulier` | ⏳ Te bouwen |
| 18 | FAQ | `/faq` | ⏳ Te bouwen |

> `info@ncde.nl` is een `mailto:`-link, geen pagina. Contactformulier kan op `/contact` zelf staan (één pagina) of op `/contact/formulier` (twee pagina's). Aanbeveling: één `/contact` pagina met formulier ingebed.

### Uit footer bottom-bar (3)

| # | Pagina | Route | Status |
|---|---|---|---|
| 19 | Privacy | `/privacy` | ⏳ Te bouwen |
| 20 | Disclaimer | `/disclaimer` | ⏳ Te bouwen |
| 21 | Cookies | `/cookies` | ⏳ Te bouwen |

### Uit footer kolom "Blijf op de hoogte"

Nieuwsbrief-formulier inline in footer → géén aparte pagina.

### Uit footer social-icons (3)

| # | Item | Verwijst naar |
|---|---|---|
| – | LinkedIn | externe URL (n.v.t.) |
| – | YouTube | externe URL (n.v.t.) |
| – | Instagram | externe URL (n.v.t.) |

---

## Telling

- **Te bouwen:** 20 pagina's (entries 2–21)
- **Klaar:** 1 (de homepage)
- **Optioneel +1:** Laadpaal als `/oplossingen/laadpaal`
- **Beslissingen open:** A/B voor sub-Subsidies (entries 13–16) en al-of-niet aparte `/contact/formulier`

---

## Route-structuur (zoals voorgesteld)

```
/                                          ← Home (✅)
/over-ons
/subsidies-financiering
  ├── /isde
  ├── /gemeentelijk
  ├── /energiebespaarlening
  └── /alle-regelingen
/partners
/nieuws
/contact
/faq
/woningcheck
/oplossingen
  ├── /isolatie
  ├── /zonnepanelen
  ├── /warmtepomp
  ├── /thuisbatterij
  ├── /ventilatie
  └── /laadpaal (optioneel)
/privacy
/disclaimer
/cookies
```

`/oplossingen` zelf bestaat **niet** in de footer of header — alleen de sub-routes. Mogelijk hebben we wel een `/oplossingen` index-pagina nodig als landing voor "Bekijk oplossingen" CTA op de homepage. Beslissing aan jullie.

---

## Gedeelde componenten (uit homepage te halen)

Deze zijn al op de homepage gebouwd en kunnen één-op-één hergebruikt worden op alle nieuwe pagina's:

- **Header** (sticky, nav, "Start woningcheck" CTA)
- **Footer** (4 kolommen + social + nieuwsbrief + bottom-bar)

Voorstel: deze in `app/layout.tsx` of als losse `Header.tsx` + `Footer.tsx` componenten zodat elke nieuwe pagina ze automatisch krijgt.

---

## Wat NIET in de scope zit (zoals afgesproken: alleen header + footer)

De volgende elementen staan **wel** op de homepage maar zijn **geen** aparte pagina's — ze blijven secties binnen de homepage:

- USP-cards (Duidelijk inzicht / Subsidies / Betrouwbare partners)
- "Zes goede redenen" — 6 voordelen
- "Ontdek wat bij uw woning past" — 6 oplossingen (deze linken wel naar de sub-pagina's hierboven)
- Energielabel-blok
- Advies-blok met Noodpakket + Salderingsregeling cards
- Woningcheck-formulier (linkt naar `/woningcheck` voor de volledige tool)

---

## Open beslissingen voor de gebruiker

1. **Sub-pagina's onder Subsidies & Financiering:** ingebed in hoofdpagina (A) of aparte URLs (B)?
2. **Laadpaal-pagina:** wel bouwen (mist in footer) of niet?
3. **Contactformulier:** op `/contact` of aparte `/contact/formulier`?
4. **`/oplossingen` index-pagina:** wel of niet bouwen?

Zonder jullie input ga ik voor de **B + ja + samenvoegen + ja** route — meeste pagina's, schoonste URL-structuur, maar dat is een aanname. Laat weten of je het anders wil.
