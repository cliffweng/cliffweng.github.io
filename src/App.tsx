import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  projects,
  roles,
  skills,
  socialLinks,
  travelResources,
} from "./content";

const studyGuidesUrl = "https://cliffweng.com/study-guides/";

const sectionIds = new Set(["about", "experience", "skills", "projects"]);

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

function SocialList({ includeStudyGuides = false }: { includeStudyGuides?: boolean }) {
  return (
    <>
      {socialLinks.map((link) => (
        <Outbound key={link.href} href={link.href}>
          {link.name}
        </Outbound>
      ))}
      {includeStudyGuides ? <a href={studyGuidesUrl}>Study Guides</a> : null}
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

function TravelMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="nav-menu" ref={rootRef}>
      <button
        type="button"
        className={pathname === "/travel" ? "is-current" : undefined}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((value) => !value)}
      >
        Travel
        <span className="caret" aria-hidden="true" />
      </button>
      {open ? (
        <div id={menuId} className="nav-dropdown" role="menu">
          <Link role="menuitem" to="/travel" onClick={() => setOpen(false)}>
            Overview
          </Link>
          {travelResources.map((item) => (
            <a
              key={item.href}
              role="menuitem"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        Cliff Weng
      </Link>
      <nav aria-label="Primary">
        <SectionLink to="/about">About</SectionLink>
        <SectionLink to="/experience">Experience</SectionLink>
        <SectionLink to="/skills">Skills</SectionLink>
        <SectionLink to="/projects">Projects</SectionLink>
        <a href={studyGuidesUrl}>Study Guides</a>
        <TravelMenu />
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Cliff Weng · New York</p>
      <p>
        <SocialList includeStudyGuides />
      </p>
    </footer>
  );
}

function RouteScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    document.title = pathname === "/travel" ? "Travel · Cliff Weng" : "Cliff Weng";

    if (pathname === "/travel") {
      window.scrollTo({ top: 0, behavior });
      return;
    }

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
        <p className="kicker">New York City</p>
        <h1>Cliff Weng</h1>
        <p className="lede">
          Managing Director, Enterprise at Numerix. I build fixed-income
          analytics, quantitative tools, and LLM applications.
        </p>
        <p className="hero-links">
          <SocialList includeStudyGuides />
        </p>
      </section>

      <section id="about" aria-labelledby="about-heading">
        <p className="kicker">About</p>
        <h2 id="about-heading">Quant, founder, engineer</h2>
        <div className="prose">
          <p>
            I was born 翁偉峯 to 翁哲雄 and 王麗君 on a Taiwan Sugar plantation
            (斗六糖廠) in Yunlin (雲林). I grew up in the 1970s and 1980s in
            Peitou (北投).
          </p>
          <p>
            I attended Chien Kuo High School (建中), where I played rugby for
            two years, then studied computer science at National Taiwan
            University. After college I served two years in the Taiwanese
            military on Kinmen (金門) as an army lieutenant.
          </p>
          <p>
            In 1992 I came to New York City to study computer science at NYU’s
            Courant Institute. On the Street I built securities-lending and
            repo systems at Paloma Partners in Greenwich and at Citadel in
            Chicago, then co-founded Fairway Financial, a hedge-fund accounting
            software firm. In April 2000 I joined PolyPaths and spent
            twenty-three years designing the enterprise fixed-income platform.
            Numerix acquired PolyPaths in August 2023, and I stayed on.
          </p>
          <p>
            Elaine and I are raising three boys in New York. They are my joy
            and pride, and my sunshine. Away from the models I write study
            guides and small software — quant tools, agent workflows, and a
            coding road map for kids.
          </p>
        </div>
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

      <section id="study-guides" className="guides" aria-labelledby="guides-heading">
        <p className="kicker">Guides</p>
        <h2 id="guides-heading">Study Guides</h2>
        <p>
          Engineering, finance, and founder notes live in one public
          directory. Open that site from here.
        </p>
        <a className="button" href={studyGuidesUrl}>
          Open study guides
        </a>
      </section>

      <section id="experience" aria-labelledby="experience-heading">
        <p className="kicker">Experience</p>
        <h2 id="experience-heading">Where I have worked</h2>
        <ol className="roles">
          {roles.map((role) => (
            <li key={`${role.org}-${role.dates}`}>
              <div className="role-when">
                <span>{role.dates}</span>
                <span>{role.place}</span>
              </div>
              <div>
                <h3>
                  {role.title}
                  <span className="org"> @ {role.org}</span>
                </h3>
                <p>{role.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="skills" aria-labelledby="skills-heading">
        <p className="kicker">Skills</p>
        <h2 id="skills-heading">What I work on</h2>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
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
    </>
  );
}

function TravelPage() {
  return (
    <section className="route-lead" id="travel" aria-labelledby="travel-heading">
      <p className="kicker">Travel</p>
      <h1 id="travel-heading">Travel</h1>
      <div className="prose">
        <p>
          Welcome to my travel section! Here you can find links to my various
          travel resources and experiences.
        </p>
      </div>
      <ul className="projects">
        {travelResources.map((item) => (
          <li key={item.href}>
            <Outbound className="project" href={item.href}>
              <span className="kind">{item.kind}</span>
              <h3>{item.name}</h3>
              <p>{item.blurb}</p>
              <span className="go">Open</span>
            </Outbound>
          </li>
        ))}
      </ul>
    </section>
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
          <Route path="/about" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/education" element={<Navigate to="/about" replace />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
