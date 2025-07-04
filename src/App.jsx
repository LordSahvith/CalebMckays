import "./App.css";
import Hero from "./components/layout/hero/Hero";
import About from "./components/layout/about/About";
import Projects from "./components/layout/projects/Projects";

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
