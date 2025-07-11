import "./App.css";
import { useState, useEffect } from "react";
import MainNavigation from "./components/layout/navigation/MainNavigation";
import Hero from "./components/layout/hero/Hero";
import About from "./components/layout/about/About";
import Experience from "./components/layout/experience/Experience";
import Projects from "./components/layout/projects/Projects";
import Footer from "./components/layout/footer/Footer";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <>
      <main>
        <MainNavigation />
        <Hero windowSize={windowSize} setWindowSize={setWindowSize} />
        <About />
        <Experience windowSize={windowSize} />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
