import giticon from "../assets/icons/githuicon.png";
import linkedinicon from "../assets/icons/linkedin.png";
import emailicon from "../assets/icons/email.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center
                 pt-28 pb-20 md:min-h-screen
                 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* SECTION HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-center">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Get In Touch
            </h3>

            <p className="text-muted max-w-md mb-8">
              Get in touch for freelance opportunities, collaborations,
              or any questions. I’m always open to discussing new ideas
              and projects.
            </p>

            <div className="space-y-4 text-sm">

              {/* Email */}
              <a
                href="mailto:aakashjadhav8975@gmail.com"
                className="flex items-center gap-4
               text-gray-300
               transition-all duration-300
               hover:text-blue-400
               hover:translate-x-1"
              >
                <img
                  src={emailicon}
                  alt="Email"
                  className="w-5 h-5 transition-transform duration-300
                 group-hover:scale-110"
                />
                <span className="hover:underline underline-offset-4">
                  aakashjadhav8975@gmail.com
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Aakashjadhav794"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4
               text-gray-300
               transition-all duration-300
               hover:text-blue-400
               hover:translate-x-1"
              >
                <img src={giticon} alt="GitHub" className="w-5 h-5" />
                <span className="hover:underline underline-offset-4">
                  github.com/Aakashjadhav794
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/aakashjadhav792"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4
               text-gray-300
               transition-all duration-300
               hover:text-blue-400
               hover:translate-x-1"
              >
                <img src={linkedinicon} alt="LinkedIn" className="w-5 h-5" />
                <span className="hover:underline underline-offset-4">
                  linkedin.com/aakashjadhav792
                </span>
              </a>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div
            className="rounded-2xl
                       bg-white/5 backdrop-blur-2xl
                       border border-white/10
                       p-6
                       shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg
                           bg-white/5 border border-white/10
                           text-white placeholder-gray-400
                           focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg
                           bg-white/5 border border-white/10
                           text-white placeholder-gray-400
                           focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg
                           bg-white/5 border border-white/10
                           text-white placeholder-gray-400
                           focus:outline-none focus:border-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-3 rounded-lg
                           bg-white/5 border border-white/10
                           text-white placeholder-gray-400
                           focus:outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-lg
                           bg-gradient-to-r from-blue-500 to-cyan-500
                           text-white font-medium
                           hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
