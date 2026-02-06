import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex items-center justify-center
                 pt-28 pb-20 md:min-h-screen
                 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-center">
          Experience / Journey
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-3 md:left-1/2 top-0 h-full
                       w-px bg-white/20
                       md:-translate-x-40"
          ></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:-translate-x-40">
            {experience.map((item, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Duration */}
                <div className="md:text-right md:pr-8 text-center md:text-left">
                  <span className="text-sm text-muted">
                    {item.duration}
                  </span>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-3 md:left-1/2
                             w-3.5 h-3.5
                             bg-blue-500
                             rounded-full
                             -translate-x-1/2
                             shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                ></div>

                {/* Card */}
                <div
                  className="ml-6 md:ml-0
                             rounded-2xl
                             bg-white/5 backdrop-blur-2xl
                             border border-white/10
                             p-5
                             shadow-[0_6px_28px_rgba(0,0,0,0.32)]
                             transition-all duration-300
                             hover:border-blue-500
                             hover:shadow-[0_0_20px_rgba(59,130,246,0.55)]"
                >
                  <h3 className="text-base md:text-lg font-semibold mb-1">
                    {item.role}
                  </h3>

                  <p className="text-blue-400 text-sm mb-3">
                    {item.company}
                  </p>

                  <ul className="space-y-2 text-sm text-muted list-disc list-inside">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
