import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex items-center justify-center
                 pt-28 pb-20 md:min-h-screen
                 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Projects
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {projects.map((p, i) => (
            <div
              key={i}
              className="w-full max-w-sm
                         rounded-2xl
                         bg-white/5 backdrop-blur-2xl
                         border border-white/10
                         shadow-[0_6px_28px_rgba(0,0,0,0.32)]
                         transition-all duration-300
                         hover:border-blue-500
                         hover:shadow-[0_0_20px_rgba(59,130,246,0.55)]"
            >
              {/* Image */}
              {p.image && (
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-36 object-cover
                               transition-transform duration-300
                               hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold mb-2">
                  {p.title}
                </h3>

                <p className="text-muted text-sm mb-3 leading-relaxed line-clamp-3">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-full
                                 bg-white/10 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 text-sm rounded-md
                               border border-white/20
                               hover:border-blue-400 transition"
                  >
                    GitHub
                  </a>

                  {p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 text-sm rounded-md
                                 border border-blue-500
                                 text-blue-400
                                 hover:bg-blue-500/10 transition"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
