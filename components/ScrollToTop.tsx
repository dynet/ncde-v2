"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Forceert scroll naar de bovenkant bij elke route-wissel.
 * Lost de klacht op dat een subpagina (bv. vanaf een homepage-tegel)
 * niet volledig naar boven scrollt waardoor de hero achter de sticky
 * header valt.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
