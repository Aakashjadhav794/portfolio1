const Hero = () => {
  return (
    <section
      className="flex items-center justify-center
                 pt-28 pb-20 md:min-h-screen
                 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617]"
    >
      <div className="text-center px-6">

        <p className="text-muted text-base md:text-3xl mb-3 tracking-wide">
          Aakash Jadhav
        </p>

        <h1
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight
                     bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
                     bg-clip-text text-transparent"
        >
          Frontend / Full-Stack <br /> Developer
        </h1>

        <p className="text-muted max-w-2xl mx-auto mb-10">
          Building scalable, user-centric web applications with modern
          technologies and cloud solutions.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-2 rounded-lg font-medium
                       bg-gradient-to-r from-cyan-500 to-blue-600
                       text-white hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="/Resume/AAKASH_S_JADHAV_MSC_IT.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-lg font-medium
             border border-[#1F2933] text-white
             hover:border-[#2563EB] transition"
          >
            View Resume
          </a>


        </div>

      </div>
    </section>
  );
};

export default Hero;
