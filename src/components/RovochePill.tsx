import { useEffect, useState } from "react";

export function RovochePill() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1400);
    const onScroll = () => setVisible(true);
    window.addEventListener("scroll", onScroll, { once: true, passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  if (dismissed || !visible) return null;

  return (
    <a
      href="https://www.rovoche.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pill fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-full border border-white/30 bg-ivory/85 px-4 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl transition hover:bg-ivory"
      aria-label="Concept by Rovoche — visit Rovoche"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
      </span>
      <span className="flex items-baseline gap-1.5 text-espresso-deep">
        <span className="text-[10px] uppercase tracking-[0.18em] text-espresso-deep/70">Concept by</span>
        <span className="text-sm font-semibold tracking-tight">Rovoche</span>
      </span>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDismissed(true); }}
        aria-label="Dismiss"
        className="ml-1 grid h-5 w-5 place-items-center rounded-full text-espresso-deep/60 transition hover:bg-espresso-deep/10 hover:text-espresso-deep"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
    </a>
  );
}
