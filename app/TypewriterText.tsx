"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  typeSpeed?: number; // ms per char (typing)
  eraseSpeed?: number; // ms per char (erasing)
  pauseAfterType?: number; // ms vol getoond voor wissen
  pauseAfterErase?: number; // ms leeg voor opnieuw beginnen
  className?: string;
};

export default function TypewriterText({
  text,
  typeSpeed = 45,
  eraseSpeed = 25,
  pauseAfterType = 2500,
  pauseAfterErase = 300,
  className,
}: Props) {
  const [shown, setShown] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause-typed" | "erasing" | "pause-erased">("typing");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (shown.length < text.length) {
        timer = setTimeout(() => setShown(text.slice(0, shown.length + 1)), typeSpeed);
      } else {
        timer = setTimeout(() => setPhase("pause-typed"), 0);
      }
    } else if (phase === "pause-typed") {
      timer = setTimeout(() => setPhase("erasing"), pauseAfterType);
    } else if (phase === "erasing") {
      if (shown.length > 0) {
        timer = setTimeout(() => setShown(text.slice(0, shown.length - 1)), eraseSpeed);
      } else {
        timer = setTimeout(() => setPhase("pause-erased"), 0);
      }
    } else if (phase === "pause-erased") {
      timer = setTimeout(() => setPhase("typing"), pauseAfterErase);
    }

    return () => clearTimeout(timer);
  }, [shown, phase, text, typeSpeed, eraseSpeed, pauseAfterType, pauseAfterErase]);

  return (
    <span className={className}>
      {shown}
      <span className="typewriter-cursor inline-block ml-1">|</span>
    </span>
  );
}
