import cloud from "../assets/images/cloud.png";          // optional
import leave from "../assets/images/leave.png";          // optional
import portfolio from "../assets/images/portfolio.png";  // optional
import gemini from "../assets/images/gemini.png";        // optional

export const projects = [
  {
    title: "Cloud Control",
    description:
      "Multi-cloud management SaaS dashboard to monitor and manage cloud resources from a single platform. Includes secure authentication and role-based access; backend APIs are under development.",
    tech: ["React", "Tailwind CSS", "SaaS", "Cloud"],
    image: cloud,
    github: "https://github.com/Aakashjadhav794/Cloud-Control",
    live: "https://cloud-control-six.vercel.app/"
  },
  {
    title: "Employee Leave Management System",
    description:
      "Modular full-stack MERN application built following SDLC practices. Features REST APIs, authentication, role-based access, and database operations with microservices-aligned design.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: leave,
    github: "https://github.com/Aakashjadhav794/Employees-Leave-Management-System",
    live: "#"
  },
  // {
  //   title: "Personal Portfolio",
  //   description:
  //     "Responsive personal portfolio built using HTML and CSS, showcasing web development skills and modern UI design principles.",
  //   tech: ["HTML", "CSS"],
  //   image: portfolio,
  //   github: "https://github.com/Aakashjadhav794/Portfolio",
  //   live: "https://portfolio-f7o8.vercel.app/"
  // },
  {
    title: "Google Gemini AI Clone",
    description:
      "AI-powered Gemini clone built with React and Vite, simulating real-time intelligent conversations with clean architecture and optimized performance.",
    tech: ["React", "Vite", "AI APIs"],
    image: gemini,
    github: "https://github.com/Aakashjadhav794/Gemini-Clone",
    live: "#"
  }
];
