"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Proyectos", href: "#projects" },
    { name: "Sobre mí", href: "#about" },
  ];

  const GithubIcon = () => (
    <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://w3.org"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  );

  const LinkedinIcon = () => (
    <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://w3.org"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.778-.773 1.778-1.729V1.73C24 .774 23.206 0 22.222 0h.003z"/></svg>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? "py-3 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-xl" : "py-5 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center text-white">
        
        {/* LOGO - whitespace-nowrap evita que el nombre se parta en dos líneas */}
        <div className="flex items-center gap-2 group cursor-pointer z-[110]" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center font-black shadow-[0_0_15px_rgba(234,102,0,0.4)]">D</div>
          <span className="font-bold text-lg tracking-tighter whitespace-nowrap">DANIEL <span className="text-orange-500">DÍAZ</span></span>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{link.name}</a>
          ))}
        </div>

        {/* SOCIAL & CTA (Solo Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-4 pr-5 border-r border-white/10 text-gray-400">
            <a href="https://github.com/Danieldaviddf" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/danieldaviddf/" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors"><LinkedinIcon /></a>
          </div>
          <a href="#contact" className="px-5 py-2 bg-white text-black font-bold text-sm rounded-full hover:bg-orange-600 hover:text-white transition-all">Hablemos</a>
        </div>

        {/* MOBILE BUTTON - z-index alto para que siempre sea clicable */}
        <button className="md:hidden z-[110] p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU PANEL - z-index alto pero menor que el botón */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-[105] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-3xl font-bold text-white hover:text-orange-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-10 mt-10 text-gray-400">
            <a href="https://github.com/Danieldaviddf" target="_blank" rel="noreferrer"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/danieldaviddf/" target="_blank" rel="noreferrer"><LinkedinIcon /></a>
        </div>
        {/* Botón extra en móvil para que no se pierda el CTA */}
        <a 
          href="#contact" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 px-8 py-3 bg-orange-600 text-white font-bold rounded-full"
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}
