import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { id: "01", label: "Front Page", path: "/" },
  { id: "02", label: "Selected Works", path: "/projects" },
  { id: "03", label: "Credentials", path: "/about" },
];

export default function Masterthead({ status = "Available for roles" }) {
  return (
    <>
      {/* Top Static Header Area */}
      <header className="border-b-2 border-ink bg-paper">
        {/* Top Utility Strip */}
        <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-4 py-1.5 font-mono text-[11px] text-paper">
          <div className="flex items-center gap-2">
            <span className="bg-signal px-1.5 py-0.5 text-[10px] font-bold uppercase text-paper">
              DISPATCH
            </span>
            <span className="tracking-wider uppercase">
              FULL-STACK SOFTWARE ENGINEERING
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-paper/70">
            <span>NAIROBI, KE [EAT]</span>
            <span>FOLIO // 2026</span>
          </div>
        </div>

        {/* Main Masthead Banner */}
        <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink/70">
              ENGINEERING FOLIO // VOL. 26
            </div>
            <h1 className="font-display text-5xl font-black uppercase tracking-tight text-ink sm:text-6xl">
              Brigid <span className="text-signal">Mukami</span>
            </h1>

            {/* Single Live Status Indicator */}
            <div className="mt-2.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink/80">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wire opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-wire" />
              </span>
              <span>{status}</span>
            </div>
        </div>

        <div>
            <a
                href="/Brigid_Mukami_Resume.pdf"
                download="Brigid_Mukami_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-ink bg-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-paper transition-colors hover:border-signal hover:bg-signal"
            >
                Download Resume ⤓
            </a>
        </div>
        </div>
      </header>

      {/* Persistent Sticky Navigation Ribbon */}
      <nav className="sticky top-0 z-50 border-b-4 border-ink bg-flag shadow-md">
        <ul className="flex flex-wrap divide-x-2 divide-ink border-x-2 border-ink font-mono text-xs font-bold uppercase">
          {NAV_ITEMS.map((item) => (
            <li key={item.path} className="min-w-[120px] flex-1 text-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2.5 transition-colors ${
                    isActive
                      ? "bg-ink text-flag"
                      : "text-ink hover:bg-ink hover:text-flag"
                  }`
                }
              >
                <span className="mr-1 text-[10px] opacity-60">[{item.id}]</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}