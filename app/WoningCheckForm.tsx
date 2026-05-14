"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import {
  isolatieMaatregelen,
  glasMaatregelen,
  warmtepompen,
  zonneboilers,
} from "../lib/isde-2026";
import { lege_input } from "../lib/woningcheck-types";
import type { WoningCheckInput, IsolatieKeuze, GlasKeuze } from "../lib/woningcheck-types";

const TOTAAL_STAPPEN = 8;

export default function WoningCheckForm() {
  const router = useRouter();
  const [stap, setStap] = useState(1);
  const [input, setInput] = useState<WoningCheckInput>(lege_input);

  function vorige() {
    setStap((s) => Math.max(1, s - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function volgende() {
    setStap((s) => Math.min(TOTAAL_STAPPEN, s + 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submit() {
    // Encode input naar URL-vriendelijke string en navigeer naar resultaat
    const encoded = encodeURIComponent(btoa(JSON.stringify(input)));
    router.push(`/woningcheck/resultaat?d=${encoded}`);
  }

  function toggleIsolatie(id: string) {
    setInput((cur) => {
      const exists = cur.isolatie.find((k) => k.id === id);
      const def = isolatieMaatregelen.find((m) => m.id === id);
      if (!def) return cur;
      if (exists) {
        return { ...cur, isolatie: cur.isolatie.filter((k) => k.id !== id) };
      }
      const nieuw: IsolatieKeuze = { id, m2: def.minM2, bioBased: false };
      return { ...cur, isolatie: [...cur.isolatie, nieuw] };
    });
  }
  function updateIsolatieM2(id: string, m2: number) {
    setInput((cur) => ({
      ...cur,
      isolatie: cur.isolatie.map((k) => (k.id === id ? { ...k, m2 } : k)),
    }));
  }
  function toggleIsolatieBio(id: string) {
    setInput((cur) => ({
      ...cur,
      isolatie: cur.isolatie.map((k) => (k.id === id ? { ...k, bioBased: !k.bioBased } : k)),
    }));
  }
  function toggleGlas(id: string) {
    setInput((cur) => {
      const exists = cur.glas.find((k) => k.id === id);
      const def = glasMaatregelen.find((m) => m.id === id);
      if (!def) return cur;
      if (exists) return { ...cur, glas: cur.glas.filter((k) => k.id !== id) };
      const nieuw: GlasKeuze = { id, m2: def.minM2 };
      return { ...cur, glas: [...cur.glas, nieuw] };
    });
  }
  function updateGlasM2(id: string, m2: number) {
    setInput((cur) => ({
      ...cur,
      glas: cur.glas.map((k) => (k.id === id ? { ...k, m2 } : k)),
    }));
  }

  const adresGeldig =
    /^\d{4}\s?[A-Za-z]{2}$/.test(input.adres.postcode.trim()) &&
    input.adres.huisnummer.trim().length > 0 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.adres.email.trim());

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
      {/* Voortgangsbalk */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-semibold text-gray-500 mb-2">
          <span>Stap {stap} van {TOTAAL_STAPPEN}</span>
          <span>{Math.round((stap / TOTAAL_STAPPEN) * 100)}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-2 bg-brand-600 transition-all duration-300"
            style={{ width: `${(stap / TOTAAL_STAPPEN) * 100}%` }}
          />
        </div>
      </div>

      {stap === 1 && (
        <Stap label="Adresgegevens" hint="We gebruiken uw adres om relevante maatregelen voor uw woning te bepalen.">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-700">Postcode</label>
              <input
                type="text"
                placeholder="1234 AB"
                value={input.adres.postcode}
                onChange={(e) => setInput({ ...input, adres: { ...input.adres, postcode: e.target.value } })}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700">Huisnummer</label>
              <input
                type="text"
                placeholder="12A"
                value={input.adres.huisnummer}
                onChange={(e) => setInput({ ...input, adres: { ...input.adres, huisnummer: e.target.value } })}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-700">E-mailadres</label>
            <input
              type="email"
              placeholder="uw@email.nl"
              value={input.adres.email}
              onChange={(e) => setInput({ ...input, adres: { ...input.adres, email: e.target.value } })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
            />
          </div>
        </Stap>
      )}

      {stap === 2 && (
        <Stap label="Heeft u al eerder ISDE-subsidie ontvangen?" hint="ISDE-subsidie is per maatregel slechts één keer aan te vragen.">
          <RadioGroup
            value={input.eerderIsdeOntvangen ? "ja" : "nee"}
            onChange={(v) => setInput({ ...input, eerderIsdeOntvangen: v === "ja" })}
            options={[
              { value: "nee", label: "Nee, nog niet" },
              { value: "ja", label: "Ja, eerder ontvangen" },
            ]}
          />
        </Stap>
      )}

      {stap === 3 && (
        <Stap label="Welke isolatiemaatregelen wilt u laten uitvoeren?" hint="Selecteer alle maatregelen die u wilt overwegen. Bij meer dan één maatregel verdubbelt het subsidiebedrag.">
          <div className="space-y-3">
            {isolatieMaatregelen.map((m) => {
              const gekozen = input.isolatie.find((k) => k.id === m.id);
              return (
                <div key={m.id} className={`rounded-lg border p-4 ${gekozen ? "border-brand-600 bg-brand-50" : "border-gray-200"}`}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!gekozen}
                      onChange={() => toggleIsolatie(m.id)}
                      className="mt-1 h-4 w-4 accent-brand-600"
                    />
                    <div className="flex-1">
                      <span className="font-semibold text-gray-900">{m.label}</span>
                      <span className="ml-2 text-xs text-gray-500">€{m.bedragSingle.toFixed(2)}/m² (min. {m.minM2} m², max. {m.maxM2} m²)</span>
                    </div>
                  </label>
                  {gekozen && (
                    <div className="mt-3 pl-7 space-y-2">
                      <div className="flex items-center gap-2">
                        <label className="text-xs font-semibold text-gray-700 w-24">Oppervlak m²:</label>
                        <input
                          type="number"
                          min={m.minM2}
                          max={m.maxM2}
                          value={gekozen.m2}
                          onChange={(e) => updateIsolatieM2(m.id, Math.max(m.minM2, Math.min(m.maxM2, parseInt(e.target.value) || m.minM2)))}
                          className="w-24 rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                        />
                      </div>
                      {m.bioBonus && (
                        <label className="flex items-center gap-2 text-xs text-gray-700">
                          <input
                            type="checkbox"
                            checked={gekozen.bioBased}
                            onChange={() => toggleIsolatieBio(m.id)}
                            className="h-3.5 w-3.5 accent-brand-600"
                          />
                          Bio-based materiaal (+€{m.bioBonus.toFixed(2)}/m² bonus)
                        </label>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Stap>
      )}

      {stap === 4 && (
        <Stap label="Glas-, paneel- of deurisolatie?" hint="Kies eventueel één of meer glasopties.">
          <div className="space-y-3">
            {glasMaatregelen.map((m) => {
              const gekozen = input.glas.find((k) => k.id === m.id);
              return (
                <div key={m.id} className={`rounded-lg border p-4 ${gekozen ? "border-brand-600 bg-brand-50" : "border-gray-200"}`}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!gekozen}
                      onChange={() => toggleGlas(m.id)}
                      className="mt-1 h-4 w-4 accent-brand-600"
                    />
                    <div className="flex-1">
                      <span className="font-semibold text-gray-900">{m.label}</span>
                      <span className="ml-2 text-xs text-gray-500">€{m.bedragSingle}/m² (min. {m.minM2}, max. {m.maxM2})</span>
                    </div>
                  </label>
                  {gekozen && (
                    <div className="mt-3 pl-7">
                      <label className="text-xs font-semibold text-gray-700 mr-2">Oppervlak m²:</label>
                      <input
                        type="number"
                        min={m.minM2}
                        max={m.maxM2}
                        value={gekozen.m2}
                        onChange={(e) => updateGlasM2(m.id, Math.max(m.minM2, Math.min(m.maxM2, parseInt(e.target.value) || m.minM2)))}
                        className="w-24 rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Stap>
      )}

      {stap === 5 && (
        <Stap label="Welke warmtepomp wilt u installeren?" hint="Het exacte subsidiebedrag hangt af van het specifieke apparaat (zie RVO-apparatenlijst). We tonen een representatief bedrag.">
          <RadioGroup
            value={input.warmtepompId}
            onChange={(v) => setInput({ ...input, warmtepompId: v })}
            options={warmtepompen.map((w) => ({
              value: w.id,
              label: w.label,
              sublabel: w.id !== "geen" ? `≈ €${w.representatiefBedrag.toLocaleString("nl-NL")}` : undefined,
            }))}
          />
        </Stap>
      )}

      {stap === 6 && (
        <Stap label="Wilt u een zonneboiler installeren?" hint="Bedrag afhankelijk van collectoroppervlak en boilervolume.">
          <RadioGroup
            value={input.zonneboilerId}
            onChange={(v) => setInput({ ...input, zonneboilerId: v })}
            options={zonneboilers.map((z) => ({
              value: z.id,
              label: z.label,
              sublabel: z.id !== "geen" ? `≈ €${z.representatiefBedrag.toLocaleString("nl-NL")}` : undefined,
            }))}
          />
        </Stap>
      )}

      {stap === 7 && (
        <Stap label="Aansluiting op een warmtenet en ventilatie?" hint="Beide zijn vaste bedragen.">
          <div className="space-y-3">
            <label className={`flex items-start gap-3 rounded-lg border p-4 cursor-pointer ${input.warmtenet ? "border-brand-600 bg-brand-50" : "border-gray-200"}`}>
              <input
                type="checkbox"
                checked={input.warmtenet}
                onChange={() => setInput({ ...input, warmtenet: !input.warmtenet })}
                className="mt-1 h-4 w-4 accent-brand-600"
              />
              <div>
                <div className="font-semibold text-gray-900">Aansluiting op een warmtenet</div>
                <div className="text-xs text-gray-500">Vast bedrag €3.775 voor bestaande koopwoning</div>
              </div>
            </label>

            <label className={`flex items-start gap-3 rounded-lg border p-4 cursor-pointer ${input.ventilatie ? "border-brand-600 bg-brand-50" : "border-gray-200"}`}>
              <input
                type="checkbox"
                checked={input.ventilatie}
                onChange={() => setInput({ ...input, ventilatie: !input.ventilatie })}
                className="mt-1 h-4 w-4 accent-brand-600"
              />
              <div>
                <div className="font-semibold text-gray-900">CO₂-gestuurd ventilatiesysteem</div>
                <div className="text-xs text-gray-500">Vast bedrag €400</div>
              </div>
            </label>
          </div>
        </Stap>
      )}

      {stap === 8 && (
        <Stap label="Elektrische kookvoorziening?" hint="Alleen subsidiabel in combinatie met een aansluiting op een warmtenet.">
          <label className={`flex items-start gap-3 rounded-lg border p-4 cursor-pointer ${input.elektrischeKook ? "border-brand-600 bg-brand-50" : "border-gray-200"} ${!input.warmtenet ? "opacity-50" : ""}`}>
            <input
              type="checkbox"
              checked={input.elektrischeKook}
              disabled={!input.warmtenet}
              onChange={() => setInput({ ...input, elektrischeKook: !input.elektrischeKook })}
              className="mt-1 h-4 w-4 accent-brand-600"
            />
            <div>
              <div className="font-semibold text-gray-900">Elektrische kookvoorziening aanschaffen</div>
              <div className="text-xs text-gray-500">
                {input.warmtenet ? "Vast bedrag €400" : "Vereist eerst aansluiting op een warmtenet (stap 7)"}
              </div>
            </div>
          </label>
          <div className="mt-6 rounded-lg bg-brand-50 p-4 text-sm text-brand-800">
            <strong>Klaar om uw subsidiebedrag te bekijken?</strong>
            <p className="mt-1 text-brand-700">
              Klik op &quot;Bekijk subsidiebedrag&quot; voor een gepersonaliseerd overzicht.
            </p>
          </div>
        </Stap>
      )}

      {/* Navigatie */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={vorige}
          disabled={stap === 1}
          className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-5 py-3 text-sm font-bold text-gray-700 disabled:opacity-40 hover:bg-gray-50 transition-all"
        >
          <ArrowLeft size={16} /> Vorige
        </button>
        {stap < TOTAAL_STAPPEN ? (
          <button
            type="button"
            onClick={volgende}
            disabled={stap === 1 && !adresGeldig}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white disabled:opacity-40 hover:bg-brand-700 transition-all"
          >
            Volgende <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700 transition-all"
          >
            Bekijk subsidiebedrag <CheckCircle size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

function Stap({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-gray-900">{label}</h3>
      {hint && <p className="mt-1 text-sm text-gray-600">{hint}</p>}
      <div className="mt-5">{children}</div>
    </div>
  );
}

type RadioOption = { value: string; label: string; sublabel?: string };
function RadioGroup({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: RadioOption[];
}) {
  return (
    <div className="space-y-2">
      {options.map((o) => (
        <label
          key={o.value}
          className={`flex items-center justify-between gap-3 rounded-lg border p-4 cursor-pointer ${
            value === o.value ? "border-brand-600 bg-brand-50" : "border-gray-200"
          }`}
        >
          <span className="flex items-center gap-3">
            <input
              type="radio"
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="h-4 w-4 accent-brand-600"
            />
            <span className="font-semibold text-gray-900">{o.label}</span>
          </span>
          {o.sublabel && <span className="text-sm text-gray-500">{o.sublabel}</span>}
        </label>
      ))}
    </div>
  );
}
