import { links } from "../content";

const chips = [
  { label: "iOS", icon: "📱", x: 12, y: 18, delay: "0s" },
  { label: "Android", icon: "🤖", x: 86, y: 14, delay: "-1.5s" },
  { label: "Website", icon: "🌐", x: 92, y: 52, delay: "-3s" },
  { label: "Payments", icon: "💳", x: 82, y: 88, delay: "-4.5s" },
  { label: "CRM", icon: "📇", x: 14, y: 84, delay: "-2s" },
  { label: "Email", icon: "✉️", x: 4, y: 50, delay: "-5s" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* soft background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
        <div className="animate-blob absolute top-40 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-coral/15 blur-3xl [animation-delay:-6s]" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sun/20 blur-3xl [animation-delay:-12s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-sm font-medium text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-mint" />
              <span className="relative h-2 w-2 rounded-full bg-mint" />
            </span>
            Your On-Demand Technology Partner
          </div>

          <h1 className="font-display text-5xl leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Technology shouldn&apos;t{" "}
            <span className="relative inline-block">
              <span className="relative z-10">slow down</span>
              <svg
                aria-hidden
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 z-0 h-4 w-full text-sun"
              >
                <path d="M2 14 C 80 4, 200 4, 298 12" stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none" />
              </svg>
            </span>{" "}
            your mission.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Ongoing <strong className="font-semibold text-ink">mobile app</strong>, website, and
            technology management for small businesses, churches, and growing organizations. I
            take ownership of your tech so you can get back to your work.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-cream shadow-xl shadow-ink/15 transition-all hover:-translate-y-0.5 hover:bg-brand"
            >
              Book a Free Consultation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#manage"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/60 px-7 py-4 font-semibold backdrop-blur transition-all hover:-translate-y-0.5 hover:border-ink/40"
            >
              See What I Manage
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            Prefer to talk now?{" "}
            <a href={links.text} className="font-semibold text-brand underline-offset-4 hover:underline">
              Text
            </a>{" "}
            or{" "}
            <a href={links.call} className="font-semibold text-brand underline-offset-4 hover:underline">
              call me
            </a>
            , no forms required.
          </p>
        </div>

        <PhoneScene />
      </div>
    </section>
  );
}

function PhoneScene() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden>
      {/* connection lines */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {chips.map((c) => (
          <line
            key={c.label}
            x1="50"
            y1="50"
            x2={c.x}
            y2={c.y}
            stroke="var(--brand)"
            strokeOpacity="0.35"
            strokeWidth="0.4"
            strokeDasharray="1.5 2.5"
            className="animate-dash"
          />
        ))}
      </svg>

      {/* phone */}
      <div className="animate-float absolute top-1/2 left-1/2 h-[78%] w-[42%] -translate-x-1/2 -translate-y-1/2">
        <div className="h-full w-full -translate-y-[0px] rounded-[2.2rem] bg-ink p-[6px] shadow-2xl shadow-brand/30">
          <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-white">
            <div className="absolute top-2 left-1/2 z-20 h-4 w-14 -translate-x-1/2 rounded-full bg-ink" />
            <Screen delay="0s">
              <ScreenHeader title="Dashboard" />
              <div className="rounded-xl bg-brand p-3 text-white">
                <p className="text-[9px] opacity-80">Daily active users</p>
                <p className="font-display text-xl font-bold">30,412</p>
                <div className="mt-2 flex h-10 items-end gap-1">
                  {[40, 55, 45, 70, 60, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <Row dot="bg-mint" label="All systems normal" />
              <Row dot="bg-sun" label="2 requests in progress" />
            </Screen>
            <Screen delay="-6s">
              <ScreenHeader title="Releases" />
              <div className="rounded-xl bg-mint/15 p-3">
                <p className="text-[9px] font-semibold text-mint">LIVE ✓</p>
                <p className="font-display text-sm font-bold">v4.2.0 shipped</p>
                <p className="text-[9px] text-muted">App Store &amp; Google Play</p>
              </div>
              <Row dot="bg-mint" label="Crash-free: 99.9%" />
              <Row dot="bg-mint" label="iOS 19 compatible" />
              <Row dot="bg-brand" label="Android rollout 100%" />
            </Screen>
            <Screen delay="-3s">
              <ScreenHeader title="Integrations" />
              <Row dot="bg-mint" label="Payments syncing" />
              <Row dot="bg-mint" label="CRM up to date" />
              <Row dot="bg-mint" label="Email automations on" />
              <Row dot="bg-mint" label="Website backed up" />
              <div className="rounded-xl bg-coral/10 p-3 text-[9px] font-medium text-coral">
                Fixed overnight: checkout webhook 🔧
              </div>
            </Screen>
          </div>
        </div>
      </div>

      {/* orbiting chips */}
      {chips.map((c) => (
        <div
          key={c.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
        >
          <div
            className="animate-float flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold whitespace-nowrap shadow-lg shadow-ink/5 sm:text-sm"
            style={{ animationDelay: c.delay, animationDuration: "5s" }}
          >
            <span>{c.icon}</span>
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function Screen({ children, delay }: { children: React.ReactNode; delay: string }) {
  return (
    <div
      className="absolute inset-0 space-y-2 px-3 pt-9"
      style={{ animation: `screen 9s ease-in-out infinite`, animationDelay: delay }}
    >
      {children}
    </div>
  );
}

function ScreenHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between pb-1">
      <p className="font-display text-sm font-bold">{title}</p>
      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-brand to-coral" />
    </div>
  );
}

function Row({ dot, label }: { dot: string; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-line px-2.5 py-2">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
      <span className="text-[9px] font-medium">{label}</span>
    </div>
  );
}
