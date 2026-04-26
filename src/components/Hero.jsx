export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center">

      {/* fondo efecto */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.2),transparent_70%),radial-gradient(circle_at_bottom,rgba(255,100,0,0.15),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto">

        <p className="text-orange-400 uppercase text-sm tracking-widest">
          Full Stack Developer
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
          Desarrollo páginas web y{" "}
          <span className="text-orange-500">experiencias digitales</span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Creo interfaces atractivas con <span className="text-white font-bold">React</span>, 
          desarrollo lógica robusta con <span className="text-white font-bold">Python</span> y 
          gestiono datos en <span className="text-white font-bold">SQL</span>, 
          ofreciendo soluciones adaptadas a negocios reales.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

          <a
            href="#projects"
            className="bg-orange-600 hover:bg-orange-400 px-6 py-3 rounded-xl font-semibold transition tap-highlight-transparent"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl"
          >
            Contactar
          </a>

        </div>

      </div>
    </section>
  );
}