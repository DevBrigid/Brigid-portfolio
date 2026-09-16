import Masterhead from "../components/Masterhead";
import Footer from "../components/Footer";

const CERTIFICATES = [
  {
    id: "CERT // 01",
    code: "CCNAV7-NET-01",
    issuer: "CISCO NETWORKING ACADEMY",
    date: "APRIL 2023",
    title: "CCNAv7: Introduction to Networks",
    tag: "VERIFIED CREDENTIAL",
    summary:
      "Architecture, models, protocols, and networking elements connecting users, devices, applications, and data across IPv4 and IPv6 networks, covering Ethernet switching, IP addressing, and router/switch configurations.",
    skills: [
      "IPv4 / IPv6 Subnetting",
      "Ethernet Switching",
      "Routing Logic",
      "Network Protocols",
      "Packet Tracer",
    ],
    fileUrl:
      "/CCNA-_Introduction_to_Networks_certificate_muriithi-mukami22-students-dkut-ac-ke_723acbf4-f23c-4d7a-8694-9594e4052292.pdf",
  },
  {
    id: "CERT // 02",
    code: "CISCO-PT-02",
    issuer: "CISCO NETWORKING ACADEMY",
    date: "JANUARY 2024",
    title: "Getting Started with Cisco Packet Tracer",
    tag: "VERIFIED CREDENTIAL",
    summary:
      "Practical simulation environments, network topology creation, device interconnectivity, packet traversal diagnostics, and real-time traffic analysis using Cisco Packet Tracer.",
    skills: [
      "Packet Tracer Modeling",
      "Network Topologies",
      "Traffic Diagnostics",
      "Device Interconnects",
      "Simulation Testing",
    ],
    fileUrl:
      "/Getting_Started_with_Cisco_Packet_Tracer_certificate_muriithi-mukami22-students-dkut-ac-ke_5ef41c24-46ce-4072-b420-e5dd40b232c9.pdf",
  },
];

const SKILL_SECTORS = [
  {
    category: "FRONTEND & MOBILE",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Flutter",
      "HTML",
      "CSS",
      "Responsive UI",
    ],
  },
  {
    category: "BACKEND & APIS",
    items: ["Python", "Node.js", "RESTful API", "JSON"],
  },
  {
    category: "DATABASES & ORMS",
    items: ["PostgreSQL", "MySQL", "Oracle", "SQL"],
  },
  {
    category: "DATA & ENTERPRISE SYSTEMS",
    items: [
      "Power BI",
      "Microsoft Dynamics 365",
      "Power Query",
      "Data Cleaning Pipelines",
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-flag selection:text-ink">
      <Masterhead
        status="Open to Software Engineer Roles"
        dispatchTag="DOSSIER // CREDENTIALS & RECORD"
      />

      <main>
        {/* Editorial Header */}
        <section className="border-b-4 border-ink bg-paper px-6 py-10 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-signal">
              // DOSSIER RECORD 03
            </div>
            <h1 className="font-display text-5xl font-black uppercase tracking-tight text-ink sm:text-7xl">
              Background <span className="text-signal">&</span> Credentials
            </h1>
            <p className="mt-3 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
              Software engineering graduate with hands-on experience building full-stack web applications,
              designing relational databases, and automating operational reporting pipelines.
            </p>
          </div>
        </section>

        {/* Education & Academic Record // Wire Blue Live Block */}
        <section className="border-b-4 border-ink bg-paper px-6 py-10 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-wire">
              // ACADEMIC DOSSIER // VERIFIED DISPATCH
            </div>

            <h2 className="mb-8 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-5xl">
              Education <span className="text-wire">&</span> Foundation
            </h2>

            {/* Wire Blue Broadcast Box */}
            <div className="border-4 border-ink bg-wire p-6 text-paper shadow-[8px_8px_0px_0px_var(--color-ink)] sm:p-10">
              {/* Telemetry Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-paper/40 pb-4 font-mono text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper opacity-80" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-paper" />
                  </span>
                  <span className="bg-ink px-2 py-0.5 font-bold uppercase tracking-wider text-flag">
                    CONFERRED ACADEMIC RECORDS
                  </span>
                </div>
                <div className="font-bold tracking-wider text-paper/90">
                  NAIROBI & NYERI, KENYA
                </div>
              </div>

              {/* Dual Institution Layout */}
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:divide-x-2 md:divide-paper/30">
                {/* Moringa School */}
                <div className="md:pr-8">
                  <div className="flex items-center justify-between font-mono text-xs text-paper/80">
                    <span className="bg-ink px-2 py-0.5 font-bold text-flag">
                      SOFTWARE ENGINEERING
                    </span>
                    <span>FEB 2026 &mdash; AUG 2026</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-black uppercase text-paper sm:text-3xl">
                    Moringa School
                  </h3>
                  <p className="mt-1 font-mono text-xs text-paper/80">
                    Nairobi, Kenya
                  </p>
                  <p className="mt-3 font-body text-sm leading-relaxed text-paper/95">
                    Immersive, project-driven software engineering program covering modern full-stack development,
                    REST API architecture, test-driven development (pytest, Jest), and collaborative GitHub workflows.
                  </p>
                </div>

                {/* Dedan Kimathi University */}
                <div className="border-t-2 border-paper/30 pt-6 md:border-t-0 md:pl-8 md:pt-0">
                  <div className="flex items-center justify-between font-mono text-xs text-paper/80">
                    <span className="bg-ink px-2 py-0.5 font-bold text-flag">
                      BACHELOR&apos;S DEGREE
                    </span>
                    <span>SEP 2022 &mdash; JUN 2026</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-black uppercase text-paper sm:text-3xl">
                    Information Technology
                  </h3>
                  <p className="mt-1 font-mono text-xs text-paper/80">
                    Dedan Kimathi University of Technology &bull; Nyeri, Kenya
                  </p>
                  <p className="mt-3 font-body text-sm leading-relaxed text-paper/95">
                    Foundational degree encompassing network administration, database modeling, computer systems,
                    and core computing methodologies.
                  </p>
                </div>
              </div>

              {/* Skills / Coursework Strip */}
              <div className="mt-8 border-t-2 border-paper/30 pt-6">
                <span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-widest text-paper/80">
                  TECHNICAL FOUNDATION & METHODOLOGIES:
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-xs uppercase">
                  {[
                    "Full-Stack Web Development",
                    "RESTful API Engineering",
                    "Relational Database Design (SQL)",
                    "Data Structures & Algorithms",
                    "Test-Driven Development",
                    "Enterprise Network Fundamentals",
                  ].map((field) => (
                    <span
                      key={field}
                      className="border-2 border-paper bg-ink px-3 py-1 font-bold text-paper transition-transform hover:-translate-y-0.5"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Rail */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t-2 border-paper/40 pt-4 font-mono text-[11px] text-paper/80">
                <div>DISPATCH // VERIFIED ACADEMIC CREDENTIALS</div>
                <div className="bg-paper px-2 py-0.5 font-bold uppercase text-ink">
                  STATUS: GRADUATED & CONFERRED
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="border-b-4 border-ink bg-[#FAF7EE] px-6 py-10 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-signal">
              // FIELD EXPERIENCE // APPLIED WORK
            </div>
            <h2 className="mb-8 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-5xl">
              Work Experience
            </h2>

            <div className="border-4 border-ink bg-paper shadow-[6px_6px_0px_0px_var(--color-ink)]">
              <div className="grid grid-cols-1 gap-4 p-6 sm:p-8 md:grid-cols-12">
                <div className="font-mono md:col-span-4">
                  <span className="inline-block bg-ink px-2 py-0.5 text-xs font-bold text-paper">
                    FEB 2025 &mdash; APR 2025
                  </span>
                  <h4 className="mt-3 font-display text-xl font-black uppercase text-ink">
                    Agile Business Solutions Limited
                  </h4>
                  <div className="mt-1 text-xs text-ink/70">
                    Nairobi, Kenya
                  </div>
                  <div className="mt-4 inline-block border border-ink bg-flag px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink">
                    DATA ANALYST INTERN
                  </div>
                </div>

                <div className="border-t-2 border-ink pt-4 md:col-span-8 md:border-t-0 md:border-l-2 md:pl-6 md:pt-0">
                  <h3 className="font-display text-2xl font-black uppercase text-ink">
                    Junior Data Analyst Intern
                  </h3>

                  <ul className="mt-4 space-y-3 font-body text-base leading-relaxed text-ink/90">
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-signal">&gt;</span>
                      <span>
                        <strong className="text-ink">CRM/ERP Data Management in Dynamics 365:</strong> Managed, updated, and validated structured project and operational records within Microsoft Dynamics 365, ensuring high data accuracy and standardized metadata across system databases.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-signal">&gt;</span>
                      <span>
                        <strong className="text-ink">Power BI Dashboard Development:</strong> Integrated data streams from Microsoft Dynamics 365 and Excel into Power BI, designing interactive visual dashboards that streamlined tracking of key project metrics and reduced manual reporting time by 30%.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-signal">&gt;</span>
                      <span>
                        <strong className="text-ink">Data Cleaning & Automation:</strong> Automated data cleanup pipelines using Power Query and validation scripts, ensuring 100% dataset consistency before dashboard integration.
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase">
                    {[
                      "Microsoft Dynamics 365",
                      "Power BI",
                      "Power Query",
                      "Data Validation",
                      "Excel",
                    ].map((t) => (
                      <span
                        key={t}
                        className="border border-ink bg-[#FAF7EE] px-2.5 py-0.5 font-bold text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="border-b-4 border-ink bg-paper px-6 py-10 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-signal">
              // ACCREDITATION REGISTRY // NETWORKING & SYSTEMS
            </div>
            <h2 className="mb-8 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-5xl">
              Certifications <span className="text-signal">&</span> Credentials
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {CERTIFICATES.map((cert) => (
                <article
                  key={cert.code}
                  className="group flex flex-col justify-between border-4 border-ink bg-paper p-6 shadow-[6px_6px_0px_0px_var(--color-ink)] transition-transform hover:-translate-y-1 sm:p-8"
                >
                  <div>
                    {/* Top Meta Strip */}
                    <div className="mb-4 flex items-center justify-between border-b-2 border-ink pb-2 font-mono text-xs">
                      <span className="bg-ink px-2 py-0.5 font-bold text-paper">
                        {cert.id}
                      </span>
                      <span className="font-bold text-signal">
                        {cert.date}
                      </span>
                    </div>

                    <div className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink/60">
                      {cert.issuer}
                    </div>

                    <h3 className="mb-4 font-display text-2xl font-black uppercase tracking-tight text-ink sm:text-3xl">
                      {cert.title}
                    </h3>

                    {/* Live PDF Document Frame Container */}
                    <div className="group/frame relative mb-4 overflow-hidden border-2 border-ink bg-neutral-900">
                      <div className="absolute top-2.5 left-2.5 z-20 bg-ink px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-paper">
                        REF // {cert.code}
                      </div>

                      {/* PDF Preview Viewport */}
                      <div className="relative h-60 w-full overflow-hidden bg-neutral-200">
                        <object
                          data={`${cert.fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                          type="application/pdf"
                          className="pointer-events-none h-full w-full"
                          aria-label={cert.title}
                        >
                          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center font-mono">
                            <span className="text-xs font-bold text-ink">
                              OFFICIAL PDF CERTIFICATE
                            </span>
                            <span className="mt-1 text-[10px] text-ink/60">
                              {cert.title}
                            </span>
                          </div>
                        </object>
                      </div>

                      {/* Sub-Image Action & Verification Bar */}
                      <div className="flex items-center justify-between border-t-2 border-ink bg-[#FAF7EE] px-3 py-2 font-mono text-[11px]">
                        <span className="font-semibold text-ink/70">
                          CISCO ACCREDITATION
                        </span>
                        <a
                          href={cert.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-signal underline hover:text-ink"
                        >
                          Open Full PDF ↗
                        </a>
                      </div>
                    </div>

                    <p className="mb-5 font-body text-sm leading-relaxed text-ink/85 sm:text-base">
                      {cert.summary}
                    </p>

                    {/* Skill Chips */}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border border-ink bg-[#FAF7EE] px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-ink"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t-2 border-ink pt-3 font-mono text-[11px]">
                    <span className="font-semibold text-ink/60">
                      VERIFICATION: OFFICIAL
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Tooling Ledger */}
        <section className="border-b-4 border-ink bg-paper p-6 sm:p-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-signal">
              // CLASSIFIED DIRECTORY
            </div>
            <h2 className="mb-8 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-5xl">
              Technical Stack
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SKILL_SECTORS.map((sector) => (
                <div
                  key={sector.category}
                  className="border-2 border-ink bg-paper p-5 shadow-[4px_4px_0px_0px_var(--color-ink)]"
                >
                  <div className="mb-3 border-b-2 border-ink pb-2 font-mono text-xs font-bold uppercase tracking-wider text-signal">
                    {sector.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sector.items.map((item) => (
                      <span
                        key={item}
                        className="border border-ink bg-[#FAF7EE] px-2.5 py-1 font-mono text-xs font-semibold text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}