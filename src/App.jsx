import WordPalette from "./WordPalette.jsx";
import { jobs, projects, skills, links } from "./content.js";

function Entries({ items }) {
  return items.map((i) => (
    <article key={i.title}>
      <h3>{i.title}</h3>
      <p className="when">{i.when}</p>
      <p>{i.text}</p>
    </article>
  ));
}

export default function App() {
  return (
    <>
      <header>
        <h1>Yathaarth Singh</h1>
        <p className="lede">Statistics major with a CS minor at the University of Illinois Urbana-Champaign. I write parallel C++ in a research lab, build machine learning projects, and teach programming.</p>
      </header>
      <main>
        <WordPalette />
        <section aria-labelledby="work"><h2 id="work">Experience</h2><Entries items={jobs} /></section>
        <section aria-labelledby="projects"><h2 id="projects">Projects</h2><Entries items={projects} /></section>
        <section aria-labelledby="skills"><h2 id="skills">Skills</h2>
          {skills.map(([k, v]) => <p key={k}><strong>{k}:</strong> {v}</p>)}
        </section>
        <section aria-labelledby="links"><h2 id="links">Elsewhere</h2>
          <ul>{links.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
        </section>
      </main>
    </>
  );
}
