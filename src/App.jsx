import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-200 selection:text-black relative'>
      {/* Fullscreen background */}
      <div className='fixed top-0 left-0 w-full h-full -z-10'>
        {/* Radial gradient background */}
        <div className="w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className='container mx-auto px-8 relative'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects/>
      </div>
    </div>
  );
};

export default App;
