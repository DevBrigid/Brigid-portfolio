const DIARY_ENTRIES = [
  {
    time: "07:45 EAT",
    entryNum: "ENTRY // 001",
    tag: "MORNING RITUAL",
    title: "Analog Schematics & Black Roast",
    narrative:
      "Planning data models on physical paper before writing code. Reviewing state transitions over coffee ensures architecture is intentional before touching the terminal.",
    src: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    alt: "Notebook with handwritten diagrams, pen, and black coffee on a wooden desk",
    isSpotify: false,
  },
  {
    time: "12:30 EAT",
    entryNum: "ENTRY // 002",
    tag: "CORE SYSTEM BUILD",
    title: "Deep Terminal & Logic Flows",
    narrative:
      "Refining FastAPI endpoints and database transactions. Clean code is about clear domain boundaries, readable error returns, and predictable behavior.",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    alt: "Monochrome code on an engineering monitor",
    isSpotify: false,
  },
  {
    time: "16:15 EAT",
    entryNum: "ENTRY // 003",
    tag: "PHYSICAL COMPUTING",
    title: "Hardware Traces & Sensor Prototyping",
    narrative:
      "Testing microcontrollers, GPIO headers, and telemetry feeds. Grounding abstract code back into tactile wires, sensors, and circuit boards.",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    alt: "Electronic circuit board and microchips",
    isSpotify: false,
  },
  {
    time: "22:50 EAT",
    entryNum: "ENTRY // 004",
    tag: "AUDIO FREQUENCY // SPOTIFY",
    title: "Nocturnal Rotation & Deep Flow",
    narrative:
      "Terminal on dark mode, ambient synth streaming on Spotify. The rhythm of steady BPMs keeps focus high during late-night debugging and system refactors.",
    track: "Selected Ambient Works",
    artist: "Spotify • Deep Focus Stream",
    src: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80",
    alt: "Abstract digital sound wave and audio synthesizer visualization",
    isSpotify: true,
  },
];

export default function PhotoEssay() {
  return (
    <section className="border-b-4 border-ink bg-paper">
      {/* Top Utility Ledger Strip */}
      <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-paper">
        <div className="flex items-center gap-2.5">
          <span className="bg-signal px-2 py-0.5 font-bold text-paper">
            DISPATCH // 04
          </span>
          <span className="tracking-wider">
            FIELD ESSAY // 24-HOUR DEV LOG
          </span>
        </div>
        <span className="hidden sm:inline-block text-paper/60">
          STATION: NAIROBI [EAT]
        </span>
      </div>

      {/* Main Editorial Header */}
      <div className="border-b-2 border-ink bg-[#FAF7EE] px-6 py-8 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-signal">
            // DOCUMENTARY ESSAY
          </span>
          <h2 className="mt-1 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-6xl">
            Diary of a Software Engineer
          </h2>
          <p className="mt-2 max-w-2xl font-body text-base leading-relaxed text-ink/85 sm:text-lg">
            A chronological photo essay capturing the rhythm of daily development: 
            from handwritten system diagrams to midnight terminal sessions.
          </p>
        </div>
      </div>

      {/* Responsive Row Grid: 1 col on mobile -> 2 cols on tablet -> 4 cols on desktop */}
      <div className="grid grid-cols-1 divide-y-4 divide-ink sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {DIARY_ENTRIES.map((entry, idx) => (
          <article
            key={entry.entryNum}
            className={`group flex flex-col justify-between p-6 ${
              idx % 2 === 0 ? "bg-paper" : "bg-[#FAF7EE]"
            } ${
              // Responsive interior borders for broadsheet continuity
              idx % 2 === 0 ? "sm:border-r-2 sm:border-ink" : ""
            } ${
              idx < 2 ? "sm:border-b-4 lg:border-b-0 sm:border-ink" : ""
            } ${
              idx !== 3 ? "lg:border-r-2 lg:border-ink" : ""
            }`}
          >
            <div>
              {/* Top Entry Metadata Strip */}
              <div className="mb-4 flex items-center justify-between border-b-2 border-ink pb-2 font-mono text-xs">
                <span
                  className={`px-2 py-0.5 font-bold ${
                    entry.isSpotify
                      ? "bg-signal text-paper"
                      : idx === 0
                      ? "bg-flag text-ink border border-ink"
                      : "bg-ink text-paper"
                  }`}
                >
                  {entry.entryNum}
                </span>
                <span className="font-bold text-ink/80">{entry.time}</span>
              </div>

              {/* Photo Frame Container */}
              <div className="relative mb-4 h-64 w-full overflow-hidden border-2 border-ink bg-neutral-900 sm:h-72">
                <img
                  src={entry.src}
                  alt={entry.alt}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-100"
                />

                {/* Entry Tag Label */}
                <div className="absolute top-2.5 left-2.5 bg-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-paper">
                  {entry.tag}
                </div>

                {/* Spotify Live Player Overlay */}
                {entry.isSpotify && (
                  <div className="absolute right-2.5 bottom-2.5 left-2.5 border-2 border-paper bg-ink/95 p-2.5 text-paper backdrop-blur-sm shadow-[2px_2px_0px_0px_var(--color-signal)]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-signal animate-ping" />
                        <span className="font-mono text-[9px] font-bold tracking-wider text-flag uppercase">
                          LIVE STREAM
                        </span>
                      </div>
                      <div className="flex items-end gap-1 h-3">
                        <span className="w-0.5 bg-flag animate-pulse h-2" />
                        <span className="w-0.5 bg-paper animate-pulse h-3 delay-75" />
                        <span className="w-0.5 bg-signal animate-pulse h-1.5 delay-150" />
                        <span className="w-0.5 bg-flag animate-pulse h-2.5" />
                      </div>
                    </div>
                    <div className="mt-1 truncate font-mono text-[11px] font-bold">
                      {entry.track}
                    </div>
                    <div className="truncate font-mono text-[9px] text-paper/70">
                      {entry.artist}
                    </div>
                  </div>
                )}
              </div>

              {/* Entry Title */}
              <h3 className="font-display text-xl font-black uppercase tracking-tight text-ink sm:text-2xl">
                {entry.title}
              </h3>
            </div>

            {/* Entry Narrative */}
            <p className="mt-3 font-body text-sm leading-relaxed text-ink/85">
              {entry.narrative}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}