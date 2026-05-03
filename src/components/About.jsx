import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-transparent px-6 py-32">
      {/* Eliminamos el div de la luz local y el overflow-hidden para que el brillo de App.jsx fluya */}

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* ENCABEZADO */}
        <header className="mb-20 flex flex-col items-center text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-4"
          >
            My Story
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-['Syne'] text-4xl font-black text-white md:text-6xl"
          >
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">Mí</span>
          </motion.h2>
          <div className="mt-6 h-1 w-24 bg-orange-600 rounded-full" />
        </header>

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* LADO IZQUIERDO: TEXTO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="font-['Syne'] text-3xl font-bold text-white mb-6">
              Desarrollo con Enfoque <br /> Práctico y <span className="text-orange-500">Visual</span>
            </h3>

            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-400">
               <p>
                  Como desarrollador <b className="text-white font-medium">Frontend Architect</b>, mi enfoque principal es transformar requisitos complejos en interfaces intuitivas y de alto rendimiento. No solo construyo sitios web; diseño ecosistemas digitales basados en la tríada de <span className="text-orange-400 font-medium">Precisión Visual, Código Escalable y Experiencia de Usuario</span>.
                </p>

                <p>
                  Mi experiencia abarca desde el desarrollo de plataformas de streaming con <b className="text-white font-medium">consumo de APIs en tiempo real</b> hasta la arquitectura de sistemas de gestión profesional con <b className="text-white font-medium">autenticación y manejo de bases de datos</b>. Utilizo <b className="text-white font-medium">React y Tailwind</b> para garantizar soluciones que son, por definición, rápidas, seguras y adaptables a cualquier dispositivo.
                </p>
                
                <p>
                  Mi objetivo es entregar software que no solo cumpla con los estándares técnicos, sino que <span className="text-orange-200/80 italic font-medium underline decoration-orange-500/30">optimice procesos y genere confianza</span> desde el primer clic.
                </p>
            </div>
          </motion.div>

          {/* LADO DERECHO: CARDS DE VALOR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {[
              { 
                title: "Diseño Moderno", 
                desc: "Interfaces limpias, visuales y adaptadas a móvil.",
                num: "01"
              },
              { 
                title: "Lógica Real", 
                desc: "Consumo de APIs, autenticación y flujos de usuario eficientes.",
                num: "02"
              },
              { 
                title: "Orientado a Negocio", 
                desc: "Soluciones pensadas para gestionar datos y ofrecer resultados profesionales.",
                num: "03"
              }
            ].map((item) => (
              <div 
                key={item.num}
                className="group p-6 rounded-[2rem] border border-white/5 bg-[#0d0d0d]/40 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:translate-x-2"
              >
                <div className="flex items-start gap-5">
                  <span className="text-2xl font-black text-orange-600/40 group-hover:text-orange-500 transition-colors font-['Syne']">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
