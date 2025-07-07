import "./App.css";
import Hero from "./components/layout/hero/Hero";
import About from "./components/layout/about/About";
import ExperienceSection from "./components/layout/experience/Experience";
import Projects from "./components/layout/projects/Projects";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
