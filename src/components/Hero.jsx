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

    // --- PARCHE TÉCNICO PARA NITIDEZ (IPHONE/RETINA) ---
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    // --- TUS PARÁMETROS ORIGINALES ---
    const isMobile = window.innerWidth < 768;
    const particles = Array.from({ length: isMobile ? 70 : 200 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 3 + 2.5,
      vx: (Math.random() - 0.5) * 0.001,
      vy: (Math.random() - 0.5) * 0.001,
    }));

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

      // TU COLOR DE FONDO ORIGINAL
      ctx.fillStyle = "rgba(10, 5, 2, 0.25)"; 
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        let x = p.x * w;
        let y = p.y * h;

        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 210) {
          const force = (210 - dist) / 210;
          x -= dx * force * 0.35;
          y -= dy * force * 0.35;
        }

        // TU ESTILO DE GLOW ORIGINAL
        const glow = ctx.createRadialGradient(x, y, 0, x, y, p.r * 6);
        glow.addColorStop(0, "rgba(251, 146, 60, 0.9)");
        glow.addColorStop(0.5, "rgba(234, 88, 12, 0.4)");
        glow.addColorStop(1, "rgba(10, 5, 2, 0)");

        ctx.beginPath();
        ctx.arc(x, y, p.r * 2, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(x - q.x * w, y - q.y * h);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(q.x * w, q.y * h);
            // TU COLOR DE LÍNEA ORIGINAL
            ctx.strokeStyle = `rgba(251, 146, 60, ${0.28 - d / 400})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
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
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />

      {/* TU AURORA ORIGINAL */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(120deg,#0a0502,#1c0d02,#451a03,#9a3412,#7c2d12,#0a0502)] bg-[length:500%_500%] opacity-80"
      />

      {/* TU GRID ORIGINAL */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "130px 130px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#fb923c18_1px,transparent_1px),linear-gradient(to_bottom,#fb923c18_1px,transparent_1px)] bg-[size:130px_130px]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-[9px] font-black uppercase tracking-widest md:tracking-[0.4em] text-orange-200 shadow-[0_0_40px_rgba(249,115,22,0.2)] backdrop-blur whitespace-nowrap md:text-xs md:px-5">
              Frontend Developer · React · Available
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            className="font-['Syne'] text-6xl font-black leading-[0.85] tracking-tighter md:text-8xl xl:text-9xl"
          >
            DISEÑO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-500 to-orange-800 drop-shadow-[0_0_50px_rgba(249,115,22,0.4)]">FUTURO</span><br />
            EN LA WEB.
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-11 max-w-2xl text-lg font-light leading-8 text-orange-50/70 md:text-2xl lg:mx-0">
            Soy Daniel, desarrollador frontend. Creo interfaces modernas con <span className="font-semibold text-orange-200/90">React</span>, <span className="font-semibold text-white">Tailwind</span> y <span className="font-semibold text-white">APIs reales</span>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78, duration: 0.8 }} className="mt-14 flex flex-col justify-center gap-6 sm:flex-row lg:justify-start">
            <a href="#projects" className="group relative overflow-hidden rounded-[2rem] p-[2px] transition hover:-translate-y-2 hover:scale-[1.04] active:scale-95">
              <span className="absolute inset-0 rounded-[2rem] bg-[conic-gradient(from_180deg_at_50%_50%,#fb923c,#f97316,#ea580c,#fb923c)] opacity-90 blur-md transition group-hover:blur-lg" />
              <span className="relative flex items-center justify-center gap-4 rounded-[2rem] bg-[#0a0502] px-11 py-5 text-lg font-black text-white shadow-[0_0_80px_rgba(249,115,22,0.4)] transition group-hover:bg-[#120a05]">
                Ver proyectos
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-400 text-black transition group-hover:translate-x-1">→</span>
              </span>
            </a>

            <a href="#contact" className="group relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-white/5 px-11 py-5 text-lg font-black text-white shadow-[0_0_40px_rgba(234,88,12,0.15)] backdrop-blur-xl transition hover:-translate-y-2 hover:scale-[1.04] hover:border-orange-500/60 active:scale-95">
              <span className="relative flex items-center justify-center gap-4">Contacta<span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 transition group-hover:rotate-45 group-hover:border-orange-400">↗</span></span>
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
            {SKILLS.map((skill, index) => (
              <motion.span key={skill} animate={{ y: [0, -5, 0] }} transition={{ duration: 3 + index * 0.2, repeat: Infinity }} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold text-orange-50/85 backdrop-blur transition hover:border-orange-400/60">{skill}</motion.span>
            ))}
          </div>
        </div>

        {/* RECUADRO CÓDIGO (DERECHA) */}
        <motion.div initial={{ opacity: 0, scale: 0.86, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.5, duration: 1 }} className="relative hidden lg:block">
          <motion.div animate={{ y: [0, -22, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative overflow-hidden rounded-[3rem] border border-orange-500/20 bg-white/5 p-6 shadow-[0_35px_130px_rgba(234,88,12,0.2)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-600/10" />
            <div className="relative mb-5 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-orange-600/50" /><span className="h-3 w-3 rounded-full bg-orange-500/50" /><span className="h-3 w-3 rounded-full bg-orange-400/50" />
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
