/**
 * ISDE subsidieberekening 2026 (NCDE woningcheck).
 * Verdubbelingsregel: isolatie-bedragen verdubbelen wanneer er
 *   - meer dan één isolatiemaatregel is gekozen, OF
 *   - er een warmtepomp, zonneboiler of warmtenet wordt aangeschaft.
 */

import {
  isolatieMaatregelen,
  glasMaatregelen,
  warmtepompen,
  zonneboilers,
  WARMTENET_BEDRAG,
  ELEKTRISCHE_KOOK_BEDRAG,
  VENTILATIE_BEDRAG,
} from "./isde-2026";
import type {
  WoningCheckInput,
  BerekeningResultaat,
  BerekeningPost,
} from "./woningcheck-types";

function clampM2(m2: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, m2));
}

export function bereken(input: WoningCheckInput): BerekeningResultaat {
  const posten: BerekeningPost[] = [];

  const totaalIsolatieKeuzes = input.isolatie.length + input.glas.length;
  const heeftHoofdmaatregel =
    input.warmtepompId !== "geen" ||
    input.zonneboilerId !== "geen" ||
    input.warmtenet;

  const isolatieDubbel = totaalIsolatieKeuzes > 1 || heeftHoofdmaatregel;

  // Isolatiemaatregelen
  for (const keuze of input.isolatie) {
    const def = isolatieMaatregelen.find((m) => m.id === keuze.id);
    if (!def) continue;
    const m2 = clampM2(keuze.m2, def.minM2, def.maxM2);
    const perM2 = isolatieDubbel ? def.bedragCombined : def.bedragSingle;
    const bio = keuze.bioBased && def.bioBonus ? def.bioBonus * m2 : 0;
    const bedrag = Math.round(perM2 * m2 + bio);
    posten.push({
      label: def.label,
      bedrag,
      detail: `${m2} m² × €${perM2.toFixed(2)}/m²${isolatieDubbel ? " (verdubbeld)" : ""}${bio ? ` + €${Math.round(bio)} bio-bonus` : ""}`,
    });
  }

  // Glasisolatie
  for (const keuze of input.glas) {
    const def = glasMaatregelen.find((m) => m.id === keuze.id);
    if (!def) continue;
    const m2 = clampM2(keuze.m2, def.minM2, def.maxM2);
    const perM2 = isolatieDubbel ? def.bedragCombined : def.bedragSingle;
    const bedrag = Math.round(perM2 * m2);
    posten.push({
      label: def.label,
      bedrag,
      detail: `${m2} m² × €${perM2.toFixed(2)}/m²${isolatieDubbel ? " (verdubbeld)" : ""}`,
    });
  }

  // Warmtepomp
  if (input.warmtepompId !== "geen") {
    const def = warmtepompen.find((w) => w.id === input.warmtepompId);
    if (def) {
      posten.push({
        label: def.label,
        bedrag: def.representatiefBedrag,
        detail: `Representatief bedrag (min. €${def.minimumBedrag} — exact afhankelijk van apparaat, zie RVO-apparatenlijst)`,
      });
    }
  }

  // Zonneboiler
  if (input.zonneboilerId !== "geen") {
    const def = zonneboilers.find((z) => z.id === input.zonneboilerId);
    if (def) {
      posten.push({
        label: def.label,
        bedrag: def.representatiefBedrag,
        detail: `Representatief bedrag — exact afhankelijk van collectoroppervlak en boilervolume`,
      });
    }
  }

  // Warmtenet
  if (input.warmtenet) {
    posten.push({
      label: "Aansluiting op een warmtenet",
      bedrag: WARMTENET_BEDRAG,
      detail: "Vast bedrag voor aansluiting van bestaande koopwoning",
    });
  }

  // Ventilatie
  if (input.ventilatie) {
    posten.push({
      label: "CO₂-gestuurd ventilatiesysteem",
      bedrag: VENTILATIE_BEDRAG,
      detail: "Eenmalig vast bedrag",
    });
  }

  // Elektrische kookvoorziening (alleen geldig met warmtenet)
  if (input.elektrischeKook && input.warmtenet) {
    posten.push({
      label: "Elektrische kookvoorziening",
      bedrag: ELEKTRISCHE_KOOK_BEDRAG,
      detail: "Eenmalig — alleen in combinatie met aansluiting warmtenet",
    });
  }

  const totaal = posten.reduce((s, p) => s + p.bedrag, 0);

  return {
    posten,
    isolatieDubbel,
    totaal,
    invoer: input,
  };
}

export function formatEuro(n: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}
