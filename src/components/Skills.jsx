import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center
                 pt-28 pb-20 md:min-h-screen
                 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <div
              key={i}
              className="rounded-2xl p-5
                         backdrop-blur-2xl
                        bg-white/5 backdrop-blur-2xl
                         border border-white/10
                         shadow-[0_6px_24px_rgba(0,0,0,0.3)]
                         transition-all duration-300
                         hover:border-blue-500
                         hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              <h3 className="text-base font-semibold mb-5 text-center">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2
                               text-gray-300
                               hover:text-white
                               transition"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-9 h-9"
                    />
                    <span className="text-xs">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
