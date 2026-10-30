import { useEffect, type ReactNode } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  guides,
  helpItems,
  linkedInUrl,
  pillars,
  projects,
  roles,
  socialLinks,
} from "./content";

const studyGuidesUrl = "https://cliffweng.com/study-guides/";

const sectionIds = new Set([
  "focus",
  "advisory",
  "background",
  "projects",
  "writing",
]);

function sameSite(href: string) {
  return href.startsWith("https://cliffweng.com/");
}

function Outbound({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const internal = sameSite(href);
  return (
    <a
      className={className}
      href={href}
      {...(internal ? {} : { target: "_blank", rel: "noreferrer" })}
    >
      {children}
    </a>
  );
}

function SocialList() {
  return (
    <>
      {socialLinks.map((link) => (
        <Outbound key={link.href} href={link.href}>
          {link.name}
        </Outbound>
      ))}
    </>
  );
}

function SectionLink({ to, children }: { to: string; children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <Link to={to} aria-current={pathname === to ? "location" : undefined}>
      {children}
    </Link>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        Cliff Weng
      </Link>
      <nav aria-label="Primary">
        <SectionLink to="/focus">Focus</SectionLink>
        <SectionLink to="/advisory">Advisory</SectionLink>
        <SectionLink to="/background">Background</SectionLink>
        <SectionLink to="/projects">Projects</SectionLink>
        <SectionLink to="/writing">Writing</SectionLink>
        <a href={studyGuidesUrl}>Study Guides</a>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Cliff Weng · New York area</p>
      <p>
        <SocialList />
      </p>
    </footer>
  );
}

function RouteScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";

    const id = pathname.replace(/^\//, "");
    if (!sectionIds.has(id)) {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const section = document.getElementById(id);
      const header = document.querySelector(".site-header");
      if (!section || !header) return;
      const delta =
        section.getBoundingClientRect().top - header.getBoundingClientRect().bottom;
      window.scrollBy({ top: delta, behavior });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <section id="top" className="hero">
        <p className="kicker">New York area</p>
        <h1>Cliff Weng</h1>
        <p className="headline">
          Deep-Tech &amp; FinTech Architect | Angel Investor &amp; Strategic Advisor
        </p>
        <p className="lede">
          I help early-stage startups de-risk architecture, build data moats,
          and get ready for enterprise buyers, bridging Wall Street and Silicon
          Valley capital with Taiwan deep tech and engineering.
        </p>
        <p className="hero-links">
          <Outbound className="button" href={linkedInUrl}>
            Contact on LinkedIn
          </Outbound>
          <Link to="/advisory">How I help founders</Link>
        </p>
      </section>

      <section id="focus" aria-labelledby="focus-heading">
        <p className="kicker">Focus</p>
        <h2 id="focus-heading">Three areas of work</h2>
        <ol className="pillars">
          {pillars.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="advisory" aria-labelledby="advisory-heading">
        <p className="kicker">Advisory</p>
        <h2 id="advisory-heading">How I help founders</h2>
        <ul className="help">
          {helpItems.map((h) => (
            <li key={h.title}>
              <h3>{h.title}</h3>
              <p>{h.body}</p>
            </li>
          ))}
        </ul>
        <p className="cta">
          Early-stage founder or VC partner looking for a technical advisor?{" "}
          <Outbound href={linkedInUrl}>Reach out on LinkedIn</Outbound>.
        </p>
      </section>

      <section id="background" aria-labelledby="background-heading">
        <p className="kicker">Background</p>
        <h2 id="background-heading">Track record</h2>
        <div className="prose">
          <p>
            I built securities-lending and repo systems at Paloma Partners and
            Citadel, then co-founded Fairway Financial, a hedge-fund accounting
            software firm. In April 2000 I joined PolyPaths to design its
            enterprise fixed-income analytics platform. Numerix acquired
            PolyPaths in August 2023, and I am Managing Director, Enterprise at
            Numerix.
          </p>
        </div>
        <ol className="roles">
          {roles.map((role) => (
            <li key={role.org}>
              <h3>
                {role.title}
                <span className="org"> · {role.org}</span>
              </h3>
              <p>{role.summary}</p>
            </li>
          ))}
        </ol>
        <dl className="degrees">
          <div>
            <dt>M.S. Computer Science</dt>
            <dd>Courant Institute, New York University</dd>
          </div>
          <div>
            <dt>B.S. Computer Science</dt>
            <dd>National Taiwan University</dd>
          </div>
        </dl>
      </section>

      <section id="projects" aria-labelledby="projects-heading">
        <p className="kicker">Projects</p>
        <h2 id="projects-heading">Selected work</h2>
        <ul className="projects">
          {projects.map((project) => (
            <li key={project.href}>
              <Outbound className="project" href={project.href}>
                <span className="kind">{project.kind}</span>
                <h3>{project.name}</h3>
                <p>{project.blurb}</p>
                <span className="go">Open</span>
              </Outbound>
            </li>
          ))}
        </ul>
      </section>

      <section id="writing" aria-labelledby="writing-heading">
        <p className="kicker">Writing</p>
        <h2 id="writing-heading">The Systems Lens</h2>
        <p className="soon">
          Long-form memos on systems, capital markets, and cross-border
          engineering are coming soon.
        </p>
        <p>In the meantime, my study guides are open to read:</p>
        <ul className="guides">
          {guides.map((g) => (
            <li key={g.href}>
              <Outbound href={g.href}>{g.name}</Outbound>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default function App() {
  return (
    <>
      <a
        className="skip"
        href="#content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("content")?.focus();
        }}
      >
        Skip to content
      </a>
      <SiteHeader />
      <RouteScroll />
      <main id="content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/focus" element={<Home />} />
          <Route path="/advisory" element={<Home />} />
          <Route path="/background" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/writing" element={<Home />} />
          <Route path="/about" element={<Navigate to="/background" replace />} />
          <Route path="/experience" element={<Navigate to="/background" replace />} />
          <Route path="/education" element={<Navigate to="/background" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
