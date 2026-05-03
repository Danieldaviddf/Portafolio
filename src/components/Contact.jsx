import { motion } from "framer-motion";

// 1. DEFINIMOS LOS ICONOS PRIMERO
function WhatsAppIcon() {
  return (
    <svg xmlns="http://w3.org" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
      <path d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.14.18 1.9 2.9 4.61 4.07.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.28.23-.64.23-1.18.16-1.28-.07-.11-.25-.18-.52-.32z" />
      <path d="M16.03 3.2C8.95 3.2 3.2 8.94 3.2 16.03c0 2.27.6 4.49 1.74 6.44L3 29l6.73-1.77a12.77 12.77 0 0 0 6.3 1.62h.01c7.08 0 12.83-5.75 12.83-12.83C28.86 8.95 23.11 3.2 16.03 3.2zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.99 1.05 1.06-3.89-.26-.4a10.56 10.56 0 0 1-1.62-5.58c0-5.84 4.76-10.6 10.61-10.6 2.83 0 5.48 1.1 7.48 3.1a10.5 10.5 0 0 1 3.11 7.49c0 5.85-4.76 10.61-10.59 10.61z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://w3.org" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 6.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8zm0 1.8A3.4 3.4 0 1 0 15.4 12 3.4 3.4 0 0 0 12 8.6z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://w3.org" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.22 1.83 1.22 1.08 1.82 2.82 1.29 3.5.98.11-.76.42-1.29.76-1.59-2.67-.3-5.47-1.32-5.47-5.86 0-1.29.47-2.35 1.22-3.18-.12-.3-.53-1.5.12-3.12 0 0 1-.31 3.3 1.21a11.6 11.6 0 0 1 6 0c2.29-1.52 3.29-1.21 3.29-1.21.66 1.62.25 2.82.13 3.12.76.83 1.22 1.89 1.22 3.18 0 4.55-2.8 5.56-5.48 5.85.43.37.81 1.09.81 2.21v3.28c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://w3.org" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}

// 2. COMPONENTE PRINCIPAL
export default function Contact() {
  return (
    <section id="contact" className="relative bg-transparent px-6 py-32">
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] border border-white/10 bg-[#0d0d0d]/40 p-8 md:p-20 text-center backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-orange-500 font-black mb-6"
          >
            Get in touch
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-['Syne'] text-4xl md:text-7xl font-black text-white leading-[1.1]"
          >
            ¿Hablamos de tu <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">Próxima Idea?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg md:text-xl font-light text-gray-400 leading-relaxed"
          >
            Si buscas un desarrollador que combine técnica y diseño premium, envíame un mensaje. Estoy disponible para nuevos proyectos y colaboraciones.
          </motion.p>

          <div className="mt-14 flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="https://wa.me/+34643804335"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(37,211,102,0.4)] active:scale-95"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:danieldaviddiazf@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white font-bold transition-all hover:scale-105 hover:-translate-y-1 hover:bg-white/10 active:scale-95"
            >
              <MailIcon />
              <span>Email</span>
            </a>

            <a
              href="https://www.instagram.com/danieldaviddf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(238,42,123,0.4)] active:scale-95"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>

            <a
              href="https://github.com/Danieldaviddf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white font-bold transition-all hover:scale-105 hover:-translate-y-1 hover:bg-white/10 active:scale-95"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5">
             <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">
               Respondo en menos de 24 horas
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
