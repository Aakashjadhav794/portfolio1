import heroImg from "../assets/images/pic.png";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center
                 pt-28 pb-20 md:min-h-screen
                 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617]"
    >
      <div
        className="max-w-6xl mx-auto px-6
                   grid md:grid-cols-2 gap-14 items-center"
      >

        {/* LEFT CONTENT */}
        <div>
          {/* Centered Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            About Me
          </h2>

          <p className="text-muted leading-relaxed max-w-xl indent-8 mb-4">
            I am a Full Stack Software Developer based in Pune, Maharashtra, with a
            passion for building scalable and maintainable software solutions.
            My expertise spans the entire development lifecycle, from designing
            database-driven architectures to deploying cloud-based applications.
          </p>

          <p className="text-muted leading-relaxed max-w-xl indent-8 mb-4">
            Currently, I serve as an Associate Software Engineer at Bajaj FinServ,
            where I focus on supporting production applications, system monitoring,
            and incident resolution within Linux environments. My professional
            journey includes significant experience as a Full Stack Web Developer
            at Technoweit, where I built responsive web applications using the
            MERN stack.
          </p>

          <p className="text-muted leading-relaxed max-w-xl indent-8">
            I am deeply committed to continuous improvement and high-quality
            software delivery, following secure coding practices and Agile
            methodologies, and transforming complex problems into user-friendly
            digital experiences.
          </p>
        </div>

        {/* RIGHT IMAGE + NAME */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div
              className="absolute inset-0 rounded-full
                         bg-blue-500/20 blur-2xl"
            ></div>

            <img
              src={heroImg}
              alt="Aakash Jadhav"
              className="relative w-56 md:w-72 rounded-full"
            />
          </div>

          {/* Name */}
          <h3 className="text-xl md:text-2xl font-semibold">
            Aakash Jadhav
          </h3>

          {/* Role */}
          <p className="text-muted text-sm md:text-base mt-1">
            Associate Software Engineer
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
