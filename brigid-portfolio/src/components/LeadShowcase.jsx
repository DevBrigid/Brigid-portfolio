import { Link } from "react-router-dom";

export default function LeadShowcase() {
  return (
    <section className="border-b-4 border-ink bg-paper p-6 sm:p-12">
      <div className="mx-auto max-w-4xl">
        {/* Category Header */}
        <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink/60">
          <span className="bg-signal px-2 py-0.5 font-bold text-paper">FEATURED WORK</span>
          <span>•</span>
          <span>FULL-STACK WEB PLATFORM</span>
        </div>

        {/* Project Title */}
        <h2 className="mb-4 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-5xl">
          Spacer Space Booking Platform
        </h2>

        {/* Editorial Screenshot Container */}
        <div className="group relative mb-6 overflow-hidden border-2 border-ink bg-neutral-100">
          <div className="absolute top-3 left-3 z-10 bg-ink px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-paper">
            SYS // PREVIEW 01
          </div>

          {/* Graphical UI Placeholder */}
          <div className="relative flex h-60 sm:h-80 w-full flex-col items-center justify-center border-b-2 border-ink bg-neutral-200 p-6 transition-all duration-500 group-hover:bg-neutral-100">
            {/* Blueprint Grid Background Pattern */}
            {/* <img
                    src="/spacer-preview.png"
                    alt="Spacer platform dashboard preview"
                    className="h-full w-full object-cover object-top grayscale contrast-115 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
                /> */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#14120F 1px, transparent 1px), linear-gradient(90deg, #14120F 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            
            {/* Mock Dashboard Wireframe */}
            <div className="relative z-10 w-full max-w-md border-2 border-ink bg-paper p-4 shadow-[4px_4px_0px_0px_var(--color-ink)]">
              <div className="mb-3 flex items-center justify-between border-b border-ink/20 pb-2">
                <span className="font-mono text-[10px] font-bold uppercase text-signal">
                  ● SPACER DASHBOARD v1.0
                </span>
                <span className="font-mono text-[10px] text-ink/60">LIVE CLOUD</span>
              </div>
              <div className="space-y-2 font-mono text-[11px] text-ink/80">
                <div className="flex justify-between bg-neutral-100 p-1.5">
                  <span>ROOM 04 [CONFERENCE]</span>
                  <span className="font-bold text-wire">RESERVED</span>
                </div>
                <div className="flex justify-between bg-neutral-100 p-1.5">
                  <span>STUDIO A [SOUND STAGE]</span>
                  <span className="font-bold text-signal">OCCUPIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Under-Image Metadata Rail */}
          <div className="flex justify-between bg-paper px-3 py-1.5 font-mono text-[11px] text-ink/70">
            <span>INTERFACE: ROLE-BASED WORKSPACE PORTAL</span>
            <span>POSTGRESQL // FASTAPI REST API</span>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="mb-6 font-body text-base leading-relaxed text-ink/90 sm:text-lg">
          A reservation and resource allocation platform built to coordinate meeting
          spaces, automated invoicing calculations, and role-based permissions with
          FastAPI, PostgreSQL, and modern React interfaces.
        </p>

        {/* Clean Tech Tag Strip */}
        <div className="mb-8 flex flex-wrap gap-2 font-mono text-xs uppercase">
          {["FastAPI", "React", "PostgreSQL", "SQLAlchemy", "Alembic", "Render"].map((tech) => (
            <span
              key={tech}
              className="border border-ink bg-paper px-2.5 py-1 font-semibold text-ink"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://spacer-ef5u.onrender.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-ink bg-ink px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-paper transition-colors hover:border-signal hover:bg-signal"
          >
            Interactive API Docs ↗
          </a>
          <a
            href="https://github.com/DevBrigid/Spacer"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-ink bg-paper px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            GitHub Source ↗
          </a>
          <Link
            to="/projects"
            className="px-2 font-mono text-xs font-bold uppercase text-ink underline hover:text-signal"
          >
            View Full Archive →
          </Link>
        </div>
      </div>
    </section>
  );
}