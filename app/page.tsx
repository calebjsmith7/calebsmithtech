import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import {
  brand,
  contact,
  faqs,
  links,
  plans,
  problems,
  reasons,
  services,
  stats,
  steps,
  work,
} from "./content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problems />
        <Manage />
        <CtaBand />
        <HowItWorks />
        <WhyMe />
        <Proof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------------------------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-brand uppercase">{children}</p>
  );
}

function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

function ContactButtons({ dark = false }: { dark?: boolean }) {
  const secondary = dark
    ? "border-white/20 text-cream hover:border-white/60"
    : "border-ink/15 bg-white/60 hover:border-ink/40";
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
      <a
        href={links.text}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white shadow-xl shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-coral"
      >
        💬 Text me
      </a>
      <a
        href={links.call}
        className={`inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-semibold transition-all hover:-translate-y-0.5 ${secondary}`}
      >
        📞 Call {contact.phoneDisplay}
      </a>
      <a
        href={links.email}
        className={`inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-semibold transition-all hover:-translate-y-0.5 ${secondary}`}
      >
        ✉️ Email me
      </a>
    </div>
  );
}

/* ---------------------------------------------------------------- */

const marqueeItems = [
  "iOS Apps",
  "Android Apps",
  "Web Apps",
  "Websites",
  "CRM",
  "Email Automation",
  "Payments",
  "APIs & Integrations",
  "App Store Releases",
  "Monitoring",
];

function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-white py-5" aria-hidden>
      <div className="animate-marquee flex w-max gap-10">
        {[...marqueeItems, ...marqueeItems].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg font-semibold whitespace-nowrap text-ink/70">
            {t}
            <span className="text-coral">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Problems() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <Eyebrow>Sound familiar?</Eyebrow>
          <H2>Your tech is supposed to help. Lately it&apos;s been a headache.</H2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <div className="relative mb-5 h-12 w-12">
                  <span className="problem-icon absolute inset-0 grid place-items-center rounded-2xl bg-coral/10 text-2xl">
                    {p.icon}
                  </span>
                  <span className="problem-check absolute inset-0 grid place-items-center rounded-2xl bg-mint/15 text-xl font-bold text-mint opacity-0">
                    ✓
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="font-display text-2xl font-semibold">
            Good news: <span className="text-brand">every one of these is fixable.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const serviceStyles: Record<string, { bg: string; icon: string }> = {
  web: { bg: "bg-sun/25", icon: "🌐" },
  crm: { bg: "bg-coral/15", icon: "📬" },
  integrations: { bg: "bg-mint/20", icon: "🔗" },
};

function Manage() {
  const [mobile, ...rest] = services;
  return (
    <section id="manage" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <Eyebrow>What I manage</Eyebrow>
          <H2>One partner for your entire tech stack.</H2>
          <p className="mt-5 text-lg text-muted">
            You don&apos;t need four vendors and a group chat. I own how it all fits together, with
            mobile apps as my specialty.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-3">
          {/* Featured mobile card */}
          <Reveal className="lg:col-span-2 lg:row-span-3">
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-ink p-8 text-cream md:p-10">
              <div aria-hidden className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
              <div className="relative grid h-full gap-8 md:grid-cols-[1.2fr_1fr]">
                <div className="flex flex-col">
                  <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-sun px-3 py-1 text-xs font-bold text-ink">
                    ★ {mobile.tag}
                  </span>
                  <h3 className="font-display text-3xl font-bold md:text-4xl">{mobile.title}</h3>
                  <p className="mt-4 leading-relaxed text-cream/70">{mobile.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {mobile.points?.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 text-sm">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-mint text-[10px] font-bold text-ink">✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex gap-2 pt-8">
                    {["iOS", "Android", "Web"].map((p) => (
                      <span key={p} className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <MiniPhones />
              </div>
            </div>
          </Reveal>

          {rest.map((s, i) => (
            <Reveal key={s.key} delay={(i + 1) * 100}>
              <div className="group h-full rounded-[2rem] border border-line bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <div className={`mb-4 grid h-11 w-11 place-items-center rounded-2xl text-xl transition-transform group-hover:scale-110 group-hover:-rotate-6 ${serviceStyles[s.key].bg}`}>
                  {serviceStyles[s.key].icon}
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniPhones() {
  return (
    <div aria-hidden className="relative hidden min-h-64 md:block">
      <div className="animate-float absolute top-4 left-2 h-56 w-28 rotate-[-8deg] rounded-[1.4rem] bg-white p-1.5 shadow-2xl">
        <div className="h-full w-full space-y-1.5 rounded-[1.1rem] bg-gradient-to-b from-brand-soft to-white p-2 pt-5">
          <div className="h-12 rounded-lg bg-brand" />
          <div className="h-3 w-3/4 rounded bg-ink/10" />
          <div className="h-3 w-1/2 rounded bg-ink/10" />
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <div className="h-10 rounded-lg bg-sun/60" />
            <div className="h-10 rounded-lg bg-coral/40" />
          </div>
        </div>
      </div>
      <div
        className="animate-float absolute top-12 right-2 h-56 w-28 rotate-[7deg] rounded-[1.4rem] bg-white p-1.5 shadow-2xl"
        style={{ animationDelay: "-3s" }}
      >
        <div className="h-full w-full space-y-1.5 rounded-[1.1rem] bg-white p-2 pt-5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-full bg-mint/40" />
              <div className="h-2.5 flex-1 rounded bg-ink/10" />
            </div>
          ))}
          <div className="mt-2 h-7 rounded-full bg-ink" />
        </div>
      </div>
    </div>
  );
}

function CtaBand() {
  return (
    <section className="px-5 py-10">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-8 py-12 text-center text-white md:py-14">
          <div aria-hidden className="animate-blob absolute -top-16 -left-10 h-56 w-56 rounded-full bg-coral/50 blur-3xl" />
          <div aria-hidden className="animate-blob absolute -right-10 -bottom-16 h-56 w-56 rounded-full bg-sun/40 blur-3xl [animation-delay:-8s]" />
          <div className="relative">
            <p className="font-display text-3xl font-bold md:text-4xl">Sound like your team? Let&apos;s talk.</p>
            <p className="mx-auto mt-3 max-w-lg text-white/80">
              A free 20-minute conversation. No pressure, no jargon, just clarity on where your tech stands.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a Free Consultation →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function HowItWorks() {
  const { retainer, project } = plans;
  return (
    <section id="how" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <H2>Two ways to work together.</H2>
          <p className="mt-5 text-lg text-muted">
            Ongoing ownership or a one-time build. Both are priced around your actual scope, so you
            only pay for what you need.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-[1.25fr_1fr]">
          {/* Retainer: featured */}
          <Reveal>
            <div className="relative h-full rounded-[2rem] border-2 border-brand bg-white p-8 shadow-2xl shadow-brand/10 md:p-10">
              <span className="absolute -top-3.5 left-8 rounded-full bg-brand px-4 py-1 text-xs font-bold tracking-wide text-white uppercase">
                {retainer.tag}
              </span>
              <p className="text-sm font-semibold text-brand">Recurring · Month-to-month</p>
              <h3 className="mt-2 font-display text-3xl font-bold">{retainer.name}</h3>
              <p className="mt-3 leading-relaxed text-muted">{retainer.pitch}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {retainer.includes.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm font-medium">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint/20 text-[11px] font-bold text-mint">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                  <span className="font-semibold text-ink">Best for:</span> {retainer.bestFor}
                </p>
                <p className="shrink-0 rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand">
                  Flat monthly · priced to scope
                </p>
              </div>
            </div>
          </Reveal>

          {/* One-time project */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-[2rem] border border-line bg-white/60 p-8 md:p-10">
              <p className="text-sm font-semibold text-coral">One-time · Fixed scope</p>
              <h3 className="mt-2 font-display text-3xl font-bold">{project.name}</h3>
              <p className="mt-3 leading-relaxed text-muted">{project.pitch}</p>
              <ul className="mt-7 space-y-3">
                {project.includes.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm font-medium">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-coral/15 text-[10px] text-coral">◆</span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-4 border-t border-line pt-6">
                <p className="text-sm text-muted">
                  <span className="font-semibold text-ink">Best for:</span> {project.bestFor}
                </p>
                <p className="w-fit rounded-full bg-coral/10 px-4 py-2 text-sm font-semibold text-coral">
                  Quoted up front · priced to scope
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Steps */}
        <Reveal className="relative mt-20">
          <div aria-hidden className="absolute top-7 right-[16%] left-[16%] hidden h-0.5 bg-line md:block">
            <div className="draw-line h-full w-full bg-gradient-to-r from-brand via-coral to-sun" />
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="relative text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-line bg-white font-display text-lg font-bold text-brand shadow-lg shadow-ink/5">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section className="bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <Reveal>
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div aria-hidden className="absolute inset-0 rotate-3 rounded-[2rem] bg-gradient-to-br from-brand to-coral transition-transform duration-500 group-hover:rotate-6" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#1e1d3a]">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-compressed */}
              <img
                src="/caleb.jpg"
                alt="Caleb Smith, founder of Caleb Smith Creative"
                width={1086}
                height={1148}
                loading="lazy"
                className="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 pt-16">
                <p className="font-display text-xl font-semibold">Caleb Smith</p>
                <p className="text-sm text-cream/70">Developer &amp; technology partner</p>
              </div>
            </div>
            <div className="animate-float absolute -top-5 -right-4 max-w-[15rem] rounded-2xl bg-sun px-4 py-3 font-display text-sm font-bold text-ink shadow-xl">
              👋 You&apos;ll talk to me, not a ticket queue.
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-sun uppercase">Why work with me</p>
            <H2>Like having a senior engineer on staff, without the hire.</H2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]">
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <Eyebrow>Experience</Eyebrow>
          <H2>Trusted with apps people use every single day.</H2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="rounded-3xl border border-line bg-white p-7">
                <p className="font-display text-6xl font-bold tracking-tight text-brand">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                {/* TODO: swap for anonymized screenshots in /public */}
                <div className={`relative h-40 overflow-hidden ${["bg-brand-soft", "bg-sun/25", "bg-mint/20"][i]}`}>
                  <div className="absolute inset-x-8 top-8 bottom-0 rounded-t-2xl bg-white shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex gap-1 p-3">
                      <span className="h-2 w-2 rounded-full bg-coral/60" />
                      <span className="h-2 w-2 rounded-full bg-sun" />
                      <span className="h-2 w-2 rounded-full bg-mint/70" />
                    </div>
                    <div className="space-y-2 px-4">
                      <div className="h-3 w-2/3 rounded bg-ink/10" />
                      <div className="h-3 w-1/2 rounded bg-ink/10" />
                      <div className="h-8 rounded-lg bg-ink/5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-wider text-brand uppercase">{w.label}</p>
                  <h3 className="mt-2 font-display text-lg leading-snug font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {w.tags.map((t) => (
                      <span key={t} className="rounded-full bg-cream px-2.5 py-1 text-xs font-medium text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <H2>Good questions.</H2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-2xl border border-line bg-cream px-6 py-5 transition-colors open:bg-white open:shadow-lg open:shadow-ink/5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold">
                  {f.q}
                  <span className="faq-plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-xl text-brand transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="pt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute top-10 left-[10%] h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
        <div className="animate-blob absolute right-[10%] bottom-10 h-80 w-80 rounded-full bg-coral/20 blur-3xl [animation-delay:-9s]" />
      </div>
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>Free 20-minute conversation</Eyebrow>
        <h2 className="font-display text-5xl leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl">
          Let&apos;s get your technology <span className="text-brand">working for you.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Text, call, or email, whatever&apos;s easiest. Tell me a little about your organization and
          we&apos;ll find a time to talk.
        </p>
        <div className="mt-10">
          <ContactButtons />
        </div>
        <p className="mt-6 text-sm text-muted">
          or reach me directly at{" "}
          <a href={links.email} className="font-semibold text-ink underline-offset-4 hover:underline">
            {contact.email}
          </a>
        </p>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-5 pt-10 pb-28 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p className="font-display font-semibold text-ink">{brand}</p>
        <p>Mobile apps · Websites · Email & CRM · Integrations</p>
        <p>© {new Date().getFullYear()} {brand}</p>
      </div>
    </footer>
  );
}

