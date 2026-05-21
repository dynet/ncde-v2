"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, Home as HomeIcon } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/subsidies-financiering", label: "Subsidies & Financiering" },
  { href: "/partners", label: "Partners" },
  { href: "/nieuws", label: "Nieuws" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden rounded-md p-2 text-brand-700"
        aria-label="Menu openen"
        aria-expanded={open}
      >
        <Menu size={26} />
      </button>

      {open && mounted && createPortal(
        <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between h-24 px-6 border-b border-gray-100">
              <span className="text-base font-bold text-brand-700">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-2 text-brand-700"
                aria-label="Menu sluiten"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
              {links.map((l, i) => {
                const isActive = active === l.href;
                return (
                  <Link
                    key={`${l.href}-${i}`}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-gray-800 hover:bg-gray-50 hover:text-brand-600"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
            <div className="px-6 pb-6">
              <Link
                href="/#woningcheck"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-all"
              >
                <HomeIcon size={17} />
                Start woningcheck
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
