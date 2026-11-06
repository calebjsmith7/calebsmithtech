"use client";

import { useEffect, useState } from "react";
import { brand, links } from "../content";

const navLinks = [
  { href: "#manage", label: "What I Manage" },
  { href: "#how", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setPastHero(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line/70 bg-cream/80 py-3 backdrop-blur-xl"
            : "py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-display text-lg font-bold text-cream transition-transform group-hover:-rotate-6">
              C
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              {brand}
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream shadow-lg shadow-ink/10 transition-all hover:-translate-y-0.5 hover:bg-brand"
          >
            Book a Call
          </a>
        </nav>
      </header>

      {/* Mobile sticky CTA bar */}
      <div
        className={`fixed inset-x-3 bottom-3 z-50 flex gap-2 rounded-2xl border border-line bg-white/90 p-2 shadow-2xl shadow-ink/15 backdrop-blur-xl transition-all duration-500 md:hidden ${
          pastHero ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        <a
          href={links.text}
          className="flex-1 rounded-xl bg-brand py-3 text-center text-sm font-semibold text-white"
        >
          💬 Text me
        </a>
        <a
          href={links.call}
          className="flex-1 rounded-xl bg-ink py-3 text-center text-sm font-semibold text-cream"
        >
          📞 Call
        </a>
        <a
          href={links.email}
          className="rounded-xl border border-line px-4 py-3 text-center text-sm font-semibold"
          aria-label="Email"
        >
          ✉️
        </a>
      </div>
    </>
  );
}
