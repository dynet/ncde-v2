/**
 * Types voor de NCDE woningcheck / ISDE-rekentool flow.
 */

export type Adres = {
  postcode: string;
  huisnummer: string;
  email: string;
};

export type IsolatieKeuze = {
  id: string; // referentie naar isolatieMaatregelen[].id
  m2: number;
  bioBased: boolean;
};

export type GlasKeuze = {
  id: string;
  m2: number;
};

export type WoningCheckInput = {
  adres: Adres;
  eerderIsdeOntvangen: boolean;

  isolatie: IsolatieKeuze[];
  glas: GlasKeuze[];

  warmtepompId: string; // 'geen' | hybride-lucht-water | ...
  zonneboilerId: string; // 'geen' | klein | middel | groot | combi
  warmtenet: boolean;
  ventilatie: boolean;
  elektrischeKook: boolean; // alleen geldig i.c.m. warmtenet
};

export type BerekeningPost = {
  label: string;
  bedrag: number;
  detail?: string;
};

export type BerekeningResultaat = {
  posten: BerekeningPost[];
  isolatieDubbel: boolean;
  totaal: number;
  // Voor share-URL / debug:
  invoer: WoningCheckInput;
};

export const lege_input: WoningCheckInput = {
  adres: { postcode: "", huisnummer: "", email: "" },
  eerderIsdeOntvangen: false,
  isolatie: [],
  glas: [],
  warmtepompId: "geen",
  zonneboilerId: "geen",
  warmtenet: false,
  ventilatie: false,
  elektrischeKook: false,
};
