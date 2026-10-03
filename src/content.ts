export type Role = {
  title: string;
  org: string;
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
    place: "New York City",
    summary:
      "PolyPaths was acquired by Numerix. I continue here as Managing Director, Enterprise.",
  },
  {
    title: "Managing Director",
    org: "PolyPaths",
    place: "New York City",
    summary:
      "Designed and managed development of enterprise fixed-income analytics software used by major dealers and fixed-income funds.",
  },
  {
    title: "Founder",
    org: "Fairway Financial",
    place: "New York City",
    summary: "Partnership and hedge-fund accounting software firm.",
  },
  {
    title: "Senior Technologist",
    org: "Citadel Investment Services",
    place: "Chicago",
    summary:
      "Developed a securities-lending and repo system and integrated it with upstream and downstream systems.",
  },
  {
    title: "VP, Software Analyst",
    org: "Paloma Partners Management Company",
    place: "Greenwich, Connecticut",
    summary:
      "Developed ISIS, a securities-lending and repo system used by a global team. The system was later spun off and sold to a client.",
  },
];

export const skills: string[] = [
  "Fixed-income analytics",
  "Quantitative software",
  "Enterprise system",
  "Distributed system",
  "Straight-through Processing",
  "Financial Markets",
  "LLM applications",
  "Agents",
  "Tool use",
  "Computer science education, grades 6–12",
];

export type SocialLink = {
  name: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/cliffweng/" },
  { name: "GitHub", href: "https://github.com/cliffweng" },
  { name: "Facebook", href: "https://facebook.com/cliffweng" },
  { name: "Twitter", href: "https://twitter.com/cliffweng" },
  { name: "Instagram", href: "https://instagram.com/cliffweng" },
];

export type TravelResource = {
  name: string;
  href: string;
  blurb: string;
  kind: string;
};

export const travelResources: TravelResource[] = [
  {
    name: "My Grand Tour",
    href: "https://grandtourofmine.blogspot.com/?view=mosaic",
    kind: "Photos",
    blurb:
      "Travel experiences, photos, and stories from around the world.",
  },
  {
    name: "Nomad List",
    href: "https://nomadlist.com/@cliffweng",
    kind: "Profile",
    blurb: "Digital nomad profile and experiences.",
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/cliffweng",
    kind: "Boards",
    blurb: "Travel inspiration boards and collections.",
  },
  {
    name: "AllTrails",
    href: "https://alltrails.com/members/cliffweng",
    kind: "Trails",
    blurb: "Hiking and trail logs and experiences.",
  },
  {
    name: "Hiking Project",
    href: "https://www.hikingproject.com/user/200123456/cliffweng",
    kind: "Trails",
    blurb: "Hiking project profile and trail experiences.",
  },
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
