import CodeRain from "./components/CodeRain";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase";
import Profiles from "./components/Profiles";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <CodeRain />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -1, background: "radial-gradient(ellipse at center, transparent 50%, rgba(5, 5, 7, 0.85) 100%)" }}
      />
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Showcase />
        <Experience />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
