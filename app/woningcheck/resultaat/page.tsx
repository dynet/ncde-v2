"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Download, Mail } from "lucide-react";
import { bereken, formatEuro } from "../../../lib/isde-calculator";
import { lege_input } from "../../../lib/woningcheck-types";
import type { WoningCheckInput, BerekeningResultaat } from "../../../lib/woningcheck-types";

export default function ResultaatPaginaWrapper() {
  return (
    <Suspense fallback={<main className="cx py-12 md:py-16"><p className="text-sm text-gray-600">Bezig met laden…</p></main>}>
      <ResultaatPagina />
    </Suspense>
  );
}

function ResultaatPagina() {
  const params = useSearchParams();
  const [resultaat, setResultaat] = useState<BerekeningResultaat | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const d = params.get("d");
    if (!d) {
      setError("Geen woningcheck-gegevens gevonden. Start de woningcheck opnieuw.");
      return;
    }
    try {
      const decoded = atob(decodeURIComponent(d));
      const input: WoningCheckInput = { ...lege_input, ...JSON.parse(decoded) };
      setResultaat(bereken(input));
    } catch {
      setError("De woningcheck-gegevens konden niet gelezen worden. Start opnieuw.");
    }
  }, [params]);

  return (
    <main className="cx py-12 md:py-16">
      <Link href="/#woningcheck" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 mb-6">
        <ArrowLeft size={16} /> Terug naar woningcheck
      </Link>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {resultaat && (
        <>
          <div className="rounded-2xl bg-brand-700 p-8 text-white shadow-[var(--shadow-card)]">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-200">Uw indicatieve ISDE-subsidie</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">{formatEuro(resultaat.totaal)}</h1>
            <p className="mt-3 text-sm text-brand-100 max-w-xl">
              Op basis van uw keuzes komt u indicatief in aanmerking voor bovenstaand bedrag aan ISDE-subsidie 2026.
              {resultaat.isolatieDubbel && (
                <> Omdat u meerdere maatregelen combineert, geldt de <strong className="text-white">verdubbelingsregel</strong> voor isolatie.</>
              )}
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
            <h2 className="font-display text-2xl font-bold text-gray-900">Uitsplitsing per maatregel</h2>
            {resultaat.posten.length === 0 ? (
              <p className="mt-4 text-sm text-gray-600">U heeft geen subsidiabele maatregelen geselecteerd.</p>
            ) : (
              <ul className="mt-5 divide-y divide-gray-100">
                {resultaat.posten.map((p, i) => (
                  <li key={i} className="flex items-start justify-between gap-4 py-4">
                    <div>
                      <div className="font-semibold text-gray-900">{p.label}</div>
                      {p.detail && <div className="mt-1 text-xs text-gray-500">{p.detail}</div>}
                    </div>
                    <div className="font-bold text-brand-700 shrink-0">{formatEuro(p.bedrag)}</div>
                  </li>
                ))}
                <li className="flex items-center justify-between gap-4 py-4 border-t-2 border-gray-200">
                  <div className="font-display text-lg font-bold text-gray-900">Totaal</div>
                  <div className="font-display text-2xl font-extrabold text-brand-700">{formatEuro(resultaat.totaal)}</div>
                </li>
              </ul>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href="/Homepagina/Rekentool_ISDE_voor_woningeigenaren_2026.xlsx"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-600 bg-white px-6 py-4 text-sm font-bold text-brand-600 hover:bg-brand-50 transition-all"
            >
              <Download size={18} />
              Download exacte rekentool (Excel)
            </a>
            <a
              href="mailto:info@ncde.nl?subject=Persoonlijk advies woningcheck"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-4 text-sm font-bold text-white hover:bg-brand-700 transition-all"
            >
              <Mail size={18} />
              Vraag persoonlijk advies aan
            </a>
          </div>

          <div className="mt-8 rounded-xl bg-gray-50 p-5">
            <h3 className="font-display text-base font-bold text-gray-900">Belangrijk om te weten</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-0.5 text-brand-600 shrink-0" />
                Bovenstaand bedrag is een <strong>indicatie</strong>. Het exacte subsidiebedrag wordt bepaald door RVO op basis van het specifieke apparaat (zie ISDE-apparatenlijst).
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-0.5 text-brand-600 shrink-0" />
                ISDE-subsidie aanvragen kunt u zelf doen via{" "}
                <a href="https://www.rvo.nl/subsidies-financiering/isde" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline font-semibold">
                  rvo.nl/isde
                </a>
                , of u laat NCDE u begeleiden.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-0.5 text-brand-600 shrink-0" />
                Tarieven gelden voor maatregelen uitgevoerd in 2026. Wijzigingen voorbehouden.
              </li>
            </ul>
          </div>
        </>
      )}
    </main>
  );
}
