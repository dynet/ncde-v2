# NCDE Website — Status overzicht (20-05-2026)

Beste Nirmal / NCDE-team,

Hierbij een overzicht van wat **klaar staat** op de website en wat **nog gebouwd moet worden** voordat we live kunnen.

🌍 **Live URL:** https://ncde-v2.vercel.app

---

## ✅ KLAAR — al gebouwd en online

| Pagina | URL |
|---|---|
| Home | https://ncde-v2.vercel.app/ |
| Over ons | https://ncde-v2.vercel.app/over-ons |
| Subsidies & Financiering | https://ncde-v2.vercel.app/subsidies-financiering |
| Partners | https://ncde-v2.vercel.app/partners |
| Nieuws | https://ncde-v2.vercel.app/nieuws |

Alle pagina's hebben dezelfde header (logo + navigatie + "Start woningcheck" knop) en footer (logo + pagina's + contact + nieuwsbrief).

---

## 🔴 NOG TE BOUWEN — verplicht voor productie

Deze pagina's staan **wel** in de header/footer maar bestaan **nog niet**:

| Pagina | URL | Reden / verplichting |
|---|---|---|
| Contact | `/contact` | Genoemd in header-navigatie en footer |
| Privacy Policy | `/privacy` | **Verplicht volgens AVG/GDPR** |
| Cookie-beleid | `/cookies` | **Verplicht volgens cookiewet** |
| Disclaimer | `/disclaimer` | Standaard juridische pagina |

---

## 🟡 NOG TE BOUWEN — middel prioriteit

| Pagina | URL | Reden |
|---|---|---|
| FAQ (veelgestelde vragen) | `/faq` | Genoemd in footer "Contact" kolom |
| Contactformulier | `/contact` (kan onderdeel zijn) | Genoemd in footer; kan ingebed op contact-pagina |

---

## 🟢 NOG TE BOUWEN — later / optioneel

| Pagina | URL | Reden |
|---|---|---|
| Artikel-detailpagina's | `/nieuws/[artikel-slug]` | De 6 nieuwsartikelen op `/nieuws` zijn nu nog niet aanklikbaar — elk artikel zou een eigen pagina krijgen |
| Subsidie-detailpagina's | `/subsidies-financiering/[subsidie]` | Idem voor de 6 subsidie-kaarten ("Lees voorwaarden") |
| Partner-categoriepagina's | `/partners/[categorie]` | De 6 partner-categorieën ("Bekijk partners") |

---

## 🛠️ Functionaliteit nog te bouwen

| Onderdeel | Status |
|---|---|
| Woningcheck-formulier op homepage | ✅ Visueel klaar (input velden), maar **nog geen werkende verzending** — bij submit moet er een rapport/e-mail komen |
| Nieuwsbrief-inschrijving (footer) | ✅ Visueel klaar, **nog niet gekoppeld** aan e-mail-service (Mailchimp / Brevo / etc.) |
| Nieuws-categorie filter (Alles / Energielabel / Saldering / Warmtenet / Subsidies / Noodpakket) | ✅ Knoppen zichtbaar, **filtering nog niet werkend** |
| Contactformulier | Niet gebouwd (wacht op `/contact` pagina) |

---

## 📝 Inhoudelijke vragen voor NCDE

Voordat we de juridische pagina's kunnen bouwen, heb ik nodig:

1. **Privacy Policy** — standaard tekst of leveren jullie de definitieve content?
2. **Cookie-beleid** — welke cookies gebruiken we? (Vercel Analytics, evt. Google Analytics?)
3. **Disclaimer** — standaard tekst of NCDE-specifiek?
4. **Contact** — adres, telefoon, KvK-nummer voor de contact-pagina?
5. **Nieuwsbrief-service** — welke tool gebruikt NCDE (Mailchimp / Brevo / Laposta / anders)?
6. **Woningcheck-resultaat** — moet er na het formulier een e-mail naar de bewoner? En een lead naar NCDE?

Zodra ik antwoorden heb op deze punten kan ik de site volledig productie-klaar maken.

---

Vragen of opmerkingen? Laat het weten!

Met vriendelijke groet,
Rivaldo (Rose Vibes Studio)
