"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Usamos un umbral pequeño para que la transición sea rápida
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Proyectos", href: "#projects" },
    { name: "Sobre mí", href: "#about" },
  ];

  const GithubIcon = () => (
    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://w3.org"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  );

  const LinkedinIcon = () => (
    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://w3.org"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.778-.773 1.778-1.729V1.73C24 .774 23.206 0 22.222 0h.003z"/></svg>
  );

  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-20 z-[1000]">
      {/* CAPA DE FONDO: Esta es la que cambia suavemente sin mover los textos */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled 
        ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 shadow-lg" 
        : "bg-transparent"
      }`} />

      <div className="relative h-full max-w-7xl mx-auto px-5 flex justify-between items-center text-white">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          {/* Caja del Logo */}
          <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center font-mono font-black text-sm text-white shadow-[0_0_15px_rgba(234,102,0,0.4)] transition-all duration-300 group-hover:scale-105">
            &lt;D/&gt;
          </div>
          {/* Nombre */}
          <span className="font-bold text-lg tracking-tighter whitespace-nowrap">
            DANIEL <span className="text-orange-500 font-black transition-colors duration-300 group-hover:text-orange-400">DÍAZ</span>
          </span>
        </div>


        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{link.name}</a>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-6 border-l border-white/10">
            <a href="https://github.com/Danieldaviddf" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/danieldaviddf/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors"><LinkedinIcon /></a>
            <a href="#contact" className="px-5 py-2 bg-white text-black font-bold text-xs rounded-full hover:bg-orange-600 hover:text-white transition-all uppercase tracking-widest">Hablemos</a>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button 
          className="md:hidden p-2 active:scale-95 transition-transform" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <div className={`fixed inset-0 w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out md:hidden ${
        isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`} style={{ zIndex: 1001 }}>
        
        {/* Cerramos menú al hacer clic en un link */}
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-3xl font-bold text-white active:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex gap-12 text-gray-400">
            <a href="https://github.com/Danieldaviddf" target="_blank" rel="noreferrer"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/danieldaviddf/" target="_blank" rel="noreferrer"><LinkedinIcon /></a>
        </div>
        
        <a 
          href="#contact" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="px-10 py-4 bg-orange-600 text-white font-bold rounded-full text-lg active:scale-95"
        >
          Hablemos ahora
        </a>

        {/* Botón X dentro del menú para cerrar */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-5 right-5 p-2 text-white"
        >
          <X size={32} />
        </button>
      </div>
    </nav>
  );
}
