import "./App.css";
import { useState, useEffect } from "react";
import MainNavigation from "./components/layout/navigation/MainNavigation";
import Hero from "./components/layout/hero/Hero";
import About from "./components/layout/about/About";
import Experience from "./components/layout/experience/Experience";
import Projects from "./components/layout/projects/Projects";
import Contact from "./components/layout/contact/Contact";
import Footer from "./components/layout/footer/Footer";
import ContactModal from "./components/layout/contact/ContactModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = function () {
    setIsModalOpen(true);
  };

  return (
    <>
      <MainNavigation />
      <main>
        <Hero windowSize={windowSize} setWindowSize={setWindowSize} />
        <About modalAction={toggleModal} />
        <Experience windowSize={windowSize} />
        <Projects />
        <Contact modalAction={toggleModal} />
        <ContactModal shouldOpen={isModalOpen} setShouldOpen={setIsModalOpen} />
      </main>
      <Footer />
    </>
  );
}

export default App;
