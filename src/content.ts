export type Role = {
  title: string;
  org: string;
  dates: string;
  place: string;
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
    dates: "Aug 2023 – Present",
    place: "New York City",
    summary:
      "PolyPaths was acquired by Numerix in August 2023. I continue here as Managing Director, Enterprise.",
  },
  {
    title: "Managing Director",
    org: "PolyPaths",
    dates: "Apr 2000 – Aug 2023",
    place: "New York City",
    summary:
      "Designed and managed development of enterprise fixed-income analytics software used by major dealers and fixed-income funds.",
  },
  {
    title: "Founder",
    org: "Fairway Financial",
    dates: "Jan 1999 – Jan 2000",
    place: "New York City",
    summary: "Partnership and hedge-fund accounting software firm.",
  },
  {
    title: "Senior Technologist",
    org: "Citadel Investment Services",
    dates: "Jan 1998 – Jan 1999",
    place: "Chicago",
    summary:
      "Developed a securities-lending and repo system and integrated it with upstream and downstream systems.",
  },
  {
    title: "VP, Software Analyst",
    org: "Paloma Partners Management Company",
    dates: "Jan 1994 – Jan 1999",
    place: "Greenwich, Connecticut",
    summary:
      "Developed ISIS, a securities-lending and repo system used by a global team. The system was later spun off and sold to a client.",
  },
];

export const skills: string[] = [
  "Fixed-income analytics",
  "Quantitative software",
  "LLM applications",
  "Agents",
  "Retrieval-augmented generation",
  "Tool use",
  "Computer science education, grades 6–12",
];

export const projects: Project[] = [
  {
    name: "Study Guides",
    href: "https://cliffweng.com/study-guides/",
    kind: "Site",
    blurb:
      "Short public guides for engineering, finance, and founders. The directory lives on its own page.",
  },
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
    name: "Taiwan Food Selector",
    href: "https://taiwan-food-selector.vercel.app",
    kind: "Live app",
    blurb:
      "A night-market picker: browse Taiwanese dishes, or spin the wheel when dinner will not decide itself.",
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
  {
    name: "Coding Dojo",
    href: "https://github.com/cliffweng/coding-dojo",
    kind: "GitHub",
    blurb:
      "A Python road map for kids learning to code, from notebooks through data and algorithms.",
  },
];
