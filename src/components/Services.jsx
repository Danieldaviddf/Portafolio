import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Convertir diseños en interfaces",
    text: "Transformo ideas, referencias o diseños en páginas responsive con estructura clara, animaciones cuidadas y acabado profesional.",
    tags: ["React", "Tailwind", "Responsive"],
  },
  {
    number: "02",
    title: "Dar vida a proyectos con datos",
    text: "Integro APIs, productos, formularios, búsquedas, filtros y contenido dinámico para que una web deje de ser estática.",
    tags: ["APIs", "Fetch", "Estado"],
  },
  {
    number: "03",
    title: "Mejorar webs lentas o antiguas",
    text: "Modernizo la parte visual de sitios existentes, optimizando navegación, experiencia móvil, carga visual y percepción profesional.",
    tags: ["UX", "Performance", "Rediseño"],
  },
  {
    number: "04",
    title: "Construir flujos funcionales",
    text: "Creo pantallas conectadas entre sí: login, paneles, formularios, rutas protegidas, favoritos, dashboards y gestión de datos.",
    tags: ["Auth", "Rutas", "Supabase"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-transparent px-6 py-32 text-white"
    >
      {/* Eliminamos el gradiente local para usar el fondo global de App.jsx */}

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl"
        >
          <p className="text-xs font-black uppercase tracking-[0.4em] text-orange-500 mb-4">
            Qué puedo aportar
          </p>

          <h2 className="font-['Syne'] text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl">
            Soluciones frontend
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700">
              para problemas reales.
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-lg font-light leading-relaxed text-gray-400">
            No vendo una lista de tecnologías. Uso frontend para mejorar
            productos, crear experiencias claras y construir interfaces que
            funcionen en escenarios reales.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-orange-500/[0.04]"
            >
              {/* Efecto de resplandor naranja al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-800/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col md:flex-row gap-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 font-['Syne'] text-xl font-black text-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.15)] group-hover:scale-110 transition-transform">
                  {service.number}
                </div>

                <div>
                  <h3 className="font-['Syne'] text-2xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-gray-400 font-light">
                    {service.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xl border border-white/5 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-orange-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2.5rem] border border-orange-500/20 bg-orange-500/5 p-10 text-center backdrop-blur-2xl"
        >
          <p className="mx-auto max-w-3xl text-xl md:text-2xl font-['Syne'] font-bold leading-relaxed text-white">
            Mi objetivo es simple: crear frontend que se vea profesional, se
            entienda rápido y funcione bien desde el primer uso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
