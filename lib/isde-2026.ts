/**
 * ISDE 2026 subsidiebedragen
 * Bron: RVO.nl ISDE-pagina's voor woningeigenaren (geraadpleegd 2026-05-14)
 *
 * BELANGRIJK: deze bedragen zijn INDICATIEF voor de NCDE woningcheck.
 * Voor warmtepompen en zonneboilers varieert het exacte bedrag per apparaat
 * (zie RVO Meldcodelijsten). Hier gebruiken we representatieve gemiddelden.
 *
 * Verdubbelingsregel: alle isolatiemaatregelen verdubbelen wanneer er meer
 * dan één maatregel gecombineerd wordt, of bij combinatie met warmtepomp /
 * zonneboiler / aansluiting warmtenet.
 *
 * Bronnen:
 * - https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren
 * - https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/isolatiemaatregelen
 * - https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/warmtepomp
 * - https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/zonneboiler
 * - https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/elektrische-kookvoorziening
 */

export type IsolatieMaatregel = {
  id: string;
  label: string;
  bedragSingle: number; // €/m² als enige maatregel
  bedragCombined: number; // €/m² bij meer dan één maatregel
  minM2: number;
  maxM2: number;
  bioBonus?: number; // €/m² extra bij bio-based isolatie
};

export const isolatieMaatregelen: IsolatieMaatregel[] = [
  {
    id: "spouwmuur",
    label: "Spouwmuurisolatie",
    bedragSingle: 5.25,
    bedragCombined: 10.5,
    minM2: 10,
    maxM2: 170,
    bioBonus: 1.5,
  },
  {
    id: "gevel",
    label: "Gevelisolatie",
    bedragSingle: 20.25,
    bedragCombined: 40.5,
    minM2: 10,
    maxM2: 170,
    bioBonus: 6,
  },
  {
    id: "bodem",
    label: "Bodemisolatie",
    bedragSingle: 3,
    bedragCombined: 6,
    minM2: 20,
    maxM2: 130,
    bioBonus: 1,
  },
  {
    id: "vloer",
    label: "Vloerisolatie",
    bedragSingle: 5.5,
    bedragCombined: 11,
    minM2: 20,
    maxM2: 130,
    bioBonus: 2,
  },
  {
    id: "dak",
    label: "Dakisolatie",
    bedragSingle: 16.25,
    bedragCombined: 32.5,
    minM2: 20,
    maxM2: 200,
    bioBonus: 5,
  },
  {
    id: "zolder",
    label: "Zolder- of vlieringisolatie",
    bedragSingle: 4,
    bedragCombined: 8,
    minM2: 20,
    maxM2: 200,
    bioBonus: 1.5,
  },
];

export type GlasMaatregel = {
  id: string;
  label: string;
  bedragSingle: number;
  bedragCombined: number;
  minM2: number;
  maxM2: number;
};

export const glasMaatregelen: GlasMaatregel[] = [
  {
    id: "hrpp-triple-vacuum",
    label: "HR++ / Triple / Vacuümglas (zonder nieuwe kozijnen)",
    bedragSingle: 25,
    bedragCombined: 50,
    minM2: 3,
    maxM2: 45,
  },
  {
    id: "triple-vacuum-kozijn",
    label: "Triple / Vacuümglas (met nieuwe kozijnen)",
    bedragSingle: 111,
    bedragCombined: 222,
    minM2: 3,
    maxM2: 45,
  },
  {
    id: "panelen-12",
    label: "Isolerende panelen (U ≤ 1,2)",
    bedragSingle: 10,
    bedragCombined: 20,
    minM2: 3,
    maxM2: 45,
  },
  {
    id: "panelen-07",
    label: "Isolerende panelen (U ≤ 0,7, met nieuwe kozijnen)",
    bedragSingle: 45,
    bedragCombined: 90,
    minM2: 3,
    maxM2: 45,
  },
  {
    id: "deur-15",
    label: "Isolerende deur (U ≤ 1,5)",
    bedragSingle: 25,
    bedragCombined: 50,
    minM2: 3,
    maxM2: 45,
  },
  {
    id: "deur-10-kozijn",
    label: "Isolerende deur (U ≤ 1,0, met nieuw kozijn)",
    bedragSingle: 111,
    bedragCombined: 222,
    minM2: 3,
    maxM2: 45,
  },
];

export type WarmtepompType = {
  id: string;
  label: string;
  // Representatieve bedrag (€) — exacte bedrag op RVO apparatenlijst
  representatiefBedrag: number;
  minimumBedrag: number; // RVO garandeert minimaal €500 per warmtepomp
};

export const warmtepompen: WarmtepompType[] = [
  {
    id: "geen",
    label: "Geen warmtepomp",
    representatiefBedrag: 0,
    minimumBedrag: 0,
  },
  {
    id: "hybride-lucht-water",
    label: "Hybride lucht-water warmtepomp (4 kW, A+++)",
    representatiefBedrag: 2125,
    minimumBedrag: 500,
  },
  {
    id: "all-electric-lucht-water",
    label: "All-electric lucht-water warmtepomp (6-8 kW)",
    representatiefBedrag: 3000,
    minimumBedrag: 500,
  },
  {
    id: "grond-water",
    label: "Grond-water warmtepomp (1-10 kW, A+++)",
    representatiefBedrag: 4500,
    minimumBedrag: 500,
  },
  {
    id: "water-water",
    label: "Water-water warmtepomp (1-10 kW, A+++)",
    representatiefBedrag: 4500,
    minimumBedrag: 500,
  },
];

export type ZonneboilerType = {
  id: string;
  label: string;
  representatiefBedrag: number;
};

export const zonneboilers: ZonneboilerType[] = [
  { id: "geen", label: "Geen zonneboiler", representatiefBedrag: 0 },
  {
    id: "klein",
    label: "Zonneboiler (≤ 5 m² collectoroppervlak)",
    representatiefBedrag: 850,
  },
  {
    id: "middel",
    label: "Zonneboiler (5–10 m² collectoroppervlak)",
    representatiefBedrag: 1700,
  },
  {
    id: "groot",
    label: "Zonneboiler (> 10 m² collectoroppervlak)",
    representatiefBedrag: 3417,
  },
  {
    id: "combi",
    label: "Zonneboiler-combi (verwarming + warm water)",
    representatiefBedrag: 2500,
  },
];

// Vaste bedragen
export const WARMTENET_BEDRAG = 3775; // Aansluiting bestaande koopwoning
export const ELEKTRISCHE_KOOK_BEDRAG = 400;
export const VENTILATIE_BEDRAG = 400; // CO2-gestuurd ventilatiesysteem

// Datum geldigheid
export const ISDE_JAAR = 2026;
export const PEILDATUM = "2026-01-01";
