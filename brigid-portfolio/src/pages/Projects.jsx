import { useState } from "react";
import Masterhead from "../components/Masterhead";
import Footer from "../components/Footer";
import { PROJECTS } from "../data/projects";

const CATEGORIES = [
  "ALL",
  "FULL-STACK WEB PLATFORM",
  "SYSTEMS & CLI TOOL",
  "FRONTEND CLIENT",
  "INTERACTIVE WEB APP",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-flag selection:text-ink">
      <Masterhead
        status="FULL-STACK SOFTWARE ENGINEERING"
        dispatchTag="INDEX // PRODUCTION ARCHIVE"
      />

      <main>
        {/* Editorial Section Header */}
        <section className="border-b-4 border-ink bg-paper px-6 py-10 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-signal">
              // INDEX RECORD 02
            </div>
            <h1 className="font-display text-5xl font-black uppercase tracking-tight text-ink sm:text-7xl">
              Selected Works <span className="text-signal">&</span> Architecture
            </h1>
            <p className="mt-3 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
              Software built to explore ideas, test resilient architectures, and solve practical workflow problems.
            </p>

            {/* Category Filter Bar */}
            <div className="mt-8 flex flex-wrap gap-2 border-t-2 border-ink pt-6">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`cursor-pointer border-2 border-ink px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeFilter === category
                      ? "bg-ink text-paper"
                      : "bg-paper text-ink hover:bg-flag"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* The BroadSheet Project Register */}
        <section className="border-b-4 border-ink bg-paper">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 divide-y-4 divide-ink border-b-2 border-ink md:grid-cols-2 md:divide-y-0">
              {filteredProjects.map((project, idx) => (
                <article
                  key={project.id}
                  className={`flex flex-col justify-between p-6 sm:p-10 ${
                    idx % 2 === 0 ? "bg-paper" : "bg-[#FAF7EE]"
                  } ${idx % 2 === 0 ? "md:border-r-4 md:border-ink" : ""} ${
                    idx >= 2 ? "md:border-t-4 md:border-ink" : ""
                  }`}
                >
                  <div>
                    {/* Top Metadata Strip */}
                    <div className="mb-4 flex items-center justify-between border-b-2 border-ink pb-2 font-mono text-[11px]">
                      <span className="font-bold text-ink">{project.index}</span>
                      <span className="border border-ink bg-flag px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-ink">
                        {project.year}
                      </span>
                    </div>

                    {/* Category Stamp & Subtitle */}
                    <div className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-signal">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl">
                      {project.title}
                    </h2>

                    <p className="mt-1 font-mono text-xs font-bold uppercase text-ink/70">
                      {project.tagline}
                    </p>

                    {/* Summary */}
                    <p className="mt-4 font-body text-base leading-relaxed text-ink/90">
                      {project.summary}
                    </p>

                    {/* Technical Specifications */}
                    <div className="my-6 border-2 border-ink bg-paper p-4 shadow-[3px_3px_0px_0px_var(--color-ink)]">
                      <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-ink/70">
                        ENGINEERING HIGHLIGHTS:
                      </span>
                      <ul className="space-y-1.5 font-mono text-xs text-ink/90">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="font-bold text-signal">›</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-ink bg-paper px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Status Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink pt-4 font-mono text-xs">
                    <div className="flex flex-wrap gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-ink bg-ink px-3 py-1.5 font-bold uppercase text-paper transition-colors hover:border-signal hover:bg-signal"
                        >
                          Live Docs ↗
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-ink bg-paper px-3 py-1.5 font-bold uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
                        >
                          Source Code ↗
                        </a>
                      )}
                    </div>
                    <span className="bg-[#FAF7EE] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ink/70">
                      REF // {project.id.toUpperCase()}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Inquiries Callout */}
        <section className="border-b-4 border-ink bg-ink px-6 py-10 text-paper">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-flag">
                // ARCHIVE COMPLETE
              </div>
              <h3 className="font-display text-2xl font-black uppercase sm:text-3xl">
                Looking for specific architecture or code samples?
              </h3>
            </div>
            <a
              href="https://github.com/DevBrigid"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-paper bg-signal px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-paper transition-colors hover:border-flag hover:bg-flag hover:text-ink"
            >
              Inspect GitHub Profile ↗
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}