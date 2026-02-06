import { certifications } from "../data/certifications";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex items-center justify-center
                 pt-28 pb-20 md:min-h-screen
                 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Certifications
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="w-full max-w-sm
                         rounded-2xl
                         bg-white/5 backdrop-blur-2xl
                         border border-white/10
                         shadow-[0_6px_28px_rgba(0,0,0,0.32)]
                         transition-all duration-300
                         hover:border-blue-500
                         hover:shadow-[0_0_20px_rgba(59,130,246,0.55)]"
            >
              <div className="p-5">
                <h3 className="text-base font-semibold mb-2">
                  {cert.title}
                </h3>

                <p className="text-muted text-sm mb-1">
                  {cert.provider}
                </p>

                <p className="text-muted text-xs mb-4">
                  {cert.year}
                </p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm
                               text-blue-400
                               hover:text-blue-300 transition"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
