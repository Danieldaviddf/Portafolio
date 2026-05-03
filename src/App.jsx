import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    /* 1. Añadimos el color de fondo base a toda la aplicación */
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      
      {/* 2. LUCES DE AMBIENTE GLOBALES 
          Estas luces no pertenecen a ningún componente, flotan detrás de todos. */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Luz superior derecha */}
        <div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-orange-600/10 blur-[120px]" />
        
        {/* Luz central izquierda (para la zona de About/Projects) */}
        <div className="absolute top-[30%] left-[-10%] h-[800px] w-[800px] rounded-full bg-orange-500/5 blur-[150px]" />
        
        {/* Luz inferior derecha */}
        <div className="absolute bottom-[-10%] right-[0%] h-[700px] w-[700px] rounded-full bg-orange-700/10 blur-[130px]" />
      </div>

      {/* 3. CONTENIDO 
          Mantenemos el Navbar fijo y el resto del contenido con un z-index superior a las luces */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
