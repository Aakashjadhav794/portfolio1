import { useState, useRef, useEffect } from "react";
import heroImg from "../assets/images/logo.png";

const sections = ["about", "skills", "projects", "experience", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const navRef = useRef(null); // 👈 single ref

  // Close menu on outside click (FIXED)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto active on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.3,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `transition-all duration-300
     ${active === id ? "text-cyan-400 font-medium" : "text-gray-300"}
     hover:text-cyan-400`;

  return (
    <nav ref={navRef} className="fixed top-4 w-full z-50 flex justify-center px-4">
      <div
        className="flex items-center px-6 py-3
                   w-full max-w-5xl
                   justify-between
                   rounded-full
                   bg-white/5 backdrop-blur-xl
                   border border-white/10
                   shadow-lg"
      >
        {/* Logo */}
        <img src={heroImg} className="w-9 h-9 rounded-full" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={linkClass(item)}
              onClick={() => setActive(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            href="/Resume/AAKASH_S_JADHAV_MSC_IT.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-4 py-1.5 rounded-full
                       border border-cyan-400/40
                       text-cyan-300
                       hover:border-cyan-400
                       hover:bg-cyan-400/10
                       transition"
          >
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (NOW INSIDE ref) */}
      {open && (
        <div
          className="absolute top-20 w-[90%] max-w-sm
                     rounded-2xl
                     bg-white/5 backdrop-blur-xl
                     border border-white/10
                     shadow-xl
                     flex flex-col items-center gap-4 py-6
                     md:hidden"
        >
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
              className={`transition-all duration-300
                ${active === item ? "text-cyan-400" : "text-gray-300"}
                hover:text-cyan-400`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            href="/Resume/AAKASH_S_JADHAV_MSC_IT.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-5 py-2 rounded-full
                       border border-cyan-400/40
                       text-cyan-300
                       hover:border-cyan-400
                       hover:bg-cyan-400/10
                       transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
