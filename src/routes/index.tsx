import { createFileRoute } from "@tanstack/react-router";
import { RovochePill } from "@/components/RovochePill";

import heroImg from "@/assets/kiki/luxe-look5-brown-HERO-IMAGE.jpg";
import kiki1 from "@/assets/kiki/Kiki-look1-background.png";
import kiki2 from "@/assets/kiki/kiki-look2-background.png";
import kiki3 from "@/assets/kiki/kiki-look3-edo-background.png";
import kiki4 from "@/assets/kiki/kiki-look4-cover-bridal-transformation-glam-NOT-SOFT-PROCESS-GLAM.png";
import kiki5 from "@/assets/kiki/kiki-look5-cover-lifestyle-NOT-BRIDAL-GLAM-REVEAL.png";
import kiki6 from "@/assets/kiki/kiki-look6-cover-edo-bridal-NOT-PARTY-MAKEUP-FINISH.png";
import kiki7 from "@/assets/kiki/kiki-look7-cover-bridal-glam-NOT-MAKEUP-TRAINING.png";
import kiki8 from "@/assets/kiki/kiki-look8-cover-Traditional-Bridal-Look-NOT-AVIALABLE-TO-TRAVEL.png";
import luxe1 from "@/assets/kiki/luxe-look1-green.jpg";
import luxe2 from "@/assets/kiki/luxe-look2-green.jpg";
import luxe3 from "@/assets/kiki/luxe-look3-red.jpg";
import luxe4 from "@/assets/kiki/luxe-look4-red.jpg";
import luxe6 from "@/assets/kiki/luxe-look6-brown.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://raw.githubusercontent.com/Rovoche/Glam-and-Makeup/main/luxe-look5-brown-HERO-IMAGE.jpg" },
      { name: "twitter:image", content: "https://raw.githubusercontent.com/Rovoche/Glam-and-Makeup/main/luxe-look5-brown-HERO-IMAGE.jpg" },
    ],
  }),
  component: KikiGlam,
});

const NAV = [
  { label: "Experience", href: "#experience" },
  { label: "Transformations", href: "#transformations" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { n: "01", title: "Bridal Glam", desc: "Luxury bridal beauty for traditional weddings, white weddings and once-in-a-lifetime ceremonies.", img: kiki3 },
  { n: "02", title: "Event Makeup", desc: "Sophisticated finishes for birthdays, editorial shoots, celebrations and special occasions.", img: luxe4 },
  { n: "03", title: "Travel Glam", desc: "Premium on-location artistry — destination weddings and private bookings worldwide.", img: luxe1 },
  { n: "04", title: "Beauty Training", desc: "Professional makeup education, artistry mentorship and technique masterclasses.", img: kiki7 },
];

const GALLERY = [
  { img: kiki8, category: "Traditional Bride", title: "Edo Heritage" },
  { img: luxe6, category: "Luxury Soft Glam", title: "Champagne Finish" },
  { img: kiki4, category: "Bridal Glow", title: "First Look" },
  { img: luxe3, category: "Reception Look", title: "Ruby Reception" },
  { img: kiki6, category: "Signature Finish", title: "Regal Edo" },
  { img: luxe2, category: "Editorial", title: "Emerald Muse" },
];

const JOURNEY = [
  { n: "01", title: "Consultation", desc: "We begin with story — understanding your event, outfit, cultural references and the version of yourself you want to meet." },
  { n: "02", title: "Preparation", desc: "A bespoke beauty direction is crafted: skin ritual, tone matching, and a mood specific to your moment." },
  { n: "03", title: "The Moment", desc: "On the day, we deliver a polished, camera-ready finish designed to last from first look to final dance." },
];

function KikiGlam() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-tight text-ivory">Kiki</span>
            <span className="font-display text-2xl italic text-gold">Glam</span>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-[11px] uppercase tracking-[0.22em] text-ivory/75 transition hover:text-gold">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full border border-gold/70 px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-ivory transition hover:bg-gold hover:text-espresso-deep md:inline-block">
            Book
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Kiki Glam signature bridal look"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:object-[center_20%]"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-vignette" />
        <div className="absolute inset-0 gradient-side-fade" />
        <div className="absolute inset-0 bg-espresso-deep/25" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:justify-center md:px-10 md:pb-24">
          <div className="max-w-3xl animate-rise">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/70" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Lagos · Est. Beauty House</span>
            </div>
            <h1 className="font-display text-[clamp(3rem,10vw,7.5rem)] font-medium leading-[0.92] tracking-tight text-ivory">
              Bridal glam.
              <br />
              <span className="italic text-gold">Unforgettable</span> beauty.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory-dim md:text-lg">
              Kiki Glam crafts flawless, camera-ready looks for brides, celebrations and the moments
              you'll remember forever — a Lagos beauty house with a passport.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-espresso-deep transition hover:bg-champagne">
                Book Your Glam
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#transformations" className="inline-flex items-center gap-3 rounded-full border border-ivory/30 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ivory transition hover:border-gold hover:text-gold">
                View Transformations
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-2.5">
              {["Bridal", "Events", "Lagos", "Travel Bookings"].map((b) => (
                <span key={b} className="rounded-full border border-ivory/20 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.24em] text-ivory/85 backdrop-blur-sm">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Floating visual card */}
          <div className="pointer-events-none absolute bottom-8 right-6 hidden w-[260px] rounded-2xl border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-md lg:block lg:right-10 xl:w-[300px]">
            <img src={kiki5} alt="Bridal reveal" className="h-[340px] w-full rounded-xl object-cover" />
            <div className="flex items-center justify-between px-1 pt-3">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-gold">Signature Look</p>
                <p className="mt-1 font-display text-lg italic text-ivory">Bridal Reveal</p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-ivory/60">2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / SERVICES */}
      <section id="experience" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 grid gap-10 md:mb-24 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gold/70" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-gold">The Experience</span>
              </div>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-ivory md:col-span-8">
              Glam created for <span className="italic text-gold">unforgettable</span> moments.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article key={s.n} className="group relative overflow-hidden rounded-2xl border border-white/8 bg-card">
                <div className="relative h-[380px] overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/40 to-transparent" />
                  <span className="absolute left-5 top-5 font-display text-sm italic text-gold">{s.n}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-ivory">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-dim/85">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section id="transformations" className="relative bg-gradient-to-b from-background via-espresso to-background py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gold/70" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Portfolio</span>
              </div>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-ivory">
                See the <span className="italic text-gold">transformations.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ivory-dim">
              Every face tells a story. Each look below is a real chapter — brides, muses and celebrations
              styled by the Kiki Glam studio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {GALLERY.map((g, i) => (
              <a key={i} href="#contact" className="group relative block overflow-hidden rounded-xl">
                <div className="aspect-[3/4] w-full overflow-hidden bg-espresso">
                  <img src={g.img} alt={`${g.category} — ${g.title}`} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/95 via-espresso-deep/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 transition-transform duration-500 group-hover:translate-y-0 md:p-6">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-gold md:text-[10px]">{g.category}</p>
                  <p className="mt-1.5 font-display text-lg italic text-ivory md:text-2xl">{g.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gold/70" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-gold">The Journey</span>
              </div>
              <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-medium leading-[1.02] tracking-tight text-ivory">
                From inspiration to your <span className="italic text-gold">final look.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ivory-dim">
                The Kiki Glam experience is unhurried, intentional and quietly luxurious — designed
                to make you feel as beautiful behind the scenes as you look on camera.
              </p>
              <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
                <img src={kiki2} alt="Beauty preparation" className="h-[420px] w-full object-cover" loading="lazy" />
              </div>
            </div>

            <div className="md:col-span-7">
              <ol className="relative space-y-10 md:space-y-14">
                {JOURNEY.map((j) => (
                  <li key={j.n} className="group relative grid grid-cols-[auto_1fr] gap-6 border-b border-white/10 pb-10 last:border-0 md:gap-10">
                    <div className="font-display text-4xl italic text-gold md:text-5xl">{j.n}</div>
                    <div>
                      <h3 className="font-display text-2xl text-ivory md:text-3xl">{j.title}</h3>
                      <p className="mt-3 max-w-lg text-base leading-relaxed text-ivory-dim">{j.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl">
                  <img src={kiki1} alt="Signature glam" className="h-72 w-full object-cover" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img src={kiki7} alt="Bridal glam" className="h-72 w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative overflow-hidden">
        <img src={kiki3} alt="" className="absolute inset-0 h-full w-full object-cover object-[center_25%]" loading="lazy" />
        <div className="absolute inset-0 bg-espresso-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-deep/50 via-transparent to-espresso-deep" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center md:px-10 md:py-48">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/70" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Book The Studio</span>
            <span className="h-px w-10 bg-gold/70" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.98] tracking-tight text-ivory">
            Ready for your <span className="italic text-gold">glam moment?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ivory-dim">
            Bookings are limited each season to preserve the quality of every look.
            Reserve your date and let's begin designing your moment.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:hello@kikiglam.co" className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-espresso-deep transition hover:bg-champagne">
              Book Your Glam
              <span>→</span>
            </a>
            <a href="https://wa.me/2340000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-ivory/40 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ivory transition hover:border-gold hover:text-gold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m0 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.23 8.25-8.23M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01Z"/></svg>
              WhatsApp
            </a>
          </div>
          <p className="mt-8 text-[11px] uppercase tracking-[0.32em] text-ivory/50">Lagos · Available for destination bookings</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-espresso-deep">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl text-ivory">Kiki</span>
                <span className="font-display text-2xl italic text-gold">Glam</span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory-dim">
                A Lagos-based luxury beauty house crafting bridal glam, event artistry
                and destination bookings.
              </p>
            </div>
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-gold">Studio</p>
              <ul className="space-y-2 text-sm text-ivory-dim">
                <li><a href="#experience" className="hover:text-gold">Experience</a></li>
                <li><a href="#transformations" className="hover:text-gold">Transformations</a></li>
                <li><a href="#journey" className="hover:text-gold">The Journey</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-gold">Contact</p>
              <ul className="space-y-2 text-sm text-ivory-dim">
                <li>hello@kikiglam.co</li>
                <li>Lagos, Nigeria</li>
                <li><a href="#" className="hover:text-gold">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.22em] text-ivory/50 md:flex-row">
            <span>© {new Date().getFullYear()} Kiki Glam. All rights reserved.</span>
            <span>Bridal · Events · Travel · Training</span>
          </div>
        </div>

        {/* ROVOCHE SIGNATURE BLOCK */}
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-4 text-center md:px-10">
          <div className="gold-divider mx-auto w-full" />
          <p className="mt-10 font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.1] text-ivory">
            Built on Rock. <span className="italic font-light text-ivory/85">Crafted to Last.</span>
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.35em] text-ivory/60">
            —{" "}
            <a href="https://www.rovoche.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
              Rovoche
            </a>
          </p>
          <div className="gold-divider mx-auto mt-10 w-full" />
        </div>
      </footer>

      <RovochePill />
    </div>
  );
}
