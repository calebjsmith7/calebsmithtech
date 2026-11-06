// All editable page copy + contact info lives here.

export const brand = "Caleb Smith Creative";

export const contact = {
  email: "calebjoelsmith@gmail.com",
  phoneDisplay: "(303) 520-8058",
  phoneE164: "+13035208058",
};

export const links = {
  email: `mailto:${contact.email}?subject=${encodeURIComponent(
    "Free consultation – Caleb Smith Creative",
  )}`,
  call: `tel:${contact.phoneE164}`,
  text: `sms:${contact.phoneE164}`,
};

export const problems = [
  { icon: "🔌", title: "Broken integrations", body: "Your payments, CRM, and email stopped talking to each other, and nobody knows why." },
  { icon: "📱", title: "App bugs & store rejections", body: "Crashes, outdated builds, and Apple or Google review emails nobody understands." },
  { icon: "🌐", title: "Website updates that never happen", body: "Simple changes take weeks because the person who built it is long gone." },
  { icon: "✉️", title: "Email automations misfiring", body: "Welcome sequences that don't send, lists that don't sync, campaigns landing in spam." },
  { icon: "💳", title: "Payment problems", body: "Failed checkouts, donation forms acting up, subscriptions that silently stop." },
  { icon: "🤷", title: "Nobody on staff can fix it", body: "You're running an organization, not an IT department, and shouldn't have to." },
];

export const services = [
  {
    key: "mobile",
    title: "Mobile Applications",
    tag: "My specialty",
    body: "iOS, Android, and web apps kept healthy, current, and growing. Store submissions, OS updates, crash monitoring, and new releases, all handled.",
    points: ["App Store & Google Play releases", "OS & dependency updates", "Crash & performance monitoring", "Feature iterations"],
  },
  {
    key: "web",
    title: "Websites & Web Apps",
    body: "Updates, hosting, performance, security, and the custom web tools your team relies on.",
  },
  {
    key: "crm",
    title: "Email Marketing & CRM",
    body: "Automations, list hygiene, and CRM workflows that actually run the way you designed them.",
  },
  {
    key: "integrations",
    title: "Integrations & Support",
    body: "Payments, APIs, and the glue between your systems, plus a real person to call when something breaks.",
  },
];

export const plans = {
  retainer: {
    name: "Monthly Tech Partnership",
    tag: "Most popular",
    pitch: "I become your ongoing technical team. One predictable monthly retainer covers keeping everything running, updated, and improving.",
    includes: [
      "Ongoing maintenance & updates",
      "Bug fixes & troubleshooting",
      "Small requests & content changes",
      "Monitoring, security & backups",
      "App store releases & OS updates",
      "A direct line to your developer",
    ],
    bestFor: "Organizations that rely on their apps, site, and systems every day.",
  },
  project: {
    name: "One-Time Projects",
    pitch: "A defined build with a clear start and finish, scoped and quoted up front.",
    includes: [
      "New mobile apps or websites",
      "Major new features",
      "Redesigns & platform migrations",
      "Integration or automation builds",
    ],
    bestFor: "A specific goal. Many projects roll into a partnership after launch.",
  },
};

export const steps = [
  { n: "01", title: "Free 20-minute call", body: "Tell me what you have and what's frustrating you. No pitch deck, just a conversation." },
  { n: "02", title: "Scope & quote", body: "I'll recommend a partnership, a project, or both, with a clear price based on your scope." },
  { n: "03", title: "I take it from here", body: "Onboarding, documentation, and fixes start right away. You get your time back." },
];

export const reasons = [
  { title: "One point of contact", body: "Apps, website, email, CRM. One person owns all of it, so nothing falls through the cracks." },
  { title: "Talk directly to the developer", body: "No account managers or ticket black holes. You text me, I fix it." },
  { title: "No in-house hire needed", body: "Senior-level technical ownership for a fraction of what a full-time engineer costs." },
  { title: "I see the whole system", body: "I've managed interconnected stacks where one change ripples everywhere, so I know where to look." },
];

export const stats = [
  { value: 30, suffix: "k+", label: "daily active users on apps I've managed" },
  { value: 3, suffix: "", label: "platforms: iOS, Android & Web" },
  { value: 1, suffix: "", label: "point of contact for everything" },
];

export const work = [
  {
    label: "National mobile app",
    title: "iOS & Android app serving tens of thousands daily",
    body: "Ongoing releases, OS upgrades, crash monitoring, and backend integrations for a nationwide user base.",
    tags: ["iOS", "Android", "APIs"],
  },
  {
    label: "Multi-platform product",
    title: "App + website + CRM, all kept in sync",
    body: "One connected system where sign-ups, payments, and email automations flow across every platform.",
    tags: ["Web", "CRM", "Payments"],
  },
  {
    label: "Growing organization",
    title: "From 'nobody knows how this works' to fully managed",
    body: "Audited an inherited stack, documented it, fixed what was broken, and kept it running month after month.",
    tags: ["Audit", "Email", "Support"],
  },
];

export const faqs = [
  {
    q: "What does a monthly partnership cost?",
    a: "Both partnerships and one-time projects are priced based on scope, because every organization's tech is different. After a free 20-minute call you'll get a clear, flat number, with no surprises and no hourly meter running.",
  },
  {
    q: "Can you take over an app or website someone else built?",
    a: "Yes, that's most of what I do. I'll start with an audit so I understand exactly what you have, then take ownership from there.",
  },
  {
    q: "What if we already have a developer or agency?",
    a: "I can work alongside them, cover maintenance so they can focus on new builds, or take over fully. Whatever fits you best.",
  },
  {
    q: "What's the difference between a project and a partnership?",
    a: "A project is a one-time build with a defined finish line, like a new app or a redesign. A partnership is ongoing: I own the maintenance, fixes, and small improvements every month so nothing breaks or falls behind. Most clients start with one and end up with both.",
  },
  {
    q: "Is there a long-term contract?",
    a: "Partnerships are month-to-month. I'd rather earn your business every month than lock you in.",
  },
  {
    q: "Who do you work with?",
    a: "Small businesses, churches, ministries, nonprofits, and growing organizations that depend on technology but don't have an engineer on staff.",
  },
];
