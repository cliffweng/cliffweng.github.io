import type { ReactNode } from "react";
import { projects, roles, skills } from "./content";

const studyGuidesUrl = "https://cliffweng.com/study-guides/";

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
      {...(internal
        ? {}
        : { target: "_blank", rel: "noreferrer" })}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#top">
          Cliff Weng
        </a>
        <nav aria-label="Primary">
          <a href="#about">About</a>
          <a href={studyGuidesUrl}>Study Guides</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <main id="content">
        <section id="top" className="hero">
          <p className="kicker">New York City</p>
          <h1>Cliff Weng</h1>
          <p className="lede">
            Managing Director, Enterprise at Numerix. I build fixed-income
            analytics, quantitative tools, and LLM applications.
          </p>
          <p className="hero-links">
            <a href="https://www.linkedin.com/in/cliffweng/">LinkedIn</a>
            <a href="https://github.com/cliffweng" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={studyGuidesUrl}>Study Guides</a>
          </p>
        </section>

        <section id="about" aria-labelledby="about-heading">
          <p className="kicker">About</p>
          <h2 id="about-heading">Quant, founder, engineer</h2>
          <div className="prose">
            <p>
              I was born 翁偉峯 on a Taiwan Sugar plantation in Douliu, Yunlin,
              and grew up in Beitou. I went to Chien Kuo High School, studied
              computer science at National Taiwan University, and served as an
              army lieutenant on Kinmen.
            </p>
            <p>
              I came to New York for a master’s in computer science at NYU’s
              Courant Institute. On the Street I built securities-lending and
              repo systems at Paloma Partners and Citadel, then co-founded
              Fairway Financial, a hedge-fund accounting software firm. In
              April 2000 I joined PolyPaths and spent twenty-three years
              designing the enterprise fixed-income platform. Numerix acquired
              PolyPaths in August 2023, and I stayed on.
            </p>
            <p>
              Elaine and I are raising three boys in New York. Away from the
              models I write study guides and small software — quant tools,
              agent workflows, and a coding road map for kids.
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
      </main>

      <footer className="site-footer">
        <p>Cliff Weng · New York</p>
        <p>
          <a href="https://www.linkedin.com/in/cliffweng/">LinkedIn</a>
          <a href="https://github.com/cliffweng" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={studyGuidesUrl}>Study Guides</a>
        </p>
      </footer>
    </>
  );
}
