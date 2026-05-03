import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Proyectos", href: "#projects" },
    { name: "Sobre mí", href: "#about" },
    { name: "Contacto", href: "#contact" }
  ];

  return (
    <footer className="relative z-10 bg-transparent pt-24 pb-12 px-6">
      {/* Línea divisoria superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-16">
          
          {/* BLOQUE 1: BRANDING */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-[0_10px_25px_rgba(234,102,0,0.3)] transition-transform duration-500 group-hover:rotate-6">
                D
              </div>
              <div>
                <h3 className="font-['Syne'] text-2xl font-black text-white leading-none">
                  DANIEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">DÍAZ</span>
                </h3>
                <p className="text-[9px] uppercase tracking-[0.4em] text-orange-500/60 font-bold mt-1">
                  Full Stack Architect
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed text-center md:text-left max-w-[280px]">
              Especializado en crear soluciones digitales de alto impacto con un enfoque en diseño premium y rendimiento.
            </p>
          </div>

          {/* BLOQUE 2: NAVEGACIÓN */}
          <div className="flex flex-col items-center">
            <h4 className="font-['Syne'] text-white font-bold uppercase text-xs tracking-[0.3em] mb-8">Navegación</h4>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BLOQUE 3: SOCIALES */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-['Syne'] text-white font-bold uppercase text-xs tracking-[0.3em] mb-8">Presencia</h4>
            <div className="flex flex-col gap-4 w-full max-w-[200px]">
              <a 
                href="https://github.com/Danieldaviddf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/5 border border-white/5 px-6 py-3 rounded-2xl hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-500"
              >
                <span className="text-gray-400 group-hover:text-white text-xs font-bold transition-colors">GITHUB</span>
                <span className="text-orange-500 group-hover:translate-x-1 transition-transform">↗</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/danieldaviddf/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/5 border border-white/5 px-6 py-3 rounded-2xl hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-500"
              >
                <span className="text-gray-400 group-hover:text-white text-xs font-bold transition-colors">LINKEDIN</span>
                <span className="text-orange-500 group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
              © {currentYear} DANIEL DAVID DÍAZ FLORES
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-gray-800" />
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest text-orange-500/40">
              Segovia, España
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-pulse" />
            <p className="text-[10px] text-orange-500/80 font-black uppercase tracking-widest">
              Disponible para nuevos retos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
