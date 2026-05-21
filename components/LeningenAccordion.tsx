"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type Lening = {
  doelgroep: string;
  title: string;
  amount: string;
  text: string;
  voorwaarden: string[];
};

export default function LeningenAccordion({ items }: { items: Lening[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start">
      {items.map((l, i) => {
        const isOpen = openIdx === i;
        return (
          <article
            key={l.title}
            className="rounded-2xl bg-white border border-gray-200 hover:border-brand-200 transition-all overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full p-6 text-left flex items-start justify-between gap-4 group cursor-pointer"
            >
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{l.doelgroep}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-gray-900">{l.title}</h3>
                <p className="mt-2 font-display text-xl font-extrabold text-brand-700">{l.amount}</p>
              </div>
              <ChevronDown
                size={22}
                className={`mt-1 shrink-0 text-brand-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                  <p className="text-sm leading-relaxed text-gray-700">{l.text}</p>
                  <ul className="mt-4 space-y-2">
                    {l.voorwaarden.map((v) => (
                      <li key={v} className="flex items-start gap-2 text-xs text-gray-800">
                        <Check size={14} className="mt-0.5 text-brand-600 shrink-0" strokeWidth={3} />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
