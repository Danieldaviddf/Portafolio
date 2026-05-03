import { motion } from "framer-motion";
import miFoto from "../assets/fotoDaniel.jpeg";

export default function About() {
  return (
    <section id="about" className="relative bg-transparent px-6 py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        
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

        {/* CONTENIDO PRINCIPAL - Grid de 2 columnas que se adapta */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] items-start">
          
          {/* LADO IZQUIERDO: FOTO ESTILIZADA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group mx-auto lg:mx-0 w-full max-w-[400px]"
          >
            {/* Adorno de fondo (Brillo naranja detrás de la foto) */}
            <div className="absolute -inset-4 bg-orange-600/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative overflow-hidden rounded-[3rem] border-2 border-white/10 p-2 bg-[#0d0d0d]/40 backdrop-blur-sm">
              <img 
                src={miFoto} // <--- Pon tu foto aquí
                alt="Daniel Díaz" 
                className="w-full h-[450px] object-cover rounded-[2.5rem] grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Badge flotante sobre la foto */}
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white font-bold px-6 py-3 rounded-2xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform">
              <p className="text-xs uppercase tracking-widest">Open to work</p>
            </div>
          </motion.div>

          {/* LADO DERECHO: TEXTO Y VALORES */}
          <div className="flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="font-['Syne'] text-3xl font-bold text-white mb-6">
                Desarrollo con Enfoque <br className="hidden md:block" /> Práctico y <span className="text-orange-500">Visual</span>
              </h3>

              <div className="space-y-6 text-lg font-light leading-relaxed text-gray-400">
                 <p>
                    Como <b className="text-white font-medium">desarrollador Frontend</b>, mi enfoque principal es transformar requisitos complejos en interfaces intuitivas. No solo construyo sitios web; diseño ecosistemas digitales basados en la tríada de <span className="text-orange-400 font-medium">Precisión Visual, Código Escalable y UX</span>.
                  </p>
                  <p>
                    Mi objetivo es entregar software que no solo cumpla con los estándares técnicos, sino que <span className="text-orange-200/80 italic font-medium">optimice procesos y genere confianza</span> desde el primer clic.
                  </p>
              </div>
            </motion.div>

            {/* CARDS DE VALOR (Pequeñas debajo del texto) */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              {[
                { 
                  title: "Diseño Moderno", 
                  desc: "Interfaces limpias, visuales y adaptadas a móvil.",
                  num: "01"
                },
                { 
                  title: "Lógica Real", 
                  desc: "Consumo de APIs y flujos de usuario eficientes.",
                  num: "02"
                }
              ].map((item) => (
                <div 
                  key={item.num}
                  className="group p-6 rounded-[2rem] border border-white/5 bg-[#0d0d0d]/40 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-xl font-black text-orange-600/40 group-hover:text-orange-500 transition-colors font-['Syne']">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-bold text-white uppercase text-[10px] tracking-widest mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
