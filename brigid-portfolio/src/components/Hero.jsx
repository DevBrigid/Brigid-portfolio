function Hero({ project }) {
  return (
    <section className="border-b-4 border-ink bg-paper px-6 py-10">
      <span className="bg-signal px-2 py-1 text-xs font-mono uppercase text-paper">
        {project.status}
      </span>

      <h2 className="mt-4 font-display text-5xl uppercase leading-none text-ink sm:text-7xl">
        {project.title}
      </h2>

      <p className="mt-4 max-w-measure font-body text-lg text-ink/80">
        {project.desc}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2 text-xs font-mono uppercase text-ink/60">
        {project.stack.map((tech) => (
          <li key={tech} className="border border-rule px-2 py-1">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-signal px-4 py-2 text-sm font-semibold uppercase text-paper hover:bg-ink"
          >
            View live
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-ink px-4 py-2 text-sm font-semibold uppercase text-ink hover:bg-ink hover:text-paper"
          >
            View code
          </a>
        )}
      </div>
    </section>
  );
}

export default Hero;