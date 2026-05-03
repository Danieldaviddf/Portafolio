import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SKILLS = ["React", "Python", "SQL", "Tailwind", "Git", "Full Stack"];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf;
    let mouse = { x: -9999, y: -9999 };

    // --- FIX TÉCNICO IPHONE ---
    const dpr = window.devicePixelRatio || 1;
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 50 : 160;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: isMobile ? Math.random() * 1.5 + 1 : Math.random() * 2.5 + 2,
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const move = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchstart", move);

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      // Limpieza adaptada: más sólida en móvil para evitar manchas
      ctx.fillStyle = isMobile ? "#0a0502" : "rgba(10, 5, 2, 0.25)";
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        let x = p.x * w;
        let y = p.y * h;

        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const force = (120 - dist) / 120;
          x -= dx * force * 0.25;
          y -= dy * force * 0.25;
        }

        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);

        if (isMobile) {
            ctx.fillStyle = "rgba(251, 146, 60, 0.7)";
            ctx.fill();
        } else {
            const glow = ctx.createRadialGradient(x, y, 0, x, y, p.r * 6);
            glow.addColorStop(0, "rgba(251, 146, 60, 0.9)");
            glow.addColorStop(0.5, "rgba(234, 88, 12, 0.4)");
            glow.addColorStop(1, "rgba(10, 5, 2, 0)");
            ctx.fillStyle = glow;
            ctx.fill();
        }
      });
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchstart", move);
    };
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0502] px-6 py-28 text-white">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none z-0" />

      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(120deg,#0a0502,#1c0d02,#451a03,#9a3412,#0a0502)] bg-[length:400%_400%] opacity-60 md:opacity-80 z-0"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* IZQUIERDA: TEXTO */}
        <div className="text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-[9px] font-black uppercase tracking-widest md:tracking-[0.4em] text-orange-200 shadow-[0_0_40px_rgba(249,115,22,0.2)] backdrop-blur md:text-xs">
              Frontend Developer · React · Available
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="font-['Syne'] text-6xl font-black leading-[0.85] tracking-tighter md:text-8xl xl:text-9xl">
            DISEÑO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-500 to-orange-800">FUTURO</span><br />
            EN LA WEB.
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-11 max-w-2xl text-lg font-light leading-8 text-orange-50/70 md:text-2xl lg:mx-0">
            Soy Daniel, desarrollador frontend. Creo interfaces modernas con <span className="font-semibold text-orange-200/90">React</span>, <span className="font-semibold text-white">Tailwind</span> y <span className="font-semibold text-white">APIs reales</span>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-14 flex flex-col justify-center gap-6 sm:flex-row lg:justify-start">
            <a href="#projects" className="group relative overflow-hidden rounded-[2rem] p-[2px] transition hover:-translate-y-2 active:scale-95">
              <span className="absolute inset-0 rounded-[2rem] bg-[conic-gradient(from_180deg_at_50%_50%,#fb923c,#f97316,#ea580c,#fb923c)] opacity-90 blur-md transition group-hover:blur-lg" />
              <span className="relative flex items-center justify-center gap-4 rounded-[2rem] bg-[#0a0502] px-11 py-5 text-lg font-black text-white shadow-[0_0_80px_rgba(249,115,22,0.4)] transition group-hover:bg-[#120a05]">
                Ver proyectos
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-400 text-black">→</span>
              </span>
            </a>
            <a href="#contact" className="group relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-white/5 px-11 py-5 text-lg font-black text-white shadow-[0_0_40px_rgba(234,88,12,0.15)] backdrop-blur-xl transition hover:-translate-y-2 active:scale-95">
              Contactar
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
            {SKILLS.map((skill) => (
              <span key={skill} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold text-orange-50/85 backdrop-blur">{skill}</span>
            ))}
          </div>
        </div>

        {/* DERECHA: LA CARD QUE TE GUSTABA (RECUPERADA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.86, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative hidden lg:block"
        >
          <motion.div animate={{ y: [0, -22, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative overflow-hidden rounded-[3rem] border border-orange-500/20 bg-white/5 p-6 shadow-[0_35px_130px_rgba(234,88,12,0.2)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-600/10" />
            <div className="relative mb-5 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-orange-600/50" />
                <span className="h-3 w-3 rounded-full bg-orange-500/50" />
                <span className="h-3 w-3 rounded-full bg-orange-400/50" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-200/40">daniel.dev</span>
            </div>
            <div className="relative rounded-2xl border border-white/5 bg-[#0a0502]/80 p-7 text-left font-mono text-sm leading-relaxed">
              <p className="text-orange-300">const developer = {"{"}</p>
              <p className="ml-5 text-orange-100">name: <span className="text-orange-400">"Daniel"</span>,</p>
              <p className="ml-5 text-orange-100">role: <span className="text-orange-400">"Frontend Architect"</span>,</p>
              <p className="ml-5 text-orange-100">status: <span className="text-green-400">"available"</span>,</p>
              <p className="text-orange-300">{"}"}</p>
            </div>
            {/* LAS 3 CAJITAS DE STATS */}
            <div className="relative mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center">
                <p className="text-2xl font-black text-white">12+</p>
                <p className="text-[9px] uppercase tracking-tighter text-gray-500">Projects</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center">
                <p className="text-2xl font-black text-white">UI</p>
                <p className="text-[9px] uppercase tracking-tighter text-gray-400">Premium</p>
              </div>
              <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-center">
                <p className="text-2xl font-black text-orange-400">Open</p>
                <p className="text-[9px] uppercase tracking-tighter text-orange-200/50">To work</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
