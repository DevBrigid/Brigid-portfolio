// src/data/projectsData.js

export const PROJECTS = [
  {
    id: "PROJ-01",
    title: "Spacer Space Booking Platform",
    category: "Full-Stack Web",
    highlight: "FLAGSHIP BUILD",
    summary:
      "A complete workspace reservation and resource allocation platform. Coordinates meeting room availability, dynamic schedule calculations, and multi-tier role-based access control.",
    specs: [
      "FastAPI REST backend with Alembic database migrations",
      "PostgreSQL persistence layer with ACID transaction guarantees",
      "Strict JWT authorization isolation (Admin / Host / Client)",
    ],
    stack: ["FastAPI", "React", "PostgreSQL", "SQLAlchemy", "Alembic", "Tailwind CSS", "Render"],
    links: {
      live: "https://spacer-ef5u.onrender.com/docs",
      github: "https://github.com/DevBrigid/Spacer",
    },
    status: "PRODUCTION LIVE",
  },
  {
    id: "PROJ-02",
    title: "BugHive CLI Bug Tracking Engine",
    category: "Python / Systems",
    highlight: "SYSTEM ARCHITECTURE",
    summary:
      "An interactive command-line defect tracking system designed with strict object-oriented patterns, role-based developer workflows, gamified resolutions, and JSON persistence.",
    specs: [
      "Command architecture engineered with Python's Click framework",
      "Comprehensive test suite implementing pytest and mock fixtures",
      "Strict input validation layers for titles, severity, and status cycles",
    ],
    stack: ["Python 3", "Click CLI", "Pytest", "OOP Design", "JSON Storage"],
    links: {
      github: "https://github.com/DevBrigid",
    },
    status: "STABLE BUILD",
  },
  {
    id: "PROJ-03",
    title: "SaveStreak Savings & SMS Intelligence",
    category: "Mobile Architecture",
    highlight: "FINTECH PROTOTYPE",
    summary:
      "A mobile personal finance and streak tracking application built in React Native featuring automated SMS transaction parsing, gamified milestones, and conversational budgeting guidance.",
    specs: [
      "Custom regex and heuristic parsing engine for automated SMS data intake",
      "Gamified streak algorithms calculating habit retention and savings velocity",
      "Cross-platform responsive components built with Expo and TypeScript",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Tailwind CSS"],
    links: {
      github: "https://github.com/DevBrigid",
    },
    status: "ARCHIVED RESEARCH",
  },
  {
    id: "PROJ-04",
    title: "Emergency Department SimPy Simulator",
    category: "Python / Data Science",
    highlight: "DISCRETE SIMULATION",
    summary:
      "A computational discrete-event simulation modeling patient arrival distributions, triage priority queues, and resource contention in high-volume hospital emergency rooms.",
    specs: [
      "Built with SimPy using statistical Poisson arrival distributions",
      "Analyzes bed allocation bottlenecks and triage wait time standard deviations",
      "Generates Matplotlib performance visual reports for operations research",
    ],
    stack: ["Python", "SimPy", "NumPy", "Matplotlib"],
    links: {
      github: "https://github.com/DevBrigid",
    },
    status: "RESEARCH EXPERIMENT",
  },
];