import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- TUS IMPORTACIONES DE IMÁGENES ---
import homeImg from "../assets/home.png";
import favoritosImg from "../assets/favoritos.png";
import imagenImg from "../assets/imagen.png";
import trailerImg from "../assets/trailer.png";

import agendarImg from "../assets/odontologia/agendarImg.png";
import calendarioImg from "../assets/odontologia/calendario-citas.png";
import dashboardImg from "../assets/odontologia/dashboard.png";
import home1Img from "../assets/odontologia/home-3.png";
import homecomentariosImg from "../assets/odontologia/home-comentarios.png";
import homeFotosImg from "../assets/odontologia/home-fotos.png";
import homeHorariosImg from "../assets/odontologia/home-horarios.png";
import loginImg from "../assets/odontologia/login.png";
import miscitasImg from "../assets/odontologia/mis-citas.png";
import presupuestoImg from "../assets/odontologia/presupuesto.png";
import tratamientosImg from "../assets/odontologia/tratamientos.png";

import inicioipa from "../assets/ipanema/inicioipa.png";
import horarioipa from "../assets/ipanema/horarioipa.png";
import historiaipa from "../assets/ipanema/historiaipa.png";
import contactoipa from "../assets/ipanema/contactoipa.png";

const projects = [
  {
    title: "VHSflix (Netflix de Trailers)",
    description:
      "Plataforma web inspirada en streaming con búsqueda de películas, consumo de API externa y una interfaz visual moderna.",
    tech: ["React", "Tailwind", "TMDB API", "Context API"],
    demo: "https://vhsflix-danieldaviddf.vercel.app/",
    code: "https://github.com/Danieldaviddf/Proyecto-Final",
    images: [homeImg, favoritosImg, imagenImg, trailerImg],
  },
  {
    title: "Panadería Ipanema",
    description:
      "Sitio web corporativo para una panadería tradicional en Segovia, enfocado en la experiencia visual y contacto directo.",
    tech: ["React", "Tailwind", "Responsive Design"],
    demo: "https://ipanema-panaderia.vercel.app/",
    code: "https://github.com/Danieldaviddf/Panaderia-Ipanema",
    images: [inicioipa, horarioipa, historiaipa, contactoipa],
  },
  {
    title: "Sistema Odontológico",
    description:
      "Sistema profesional para gestión de pacientes y citas. Incluye autenticación, panel administrativo y lógica de negocio real.",
    tech: ["React", "Supabase", "Tailwind", "React Router"],
    demo: "https://consultorio-odontologico-lac.vercel.app",
    code: "https://github.com/alexisrrh/consultorio-odontologico",
    images: [
      loginImg, dashboardImg, calendarioImg, agendarImg,
      miscitasImg, presupuestoImg, tratamientosImg, home1Img,
      homecomentariosImg, homeFotosImg, homeHorariosImg,
    ],
  },
];

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project.images?.length || project.images.length === 1) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0d0d0d]/40 backdrop-blur-sm p-4 transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_20px_50px_rgba(234,102,0,0.15)]"
    >
      <div className="relative h-64 md:h-72 overflow-hidden rounded-[2rem]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={project.images[currentImage]}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full object-cover object-top"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {project.images.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-300 rounded-full ${
                index === currentImage ? "w-6 bg-orange-500" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5 text-left">
        <h3 className="font-['Syne'] text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-400 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl bg-orange-600 py-3 text-center text-sm font-bold text-white transition-all hover:bg-orange-500 hover:shadow-[0_10px_20px_rgba(234,102,0,0.3)] active:scale-95"
          >
            Live Demo
          </a>

          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-white transition-all hover:bg-white/10 active:scale-95"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-transparent px-6 py-32">
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <header className="mb-20 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-4"
          >
            Selected Works
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-['Syne'] text-4xl font-black text-white md:text-6xl"
          >
            Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">Destacados</span>
          </motion.h2>
          <div className="mt-6 h-1 w-24 bg-orange-600 rounded-full" />
        </header>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-14">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
