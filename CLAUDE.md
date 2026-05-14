# CLAUDE.md — NCDE (Nationaal Collectief Duurzame Energie)

Project-specifieke instructies voor Claude Code. Lees dit eerst bij elke nieuwe sessie.

---

## Project

**NCDE** is een Nederlandse informatie- en conversie-website voor huiseigenaren die willen verduurzamen. Klant van **Dynet** (Jamal). Live op **https://ndce-v2.vercel.app**.

- **Repo:** `dynet/ncde-v2` op GitHub
- **Vercel project:** `macvaldo1997-gmailcoms-projects/ndce-v2` (auto-deploy via main)
- **Status:** Homepage live in productie. 20 sub-pagina's nog te bouwen — zie [ARCHITECTUUR.md](./ARCHITECTUUR.md).

## Stack

- **Next.js 16.2.4** (App Router, Turbopack)
- **React 19.2.4**
- **Tailwind CSS v4** met `@theme` directive in `app/globals.css`
- **TypeScript 5**
- **Lucide-react** voor iconen (brand-iconen LinkedIn/YouTube/Instagram zijn inline SVG omdat lucide-react die niet meer exporteert)
- **Fonts:** Fraunces (display) + Inter (sans) via `next/font/google`
- **Geen UI-framework** (geen shadcn/Radix). Custom Tailwind classes.

> ⚠️ **Next.js 16 heeft breaking changes**. Read `node_modules/next/dist/docs/` (vooral `01-app/01-getting-started/`) voordat je nieuwe APIs gebruikt — niet op training-data vertrouwen.

## Brand kleuren (in `app/globals.css` via `@theme`)

```
brand-50:  #f1faf5    brand-500: #28a169
brand-100: #dcf2e6    brand-600: #007a3d  ← primair groen, alle CTAs
brand-200: #b9e4cb    brand-700: #00633d  ← dark sections
brand-300: #86d0a8    brand-800: #005232  ← footer
brand-400: #4eb582    brand-900: #0a3a25

sand-50/100, peach-100, lilac-100, leaf-100  ← pastel-tints
```

## Structuur

```
app/
├── globals.css       ← Tailwind v4 imports + @theme tokens + .cx container
├── layout.tsx        ← Root HTML + Fraunces/Inter font loading + body classes
└── page.tsx          ← Homepage (alle 9 secties inline, ~530 regels)

public/
└── Homepagina/       ← Alle PNG-foto's (Logo final.png, Afbeelding homepagina.png, etc.)
                       en de docx-referenties (Code homepagina Claude/Chatgpt, architectuur)
```

> `app/icons.tsx` is **verwijderd** in commit `541a290` toen we switchten van eigen SVG iconen naar lucide-react. Niet opnieuw aanmaken.

## CSS conventies

- **`.cx`** = container class met `padding-inline` (let op: gebruik **niet** `padding` shorthand, dat breekt Tailwind `py-*` utilities — zie commit `70369ff`).
- Tailwind utilities geprefereerd boven custom CSS. Custom CSS alleen voor de `.cx` helper en de theme tokens.
- Shadow-presets: `var(--shadow-soft)` (subtle), `var(--shadow-card)` (cards), `var(--shadow-elevated)` (modals).
- Border-radius: `rounded-[var(--radius-xl2)]` voor cards (14px).

## Code-stijl

- TypeScript strict (`tsconfig.json` heeft `"strict": true`).
- `<img>` via `next/image` is NIET verplicht hier — we gebruiken `<img>` met `eslint-disable-next-line @next/next/no-img-element` voor de PNG-foto's. Reden: foto's zijn statisch en de extra `next/image` overhead is overkill.
- Inline data-arrays voor card-grids (zie `app/page.tsx` — `[...].map(c => ...)` patroon). Geen aparte data-files voor zo'n klein project.

## Branch workflow

Verplicht per ticket — vastgesteld op 2026-05-14:

1. **Nieuwe branch** vanaf `development`: `feat/<ticket-slug>` of `fix/<slug>`
2. **Werken** + commit + push naar de feature branch
3. **Wachten op expliciete goedkeuring** van Rivaldo voor merge naar `development`
4. **Pas na tweede goedkeuring**: merge `development` → `main` (Vercel productie deploy)

**Belangrijk:**
- Eerste werk gaat **altijd** in een feature branch, nooit direct op `development` of `main`.
- PR's worden niet automatisch geopend of gemerged — alleen op verzoek.
- Geen `--no-verify`, geen force-push naar `main`/`development`.

Huidige branches: `main` (productie), `development` (staging), `feat/homepage` (last work).

## Belangrijke historie / lessons learned

- **CSS shorthand-trap (commit `70369ff`):** `.cx { padding: 0 1.5rem }` zet ook `padding-top/bottom: 0` en overschrijft Tailwind `py-*`. Altijd `padding-inline` gebruiken voor horizontale-only padding.
- **Hero stacking context:** absolute-positioned image + gradient achter content vereist `isolate` of expliciete `z-index` op alle lagen. Claude-eyes screenshot-tool toont misleidende doorzichtigheid; verifieer met `get_element_info` voor echte DOM-positie.
- **Lucide-react brand-iconen:** LinkedIn/YouTube/Instagram zijn verwijderd uit lucide-react (licentie). Inline SVG-componenten gebruiken (zie top van `app/page.tsx`).
- **Mockup-bron (single source of truth):** `public/Homepagina/Codehomepagine Claude dd 7-5-2026.docx`. De homepage is 1-op-1 vanaf dit document gebouwd (commit `541a290`). De ChatGPT-mockup is **niet** de bron.

## Architectuur / pagina's

Zie [ARCHITECTUUR.md](./ARCHITECTUUR.md) voor de complete sitemap. **Single source of truth voor welke pagina's er moeten komen** = de header-nav + footer-links van de gebouwde homepage. Geen aannames uit de oude `📄 architectuur.docx`.

Open beslissingen die nog op antwoord wachten staan onderaan ARCHITECTUUR.md.

## Communicatie

- Nederlands (Rivaldo schrijft NL → ik antwoord NL).
- Eerst in één zin zeggen wat ik ga doen, daarna de tool call.
- A/B/C vragen bij ambiguïteit — geen open vragen.
- Geen lange samenvattingen van wat ik net deed; de diff is zichtbaar.
