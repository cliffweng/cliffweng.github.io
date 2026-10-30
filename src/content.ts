export type Role = {
  title: string;
  org: string;
  summary: string;
};

export type Project = {
  name: string;
  href: string;
  blurb: string;
  kind: string;
};

export const roles: Role[] = [
  {
    title: "Managing Director, Enterprise",
    org: "Numerix",
    summary:
      "Numerix acquired PolyPaths in August 2023. I am Managing Director, Enterprise.",
  },
  {
    title: "Managing Director",
    org: "PolyPaths",
    summary:
      "Designed and managed development of enterprise fixed-income analytics software used by major dealers and fixed-income funds.",
  },
  {
    title: "Founder",
    org: "Fairway Financial",
    summary: "Partnership and hedge-fund accounting software firm.",
  },
  {
    title: "Senior Technologist",
    org: "Citadel Investment Services",
    summary:
      "Developed a securities-lending and repo system and integrated it with upstream and downstream systems.",
  },
  {
    title: "VP, Software Analyst",
    org: "Paloma Partners Management Company",
    summary:
      "Developed ISIS, a securities-lending and repo system used by a global team. The system was later spun off and sold to a client.",
  },
];

export type SocialLink = {
  name: string;
  href: string;
};

export const linkedInUrl = "https://www.linkedin.com/in/cliffweng/";

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: linkedInUrl },
  { name: "X", href: "https://twitter.com/cliffweng" },
  { name: "GitHub", href: "https://github.com/cliffweng" },
];

export const pillars: { title: string; body: string }[] = [
  {
    title: "FinTech, quant risk and capital markets",
    body: "Institutional risk, derivatives, and pricing infrastructure, built at PolyPaths and Numerix. Where RWA and tokenization break, why B2B FinTech struggles with banks (auditability, SOC 2, deterministic execution), and what family office and wealth infrastructure needs underneath.",
  },
  {
    title: "From lab demo to enterprise scale",
    body: "Systems architecture and AI in practice: the data flywheel illusion, edge-to-cloud telemetry, and the 80/20 of startup tech debt.",
  },
  {
    title: "Cross-border engineering and venture",
    body: "A bridge between Wall Street and Silicon Valley capital and Taiwan deep tech and engineering: the Taiwan engineering dividend and how to run cross-border pilots.",
  },
];

export const helpItems: { title: string; body: string }[] = [
  {
    title: "Architecture due diligence",
    body: "An independent read on whether the system can carry the plan.",
  },
  {
    title: "Data pipeline design",
    body: "Pipelines and data assets that compound into a real moat.",
  },
  {
    title: "Multi-agent workflow orchestration",
    body: "Agents with shared memory, retries, and human gates.",
  },
  {
    title: "Enterprise-readiness roadmap",
    body: "The path to bank-grade auditability, security, and deterministic behavior.",
  },
];

export const guides: { name: string; href: string }[] = [
  { name: "LLM agent engineering", href: "https://cliffweng.com/llm-agent-eng-study-guide/" },
  { name: "System design", href: "https://cliffweng.com/system-design-guide/" },
  { name: "Financial engineering", href: "https://cliffweng.com/financial-engineering-guide/" },
  { name: "Quant research", href: "https://cliffweng.com/quant-research-guide/" },
  { name: "Corporate bonds", href: "https://cliffweng.com/corporate-bond-guide/" },
  { name: "DevOps and cloud", href: "https://cliffweng.com/devops-cloud-guide/" },
  { name: "Startups", href: "https://cliffweng.com/startup-guide/" },
  { name: "All study guides", href: "https://cliffweng.com/study-guides/" },
];

export const projects: Project[] = [
  {
    name: "Hot Topics",
    href: "https://hot-topics-nine.vercel.app",
    kind: "Live app",
    blurb:
      "A live board of headlines clustered from public feeds. If a source is down, the board says so.",
  },
  {
    name: "Paper Trading Desk",
    href: "https://paper-trading-desk-kappa.vercel.app",
    kind: "Live app",
    blurb:
      "Independent LLM agents on a shared simulated tape. Paper only: no real money and no brokerage.",
  },
  {
    name: "10 Agentic Workflows",
    href: "https://10-agentic-workflows.vercel.app",
    kind: "Live app",
    blurb:
      "Industry workflows where specialized agents share memory, retry, and stop for a person when the gate says so.",
  },
  {
    name: "Sim Office",
    href: "https://sim-office-one.vercel.app",
    kind: "Live app",
    blurb:
      "An equity-research floor. Desks pass a note from intake through data, modeling, drafting, review, and compliance.",
  },
  {
    name: "MintCert",
    href: "https://mintcert.vercel.app",
    kind: "Live app",
    blurb: "On-chain certificate bureau.",
  },
  {
    name: "TradingSim",
    href: "https://github.com/cliffweng/TradingSim",
    kind: "GitHub",
    blurb:
      "Python backtests for single-name strategies and sector rotation, with tax-aware profit and loss.",
  },
  {
    name: "FE-QuantLib",
    href: "https://github.com/cliffweng/FE-QuantLib",
    kind: "GitHub",
    blurb:
      "An interactive QuantLib explorer for bonds, options, swaps, yield curves, and FX forwards.",
  },
];
