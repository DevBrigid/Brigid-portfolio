import Masthead from "../components/Masterhead";
import Footer from "../components/Footer";

const CERTIFICATES = [
  {
    id: "CERT // 01",
    code: "CCNAV7-NET-01",
    issuer: "CISCO NETWORKING ACADEMY",
    date: "APRIL 2023", //[cite: 1]
    title: "CCNAv7: Introduction to Networks", //[cite: 1]
    tag: "VERIFIED CREDENTIAL",
    summary:
      "Architecture, models, protocols, and networking elements connecting users, devices, applications, and data across IPv4 and IPv6 networks, covering Ethernet switching, IP addressing, and router/switch configurations.",
    skills: ["IPv4 / IPv6 Subnetting", "Ethernet Switching", "Routing Logic", "Network Protocols", "Packet Tracer"],
    fileUrl: "/CCNA-_Introduction_to_Networks_certificate_muriithi-mukami22-students-dkut-ac-ke_723acbf4-f23c-4d7a-8694-9594e4052292.pdf",
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
    skills: ["Packet Tracer Modeling", "Network Topologies", "Traffic Diagnostics", "Device Interconnects", "Simulation Testing"],
    fileUrl: "/Getting_Started_with_Cisco_Packet_Tracer_certificate_muriithi-mukami22-students-dkut-ac-ke_5ef41c24-46ce-4072-b420-e5dd40b232c9.pdf",
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
    items: [
      "Python",
      "Node.js",
      "RESTful API",
      "JSON",
    ],
  },
  {
    category: "DATABASES & ORMS",
    items: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQL",
    ],
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
      <Masthead
        status="Open to Junior Software Engineer Roles"
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
              Information Technology graduate with hands-on experience building full-stack web applications,
              designing relational databases, and automating operational reporting pipelines.
            </p>
          </div>
        </section>

        {/* Narrative Dossier */}
        <section className="border-b-4 border-ink bg-paper">
          <div className="mx-auto grid max-w-5xl grid-cols-1 divide-ink md:grid-cols-12 md:divide-x-4">
            {/* Left Narrative Column */}
            <div className="p-6 sm:p-10 md:col-span-8">
              <div className="mb-4 inline-block bg-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-paper">
                THE DISPATCH // NARRATIVE
              </div>
              <h2 className="mb-6 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Breaking down challenging problems into clean, effective solutions.
              </h2>

              <div className="space-y-4 font-body text-base leading-relaxed text-ink/90 sm:text-lg">
                <p>
                  I’m a software engineering graduate with hands-on experience building full-stack web
                  applications using React, Node.js, and Python. My work spans responsive front-end
                  interfaces, documented REST API endpoints, and structured database design across PostgreSQL,
                  MySQL, and Oracle.
                </p>
                <p>
                  My engineering background is backed by practical enterprise experience: during my data analytics
                  internship at Agile Business Solutions, I managed CRM/ERP records in Microsoft Dynamics 365,
                  automated cleaning pipelines with Power Query, and built interactive Power BI reporting that reduced
                  manual reporting time by 30%.
                </p>
                <p>
                  Whether implementing JWT authentication workflows for platforms like KejaHunt, engineering object-oriented
                  data models for CLI tools like BugHive, or expanding into cross-platform mobile apps with Flutter,
                  I focus on writing readable, test-covered, and maintainable software.
                </p>
              </div>

              {/* Broadsheet Principle Box */}
              <div className="mt-8 border-2 border-ink bg-flag p-6 shadow-[4px_4px_0px_0px_var(--color-ink)]">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-ink/70">
                  // CORE PRINCIPLE
                </span>
                <p className="mt-1 font-display text-2xl font-black uppercase leading-tight text-ink sm:text-3xl">
                  "Build reliable software: clean domain boundaries, rigorous tests, and robust data integrity."
                </p>
              </div>
            </div>

            {/* Right Contact Meta Column */}
            <div className="flex flex-col justify-between border-t-4 border-ink bg-[#FAF7EE] p-6 sm:p-10 md:col-span-4 md:border-t-0">
              <div className="space-y-6">
                <div>
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-ink/60">
                    BASE STATION
                  </span>
                  <p className="font-display text-2xl font-black uppercase text-ink">
                    Nairobi, Kenya
                  </p>
                  <span className="font-mono text-xs text-ink/70">East Africa Time [UTC+3]</span>
                </div>

                <div className="border-t-2 border-ink/20 pt-4">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-ink/60">
                    DIRECT DISPATCH
                  </span>
                  <div className="mt-2 space-y-1 font-mono text-xs">
                    <div>
                      <span className="text-ink/60">EMAIL:</span>{" "}
                      <a
                        href="mailto:muriithibrigid@gmail.com"
                        className="font-bold text-signal underline hover:text-ink select-all break-all"
                      >
                        muriithibrigid@gmail.com ↗
                      </a>
                    </div>
                    <div>
                      <span className="text-ink/60">TEL:</span>{" "}
                      <a
                        href="tel:+254114999389"
                        className="font-bold text-ink underline hover:text-signal"
                      >
                        +254 114 999389
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-ink/20 pt-4">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-ink/60">
                    CODE REPOSITORIES
                  </span>
                  <div className="mt-2 flex gap-4 font-mono text-xs font-bold">
                    <a
                      href="https://github.com/DevBrigid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-signal"
                    >
                      GitHub ↗
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-signal"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-2 border-ink bg-ink p-4 font-mono text-xs text-paper">
                <span className="font-bold text-flag">STATUS:</span> Available for Software Engineering and Full-Stack roles.
              </div>
            </div>
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
                    <span>FEB 2026 — AUG 2026</span>
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
                <div className="md:pl-8 border-t-2 md:border-t-0 border-paper/30 pt-6 md:pt-0">
                  <div className="flex items-center justify-between font-mono text-xs text-paper/80">
                    <span className="bg-ink px-2 py-0.5 font-bold text-flag">
                      BACHELOR'S DEGREE
                    </span>
                    <span>SEP 2022 — JUN 2026</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-black uppercase text-paper sm:text-3xl">
                    Information Technology
                  </h3>
                  <p className="mt-1 font-mono text-xs text-paper/80">
                    Dedan Kimathi University of Technology • Nyeri, Kenya
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
                    FEB 2025 — APR 2025
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

                <div className="md:col-span-8 border-t-2 md:border-t-0 md:border-l-2 border-ink md:pl-6 pt-4 md:pt-0">
                  <h3 className="font-display text-2xl font-black uppercase text-ink">
                    Junior Data Analyst Intern
                  </h3>

                  <ul className="mt-4 space-y-3 font-body text-base text-ink/90 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-signal font-bold font-mono">›</span>
                      <span>
                        <strong className="text-ink">CRM/ERP Data Management in Dynamics 365:</strong> Managed, updated, and validated structured project and operational records within Microsoft Dynamics 365, ensuring high data accuracy and standardized metadata across system databases.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-signal font-bold font-mono">›</span>
                      <span>
                        <strong className="text-ink">Power BI Dashboard Development:</strong> Integrated data streams from Microsoft Dynamics 365 and Excel into Power BI, designing interactive visual dashboards that streamlined tracking of key project metrics and reduced manual reporting time by 30%.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-signal font-bold font-mono">›</span>
                      <span>
                        <strong className="text-ink">Data Cleaning & Automation:</strong> Automated data cleanup pipelines using Power Query and validation scripts, ensuring 100% dataset consistency before dashboard integration.
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase">
                    {["Microsoft Dynamics 365", "Power BI", "Power Query", "Data Validation", "Excel"].map((t) => (
                      <span key={t} className="border border-ink bg-[#FAF7EE] px-2.5 py-0.5 font-bold text-ink">
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
                            className="h-full w-full pointer-events-none"
                            aria-label={cert.title}
                            >
                            {/* Fallback if browser blocks iframe/object PDF preview */}
                            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center font-mono">
                                <span className="text-xs font-bold text-ink">OFFICIAL PDF CERTIFICATE</span>
                                <span className="mt-1 text-[10px] text-ink/60">{cert.title}</span>
                            </div>
                            </object>
                        </div>

                        {/* Sub-Image Action & Verification Bar */}
                        <div className="flex items-center justify-between border-t-2 border-ink bg-[#FAF7EE] px-3 py-2 font-mono text-[11px]">
                            <span className="font-semibold text-ink/70">CISCO ACCREDITATION</span>
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
                        <span className="text-ink/60 font-semibold">VERIFICATION: OFFICIAL</span>
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
              Technical Tooling & Stack
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